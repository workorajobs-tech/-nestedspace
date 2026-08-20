import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaAndroid,
  FaApple,
  FaBullhorn,
  FaChartLine,
  FaCheckCircle,
  FaCode,
  FaMobileAlt,
  FaSearchLocation,
  FaShoppingCart,
  FaStore,
} from "react-icons/fa";
import Seo from "./Seo";
import "./WebsiteDevelopmentKeralaPage.css";
import "./PricingPage.css";

const servicePackages = [
  {
    icon: <FaCode />,
    title: "Starter Website",
    price: "₹2000",
    note: "Pay after approval",
    text: "A focused one-page business website for shops, sellers, creators, and service businesses.",
    items: ["Responsive one-page website", "48-hour first working version", "WhatsApp contact action", "Basic SEO copy", "Deployment support"],
  },
  {
    icon: <FaStore />,
    title: "Business Website",
    price: "Custom quote",
    note: "Based on pages and content",
    text: "For businesses that need service pages, about section, FAQs, portfolio, lead forms, and stronger content structure.",
    items: ["Multi-section page structure", "Service or product sections", "FAQ and trust sections", "Contact form and WhatsApp flow", "Launch checklist"],
  },
  {
    icon: <FaShoppingCart />,
    title: "Ecommerce Website",
    price: "Custom quote",
    note: "Based on catalogue and payment needs",
    text: "For businesses selling products online with catalogue, cart, checkout direction, WhatsApp orders, or payment setup.",
    items: ["Product catalogue layout", "Cart or order flow planning", "Payment or WhatsApp buying path", "Mobile-first product pages", "Basic ecommerce SEO setup"],
  },
  {
    icon: <FaAndroid />,
    title: "Android App",
    price: "Custom quote",
    note: "Quoted after app scope",
    text: "Android app development for customer-facing apps, business tools, booking flows, catalogues, and internal workflows.",
    items: ["App screens and user flow", "Login or enquiry flow", "API or admin connection planning", "Play Store release support", "Maintenance direction"],
  },
  {
    icon: <FaApple />,
    title: "iOS App",
    price: "Custom quote",
    note: "Quoted after app scope",
    text: "iPhone app development for businesses that need a polished iOS experience alongside web or Android systems.",
    items: ["iOS screen design", "Customer journey planning", "Backend integration direction", "App Store release support", "Testing checklist"],
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile App Package",
    price: "Custom quote",
    note: "Android + iOS scope",
    text: "For teams that want both Android and iOS apps with consistent screens, flows, contact actions, and launch support.",
    items: ["Shared app planning", "Android and iOS delivery scope", "Consistent UI direction", "Release support", "Post-launch update planning"],
  },
];

const marketingServices = [
  "Search engine optimization",
  "Local SEO and Google Business Profile setup",
  "Instagram and social media management",
  "Paid ads setup for Meta or Google",
  "Content planning and creatives direction",
  "Landing pages for campaigns",
  "Analytics, tracking, and monthly reporting",
  "WhatsApp lead funnel planning",
];

const pricingFactors = [
  "Number of pages, screens, or products",
  "Content readiness and copywriting needs",
  "Design complexity and brand assets",
  "Payment, admin, API, or booking integrations",
  "SEO, digital marketing, and launch support scope",
  "Maintenance and update requirements after launch",
];

export default function PricingPage() {
  const navigate = useNavigate();
  const goToContact = () => navigate({ pathname: "/", hash: "#contact-section" });

  return (
    <main className="kerala-page pricing-page">
      <Seo
        title="Pricing and Services | Nested Space"
        description="Nested Space pricing and service options for starter websites, business websites, ecommerce websites, Android apps, iOS apps, mobile apps, and digital marketing services."
        canonical="https://nestedspace.in/pricing"
        openGraphTitle="Nested Space Pricing and Services"
        openGraphDescription="Detailed Nested Space service options for websites, ecommerce, mobile apps, and digital marketing."
      />

      <section className="kerala-hero pricing-hero" aria-labelledby="pricing-page-title">
        <div className="kerala-hero-copy">
          <span className="section-kicker">Pricing and services</span>
          <h1 id="pricing-page-title">Website, app, ecommerce, and digital marketing services</h1>
          <p>
            Start with the known ₹2000 starter website offer, then choose larger website, ecommerce, mobile app, or
            marketing support based on the actual work needed.
          </p>
          <div className="kerala-hero-actions">
            <button className="btn-primary" onClick={goToContact}>Start My Website</button>
            <button className="btn-outline" onClick={() => navigate("/")}>Back to Home</button>
          </div>
        </div>

        <div className="kerala-hero-panel" aria-label="Nested Space pricing summary">
          <div>
            <strong>₹2000</strong>
            <span>starter website</span>
          </div>
          <div>
            <strong>Custom quote</strong>
            <span>apps, ecommerce, and larger projects</span>
          </div>
          <div>
            <strong>Pay After Work</strong>
            <span>for the starter website offer</span>
          </div>
        </div>
      </section>

      <section className="kerala-section" aria-labelledby="services-pricing-title">
        <div className="kerala-section-heading">
          <span className="section-kicker">Service packages</span>
          <h2 id="services-pricing-title">Choose the service you need</h2>
          <p>Only the starter website has a fixed known price. Larger work is quoted after the scope is clear.</p>
        </div>

        <div className="pricing-service-grid">
          {servicePackages.map((service) => (
            <article className="pricing-service-card" key={service.title}>
              <div className="pricing-service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <div className="pricing-service-price">{service.price}</div>
              <span className="pricing-service-note">{service.note}</span>
              <p>{service.text}</p>
              <ul>
                {service.items.map((item) => (
                  <li key={item}>
                    <FaCheckCircle />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="kerala-section kerala-audience pricing-marketing" aria-labelledby="digital-marketing-title">
        <div>
          <span className="section-kicker">Digital marketing</span>
          <h2 id="digital-marketing-title">Marketing services we can add</h2>
          <p>
            These can be used after the website is ready, or planned together with a landing page when the goal is
            enquiries, WhatsApp leads, local discovery, or product sales.
          </p>
        </div>
        <div className="pricing-marketing-list">
          {marketingServices.map((service) => (
            <div className="pricing-marketing-item" key={service}>
              <FaBullhorn />
              <span>{service}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="kerala-section" aria-labelledby="pricing-factors-title">
        <div className="kerala-section-heading">
          <span className="section-kicker">Pricing direction</span>
          <h2 id="pricing-factors-title">What changes the final price</h2>
        </div>
        <div className="kerala-value-grid">
          {pricingFactors.map((factor, index) => (
            <div className="kerala-value-item" key={factor}>
              {index % 2 === 0 ? <FaChartLine /> : <FaSearchLocation />}
              <span>{factor}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="kerala-final-cta" aria-labelledby="pricing-final-title">
        <div>
          <span className="section-kicker">Ready to discuss scope?</span>
          <h2 id="pricing-final-title">Send the project details and we will guide the right package.</h2>
          <p>For the starter website, payment stays after approval. Bigger projects are estimated after requirements.</p>
        </div>
        <div className="kerala-final-actions">
          <button className="btn-primary" onClick={goToContact}>Start My Website</button>
        </div>
      </section>
    </main>
  );
}
