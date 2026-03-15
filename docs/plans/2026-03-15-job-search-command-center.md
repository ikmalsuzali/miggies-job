# Job Search Command Center — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a job search command center for a senior interior designer (7+ years, mixed residential/commercial) targeting roles in PJ, KL, remote Singapore, and remote US.

**Architecture:** Node.js scripts using the Apify API to scrape companies and jobs, storing results in CSV. Markdown templates for resume, cover letters, and outreach (email + LinkedIn). All managed from a single folder.

**Tech Stack:** Node.js 20, Apify Client SDK, csv-writer/csv-parse, dotenv, markdown files

---

## Task 1: Project Setup

**Files:**
- Create: `package.json`
- Modify: `.env` (already exists)

**Step 1: Initialize npm project**

Run: `cd /Users/ikmalsuzali/htdocs/miggies-job && npm init -y`

**Step 2: Install dependencies**

Run: `npm install apify-client csv-writer csv-parse dotenv`

**Step 3: Create folder structure**

Run:
```bash
mkdir -p resume portfolio tracker scripts outreach/email-templates outreach/linkedin-templates research docs/plans
```

**Step 4: Commit**

```bash
git init
git add -A
git commit -m "chore: project setup with dependencies and folder structure"
```

---

## Task 2: Resume — Malaysia Version

**Files:**
- Create: `resume/resume-malaysia.md`

**Step 1: Create the Malaysia-targeted resume template**

```markdown
# [FULL NAME]

**Senior Interior Designer** | 7+ Years | Residential & Commercial
[Phone] | [Email] | [LinkedIn URL] | [Portfolio Link]
Petaling Jaya / Kuala Lumpur, Malaysia

---

## Professional Summary

Senior Interior Designer with 7+ years of experience delivering end-to-end residential and commercial projects across Malaysia. Proven ability to lead small teams, mentor junior designers, and manage projects from concept through to handover. Strong client relationships evidenced by consistent referral business. Proficient in AutoCAD and 3ds Max.

---

## Core Competencies

- End-to-end project management (concept → design development → contractor coordination → handover)
- Team leadership & junior designer mentoring
- Client relationship management (referral-driven business)
- Residential design (condos, landed homes, apartments)
- Commercial design (offices, retail, F&B fitouts)
- Authority submissions coordination (DBKL, MBPJ)
- AutoCAD | 3ds Max

---

## Professional Experience

### Senior Interior Designer | [COMPANY NAME]
**[Start Date] — Present** | [Location]

- Led end-to-end delivery of [X] residential and commercial projects ranging from small retail units to large-scale office fitouts
- Mentored a team of [X] junior designers, providing guidance on design development and technical documentation
- Coordinated with contractors, suppliers, and consultants to ensure projects met quality standards and timelines
- Built strong client relationships resulting in referral business from satisfied clients
- Prepared design presentations, 3D visualizations (3ds Max), and technical drawings (AutoCAD)

### Interior Designer | [COMPANY NAME]
**[Start Date] — [End Date]** | [Location]

- Developed space planning, material selections, and design concepts for residential and commercial projects
- Produced detailed construction drawings and 3D renderings
- Liaised with contractors during site implementation phase
- Assisted in client presentations and design proposals

### [Earlier roles as needed]

---

## Education

**Bachelor's Degree in Interior Design**
[University Name] | [Graduation Year]

---

## Software

AutoCAD | 3ds Max | [Any others — Microsoft Office, etc.]

---

## Languages

English | Bahasa Malaysia | [Others]

---

## References

Available upon request
```

**Step 2: Commit**

```bash
git add resume/resume-malaysia.md
git commit -m "feat: add Malaysia-targeted resume template"
```

---

## Task 3: Resume — International Version (Singapore/US Remote)

**Files:**
- Create: `resume/resume-international.md`

**Step 1: Create the international resume template**

