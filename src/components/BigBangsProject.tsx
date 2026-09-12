import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import amberJacket from "../assets/big-bangs-amberFront.webp";
import limeJacket from "../assets/big-bangs-limeFront.webp";
import peachJacket from "../assets/big-bangs-peachFront.webp";
import "./BigBangsProject.css";

const projectUrl = "https://big-bangs.pages.dev/";

export default function BigBangsProject() {
  return (
    <article className="big-bangs-project" aria-label="Big Bangs by Nested Space">
      <a className="big-bangs-preview" href={projectUrl} target="_blank" rel="noopener noreferrer"
        aria-label="Explore the Big Bangs website (opens in a new tab)">
        <div className="big-bangs-preview-bar" aria-hidden="true">
          <span className="big-bangs-dots"><i /><i /><i /></span>
          <span>big-bangs.pages.dev</span>
          <FaExternalLinkAlt />
        </div>
        <div className="big-bangs-artwork" aria-hidden="true">
          <div className="big-bangs-artwork-brand">BIG BANGS <span>BY NESTED SPACE</span></div>
          <div className="big-bangs-artwork-title">WEAR THE<br /><em>DIFFERENCE.</em></div>
          <div className="big-bangs-looks">
            <figure><img src={peachJacket} alt="" loading="lazy" decoding="async" width="720" height="1280" /><figcaption>EVERYDAY / ORIGINALS</figcaption></figure>
            <figure><img src={amberJacket} alt="" loading="lazy" decoding="async" width="960" height="1280" /><figcaption>COLOUR / IN MOTION</figcaption></figure>
            <figure><img src={limeJacket} alt="" loading="lazy" decoding="async" width="720" height="1280" /><figcaption>SPORT / REDEFINED</figcaption></figure>
          </div>
          <span className="big-bangs-preview-footer">STREETWEAR. WITH CHARACTER. <FaArrowRight /></span>
        </div>
      </a>
      <div className="big-bangs-project-copy">
        <span className="big-bangs-project-label">Demonstration project · Live demo</span>
        <h3>Big Bangs</h3>
        <p className="big-bangs-credit">Designed &amp; developed by Nested Space</p>
        <p>A bold streetwear catalogue that brings the collection to life. Navy-and-lime visuals, a scroll-driven 3D showcase, and product pages built for exploring every detail.</p>
        <ul className="big-bangs-project-tags" aria-label="Project features">
          <li>Responsive design</li>
          <li>Product catalogue</li>
          <li>3D motion</li>
          <li>Instagram enquiries</li>
        </ul>
        <div className="big-bangs-project-actions">
          <a className="big-bangs-visit" href={projectUrl} target="_blank" rel="noopener noreferrer">
            Visit live site <FaExternalLinkAlt aria-hidden="true" />
            <span className="big-bangs-sr-only"> (opens in a new tab)</span>
          </a>
          <Link className="big-bangs-enquire" to="/samples#big-bangs-case-study">Read the project story <FaArrowRight aria-hidden="true" /></Link>
        </div>
      </div>
    </article>
  );
}
