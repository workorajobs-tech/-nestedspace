import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
import { getInternalLinkSection } from "../seo/internalLinkMap";
import { getServicePageByPath, getServiceStructuredData, serviceProcess, sharedServiceBenefits } from "./servicePageData";
import "./WebsiteDevelopmentKeralaPage.css";

const processIcons = [<FaComments />, <FaPalette />, <FaMobileAlt />, <FaCheckCircle />, <FaRocket />];

export default function ServiceSeoLandingPage({ page, pagePath }) {
  const location = useLocation();
  const resolvedPage = page ?? getServicePageByPath(pagePath ?? location.pathname);
  const navigate = useNavigate();
  if (!resolvedPage) {
    return null;
  }

  const currentPage = resolvedPage;
  const structuredData = getServiceStructuredData(currentPage);
  const relatedLinks = getInternalLinkSection(currentPage.path);

  const goToContact = () => {
    navigate({ pathname: "/", hash: "#contact-section" });
  };

  const goToSamples = () => {
    navigate("/samples");
  };

  return (
    <main className="kerala-page service-seo-page">
      <Seo
        title={currentPage.title}
        description={currentPage.description}
        canonical={`https://nestedspace.in${currentPage.path}`}
        openGraphTitle={currentPage.title}
        openGraphDescription={currentPage.description}
        structuredData={structuredData}
      />

      <section className="kerala-hero" aria-labelledby={`${currentPage.slug}-title`}>
        <div className="kerala-hero-copy">
          <span className="section-kicker">{currentPage.eyebrow}</span>
          <h1 id={`${currentPage.slug}-title`}>{currentPage.h1}</h1>
          <p>{currentPage.heroCopy}</p>
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

      <section className="kerala-section kerala-intro" aria-labelledby={`${currentPage.slug}-includes-title`}>
        <div>
          <span className="section-kicker">Service details</span>
          <h2 id={`${currentPage.slug}-includes-title`}>{currentPage.includeTitle}</h2>
        </div>
        <p>{currentPage.includeIntro}</p>
        <p>
          Nested Space keeps the page practical: clear content, mobile-friendly design, basic SEO setup and contact
          actions that match the agreed scope.
        </p>
        <Link className="kerala-text-link" to="/">
          Visit the Nested Space homepage
        </Link>
      </section>

      <section className="kerala-section" aria-labelledby={`${currentPage.slug}-includes-list-title`}>
        <div className="kerala-section-heading">
          <span className="section-kicker">What is included</span>
          <h2 id={`${currentPage.slug}-includes-list-title`}>What this service can include</h2>
        </div>
        <div className="kerala-card-grid">
          {currentPage.includes.map((item) => (
            <article className="kerala-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="kerala-section kerala-audience" aria-labelledby={`${currentPage.slug}-audience-title`}>
        <div>
          <span className="section-kicker">Who it is for</span>
          <h2 id={`${currentPage.slug}-audience-title`}>{currentPage.audienceTitle}</h2>
          <p>{currentPage.audienceIntro}</p>
        </div>
        <div className="kerala-pill-list">
          {currentPage.audiences.map((audience) => (
            <span key={audience}>{audience}</span>
          ))}
        </div>
      </section>

      <section className="kerala-section kerala-strengths" aria-labelledby={`${currentPage.slug}-benefits-title`}>
        <div className="kerala-section-heading">
          <span className="section-kicker">Key benefits</span>
          <h2 id={`${currentPage.slug}-benefits-title`}>Why businesses use this service</h2>
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

      <section className="kerala-section" aria-labelledby={`${currentPage.slug}-features-title`}>
        <div className="kerala-section-heading">
          <span className="section-kicker">Typical features</span>
          <h2 id={`${currentPage.slug}-features-title`}>{currentPage.featureTitle}</h2>
        </div>
        <div className="kerala-value-grid">
          {currentPage.features.map((feature) => (
            <div className="kerala-value-item" key={feature}>
              <FaSearch />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="kerala-section" aria-labelledby={`${currentPage.slug}-process-title`}>
        <div className="kerala-section-heading">
          <span className="section-kicker">Our process</span>
          <h2 id={`${currentPage.slug}-process-title`}>A simple development process</h2>
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

      <section className="kerala-section kerala-intro" aria-labelledby={`${currentPage.slug}-mobile-title`}>
        <div>
          <span className="section-kicker">Mobile and responsive design</span>
          <h2 id={`${currentPage.slug}-mobile-title`}>{currentPage.mobileTitle}</h2>
        </div>
        <p>{currentPage.mobileCopy}</p>
        <p>{currentPage.contactCopy}</p>
      </section>

      <section className="kerala-section kerala-intro" aria-labelledby={`${currentPage.slug}-pricing-title`}>
        <div>
          <span className="section-kicker">Pricing guidance</span>
          <h2 id={`${currentPage.slug}-pricing-title`}>Starter website pricing</h2>
        </div>
        <p>{currentPage.pricingCopy}</p>
        <p>
          Pricing is kept to known Nested Space offers only. Sales, lead, and search ranking promises are not made.
        </p>
      </section>

      {currentPage.intentQuestions?.length > 0 && (
        <section className="kerala-section" aria-labelledby={`${currentPage.slug}-intent-title`}>
          <div className="kerala-section-heading">
            <span className="section-kicker">Helpful answers</span>
            <h2 id={`${currentPage.slug}-intent-title`}>Common questions before starting</h2>
          </div>
          <div className="kerala-card-grid">
            {currentPage.intentQuestions.map((item) => (
              <article className="kerala-card" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {relatedLinks?.links?.length > 0 && (
        <section className="kerala-section kerala-related" aria-labelledby={`${currentPage.slug}-related-title`}>
          <div className="kerala-section-heading">
            <span className="section-kicker">Related pages</span>
            <h2 id={`${currentPage.slug}-related-title`}>{relatedLinks.sectionTitle}</h2>
            {relatedLinks.intro && <p>{relatedLinks.intro}</p>}
          </div>
          <div className="kerala-related-links">
            {relatedLinks.links.map((link) => (
              <Link className="kerala-related-link" to={link.path} key={link.path}>
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="kerala-section kerala-intro" aria-labelledby={`${currentPage.slug}-contact-title`}>
        <div>
          <span className="section-kicker">Contact and WhatsApp enquiries</span>
          <h2 id={`${currentPage.slug}-contact-title`}>{currentPage.contactTitle}</h2>
        </div>
        <p>{currentPage.contactCopy}</p>
        <p>
          Share your business details through the contact flow and we will shape the page around the agreed service
          scope.
        </p>
      </section>

      <section className="kerala-section kerala-faq" aria-labelledby={`${currentPage.slug}-faq-title`}>
        <div className="kerala-section-heading">
          <span className="section-kicker">FAQ</span>
          <h2 id={`${currentPage.slug}-faq-title`}>Questions about {currentPage.eyebrow.toLowerCase()}</h2>
        </div>
        <div className="kerala-faq-list">
          {currentPage.faqs.map((faq) => (
            <article className="kerala-faq-item" key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="kerala-final-cta" aria-labelledby={`${currentPage.slug}-final-title`}>
        <div>
          <span className="section-kicker">Ready to build your business website?</span>
          <h2 id={`${currentPage.slug}-final-title`}>Get started with Nested Space.</h2>
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
