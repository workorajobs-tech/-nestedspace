import { readFileSync, writeFileSync } from "node:fs";
import { buildPages } from "../src/seo/pageCatalog.js";
import { render } from "../dist-ssr/entry-server.js";

const dist = new URL("../dist/", import.meta.url);
const manifest = JSON.parse(readFileSync(new URL(".vite/manifest.json", dist), "utf8"));

function stylesFor(key, seen = new Set()) {
  if (seen.has(key)) return [];
  seen.add(key);
  const chunk = manifest[key];
  if (!chunk) throw new Error(`Missing client bundle for ${key}`);
  return [...(chunk.css || []), ...(chunk.imports || []).flatMap(dep => stylesFor(dep, seen))];
}

for (const page of buildPages) {
  const file = new URL(page.htmlFileName, dist);
  let html = readFileSync(file, "utf8");
  const markup = await render(page.path);
  if (!markup.includes("<h1")) throw new Error(`Missing page content: ${page.path}`);
  if (!html.includes('<div id="root"></div>')) throw new Error(`Missing render target: ${page.path}`);
  html = html.replace('<div id="root"></div>', () => `<div id="root">${markup}</div>`);
  const styles = page.path === "/" ? [] : stylesFor(page.component);
  const links = [...new Set(styles)].filter(css => !html.includes(`href="/${css}"`))
    .map(css => `<link rel="stylesheet" href="/${css}" />`).join("\n    ");
  html = html.replace("</head>", `${links}\n  </head>`);
  writeFileSync(file, html);
  console.log(`Prerendered ${page.path}`);
}
