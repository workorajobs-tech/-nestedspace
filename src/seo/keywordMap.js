import { siteUrl } from "./businessEntity.js";

const locationPageDoNotTarget = [
  "website design",
  "business website development",
  "small business website development",
  "ecommerce website development",
  "landing page development",
  "web development services",
];

const servicePageDoNotTarget = [
  "website development company in Kerala",
  "website development company in Kozhikode",
  "website development company in Malappuram",
  "website development company in Wayanad",
  "website development company in Kochi",
  "website development company in Ernakulam",
  "website development company in Thrissur",
  "website development company in Bangalore",
  "website development company in Hyderabad",
];

const page = ({
  path,
  pageType,
  primaryTopic,
  secondaryTopics,
  searchIntent,
  geographicIntent,
  conversionIntent,
  title,
  metaDescription,
  h1,
  internalLinkRole,
  notes = [],
  doNotTarget = [],
}) => ({
  path,
  pageType,
  canonicalUrl: path === "/" ? `${siteUrl}/` : `${siteUrl}${path}`,
  primaryTopic,
  secondaryTopics,
  searchIntent,
  geographicIntent,
  conversionIntent,
  currentTitle: title,
  currentMetaDescription: metaDescription,
  currentH1: h1,
  titleAudit: "Unique, natural, brand included, and aligned with current page intent.",
  metaAudit: "Unique and aligned with the page offer. Revisit only when real Search Console queries justify it.",
  headingAudit: "One visible H1 should be rendered for this page; supporting H2/H3 headings should stay topical and natural.",
  internalLinkRole,
  dataPolicy: "Do not optimize from guessed volume. Use Search Console query, impression, CTR, and position data first.",
  doNotTarget,
  notes,
});

const locationPage = ({ slug, location, secondaryTopics, searchIntent, conversionIntent, title, description }) =>
  page({
    path: `/website-development-${slug}`,
    pageType: "location-service-area",
    primaryTopic: `website development company ${location}`,
    secondaryTopics,
    searchIntent,
    geographicIntent: location,
    conversionIntent,
    title,
    metaDescription: description,
    h1: `Website Development Company in ${location}`,
    internalLinkRole: "Service-area page connected to Kerala, nearby locations, and relevant service pages.",
    doNotTarget: locationPageDoNotTarget,
    notes:
      slug === "kozhikode"
        ? ["Kozhikode may mention the real Nested Space office at Hilite Business Park."]
        : ["This page must remain a service-area page and must not imply a physical branch."],
  });

