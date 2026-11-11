"use client";
import { useState } from "react";
import { faqItems } from "@/content/faq";
import Container from "@/components/ui/Container";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section id="faq" className="py-20 lg:py-28 bg-secondary/10">
      <Container>
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-primary mb-4">Pertanyaan Umum</h2>
          <p className="text-gray-600">Ada yang ingin kamu ketahui tentang OffLoad Laundry?</p>
        </div>
        <div className="max-w-2xl mx-auto space-y-3">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}>
                <span className="font-semibold text-primary text-sm sm:text-base pr-4">{item.question}</span>
                <svg className={`flex-shrink-0 w-5 h-5 text-primary/60 transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
