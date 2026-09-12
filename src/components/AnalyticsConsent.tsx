import { useEffect, useState } from "react";
import { analytics } from "../analytics";
import { consentKey, type AnalyticsChoice } from "../analytics/client";
import "./AnalyticsConsent.css";

export default function AnalyticsConsent() {
  const [choice, setChoice] = useState<AnalyticsChoice | null>(null);
  const [mounted, setMounted] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    analytics.syncChoice();
    setChoice(analytics.getChoice());
    setMounted(true);
    const sync = (event: StorageEvent) => {
      if (event.key === consentKey || event.key === null) {
        analytics.syncChoice();
        setChoice(analytics.getChoice());
      }
    };
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);

  const choose = (next: AnalyticsChoice) => {
    analytics.setChoice(next);
    setChoice(next);
    setSettingsOpen(false);
  };

  return (
    <>
      <div className="analytics-settings-link">
        <button type="button" onClick={() => setSettingsOpen(true)}>Privacy &amp; cookies</button>
      </div>
      {mounted && (choice === null || settingsOpen) && (
        <section className="analytics-choice" aria-label="Optional website analytics">
          <h2>Your privacy, your choice.</h2>
          <p>May we use Google Analytics cookies to understand which pages are useful and how visitors contact us? You can use the whole website without them.</p>
          <details>
            <summary>Privacy details</summary>
            <div className="analytics-privacy">
              <p>Nested Space, Hilite Business Park, Kozhikode, Kerala, India, uses optional Google Analytics to measure page visits and contact-button actions. When you allow it, Google processes visit, browser, device, and approximate location information. We use these reports to improve our website.</p>
              <p>Our analytics events do not include your contact-form entries, phone number, message, or the contents of a prefilled WhatsApp link. Clicking a contact button does not tell us whether you sent a message or completed a call. We do not enable advertising personalization.</p>
              <p>We remember this choice in your browser for six months. Analytics cookies are set with a six-month lifetime that can renew with visits. You can decline or withdraw permission here at any time; withdrawing stops future measurement and clears this site's Google Analytics cookies.</p>
              <p>The contact form opens WhatsApp with the details you enter. Those details are handled by WhatsApp when you continue there; we receive them when you send your message. For privacy requests, call <a href="tel:+919656838767">+91 9656838767</a>.</p>
              <p>Read <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">how Google uses information from partner sites</a> and <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">WhatsApp's privacy policy</a>.</p>
            </div>
          </details>
          <div className="analytics-choice-actions">
            <button type="button" onClick={() => choose("denied")}>Decline analytics</button>
            <button type="button" onClick={() => choose("granted")}>Allow analytics</button>
            {choice !== null && <button type="button" onClick={() => setSettingsOpen(false)}>Close</button>}
          </div>
        </section>
      )}
    </>
  );
}
