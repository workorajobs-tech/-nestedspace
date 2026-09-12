import { Link } from "react-router-dom";
import { ArrowRight, Check, ExternalLink } from "lucide-react";
import Seo from "./Seo";
import SeoPageLayout, { StarterWebsiteOffer } from "./SeoPageLayout";
import page from "../data/starterWebsiteContent.json" with { type: "json" };
import "./SmallBusinessWebsitePage.css";

export default function SmallBusinessWebsitePage({ structuredData }: { structuredData: object }) {
  return (
    <SeoPageLayout className="starter-page" breadcrumb="Small business websites">
      <Seo title={page.title} description={page.description}
        canonical={`https://nestedspace.in${page.path}`} structuredData={structuredData} />

      <div className="starter-wrap">
        <section className="starter-hero" aria-labelledby="starter-title">
          <div>
            <p className="starter-kicker">{page.eyebrow}</p>
            <h1 id="starter-title">{page.h1}</h1>
            <p className="starter-lead">{page.heroCopy}</p>
            <div className="starter-actions">
              <Link className="starter-button" to="/#contact-section">Discuss my website <ArrowRight aria-hidden="true" size={18} /></Link>
              <a className="starter-link" href="#starter-work">See a work example <ArrowRight aria-hidden="true" size={17} /></a>
            </div>
            <p className="starter-caption">Work directly with the people who design and build your website.</p>
          </div>
          <StarterWebsiteOffer />
        </section>

        <section className="starter-section" aria-labelledby="starter-includes">
          <p className="starter-kicker">01 / The essentials, considered</p>
          <h2 id="starter-includes">A clear picture of your business.</h2>
          <p className="starter-section-intro">A place for customers to understand your offer, see the details and take the next step. Here is what the starter build includes.</p>
          <div className="starter-grid">
            {page.includes.map((item) => <article className="starter-card" key={item.title}>
              <Check aria-hidden="true" size={20} /><h3>{item.title}</h3><p>{item.text}</p>
            </article>)}
          </div>
        </section>

        <section className="starter-section" aria-labelledby="starter-fit">
          <p className="starter-kicker">02 / A useful place to start</p>
          <h2 id="starter-fit">Built around a simple business need.</h2>
          <div className="starter-grid starter-audiences">
            {page.audiences.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}
          </div>
          <div className="starter-scope">
            <h3>Need more than an enquiry website?</h3>
            <p>A shopping cart, payments, booking systems and customer accounts need a separate scope and quote.</p>
            <div className="starter-actions">
              <Link className="starter-link" to="/business-website-development">Larger business websites <ArrowRight aria-hidden="true" size={17} /></Link>
              <Link className="starter-link" to="/ecommerce-website-development">Ecommerce options <ArrowRight aria-hidden="true" size={17} /></Link>
            </div>
          </div>
        </section>

        <section className="starter-section starter-work" id="starter-work" aria-labelledby="starter-work-title">
          <a className="starter-work-image" href="https://big-bangs.pages.dev/" target="_blank" rel="noopener noreferrer" aria-label="Explore the Big Bangs demo (opens in a new tab)">
            <img src="/showcase/big-bangs-poster.webp" alt="Big Bangs streetwear website created by Nested Space" loading="lazy" decoding="async" width="960" height="720" />
          </a>
          <div>
            <p className="starter-kicker">03 / Made by Nested Space</p>
            <h2 id="starter-work-title">Get a feel for our work.</h2>
            <h3>Big Bangs · Streetwear catalogue demo</h3>
            <p>Explore the product presentation, mobile layout and enquiry flow in a website we designed and developed.</p>
            <p className="starter-caption">This is a catalogue project example. Its catalogue features and custom motion are separately scoped features, beyond the starter package.</p>
            <div className="starter-actions">
              <a className="starter-link" href="https://big-bangs.pages.dev/" target="_blank" rel="noopener noreferrer">Explore the demo <ExternalLink aria-hidden="true" size={17} /><span className="starter-sr-only"> (opens in a new tab)</span></a>
              <Link className="starter-link" to="/samples#big-bangs-case-study">Read the project story <ArrowRight aria-hidden="true" size={17} /></Link>
            </div>
          </div>
        </section>

        <section className="starter-section" aria-labelledby="starter-process">
          <p className="starter-kicker">04 / From brief to browser</p>
          <h2 id="starter-process">A straightforward way to work together.</h2>
          <p className="starter-section-intro">Based in Kozhikode, working with businesses across India. Share your brief and review the website remotely.</p>
          <ol className="starter-grid starter-process">
            {page.process.map((item, index) => <li key={item.title}>
              <span className="starter-step" aria-hidden="true">0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p>
            </li>)}
          </ol>
        </section>

        <section className="starter-section starter-faq" aria-labelledby="starter-questions">
          <div><p className="starter-kicker">05 / Before you begin</p><h2 id="starter-questions">The details, answered.</h2><p>Compare the scope and timing before you decide.</p><Link className="starter-link" to="/pricing#starter-package">Package & pricing details <ArrowRight aria-hidden="true" size={17} /></Link></div>
          <div>{page.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div>
        </section>

        <section className="starter-final" aria-labelledby="starter-next">
          <div><p className="starter-kicker">Your business. Your next step.</p><h2 id="starter-next">Tell us what your website needs to do.</h2><p>Share your business, your offer and how customers should contact you. We’ll discuss the right scope with you.</p><p className="starter-caption">The request form prepares a WhatsApp message. Review and send it there to reach us.</p></div>
          <Link className="starter-button" to="/#contact-section">Discuss my website <ArrowRight aria-hidden="true" size={18} /></Link>
        </section>
      </div>
    </SeoPageLayout>
  );
}
