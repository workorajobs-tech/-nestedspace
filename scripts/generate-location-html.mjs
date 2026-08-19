import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import {
  getHtmlFileName,
  getLocationPageHtml,
  locationPageConfigs,
} from "../src/components/locationPageData.js";

const rootDir = fileURLToPath(new URL("..", import.meta.url));

for (const page of locationPageConfigs) {
  writeFileSync(resolve(rootDir, getHtmlFileName(page)), getLocationPageHtml(page));
}
