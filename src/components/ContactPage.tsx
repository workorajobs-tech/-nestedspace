import React, { useState } from "react";
import "./ContactPage.css";
import { FaBuilding, FaClock, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { businessEntity, getBusinessAddressText, getTelephoneHref } from "../seo/businessEntity";

const whatsappNumber =
  import.meta.env.VITE_WHATSAPP_NUMBER?.replace(/\D/g, "") ?? businessEntity.telephone.replace(/\D/g, "");
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
  const businessHoursLabel = businessEntity.businessHours ? "Business hours available" : "Business hours will be updated here when confirmed.";

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
            <p>Customers can visit the Kozhikode office for consultations and project discussions.</p>
            <p className="business-hours">
              <FaClock />
              <span>{businessHoursLabel}</span>
            </p>
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
            <div className="avatar"><FaBuilding /></div>
            <h3>Office consultations</h3>
            <span className="role">{getBusinessAddressText()}</span>
            <p>
              Visit the Kozhikode office to discuss your business website, project scope, content, and launch requirements.
            </p>
          </div>

          <div className="owner-card">
            <div className="avatar female"><FaWhatsapp /></div>
            <h3>Remote project discussions</h3>
            <span className="role">Kerala and India</span>
            <p>
              Share your requirements through WhatsApp if you are outside Kozhikode or prefer an online discussion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
