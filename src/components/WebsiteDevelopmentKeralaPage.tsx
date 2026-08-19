import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaCheckCircle,
  FaComments,
  FaMobileAlt,
  FaPalette,
  FaRocket,
  FaSearch,
  FaStore,
  FaWhatsapp,
} from "react-icons/fa";
import Seo from "./Seo";
import "./WebsiteDevelopmentKeralaPage.css";

const pageTitle = "Website Development Company in Kerala | Nested Space";
const pageDescription =
  "Nested Space is a website development company in Kerala creating fast, mobile-friendly websites for businesses, shops, startups and online sellers.";
const pageUrl = "https://nestedspace.in/website-development-kerala";

const services = [
  {
    title: "Business Websites",
    text: "Professional business websites that explain your offer, show contact details, and help customers understand your services quickly.",
  },
  {
    title: "Small Business Websites",
    text: "Simple, mobile-friendly websites for small businesses in Kerala that need a clear online presence without a heavy setup.",
  },
  {
    title: "Startup Websites",
    text: "Focused startup websites with service sections, pricing or enquiry flows, and launch-ready copy for early customers.",
  },
  {
    title: "Local Shop Websites",
    text: "Websites for local shops, restaurants, and service providers to showcase products, location, contact details, and WhatsApp enquiries.",
  },
  {
    title: "Instagram Seller Websites",
    text: "Landing pages for online sellers who want to move customers from Instagram to a structured catalogue or enquiry page.",
  },
  {
    title: "Landing Pages",
    text: "Campaign-ready landing pages built around one clear offer, fast loading, mobile layout, and a strong contact flow.",
  },
];

const strengths = [
  "Fast 48-hour first delivery",
  "₹2000 starter website",
  "Pay After Work",
  "Mobile-first design",
  "WhatsApp integration",
  "UPI-ready websites",
  "AI-assisted workflows + custom development",
  "Responsive design",
  "Basic SEO setup",
];

const processSteps = [
  {
    icon: <FaComments />,
    title: "Tell us about your business",
    text: "Share your business name, products or services, colors, references, and contact details.",
  },
  {
    icon: <FaPalette />,
    title: "Approve the design",
    text: "We prepare a focused layout for your audience and offer, then confirm the direction with you.",
  },
  {
    icon: <FaMobileAlt />,
    title: "We build the website",
    text: "Your responsive website is built with core sections, mobile layout, and contact actions in place.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Review and request edits",
    text: "You review the page and request edits within the agreed starter scope before payment.",
  },
  {
    icon: <FaRocket />,
    title: "Go live",
    text: "After approval, we help with deployment checks, contact links, and launch handover.",
  },
];

const audiences = [
  "Kerala small businesses",
  "Local shops",
  "Startups",
  "Instagram sellers",
  "Freelancers",
  "Service businesses",
  "Creators and personal brands",
];

const keralaValue = [
  "Establish an online presence customers can visit any time",
  "Receive WhatsApp enquiries from your website",
  "Showcase products, services, pricing, and offers clearly",
  "Share location, contact information, and business details",
  "Build credibility with a professional mobile-first page",
  "Receive enquiries from Google/search without ranking guarantees",
  "Present your business professionally on phones",
];

