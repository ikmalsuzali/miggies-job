import 'dotenv/config';
import { ApifyClient } from 'apify-client';
import { parse } from 'csv-parse/sync';
import { createObjectCsvWriter } from 'csv-writer';
import { readFileSync, existsSync } from 'fs';
import { resolve } from 'path';

const client = new ApifyClient({ token: process.env.APIFY_API_KEY });
const TRACKER_PATH = resolve(import.meta.dirname, '../tracker/companies.csv');

const CSV_HEADERS = [
  { id: 'company_name', title: 'company_name' },
  { id: 'type', title: 'type' },
  { id: 'location', title: 'location' },
  { id: 'role_type', title: 'role_type' },
  { id: 'contact_person', title: 'contact_person' },
  { id: 'email', title: 'email' },
  { id: 'linkedin_url', title: 'linkedin_url' },
  { id: 'phone', title: 'phone' },
  { id: 'website', title: 'website' },
  { id: 'source', title: 'source' },
  { id: 'status', title: 'status' },
  { id: 'date_applied', title: 'date_applied' },
  { id: 'follow_up_date', title: 'follow_up_date' },
  { id: 'notes', title: 'notes' },
];

async function scrapeContacts() {
  if (!existsSync(TRACKER_PATH)) {
    console.error('No companies.csv found. Run scrape-companies.js first.');
    process.exit(1);
  }

  const content = readFileSync(TRACKER_PATH, 'utf-8');
  const companies = parse(content, { columns: true, skip_empty_lines: true });

  const needsContact = companies.filter((c) => c.website && !c.email);
  if (needsContact.length === 0) {
    console.log('All companies with websites already have contact info.');
    return;
  }

  // Limit to MAX_COMPANIES per run to avoid timeouts. Run again for more.
  const MAX_COMPANIES = parseInt(process.env.CONTACT_LIMIT || '50', 10);
  const toProcess = needsContact.slice(0, MAX_COMPANIES);
  console.log(`Scraping contacts for ${toProcess.length} of ${needsContact.length} companies (limit: ${MAX_COMPANIES})...`);

  const startUrls = toProcess.map((c) => ({ url: c.website }));
  const BATCH_SIZE = 20;
  const contactMap = new Map();

  for (let i = 0; i < startUrls.length; i += BATCH_SIZE) {
    const batch = startUrls.slice(i, i + BATCH_SIZE);
    console.log(`  Batch ${Math.floor(i / BATCH_SIZE) + 1}: ${batch.length} websites...`);

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
        const linkedin = item.linkedIns || item.socialMedia?.linkedin || [];

        if (emails.length > 0 || phones.length > 0) {
          contactMap.set(domain, {
            email: emails[0] || '',
            phone: phones[0] || '',
            linkedin_url: Array.isArray(linkedin) ? (linkedin[0] || '') : (linkedin || ''),
          });
        }
      }
    } catch (err) {
      console.error(`  Batch failed: ${err.message}`);
    }
  }

  let updated = 0;
  for (const company of companies) {
    if (company.email) continue;

    const domain = (company.website || '').replace(/^https?:\/\//, '').replace(/\/.*$/, '').toLowerCase();
    const contact = contactMap.get(domain);
    if (contact) {
      if (contact.email) company.email = contact.email;
      if (contact.phone && !company.phone) company.phone = contact.phone;
      if (contact.linkedin_url && !company.linkedin_url) company.linkedin_url = contact.linkedin_url;
      updated++;
    }
  }

  const writer = createObjectCsvWriter({ path: TRACKER_PATH, header: CSV_HEADERS });
  await writer.writeRecords(companies);
  console.log(`Updated contact info for ${updated} companies.`);
}

scrapeContacts().catch(console.error);
