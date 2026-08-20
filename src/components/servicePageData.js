import {
  getBusinessEntityGraph,
  getCanonicalUrl,
  siteUrl,
  socialImage,
} from "../seo/businessEntity.js";
import { fontHeadLinks } from "../seo/performanceHead.js";

const serviceProcess = [
  {
    title: "Share your business details",
    text: "Send your business name, offer, target customers, references, content and contact details.",
  },
  {
    title: "Confirm the page direction",
    text: "We shape the layout around the service goal, mobile users, enquiry path and essential sections.",
  },
  {
    title: "We design and build",
    text: "The website is built with responsive sections, clear copy, WhatsApp/contact actions and basic SEO setup.",
  },
  {
    title: "Review and request edits",
    text: "You review the agreed first version and request practical edits before payment.",
  },
  {
    title: "Go live",
    text: "After approval, we help with final checks, launch handover and contact-link verification.",
  },
];

const sharedServiceBenefits = [
  "Fast 48-hour first delivery for starter websites",
  "Mobile-first responsive layout",
  "Clear sections that explain your offer",
  "WhatsApp/contact enquiry flow",
  "Basic SEO setup for launch",
  "Pay After Work review process",
  "Simple structure customers can understand quickly",
];

export const servicePageConfigs = [
  {
    slug: "website-design",
    path: "/website-design",
    title: "Professional Website Design Services | Nested Space",
    description:
      "Nested Space creates professional, responsive and mobile-friendly website designs for businesses, shops, startups and online sellers.",
    eyebrow: "Website design",
    h1: "Professional Website Design Services",
    heroCopy:
      "Clean, mobile-friendly website design for businesses that need a clear offer, professional layout and simple enquiry path.",
    includeTitle: "What our website design service includes",
    includeIntro:
      "The design work focuses on practical business pages, not decorative screens that are hard to use on phones.",
    includes: [
      {
        title: "Responsive page layout",
        text: "Sections are planned for mobile, tablet and desktop so customers can read and contact you from any device.",
      },
      {
        title: "Business-focused copy structure",
        text: "The page is organized around what you offer, who it is for, proof or details, pricing direction and contact actions.",
      },
      {
        title: "Visual direction",
        text: "Colors, spacing, cards and buttons are shaped around a clean professional look that fits your business.",
      },
      {
        title: "Contact-ready design",
        text: "WhatsApp, phone or enquiry actions can be placed where customers naturally decide to contact you.",
      },
    ],
    audienceTitle: "Who website design is for",
    audienceIntro:
      "This service fits businesses that already know what they sell but need a professional page customers can trust.",
    audiences: [
      "Small businesses",
      "Local shops",
      "Instagram sellers",
      "Startups",
      "Service providers",
      "Freelancers",
      "Creators",
      "Personal brands",
    ],
    featureTitle: "Typical website design features",
    features: [
      "Hero section with clear offer",
      "Service or product sections",
      "Mobile-friendly cards",
      "WhatsApp/contact buttons",
      "Pricing or package guidance",
      "FAQ section",
      "Basic SEO title and description guidance",
      "Fast-loading layout decisions",
    ],
    mobileTitle: "Responsive website design for phone-first customers",
    mobileCopy:
      "Many customers open business websites from mobile. Nested Space designs pages with readable text, touch-friendly buttons and stacked sections that work cleanly on small screens.",
    contactTitle: "Website design with clear enquiry actions",
    contactCopy:
      "A good design should help customers take the next step. We can place WhatsApp or contact buttons near the offer, service details and final call to action.",
    pricingCopy:
      "Nested Space offers a starter website from ₹2000 with a Pay After Work approach. Final scope depends on page sections, content, integrations and launch needs.",
    intentQuestions: [
      {
        question: "What makes a website design professional?",
        answer:
          "A professional website design uses clear content hierarchy, responsive spacing, readable typography, consistent buttons and a contact path that matches the business goal.",
      },
      {
        question: "Is website design different from website development?",
        answer:
          "Website design focuses on layout, visual direction and user flow. Website development turns that structure into a working page with responsive sections and contact actions.",
      },
    ],
    faqs: [
      {
        question: "What is included in website design?",
        answer:
          "Website design can include layout planning, section structure, visual direction, responsive spacing, buttons, content flow and contact-ready page design.",
      },
      {
        question: "Will the design work on mobile phones?",
        answer:
          "Yes. Mobile-friendly website design is part of the Nested Space starter approach.",
      },
      {
        question: "Can you design a website for my small business?",
        answer:
          "Yes. Nested Space designs professional websites for small businesses, shops, sellers, startups and service providers.",
      },
      {
        question: "Do I need to pay before the design is ready?",
        answer:
          "The starter service follows a Pay After Work approach, so you review the agreed first version before payment.",
      },
      {
        question: "Can the design include WhatsApp contact buttons?",
        answer:
          "Yes. WhatsApp/contact actions can be included where they fit the agreed website scope.",
      },
    ],
  },
  {
    slug: "business-website-development",
    path: "/business-website-development",
    title: "Business Website Development Services | Nested Space",
    description:
      "Nested Space builds professional business websites with mobile-friendly design, clear service sections, contact actions and basic SEO setup.",
    eyebrow: "Business website development",
    h1: "Business Website Development",
    heroCopy:
      "Professional business websites that explain your services, build customer trust and make it easy for visitors to contact you.",
    includeTitle: "What business website development includes",
    includeIntro:
      "A business website should make your offer clear and remove confusion before customers call, message or visit.",
    includes: [
      {
        title: "Company or service overview",
        text: "Clear sections explain who you help, what you provide and why customers should contact you.",
      },
      {
        title: "Service pages or sections",
        text: "Your key services can be organized into readable sections with simple calls to action.",
      },
      {
        title: "Contact and enquiry flow",
        text: "WhatsApp, phone, form or contact buttons can guide visitors to the next step.",
      },
      {
        title: "Launch-ready basics",
        text: "The page includes mobile layout checks, SEO fundamentals and practical handover guidance.",
      },
    ],
    audienceTitle: "Who business websites are for",
    audienceIntro:
      "This service is useful for businesses that need one clear place to explain services and receive enquiries.",
    audiences: [
      "Service businesses",
      "Local companies",
      "Consultants",
      "Professionals",
      "Startups",
      "Agencies",
      "Shops",
      "Small teams",
    ],
    featureTitle: "Typical business website features",
    features: [
      "Service overview",
      "About/business details",
      "Benefits section",
      "Contact buttons",
      "FAQ section",
      "Pricing or package direction",
      "Responsive design",
      "Basic SEO metadata",
    ],
    mobileTitle: "Mobile-friendly business websites",
    mobileCopy:
      "Business customers often compare options from their phone. The layout keeps service details readable and contact buttons easy to tap.",
    contactTitle: "Built around real business enquiries",
    contactCopy:
      "Business websites can include WhatsApp and contact actions so visitors have a clear route from interest to enquiry.",
    pricingCopy:
      "Starter business websites begin from ₹2000 under the existing Pay After Work approach. Larger scopes can be discussed based on content and sections.",
    intentQuestions: [
      {
        question: "What should a business website include?",
        answer:
          "A business website should explain services, audience, benefits, contact details, frequently asked questions and the next step a customer should take.",
      },
      {
        question: "What affects business website pricing?",
        answer:
          "Pricing depends on the number of sections, content readiness, design complexity, contact flow, integrations, deployment needs and later update requirements.",
      },
    ],
    faqs: [
      {
        question: "What is business website development?",
        answer:
          "Business website development means creating a professional website that explains your company, services, contact details and customer next steps.",
      },
      {
        question: "Can Nested Space build a company website?",
        answer:
          "Yes. Nested Space builds professional business and company websites for services, shops, startups and small teams.",
      },
      {
        question: "How quickly can a business website be built?",
        answer:
          "For starter websites, we aim to deliver the first working version within 48 hours after receiving the required details.",
      },
      {
        question: "Can the website include WhatsApp and contact buttons?",
        answer:
          "Yes. WhatsApp/contact actions can be included where they fit the agreed website scope.",
      },
      {
        question: "Will my business website include basic SEO setup?",
        answer:
          "Yes. Basic SEO setup can include page title, meta description guidance, headings and crawlable page copy.",
      },
    ],
  },
  {
    slug: "small-business-website-development",
    path: "/small-business-website-development",
    title: "Small Business Website Development | Nested Space",
    description:
      "Nested Space creates affordable, mobile-friendly websites for small businesses, shops, service providers and online sellers.",
    eyebrow: "Small business websites",
    h1: "Small Business Website Development",
    heroCopy:
      "Affordable, mobile-friendly websites for small businesses that need a professional online presence without a heavy setup.",
    includeTitle: "What small business website development includes",
    includeIntro:
      "Small business websites need to be simple, clear and useful for customers who want quick answers.",
    includes: [
      {
        title: "Clear offer section",
        text: "Show what you sell, where you serve customers and how people can contact you.",
      },
      {
        title: "Product or service highlights",
        text: "Display key products, services, packages or offers in simple sections customers can scan.",
      },
      {
        title: "WhatsApp-ready contact flow",
        text: "Make it easy for customers to message, ask questions or request details from the website.",
      },
      {
        title: "Mobile-first page build",
        text: "The page is built for phone users first, with readable content and clear buttons.",
      },
    ],
    audienceTitle: "Who small business websites are for",
    audienceIntro:
      "This service fits owners who use referrals, Instagram, WhatsApp or local customers and need one stable business page.",
    audiences: [
      "Small shops",
      "Restaurants",
      "Service providers",
      "Instagram sellers",
      "Freelancers",
      "Local businesses",
      "Online sellers",
      "Personal brands",
    ],
    featureTitle: "Typical small business website features",
    features: [
      "Business name and offer",
      "Products or services",
      "Location/contact details",
      "WhatsApp CTA",
      "Simple pricing direction",
      "FAQ section",
      "Mobile layout",
      "Basic SEO setup",
    ],
    mobileTitle: "Designed for customers who visit from mobile",
    mobileCopy:
      "Small business customers often come from WhatsApp, Instagram or Google on phones. The page keeps information clear and actions easy to tap.",
    contactTitle: "Turn social traffic into enquiries",
    contactCopy:
      "A small business website gives Instagram, WhatsApp and referral customers a clean page where they can understand your business before messaging.",
    pricingCopy:
      "Nested Space supports affordable starter websites from ₹2000 with Pay After Work. The final scope depends on content, sections and launch requirements.",
    intentQuestions: [
      {
        question: "Do small businesses really need a website?",
        answer:
          "A small business website gives customers one stable place to understand products, services, location, contact details and trust signals outside social media.",
      },
      {
        question: "What should a small business website include?",
        answer:
          "It should include a clear offer, product or service details, contact buttons, location or service area, pricing direction where useful and a mobile-friendly layout.",
      },
    ],
    faqs: [
      {
        question: "How much does a small business website cost?",
        answer:
          "Nested Space offers starter websites from ₹2000. The final scope depends on the number of sections, content and launch needs.",
      },
      {
        question: "Can you build a website for a local shop?",
        answer:
          "Yes. We build websites for local shops, restaurants, service providers, sellers and small businesses.",
      },
      {
        question: "Can my small business website include WhatsApp?",
        answer:
          "Yes. WhatsApp contact actions can be included where they fit the agreed website scope.",
      },
      {
        question: "Do I need a lot of content before starting?",
        answer:
          "No. You can start with your business name, offer, basic details, references and contact information.",
      },
      {
        question: "Will the website be mobile-friendly?",
        answer:
          "Yes. Mobile-friendly layout is part of the starter website approach.",
      },
    ],
  },
  {
    slug: "ecommerce-website-development",
    path: "/ecommerce-website-development",
    title: "Ecommerce Website Development Services | Nested Space",
    description:
      "Nested Space creates mobile-friendly ecommerce and online store website pages for sellers, shops and online brands.",
    eyebrow: "Ecommerce website development",
    h1: "Ecommerce Website Development",
    heroCopy:
      "Mobile-friendly ecommerce website pages and online store layouts for sellers, shops and brands that need clearer product presentation.",
    includeTitle: "What ecommerce website development can include",
    includeIntro:
      "For early sellers and small brands, a focused ecommerce page can make products easier to understand before a full complex store is needed.",
    includes: [
      {
        title: "Product presentation sections",
        text: "Show featured products, categories, offers or collections with clean mobile-friendly cards.",
      },
      {
        title: "Enquiry or order direction",
        text: "Guide customers to WhatsApp, contact actions or payment direction where it fits the agreed scope.",
      },
      {
        title: "Brand and trust sections",
        text: "Explain what you sell, who it is for, delivery/payment notes and common customer questions.",
      },
      {
        title: "Online seller landing pages",
        text: "Create a clearer destination for traffic from Instagram, ads, WhatsApp or search.",
      },
    ],
    audienceTitle: "Who ecommerce website development is for",
    audienceIntro:
      "This service is useful for sellers and brands that need a cleaner product destination before or alongside a full online store.",
    audiences: [
      "Online sellers",
      "Instagram shops",
      "Local shops",
      "Small ecommerce brands",
      "Product businesses",
      "Creators selling products",
      "Boutiques",
      "Home businesses",
    ],
    featureTitle: "Typical ecommerce website features",
    features: [
      "Product/category sections",
      "Offer highlights",
      "WhatsApp order/enquiry CTA",
      "UPI-ready copy direction",
      "Delivery/payment notes",
      "FAQ section",
      "Mobile product cards",
      "Basic SEO setup",
    ],
    mobileTitle: "Online store pages built for mobile shoppers",
    mobileCopy:
      "Many buyers discover products on mobile. Ecommerce pages need clear product sections, short copy and contact/order buttons that are easy to use on small screens.",
    contactTitle: "Support enquiries before purchase",
    contactCopy:
      "For small sellers, WhatsApp enquiries can help customers ask about size, price, delivery or availability before ordering.",
    pricingCopy:
      "A focused starter ecommerce landing page can begin from ₹2000. Larger online store requirements need separate scope discussion.",
    intentQuestions: [
      {
        question: "What does an online store website include?",
        answer:
          "An online store website can include product categories, product highlights, ordering or enquiry direction, delivery notes, payment guidance and FAQ content.",
      },
      {
        question: "How much does an ecommerce website cost?",
        answer:
          "A focused ecommerce landing page can start from ₹2000, while full cart, checkout, inventory and account features require a separate custom scope.",
      },
    ],
    faqs: [
      {
        question: "Can Nested Space build an ecommerce website?",
        answer:
          "Nested Space can build focused ecommerce website pages and online store-style landing pages for sellers, shops and online brands.",
      },
      {
        question: "Can the page show products?",
        answer:
          "Yes. Product sections, categories, offers and product highlights can be included within the agreed scope.",
      },
      {
        question: "Can customers order through WhatsApp?",
        answer:
          "WhatsApp enquiry or order direction can be added where it fits the business and agreed page flow.",
      },
      {
        question: "Is this the same as a full shopping cart website?",
        answer:
          "Not always. A starter ecommerce page is usually a focused product or enquiry page. Full cart, inventory or checkout systems need separate scoping.",
      },
      {
        question: "Will the ecommerce page work on mobile?",
        answer:
          "Yes. Mobile-friendly product presentation is a key part of the page.",
      },
    ],
  },
  {
    slug: "landing-page-development",
    path: "/landing-page-development",
    title: "Landing Page Design & Development | Nested Space",
    description:
      "Nested Space builds focused, mobile-friendly landing pages for business offers, campaigns, products, services and online sellers.",
    eyebrow: "Landing page development",
    h1: "Landing Page Development",
    heroCopy:
      "Focused landing pages for one offer, campaign, product or service, built to explain the value clearly and guide visitors to contact you.",
    includeTitle: "What landing page development includes",
    includeIntro:
      "A landing page works best when it has one clear goal and removes unnecessary distractions.",
    includes: [
      {
        title: "Single-offer page structure",
        text: "The page is built around one service, product, campaign or promotion so visitors know what to do next.",
      },
      {
        title: "Clear conversion sections",
        text: "Hero, benefits, features, pricing direction, FAQ and CTA sections can be arranged around the offer.",
      },
      {
        title: "Mobile-first CTA placement",
        text: "Buttons are placed where mobile visitors naturally decide to enquire or continue.",
      },
      {
        title: "Launch-friendly SEO basics",
        text: "The page can include crawlable content, title, description and structured headings for search visibility.",
      },
    ],
    audienceTitle: "Who landing pages are for",
    audienceIntro:
      "Landing pages are useful when you want to promote one thing clearly instead of sending visitors to a general homepage.",
    audiences: [
      "Campaigns",
      "Product launches",
      "Service offers",
      "Instagram sellers",
      "Consultants",
      "Startups",
      "Local businesses",
      "Creators",
    ],
    featureTitle: "Typical landing page features",
    features: [
      "Offer-focused hero",
      "Benefits section",
      "Feature cards",
      "Pricing guidance",
      "FAQ section",
      "WhatsApp/contact CTA",
      "Mobile responsive layout",
      "Basic SEO setup",
    ],
    mobileTitle: "Landing pages built for quick mobile decisions",
    mobileCopy:
      "Campaign visitors often arrive from social media, search or messaging apps. The page keeps the offer clear and makes the next step easy on phones.",
    contactTitle: "Designed around one enquiry action",
    contactCopy:
      "Landing pages can guide visitors toward WhatsApp, a contact section or another simple enquiry action based on the campaign goal.",
    pricingCopy:
      "Starter landing pages can begin from ₹2000 using the Pay After Work approach. Additional sections, content or integrations can change scope.",
    intentQuestions: [
      {
        question: "What is a landing page?",
        answer:
          "A landing page is a focused page built around one offer, service, product or campaign with a clear call to action.",
      },
      {
        question: "When should a business use a landing page?",
        answer:
          "A business should use a landing page when it wants to promote one offer clearly, test a campaign, support ads or send social traffic to a focused destination.",
      },
    ],
    faqs: [
      {
        question: "What is landing page development?",
        answer:
          "Landing page development means building a focused page for one offer, product, service or campaign with a clear call to action.",
      },
      {
        question: "Can I use a landing page for ads or Instagram traffic?",
        answer:
          "Yes. A focused landing page can give social or campaign visitors one clear place to understand the offer and contact you.",
      },
      {
        question: "How fast can a landing page be built?",
        answer:
          "For starter pages, we aim to deliver the first working version within 48 hours after receiving the needed details.",
      },
      {
        question: "Can the page include WhatsApp CTA?",
        answer:
          "Yes. WhatsApp or contact CTAs can be included where they fit the landing page goal.",
      },
      {
        question: "Will the landing page be mobile-friendly?",
        answer:
          "Yes. Mobile-friendly layout is part of the starter landing page approach.",
      },
    ],
  },
  {
    slug: "web-development-services",
    path: "/web-development-services",
    title: "Web Development Services | Nested Space",
    description:
      "Nested Space provides professional web development services for mobile-friendly business websites, landing pages and online seller pages.",
    eyebrow: "Web development services",
    h1: "Professional Web Development Services",
    heroCopy:
      "Modern web development services for businesses that need mobile-friendly pages, clear content, basic SEO setup and practical enquiry flows.",
    includeTitle: "What our web development services include",
    includeIntro:
      "Nested Space focuses on practical websites that business owners can launch, share and use for enquiries.",
    includes: [
      {
        title: "Custom page development",
        text: "Pages can be built around your offer, business details, services, contact flow and launch goals.",
      },
      {
        title: "Responsive frontend build",
        text: "Layouts are checked across mobile and desktop so sections stay readable and buttons remain usable.",
      },
      {
        title: "Content and SEO foundations",
        text: "Headings, page copy, title and description guidance can be included as part of the launch setup.",
      },
      {
        title: "Contact integrations",
        text: "WhatsApp/contact actions and UPI-ready direction can be added when they fit the agreed scope.",
      },
    ],
    audienceTitle: "Who our web development services are for",
    audienceIntro:
      "This service fits teams and owners who need a practical website rather than a large, complex software build.",
    audiences: [
      "Business owners",
      "Startups",
      "Shops",
      "Service providers",
      "Consultants",
      "Online sellers",
      "Creators",
      "Small teams",
    ],
    featureTitle: "Typical web development features",
    features: [
      "Responsive page sections",
      "Reusable card layouts",
      "Contact CTAs",
      "FAQ sections",
      "Metadata setup",
      "Performance-conscious assets",
      "Mobile layout checks",
      "Launch handover support",
    ],
    mobileTitle: "Responsive web development for real business use",
    mobileCopy:
      "A business website should not only look good on a laptop. Nested Space builds pages that work cleanly for mobile visitors, repeated sharing and quick enquiries.",
    contactTitle: "Development that supports contact and conversion",
    contactCopy:
      "The page structure can support WhatsApp enquiries, contact sections, service descriptions and clear next steps while keeping claims realistic.",
    pricingCopy:
      "Starter website development begins from ₹2000 with Pay After Work. Larger custom web development scopes can be discussed based on requirements.",
    intentQuestions: [
      {
        question: "What is included in professional web development?",
        answer:
          "Professional web development can include responsive frontend sections, page structure, contact actions, metadata setup, deployment checks and maintainable page code.",
      },
      {
        question: "When is custom website development useful?",
        answer:
          "Custom website development is useful when a business needs page sections, flows or integrations that cannot be handled well by a generic template.",
      },
    ],
    faqs: [
      {
        question: "What web development services does Nested Space provide?",
        answer:
          "Nested Space provides web development for business websites, landing pages, online seller pages and mobile-friendly service pages.",
      },
      {
        question: "Can you build a custom website?",
        answer:
          "Yes. Custom website sections and page structure can be planned around your business and agreed scope.",
      },
      {
        question: "Do your web development services include SEO basics?",
        answer:
          "Yes. Basic SEO setup can include crawlable text, headings, title and description guidance.",
      },
      {
        question: "Can the website include WhatsApp/contact actions?",
        answer:
          "Yes. WhatsApp and contact actions can be included where they fit the page goal.",
      },
      {
        question: "How much does web development cost?",
        answer:
          "Nested Space offers starter websites from ₹2000. Larger web development work depends on the requirements and scope.",
      },
    ],
  },
];

