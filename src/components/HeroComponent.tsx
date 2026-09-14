import { useMotionPreference } from "../hooks/useMotionPreference";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowUpRight,
  ArrowRight,
  Check,
  Monitor,
  ShoppingBag,
  Zap,
  Globe2,
  MousePointer2,
  Smartphone,
} from "lucide-react";
import "./hero.css";
import ContactPage from "./ContactPage";
import Seo from "./Seo";
import AetherFormProject from "./AetherFormProject";
import BigBangsProject from "./BigBangsProject";
import WorkShowcase from "./WorkShowcase";
import SpaceBackground from "./SpaceBackground";
import starter from "../data/starterWebsiteContent.json" with { type: "json" };
import {
  getHomeStructuredData,
  homePageMetadata,
} from "../seo/homePageMetadata";
import "./StudioHome.css";

const services = [
  {
    number: "01",
    icon: Monitor,
    title: "A home for your business.",
    description:
      "Turn a first impression into a real connection. Clear, custom websites that tell your story and make it easy to get in touch.",
    label: "Business websites",
    path: "/business-website-development",
    className: "service-business",
  },
  {
    number: "02",
    icon: ShoppingBag,
    title: "From scrolling to shopping.",
    description:
      "Put your products in the spotlight with an inviting catalogue, a smooth mobile experience, and simple enquiry flows.",
    label: "E-commerce & catalogues",
    path: "/ecommerce-website-development",
    className: "service-commerce",
  },
  {
    number: "03",
    icon: Zap,
    title: "One page. A clear purpose.",
    description:
      "Give your next launch, service, or campaign a focused landing page that guides visitors toward taking the next step.",
    label: "Landing pages",
    path: "/landing-page-development",
    className: "service-landing",
  },
];
const steps = [
  {
    title: "Tell us your idea.",
    copy: "Your business, your audience, your ambition. Share your content and a little inspiration — we’ll take it from there.",
  },
  {
    title: "Watch it take shape.",
    copy: "We design and build your page. Review the first version, share your feedback, and let’s get the details right.",
  },
  {
    title: "Make your entrance.",
    copy: "Approve your website, pay for the agreed work, and go live. We help with the launch and hand over your files.",
  },
];

