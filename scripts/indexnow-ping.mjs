/**
 * Ping IndexNow after deploy. Run: node scripts/indexnow-ping.mjs
 * Requires the site to be live with the key file at /{key}.txt
 */
const SITE = "https://alphaxdezignerzstudio.com";
const KEY = "a1b2c3d4e5f6789012345678abcdef01";

const urls = [
  SITE,
  `${SITE}/services`,
  `${SITE}/portfolio`,
  `${SITE}/about`,
  `${SITE}/contact`,
];

const body = {
  host: new URL(SITE).host,
  key: KEY,
  keyLocation: `${SITE}/${KEY}.txt`,
  urlList: urls,
};

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(body),
});

console.log(`IndexNow: ${res.status} ${res.statusText}`);
