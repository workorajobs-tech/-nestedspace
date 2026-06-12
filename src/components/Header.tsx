import React, { useState } from "react";
import "./Header.css";
import { FaInstagram, FaLinkedinIn, FaBars, FaTimes } from "react-icons/fa";
import nestedloopLogo from "../assets/nestedloop.png";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact-section" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header-wrapper ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
      <div className="header-content">
        {/* Left: Logo + Title */}
        <div className="header-left">
          <img src={nestedloopLogo} alt="NestedlooP.space Logo" className="logo-image" />
          <h1 className="brand-name">NestedlooP.space</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="header-nav desktop-nav">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={(event) => scrollToSection(event, item.href)}>
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: Social + Button */}
        <div className="header-right">
          <a href="https://www.instagram.com/nestedloop.space" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/company/nestedloop-space" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <button className="cta-btn" onClick={() => document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" })}>
            Start My Website
            <span className="badge">Pay After Work</span>
          </button>
        </div>

        {/* Mobile Right Section: Social Icons + Menu Button */}
        <div className="mobile-header-right">
          <a href="https://www.instagram.com/nestedloop.space" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/company/nestedloop-space" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={(event) => scrollToSection(event, item.href)}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
