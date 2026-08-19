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
import { getServiceStructuredData, serviceProcess, sharedServiceBenefits } from "./servicePageData";
import "./WebsiteDevelopmentKeralaPage.css";

const processIcons = [<FaComments />, <FaPalette />, <FaMobileAlt />, <FaCheckCircle />, <FaRocket />];

export default function ServiceSeoLandingPage({ page }) {
  const navigate = useNavigate();
  const structuredData = getServiceStructuredData(page);

  const goToContact = () => {
    navigate({ pathname: "/", hash: "#contact-section" });
  };

  const goToSamples = () => {
    navigate("/samples");
  };

  return (
    <main className="kerala-page service-seo-page">
      <Seo
        title={page.title}
        description={page.description}
        canonical={`https://nestedspace.in${page.path}`}
        openGraphTitle={page.title}
        openGraphDescription={page.description}
        structuredData={structuredData}
      />

      <section className="kerala-hero" aria-labelledby={`${page.slug}-title`}>
        <div className="kerala-hero-copy">
          <span className="section-kicker">{page.eyebrow}</span>
          <h1 id={`${page.slug}-title`}>{page.h1}</h1>
          <p>{page.heroCopy}</p>
          <div className="kerala-hero-actions">
            <button className="btn-primary" onClick={goToContact}>
              Start My Website
            </button>
            <button className="btn-outline" onClick={goToSamples}>
              See Our Work
            </button>
          </div>
        </div>

        <div className="kerala-hero-panel" aria-label="Nested Space service offer summary">
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

      <section className="kerala-section kerala-intro" aria-labelledby={`${page.slug}-includes-title`}>
        <div>
          <span className="section-kicker">Service details</span>
          <h2 id={`${page.slug}-includes-title`}>{page.includeTitle}</h2>
        </div>
        <p>{page.includeIntro}</p>
        <p>
          Nested Space keeps the page practical: clear content, mobile-friendly design, basic SEO setup and contact
          actions that match the agreed scope.
        </p>
        <Link className="kerala-text-link" to="/">
          Visit the Nested Space homepage
        </Link>
      </section>

      <section className="kerala-section" aria-labelledby={`${page.slug}-includes-list-title`}>
        <div className="kerala-section-heading">
          <span className="section-kicker">What is included</span>
          <h2 id={`${page.slug}-includes-list-title`}>What this service can include</h2>
        </div>
        <div className="kerala-card-grid">
          {page.includes.map((item) => (
            <article className="kerala-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="kerala-section kerala-audience" aria-labelledby={`${page.slug}-audience-title`}>
        <div>
          <span className="section-kicker">Who it is for</span>
          <h2 id={`${page.slug}-audience-title`}>{page.audienceTitle}</h2>
          <p>{page.audienceIntro}</p>
        </div>
        <div className="kerala-pill-list">
          {page.audiences.map((audience) => (
            <span key={audience}>{audience}</span>
          ))}
        </div>
      </section>

      <section className="kerala-section kerala-strengths" aria-labelledby={`${page.slug}-benefits-title`}>
        <div className="kerala-section-heading">
          <span className="section-kicker">Key benefits</span>
          <h2 id={`${page.slug}-benefits-title`}>Why businesses use this service</h2>
        </div>
        <div className="kerala-check-grid">
          {sharedServiceBenefits.map((benefit) => (
            <div className="kerala-check-item" key={benefit}>
              <FaCheckCircle />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="kerala-section" aria-labelledby={`${page.slug}-features-title`}>
        <div className="kerala-section-heading">
          <span className="section-kicker">Typical features</span>
          <h2 id={`${page.slug}-features-title`}>{page.featureTitle}</h2>
        </div>
        <div className="kerala-value-grid">
          {page.features.map((feature) => (
            <div className="kerala-value-item" key={feature}>
              <FaSearch />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="kerala-section" aria-labelledby={`${page.slug}-process-title`}>
        <div className="kerala-section-heading">
          <span className="section-kicker">Our process</span>
          <h2 id={`${page.slug}-process-title`}>A simple development process</h2>
        </div>
        <div className="kerala-process-grid">
          {serviceProcess.map((step, index) => (
            <article className="kerala-process-card" key={step.title}>
              <div className="kerala-process-icon">{processIcons[index]}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="kerala-section kerala-intro" aria-labelledby={`${page.slug}-mobile-title`}>
        <div>
          <span className="section-kicker">Mobile and responsive design</span>
          <h2 id={`${page.slug}-mobile-title`}>{page.mobileTitle}</h2>
        </div>
        <p>{page.mobileCopy}</p>
        <p>{page.contactCopy}</p>
      </section>

      <section className="kerala-section kerala-intro" aria-labelledby={`${page.slug}-pricing-title`}>
        <div>
          <span className="section-kicker">Pricing guidance</span>
          <h2 id={`${page.slug}-pricing-title`}>Starter website pricing</h2>
        </div>
        <p>{page.pricingCopy}</p>
        <p>
          Pricing is kept to known Nested Space offers only. Sales, lead, and search ranking promises are not made.
        </p>
      </section>

      <section className="kerala-section kerala-intro" aria-labelledby={`${page.slug}-contact-title`}>
        <div>
          <span className="section-kicker">Contact and WhatsApp enquiries</span>
          <h2 id={`${page.slug}-contact-title`}>{page.contactTitle}</h2>
        </div>
        <p>{page.contactCopy}</p>
        <p>
          Share your business details through the contact flow and we will shape the page around the agreed service
          scope.
        </p>
      </section>

      <section className="kerala-section kerala-faq" aria-labelledby={`${page.slug}-faq-title`}>
        <div className="kerala-section-heading">
          <span className="section-kicker">FAQ</span>
          <h2 id={`${page.slug}-faq-title`}>Questions about {page.eyebrow.toLowerCase()}</h2>
        </div>
        <div className="kerala-faq-list">
          {page.faqs.map((faq) => (
            <article className="kerala-faq-item" key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="kerala-final-cta" aria-labelledby={`${page.slug}-final-title`}>
        <div>
          <span className="section-kicker">Ready to build your business website?</span>
          <h2 id={`${page.slug}-final-title`}>Get started with Nested Space.</h2>
          <p>Send the business details, offer and references. We will prepare a focused first version for review.</p>
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
