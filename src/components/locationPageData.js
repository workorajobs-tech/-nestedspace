import {
  getBusinessEntityGraph,
  getCanonicalUrl,
  siteUrl,
  socialImage,
} from "../seo/businessEntity.js";

const strengths = [
  "Fast 48-hour first delivery",
  "₹2000 starter website",
  "Pay After Work",
  "Mobile-first design",
  "WhatsApp integration",
  "UPI-ready websites",
  "Responsive design",
  "Basic SEO setup",
  "AI-assisted workflows + custom development",
];

const benefits = [
  "Establish an online presence customers can visit any time",
  "Receive WhatsApp enquiries from your website",
  "Showcase products, services, pricing, and offers clearly",
  "Share contact information and business location",
  "Build credibility with a professional website",
  "Present the business professionally on mobile",
  "Give customers one clear place to understand the business",
];

const processSteps = [
  {
    title: "Tell us about your business",
    text: "Share your business name, products or services, colors, references, and contact details.",
  },
  {
    title: "Approve the design",
    text: "We prepare a focused layout for your audience and offer, then confirm the direction with you.",
  },
  {
    title: "We build the website",
    text: "Your responsive website is built with core sections, mobile layout, and contact actions in place.",
  },
  {
    title: "Review and request edits",
    text: "You review the page and request edits within the agreed starter scope before payment.",
  },
  {
    title: "Go live",
    text: "After approval, we help with deployment checks, contact links, and launch handover.",
  },
];

const defaultServices = (page) => [
  {
    title: "Business Websites",
    text: `Professional business websites for ${page.serviceArea} that explain your offer, show contact details, and help customers understand your services quickly.`,
  },
  {
    title: "Small Business Websites",
    text: `Simple, mobile-friendly websites for small businesses in ${page.location} that need a clear online presence without a heavy setup.`,
  },
  {
    title: "Startup Websites",
    text: `Focused startup websites with service sections, enquiry flows, launch-ready copy, and a mobile layout for early customers.`,
  },
  {
    title: "Local Shop Websites",
    text: `Websites for local shops, restaurants, and service providers to showcase products, location, contact details, and WhatsApp enquiries.`,
  },
  {
    title: "Instagram Seller Websites",
    text: `Landing pages for online sellers who want to move customers from Instagram to a structured catalogue or enquiry page.`,
  },
  {
    title: "Landing Pages",
    text: `Campaign-ready landing pages built around one clear offer, fast loading, mobile layout, and a strong contact flow.`,
  },
];

const techHubServices = (page) => [
  {
    title: "Business Websites",
    text: `Professional business websites for ${page.serviceArea} that explain services, pricing direction, contact details, and customer next steps.`,
  },
  {
    title: "Small Business Websites",
    text: `Mobile-friendly websites for small businesses and professional services in ${page.location} that need a clear, credible online presence.`,
  },
  {
    title: "Startup Websites",
    text: `Focused websites for startups, SaaS products, consultants, and digital businesses that need clear positioning and enquiry flows.`,
  },
  {
    title: "Local Shop Websites",
    text: `Websites for shops, service providers, and offline businesses that want WhatsApp enquiries, service details, and mobile-first pages.`,
  },
  {
    title: "Instagram Seller Websites",
    text: `Landing pages for online sellers and ecommerce brands that need a cleaner path from social traffic to enquiries.`,
  },
  {
    title: "Landing Pages",
    text: `Launch and campaign landing pages for offers, product validation, services, events, or paid traffic experiments.`,
  },
];