```markdown
# [FULL NAME]

**Senior Interior Designer** | 7+ Years | Residential & Commercial
[Phone with country code] | [Email] | [LinkedIn URL] | [Portfolio Link]
Malaysia (Open to Remote — SGT/EST timezone overlap)

---

## Professional Summary

Senior Interior Designer with 7+ years delivering diverse residential and commercial projects. Experienced in leading projects independently from concept to completion, mentoring design teams, and maintaining strong client relationships. Skilled in remote collaboration with clear documentation and presentation practices. Seeking remote senior or lead design roles.

---

## Key Strengths

- **Independent Project Leadership** — Full ownership of projects from brief through handover with minimal supervision
- **Design Versatility** — Experience across residential, commercial, F&B, retail, and office projects of varying scales
- **Team Development** — Mentored junior designers on design process, technical skills, and client communication
- **Client Trust** — Consistent referral business from satisfied clients
- **Remote-Ready** — Strong written and visual communication; experienced with digital collaboration tools

---

## Professional Experience

### Senior Interior Designer | [COMPANY NAME]
**[Start Date] — Present** | [Location]

- Independently managed [X] projects end-to-end across residential and commercial sectors
- Led a small design team, mentoring [X] junior designers on design development and execution
- Developed comprehensive design packages including space plans, material palettes, 3D visualizations, and construction documentation
- Maintained client relationships that generated referral business
- Coordinated cross-functional teams including contractors, MEP consultants, and suppliers

### Interior Designer | [COMPANY NAME]
**[Start Date] — [End Date]** | [Location]

- Designed and delivered residential and commercial interiors from concept to completion
- Created detailed AutoCAD drawings and photorealistic 3ds Max renders for client presentations
- Managed contractor relationships during implementation phase

---

## Education

**Bachelor's Degree in Interior Design**
[University Name] | [Graduation Year]

---

## Technical Skills

AutoCAD | 3ds Max | [Others] | Microsoft Office | Google Workspace | Zoom/Teams

---

## Portfolio

[Link to PDF case study deck or portfolio site — TO BE CREATED]
```

**Step 2: Commit**

```bash
git add resume/resume-international.md
git commit -m "feat: add international resume template for remote SG/US roles"
```

---

## Task 4: Email Outreach Templates

**Files:**
- Create: `outreach/email-templates/cold-intro.md`
- Create: `outreach/email-templates/job-application.md`
- Create: `outreach/email-templates/follow-up-1.md`
- Create: `outreach/email-templates/follow-up-2.md`
- Create: `outreach/email-templates/referral-intro.md`

**Step 1: Create all 5 email templates**

### cold-intro.md
```markdown
Subject: Senior Interior Designer — Interested in Joining [COMPANY NAME]

Hi [CONTACT NAME],

I'm [YOUR NAME], a senior interior designer with 7+ years of experience across residential and commercial projects. I came across [COMPANY NAME] and was impressed by [SPECIFIC PROJECT OR ASPECT — e.g., "your recent hospitality work at X"].

I'd love to explore whether there's an opportunity to contribute to your team. I bring end-to-end project management experience, team mentoring skills, and a strong track record of client referrals.

I've attached my resume and a brief portfolio for your review. Would you be open to a short conversation?

Best regards,
[YOUR NAME]
[Phone] | [Email] | [LinkedIn]
```

### job-application.md
```markdown
Subject: Application — [JOB TITLE] at [COMPANY NAME]

Hi [CONTACT NAME / Hiring Team],

I'm writing to apply for the [JOB TITLE] position at [COMPANY NAME]. With 7+ years of experience in residential and commercial interior design, I believe I'm a strong fit for this role.

Key highlights:
- End-to-end project management from concept to handover
- Experience leading small design teams and mentoring junior designers
- Proficiency in AutoCAD and 3ds Max
- Strong client relationships with referral-driven business

I've attached my resume and portfolio. I'd welcome the chance to discuss how I can contribute to [COMPANY NAME].

Thank you for your consideration.

Best regards,
[YOUR NAME]
[Phone] | [Email] | [LinkedIn]
```