export const keywordMap = [
  page({
    path: "/",
    pageType: "homepage",
    primaryTopic: "software development company",
    secondaryTopics: [
      "software development company in Kerala",
      "software company Kerala",
      "web development company Kerala",
      "website development company Kerala",
    ],
    searchIntent:
      "Brand and broad commercial discovery for businesses evaluating Nested Space as a software or web development company.",
    geographicIntent: "Kerala and India",
    conversionIntent: "Start a website request, view services, inspect sample formats, or contact Nested Space.",
    title: "Nested Space | Website Development Company in Kerala, India",
    metaDescription:
      "Nested Space is a website development and web development company in Kerala, India, creating mobile-friendly business websites for shops, Instagram sellers, startups, and small businesses.",
    h1: "Business Website Development in 48 Hours - Rs 2000 Pay After Work",
    internalLinkRole: "Primary brand and conversion page linking to core services, Kerala page, portfolio, pricing, and contact.",
    notes: [
      "Homepage is indexed. Wait for Search Console query data before changing the broad homepage title.",
      "Can support software company topics naturally through entity/schema and business copy, without forcing all phrases into the H1.",
    ],
  }),
  locationPage({
    slug: "kerala",
    location: "Kerala",
    secondaryTopics: [
      "web development company Kerala",
      "software development company Kerala",
      "web development services Kerala",
      "business website development Kerala",
    ],
    searchIntent: "Kerala-wide commercial search for website and web development support.",
    conversionIntent: "Start a website project or compare focused city/service pages.",
    title: "Website Development Company in Kerala | Nested Space",
    description:
      "Nested Space is a website development company in Kerala creating fast, mobile-friendly websites for businesses, shops, startups and online sellers.",
  }),
  locationPage({
    slug: "kozhikode",
    location: "Kozhikode",
    secondaryTopics: ["web development Kozhikode", "software company Kozhikode", "website development Kozhikode"],
    searchIntent: "Local commercial search for a Kozhikode website or web development provider.",
    conversionIntent: "Contact Nested Space or discuss the project through the real Kozhikode office/contact flow.",
    title: "Website Development Company in Kozhikode | Nested Space",
    description:
      "Nested Space provides fast, mobile-friendly website development services for businesses, shops, startups and online sellers in Kozhikode.",
  }),
  locationPage({
    slug: "malappuram",
    location: "Malappuram",
    secondaryTopics: ["web development Malappuram", "website development Malappuram", "business website Malappuram"],
    searchIntent: "Service-area search from Malappuram businesses comparing website providers.",
    conversionIntent: "Start a remote website discussion through the contact flow.",
    title: "Website Development Company in Malappuram | Nested Space",
    description:
      "Nested Space provides fast, mobile-friendly website development services for businesses, shops, startups and online sellers in Malappuram.",
  }),
  locationPage({
    slug: "wayanad",
    location: "Wayanad",
    secondaryTopics: ["web development Wayanad", "website development Wayanad", "tourism business website Wayanad"],
    searchIntent: "Service-area search from Wayanad businesses, including tourism and local service providers.",
    conversionIntent: "Request a website for a local business, tourism service, shop, or online brand.",
    title: "Website Development Company in Wayanad | Nested Space",
    description:
      "Nested Space provides fast, mobile-friendly website development services for businesses, shops, startups and online sellers in Wayanad.",
  }),
  locationPage({
    slug: "kochi",
    location: "Kochi",
    secondaryTopics: ["web development company Kochi", "website development Kochi", "business website Kochi"],
    searchIntent: "Commercial service-area search from Kochi startups, shops, hospitality, and online businesses.",
    conversionIntent: "Start a website request or compare service-specific pages.",
    title: "Website Development Company in Kochi | Nested Space",
    description:
      "Nested Space provides fast, mobile-friendly website development services for businesses, startups, shops and online brands in Kochi.",
  }),
  locationPage({
    slug: "ernakulam",
    location: "Ernakulam",
    secondaryTopics: ["web development Ernakulam", "website development Ernakulam", "business website Ernakulam"],
    searchIntent: "District-level service-area search for website development across Ernakulam.",
    conversionIntent: "Start a website request or compare Kochi/Kerala service pages.",
    title: "Website Development Company in Ernakulam | Nested Space",
    description:
      "Nested Space provides fast, mobile-friendly website development services for businesses, shops, startups and service providers across Ernakulam.",
  }),
  locationPage({
    slug: "thrissur",
    location: "Thrissur",
    secondaryTopics: ["web development Thrissur", "website development Thrissur", "business website Thrissur"],
    searchIntent: "Service-area search from Thrissur shops, professionals, startups, and sellers.",
    conversionIntent: "Start a website request through contact or WhatsApp.",
    title: "Website Development Company in Thrissur | Nested Space",
    description:
      "Nested Space provides fast, mobile-friendly website development services for businesses, shops, startups and online sellers in Thrissur.",
  }),
  locationPage({
    slug: "bangalore",
    location: "Bangalore",
    secondaryTopics: ["web development Bangalore", "website development Bangalore", "startup website Bangalore"],
    searchIntent: "Service-area search from Bangalore businesses needing website or landing page development.",
    conversionIntent: "Start a remote website discussion or compare web development/service pages.",
    title: "Website Development Company in Bangalore | Nested Space",
    description:
      "Nested Space provides fast, modern and mobile-friendly website development services for startups, businesses, professionals and online brands in Bangalore.",
  }),
  locationPage({
    slug: "hyderabad",
    location: "Hyderabad",
    secondaryTopics: ["web development Hyderabad", "website development Hyderabad", "startup website Hyderabad"],
    searchIntent: "Service-area search from Hyderabad startups, technology businesses, and online sellers.",
    conversionIntent: "Start a remote website discussion or compare broader web development services.",
    title: "Website Development Company in Hyderabad | Nested Space",
    description:
      "Nested Space provides fast, modern and mobile-friendly website development services for startups, businesses, professionals and online brands in Hyderabad.",
  }),
  page({
    path: "/website-design",
    pageType: "service",
    primaryTopic: "website design",
    secondaryTopics: ["professional website design", "responsive website design", "mobile-friendly website design"],
    searchIntent: "Service search for professional website layout, visual direction, and responsive design.",
    geographicIntent: "Non-location service intent",
    conversionIntent: "Request website design or move into website development.",
    title: "Professional Website Design Services | Nested Space",
    metaDescription:
      "Nested Space creates professional, responsive and mobile-friendly website designs for businesses, shops, startups and online sellers.",
    h1: "Professional Website Design Services",
    internalLinkRole: "Design-specific page connected to development and small business services.",
    doNotTarget: servicePageDoNotTarget,
  }),
  page({
    path: "/business-website-development",
    pageType: "service",
    primaryTopic: "business website development",
    secondaryTopics: ["business website development company", "company website development", "professional business website"],
    searchIntent: "Commercial service search from businesses needing a professional company/service website.",
    geographicIntent: "Non-location service intent",
    conversionIntent: "Start a business website project or request scope/pricing guidance.",
    title: "Business Website Development Services | Nested Space",
    metaDescription:
      "Nested Space builds professional business websites with mobile-friendly design, clear service sections, contact actions and basic SEO setup.",
    h1: "Business Website Development",
    internalLinkRole: "Core service page connected to web development, design, and Kerala/location pages.",
    doNotTarget: servicePageDoNotTarget,
  }),
  page({
    path: "/small-business-website-development",
    pageType: "service",
    primaryTopic: "small business website development",
    secondaryTopics: ["small business website", "affordable business website", "website for small businesses"],
    searchIntent: "Service search from small businesses, shops, freelancers, and sellers needing a simple website.",
    geographicIntent: "Non-location service intent",
    conversionIntent: "Request an affordable starter website.",
    title: "Small Business Website Development | Nested Space",
    metaDescription:
      "Nested Space creates affordable, mobile-friendly websites for small businesses, shops, service providers and online sellers.",
    h1: "Small Business Website Development",
    internalLinkRole: "Small-business service page connected to design and relevant Kerala/location pages.",
    doNotTarget: servicePageDoNotTarget,
  }),
  page({
    path: "/ecommerce-website-development",
    pageType: "service",
    primaryTopic: "ecommerce website development",
    secondaryTopics: ["online store website", "ecommerce website", "online shopping website development"],
    searchIntent: "Service search from sellers and shops needing product or online-store-style pages.",
    geographicIntent: "Non-location service intent",
    conversionIntent: "Request ecommerce/product website scope guidance.",
    title: "Ecommerce Website Development Services | Nested Space",
    metaDescription:
      "Nested Space creates mobile-friendly ecommerce and online store website pages for sellers, shops and online brands.",
    h1: "Ecommerce Website Development",
    internalLinkRole: "Ecommerce service page connected to landing pages, web development, and selected location pages.",
    doNotTarget: servicePageDoNotTarget,
  }),
  page({
    path: "/landing-page-development",
    pageType: "service",
    primaryTopic: "landing page development",
    secondaryTopics: ["landing page design", "business landing page", "campaign landing page"],
    searchIntent: "Service search from businesses needing a focused campaign, product, or offer page.",
    geographicIntent: "Non-location service intent",
    conversionIntent: "Request a launch or campaign landing page.",
    title: "Landing Page Design & Development | Nested Space",
    metaDescription:
      "Nested Space builds focused, mobile-friendly landing pages for business offers, campaigns, products, services and online sellers.",
    h1: "Landing Page Development",
    internalLinkRole: "Campaign/service page connected to design, ecommerce, and tech-city service-area pages.",
    doNotTarget: servicePageDoNotTarget,
  }),
  page({
    path: "/web-development-services",
    pageType: "service",
    primaryTopic: "web development services",
    secondaryTopics: ["website development services", "professional web development", "custom website development"],
    searchIntent: "Broad service search for practical web development and custom business website work.",
    geographicIntent: "Non-location service intent",
    conversionIntent: "Request web development scope guidance or compare specific service pages.",
    title: "Web Development Services | Nested Space",
    metaDescription:
      "Nested Space provides professional web development services for mobile-friendly business websites, landing pages and online seller pages.",
    h1: "Professional Web Development Services",
    internalLinkRole: "Broad web development page connected to business websites, design, and Kerala page.",
    doNotTarget: servicePageDoNotTarget,
  }),
];

export const keywordMapByPath = Object.fromEntries(keywordMap.map((entry) => [entry.path, entry]));

export const keywordMapAudit = Object.freeze({
  summary:
    "Existing SEO architecture is valid for a newly indexed site. The keyword map is for tracking and decision support, not for forcing phrases into copy.",
  titleFindings: [
    "Current important SEO pages use unique title tags.",
    "Location page titles consistently represent service + location + brand.",
    "Service page titles are distinct and do not need speculative rewrites before Search Console data appears.",
  ],
  metaFindings: [
    "Current descriptions are unique enough for the existing page set and avoid fake claims.",
    "Descriptions can be improved later for CTR only after queries and impressions are visible in Search Console.",
  ],
  internalLinkFindings: [
    "Homepage links to a small set of core SEO relationships, not every location page.",
    "Location pages link laterally to related locations and relevant services without exposing all SEO pages in the main navbar.",
    "Anchor text is mostly natural and should not be made more exact-match unless Search Console data supports it.",
  ],
  waitForSearchConsole: [
    "Do not create new pages solely from keyword ideas.",
    "Do not rewrite titles based on guessed query volume.",
    "Wait for queries with impressions, CTR, and average position before making copy changes.",
  ],
});