export default function HeroComponent() {
  const pageRef = useRef<HTMLElement>(null);
  const [spaceMotionPaused, setSpaceMotionPaused] = useMotionPreference();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    pageRef.current
      ?.querySelectorAll("[data-reveal]")
      .forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="studio-home" id="home" ref={pageRef}>
      <SpaceBackground
        paused={spaceMotionPaused}
        onPausedChange={setSpaceMotionPaused}
      />
      <Seo
        title={homePageMetadata.title}
        description={homePageMetadata.description}
        canonical={homePageMetadata.canonical}
        openGraphTitle={homePageMetadata.title}
        openGraphDescription={homePageMetadata.openGraphDescription}
        structuredData={getHomeStructuredData()}
      />
      <section
        className="studio-hero studio-container"
        aria-labelledby="studio-title"
      >
        <div className="studio-hero-copy">
          <span className="studio-eyebrow">
            <span className="status-dot" /> WEBSITES FOR SMALL BUSINESSES · ACROSS INDIA
          </span>
          <h1 id="studio-title">
            Small business.
            <br />
            <span>Big presence.</span>
          </h1>
          <p>
            A mobile-friendly website to show what you do and help customers
            get in touch. Built around your shop, service or new business.
          </p>
          <div className="hero-starter-offer">
            <Link to="/pricing#starter-package">Starter website · {starter.price} build <ArrowUpRight size={16} aria-hidden="true" /></Link>
            <span>{starter.priceNote}</span>
          </div>
          <div className="studio-actions">
            <Link className="studio-button" to="/#contact-section">
              Discuss my website <ArrowUpRight size={19} />
            </Link>
            <a className="studio-text-link" href="#portfolio">
              Explore our work <ArrowRight size={17} />
            </a>
          </div>
          <div className="hero-assurance">
            <span className="assurance-icon">
              <Check size={13} />
            </span>{" "}
            Your vision first. Payment after approval.
          </div>
        </div>
        <WorkShowcase motionPaused={spaceMotionPaused} />
        <div className="hero-bottom-note">
          <span>GOOD DESIGN IS GOOD BUSINESS.</span>
          <a href="#services">
            A little further, a lot to discover <ArrowDown size={14} />
          </a>
        </div>
      </section>

      <section className="studio-proof" aria-label="Our starter website offer">
        <div className="studio-container proof-inner">
          <p>
            Big possibilities.
            <br />
            <strong>Small-business friendly.</strong>
          </p>
          <div>
            <strong>
              48<span>hrs</span>
            </strong>
            <span>First delivery, after content is ready</span>
          </div>
          <div>
            <strong>₹2,000</strong>
            <span>For your starter website</span>
          </div>
          <div>
            <strong>
              0<span>%</span>
            </strong>
            <span>Upfront payment. Review it first.</span>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="studio-container studio-section"
        aria-labelledby="services-title"
      >
        <div className="studio-section-heading" data-reveal>
          <div>
            <span className="studio-eyebrow">01 / WHAT WE CREATE</span>
            <h2 id="services-title">
              A digital space.
              <br />
              <span>Made for your next move.</span>
            </h2>
          </div>
          <p>
            From your first website to your next big launch.
            <br />
            Thoughtful design. Clean development.
            <br />A little personality in every pixel.
          </p>
        </div>
        <div className="studio-services">
          {services.map(
            ({
              number,
              icon: Icon,
              title,
              description,
              label,
              path,
              className,
            }) => (
              <Link
                className={`studio-service ${className}`}
                to={path}
                key={number}
                data-reveal
              >
                <div className="service-top">
                  <Icon size={24} strokeWidth={1.5} />
                  <span>{number}</span>
                </div>
                <div className="service-visual" aria-hidden="true">
                  {number === "01" ? (
                    <div className="mini-browser">
                      <div>
                        <i />
                        <i />
                        <i />
                      </div>
                      <strong>
                        Made to
                        <br />
                        <em>stand out.</em>
                      </strong>
                      <span className="mini-browser-pill" />
                      <span className="mini-browser-circle" />
                    </div>
                  ) : number === "02" ? (
                    <div className="mini-shop">
                      <div className="shop-bag">
                        <ShoppingBag size={57} strokeWidth={1} />
                      </div>
                      <span className="shop-pill">
                        Something worth discovering ↗
                      </span>
                    </div>
                  ) : (
                    <div className="mini-launch">
                      <span className="launch-orbit" />
                      <MousePointer2 size={68} strokeWidth={1.1} />
                      <span className="launch-pill">
                        Your next big thing <ArrowUpRight size={14} />
                      </span>
                    </div>
                  )}
                </div>
                <span className="service-label">{label}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="service-link">
                  Let’s make it happen <ArrowUpRight size={19} />
                </span>
              </Link>
            ),
          )}
        </div>
        <div className="studio-capabilities">
          <span>
            <Smartphone size={16} /> Mobile-first, always
          </span>
          <span>
            <Globe2 size={16} /> Search-friendly foundations
          </span>
          <span>
            <MousePointer2 size={16} /> Easy ways to connect
          </span>
          <span>
            <Check size={16} /> Built around your brand
          </span>
        </div>
      </section>

      <section
        className="studio-work"
        id="portfolio"
        aria-labelledby="portfolio-title"
      >
        <div className="studio-container studio-section">
          <div className="studio-section-heading" data-reveal>
            <div>
              <span className="studio-eyebrow">02 / SELECTED WORK</span>
              <h2 id="portfolio-title">
                Less talking.
                <br />
                <span>More showing.</span>
              </h2>
            </div>
            <Link className="studio-text-link" to="/samples">
              Explore projects & samples <ArrowUpRight size={19} />
            </Link>
          </div>
          <div className="studio-featured-project" data-reveal>
            <AetherFormProject />
          </div>
          <div className="studio-featured-project" data-reveal>
            <BigBangsProject />
          </div>
          <p className="work-caption">
            <span>
              A little bold. A little unexpected. Completely their own.
            </span>
            <span>DESIGN + DEVELOPMENT + PERSONALITY</span>
          </p>
        </div>
      </section>

      <section
        className="studio-process"
        id="process"
        aria-labelledby="process-title"
      >
        <div className="studio-container studio-section">
          <div className="studio-section-heading" data-reveal>
            <div>
              <span className="studio-eyebrow">03 / FROM HELLO TO LAUNCH</span>
              <h2 id="process-title">
                Your idea.
                <br />
                <span>Our next collaboration.</span>
              </h2>
            </div>
            <p>
              Building a website shouldn’t feel complicated.
              <br />
              Three simple steps. Real people.
              <br />
              Something you’re proud to share.
            </p>
          </div>
          <div className="studio-steps">
            {steps.map((step, index) => (
              <article key={step.title} data-reveal>
                <span className="step-number">
                  0{index + 1}
                  <ArrowRight size={22} />
                </span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>
          <div className="process-note">
            <span className="status-dot" /> You work directly with the people
            who design and build your website.
          </div>
        </div>
      </section>

      <section
        className="studio-container studio-section"
        id="pricing"
        aria-labelledby="pricing-title"
      >
        <div className="studio-pricing" data-reveal>
          <div className="pricing-intro">
            <span className="studio-eyebrow">04 / A SIMPLE PLACE TO START</span>
            <h2 id="pricing-title">
              Big on possibilities.
              <br />
              <span>Easy on your budget.</span>
            </h2>
            <p>
              A polished website to get your business out there. No
              upfront payment. No complicated process.
            </p>
            <Link className="studio-text-link" to="/small-business-website-development">
              Explore the starter website <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="studio-price-card">
            <span className="price-label">
              THE STARTER WEBSITE <span>PAY AFTER WORK</span>
            </span>
            <div className="studio-price">
              ₹2,000<span>one-time</span>
            </div>
            <p>A website built around your business.</p>
            <ul>
              {[
                "Custom, responsive website design",
                "WhatsApp & contact form flow",
                "Hosting, basic SEO & deployment support",
                "One focused revision round",
              ].map((item) => (
                <li key={item}>
                  <Check size={16} />
                  {item}
                </li>
              ))}
            </ul>
            <Link className="studio-button" to="/#contact-section">
              Start something good <ArrowUpRight size={19} />
            </Link>
            <span className="price-footnote">
              {starter.deliveryNote} {starter.priceNote}
            </span>
          </div>
        </div>
      </section>

      <div className="studio-contact studio-container">
        <div className="studio-section-heading" data-reveal>
          <div>
            <span className="studio-eyebrow">05 / LET’S MAKE IT REAL</span>
            <h2>
              A good website starts
              <br />
              with <span>a conversation.</span>
            </h2>
          </div>
        </div>
        <ContactPage />
      </div>
    </main>
  );
}
