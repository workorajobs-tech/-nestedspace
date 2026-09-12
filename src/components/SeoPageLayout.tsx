import { useMotionPreference } from "../hooks/useMotionPreference";
import { type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import SpaceBackground from "./SpaceBackground";
import starter from "../data/starterWebsiteContent.json" with { type: "json" };
import "./SeoPageLayout.css";

export default function SeoPageLayout({
  children,
  className,
  breadcrumb,
}: {
  children: ReactNode;
  className: string;
  breadcrumb: string;
}) {
  const [motionPaused, setMotionPaused] = useMotionPreference();

  return (
    <main className={`seo-page ${className}`}>
      <SpaceBackground paused={motionPaused} onPausedChange={setMotionPaused} />
      <div className="seo-page-content">
        <nav className="seo-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{breadcrumb}</span>
        </nav>
        {children}
      </div>
    </main>
  );
}

export function StarterWebsiteOffer() {
  return (
    <aside className="seo-offer" aria-label="Starter website package">
      <div className="seo-offer-topline">
        <span>Starter website</span>
        <ArrowUpRight size={22} aria-hidden="true" />
      </div>
      <p className="seo-offer-price">{starter.price}<span>website build</span></p>
      <ul>
        {["Responsive business website", "WhatsApp & contact actions", "One focused revision round", "Pay after approval"].map(item => (
          <li key={item}><Check size={18} aria-hidden="true" />{item}</li>
        ))}
      </ul>
      <div className="seo-offer-details">
        <p>{starter.priceNote}</p>
        <p>{starter.deliveryNote}</p>
      </div>
      <Link className="seo-offer-link" to="/pricing#starter-package">
        See pricing details <ArrowUpRight size={18} aria-hidden="true" />
      </Link>
    </aside>
  );
}