export const servicePageMap = Object.fromEntries(servicePageConfigs.map((page) => [page.slug, page]));

export const getServicePageByPath = (path) => servicePageConfigs.find((page) => page.path === path);

export const getServiceStructuredData = (page) => ({
  "@context": "https://schema.org",
  "@graph": [
    ...getBusinessEntityGraph(),
    {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}${page.path}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${siteUrl}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: page.h1,
          item: `${siteUrl}${page.path}`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}${page.path}#faq`,
      mainEntity: page.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
});

export const getServiceHtmlFileName = (page) => `${page.path.slice(1)}.html`;

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

export const getServicePageHtml = (page) => {
  const canonical = getCanonicalUrl(page.path);
  const structuredData = JSON.stringify(getServiceStructuredData(page), null, 8)
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
      content="${escapeHtml(page.description)}"
    />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${canonical}" />
    <meta name="theme-color" content="#7c3aed" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:title" content="${escapeHtml(page.title)}" />
    <meta
      property="og:description"
      content="${escapeHtml(page.description)}"
    />
    <meta property="og:image" content="${socialImage}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="800" />
    <meta property="og:image:alt" content="Nested Space logo" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(page.title)}" />
    <meta
      name="twitter:description"
      content="${escapeHtml(page.description)}"
    />
    <meta name="twitter:image" content="${socialImage}" />
    <meta name="twitter:image:alt" content="Nested Space logo" />
    <script id="page-structured-data" type="application/ld+json">
${structuredData}
    </script>
    <title>${escapeHtml(page.title)}</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`;
};

export { serviceProcess, sharedServiceBenefits, siteUrl, socialImage };
