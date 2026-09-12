import { writeFileSync } from "node:fs";
import { buildPages, pageCatalog } from "../src/seo/pageCatalog.js";

for (const page of buildPages) {
  writeFileSync(new URL(`../${page.htmlFileName}`, import.meta.url), page.html());
}

// Omit lastmod until we can provide real per-page modification dates.
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pageCatalog.map(page => `  <url><loc>https://nestedspace.in${page.path}</loc></url>`).join("\n")}
</urlset>
`;
writeFileSync(new URL("../public/sitemap.xml", import.meta.url), sitemap);
