import 'dotenv/config';
import { ApifyClient } from 'apify-client';
import { parse } from 'csv-parse/sync';
import { createObjectCsvWriter } from 'csv-writer';
import { readFileSync, existsSync } from 'fs';
import { resolve } from 'path';

const client = new ApifyClient({ token: process.env.APIFY_API_KEY });
const JOBS_PATH = resolve(import.meta.dirname, '../tracker/jobs.csv');
const COMPANIES_PATH = resolve(import.meta.dirname, '../tracker/companies.csv');

const JOB_HEADERS = [
  { id: 'title', title: 'title' },
  { id: 'company', title: 'company' },
  { id: 'location', title: 'location' },
  { id: 'role_type', title: 'role_type' },
  { id: 'salary', title: 'salary' },
  { id: 'source', title: 'source' },
  { id: 'url', title: 'url' },
  { id: 'date_posted', title: 'date_posted' },
  { id: 'date_scraped', title: 'date_scraped' },
  { id: 'status', title: 'status' },
  { id: 'notes', title: 'notes' },
];

function loadJobs() {
  const content = readFileSync(JOBS_PATH, 'utf-8');
  return parse(content, { columns: true, skip_empty_lines: true });
}

function loadCompanyEmails() {
  if (!existsSync(COMPANIES_PATH)) return new Map();
  const content = readFileSync(COMPANIES_PATH, 'utf-8');
  const companies = parse(content, { columns: true, skip_empty_lines: true });
  const map = new Map();
  for (const c of companies) {
    if (c.email) {
      map.set(c.company_name.toLowerCase().trim(), c.email);
    }
  }
  return map;
}

async function findWebsites(companyNames) {
  // Use Google Search to find company websites in batches
  const queries = companyNames.map((name) => ({
    term: `"${name}" Malaysia email contact`,
    countryCode: 'my',
    languageCode: 'en',
  }));

  const BATCH = 50;
  const results = new Map();

  for (let i = 0; i < queries.length; i += BATCH) {
    const batch = queries.slice(i, i + BATCH);
    const batchNames = companyNames.slice(i, i + BATCH);
    console.log(`Google Search batch ${Math.floor(i / BATCH) + 1}: ${batch.length} companies...`);

    try {
      const run = await client.actor('apify/google-search-scraper').call({
        queries: batch.map((q) => q.term).join('\n'),
        maxPagesPerQuery: 1,
        resultsPerPage: 5,
        countryCode: 'my',
        languageCode: 'en',
      });

      const { items } = await client.dataset(run.defaultDatasetId).listItems();

      for (const item of items) {
        const query = item.searchQuery?.term || '';
        // Find matching company name
        const matchedName = batchNames.find((n) =>
          query.toLowerCase().includes(n.toLowerCase())
        );
        if (!matchedName) continue;

        // Extract emails from search results
        const emails = [];
        const websites = [];

        // Check organic results for emails and websites
        const organicResults = item.organicResults || [];
        for (const result of organicResults) {
          const text = `${result.title || ''} ${result.description || ''} ${result.url || ''}`;
          const foundEmails = text.match(/[\w.-]+@[\w.-]+\.\w{2,}/g) || [];
          emails.push(...foundEmails);

          // Get company website (skip job boards)
          const url = result.url || '';
          if (url && !isJobBoard(url)) {
            websites.push(url);
          }
        }

        // Filter out generic emails
        const validEmails = emails.filter((e) =>
          !e.includes('example.com') &&
          !e.includes('indeed.com') &&
          !e.includes('jobstreet.com') &&
          !e.includes('linkedin.com')
        );

        results.set(matchedName.toLowerCase(), {
          email: validEmails[0] || '',
          website: websites[0] || '',
        });
      }
    } catch (err) {
      console.error(`  Google Search batch failed: ${err.message}`);
    }
  }

  return results;
}

function isJobBoard(url) {
  const boards = ['indeed.com', 'jobstreet.com', 'linkedin.com', 'glassdoor.com', 'monster.com', 'jobsdb.com', 'ricebowl.my', 'maukerja.my'];
  return boards.some((b) => url.includes(b));
}