### follow-up-1.md
```markdown
Subject: Re: [ORIGINAL SUBJECT LINE]

Hi [CONTACT NAME],

I wanted to follow up on my email from [X days] ago regarding [the open position / my interest in joining your team].

I remain very interested in [COMPANY NAME] and would love the chance to chat. Is there a convenient time this week or next?

Best regards,
[YOUR NAME]
```

### follow-up-2.md
```markdown
Subject: Re: [ORIGINAL SUBJECT LINE]

Hi [CONTACT NAME],

Just a final follow-up on my earlier emails. I understand things get busy — if now isn't the right time, I'd be happy to reconnect in the future.

In the meantime, feel free to keep my resume on file. I'd love to be considered for any upcoming opportunities.

Wishing you and the team all the best.

Best regards,
[YOUR NAME]
```

### referral-intro.md
```markdown
Subject: [REFERRER NAME] Suggested I Reach Out — Senior Interior Designer

Hi [CONTACT NAME],

[REFERRER NAME] recommended I get in touch with you. I'm a senior interior designer with 7+ years in residential and commercial projects, and [REFERRER] mentioned that [COMPANY NAME] might be looking for experienced designers.

I'd love to learn more about your team and any upcoming opportunities. I've attached my resume and a brief portfolio.

Would you have time for a quick call this week?

Best regards,
[YOUR NAME]
[Phone] | [Email] | [LinkedIn]
```

**Step 2: Commit**

```bash
git add outreach/email-templates/
git commit -m "feat: add 5 email outreach templates"
```

---

## Task 5: LinkedIn Outreach Templates

**Files:**
- Create: `outreach/linkedin-templates/connection-request.md`
- Create: `outreach/linkedin-templates/cold-message.md`
- Create: `outreach/linkedin-templates/follow-up.md`
- Create: `outreach/linkedin-templates/recruiter-message.md`

**Step 1: Create all 4 LinkedIn templates**

### connection-request.md (300 char limit)
```markdown
# LinkedIn Connection Request Note

## To Hiring Managers / Creative Directors:
Hi [NAME], I'm a senior interior designer with 7+ years in residential & commercial projects. I admire [COMPANY]'s work — would love to connect and learn about your team.

## To Recruiters:
Hi [NAME], I'm a senior interior designer (7+ yrs) actively exploring new opportunities in [PJ/KL/remote]. Would love to connect in case you come across relevant roles.

## To Peers / Industry Contacts:
Hi [NAME], fellow interior designer here — really liked [SPECIFIC POST/PROJECT]. Would love to connect and stay in touch.
```

### cold-message.md (after connection accepted)
```markdown
# LinkedIn Cold Message — After Connection

Hi [NAME],

Thanks for connecting! I'm currently exploring senior interior design roles and was drawn to [COMPANY NAME] because of [SPECIFIC REASON — recent project, company culture, design approach].

With 7+ years across residential and commercial projects, I bring end-to-end project experience, team leadership, and strong client relationships.

Would you be open to a quick chat about any opportunities on your team? Happy to share my portfolio.

Thanks,
[YOUR NAME]
```

### follow-up.md
```markdown
# LinkedIn Follow-Up — 5-7 days after cold message

Hi [NAME],

Just wanted to follow up on my earlier message. I'm genuinely interested in [COMPANY NAME] and would love to learn more about your team.

No pressure at all — if now isn't the right time, I'd appreciate being kept in mind for future openings.

Thanks again,
[YOUR NAME]
```

### recruiter-message.md
```markdown
# LinkedIn Message to Recruiters

Hi [NAME],

I'm a senior interior designer with 7+ years of experience in residential and commercial projects, based in Malaysia. I'm actively looking for:

- Senior/Lead ID roles in Petaling Jaya or Kuala Lumpur
- Remote interior design roles based in Singapore or the US

Key skills: AutoCAD, 3ds Max, end-to-end project management, team mentoring.

Would love to be on your radar for relevant opportunities. Happy to share my resume and portfolio.

Thanks,
[YOUR NAME]
```