export const locationPageConfigs = [
  {
    slug: "kerala",
    location: "Kerala",
    path: "/website-development-kerala",
    title: "Website Development Company in Kerala | Nested Space",
    description:
      "Nested Space is a website development company in Kerala creating fast, mobile-friendly websites for businesses, shops, startups and online sellers.",
    serviceArea: "Kerala businesses",
    eyebrow: "Website development Kerala",
    heroCopy:
      "Fast, mobile-friendly websites for Kerala businesses, shops, startups, service providers and online sellers. Get your website started from ₹2000 with our Pay After Work approach.",
    introKicker: "For Kerala businesses",
    introTitle: "A professional website helps customers trust and contact your business",
    introBody:
      "Customers often check a business online before they call, message, visit, or buy. A clear website can help local shops, restaurants, service providers, freelancers, startups, Instagram sellers, and small businesses explain what they offer and make it easy for people to enquire.",
    introSupport:
      "Nested Space creates business websites that are simple to understand, easy to open on mobile phones, and built around practical contact actions such as WhatsApp enquiries and service information.",
    servicesTitle: "Websites we create for businesses in Kerala",
    servicesIntro:
      "Our website development Kerala service focuses on useful pages that explain your business clearly and help customers take the next step.",
    strengthsTitle: "Affordable website development Kerala businesses can start quickly",
    strengthsIntro:
      "We keep the process focused for small teams and business owners who need a professional website without a long setup cycle.",
    audienceTitle: "Website for small businesses in Kerala and growing online brands",
    audienceIntro:
      "Whether you sell locally, take enquiries through WhatsApp, or promote services on Instagram, a professional business website gives customers one clear place to understand and contact you.",
    audiences: [
      "Kerala small businesses",
      "Local shops",
      "Startups",
      "Instagram sellers",
      "Freelancers",
      "Service businesses",
      "Creators and personal brands",
    ],
    valueKicker: "Kerala-focused value",
    valueTitle: "How a mobile-friendly website can support your Kerala business",
    localLinksIntro: "Looking for website development services in specific locations?",
    localLinks: [
      { label: "Kozhikode", path: "/website-development-kozhikode" },
      { label: "Kochi", path: "/website-development-kochi" },
      { label: "Thrissur", path: "/website-development-thrissur" },
      { label: "Malappuram", path: "/website-development-malappuram" },
    ],
  },
  {
    slug: "kozhikode",
    location: "Kozhikode",
    path: "/website-development-kozhikode",
    title: "Website Development Company in Kozhikode | Nested Space",
    description:
      "Nested Space provides fast, mobile-friendly website development services for businesses, shops, startups and online sellers in Kozhikode.",
    serviceArea: "Kozhikode businesses",
    eyebrow: "Website development Kozhikode",
    heroCopy:
      "Fast, mobile-friendly websites for Kozhikode businesses, shops, restaurants, service providers, startups, professionals and online sellers.",
    introKicker: "For Kozhikode businesses",
    introTitle: "A clear website helps Kozhikode customers understand your business faster",
    introBody:
      "Kozhikode has active local shops, restaurants, service businesses, professionals, startups and online sellers. A professional website gives customers one place to check your offer, location, contact options and next steps before they message or visit.",
    introSupport:
      "Nested Space builds practical websites for businesses serving Kozhikode customers, with mobile-first layouts, WhatsApp enquiry actions and simple sections that explain what you sell or provide.",
    servicesTitle: "Website development services for businesses in Kozhikode",
    servicesIntro:
      "From local shop pages to startup landing pages, the focus is on fast-loading websites that make enquiries easier for Kozhikode customers.",
    strengthsTitle: "Website development Kozhikode businesses can start without a long setup",
    strengthsIntro:
      "The starter process is built for owners who need a website quickly, want to review the work first, and need practical contact actions.",
    audienceTitle: "Websites for Kozhikode shops, sellers, startups and service businesses",
    audienceIntro:
      "We support businesses that need a clear website for WhatsApp enquiries, service explanation, product visibility or a simple launch page.",
    audiences: [
      "Kozhikode small businesses",
      "Local shops",
      "Restaurants",
      "Service providers",
      "Professionals",
      "Startups",
      "Instagram sellers",
      "Online sellers",
    ],
    valueKicker: "Kozhikode business value",
    valueTitle: "How a mobile-friendly website can support your Kozhikode business",
    localLinksIntro: "Need nearby Kerala location pages?",
    localLinks: [
      { label: "Kerala", path: "/website-development-kerala" },
      { label: "Malappuram", path: "/website-development-malappuram" },
      { label: "Wayanad", path: "/website-development-wayanad" },
    ],
  },
  {
    slug: "malappuram",
    location: "Malappuram",
    path: "/website-development-malappuram",
    title: "Website Development Company in Malappuram | Nested Space",
    description:
      "Nested Space provides fast, mobile-friendly website development services for businesses, shops, startups and online sellers in Malappuram.",
    serviceArea: "Malappuram businesses",
    eyebrow: "Website development Malappuram",
    heroCopy:
      "Fast, mobile-friendly websites for Malappuram businesses, shops, service businesses, professionals, startups, online sellers and small businesses.",
    introKicker: "For Malappuram businesses",
    introTitle: "A business website makes it easier for Malappuram customers to trust and contact you",
    introBody:
      "Many Malappuram businesses depend on WhatsApp, social media, referrals and local visibility. A professional website gives customers a stable place to see your services, products, pricing direction and contact details.",
    introSupport:
      "Nested Space creates simple, mobile-friendly websites for Malappuram shops, service providers, professionals, startups and online sellers who need a clear digital presence.",
    servicesTitle: "Website development services for businesses in Malappuram",
    servicesIntro:
      "The page structure stays focused on useful business information, mobile layout, WhatsApp enquiries and customer clarity.",
    strengthsTitle: "Affordable website development Malappuram businesses can review first",
    strengthsIntro:
      "With a starter website from ₹2000 and Pay After Work, you can review the agreed website before payment.",
    audienceTitle: "Websites for Malappuram shops, professionals and small businesses",
    audienceIntro:
      "Whether your customers find you through search, Instagram, referrals or WhatsApp, a website gives them one clear place to understand your business.",
    audiences: [
      "Malappuram small businesses",
      "Local shops",
      "Service businesses",
      "Professionals",
      "Startups",
      "Instagram sellers",
      "Online sellers",
      "Personal brands",
    ],
    valueKicker: "Malappuram business value",
    valueTitle: "How a mobile-friendly website can support your Malappuram business",
    localLinksIntro: "Explore related Kerala location pages.",
    localLinks: [
      { label: "Kerala", path: "/website-development-kerala" },
      { label: "Kozhikode", path: "/website-development-kozhikode" },
      { label: "Thrissur", path: "/website-development-thrissur" },
    ],
  },
  {
    slug: "wayanad",
    location: "Wayanad",
    path: "/website-development-wayanad",
    title: "Website Development Company in Wayanad | Nested Space",
    description:
      "Nested Space provides fast, mobile-friendly website development services for businesses, shops, startups and online sellers in Wayanad.",
    serviceArea: "Wayanad businesses",
    eyebrow: "Website development Wayanad",
    heroCopy:
      "Fast, mobile-friendly websites for Wayanad businesses, tourism-related services, homestays, resorts, shops, restaurants and online brands.",
    introKicker: "For Wayanad businesses",
    introTitle: "A professional website helps Wayanad businesses present details customers look for",
    introBody:
      "Customers researching Wayanad businesses often want clear photos, service details, contact options, location information and mobile-friendly pages. This matters for homestays, resorts, restaurants, local shops, service providers and small businesses.",
    introSupport:
      "Nested Space builds focused websites that make it easier to explain your offer, collect WhatsApp enquiries and present your business clearly on phones.",
    servicesTitle: "Website development services for businesses in Wayanad",
    servicesIntro:
      "The goal is a useful website that can support local discovery, enquiry flow and mobile-first presentation without making unsupported ranking promises.",
    strengthsTitle: "Website development Wayanad businesses can start quickly",
    strengthsIntro:
      "We keep the first version focused so business owners can review the layout, content and contact flow before payment.",
    audienceTitle: "Websites for Wayanad tourism businesses, shops and service providers",
    audienceIntro:
      "A website helps customers understand what you offer before they call, book, visit or message from mobile.",
    audiences: [
      "Wayanad small businesses",
      "Homestays",
      "Resorts",
      "Restaurants",
      "Local shops",
      "Service providers",
      "Online brands",
      "Creators",
    ],
    valueKicker: "Wayanad business value",
    valueTitle: "How a mobile-friendly website can support your Wayanad business",
    localLinksIntro: "Explore nearby website development pages.",
    localLinks: [
      { label: "Kerala", path: "/website-development-kerala" },
      { label: "Kozhikode", path: "/website-development-kozhikode" },
    ],
  },
  {
    slug: "kochi",
    location: "Kochi",
    path: "/website-development-kochi",
    title: "Website Development Company in Kochi | Nested Space",
    description:
      "Nested Space provides fast, mobile-friendly website development services for businesses, startups, shops and online brands in Kochi.",
    serviceArea: "Kochi businesses",
    eyebrow: "Website development Kochi",
    heroCopy:
      "Fast, mobile-friendly websites for Kochi startups, restaurants, hospitality businesses, professional services, ecommerce brands and online businesses.",
    introKicker: "For Kochi businesses",
    introTitle: "A focused website helps Kochi brands explain their offer and capture enquiries",
    introBody:
      "Kochi has a mix of startups, restaurants, hospitality businesses, agencies, freelancers, ecommerce sellers, professional services and growing brands. A website helps these businesses present offers clearly and give customers one reliable place to enquire.",
    introSupport:
      "Nested Space creates mobile-friendly websites for businesses targeting customers in Kochi, with clear sections, strong contact actions and practical launch-ready copy.",
    servicesTitle: "Website development services for businesses in Kochi",
    servicesIntro:
      "Kochi pages can support launches, service enquiries, restaurant visibility, ecommerce direction and online brand presentation.",
    strengthsTitle: "Website development Kochi businesses can use for fast launches",
    strengthsIntro:
      "The starter workflow is useful for growing brands that need a polished first version quickly, then want to review and refine it.",
    audienceTitle: "Websites for Kochi startups, restaurants, agencies and online brands",
    audienceIntro:
      "For businesses competing for attention in Kochi, a mobile-friendly website can make the offer clearer than a social profile alone.",
    audiences: [
      "Kochi startups",
      "Restaurants",
      "Hospitality businesses",
      "Professional services",
      "Ecommerce brands",
      "Online businesses",
      "Agencies and freelancers",
      "Growing brands",
    ],
    valueKicker: "Kochi business value",
    valueTitle: "How a mobile-friendly website can support your Kochi business",
    localLinksIntro: "Kochi and Ernakulam searches can differ. Explore both pages if needed.",
    localLinks: [
      { label: "Kerala", path: "/website-development-kerala" },
      { label: "Ernakulam", path: "/website-development-ernakulam" },
      { label: "Bangalore", path: "/website-development-bangalore" },
    ],
  },
  {
    slug: "ernakulam",
    location: "Ernakulam",
    path: "/website-development-ernakulam",
    title: "Website Development Company in Ernakulam | Nested Space",
    description:
      "Nested Space provides fast, mobile-friendly website development services for businesses, shops, startups and service providers across Ernakulam.",
    serviceArea: "businesses across Ernakulam district",
    eyebrow: "Website development Ernakulam",
    heroCopy:
      "Fast, mobile-friendly websites for businesses, shops, startups, service providers, professionals and small businesses across Ernakulam district.",
    introKicker: "For Ernakulam district businesses",
    introTitle: "A website can help Ernakulam district businesses serve customers beyond one locality",
    introBody:
      "Businesses across Ernakulam district often serve customers from multiple nearby areas, not only central Kochi. A clear website helps shops, service providers, professionals, startups and small businesses explain where they operate and how customers can contact them.",
    introSupport:
      "Nested Space builds focused websites for businesses across Ernakulam, with mobile-first layouts, WhatsApp enquiry actions and practical information customers need before calling.",
    servicesTitle: "Website development services across Ernakulam",
    servicesIntro:
      "These websites are structured for district-wide service visibility, local trust, mobile access and simple enquiry flows.",
    strengthsTitle: "Website development Ernakulam businesses can launch with a focused scope",
    strengthsIntro:
      "We keep the starter process clear for owners who need business information, contact flow and mobile layout ready quickly.",
    audienceTitle: "Websites for Ernakulam shops, service providers and professionals",
    audienceIntro:
      "This page is focused on businesses across Ernakulam district, including areas outside central Kochi that still need a professional online presence.",
    audiences: [
      "Ernakulam district businesses",
      "Local shops",
      "Service providers",
      "Professionals",
      "Startups",
      "Small businesses",
      "Businesses outside central Kochi",
      "Online sellers",
    ],
    valueKicker: "Ernakulam business value",
    valueTitle: "How a mobile-friendly website can support your Ernakulam business",
    localLinksIntro: "Need a more Kochi-focused page?",
    localLinks: [
      { label: "Kerala", path: "/website-development-kerala" },
      { label: "Kochi", path: "/website-development-kochi" },
      { label: "Thrissur", path: "/website-development-thrissur" },
    ],
  },
  {
    slug: "thrissur",
    location: "Thrissur",
    path: "/website-development-thrissur",
    title: "Website Development Company in Thrissur | Nested Space",
    description:
      "Nested Space provides fast, mobile-friendly website development services for businesses, shops, startups and online sellers in Thrissur.",
    serviceArea: "Thrissur businesses",
    eyebrow: "Website development Thrissur",
    heroCopy:
      "Fast, mobile-friendly websites for Thrissur businesses, shops, restaurants, service providers, professionals, startups, small businesses and online sellers.",
    introKicker: "For Thrissur businesses",
    introTitle: "A clear website helps Thrissur customers check your business before they contact you",
    introBody:
      "Thrissur businesses often depend on local trust, referrals, WhatsApp and social visibility. A website gives customers a professional page to understand services, products, location, contact options and next steps.",
    introSupport:
      "Nested Space creates mobile-friendly websites for businesses serving Thrissur customers. Some people search for Trissur online, but the page uses the correct Thrissur spelling in the main SEO copy.",
    servicesTitle: "Website development services for businesses in Thrissur",
    servicesIntro:
      "The focus is on practical business websites that support enquiries, product or service explanation, mobile viewing and simple launch needs.",
    strengthsTitle: "Website development Thrissur businesses can start affordably",
    strengthsIntro:
      "The starter website scope gives you a quick first version, clear mobile layout and review-before-payment process.",
    audienceTitle: "Websites for Thrissur shops, professionals, sellers and startups",
    audienceIntro:
      "A website helps customers move from search, social media or referral to a clear page with your services and contact actions.",
    audiences: [
      "Thrissur small businesses",
      "Local shops",
      "Restaurants",
      "Service providers",
      "Professionals",
      "Startups",
      "Online sellers",
      "Instagram sellers",
    ],
    valueKicker: "Thrissur business value",
    valueTitle: "How a mobile-friendly website can support your Thrissur business",
    localLinksIntro: "Explore nearby Kerala location pages.",
    localLinks: [
      { label: "Kerala", path: "/website-development-kerala" },
      { label: "Ernakulam", path: "/website-development-ernakulam" },
      { label: "Malappuram", path: "/website-development-malappuram" },
    ],
  },
  {
    slug: "bangalore",
    location: "Bangalore",
    path: "/website-development-bangalore",
    title: "Website Development Company in Bangalore | Nested Space",
    description:
      "Nested Space provides fast, modern and mobile-friendly website development services for startups, businesses, professionals and online brands in Bangalore.",
    serviceArea: "startups and businesses in Bangalore",
    eyebrow: "Website development Bangalore",
    heroCopy:
      "Fast, modern and mobile-friendly websites for startups, technology companies, SaaS businesses, consultants, agencies, ecommerce brands and professionals in Bangalore.",
    introKicker: "For Bangalore startups and businesses",
    introTitle: "A modern website helps Bangalore businesses explain their offer with clarity",
    introBody:
      "Bangalore, also searched as Bengaluru, has many startups, SaaS businesses, agencies, consultants, ecommerce brands, freelancers and professional services. A focused website helps these teams present their offer, capture enquiries and support launches without relying only on social profiles or pitch decks.",
    introSupport:
      "Nested Space provides website development services for businesses in Bangalore with a focus on mobile-friendly pages, clear positioning, fast delivery and practical contact flows.",
    servicesTitle: "Website development services for startups and businesses in Bangalore",
    servicesIntro:
      "The page structure can support startup launches, SaaS service pages, consultant profiles, ecommerce landing pages and professional service enquiries.",
    strengthsTitle: "Website development Bangalore businesses can use for quick market-ready pages",
    strengthsIntro:
      "We keep the starter workflow lean for teams that need a credible website quickly and want to review the agreed work before payment.",
    audienceTitle: "Websites for Bangalore startups, SaaS teams, agencies and online brands",
    audienceIntro:
      "For technology and business markets, a clear mobile-friendly website can help explain the product, service or offer before a customer books a call or sends a message.",
    audiences: [
      "Technology startups",
      "SaaS businesses",
      "Agencies",
      "Consultants",
      "Ecommerce businesses",
      "Online brands",
      "Freelancers",
      "Professional services",
      "Small businesses",
    ],
    valueKicker: "Bangalore business value",
    valueTitle: "How a mobile-friendly website can support your Bangalore business",
    services: techHubServices,
    localLinksIntro: "Explore related business hub and Kerala service pages.",
    localLinks: [
      { label: "Hyderabad", path: "/website-development-hyderabad" },
      { label: "Kochi", path: "/website-development-kochi" },
      { label: "Kerala", path: "/website-development-kerala" },
    ],
  },
  {
    slug: "hyderabad",
    location: "Hyderabad",
    path: "/website-development-hyderabad",
    title: "Website Development Company in Hyderabad | Nested Space",
    description:
      "Nested Space provides fast, modern and mobile-friendly website development services for startups, businesses, professionals and online brands in Hyderabad.",
    serviceArea: "startups and businesses in Hyderabad",
    eyebrow: "Website development Hyderabad",
    heroCopy:
      "Fast, modern and mobile-friendly websites for Hyderabad startups, technology businesses, SaaS companies, agencies, consultants, ecommerce businesses and online sellers.",
    introKicker: "For Hyderabad startups and businesses",
    introTitle: "A focused website helps Hyderabad businesses turn interest into enquiries",
    introBody:
      "Hyderabad has growing technology businesses, SaaS companies, agencies, consultants, ecommerce teams, online sellers and professional service providers. A website gives these businesses a clear place to explain services, show contact options and guide customers to the next step.",
    introSupport:
      "Nested Space provides website development services for businesses in Hyderabad with a focus on mobile-first design, practical copy, WhatsApp-ready contact actions and fast delivery.",
    servicesTitle: "Website development services for startups and businesses in Hyderabad",
    servicesIntro:
      "These websites can support digital businesses, service launches, online seller pages, consulting offers and simple enquiry flows.",
    strengthsTitle: "Website development Hyderabad businesses can start with a focused first version",
    strengthsIntro:
      "The starter process is built for teams and owners who want a useful website quickly, then review the agreed version before payment.",
    audienceTitle: "Websites for Hyderabad startups, technology businesses and online sellers",
    audienceIntro:
      "A professional website helps customers understand the offer before they contact you from search, social media, referral or paid traffic.",
    audiences: [
      "Technology startups",
      "SaaS companies",
      "Agencies",
      "Consultants",
      "Ecommerce businesses",
      "Online sellers",
      "Professional services",
      "Small businesses",
      "Digital businesses",
    ],
    valueKicker: "Hyderabad business value",
    valueTitle: "How a mobile-friendly website can support your Hyderabad business",
    services: techHubServices,
    localLinksIntro: "Explore related business hub and Kerala service pages.",
    localLinks: [
      { label: "Bangalore", path: "/website-development-bangalore" },
      { label: "Kerala", path: "/website-development-kerala" },
    ],
  },
];

