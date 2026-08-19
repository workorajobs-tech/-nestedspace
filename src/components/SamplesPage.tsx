import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCheckCircle, FaExternalLinkAlt, FaWhatsapp } from "react-icons/fa";
import "./SamplesPage.css";

const finishedSamples = [
  {
    title: "Sweet Crumbs Bakery",
    category: "Local shop landing page",
    result: "Menu highlights, daily order CTA, and WhatsApp enquiry flow.",
    palette: "coral",
    sections: ["Hero offer", "Best sellers", "Order CTA", "Map-ready contact"],
    metric: "48h delivery",
  },
  {
    title: "Urban Threads",
    category: "Instagram seller catalogue",
    result: "Mobile catalogue layout for new drops, sizes, pricing, and DM-to-buy flow.",
    palette: "violet",
    sections: ["Drop preview", "Product cards", "Size guide", "WhatsApp checkout"],
    metric: "Mobile first",
  },
  {
    title: "FinEdge Studio",
    category: "Startup service website",
    result: "Clear service pitch, credibility section, pricing block, and lead capture.",
    palette: "teal",
    sections: ["Value prop", "Services", "Pricing", "Lead form"],
    metric: "Lead ready",
  },
];

const previewRows = [
  ["Offer", "CTA"],
  ["Proof", "Price"],
  ["Contact", "Launch"],
];

export default function SamplesPage() {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate({ pathname: "/", hash: "#contact-section" });
  };

  return (
    <main className="samples-page">
      <section className="samples-hero" aria-labelledby="samples-title">
        <button className="samples-back" onClick={() => navigate("/")}>
          <FaArrowLeft />
          Home
        </button>

        <div className="samples-heading">
          <span className="section-kicker">Finished work samples</span>
          <h1 id="samples-title">Landing page formats ready for shops, sellers, and startups</h1>
          <p>
            These samples show the type of finished one-page websites we build: clear offer, mobile layout,
            WhatsApp-ready contact flow, and fast launch handover.
          </p>
        </div>
      </section>

      <section className="samples-grid" aria-label="Finished website samples">
        {finishedSamples.map((sample) => (
          <article className="sample-card" key={sample.title}>
            <div className={`sample-preview ${sample.palette}`}>
              <div className="sample-preview-bar">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="sample-preview-body">
                <div>
                  <span className="sample-preview-kicker">{sample.category}</span>
                  <h2>{sample.title}</h2>
                </div>
                <button type="button">Enquire</button>
              </div>
              <div className="sample-preview-grid">
                {previewRows.flat().map((label) => (
                  <span key={`${sample.title}-${label}`}>{label}</span>
                ))}
              </div>
            </div>

            <div className="sample-card-copy">
              <div className="sample-card-topline">
                <span className="sample-status">
                  <FaCheckCircle />
                  Finished sample
                </span>
                <span>{sample.metric}</span>
              </div>
              <h2>{sample.title}</h2>
              <p>{sample.result}</p>
              <div className="sample-section-list">
                {sample.sections.map((section) => (
                  <span key={section}>{section}</span>
                ))}
              </div>
              <button className="sample-action" onClick={goToContact}>
                Start similar site
                <FaExternalLinkAlt />
              </button>
            </div>
          </article>
        ))}
      </section>

      <section className="samples-cta" aria-labelledby="samples-cta-title">
        <div>
          <span className="section-kicker">Need one like this?</span>
          <h2 id="samples-cta-title">Send your business details and we’ll prepare the first version.</h2>
          <p>Share your logo, offer, colors, contact number, and references to start the 48-hour delivery timeline.</p>
        </div>
        <button className="btn-primary" onClick={goToContact}>
          <FaWhatsapp />
          Start on WhatsApp
        </button>
      </section>
    </main>
  );
}
