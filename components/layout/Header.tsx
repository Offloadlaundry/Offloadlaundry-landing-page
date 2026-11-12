"use client";
import { useState } from "react";

const navLinks = [
  { label: "Beranda", target: "#beranda" },
  { label: "Kenapa OFFLOAD Laundry", target: "#kenapa" },
  { label: "Cara Kerja", target: "#cara-kerja" },
  { label: "FAQ", target: "#faq" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section - Refined with Shadow Effect */}
          <a
            href="#beranda"
            onClick={(e) => handleNav(e, "#beranda")}
            className="flex items-center gap-3 group"
          >
            {/* Logo Container - Elegant Shadow Effect */}
            <div className="flex items-center justify-center w-20 h-20 rounded-lg bg-white shadow-md group-hover:shadow-lg transition-shadow flex-shrink-0">
              <img
                src="/offload-logo.png"
                alt="OFFLOAD Laundry"
                className="w-16 h-16 object-contain"
              />
            </div>
            
            {/* Brand Name - Single Line on Desktop */}
            <div className="flex items-center leading-tight hidden sm:flex">
              <span className="font-black text-primary text-lg tracking-tight whitespace-nowrap">
                OFFLOAD Laundry
              </span>
            </div>
          </a>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.target}
                href={link.target}
                onClick={(e) => handleNav(e, link.target)}
                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button - Desktop - Elevated Design */}
          <a
            href="#lead-form"
            onClick={(e) => handleNav(e, "#lead-form")}
            className="hidden lg:inline-flex items-center px-6 py-3 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary/90 active:bg-primary/80 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Gabung Early Access
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-primary transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.target}
                href={link.target}
                onClick={(e) => handleNav(e, link.target)}
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#lead-form"
                onClick={(e) => handleNav(e, "#lead-form")}
                className="block w-full text-center px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                Gabung Early Access
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
