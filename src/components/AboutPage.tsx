import { ArrowDown, ArrowUpRight, Check, Code2, Compass, MapPin, MessagesSquare, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "./Seo";
import SpaceBackground from "./SpaceBackground";
import { useMotionPreference } from "../hooks/useMotionPreference";
import { aboutPageMetadata } from "../seo/supportPageMetadata.js";
import { businessEntity, getTelephoneHref, officialSocialProfiles } from "../seo/businessEntity.js";
import { analytics } from "../analytics";
import "./AboutPage.css";

// Portrait-to-profile pairing confirmed by the user.
const founders = [
  {
    name: "Salmanul Faris",
    role: "Design & Development",
    image: "/images/founders/founder-02-cosmic",
    description: "Shapes the idea into a clear website — from the content and visual direction to the responsive build.",
    focus: "Thoughtful design. Purposeful development.",
  },
  {
    name: "Nithun",
    role: "Launch & Handover",
    image: "/images/founders/founder-01-cosmic",
    description: "Brings the details together for launch — checking the website, connecting contact paths, and helping with handover.",
    focus: "Care in the details. Confidence at launch.",
  },
];

const principles = [
  { icon: Compass, title: "Clarity comes first.", text: "We get to know your business, your audience, and what the website needs to do before shaping the page." },
  { icon: MessagesSquare, title: "Keep it collaborative.", text: "Clear conversations, a defined scope, and room for feedback keep the work moving in the right direction." },
  { icon: Code2, title: "Care beyond the screen.", text: "We consider the mobile experience, contact actions, and the final checks that help a website work in the real world." },
];

export default function AboutPage() {
  const [motionPaused, setMotionPaused] = useMotionPreference();

  return (
    <main className="about-page">
      <Seo {...aboutPageMetadata} />
      <SpaceBackground paused={motionPaused} onPausedChange={setMotionPaused} />
      <div className="about-content">
        <div className="about-container">
          <nav className="about-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">About us</span>
          </nav>

          <section className="about-hero" aria-labelledby="about-title">
            <div>
              <p className="about-eyebrow"><span aria-hidden="true" /> THE PEOPLE BEHIND NESTED SPACE</p>
              <h1 id="about-title">A small team.<br /><span>A world of ideas.</span></h1>
            </div>
            <div className="about-hero-copy">
              <p>We’re a website design and development studio in Kerala, turning business ideas into clear, considered digital experiences.</p>
              <p>Two founders. A shared belief that your business deserves a space that feels like you.</p>
              <a className="about-text-link" href="#founders">Meet the founders <ArrowDown size={18} aria-hidden="true" /></a>
            </div>
          </section>

          <section className="about-founders" id="founders" aria-labelledby="founders-title">
            <div className="about-section-line">
              <h2 id="founders-title">The people in your corner.</h2>
              <span><MapPin size={15} aria-hidden="true" /> Kozhikode, Kerala</span>
            </div>
            <div className="about-founder-grid">
              {founders.map((founder, index) => (
                <article className="about-founder-card" key={founder.name} aria-labelledby={`founder-${index}-name`}>
                  <div className="about-founder-visual">
                    <img
                      className="about-founder-image"
                      src={`${founder.image}-800.webp`}
                      srcSet={[320, 480, 800, 1200].map(width => `${founder.image}-${width}.webp ${width}w`).join(", ")}
                      sizes="(max-width: 400px) calc(100vw - 50px), (max-width: 444px) calc(100vw - 66px), (max-width: 680px) 378px, (max-width: 760px) calc((100vw - 108px) / 2), (max-width: 936px) calc((100vw - 120px) / 2), (max-width: 1100px) 408px, 404px"
                      alt={founder.name}
                      width="1200"
                      height="1500"
                      loading={index === 0 ? "eager" : "lazy"}
                      decoding="async"
                    />
                    <div className="about-founder-topline"><span>CO-FOUNDER</span><span aria-hidden="true">0{index + 1}</span></div>
                  </div>
                  <div className="about-founder-info">
                    <p className="about-founder-role">{founder.role}</p>
                    <h3 id={`founder-${index}-name`}>{founder.name}</h3>
                    <p className="about-founder-description">{founder.description}</p>
                    <p className="about-founder-focus"><span aria-hidden="true" />{founder.focus}</p>
                  </div>
                </article>
              ))}
            </div>
            <p className="about-founders-note"><Sparkles size={16} aria-hidden="true" /> Different strengths. The same care for what we create.</p>
          </section>

          <section className="about-story" aria-labelledby="about-story-title">
            <div className="about-story-heading">
              <p className="about-eyebrow">WHY WE DO THIS</p>
              <h2 id="about-story-title">Your next chapter<br />deserves <span>its own space.</span></h2>
              <div className="about-orbit-mark" aria-hidden="true"><span /><span /><i /></div>
            </div>
            <div className="about-story-copy">
              <p className="about-story-lead">A website is often the first conversation someone has with your business. We want to help you make it a good one.</p>
              <p>Nested Space brings design, development, and launch support into one focused process. We work on business websites, landing pages, and ecommerce experiences for shops, service businesses, sellers, and startups.</p>
              <p>Our approach starts with what matters to your visitors: understanding what you offer, finding the information they need, and knowing how to take the next step.</p>
              <ul className="about-service-list" aria-label="What we create">
                <li><Check size={16} aria-hidden="true" /> Business websites</li>
                <li><Check size={16} aria-hidden="true" /> Landing pages</li>
                <li><Check size={16} aria-hidden="true" /> Ecommerce experiences</li>
              </ul>
              <Link className="about-text-link" to="/#services">Explore what we do <ArrowUpRight size={18} aria-hidden="true" /></Link>
            </div>
          </section>

          <section className="about-principles" aria-labelledby="about-principles-title">
            <div className="about-principles-heading">
              <p className="about-eyebrow">THE WAY WE WORK</p>
              <h2 id="about-principles-title">Good work starts with good principles.</h2>
            </div>
            <div className="about-principle-grid">
              {principles.map(({ icon: Icon, title, text }, index) => (
                <article className="about-principle" key={title}>
                  <div className="about-principle-top"><Icon size={24} strokeWidth={1.5} aria-hidden="true" /><span aria-hidden="true">0{index+1}</span></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="about-business" aria-labelledby="about-business-title">
            <div className="about-business-intro">
              <p className="about-eyebrow">A DIRECT CONNECTION</p>
              <h2 id="about-business-title">Based in Kerala.<br /><span>Working across India.</span></h2>
              <p>From your first conversation to the final handover, you can speak with the people working on your website.</p>
              <Link className="about-text-link" to="/samples#big-bangs-case-study">Explore our Big Bangs demo story <ArrowUpRight size={18} aria-hidden="true" /></Link>
            </div>
            <div className="about-business-details">
              <dl>
                <div><dt>Studio</dt><dd>{businessEntity.name}</dd></div>
                <div><dt>Based in</dt><dd>{businessEntity.address.addressLocality}, {businessEntity.address.addressRegion}, {businessEntity.address.addressCountry}</dd></div>
                <div><dt>Working with</dt><dd>Small businesses across India</dd></div>
                <div><dt>Call us</dt><dd><a className="about-text-link" href={getTelephoneHref()} onClick={() => analytics.contact("phone_click", "about")}>{businessEntity.telephone}</a></dd></div>
              </dl>
              <nav className="about-business-social" aria-label="Nested Space social profiles">
                <a className="about-text-link" href={officialSocialProfiles.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={16} aria-hidden="true" /><span className="about-sr-only"> (opens in a new tab)</span></a>
                <a className="about-text-link" href={officialSocialProfiles.instagram} target="_blank" rel="noopener noreferrer">Instagram <ArrowUpRight size={16} aria-hidden="true" /><span className="about-sr-only"> (opens in a new tab)</span></a>
              </nav>
            </div>
          </section>

          <section className="about-invitation" aria-labelledby="about-invitation-title">
            <div>
              <p className="about-eyebrow">YOUR IDEA. OUR NEXT CONVERSATION.</p>
              <h2 id="about-invitation-title">Let’s make room<br />for <span>what’s next.</span></h2>
              <p>Tell us what you’re building. We’ll help you find a clear place to start.</p>
            </div>
            <div className="about-invitation-actions">
              <Link className="about-primary-link" to="/#contact-section">Let’s talk about your idea <ArrowUpRight size={20} aria-hidden="true" /></Link>
              <Link className="about-text-link" to="/samples">Take a look at our work <ArrowUpRight size={18} aria-hidden="true" /></Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
