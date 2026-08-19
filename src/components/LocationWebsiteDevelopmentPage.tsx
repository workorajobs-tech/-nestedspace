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
import { getInternalLinkSection } from "../seo/internalLinkMap";
import {
  benefits,
  getFaqs,
  getLocationIntentQuestions,
  getServiceCards,
  getStructuredData,
  processSteps,
  strengths,
} from "./locationPageData";
import "./WebsiteDevelopmentKeralaPage.css";

const processIcons = [<FaComments />, <FaPalette />, <FaMobileAlt />, <FaCheckCircle />, <FaRocket />];

export default function LocationWebsiteDevelopmentPage({ page }) {
  const navigate = useNavigate();
  const services = getServiceCards(page);
  const faqs = getFaqs(page);
  const intentQuestions = getLocationIntentQuestions(page);
  const structuredData = getStructuredData(page);
  const relatedLinks = getInternalLinkSection(page.path);

  const goToContact = () => {
    navigate({ pathname: "/", hash: "#contact-section" });
  };

  const goToSamples = () => {
    navigate("/samples");
  };

  return (
    <main className="kerala-page">
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
          <h1 id={`${page.slug}-title`}>Website Development Company in {page.location}</h1>
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

      <section className="kerala-section kerala-intro" aria-labelledby={`${page.slug}-intro-title`}>
        <div>
          <span className="section-kicker">{page.introKicker}</span>
          <h2 id={`${page.slug}-intro-title`}>{page.introTitle}</h2>
        </div>
        <p>{page.introBody}</p>
        <p>{page.introSupport}</p>
        <Link className="kerala-text-link" to="/">
          Visit the Nested Space homepage
        </Link>
      </section>

      <section className="kerala-section" aria-labelledby={`${page.slug}-services-title`}>
        <div className="kerala-section-heading">
          <span className="section-kicker">Website development services</span>
          <h2 id={`${page.slug}-services-title`}>{page.servicesTitle}</h2>
          <p>{page.servicesIntro}</p>
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

      <section className="kerala-section kerala-strengths" aria-labelledby={`${page.slug}-strengths-title`}>
        <div className="kerala-section-heading">
          <span className="section-kicker">Why choose Nested Space</span>
          <h2 id={`${page.slug}-strengths-title`}>{page.strengthsTitle}</h2>
          <p>{page.strengthsIntro}</p>
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

      <section className="kerala-section" aria-labelledby={`${page.slug}-process-title`}>
        <div className="kerala-section-heading">
          <span className="section-kicker">How it works</span>
          <h2 id={`${page.slug}-process-title`}>A simple website creation process</h2>
        </div>
        <div className="kerala-process-grid">
          {processSteps.map((step, index) => (
            <article className="kerala-process-card" key={step.title}>
              <div className="kerala-process-icon">{processIcons[index]}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="kerala-section kerala-audience" aria-labelledby={`${page.slug}-audience-title`}>
        <div>
          <span className="section-kicker">Who we serve</span>
          <h2 id={`${page.slug}-audience-title`}>{page.audienceTitle}</h2>
          <p>{page.audienceIntro}</p>
        </div>
        <div className="kerala-pill-list">
          {page.audiences.map((audience) => (
            <span key={audience}>{audience}</span>
          ))}
        </div>
      </section>

      <section className="kerala-section kerala-value" aria-labelledby={`${page.slug}-value-title`}>
        <div>
          <span className="section-kicker">{page.valueKicker}</span>
          <h2 id={`${page.slug}-value-title`}>{page.valueTitle}</h2>
        </div>
        <div className="kerala-value-grid">
          {benefits.map((item) => (
            <div className="kerala-value-item" key={item}>
              <FaSearch />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {relatedLinks?.links?.length > 0 && (
        <section className="kerala-section kerala-related" aria-labelledby={`${page.slug}-related-title`}>
          <div className="kerala-section-heading">
            <span className="section-kicker">Related pages</span>
            <h2 id={`${page.slug}-related-title`}>{relatedLinks.sectionTitle}</h2>
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

      {intentQuestions.length > 0 && (
        <section className="kerala-section" aria-labelledby={`${page.slug}-intent-title`}>
          <div className="kerala-section-heading">
            <span className="section-kicker">Helpful answers</span>
            <h2 id={`${page.slug}-intent-title`}>Common questions before starting</h2>
          </div>
          <div className="kerala-card-grid">
            {intentQuestions.map((item) => (
              <article className="kerala-card" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="kerala-section kerala-faq" aria-labelledby={`${page.slug}-faq-title`}>
        <div className="kerala-section-heading">
          <span className="section-kicker">FAQ</span>
          <h2 id={`${page.slug}-faq-title`}>Website development {page.location} questions</h2>
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

      <section className="kerala-final-cta" aria-labelledby={`${page.slug}-final-title`}>
        <div>
          <span className="section-kicker">Ready to build your business website?</span>
          <h2 id={`${page.slug}-final-title`}>Get started with Nested Space.</h2>
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
