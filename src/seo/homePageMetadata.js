import { getBusinessEntityGraph, socialImage } from "./businessEntity.js";
import { fontHeadLinks } from "./performanceHead.js";

export const homePageMetadata = Object.freeze({
  title: "Nested Space | Website Development Company in Kerala, India",
  description:
    "Nested Space is a website development and web development company in Kerala, India, creating mobile-friendly business websites for shops, Instagram sellers, startups, and small businesses.",
  canonical: "https://nestedspace.in/",
  openGraphDescription:
    "Nested Space creates mobile-friendly business websites and landing pages for shops, Instagram sellers, startups, and small businesses in Kerala and across India.",
  twitterDescription:
    "Mobile-friendly website development and landing page creation for small businesses, sellers, and startups.",
});

export const getHomeStructuredData = () => ({
  "@context": "https://schema.org",
  "@graph": getBusinessEntityGraph(),
});

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

export const getHomePageHtml = () => {
  const structuredData = JSON.stringify(getHomeStructuredData(), null, 8)
    .split("\n")
    .map((line) => `      ${line}`)
    .join("\n");

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" href="/favicon.png" />
    ${fontHeadLinks}
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="${escapeHtml(homePageMetadata.description)}"
    />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${homePageMetadata.canonical}" />
    <meta name="theme-color" content="#7c3aed" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${homePageMetadata.canonical}" />
    <meta property="og:title" content="${escapeHtml(homePageMetadata.title)}" />
    <meta
      property="og:description"
      content="${escapeHtml(homePageMetadata.openGraphDescription)}"
    />
    <meta property="og:image" content="${socialImage}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="800" />
    <meta property="og:image:alt" content="Nested Space logo" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(homePageMetadata.title)}" />
    <meta
      name="twitter:description"
      content="${escapeHtml(homePageMetadata.twitterDescription)}"
    />
    <meta name="twitter:image" content="${socialImage}" />
    <meta name="twitter:image:alt" content="Nested Space logo" />
    <script id="page-structured-data" type="application/ld+json">
${structuredData}
    </script>
    <title>${escapeHtml(homePageMetadata.title)}</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`;
};