export const locationPageMap = Object.fromEntries(locationPageConfigs.map((page) => [page.slug, page]));

export const getLocationPageByPath = (path) => locationPageConfigs.find((page) => page.path === path);

export const getServiceCards = (page) => (page.services ? page.services(page) : defaultServices(page));

const locationIntentQuestions = {
  kerala: [
    {
      question: "What type of website can a Kerala small business start with?",
      answer:
        "A small business can start with a focused website that explains the offer, shows services or products, includes WhatsApp contact actions and works well on mobile.",
    },
    {
      question: "How long does website development take for a starter page?",
      answer:
        "For starter websites, Nested Space aims to deliver the first working version within 48 hours after receiving the required business details and references.",
    },
  ],
  kozhikode: [
    {
      question: "What should a Kozhikode shop website include?",
      answer:
        "A shop website should include product or service highlights, location or service area, WhatsApp enquiry actions, opening or contact details and clear mobile sections.",
    },
    {
      question: "Can a restaurant or service provider in Kozhikode use a starter website?",
      answer:
        "Yes. A starter website can present menu or service details, contact actions, location information and common customer questions in a mobile-friendly format.",
    },
  ],
  malappuram: [
    {
      question: "How can a Malappuram business use a website with WhatsApp?",
      answer:
        "The website can explain products or services first, then guide visitors to WhatsApp for enquiries, booking details or purchase questions.",
    },
    {
      question: "What makes a website useful for Malappuram online sellers?",
      answer:
        "Online sellers can use a website to organize products, explain delivery or payment direction, answer basic questions and give social media visitors a clearer destination.",
    },
  ],
  wayanad: [
    {
      question: "What should a Wayanad tourism business website include?",
      answer:
        "A tourism-related website can include service details, location context, contact actions, photos or offer sections, FAQ content and mobile-friendly enquiry flow.",
    },
    {
      question: "Can homestays or resorts start with a simple website?",
      answer:
        "Yes. A focused starter website can present stay details, facilities, contact actions and common questions without requiring a large booking system at the start.",
    },
  ],
  kochi: [
    {
      question: "How is a Kochi business website different from a district-focused Ernakulam page?",
      answer:
        "A Kochi-focused website can emphasize city-facing commercial activity such as startups, restaurants, hospitality, ecommerce and professional services targeting Kochi customers.",
    },
    {
      question: "Can a Kochi startup use a landing page first?",
      answer:
        "Yes. Startups can begin with a focused page that explains the product or service, captures enquiries and can be expanded after launch feedback.",
    },
  ],
  ernakulam: [
    {
      question: "What should a website for Ernakulam district businesses include?",
      answer:
        "It should explain the business, service area, contact options, products or services and customer next steps for people across Ernakulam district.",
    },
    {
      question: "Is this page only for central Kochi businesses?",
      answer:
        "No. The Ernakulam page is focused on businesses across the district, including shops, professionals and service providers outside central Kochi.",
    },
  ],
  thrissur: [
    {
      question: "What can a Thrissur local business show on a website?",
      answer:
        "A Thrissur business can show services, products, location details, WhatsApp contact actions, pricing direction and frequently asked questions.",
    },
    {
      question: "Can online sellers in Thrissur use a starter website?",
      answer:
        "Yes. Online sellers can use a starter website to organize offers, guide customers from social media and make enquiries easier on mobile.",
    },
  ],
  bangalore: [
    {
      question: "What should a Bangalore startup website include?",
      answer:
        "A startup website can include a clear product or service message, target audience, benefits, contact action, FAQ content and launch-ready mobile layout.",
    },
    {
      question: "Can Bengaluru SaaS or consultant pages start small?",
      answer:
        "Yes. A SaaS business or consultant can start with a focused website or landing page, then expand sections as the offer becomes clearer.",
    },
  ],
  hyderabad: [
    {
      question: "What should a Hyderabad technology business website include?",
      answer:
        "A technology business website can include service or product positioning, contact actions, FAQ content, benefits, case-free proof points and mobile-friendly sections.",
    },
    {
      question: "Can Hyderabad online sellers use a website with WhatsApp enquiries?",
      answer:
        "Yes. A website can present products or offers and guide customers to WhatsApp for questions, availability and order direction.",
    },
  ],
};

