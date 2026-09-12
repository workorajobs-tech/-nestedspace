import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { buildPages, pageCatalog } from "../src/seo/pageCatalog.js";

const dist = new URL("../dist/", import.meta.url);
const pages = new Map(buildPages.map(page => [page.path, readFileSync(new URL(page.htmlFileName, dist), "utf8")]));
const canonicalOrigin = "https://nestedspace.in";
const decode = value => value.replaceAll("&amp;", "&").replaceAll("&quot;", '"').replaceAll("&#x27;", "'");
let linksChecked = 0;

for (const [path, html] of pages) {
  const label = `${path}: `;
  assert.equal((html.match(/<h1\b/g) || []).length, 1, label + "one rendered H1");
  assert.equal((html.match(/<main\b/g) || []).length, 1, label + "one main landmark");
  assert(!html.includes('<div id="root"></div>'), label + "body must be prerendered");
  assert(!html.includes("Finding your space…"), label + "no loading fallback");
  assert(!html.includes("<!--$!-->"), label + "no failed Suspense boundary");
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(new Set(ids).size, ids.length, label + "unique element IDs");
  const canonical = [...html.matchAll(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/g)];
  assert.equal(canonical.length, 1, label + "one canonical");
  assert.equal(canonical[0][1], canonicalOrigin + path, label + "canonical matches route");
  assert.match(html, /<meta\s+name="description"\s+content="[^"]{30,}"/, label + "description");
  assert.match(html, /<title>[^<]+<\/title>/, label + "title");
  assert.match(html, path === "/404" ? /name="robots" content="noindex, follow"/ : /name="robots" content="index, follow"/, label + "robots");
  for (const schema of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    assert.equal(JSON.parse(schema[1])["@context"], "https://schema.org", label + "valid JSON-LD");
  }
  for (const tag of html.matchAll(/<(?:script|img|source|video|link)\b[^>]*>/g)) {
    for (const asset of tag[0].matchAll(/(?:src|poster|href)="(\/[^"#?]+)"/g)) {
      assert(existsSync(new URL(asset[1].slice(1), dist)), label + "missing asset " + asset[1]);
    }
  }
  assert(!/src="\/src\//.test(html), label + "no development image URLs");
  for (const anchor of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
    const url = new URL(decode(anchor[1]), canonicalOrigin + path);
    if (url.origin !== canonicalOrigin) continue;
    const destination = pages.get(url.pathname);
    assert(destination, label + "missing internal destination " + url.pathname);
    if (url.hash) assert(destination.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`), label + "missing anchor " + url.pathname + url.hash);
    linksChecked++;
  }
}
const sitemap = readFileSync(new URL("sitemap.xml", dist), "utf8");
const sitemapUrls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
assert.deepEqual(sitemapUrls.sort(), pageCatalog.map(page => canonicalOrigin + page.path).sort(), "sitemap contains every indexable canonical route exactly once");
assert.match(readFileSync(new URL("robots.txt", dist), "utf8"), /Sitemap: https:\/\/nestedspace.in\/sitemap.xml/);
console.log(`Static build verified: ${pageCatalog.length} indexable pages, custom 404, assets, metadata, sitemap and ${linksChecked} internal links.`);
