import { pricingPageMetadata } from "../seo/supportPageMetadata.js";
import { useMotionPreference } from "../hooks/useMotionPreference";
import { Link, useNavigate } from "react-router-dom";
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
import SpaceBackground from "./SpaceBackground";
import "./WebsiteDevelopmentKeralaPage.css";
import "./PricingPage.css";
import starter from "../data/starterWebsiteContent.json" with { type: "json" };

const servicePackages = [
  {
    icon: <FaCode />,
    title: "Starter Website",
    price: starter.price,
    note: starter.priceNote,
    text: "A focused business website for shops, sellers, creators, and service businesses.",
    items: ["Responsive business website", starter.deliveryNote, "WhatsApp contact action", "Basic SEO copy", "One focused revision round", "Pay after approval", "Hosting included", "Deployment support"],
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
  const [spaceMotionPaused, setSpaceMotionPaused] = useMotionPreference();
  const goToContact = () => navigate({ pathname: "/", hash: "#contact-section" });

  return (
    <main className="kerala-page pricing-page">
      <SpaceBackground paused={spaceMotionPaused} onPausedChange={setSpaceMotionPaused} />
      <Seo {...pricingPageMetadata} />

      <section className="kerala-hero pricing-hero" aria-labelledby="pricing-page-title">
        <div className="kerala-hero-copy">
          <span className="section-kicker">A simple place to start</span>
          <h1 id="pricing-page-title">Big possibilities.<br /><span>A plan for you.</span></h1>
          <p>
            Your next chapter starts here. From a ₹2,000 starter website to ecommerce,
            mobile apps, and digital marketing — thoughtful work, priced around what you need.
          </p>
          <div className="kerala-hero-actions">
            <button className="btn-primary" onClick={goToContact}>Start My Website</button>
            <button className="btn-outline" onClick={() => navigate("/")}>Back to Home</button>
          </div>
        </div>

        <div className="kerala-hero-panel" aria-label="Nested Space pricing summary">
          <div>
            <strong>₹2,000</strong>
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

      <section className="kerala-section pricing-starter-details" id="starter-package" aria-labelledby="starter-package-title">
        <div className="kerala-section-heading">
          <span className="section-kicker">The starter, explained</span>
          <h2 id="starter-package-title">What does a ₹2,000 website include?</h2>
          <p>A business website for shops and service providers across India. Here is how the build price and other costs work.</p>
        </div>
        <dl>
          <div><dt>Website build</dt><dd>{starter.price} for a responsive business website, service or product highlights, contact and WhatsApp actions, basic SEO setup, hosting and deployment support. We agree the website content and scope before building.</dd></div>
          <div><dt>Domain & hosting</dt><dd>{starter.priceNote} Domain registration and renewal charges depend on the domain you choose.</dd></div>
          <div><dt>First version & revisions</dt><dd>{starter.deliveryNote} One focused revision round is included. The launch date also depends on review, approval and domain or hosting setup.</dd></div>
          <div><dt>Payment</dt><dd>Review the agreed starter website before payment. Pay after approval, then we help with launch.</dd></div>
          <div><dt>Updates after launch</dt><dd>{starter.updatesNote}</dd></div>
          <div><dt>Larger requirements</dt><dd>Checkout, inventory, booking systems and other integrations need a separate scope and quote.</dd></div>
        </dl>
        <Link className="kerala-related-link" to={starter.path}>Explore the small-business website package →</Link>
      </section>

      <section className="kerala-section" aria-labelledby="services-pricing-title">
        <div className="kerala-section-heading">
          <span className="section-kicker">Service packages</span>
          <h2 id="services-pricing-title">Choose the service you need</h2>
          <p>Only the starter website has a fixed known price. Larger work is quoted after the scope is clear.</p>
        </div>

        <div className="pricing-service-grid">
          {servicePackages.map((service, index) => (
            <article className={`pricing-service-card${index === 0 ? " pricing-service-card-featured" : ""}`} key={service.title}>
              <div className="pricing-card-topline">
                <div className="pricing-service-icon" aria-hidden="true">{service.icon}</div>
                {index === 0 && <span className="pricing-starter-badge">Your first step</span>}
              </div>
              <h3>{service.title}</h3>
              <div className="pricing-service-price">{service.price}</div>
              <span className="pricing-service-note">{service.note}</span>
              <p>{service.text}</p>
              <ul>
                {service.items.map((item) => (
                  <li key={item}>
                    <FaCheckCircle aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="pricing-package-cta" onClick={goToContact} aria-label={`Discuss ${service.title}`}>
                {index === 0 ? "Start my website" : "Let’s talk about it"}<span aria-hidden="true">↗</span>
              </button>
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
