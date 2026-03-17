import 'dotenv/config';
import { ApifyClient } from 'apify-client';
import { createObjectCsvWriter } from 'csv-writer';
import { parse } from 'csv-parse/sync';
import { readFileSync, existsSync } from 'fs';
import { resolve } from 'path';

const client = new ApifyClient({ token: process.env.APIFY_API_KEY });
const JOBS_PATH = resolve(import.meta.dirname, '../tracker/jobs.csv');

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

function loadExistingJobs() {
  if (!existsSync(JOBS_PATH)) return [];
  const content = readFileSync(JOBS_PATH, 'utf-8');
  if (!content.trim()) return [];
  return parse(content, { columns: true, skip_empty_lines: true });
}

async function scrapeIndeed() {
  // Using valig/indeed-jobs-scraper — supports MY country code, pay-per-result
  const searches = [
    { country: 'my', title: 'interior designer', location: 'Kuala Lumpur', limit: 100 },
    { country: 'my', title: 'interior designer', location: 'Petaling Jaya', limit: 50 },
    { country: 'sg', title: 'interior designer', location: 'Singapore', limit: 100 },
    { country: 'us', title: 'interior designer remote', location: '', limit: 100 },
  ];

  const allJobs = [];
  for (const search of searches) {
    const label = search.location || search.country.toUpperCase();
    console.log(`Indeed: Searching "${search.title}" in ${label}...`);
    try {
      const run = await client.actor('valig/indeed-jobs-scraper').call(search);
      const { items } = await client.dataset(run.defaultDatasetId).listItems();
      console.log(`  Found ${items.length} jobs.`);
      allJobs.push(...items.map((item) => {
        // employer is an object with .name
        const company = item.employer?.name || item.companyName || (typeof item.company === 'string' ? item.company : '') || '';
        // location is an object with .city, .countryName
        const loc = item.location;
        const location = typeof loc === 'string' ? loc : [loc?.city, loc?.countryName].filter(Boolean).join(', ') || label;
        // salary can be an object with .min/.max or a string
        const sal = item.salary;
        const salary = typeof sal === 'string' ? sal : (sal?.min ? `${sal.min}-${sal.max} ${sal.currency || ''}`.trim() : '');
        // jobTypes is an object like { "CF3CP": "Full-time" }
        const jobTypes = item.jobTypes ? Object.values(item.jobTypes).join(', ') : (item.jobType || item.workType || '');
        const email = item.employer?.email || item.email || '';

        return {
          title: item.title || '',
          company,
          location,
          role_type: jobTypes,
          salary,
          source: 'Indeed',
          url: item.url || item.jobUrl || '',
          date_posted: item.datePublished || item.dateOnIndeed || '',
          date_scraped: new Date().toISOString().split('T')[0],
          status: 'New',
          notes: email ? `Email: ${email}` : '',
        };
      }));
    } catch (err) {
      console.error(`  Indeed search failed for ${label}: ${err.message}`);
    }
  }
  return allJobs;
}

async function scrapeJobStreet() {
  // Using shahidirfan/JobStreet-Scraper — pay per usage (compute only)
  const searches = [
    { keyword: 'interior designer', location: 'Kuala Lumpur', country: 'my', posted_date: '30d', results_wanted: 100 },
    { keyword: 'interior designer', location: 'Petaling Jaya', country: 'my', posted_date: '30d', results_wanted: 50 },
    { keyword: 'interior designer', location: 'Singapore', country: 'sg', posted_date: '30d', results_wanted: 100 },
  ];

  const allJobs = [];
  for (const search of searches) {
    console.log(`JobStreet: Searching "${search.keyword}" in ${search.location}...`);
    try {
      const run = await client.actor('shahidirfan/JobStreet-Scraper').call(search);
      const { items } = await client.dataset(run.defaultDatasetId).listItems();
      console.log(`  Found ${items.length} jobs.`);
      allJobs.push(...items.map((item) => ({
        title: item.title || item.job_title || '',
        company: item.company || item.company_name || item.companyName || '',
        location: item.location || item.job_location || search.location,
        role_type: item.workType || item.job_type || '',
        salary: item.salary || item.compensation || '',
        source: 'JobStreet',
        url: item.url || item.job_url || item.link || '',
        date_posted: item.postedDate || item.date_posted || item.listingDate || '',
        date_scraped: new Date().toISOString().split('T')[0],
        status: 'New',
        notes: '',
      })));
    } catch (err) {
      console.error(`  JobStreet scrape failed for ${search.location}: ${err.message}`);
    }
  }
  return allJobs;
}