const faqs = [
  {
    question: "How much does website development cost in Kerala?",
    answer:
      "Nested Space offers a starter website from ₹2000. The final scope depends on the sections, content, contact flow, and launch requirements.",
  },
  {
    question: "How quickly can you build my website?",
    answer:
      "For starter business websites, we aim to deliver the first working version within 48 hours after receiving the required business details and references.",
  },
  {
    question: "Do I need to pay before the website is built?",
    answer:
      "No. The starter service follows a Pay After Work approach, so you review the agreed work before payment.",
  },
  {
    question: "Can you build websites for small businesses in Kerala?",
    answer:
      "Yes. We build websites for small businesses, local shops, sellers, freelancers, service providers, and startups in Kerala.",
  },
  {
    question: "Can my website include WhatsApp and UPI?",
    answer:
      "Yes. We can include WhatsApp contact actions and UPI-ready website copy or payment direction where it fits the agreed website scope.",
  },
  {
    question: "Will the website work on mobile phones?",
    answer:
      "Yes. Mobile-friendly layout is part of the starter website approach because many customers open business websites from phones.",
  },
  {
    question: "Can you help with basic SEO?",
    answer:
      "Yes. We include basic SEO setup such as clear page copy, useful headings, title and description guidance, and launch checks.",
  },
  {
    question: "Can I update my website later?",
    answer:
      "Yes. You can request later edits or improvements after launch. The scope and timing can be discussed based on the changes needed.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://nestedspace.in/#organization",
      name: "Nested Space",
      url: "https://nestedspace.in/",
      logo: "https://nestedspace.in/og-image.png",
    },
    {
      "@type": "WebSite",
      "@id": "https://nestedspace.in/#website",
      url: "https://nestedspace.in/",
      name: "Nested Space",
      publisher: {
        "@id": "https://nestedspace.in/#organization",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://nestedspace.in/website-development-kerala#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://nestedspace.in/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Website Development Company in Kerala",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://nestedspace.in/website-development-kerala#faq",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function WebsiteDevelopmentKeralaPage() {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate({ pathname: "/", hash: "#contact-section" });
  };

  const goToSamples = () => {
    navigate("/samples");
  };

  return (
    <main className="kerala-page">
      <Seo
        title={pageTitle}
        description={pageDescription}
        canonical={pageUrl}
        openGraphTitle={pageTitle}
        openGraphDescription={pageDescription}
        structuredData={structuredData}
      />

      <section className="kerala-hero" aria-labelledby="kerala-title">
        <div className="kerala-hero-copy">
          <span className="section-kicker">Website development Kerala</span>
          <h1 id="kerala-title">Website Development Company in Kerala</h1>
          <p>
            Fast, mobile-friendly websites for Kerala businesses, shops, startups, service providers and online sellers.
            Get your website started from ₹2000 with our Pay After Work approach.
          </p>
          <div className="kerala-hero-actions">
            <button className="btn-primary" onClick={goToContact}>
              Start My Website
            </button>
            <button className="btn-outline" onClick={goToSamples}>
              See Our Work
            </button>
          </div>
        </div>

        <div className="kerala-hero-panel" aria-label="Nested Space website development offer summary">
          <div>
            <strong>48h</strong>
            <span>first delivery</span>
          </div>
          <div>
            <strong>₹2000</strong>
            <span>starter website</span>
          </div>
          <div>
            <strong>Pay After Work</strong>
            <span>review before payment</span>
          </div>
        </div>
      </section>

      <section className="kerala-section kerala-intro" aria-labelledby="kerala-intro-title">
        <div>
          <span className="section-kicker">For Kerala businesses</span>
          <h2 id="kerala-intro-title">A professional website helps customers trust and contact your business</h2>
        </div>
        <p>
          Customers often check a business online before they call, message, visit, or buy. A clear website can help
          local shops, restaurants, service providers, freelancers, startups, Instagram sellers, and small businesses
          explain what they offer and make it easy for people to enquire.
        </p>
        <p>
          Nested Space creates business websites that are simple to understand, easy to open on mobile phones, and built
          around practical contact actions such as WhatsApp enquiries and service information.
        </p>
        <Link className="kerala-text-link" to="/">
          Visit the Nested Space homepage
        </Link>
      </section>

      <section className="kerala-section" aria-labelledby="kerala-services-title">
        <div className="kerala-section-heading">
          <span className="section-kicker">Website development services</span>
          <h2 id="kerala-services-title">Websites we create for businesses in Kerala</h2>
          <p>
            Our website development Kerala service focuses on useful pages that explain your business clearly and help
            customers take the next step.
          </p>
        </div>
        <div className="kerala-card-grid">
          {services.map((service) => (
            <article className="kerala-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="kerala-section kerala-strengths" aria-labelledby="kerala-strengths-title">
        <div className="kerala-section-heading">
          <span className="section-kicker">Why choose Nested Space</span>
          <h2 id="kerala-strengths-title">Affordable website development Kerala businesses can start quickly</h2>
          <p>
            We keep the process focused for small teams and business owners who need a professional website without a
            long setup cycle.
          </p>
        </div>
        <div className="kerala-check-grid">
          {strengths.map((strength) => (
            <div className="kerala-check-item" key={strength}>
              <FaCheckCircle />
              <span>{strength}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="kerala-section" aria-labelledby="kerala-process-title">
        <div className="kerala-section-heading">
          <span className="section-kicker">How it works</span>
          <h2 id="kerala-process-title">A simple website creation process</h2>
        </div>
        <div className="kerala-process-grid">
          {processSteps.map((step) => (
            <article className="kerala-process-card" key={step.title}>
              <div className="kerala-process-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="kerala-section kerala-audience" aria-labelledby="kerala-audience-title">
        <div>
          <span className="section-kicker">Who we serve</span>
          <h2 id="kerala-audience-title">Website for small businesses in Kerala and growing online brands</h2>
          <p>
            Whether you sell locally, take enquiries through WhatsApp, or promote services on Instagram, a professional
            business website gives customers one clear place to understand and contact you.
          </p>
        </div>
        <div className="kerala-pill-list">
          {audiences.map((audience) => (
            <span key={audience}>{audience}</span>
          ))}
        </div>
      </section>

      <section className="kerala-section kerala-value" aria-labelledby="kerala-value-title">
        <div>
          <span className="section-kicker">Kerala-focused value</span>
          <h2 id="kerala-value-title">How a mobile-friendly website can support your Kerala business</h2>
        </div>
        <div className="kerala-value-grid">
          {keralaValue.map((item) => (
            <div className="kerala-value-item" key={item}>
              <FaSearch />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="kerala-section kerala-faq" aria-labelledby="kerala-faq-title">
        <div className="kerala-section-heading">
          <span className="section-kicker">FAQ</span>
          <h2 id="kerala-faq-title">Website development Kerala questions</h2>
        </div>
        <div className="kerala-faq-list">
          {faqs.map((faq) => (
            <article className="kerala-faq-item" key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="kerala-final-cta" aria-labelledby="kerala-final-title">
        <div>
          <span className="section-kicker">Ready to build your business website?</span>
          <h2 id="kerala-final-title">Get started with Nested Space.</h2>
          <p>Share your business details and we will prepare the first version around your offer, contact flow, and mobile layout.</p>
        </div>
        <div className="kerala-final-actions">
          <button className="btn-primary" onClick={goToContact}>
            <FaStore />
            Start My Website
          </button>
          <button className="btn-outline" onClick={goToContact}>
            <FaWhatsapp />
            Chat on WhatsApp
          </button>
        </div>
      </section>
    </main>
  );
}
