"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Competencies", href: "#competencies" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.substring(1));
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 140 && rect.bottom >= 140;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-4 sm:top-6 z-50 px-4 sm:px-8 max-w-7xl mx-auto transition-all duration-300 ${
        scrolled ? "translate-y-0" : ""
      }`}
      data-purpose="site-navigation"
    >
      <nav
        aria-label="Main Navigation"
        className="glass-pill rounded-full px-4 py-2.5 flex items-center justify-between shadow-glass transition-all duration-300 border border-white/90"
      >
        {/* Brand Avatar / Monogram */}
        <Link
          href="#hero"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-full"
          aria-label="Phalonne Guemkam - Back to top"
        >
          <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm tracking-wider shadow-sm transition-transform group-hover:scale-105">
            PG
          </div>
          <div className="hidden sm:block text-left">
            <p className="text-xs font-semibold tracking-tight text-slate-800 leading-none">
              Phalonne Guemkam
            </p>
            <p className="text-[11px] font-medium text-slate-400 leading-tight mt-0.5">
              Software Developer
            </p>
          </div>
        </Link>

        {/* Central Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-1 bg-slate-100/60 p-1 rounded-full border border-white/60 text-xs font-medium text-slate-600">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-white text-slate-900 shadow-sm font-semibold"
                    : "hover:text-slate-900 hover:bg-white/40"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 bg-white/70 hover:bg-white border border-slate-200/80 rounded-full px-3.5 py-2 transition-all shadow-sm hover:shadow"
          >
            <span>Resume</span>
            <svg
              className="w-3.5 h-3.5 text-slate-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-full px-4 py-2 transition-all shadow-sm hover:shadow group"
          >
            <span>Let&apos;s Talk</span>
            <span
              className="inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            >
              ↗
            </span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full hover:bg-slate-100/70 text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 glass-card rounded-2xl p-4 shadow-xl border border-white/90 animate-fadeIn">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === item.href.substring(1)
                    ? "bg-slate-900 text-white font-semibold"
                    : "text-slate-700 hover:bg-white/60"
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 mt-2 border-t border-slate-200/60 flex flex-col gap-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-center py-2 px-4 rounded-xl text-xs font-semibold bg-brand-50 text-brand-700 border border-brand-200"
              >
                Download CV (PDF)
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
