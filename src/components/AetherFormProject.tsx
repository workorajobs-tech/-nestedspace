import { FaExternalLinkAlt } from "react-icons/fa";
import { aetherFormProject } from "../data/showcaseProjects";
import "./BigBangsProject.css";
import "./AetherFormProject.css";

export default function AetherFormProject() {
  return (
    <article className="big-bangs-project" aria-label="Aether Form by Nested Space">
      <a
        className="big-bangs-preview aether-form-preview"
        href={aetherFormProject.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Explore the Aether Form website (opens in a new tab)"
      >
        <div className="big-bangs-preview-bar" aria-hidden="true">
          <span className="big-bangs-dots"><i /><i /><i /></span>
          <span>aether-form.pages.dev</span>
          <FaExternalLinkAlt />
        </div>
        <img
          className="aether-form-preview-image"
          src={aetherFormProject.poster}
          alt="Aether Form website with a sculptural gold tower and the headline We shape spaces that move."
          width="960"
          height="720"
          loading="lazy"
          decoding="async"
        />
      </a>
      <div className="big-bangs-project-copy">
        <span className="big-bangs-project-label">Demonstration project · Live demo</span>
        <h3>{aetherFormProject.name}</h3>
        <p className="big-bangs-credit">Designed &amp; developed by Nested Space</p>
        <p>An architecture studio website shaped around space, light and movement. A sculptural 3D hero, warm gold accents and editorial project pages bring the studio’s work into focus.</p>
        <ul className="big-bangs-project-tags" aria-label="Project features">
          <li>Responsive design</li>
          <li>3D motion</li>
          <li>Project portfolio</li>
          <li>Studio journal</li>
        </ul>
        <div className="big-bangs-project-actions">
          <a className="big-bangs-visit" href={aetherFormProject.url} target="_blank" rel="noopener noreferrer">
            Visit live site <FaExternalLinkAlt aria-hidden="true" />
            <span className="big-bangs-sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </article>
  );
}
