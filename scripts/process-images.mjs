/**
 * One-off: resize/compress and write short filenames under public/images.
 * Run: node scripts/process-images.mjs
 */
import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const ROOT = path.join(import.meta.dirname, '..');
const OUT_DIR = path.join(ROOT, 'public', 'images');
const VIDEO_OUT = path.join(ROOT, 'public', 'videos');

/** @type {{ from: string, to: string, w: number, q?: number }[]} */
const IMAGE_JOBS = [
  // Hero slider
  { from: 'love-marriage-problem-01.jpg', to: 'hero-love.jpg', w: 1920, q: 82 },
  { from: 'black-magic-remedies-in-bangalore.jpg', to: 'hero-magic.jpg', w: 1920, q: 82 },
  { from: 'vastu-shastra-01.jpg', to: 'hero-vastu.jpg', w: 1920, q: 82 },
  { from: 'careers-problem-in-bangalore.jpg', to: 'hero-career.jpg', w: 1920, q: 82 },
  { from: 'navagraha-01.jpg', to: 'hero-puja.jpg', w: 1920, q: 82 },
  // About / home sections
  { from: 'hero.jpg', to: 'guruji.jpg', w: 960, q: 85 },
  { from: 'selfie.jpg', to: 'guruji-selfie.jpg', w: 960, q: 85 },
  { from: 'consultancy.jpeg', to: 'home-consult.jpg', w: 1200, q: 82 },
  { from: 'trust.jpeg', to: 'home-trust.jpg', w: 1200, q: 82 },
  // Service cards & page heroes
  { from: 'black-magic-remedies-in-bangalore.jpg', to: 'svc-magic.jpg', w: 1000, q: 80 },
  { from: 'love-marriage-problem-01.jpg', to: 'svc-love.jpg', w: 1000, q: 80 },
  { from: 'vastu-shastra-01.jpg', to: 'svc-vastu.jpg', w: 1000, q: 80 },
  { from: 'childless-problem-solution-in-bangalore.jpg', to: 'svc-child.jpg', w: 1000, q: 80 },
  { from: 'husband-wife-problem-solution-in-bangalore.jpg', to: 'svc-couple.jpg', w: 1000, q: 80 },
  { from: 'health-problem-01.jpg', to: 'svc-health.jpg', w: 1000, q: 80 },
  { from: 'careers-problem-in-bangalore.jpg', to: 'svc-career.jpg', w: 1000, q: 80 },
  { from: '06.jpg', to: 'svc-family.jpg', w: 1000, q: 78 },
  { from: 'slider7.jpg', to: 'svc-court.jpg', w: 1000, q: 78 },
  { from: 'panchamukhi-01.jpg', to: 'svc-finance.jpg', w: 1000, q: 78 },
  { from: '02.jpg', to: 'svc-political.jpg', w: 1000, q: 78 },
  // Pujas
  { from: 'slider6.jpg', to: 'puja-maha.jpg', w: 1000, q: 78 },
  { from: 'navagraha-01.jpg', to: 'puja-nav.jpg', w: 1000, q: 78 },
  { from: '012.jpg', to: 'puja-durga.jpg', w: 1000, q: 78 },
  { from: '013.jpg', to: 'puja-kaal.jpg', w: 1000, q: 78 },
  { from: 'panchamukhi-01.jpg', to: 'puja-lakshmi.jpg', w: 1000, q: 78 },
  // Photo gallery (16)
  { from: '01.jpg', to: 'gallery-01.jpg', w: 1200, q: 78 },
  { from: '02.jpg', to: 'gallery-02.jpg', w: 1200, q: 78 },
  { from: '06.jpg', to: 'gallery-03.jpg', w: 1200, q: 78 },
  { from: '08.jpg', to: 'gallery-04.jpg', w: 1200, q: 78 },
  { from: '09.jpg', to: 'gallery-05.jpg', w: 1200, q: 78 },
  { from: '010.jpg', to: 'gallery-06.jpg', w: 1200, q: 78 },
  { from: '011.jpg', to: 'gallery-07.jpg', w: 1200, q: 78 },
  { from: '012.jpg', to: 'gallery-08.jpg', w: 1200, q: 78 },
  { from: '013.jpg', to: 'gallery-09.jpg', w: 1200, q: 78 },
  { from: '014.jpg', to: 'gallery-10.jpg', w: 1200, q: 75 },
  { from: '1.jpg', to: 'gallery-11.jpg', w: 1200, q: 78 },
  { from: '2.jpg', to: 'gallery-12.jpg', w: 1200, q: 78 },
  { from: '14751141330674404745.jpg', to: 'gallery-13.jpg', w: 1200, q: 78 },
  { from: 'gallery-03.jpg', to: 'gallery-14.jpg', w: 1200, q: 78 },
  { from: 'slider5.jpg', to: 'gallery-15.jpg', w: 1200, q: 78 },
  { from: 'slider4.jpg', to: 'gallery-16.jpg', w: 1200, q: 78 },
];

/** @type {{ from: string, to: string }[]} */
const VIDEO_JOBS = [
  { from: 'WhatsApp Video 2026-05-31 at 8.51.35 PM.mp4', to: 'video-1.mp4' },
  { from: 'WhatsApp Video 2026-05-31 at 8.51.36 PM.mp4', to: 'video-2.mp4' },
  { from: '2.mp4', to: 'video-3.mp4' },
  { from: '4.mp4', to: 'video-4.mp4' },
];

const KEEP = new Set(['placeholder.svg', ...IMAGE_JOBS.map((j) => j.to)]);

async function processImage(job) {
  const input = path.join(OUT_DIR, job.from);
  const output = path.join(OUT_DIR, job.to);
  try {
    await fs.access(input);
  } catch {
    console.warn(`skip (missing): ${job.from}`);
    return;
  }
  await sharp(input)
    .rotate()
    .resize({ width: job.w, withoutEnlargement: true })
    .jpeg({ quality: job.q ?? 80, mozjpeg: true })
    .toFile(output);
  const stat = await fs.stat(output);
  console.log(`ok ${job.to} (${Math.round(stat.size / 1024)} KB)`);
}

async function processVideos() {
  await fs.mkdir(VIDEO_OUT, { recursive: true });
  for (const job of VIDEO_JOBS) {
    const input = path.join(OUT_DIR, job.from);
    const output = path.join(VIDEO_OUT, job.to);
    try {
      await fs.access(input);
    } catch {
      console.warn(`skip video (missing): ${job.from}`);
      continue;
    }
    await fs.copyFile(input, output);
    console.log(`video ${job.to}`);
  }
}

async function cleanup() {
  const entries = await fs.readdir(OUT_DIR);
  for (const name of entries) {
    if (name.endsWith('.mp4')) continue;
    if (KEEP.has(name)) continue;
    if (!/\.(jpe?g|png|webp|svg)$/i.test(name)) continue;
    await fs.unlink(path.join(OUT_DIR, name));
    console.log(`removed ${name}`);
  }
  for (const name of entries) {
    if (!name.endsWith('.mp4')) continue;
    await fs.unlink(path.join(OUT_DIR, name));
    console.log(`removed ${name}`);
  }
}

async function main() {
  for (const job of IMAGE_JOBS) {
    await processImage(job);
  }
  await processVideos();
  await cleanup();
  console.log('done');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
