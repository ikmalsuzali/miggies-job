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
