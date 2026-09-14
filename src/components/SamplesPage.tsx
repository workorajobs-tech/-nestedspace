import { samplesPageMetadata } from "../seo/supportPageMetadata.js";
import { useMotionPreference } from "../hooks/useMotionPreference";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./SamplesPage.css";
import AetherFormProject from "./AetherFormProject";
import BigBangsProject from "./BigBangsProject";
import BigBangsCaseStudy from "./BigBangsCaseStudy";
import SpaceBackground from "./SpaceBackground";
import Seo from "./Seo";

const conceptSamples = [
  {
    title: "Sweet Crumbs Bakery",
    category: "Local shop landing page",
    description: "A layout for menu highlights, best sellers and a clear way to ask about an order.",
    palette: "coral",
    sections: ["Menu", "Best sellers", "Order enquiries", "Contact details"],
    focus: "Menus & enquiries",
  },
  {
    title: "Urban Threads",
    category: "Instagram seller catalogue",
    description: "A catalogue concept for new drops, sizes, pricing and product enquiries.",
    palette: "violet",
    sections: ["New arrivals", "Product cards", "Size guide", "Product enquiry"],
    focus: "Product discovery",
  },
  {
    title: "FinEdge Studio",
    category: "Startup service website",
    description: "A service website concept that brings the offer, approach, prices and contact details together.",
    palette: "amber",
    sections: ["About the business", "Services", "Pricing", "Enquiry form"],
    focus: "Service enquiries",
  },
];

const previewRows = [
  ["Welcome", "About"],
  ["Services", "Prices"],
  ["Details", "Contact"],
];

export default function SamplesPage() {
  const [spaceMotionPaused, setSpaceMotionPaused] = useMotionPreference();

  return (
    <main className="samples-page">
      <SpaceBackground paused={spaceMotionPaused} onPausedChange={setSpaceMotionPaused} />
      <Seo {...samplesPageMetadata} />
      <section className="samples-hero" aria-labelledby="samples-title">
        <Link className="samples-back" to="/">
          <FaArrowLeft aria-hidden="true" />
          Home
        </Link>

        <div className="samples-heading">
          <span className="section-kicker">Projects &amp; samples</span>
          <h1 id="samples-title">Websites with<br /><span>a character of their own.</span></h1>
          <p>
            Explore Aether Form and Big Bangs, two live websites designed and developed by Nested Space, then browse illustrative website concepts for shops, sellers and startups.
          </p>
        </div>
      </section>

      <section className="samples-featured" aria-label="Featured demonstration projects">
        <AetherFormProject />
        <BigBangsProject />
      </section>

      <BigBangsCaseStudy />

      <div className="samples-concepts-heading">
        <h2>More website formats</h2>
        <p>Sample business names and layouts for inspiration. Each card below is an illustrative design concept.</p>
      </div>
      <section className="samples-grid" aria-label="Illustrative website samples">
        {conceptSamples.map((sample) => (
          <article className="sample-card" key={sample.title}>
            <div className={`sample-preview ${sample.palette}`} aria-hidden="true">
              <div className="sample-preview-bar">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="sample-preview-body">
                <div>
                  <span className="sample-preview-kicker">{sample.category}</span>
                  <p className="sample-preview-title">{sample.title}</p>
                </div>
                <span className="sample-preview-button">Enquire</span>
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
                  Illustrative concept
                </span>
                <span>{sample.focus}</span>
              </div>
              <h2>{sample.title}</h2>
              <p>{sample.description}</p>
              <div className="sample-section-list">
                {sample.sections.map((section) => (
                  <span key={section}>{section}</span>
                ))}
              </div>
              <Link className="sample-action" to="/#contact-section">
                Discuss a similar website
                <FaArrowRight aria-hidden="true" />
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="samples-cta" aria-labelledby="samples-cta-title">
        <div>
          <span className="section-kicker">Need one like this?</span>
          <h2 id="samples-cta-title">Let’s find the right direction for your website.</h2>
          <p>Tell us what your customers need to see and do. We’ll discuss your content, pages and features before agreeing the scope and timeline.</p>
        </div>
        <Link className="btn-primary" to="/#contact-section">
          Discuss your website
          <FaArrowRight aria-hidden="true" />
        </Link>
      </section>
    </main>
  );
}
