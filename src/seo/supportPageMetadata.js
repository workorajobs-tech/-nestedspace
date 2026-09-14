import { getHomePageHtml } from "./homePageMetadata.js";

export const aboutPageMetadata = {
  title: "About Nested Space | Meet the Founders",
  description: "Meet Salmanul Faris and Nithun, the founders of Nested Space, a website design and development studio in Kozhikode, Kerala. Discover our people and approach.",
  canonical: "https://nestedspace.in/about",
};

export const pricingPageMetadata = {
  title: "Website Pricing in India | ₹2,000 Starter | Nested Space",
  description: "Explore the ₹2,000 starter website with hosting included. Only the domain costs extra. See the scope, payment terms and prices for later updates or larger projects.",
  canonical: "https://nestedspace.in/pricing",
  openGraphTitle: "Website Pricing in India | Nested Space",
  openGraphDescription: "A ₹2,000 starter website with hosting included. Only the domain costs extra. Clear package scope and separate quotes for larger projects.",
};

export const samplesPageMetadata = {
  title: "Projects & Samples | Nested Space",
  description: "Explore Aether Form and Big Bangs live demos by Nested Space, plus a project case study and website concepts for small businesses, shops and sellers.",
  canonical: "https://nestedspace.in/samples",
};

export const notFoundMetadata = {
  title: "Page not found | Nested Space",
  description: "This page could not be found. Explore Nested Space websites, pricing and work examples.",
  canonical: "https://nestedspace.in/404",
  robots: "noindex, follow",
};

export const getSupportPageHtml = (metadata) => getHomePageHtml(metadata, null);
