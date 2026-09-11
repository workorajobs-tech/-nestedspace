import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import nestedSpaceLogo from "../assets/nested-space-logo.webp";
import "./Header.css";

const navItems = [
  { label: "Services", href: "/#services" },
  { label: "Our work", href: "/#portfolio" },
  { label: "The process", href: "/#process" },
  { label: "Pricing", href: "/pricing" },
];

export default function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname, location.hash]);
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 981px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setIsMobileMenuOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    const onOutside = (event: PointerEvent) => {
      if (
        !menuRef.current?.contains(event.target as Node) &&
        !menuButton.current?.contains(event.target as Node)
      )
        setIsMobileMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onOutside);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="header-wrapper">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="header-content">
        <Link className="header-brand" to="/" aria-label="Nested Space home">
          <img src={nestedSpaceLogo} alt="" width="48" height="36" />
          <span>Nested Space</span>
        </Link>
        <nav className="header-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              aria-current={
                location.pathname === item.href ? "page" : undefined
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="header-cta" to="/#contact-section">
          Let’s talk <ArrowUpRight size={17} />
        </Link>
        <button
          ref={menuButton}
          className="mobile-menu-btn"
          type="button"
          onClick={() => setIsMobileMenuOpen((current) => !current)}
          aria-controls="mobile-navigation"
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {isMobileMenuOpen && (
        <nav
          ref={menuRef}
          className="mobile-nav"
          id="mobile-navigation"
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
              <ArrowUpRight size={18} />
            </Link>
          ))}
          <Link
            to="/#contact-section"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Let’s talk
            <ArrowUpRight size={18} />
          </Link>
        </nav>
      )}
    </header>
  );
}
