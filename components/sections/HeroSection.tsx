import LeadForm from "@/components/forms/LeadForm";
import { heroContent } from "@/content/sections";

export default function HeroSection() {
  return (
    <section id="beranda" className="min-h-screen bg-gradient-to-br from-primary via-primary to-primary-light flex items-center pt-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-white order-2 lg:order-1">
            <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-secondary text-xs font-semibold tracking-widest uppercase mb-6">
              {heroContent.eyebrow}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6 whitespace-pre-line">
              {heroContent.headline}
            </h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-lg">{heroContent.supportingCopy}</p>
            <div className="mt-10 flex gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <div className="w-2 h-2 rounded-full bg-white/30" />
              <div className="w-2 h-2 rounded-full bg-white/30" />
            </div>
          </div>
          <div className="order-1 lg:order-2" id="lead-form">
            <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-primary mb-1">{heroContent.formHeading}</h2>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">{heroContent.formSupportingText}</p>
              <LeadForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
