import { getHomePageHtml } from "./homePageMetadata.js";
import { locationPageConfigs, getHtmlFileName, getLocationPageHtml } from "../components/locationPageData.js";
import { servicePageConfigs, getServiceHtmlFileName, getServicePageHtml } from "../components/servicePageData.js";
import { getSupportPageHtml, aboutPageMetadata, pricingPageMetadata, samplesPageMetadata, notFoundMetadata } from "./supportPageMetadata.js";

export const pageCatalog = [
  { path: "/", htmlFileName: "index.html", html: getHomePageHtml, component: "src/main.tsx" },
  ...locationPageConfigs.map(page => ({ path: page.path, htmlFileName: getHtmlFileName(page), html: () => getLocationPageHtml(page), component: "src/components/LocationWebsiteDevelopmentPage.tsx" })),
  ...servicePageConfigs.map(page => ({ path: page.path, htmlFileName: getServiceHtmlFileName(page), html: () => getServicePageHtml(page), component: "src/components/ServiceSeoLandingPage.tsx" })),
  { path: "/pricing", htmlFileName: "pricing.html", html: () => getSupportPageHtml(pricingPageMetadata), component: "src/components/PricingPage.tsx" },
  { path: "/about", htmlFileName: "about.html", html: () => getSupportPageHtml(aboutPageMetadata), component: "src/components/AboutPage.tsx" },
  { path: "/samples", htmlFileName: "samples.html", html: () => getSupportPageHtml(samplesPageMetadata), component: "src/components/SamplesPage.tsx" },
];

export const notFoundPage = { path: "/404", htmlFileName: "404.html", html: () => getSupportPageHtml(notFoundMetadata), component: "src/components/NotFoundPage.tsx" };
export const buildPages = [...pageCatalog, notFoundPage];