**Step 2: Commit**

```bash
git add outreach/linkedin-templates/
git commit -m "feat: add LinkedIn outreach templates (connection, cold, follow-up, recruiter)"
```

---

## Task 6: Company Tracker CSV + Script

**Files:**
- Create: `tracker/companies.csv`
- Create: `scripts/update-tracker.js`

**Step 1: Create the initial CSV with headers**

```csv
company_name,type,location,role_type,contact_person,email,linkedin_url,phone,website,source,status,date_applied,follow_up_date,notes
```

**Step 2: Create the tracker update script**

`scripts/update-tracker.js` — Merges scraped data into the tracker CSV, deduplicates by company name + location.

```javascript
import { parse } from 'csv-parse/sync';
import { createObjectCsvWriter } from 'csv-writer';
import { readFileSync, existsSync } from 'fs';
import { resolve } from 'path';

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

function loadExisting() {
  if (!existsSync(TRACKER_PATH)) return [];
  const content = readFileSync(TRACKER_PATH, 'utf-8');
  if (!content.trim()) return [];
  return parse(content, { columns: true, skip_empty_lines: true });
}

function deduplicateKey(row) {
  return `${(row.company_name || '').toLowerCase().trim()}|${(row.location || '').toLowerCase().trim()}`;
}

export async function mergeIntoTracker(newRows) {
  const existing = loadExisting();
  const seen = new Set(existing.map(deduplicateKey));
  let added = 0;

  for (const row of newRows) {
    const key = deduplicateKey(row);
    if (!seen.has(key)) {
      existing.push({
        company_name: row.company_name || '',
        type: row.type || '',
        location: row.location || '',
        role_type: row.role_type || '',
        contact_person: row.contact_person || '',
        email: row.email || '',
        linkedin_url: row.linkedin_url || '',
        phone: row.phone || '',
        website: row.website || '',
        source: row.source || '',
        status: row.status || 'Researching',
        date_applied: row.date_applied || '',
        follow_up_date: row.follow_up_date || '',
        notes: row.notes || '',
      });
      seen.add(key);
      added++;
    }
  }

  const writer = createObjectCsvWriter({ path: TRACKER_PATH, header: CSV_HEADERS });
  await writer.writeRecords(existing);
  console.log(`Tracker updated: ${added} new companies added. Total: ${existing.length}`);
  return { added, total: existing.length };
}
```

**Step 3: Commit**

```bash
git add tracker/ scripts/update-tracker.js
git commit -m "feat: add company tracker CSV and merge script"
```

---

## Task 7: Apify Scraper — Google Maps (Companies in PJ/KL)

**Files:**
- Create: `scripts/scrape-companies.js`

**Step 1: Create the Google Maps scraping script**

```javascript
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
    const isArchFirm = (item.categoryName || '').toLowerCase().includes('architect');
    const isDeveloper = (item.categoryName || '').toLowerCase().includes('developer') ||
                        (item.categoryName || '').toLowerCase().includes('property');

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
```

**Step 2: Commit**

```bash
git add scripts/scrape-companies.js
git commit -m "feat: add Apify Google Maps scraper for PJ/KL companies"
```

---

## Task 8: Apify Scraper — Jobs (Indeed, JobStreet, LinkedIn)

**Files:**
- Create: `scripts/scrape-jobs.js`

**Step 1: Create the job scraping script**