async function scrapeLinkedInJobs() {
  // Using worldunboxer/rapid-linkedin-scraper — pay per usage (compute only), no cookies
  const searches = [
    { job_title: 'interior designer', location: 'Malaysia', jobs_entries: 100, job_post_time: 'r2592000' },
    { job_title: 'interior designer', location: 'Singapore', jobs_entries: 50, job_post_time: 'r2592000' },
    { job_title: 'interior designer remote', location: 'United States', jobs_entries: 100, job_post_time: 'r2592000' },
  ];

  const allJobs = [];
  for (const search of searches) {
    console.log(`LinkedIn: Searching "${search.job_title}" in ${search.location}...`);
    try {
      const run = await client.actor('worldunboxer/rapid-linkedin-scraper').call(search);
      const { items } = await client.dataset(run.defaultDatasetId).listItems();
      console.log(`  Found ${items.length} jobs.`);
      allJobs.push(...items.map((item) => ({
        title: item.title || item.job_title || '',
        company: item.company || item.companyName || item.company_name || '',
        location: item.location || item.job_location || search.location,
        role_type: item.workType || item.employment_type || '',
        salary: item.salary || '',
        source: 'LinkedIn',
        url: item.url || item.job_url || item.link || '',
        date_posted: item.postedDate || item.publishedAt || item.date_posted || '',
        date_scraped: new Date().toISOString().split('T')[0],
        status: 'New',
        notes: '',
      })));
    } catch (err) {
      console.error(`  LinkedIn search failed for ${search.location}: ${err.message}`);
    }
  }
  return allJobs;
}

async function scrapeAllJobs() {
  console.log('=== Starting job scrape across all platforms ===\n');

  const [indeedJobs, jobStreetJobs, linkedInJobs] = await Promise.all([
    scrapeIndeed(),
    scrapeJobStreet(),
    scrapeLinkedInJobs(),
  ]);

  const allJobsUnfiltered = [...indeedJobs, ...jobStreetJobs, ...linkedInJobs];
  console.log(`\nTotal jobs found: ${allJobsUnfiltered.length}`);

  // Filter out irrelevant job titles
  const EXCLUDE_TITLES = ['sales', 'quantity surveyor', 'site coordinator', 'construction manager', 'architect', 'business development'];
  const allJobsRaw = allJobsUnfiltered.filter((j) => {
    const title = j.title.toLowerCase();
    if (EXCLUDE_TITLES.some((ex) => title.includes(ex))) {
      console.log(`  Filtered out (irrelevant title): ${j.title} @ ${j.company}`);
      return false;
    }
    return true;
  });
  console.log(`After title filter: ${allJobsRaw.length} jobs`);

  // Filter out jobs with salary explicitly below RM 5,000
  const MIN_SALARY = 5000;
  const allJobs = allJobsRaw.filter((j) => {
    if (!j.salary) return true; // keep jobs with no salary listed
    const salaryStr = j.salary.toLowerCase().replace(/,/g, '');
    // Match patterns like "rm 3000", "rm 3,500", "3000 - 4000"
    const nums = salaryStr.match(/\d+/g);
    if (!nums) return true;
    // Check if it's in RM (Malaysian Ringgit) — skip USD/SGD salary filtering
    const isRM = salaryStr.includes('rm') || salaryStr.includes('myr');
    if (!isRM) return true;
    // Use the highest number in the salary string
    const maxSalary = Math.max(...nums.map(Number));
    if (maxSalary < MIN_SALARY) {
      console.log(`  Filtered out (salary < RM ${MIN_SALARY}): ${j.title} @ ${j.company} — ${j.salary}`);
      return false;
    }
    return true;
  });
  console.log(`After salary filter (>= RM ${MIN_SALARY}): ${allJobs.length} jobs`);

  const existing = loadExistingJobs();
  const seen = new Set(existing.map((j) => `${j.title?.toLowerCase()}|${j.company?.toLowerCase()}`));
  const newJobs = allJobs.filter((j) => {
    const key = `${j.title?.toLowerCase()}|${j.company?.toLowerCase()}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  const combined = [...existing, ...newJobs];
  const writer = createObjectCsvWriter({ path: JOBS_PATH, header: JOB_HEADERS });
  await writer.writeRecords(combined);

  console.log(`Jobs tracker updated: ${newJobs.length} new jobs added. Total: ${combined.length}`);
}

scrapeAllJobs().catch(console.error);
