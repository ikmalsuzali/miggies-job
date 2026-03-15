import 'dotenv/config';
import { ApifyClient } from 'apify-client';
import { mergeIntoTracker } from './update-tracker.js';

const client = new ApifyClient({ token: process.env.APIFY_API_KEY });

const SEARCHES = [
  'interior design firm Petaling Jaya',
  'interior design company Petaling Jaya',
  'architecture firm Petaling Jaya',
  'interior design firm Kuala Lumpur',
  'interior design company Kuala Lumpur',
  'architecture firm Kuala Lumpur',
  'property developer Kuala Lumpur',
  'property developer Petaling Jaya',
];

async function scrapeCompanies() {
  console.log('Starting Google Maps scrape for companies in PJ/KL...');

  const run = await client.actor('compass/crawler-google-places').call({
    searchStringsArray: SEARCHES,
    countryCode: 'my',
    language: 'en',
    maxCrawledPlacesPerSearch: 100,
    deeperCityScrape: true,
    maxReviews: 0,
  });

  console.log(`Run finished. Fetching results from dataset ${run.defaultDatasetId}...`);

  const { items } = await client.dataset(run.defaultDatasetId).listItems();
  console.log(`Found ${items.length} places.`);

  const rows = items.map((item) => {
    const category = (item.categoryName || '').toLowerCase();
    const isArchFirm = category.includes('architect');
    const isDeveloper = category.includes('developer') || category.includes('property');

    let type = 'Interior Design Firm';
    if (isArchFirm) type = 'Architecture Firm';
    if (isDeveloper) type = 'Property Developer';

    return {
      company_name: item.title || '',
      type,
      location: item.city || item.neighborhood || 'PJ/KL',
      role_type: 'On-site',
      contact_person: '',
      email: item.email || '',
      linkedin_url: '',
      phone: item.phone || '',
      website: item.website || '',
      source: 'Google Maps',
      status: 'Researching',
      notes: `Rating: ${item.totalScore || 'N/A'} | Reviews: ${item.reviewsCount || 0} | Category: ${item.categoryName || ''}`,
    };
  });

  await mergeIntoTracker(rows);
}

scrapeCompanies().catch(console.error);