```javascript
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
  const searches = [
    { position: 'interior designer', location: 'Kuala Lumpur', country: 'my', maxItems: 100 },
    { position: 'interior designer', location: 'Petaling Jaya', country: 'my', maxItems: 50 },
    { position: 'interior designer', location: 'Singapore', country: 'sg', maxItems: 100 },
    { position: 'interior designer remote', location: 'United States', country: 'us', maxItems: 100 },
  ];

  const allJobs = [];
  for (const search of searches) {
    console.log(`Indeed: Searching "${search.position}" in ${search.location}...`);
    try {
      const run = await client.actor('misceres/indeed-scraper').call(search);
      const { items } = await client.dataset(run.defaultDatasetId).listItems();
      console.log(`  Found ${items.length} jobs.`);
      allJobs.push(...items.map((item) => ({
        title: item.positionName || item.title || '',
        company: item.company || '',
        location: item.location || search.location,
        role_type: item.workType || '',
        salary: item.salary || '',
        source: 'Indeed',
        url: item.url || '',
        date_posted: item.postingDateParsed || item.date || '',
        date_scraped: new Date().toISOString().split('T')[0],
        status: 'New',
        notes: '',
      })));
    } catch (err) {
      console.error(`  Indeed search failed for ${search.location}: ${err.message}`);
    }
  }
  return allJobs;
}

async function scrapeJobStreet() {
  console.log('JobStreet: Searching interior designer jobs...');
  try {
    const run = await client.actor('easyapi/jobstreet-job-scraper').call({
      jobSearchUrls: [
        'https://my.jobstreet.com/interior-designer-jobs',
        'https://my.jobstreet.com/interior-design-jobs-in-petaling-jaya',
        'https://my.jobstreet.com/interior-design-jobs-in-kuala-lumpur',
      ],
      maxItems: 200,
    });
    const { items } = await client.dataset(run.defaultDatasetId).listItems();
    console.log(`  Found ${items.length} jobs.`);
    return items.map((item) => ({
      title: item.title || '',
      company: item.companyName || item.company || '',
      location: item.location || 'Malaysia',
      role_type: item.workType || '',
      salary: item.salary || '',
      source: 'JobStreet',
      url: item.url || item.jobUrl || '',
      date_posted: item.postedDate || item.listingDate || '',
      date_scraped: new Date().toISOString().split('T')[0],
      status: 'New',
      notes: '',
    }));
  } catch (err) {
    console.error(`  JobStreet scrape failed: ${err.message}`);
    return [];
  }
}

async function scrapeLinkedInJobs() {
  const searches = [
    { keywords: 'interior designer', location: 'Malaysia', maxItems: 100 },
    { keywords: 'interior designer', location: 'Singapore', maxItems: 50 },
    { keywords: 'interior designer remote', location: 'United States', maxItems: 100 },
  ];

  const allJobs = [];
  for (const search of searches) {
    console.log(`LinkedIn: Searching "${search.keywords}" in ${search.location}...`);
    try {
      const run = await client.actor('bebity/linkedin-jobs-scraper').call({
        ...search,
        datePosted: 'pastMonth',
      });
      const { items } = await client.dataset(run.defaultDatasetId).listItems();
      console.log(`  Found ${items.length} jobs.`);
      allJobs.push(...items.map((item) => ({
        title: item.title || '',
        company: item.companyName || item.company || '',
        location: item.location || search.location,
        role_type: item.workType || '',
        salary: item.salary || '',
        source: 'LinkedIn',
        url: item.url || item.jobUrl || '',
        date_posted: item.postedDate || item.publishedAt || '',
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

  const allJobs = [...indeedJobs, ...jobStreetJobs, ...linkedInJobs];
  console.log(`\nTotal jobs found: ${allJobs.length}`);

  // Deduplicate by title + company
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
```

**Step 2: Create initial jobs CSV**

`tracker/jobs.csv`:
```csv
title,company,location,role_type,salary,source,url,date_posted,date_scraped,status,notes
```

**Step 3: Commit**

```bash
git add scripts/scrape-jobs.js tracker/jobs.csv
git commit -m "feat: add Apify job scraper (Indeed, JobStreet, LinkedIn)"
```

