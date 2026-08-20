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
import { businessEntity } from "../seo/businessEntity";
import {
  benefits,
  getFaqs,
  getLocationPageByPath,
  getLocationIntentQuestions,
  getServiceCards,
  getStructuredData,
  processSteps,
  strengths,
} from "./locationPageData";
import "./WebsiteDevelopmentKeralaPage.css";

const processIcons = [<FaComments />, <FaPalette />, <FaMobileAlt />, <FaCheckCircle />, <FaRocket />];

const getLocationPresenceCopy = (page) => {
  if (page.slug === "kozhikode") {
    return {
      title: "Kozhikode office consultations",
      body: `Nested Space has its office at ${businessEntity.address.streetAddress}, ${businessEntity.address.addressLocality}. Customers can visit the office for website consultations and project discussions.`,
    };
  }

  if (page.slug === "kerala") {
    return {
      title: "Kerala-wide website development support",
      body: "Nested Space is based in Kozhikode and serves businesses across Kerala and throughout India through office consultations and remote project discussions.",
    };
  }

  return {
    title: `Website development services for ${page.location}`,
    body: `Nested Space serves ${page.location} businesses from its Kozhikode office and through remote consultations. This page represents service availability, not a physical branch in ${page.location}.`,
  };
};

export default function LocationWebsiteDevelopmentPage({ page, pagePath }) {
  const location = useLocation();
  const resolvedPage = page ?? getLocationPageByPath(pagePath ?? location.pathname);
  const navigate = useNavigate();
  if (!resolvedPage) {
    return null;
  }

  const currentPage = resolvedPage;
  const services = getServiceCards(currentPage);
  const faqs = getFaqs(currentPage);
  const intentQuestions = getLocationIntentQuestions(currentPage);
  const structuredData = getStructuredData(currentPage);
  const relatedLinks = getInternalLinkSection(currentPage.path);
  const locationPresence = getLocationPresenceCopy(currentPage);

  const goToContact = () => {
    navigate({ pathname: "/", hash: "#contact-section" });
  };

  const goToSamples = () => {
    navigate("/samples");
  };

  return (
    <main className="kerala-page">
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
          <h1 id={`${currentPage.slug}-title`}>Website Development Company in {currentPage.location}</h1>
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

      <section className="kerala-section kerala-intro" aria-labelledby={`${currentPage.slug}-intro-title`}>
        <div>
          <span className="section-kicker">{currentPage.introKicker}</span>
          <h2 id={`${currentPage.slug}-intro-title`}>{currentPage.introTitle}</h2>
        </div>
        <p>{currentPage.introBody}</p>
        <p>{currentPage.introSupport}</p>
        <Link className="kerala-text-link" to="/">
          Visit the Nested Space homepage
        </Link>
      </section>

      <section className="kerala-section kerala-intro" aria-labelledby={`${currentPage.slug}-presence-title`}>
        <div>
          <span className="section-kicker">Local presence</span>
          <h2 id={`${currentPage.slug}-presence-title`}>{locationPresence.title}</h2>
        </div>
        <p>{locationPresence.body}</p>
        <p>{businessEntity.serviceAreaSentence}</p>
      </section>

      <section className="kerala-section" aria-labelledby={`${currentPage.slug}-services-title`}>
        <div className="kerala-section-heading">
          <span className="section-kicker">Website development services</span>
          <h2 id={`${currentPage.slug}-services-title`}>{currentPage.servicesTitle}</h2>
          <p>{currentPage.servicesIntro}</p>
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

      <section className="kerala-section kerala-strengths" aria-labelledby={`${currentPage.slug}-strengths-title`}>
        <div className="kerala-section-heading">
          <span className="section-kicker">Why choose Nested Space</span>
          <h2 id={`${currentPage.slug}-strengths-title`}>{currentPage.strengthsTitle}</h2>
          <p>{currentPage.strengthsIntro}</p>
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

      <section className="kerala-section" aria-labelledby={`${currentPage.slug}-process-title`}>
        <div className="kerala-section-heading">
          <span className="section-kicker">How it works</span>
          <h2 id={`${currentPage.slug}-process-title`}>A simple website creation process</h2>
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

      <section className="kerala-section kerala-audience" aria-labelledby={`${currentPage.slug}-audience-title`}>
        <div>
          <span className="section-kicker">Who we serve</span>
          <h2 id={`${currentPage.slug}-audience-title`}>{currentPage.audienceTitle}</h2>
          <p>{currentPage.audienceIntro}</p>
        </div>
        <div className="kerala-pill-list">
          {currentPage.audiences.map((audience) => (
            <span key={audience}>{audience}</span>
          ))}
        </div>
      </section>

      <section className="kerala-section kerala-value" aria-labelledby={`${currentPage.slug}-value-title`}>
        <div>
          <span className="section-kicker">{currentPage.valueKicker}</span>
          <h2 id={`${currentPage.slug}-value-title`}>{currentPage.valueTitle}</h2>
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

      {intentQuestions.length > 0 && (
        <section className="kerala-section" aria-labelledby={`${currentPage.slug}-intent-title`}>
          <div className="kerala-section-heading">
            <span className="section-kicker">Helpful answers</span>
            <h2 id={`${currentPage.slug}-intent-title`}>Common questions before starting</h2>
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

      <section className="kerala-section kerala-faq" aria-labelledby={`${currentPage.slug}-faq-title`}>
        <div className="kerala-section-heading">
          <span className="section-kicker">FAQ</span>
          <h2 id={`${currentPage.slug}-faq-title`}>Website development {currentPage.location} questions</h2>
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

      <section className="kerala-final-cta" aria-labelledby={`${currentPage.slug}-final-title`}>
        <div>
          <span className="section-kicker">Ready to build your business website?</span>
          <h2 id={`${currentPage.slug}-final-title`}>Get started with Nested Space.</h2>
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