async function scrapeWebsiteEmails(websites) {
  // Use contact scraper on found websites
  const startUrls = websites.map((url) => ({ url }));
  const BATCH = 20;
  const results = new Map();

  for (let i = 0; i < startUrls.length; i += BATCH) {
    const batch = startUrls.slice(i, i + BATCH);
    console.log(`Contact scrape batch ${Math.floor(i / BATCH) + 1}: ${batch.length} websites...`);

    try {
      const run = await client.actor('vdrmota/contact-info-scraper').call({
        startUrls: batch,
        maxDepth: 2,
        maxRequestsPerStartUrl: 10,
        maxRequests: batch.length * 10,
      });

      const { items } = await client.dataset(run.defaultDatasetId).listItems();
      for (const item of items) {
        const domain = (item.domain || '').toLowerCase();
        const emails = item.emails || [];
        const phones = item.phones || [];

        if (emails.length > 0) {
          results.set(domain, {
            email: emails[0],
            phone: phones[0] || '',
          });
        }
      }
    } catch (err) {
      console.error(`  Contact scrape batch failed: ${err.message}`);
    }
  }

  return results;
}

async function main() {
  console.log('=== Finding emails for job listing companies ===\n');

  const jobs = loadJobs();
  const existingEmails = loadCompanyEmails();

  // Get unique companies that need emails
  const companiesNeeding = [];
  const seen = new Set();
  for (const job of jobs) {
    const key = job.company.toLowerCase().trim();
    if (!key || seen.has(key)) continue;
    seen.add(key);
    if (!existingEmails.has(key) && !job.notes?.includes('Email:')) {
      companiesNeeding.push(job.company);
    }
  }

  const LIMIT = parseInt(process.env.EMAIL_LIMIT || '100', 10);
  const toProcess = companiesNeeding.slice(0, LIMIT);
  console.log(`Companies needing emails: ${companiesNeeding.length}`);
  console.log(`Processing this batch: ${toProcess.length} (limit: ${LIMIT})\n`);

  if (toProcess.length === 0) {
    console.log('All companies already have emails!');
    return;
  }

  // Step 1: Google Search to find websites + emails from snippets
  console.log('Step 1: Searching Google for company websites & emails...\n');
  const searchResults = await findWebsites(toProcess);
  console.log(`\nFound info for ${searchResults.size} companies from Google Search.`);

  // Collect emails found directly from search
  const emailMap = new Map(); // company (lowercase) -> email
  const websitesToScrape = []; // websites that didn't yield emails directly
  const websiteToCompany = new Map(); // domain -> company name

  for (const company of toProcess) {
    const key = company.toLowerCase();
    const result = searchResults.get(key);
    if (result?.email) {
      emailMap.set(key, result.email);
    } else if (result?.website) {
      websitesToScrape.push(result.website);
      try {
        const domain = new URL(result.website).hostname.replace('www.', '');
        websiteToCompany.set(domain, key);
      } catch (e) {}
    }
  }

  console.log(`\nDirect emails from search: ${emailMap.size}`);
  console.log(`Websites to scrape for emails: ${websitesToScrape.length}\n`);

  // Step 2: Scrape websites that didn't yield emails directly
  if (websitesToScrape.length > 0) {
    console.log('Step 2: Scraping websites for contact info...\n');
    const contactResults = await scrapeWebsiteEmails(websitesToScrape);
    console.log(`\nFound emails from ${contactResults.size} websites.`);

    for (const [domain, info] of contactResults) {
      const companyKey = websiteToCompany.get(domain);
      if (companyKey && !emailMap.has(companyKey)) {
        emailMap.set(companyKey, info.email);
      }
    }
  }

  // Step 3: Update jobs.csv
  console.log(`\nTotal emails found: ${emailMap.size}`);
  let updated = 0;
  for (const job of jobs) {
    const key = job.company.toLowerCase().trim();
    const email = emailMap.get(key);
    if (email && !job.notes?.includes('Email:')) {
      job.notes = job.notes ? `${job.notes} | Email: ${email}` : `Email: ${email}`;
      updated++;
    }
  }

  const writer = createObjectCsvWriter({ path: JOBS_PATH, header: JOB_HEADERS });
  await writer.writeRecords(jobs);
  console.log(`Updated ${updated} job entries with emails.`);
  console.log(`Remaining companies without emails: ${companiesNeeding.length - emailMap.size}`);
  console.log('\nRun again to process more companies.');
}

main().catch(console.error);