export const getLocationIntentQuestions = (page) => locationIntentQuestions[page.slug] || [];

const baseLocationFaqs = (page) => [
  {
    question: `How much does website development cost in ${page.location}?`,
    answer: `Nested Space offers a starter website from ₹2000 for businesses in ${page.location}. Final pricing depends on sections, content readiness, contact flow, launch requirements and later update needs.`,
  },
  {
    question: `How quickly can a ${page.location} business get the first website version?`,
    answer:
      "For starter websites, we aim to deliver the first working version within 48 hours after receiving the required business details and references.",
  },
  {
    question: `Can the website support WhatsApp enquiries for customers in ${page.location}?`,
    answer:
      "Yes. WhatsApp contact actions can be included near the offer, service details and final call to action where they fit the agreed scope.",
  },
  {
    question: `Will the website be mobile-friendly for ${page.location} customers?`,
    answer:
      "Yes. Mobile-first layout is part of the starter website approach because many customers open business websites from phones.",
  },
];

const faqBySlug = {
  kerala: [
    {
      question: "Can you help with basic SEO for a Kerala business website?",
      answer:
        "Yes. Basic SEO setup can include clear crawlable copy, useful headings, page title and meta description guidance, and launch checks.",
    },
    {
      question: "Can I update my Kerala business website later?",
      answer:
        "Yes. Later edits or improvements can be discussed after launch based on the change scope and timing.",
    },
  ],
  kozhikode: [
    {
      question: "Can you build websites for Kozhikode restaurants and service providers?",
      answer:
        "Yes. The page can include services, menu or offer details, location context, contact actions and common customer questions.",
    },
    {
      question: "Can my Kozhikode website include UPI-related payment direction?",
      answer:
        "UPI-ready copy or payment direction can be included where it fits the agreed website scope.",
    },
  ],
  malappuram: [
    {
      question: "Can you build websites for Malappuram local shops?",
      answer:
        "Yes. Local shop websites can show products, contact details, location or service area, offers and WhatsApp enquiry actions.",
    },
    {
      question: "Do I need all website content ready before starting?",
      answer:
        "No. You can start with your business name, offer, references, contact details and the main products or services to show.",
    },
  ],
  wayanad: [
    {
      question: "Can a Wayanad homestay or resort website stay simple?",
      answer:
        "Yes. A starter page can focus on stay details, contact actions, location information and frequently asked questions without a complex booking system.",
    },
    {
      question: "Can the website share location and contact information?",
      answer:
        "Yes. Location and contact details can be included clearly so mobile visitors know how to enquire or visit.",
    },
  ],
  kochi: [
    {
      question: "Can you build websites for Kochi startups and online brands?",
      answer:
        "Yes. A Kochi-focused page can support startup offers, ecommerce direction, professional services, hospitality and growing online brands.",
    },
    {
      question: "Can a Kochi business start with a landing page?",
      answer:
        "Yes. A landing page can be a practical first step for a product, service, restaurant offer, launch or campaign.",
    },
  ],
  ernakulam: [
    {
      question: "Can you build websites for businesses across Ernakulam district?",
      answer:
        "Yes. The page can be structured around district-wide service areas, contact details, business information and customer enquiry actions.",
    },
    {
      question: "Can businesses outside central Kochi use this service?",
      answer:
        "Yes. The Ernakulam page is intended for shops, professionals, service providers and startups across the district.",
    },
  ],
  thrissur: [
    {
      question: "Can a Thrissur business website include product or service sections?",
      answer:
        "Yes. Product, service, pricing direction, FAQ and contact sections can be included based on the agreed scope.",
    },
    {
      question: "Can you help with a starter website for Thrissur online sellers?",
      answer:
        "Yes. Starter websites can help online sellers present offers clearly and guide customers from social media to WhatsApp enquiries.",
    },
  ],
  bangalore: [
    {
      question: "Can you build websites for Bangalore startups and SaaS businesses?",
      answer:
        "Yes. A focused website can present positioning, benefits, contact actions, FAQ content and a mobile-friendly launch page.",
    },
    {
      question: "Can Bangalore businesses work with Nested Space remotely?",
      answer:
        "Yes. The service can be handled through online communication, shared references and clear review steps.",
    },
  ],
  hyderabad: [
    {
      question: "Can you build websites for Hyderabad technology businesses?",
      answer:
        "Yes. The website can support service positioning, digital business offers, ecommerce direction and contact-led enquiries.",
    },
    {
      question: "Can Hyderabad businesses start with a simple website before expanding?",
      answer:
        "Yes. A focused first version can be launched and later improved based on content, requirements and feedback.",
    },
  ],
};

