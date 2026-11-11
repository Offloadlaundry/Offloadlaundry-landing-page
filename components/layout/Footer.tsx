"use client";
import { useState } from "react";
import { footerContent } from "@/content/sections";
import PrivacyPolicyModal from "@/components/modals/PrivacyPolicyModal";

export default function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <footer className="bg-footer text-white py-12 lg:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-8 border-b border-white/10">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">OL</span>
                </div>
                <span className="font-bold text-lg">{footerContent.wordmark}</span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed max-w-xs">{footerContent.description}</p>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">Navigasi</h3>
              <ul className="space-y-2">
                {footerContent.navLinks.map((link) => (
                  <li key={link.target}>
                    <a href={link.target} onClick={(e) => handleNav(e, link.target)}
                      className="text-sm text-white/70 hover:text-white transition-colors">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">Legal</h3>
              <button onClick={() => setShowPrivacy(true)}
                className="text-sm text-white/70 hover:text-white transition-colors text-left">
                Kebijakan Privasi
              </button>
            </div>
          </div>
          <div className="pt-8 text-center text-white/40 text-xs">{footerContent.copyright}</div>
        </div>
      </footer>
      <PrivacyPolicyModal isOpen={showPrivacy} onClose={() => setShowPrivacy(false)} />
    </>
  );
}
