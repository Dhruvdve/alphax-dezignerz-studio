/**
 * Notify Google that the sitemap was updated.
 * Run: node scripts/ping-google-sitemap.mjs
 */
const SITEMAP = "https://www.alphaxdezignerzstudio.com/sitemap.xml";

const endpoints = [
  `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP)}`,
  `https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP)}`,
];

for (const url of endpoints) {
  try {
    const res = await fetch(url);
    console.log(`${url.split("?")[0]}: ${res.status} ${res.statusText}`);
  } catch (err) {
    console.log(`${url}: failed — ${err.message}`);
  }
}
