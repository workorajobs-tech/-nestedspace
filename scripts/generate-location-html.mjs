import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import {
  getHtmlFileName,
  getLocationPageHtml,
  locationPageConfigs,
} from "../src/components/locationPageData.js";
import {
  getServiceHtmlFileName,
  getServicePageHtml,
  servicePageConfigs,
} from "../src/components/servicePageData.js";
import { getHomePageHtml } from "../src/seo/homePageMetadata.js";

const rootDir = fileURLToPath(new URL("..", import.meta.url));

writeFileSync(resolve(rootDir, "index.html"), getHomePageHtml());

for (const page of locationPageConfigs) {
  writeFileSync(resolve(rootDir, getHtmlFileName(page)), getLocationPageHtml(page));
}

for (const page of servicePageConfigs) {
  writeFileSync(resolve(rootDir, getServiceHtmlFileName(page)), getServicePageHtml(page));
}