---

## Task 9: Apify Scraper — Contact Info from Company Websites

**Files:**
- Create: `scripts/scrape-contacts.js`

**Step 1: Create the contact scraping script**

```javascript
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

  // Filter companies that have a website but no email yet
  const needsContact = companies.filter((c) => c.website && !c.email);
  if (needsContact.length === 0) {
    console.log('All companies with websites already have contact info.');
    return;
  }

  console.log(`Scraping contacts for ${needsContact.length} companies...`);

  const startUrls = needsContact.map((c) => ({ url: c.website }));

  // Process in batches of 20 to avoid timeout
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

  // Merge contacts back into companies
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
```

**Step 2: Commit**

```bash
git add scripts/scrape-contacts.js
git commit -m "feat: add Apify website contact scraper"
```

---

## Task 10: Research Strategy Guide

**Files:**
- Create: `research/strategy.md`

**Step 1: Create the job search strategy guide**

```markdown
# Job Search Strategy Guide — Senior Interior Designer

## 1. LinkedIn Optimization

### Profile Headline
Senior Interior Designer | Residential & Commercial | 7+ Years | AutoCAD & 3ds Max

### Key Actions
- Set "Open to Work" — visible to recruiters only
- Add all skills: Interior Design, AutoCAD, 3ds Max, Space Planning, Project Management
- Request recommendations from past clients or colleagues (aim for 3-5)
- Connect with hiring managers at target companies BEFORE applying
- Post 1-2x/week: project insights, design trends, industry commentary

### Content Ideas for Posts
- Before/after project transformations (with client permission)
- Design process breakdowns
- Material or trend insights
- Lessons learned from challenging projects

---

## 2. Portfolio — Quick Wins

### PDF Case Study Deck (Do This First)
- 8-10 pages, clean layout
- Pick 4-5 best projects (mix of residential and commercial)
- Structure per project:
  1. Project brief (1-2 sentences)
  2. Your design approach
  3. 2-3 process/progress photos
  4. 2-3 final result photos
  5. Client outcome (e.g., "Client referred 2 additional projects")

### Portfolio Website (Later)
- Options: Behance (free), Wix (free tier), Squarespace ($16/mo)
- Mirror the case study deck content
- Add an "About" page and contact form

---

## 3. Networking Tactics

### Professional Bodies
- Malaysian Institute of Interior Designers (MIID) — attend events, get listed in directory
- Malaysian Institute of Architects (PAM) — networking with architecture firms

### Events
- ARCHIDEX (KL) — Malaysia's biggest architecture & interior design expo
- HOMEDEC — Home design expo for residential contacts
- Property developer launches — network with in-house design teams

### Online Networking
- LinkedIn groups: "Interior Designers Malaysia", "Singapore Interior Design"
- Join design communities on Facebook groups for MY/SG market
- Engage with target companies' posts before reaching out

---

## 4. Application Timing

### Best Days to Apply
- Tuesday, Wednesday, Thursday — 9-11am recipient's local timezone
- Avoid Monday mornings (inbox overload) and Friday afternoons

### Follow-Up Schedule
- Day 5-7: First follow-up email
- Day 14: Second and final follow-up
- After that: Move on, circle back in 2-3 months

---

## 5. Upskilling — Quick Wins

### Close the Budget Gap
- Udemy: "Construction Project Budget Management" (~RM50, 2-3 hours)
- Add certificate to LinkedIn and resume

### Add Software Breadth
- SketchUp Free — learn basics in a weekend (popular in SG/US firms)
- Canva — for quick presentation decks
- V-Ray or Enscape — rendering skills that complement 3ds Max

### Certifications Worth Considering
- LEED Green Associate — shows sustainability awareness (valued in US/SG)
- WELL AP — wellness in design (growing demand)

---

## 6. Target Market Notes

### Malaysia (PJ/KL)
- Most firms use JobStreet + LinkedIn for hiring
- Walk-in portfolio presentations still work for smaller firms
- Salary range: RM 8,000-12,000 for senior roles
- Key players: ID firms along Damansara, Mont Kiara, Bangsar corridors

### Singapore (Remote)
- Highly competitive, portfolio is essential
- Firms value BCA Green Mark knowledge
- Remote roles are rare but growing, especially post-COVID
- Look for firms with Malaysia satellite offices

### United States (Remote)
- Portfolio website is non-negotiable
- Time zone overlap matters — EST or PST flexibility
- Many firms use Revit (consider basic familiarity)
- Remote roles often found on: WeWorkRemotely, FlexJobs, LinkedIn Remote filter
```