export const getFaqs = (page) => [
  ...baseLocationFaqs(page),
  ...(faqBySlug[page.slug] || []),
  {
    question: `What happens after I enquire about website development in ${page.location}?`,
    answer:
      "You share the business details, references and contact requirements. We prepare the first version around the agreed scope, then you review it before payment.",
  },
];
const getLocationBreadcrumbItems = (page) => {
  const currentPage = {
    "@type": "ListItem",
    name: page.title.replace(" | Nested Space", ""),
    item: `${siteUrl}${page.path}`,
  };

  const items = [
    {
      "@type": "ListItem",
      name: "Home",
      item: `${siteUrl}/`,
    },
  ];

  if (page.path !== "/website-development-kerala") {
    items.push({
      "@type": "ListItem",
      name: "Website Development Kerala",
      item: `${siteUrl}/website-development-kerala`,
    });
  }

  items.push(currentPage);

  return items.map((item, index) => ({
    ...item,
    position: index + 1,
  }));
};

export const getStructuredData = (page) => ({
  "@context": "https://schema.org",
  "@graph": [
    ...getBusinessEntityGraph(),
    {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}${page.path}#breadcrumb`,
      itemListElement: getLocationBreadcrumbItems(page),
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}${page.path}#faq`,
      mainEntity: getFaqs(page).map((faq) => ({
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

export const getHtmlFileName = (page) => `${page.path.slice(1)}.html`;

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

export const getLocationPageHtml = (page) => {
  const canonical = getCanonicalUrl(page.path);
  const structuredData = JSON.stringify(getStructuredData(page), null, 8)
    .split("\n")
    .map((line) => `      ${line}`)
    .join("\n");

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" href="/favicon.png" />
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

export { benefits, processSteps, siteUrl, socialImage, strengths };
