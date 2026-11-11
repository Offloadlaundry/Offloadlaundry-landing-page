"use client";
import { earlyAccessContent } from "@/content/sections";
import Container from "@/components/ui/Container";

export default function EarlyAccessCTA() {
  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector("#lead-form")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="py-20 lg:py-28 bg-background">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-secondary/60 text-primary text-xs font-semibold tracking-widest uppercase mb-6">Early Access</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary leading-tight mb-4">{earlyAccessContent.headline}</h2>
          <p className="text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto">{earlyAccessContent.supportingCopy}</p>
          <a href="#lead-form" onClick={scrollToForm}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-white font-bold text-base hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            {earlyAccessContent.buttonText}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </Container>
    </section>
  );
}
