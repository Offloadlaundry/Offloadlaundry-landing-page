"use client";
import { pricingContent } from "@/content/sections";
import Container from "@/components/ui/Container";

export default function PricingPlans() {
  const { headline, supportingCopy, plans } = pricingContent;

  // Map plan IDs to illustration descriptions
  const getIllustrationStyle = (planId: string) => {
    switch (planId) {
      case "essential":
        return "bg-gradient-to-br from-amber-50 via-white to-emerald-50";
      case "standard":
        return "bg-gradient-to-br from-amber-100 via-white to-emerald-100";
      case "ultimate":
        return "bg-gradient-to-br from-green-700 via-emerald-600 to-teal-700";
      default:
        return "bg-gradient-to-br from-amber-50 to-white";
    }
  };

  return (
    <section id="berlangganan" className="py-20 lg:py-28 bg-gradient-to-br from-primary via-primary to-primary-light text-white overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-white blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-accent blur-3xl" />
      </div>

      <Container>
        <div className="relative z-10">
          {/* Header with Logo */}
          <div className="text-center mb-12">
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 rounded-lg bg-white/10 flex items-center justify-center">
                <img
                  src="/offload-logo.png"
                  alt="OFFLOAD"
                  className="w-12 h-12 object-contain"
                />
              </div>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-6xl font-black mb-6 tracking-tight">
              {headline}
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              {supportingCopy}
            </p>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-6 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-3xl overflow-hidden transition-transform duration-300 ${
                  plan.isRecommended
                    ? "md:scale-110 md:-translate-y-8"
                    : ""
                }`}
              >
                {/* Recommendation Badge */}
                {plan.isRecommended && (
                  <div className="absolute top-0 left-0 right-0 z-30 flex justify-center pt-6">
                    <div className="bg-accent text-primary px-6 py-2 rounded-full font-bold text-sm tracking-widest uppercase flex items-center gap-2 shadow-lg">
                      👑 REKOMENDASI
                    </div>
                  </div>
                )}

                {/* Card Shadow/Border Effect */}
                <div className="absolute inset-0 rounded-3xl pointer-events-none z-5">
                  {plan.isRecommended && (
                    <div className="absolute inset-0 rounded-3xl border-4 border-accent shadow-2xl" />
                  )}
                </div>

                {/* Card Content */}
                <div className={`relative z-10 rounded-3xl overflow-hidden ${
                  plan.isRecommended
                    ? "bg-white shadow-2xl"
                    : "bg-white shadow-lg"
                }`}>
                  {/* Top Section with Illustration */}
                  <div className={`${getIllustrationStyle(plan.id)} relative h-56 flex items-center justify-center overflow-hidden`}>
                    {/* Decorative wave bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{
                      clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0 100%)"
                    }} />
                    
                    {/* Illustration Placeholder - Emoji represents type */}
                    <div className="relative z-5 text-center">
                      {plan.id === "essential" && (
                        <div className="text-6xl">🧺</div>
                      )}
                      {plan.id === "standard" && (
                        <div className="text-6xl">👕</div>
                      )}
                      {plan.id === "ultimate" && (
                        <div className="text-5xl">👔</div>
                      )}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-8 pt-12">
                    {/* Plan Name Badge */}
                    <div className="mb-6">
                      <div className="bg-primary text-white px-5 py-2.5 rounded-full inline-block font-bold text-sm tracking-wide">
                        {plan.name}
                      </div>
                    </div>

                    {/* Weight */}
                    <div className="mb-6">
                      <div className="text-6xl font-black text-primary tracking-tight leading-none">
                        {plan.weight}
                      </div>
                    </div>

                    {/* Price */}
                    <div className="mb-8">
                      <div
                        className={`text-5xl font-black tracking-tight ${
                          plan.isRecommended ? "text-accent" : "text-primary"
                        }`}
                      >
                        Rp{plan.price}
                      </div>
                    </div>

                    {/* Bonus Section */}
                    <div className="mb-8 p-4 bg-secondary-light/60 rounded-2xl border-2 border-secondary/30">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl flex-shrink-0">🎁</span>
                        <div>
                          <div className="font-bold text-primary text-sm">
                            {plan.bonus}
                          </div>
                          <div className="text-xs text-primary/70">
                            {plan.bonusLabel}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Features Divider */}
                    <div className="mb-6 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

                    {/* Features */}
                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <span className="text-lg flex-shrink-0 mt-0.5">{feature.icon}</span>
                          <span className="text-sm text-primary/80 leading-relaxed font-medium">
                            {feature.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button
                      className={`w-full py-4 px-6 rounded-xl font-bold text-base transition-all duration-300 ${
                        plan.isRecommended
                          ? "bg-primary text-white hover:bg-primary/90 active:bg-primary/80 shadow-md hover:shadow-lg hover:-translate-y-1"
                          : "bg-primary text-white hover:bg-primary/90 active:bg-primary/80 shadow-sm hover:shadow-md"
                      }`}
                    >
                      Pilih Paket
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="text-center mt-16 text-white/80 max-w-2xl mx-auto">
            <p className="text-sm leading-relaxed">
              Semua paket mencakup layanan pickup & delivery berkala ke lokasi Anda di SCBD, Jakarta Selatan. Hubungi kami untuk informasi lebih lanjut.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
