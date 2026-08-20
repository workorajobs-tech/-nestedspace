import React, { useState } from "react";
import "./ContactPage.css";
import { FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { businessEntity, getTelephoneHref, officialSocialProfiles } from "../seo/businessEntity";
import salmanulFarisPhoto from "../assets/owner-salmanul-faris.webp";
import nithunPhoto from "../assets/owner-nithun.webp";

const whatsappNumber =
  import.meta.env.VITE_WHATSAPP_NUMBER?.replace(/\D/g, "") ?? businessEntity.telephone.replace(/\D/g, "");
const salmanulFarisLinkedIn =
  "https://www.linkedin.com/in/salmanul-faris-292659170?utm_source=share_via&utm_content=profile&utm_medium=member_ios";
const buildWhatsAppUrl = (message: string) => {
  const encodedMessage = encodeURIComponent(message);
  return whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    : `https://wa.me/?text=${encodedMessage}`;
};

export default function ContactPage() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [form, setForm] = useState({
    name: "",
    business: "",
    whatsapp: "",
    city: "",
    message: "",
  });

  const toggleFaq = (index: number) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  const updateField = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = [
      "New website enquiry for Nested Space",
      `Name: ${form.name || "-"}`,
      `Business: ${form.business || "-"}`,
      `WhatsApp: ${form.whatsapp || "-"}`,
      `City: ${form.city || "-"}`,
      `Message: ${form.message || "-"}`,
    ].join("\n");
    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  };

  const faqs = [
    { q: "What do I get for ₹2000?", a: "A one-page responsive website with hero section, service details, contact flow, WhatsApp CTA, and deployment support." },
    { q: "When does the 48-hour timeline start?", a: "After we receive your business name, logo or brand colors, offer details, contact number, and sample references." },
    { q: "How many edits are included?", a: "The starter package includes one focused revision round after the first delivery." },
    { q: "Do I need to pay first?", a: "No. You review the agreed work first and pay after approval." }
  ];

  return (
    <div id="contact-section" className="contact-wrapper">
      <div className="contact-card">
        {/* Left: Form */}
        <div className="form-section">
          <h2>Start your business website request</h2>
          <p>Tell us what you sell and where customers should contact you. The form opens WhatsApp with your website creation details ready to send.</p>

          <form onSubmit={submitForm}>
            <input type="text" name="name" placeholder="Name" aria-label="Name" autoComplete="name" value={form.name} onChange={updateField} required />
            <input type="text" name="business" placeholder="Business" aria-label="Business" autoComplete="organization" value={form.business} onChange={updateField} required />
            <input type="tel" name="whatsapp" placeholder="WhatsApp Number" aria-label="WhatsApp Number" autoComplete="tel" value={form.whatsapp} onChange={updateField} required />
            <input type="text" name="city" placeholder="City" aria-label="City" autoComplete="address-level2" value={form.city} onChange={updateField} />
            <textarea name="message" placeholder="What should the page promote?" aria-label="What should the page promote?" rows={4} value={form.message} onChange={updateField}></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Right: WhatsApp + FAQ */}
        <div className="faq-section">
          <a href={buildWhatsAppUrl("Hi Nested Space, I want a website in 48 hours.")} target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
            <FaWhatsapp /> Chat with Us on WhatsApp
          </a>

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
            <a className="business-detail business-link" href={getTelephoneHref()}>
              <FaPhoneAlt />
              <span>Phone: {businessEntity.telephone}</span>
            </a>
            <p>{businessEntity.serviceAreaSentence}</p>
          </div>

          <div className="faq">
            <h3>FAQ</h3>
            {faqs.map((item, i) => (
              <div key={i} className={`faq-item ${faqOpen === i ? "open" : ""}`}>
                <button onClick={() => toggleFaq(i)} aria-expanded={faqOpen === i}>
                  {item.q}
                  <span className="arrow">{faqOpen === i ? "–" : "+"}</span>
                </button>
                {faqOpen === i && <p>{item.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="owners">
        <h2>What you can expect</h2>
        <div className="owners-grid">
          <div className="owner-card">
            <img
              src={salmanulFarisPhoto}
              alt="Salmanul Faris"
              className="avatar"
              width="360"
              height="360"
              loading="lazy"
              decoding="async"
            />
            <h3>
              Salmanul Faris
              <a
                href={salmanulFarisLinkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="owner-social-link"
                aria-label="Salmanul Faris LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </h3>
            <span className="role">Design & Development</span>
            <p>
              We plan the business website around one clear offer, write the core sections, and build a responsive page for your product or service.
            </p>
          </div>

          <div className="owner-card">
            <img
              src={nithunPhoto}
              alt="Nithun"
              className="avatar"
              width="360"
              height="360"
              loading="lazy"
              decoding="async"
            />
            <h3>
              Nithun
              <a
                href={officialSocialProfiles.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="owner-social-link"
                aria-label="Nested Space LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </h3>
            <span className="role">Launch & Handover</span>
            <p>
              We help with final website checks, contact links, deployment, and small launch edits so the page is ready to share.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
