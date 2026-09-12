import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./BigBangsCaseStudy.css";

const walkthrough = [
  {
    title: "Find a style",
    text: "The collection groups jackets, windbreakers, denim and vests. Category filters help visitors narrow down what they want to explore.",
    label: "Browse the collection",
    url: "https://big-bangs.pages.dev/shop",
  },
  {
    title: "Explore the details",
    text: "Individual product pages bring together a photo gallery, colour, description and fit information, with related pieces to keep browsing.",
    label: "See a product page",
    url: "https://big-bangs.pages.dev/product/amber-hooded-windbreaker",
  },
  {
    title: "Start a conversation",
    text: "The product page invites visitors to ask about price, availability and exact measurements through Instagram before deciding to buy.",
    label: "See the enquiry link",
    url: "https://big-bangs.pages.dev/product/amber-hooded-windbreaker",
  },
];

export default function BigBangsCaseStudy() {
  return (
    <section className="project-story" id="big-bangs-case-study" aria-labelledby="project-story-title">
      <div className="project-story-heading">
        <p className="section-kicker">BEHIND THE BUILD · DEMONSTRATION PROJECT</p>
        <h2 id="project-story-title">From a collection<br />to a conversation.</h2>
        <p>A closer look at Big Bangs: a streetwear catalogue designed and developed by Nested Space, available to explore as a live portfolio demo.</p>
      </div>

      <div className="project-story-overview">
        <figure className="project-story-preview">
          <a href="https://big-bangs.pages.dev/" target="_blank" rel="noopener noreferrer" aria-label="Explore the Big Bangs live demo (opens in a new tab)">
            <img src="/showcase/big-bangs-poster.webp" alt="Big Bangs homepage with a navy background, lime headline and a three-product streetwear showcase" width="960" height="720" loading="lazy" decoding="async" />
          </a>
          <figcaption>Big Bangs homepage · Preview from the demonstration website</figcaption>
        </figure>
        <div className="project-story-brief">
          <h3>The design focus</h3>
          <p>Give a clothing collection a distinctive home, then make it straightforward to browse a piece and ask about it.</p>
          <dl>
            <div><dt>Created by</dt><dd>Nested Space · Design &amp; development</dd></div>
            <div><dt>Website format</dt><dd>Homepage, collection and individual product pages</dd></div>
            <div><dt>Visual direction</dt><dd>Navy and lime, bold type and a 3D product showcase</dd></div>
            <div><dt>Enquiry route</dt><dd>Product page → Instagram conversation</dd></div>
          </dl>
        </div>
      </div>

      <div className="project-story-walkthrough">
        <h3>Follow the visitor’s journey.</h3>
        <ol role="list">
          {walkthrough.map((step, index) => (
            <li key={step.title}>
              <span className="project-story-number" aria-hidden="true">0{index + 1}</span>
              <h4>{step.title}</h4>
              <p>{step.text}</p>
              <a href={step.url} target="_blank" rel="noopener noreferrer">
                {step.label} <ArrowUpRight size={17} aria-hidden="true" />
                <span className="big-bangs-sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ol>
      </div>

      <div className="project-story-takeaway">
        <div>
          <h3>Could this approach fit your business?</h3>
          <p>A catalogue like this can suit a business where customers need to ask about a product before ordering. We’ll discuss the pages, content and features your own website needs.</p>
          <p className="project-story-note">This demo shows our design and development work. Customer enquiries and sales results have not been measured for this case study.</p>
        </div>
        <div className="project-story-links">
          <Link to="/#contact-section">Discuss your website <ArrowRight size={18} aria-hidden="true" /></Link>
          <Link to="/about">Meet the people behind it <ArrowRight size={18} aria-hidden="true" /></Link>
        </div>
      </div>
    </section>
  );
}
