import { Link } from "react-router-dom";
import Seo from "./Seo";
import SeoPageLayout from "./SeoPageLayout";
import { notFoundMetadata } from "../seo/supportPageMetadata.js";
import "./WebsiteDevelopmentKeralaPage.css";

export default function NotFoundPage() {
  return (
    <SeoPageLayout className="kerala-page" breadcrumb="Page not found">
      <Seo {...notFoundMetadata} />
      <section className="kerala-hero">
        <div className="kerala-hero-copy">
          <span className="section-kicker">404 · Page not found</span>
          <h1>This space is <span>still empty.</span></h1>
          <p>The link may have changed, or the address may contain a typo. Find your way back to our websites, pricing and recent work.</p>
          <div className="kerala-hero-actions">
            <Link className="btn-primary" to="/">Back to home</Link>
            <Link className="btn-outline" to="/pricing">Explore pricing</Link>
          </div>
        </div>
      </section>
    </SeoPageLayout>
  );
}
