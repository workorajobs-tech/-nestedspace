import React from "react";
import { useNavigate } from "react-router-dom";
import "./hero.css";
import Features from "./Features";
import ContactPage from "./ContactPage";
import Seo from "./Seo";
import { FaCheckCircle, FaComments, FaPalette, FaRocket } from "react-icons/fa";
import { getHomeStructuredData, homePageMetadata } from "../seo/homePageMetadata";

const processSteps = [
  { icon: <FaComments />, title: "Share the idea", text: "Send your business name, products, colors, and WhatsApp number." },
  { icon: <FaPalette />, title: "Approve the design", text: "We prepare a focused landing page layout for your offer and audience." },
  { icon: <FaRocket />, title: "Go live", text: "After approval, we connect links, polish mobile views, and hand over the files." },
];

const samples = [
  "Local shop landing page",
  "Instagram seller catalogue",
  "Startup service website",
];

const previewFeatures = ["WhatsApp CTA", "UPI ready", "Mobile first"];

export default function HeroComponent() {
  const navigate = useNavigate();
  const scrollToContact = () => document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" });
  const openSamples = () => navigate("/samples");

  return (
    <div className="hero-page" id="home">
      <Seo
        title={homePageMetadata.title}
        description={homePageMetadata.description}
        canonical={homePageMetadata.canonical}
        openGraphTitle={homePageMetadata.title}
        openGraphDescription={homePageMetadata.openGraphDescription}
        structuredData={getHomeStructuredData()}
      />
      <div className="hero-card">
        <div className="hero-decor"></div>

        <div className="hero-grid">
          <div className="hero-left">
           

            <h1 className="hero-heading">
              Business Website Development{" "}
              <span className="accent-block price-line">
                in <span className="gradient-text">48 Hours</span> — ₹2000
              </span>
              <span className="accent-block"> Pay After Work</span>
            </h1>

            <p className="hero-sub">
              Nested Space creates mobile-friendly websites for shops, Instagram sellers, startups, and small businesses. Serving businesses across Kerala and throughout India.
            </p>

            <div className="hero-ctas">
              <button className="btn-primary" onClick={scrollToContact}>
                Start My Website
                <svg xmlns="http://www.w3.org/2000/svg" className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <button className="btn-outline" onClick={openSamples}>See Samples</button>
            </div>

            <p className="hero-note">No upfront payment • Mobile-friendly • UPI &amp; WhatsApp ready</p>

            <div className="hero-proof">
              <span><strong>48h</strong> first delivery</span>
              <span><strong>₹2000</strong> starter site</span>
              <span><strong>0%</strong> advance</span>
            </div>
          </div>

          <div className="hero-right">
            <button className="site-preview" type="button" onClick={openSamples} aria-label="Open finished work samples">
              <div className="preview-browser">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="preview-topbar">
                <div className="preview-brand">
                  <span className="preview-logo">N</span>
                  <span>Nested Space demo</span>
                </div>
                <span className="preview-menu"></span>
              </div>
              <div className="preview-hero">
                <span className="preview-kicker">Starter site</span>
                <div className="preview-title">Sell from a page that is ready in 48 hours.</div>
                <p>Clear offer, mobile layout, payment and chat links included.</p>
                <span className="preview-hero-cta">Chat on WhatsApp</span>
              </div>
              <div className="preview-feature-row">
                {previewFeatures.map((feature) => (
                  <span key={feature}>{feature}</span>
                ))}
              </div>
              <div className="preview-section">
                <div>
                  <strong>₹2000</strong>
                  <span>after approval</span>
                </div>
                <div>
                  <strong>3 sections</strong>
                  <span>offer, proof, contact</span>
                </div>
              </div>
            </button>
          </div>
        </div>
        
        {/* Features Section - Bottom of glass container */}
        <Features />

        <section className="process-section" aria-labelledby="process-title">
          <div className="section-heading">
            <span className="section-kicker">How it works</span>
            <h2 id="process-title">How our website creation process works</h2>
          </div>
          <div className="process-grid">
            {processSteps.map((step) => (
              <article className="process-card" key={step.title}>
                <div className="process-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="portfolio-section" id="portfolio" aria-labelledby="portfolio-title">
          <div className="portfolio-copy">
            <span className="section-kicker">Portfolio-ready formats</span>
            <h2 id="portfolio-title">Business website formats for WhatsApp, Instagram, and UPI sellers</h2>
            <p>
              Each business website is designed to make the offer clear, collect leads fast, and look credible on mobile first.
            </p>
            <button className="text-link-button" onClick={openSamples}>View finished work samples</button>
          </div>
          <div className="sample-list">
            {samples.map((sample) => (
              <div className="sample-item" key={sample}>
                <FaCheckCircle />
                <span>{sample}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="pricing-section" id="pricing" aria-labelledby="pricing-title">
          <div>
            <span className="section-kicker">Starter package</span>
            <h2 id="pricing-title">₹2000 after you approve the work</h2>
            <p>Includes responsive one-page website development, contact form flow, WhatsApp CTA, basic SEO copy, and deployment support.</p>
          </div>
          <button className="btn-primary" onClick={scrollToContact}>Book My Slot</button>
        </section>
        
        {/* Contact Section - Bottom of features */}
        <ContactPage />
      </div>
    </div>
  );
}
