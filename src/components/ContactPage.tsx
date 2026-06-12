import React, { useState } from "react";
import "./ContactPage.css";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const buildWhatsAppUrl = (message: string) => `https://wa.me/?text=${encodeURIComponent(message)}`;

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
      "New website enquiry for NestedlooP.space",
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
    { q: "Can you finish in 48 hours?", a: "Yes for starter landing pages when the content, logo, and basic business details are shared on time." },
    { q: "Do I need to pay first?", a: "No. You review the agreed work first and pay after approval." }
  ];

  return (
    <div id="contact-section" className="contact-wrapper">
      <div className="contact-card">
        {/* Left: Form */}
        <div className="form-section">
          <h2>Get in Touch</h2>
          <p>Tell us what you sell and where customers should contact you. The form opens WhatsApp with your details ready to send.</p>

          <form onSubmit={submitForm}>
            <input type="text" name="name" placeholder="Name" value={form.name} onChange={updateField} required />
            <input type="text" name="business" placeholder="Business" value={form.business} onChange={updateField} required />
            <input type="tel" name="whatsapp" placeholder="WhatsApp Number" value={form.whatsapp} onChange={updateField} required />
            <input type="text" name="city" placeholder="City" value={form.city} onChange={updateField} />
            <textarea name="message" placeholder="Message" rows={4} value={form.message} onChange={updateField}></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Right: WhatsApp + FAQ */}
        <div className="faq-section">
          <a href={buildWhatsAppUrl("Hi NestedlooP.space, I want a website in 48 hours.")} target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
            <FaWhatsapp /> Chat with Us on WhatsApp
          </a>

          <div className="faq">
            <h3>FAQ</h3>
            {faqs.map((item, i) => (
              <div key={i} className={`faq-item ${faqOpen === i ? "open" : ""}`}>
                <button onClick={() => toggleFaq(i)}>
                  {item.q}
                  <span className="arrow">{faqOpen === i ? "–" : "+"}</span>
                </button>
                {faqOpen === i && <p>{item.a}</p>}
              </div>
            ))}
            <p className="office-hours">Office Hours: Mon–Sat: 10 AM – 8 PM</p>
          </div>
        </div>
      </div>

      {/* Owners */}
      <div className="owners">
        <h2>About the Owners</h2>
        <div className="owners-grid">
          <div className="owner-card">
            <div className="avatar"></div>
            <h3>NestedlooP Team</h3>
            <span className="role">Design & Development</span>
            <p>
              We plan the landing page, write the core sections, and build the responsive website around your product or service.
            </p>
            <div className="socials">
              <a href="https://www.linkedin.com/company/nestedloop-space" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
            </div>
          </div>

          <div className="owner-card">
            <div className="avatar female"></div>
            <h3>Delivery Support</h3>
            <span className="role">Launch & Handover</span>
            <p>
              We help with final checks, contact links, deployment, and small launch edits so the page is ready to share.
            </p>
            <div className="socials">
              <a href="https://www.linkedin.com/company/nestedloop-space" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
