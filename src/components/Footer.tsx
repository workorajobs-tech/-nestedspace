import { Link } from "react-router-dom";
import { ArrowUpRight, Instagram, Linkedin } from "lucide-react";
import "./Footer.css";
import {
  businessEntity,
  getBusinessAddressText,
  getTelephoneHref,
  officialSocialProfiles,
} from "../seo/businessEntity";

export default function Footer() {
  return (
    <footer className="studio-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <Link to="/" className="footer-wordmark">
            Nested Space
          </Link>
          <p>
            Thoughtfully designed.
            <br />
            Built for what’s next.
          </p>
          <a className="footer-top-link" href="#main-content">
            Back to top <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="footer-bottom">
          <div>
            <p>© 2026 Nested Space</p>
            <address>{getBusinessAddressText()}</address>
          </div>
          <div className="footer-contact">
            <a href={getTelephoneHref()}>{businessEntity.telephone}</a>
            <span>Made in Kerala. Open to possibilities everywhere.</span>
          </div>
          <div className="footer-socials">
            <a
              href={officialSocialProfiles.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Nested Space on Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href={officialSocialProfiles.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Nested Space on LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
