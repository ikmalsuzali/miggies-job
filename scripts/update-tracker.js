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