**Step 2: Commit**

```bash
git add research/strategy.md
git commit -m "feat: add job search strategy guide"
```

---

## Task 11: Main Runner Script

**Files:**
- Create: `scripts/run-all.js`
- Modify: `package.json` (add scripts)

**Step 1: Create a simple runner that executes all scrapers in sequence**

```javascript
import { execSync } from 'child_process';
import { resolve } from 'path';

const scriptsDir = resolve(import.meta.dirname);

const steps = [
  { name: 'Scrape companies (Google Maps)', file: 'scrape-companies.js' },
  { name: 'Scrape jobs (Indeed, JobStreet, LinkedIn)', file: 'scrape-jobs.js' },
  { name: 'Scrape contacts (company websites)', file: 'scrape-contacts.js' },
];

console.log('=== Miggies Job Search — Full Pipeline ===\n');

for (const step of steps) {
  console.log(`\n--- ${step.name} ---\n`);
  try {
    execSync(`node ${resolve(scriptsDir, step.file)}`, { stdio: 'inherit' });
  } catch (err) {
    console.error(`FAILED: ${step.name} — ${err.message}`);
    console.log('Continuing to next step...\n');
  }
}

console.log('\n=== Pipeline complete. Check tracker/ for results. ===');
```

**Step 2: Add npm scripts to package.json**

Add to `"scripts"` section:
```json
{
  "type": "module",
  "scripts": {
    "scrape:companies": "node scripts/scrape-companies.js",
    "scrape:jobs": "node scripts/scrape-jobs.js",
    "scrape:contacts": "node scripts/scrape-contacts.js",
    "scrape:all": "node scripts/run-all.js"
  }
}
```

**Step 3: Commit**

```bash
git add scripts/run-all.js package.json
git commit -m "feat: add runner script and npm commands"
```

---

## Summary of Commands

| Command | What it does |
|---|---|
| `npm run scrape:companies` | Scrape interior design firms, architecture firms, developers in PJ/KL |
| `npm run scrape:jobs` | Scrape job listings from Indeed, JobStreet, LinkedIn |
| `npm run scrape:contacts` | Extract emails from company websites |
| `npm run scrape:all` | Run all three scrapers in sequence |

## Files Created

```
miggies-job/
├── .env                                    # Apify API key
├── .gitignore
├── package.json
├── docs/plans/
│   └── 2026-03-15-job-search-command-center.md
├── resume/
│   ├── resume-malaysia.md
│   └── resume-international.md
├── outreach/
│   ├── email-templates/
│   │   ├── cold-intro.md
│   │   ├── job-application.md
│   │   ├── follow-up-1.md
│   │   ├── follow-up-2.md
│   │   └── referral-intro.md
│   └── linkedin-templates/
│       ├── connection-request.md
│       ├── cold-message.md
│       ├── follow-up.md
│       └── recruiter-message.md
├── tracker/
│   ├── companies.csv
│   └── jobs.csv
├── scripts/
│   ├── scrape-companies.js
│   ├── scrape-jobs.js
│   ├── scrape-contacts.js
│   ├── update-tracker.js
│   └── run-all.js
├── research/
│   └── strategy.md
└── portfolio/                              # For future portfolio files
```
