#!/usr/bin/env node

import { fal } from "@fal-ai/client";
import fs from "fs";
import path from "path";
import https from "https";
import http from "http";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const IMAGES_DIR = path.join(__dirname, "../website/public/images");
const CONCURRENCY = parseInt(process.env.CONCURRENCY || "3", 10);
const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 10000;
const SKIP_THRESHOLD = 1_000_000; // Skip files already > 1MB (already enhanced)

// Configure fal client
fal.config({
  credentials: process.env.FAL_KEY,
});

// Find all image files recursively
function findImages(dir) {
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findImages(fullPath));
    } else if (/\.(jpg|jpeg|png)$/i.test(entry.name)) {
      results.push(fullPath);
    }
  }
  return results;
}

// Convert local file to data URL for fal.ai upload
function fileToDataUrl(filePath) {
  const buffer = fs.readFileSync(filePath);
  const ext = path.extname(filePath).toLowerCase();
  const mime =
    ext === ".png" ? "image/png" : ext === ".jpeg" ? "image/jpeg" : "image/jpeg";
  return `data:${mime};base64,${buffer.toString("base64")}`;
}

// Download file from URL
function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith("https") ? https : http;
    const file = fs.createWriteStream(destPath);
    client
      .get(url, (response) => {
        if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
          // Follow redirect
          downloadFile(response.headers.location, destPath).then(resolve).catch(reject);
          return;
        }
        if (response.statusCode !== 200) {
          reject(new Error(`HTTP ${response.statusCode} downloading ${url}`));
          return;
        }
        response.pipe(file);
        file.on("finish", () => {
          file.close(resolve);
        });
      })
      .on("error", (err) => {
        fs.unlink(destPath, () => {});
        reject(err);
      });
  });
}

// Sleep utility
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Enhance a single image with retry logic
async function enhanceImage(filePath, index, total) {
  const relative = path.relative(IMAGES_DIR, filePath);

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      console.log(
        `[${index + 1}/${total}] Enhancing ${relative} (attempt ${attempt})...`
      );

      const dataUrl = fileToDataUrl(filePath);

      const result = await fal.subscribe("fal-ai/clarity-upscaler", {
        input: {
          image_url: dataUrl,
          prompt:
            "professional interior design photography, sharp details, high resolution",
          upscale_factor: 2,
          resemblance: 0.9,
          creativity: 0.2,
        },
        logs: false,
      });

      if (!result.data?.image?.url) {
        throw new Error("No image URL in response");
      }

      // Download enhanced image, overwriting original
      const tempPath = filePath + ".tmp";
      await downloadFile(result.data.image.url, tempPath);

      // Verify the downloaded file is valid (non-zero size)
      const stats = fs.statSync(tempPath);
      if (stats.size < 1000) {
        fs.unlinkSync(tempPath);
        throw new Error(`Downloaded file too small: ${stats.size} bytes`);
      }

      // Replace original
      fs.renameSync(tempPath, filePath);

      const originalSize = fs.statSync(filePath).size;
      console.log(
        `[${index + 1}/${total}] Done: ${relative} (${(originalSize / 1024).toFixed(0)}KB)`
      );
      return;
    } catch (err) {
      console.error(
        `[${index + 1}/${total}] Error on ${relative} (attempt ${attempt}): ${err.message}`
      );
      if (attempt < MAX_RETRIES) {
        console.log(`  Retrying in ${RETRY_DELAY_MS / 1000}s...`);
        await sleep(RETRY_DELAY_MS);
      } else {
        console.error(`  FAILED after ${MAX_RETRIES} attempts: ${relative}`);
      }
    }
  }
}

// Process images with concurrency limit
async function processWithConcurrency(items, concurrency, fn) {
  const results = [];
  let index = 0;

  async function worker() {
    while (index < items.length) {
      const i = index++;
      await fn(items[i], i, items.length);
    }
  }

  const workers = Array.from({ length: Math.min(concurrency, items.length) }, () =>
    worker()
  );
  await Promise.all(workers);
  return results;
}

// Main
async function main() {
  if (!process.env.FAL_KEY) {
    console.error("Error: FAL_KEY environment variable is required");
    console.error("Usage: FAL_KEY=your_key node scripts/enhance-images.js");
    process.exit(1);
  }

  const allImages = findImages(IMAGES_DIR);
  const images = allImages.filter((img) => {
    const size = fs.statSync(img).size;
    if (size >= SKIP_THRESHOLD) {
      console.log(`Skipping (already enhanced): ${path.relative(IMAGES_DIR, img)} (${(size / 1024).toFixed(0)}KB)`);
      return false;
    }
    return true;
  });
  console.log(`Found ${allImages.length} total images, ${images.length} need enhancement`);
  console.log(`Concurrency: ${CONCURRENCY}, Max retries: ${MAX_RETRIES}`);
  console.log("---");

  const startTime = Date.now();
  await processWithConcurrency(images, CONCURRENCY, enhanceImage);

  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log("---");
  console.log(`Completed in ${elapsed}s`);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
