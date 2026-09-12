import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ContactPage.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { businessEntity, getTelephoneHref } from "../seo/businessEntity";
import { analytics } from "../analytics";
import starter from "../data/starterWebsiteContent.json" with { type: "json" };

const whatsappNumber =
  import.meta.env.VITE_WHATSAPP_NUMBER?.replace(/\D/g, "") ?? businessEntity.telephone.replace(/\D/g, "");
const buildWhatsAppUrl = (message: string) => {
  const encodedMessage = encodeURIComponent(message);
  return whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    : `https://wa.me/?text=${encodedMessage}`;
};

export default function ContactPage() {
  const [formReady, setFormReady] = useState(false);
  const [handoffReady, setHandoffReady] = useState(false);
  const [form, setForm] = useState({
    name: "",
    business: "",
    message: "",
  });
  // The prerendered form must not fall back to putting enquiry details in a GET URL.
  useEffect(() => { setFormReady(true); }, []);

  const updateField = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setHandoffReady(false);
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const enquiryMessage = [
    "Hi Nested Space, I'd like to discuss a website.",
    `Name: ${form.name.trim()}`,
    `Business / project: ${form.business.trim()}`,
    ...(form.message.trim() ? [`What I need: ${form.message.trim()}`] : []),
  ].join("\n");
  const enquiryUrl = buildWhatsAppUrl(enquiryMessage);

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.open(enquiryUrl, "_blank", "noopener,noreferrer");
    setHandoffReady(true);
    analytics.contact("contact_form_handoff", "contact");
  };

  const faqs = [
    { q: "What do I get for ₹2000?", a: "A responsive business website with an introduction, service details, contact and WhatsApp actions, basic SEO setup, hosting, one focused revision round and deployment support. Only the domain costs extra. Updates after launch have an additional charge." },
    { q: "When does the 48-hour timeline start?", a: "After we receive your business name, logo or brand colors, offer details, contact number, and sample references." },
    { q: "How many edits are included?", a: "The starter package includes one focused revision round after the first delivery." },
    { q: "Do I need to pay first?", a: "No. You review the agreed work first and pay after approval." }
  ];

  return (
    <div id="contact-section" className="contact-wrapper">
      <div className="contact-card">
        {/* Left: Form */}
        <div className="form-section">
          <h2>Let’s talk about your website.</h2>
          <p>Have a question? Chat with us directly, or include a few details below.</p>
          <a href={buildWhatsAppUrl("Hi Nested Space, I'd like to discuss a website for my business.")} target="_blank" rel="noopener noreferrer" className="whatsapp-btn" onClick={() => analytics.contact("whatsapp_click", "contact")}>
            <FaWhatsapp aria-hidden="true" /> Chat on WhatsApp
          </a>
          <p className="contact-form-divider">Or tell us a little about your business</p>
          <noscript><p>The form needs JavaScript. You can still use Chat on WhatsApp above or call us below.</p></noscript>

          <form onSubmit={submitForm} aria-label="Website enquiry" aria-describedby="contact-handoff-note">
            <label className="contact-field" htmlFor="enquiry-name">
              Your name <span className="contact-field-hint">Required</span>
              <input id="enquiry-name" type="text" name="name" autoComplete="name" maxLength={80} pattern=".*\S.*" value={form.name} onChange={updateField} disabled={!formReady} required />
            </label>
            <label className="contact-field" htmlFor="enquiry-business">
              Business or project name <span className="contact-field-hint">Required</span>
              <input id="enquiry-business" type="text" name="business" autoComplete="organization" maxLength={120} pattern=".*\S.*" value={form.business} onChange={updateField} disabled={!formReady} required />
            </label>
            <label className="contact-field" htmlFor="enquiry-message">
              What would you like to build? <span className="contact-field-hint">Optional</span>
              <textarea id="enquiry-message" name="message" placeholder="For example: a page for my shop with services, photos and a contact button." rows={3} maxLength={1000} value={form.message} onChange={updateField} disabled={!formReady} />
            </label>
            <button type="submit" disabled={!formReady}>Continue on WhatsApp ↗</button>
            <p id="contact-handoff-note" className="contact-handoff-note">This opens WhatsApp with your details. Review and send the message there to reach us.</p>
          </form>
          {handoffReady && (
            <div className="contact-handoff-status" role="status">
              <strong>Finish in WhatsApp.</strong>
              <p>Send the prepared message there to start the conversation. If it didn’t open, <a href={enquiryUrl} target="_blank" rel="noopener noreferrer" onClick={() => analytics.contact("contact_form_handoff", "contact")}>open WhatsApp again</a>, or call <a href={getTelephoneHref()} onClick={() => analytics.contact("phone_click", "contact")}>{businessEntity.telephone}</a>.</p>
            </div>
          )}
        </div>

        {/* Right: WhatsApp + FAQ */}
        <div className="faq-section">
          <aside className="contact-offer" aria-label="Starter package reminder">
            <span>Starter website</span>
            <h3>{starter.price} <span>website build</span></h3>
            <p>{starter.priceNote}</p>
            <p>{starter.deliveryNote} Review before payment. Later updates cost extra.</p>
            <Link to="/pricing#starter-package">See the full package &amp; costs ↗</Link>
          </aside>

          <div className="business-info" aria-label="Nested Space business information">
            <h3>{businessEntity.name}</h3>
            <div className="business-detail">
              <FaMapMarkerAlt />
              <address>
                {businessEntity.address.streetAddress}
                <br />
                {businessEntity.address.addressLocality}, {businessEntity.address.addressRegion},{" "}
                {businessEntity.address.addressCountry}
              </address>
            </div>
            <a className="business-detail business-link" href={getTelephoneHref()} onClick={() => analytics.contact("phone_click", "contact")}>
              <FaPhoneAlt />
              <span>Phone: {businessEntity.telephone}</span>
            </a>
            <p>{businessEntity.serviceAreaSentence}</p>
          </div>

          <div className="faq">
            <h3>A few things you might be wondering.</h3>
            {faqs.map((item) => (
              <details key={item.q} className="faq-item">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
