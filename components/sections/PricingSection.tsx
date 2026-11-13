"use client";

import Container from "@/components/ui/Container";

export default function PricingSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const subscriptionPlans = [
    {
      name: "Essential",
      price: "Rp160.000",
      features: [
        "Kuota 10 kg layanan Cuci Setrika Wangi",
        "Bonus 3kg untuk 1 bulan pertama",
        "Gratis pickup & delivery maksimal 1 kali/minggu",
        "Pengerjaan 1 hari",
      ],
    },
    {
      name: "Standard+",
      price: "Rp300.000",
      features: [
        "Kuota 20 kg layanan Cuci Setrika Wangi",
        "Bonus 5kg untuk 1 bulan pertama",
        "Gratis pickup & delivery maksimal 2 kali/minggu",
        "Prioritas penjadwalan pickup",
        "Pengerjaan 1 hari",
      ],
    },
    {
      name: "Ultimate",
      price: "Rp420.000",
      features: [
        "Kuota 30 kg layanan Cuci Setrika Wangi",
        "Bonus 7kg untuk 1 bulan pertama",
        "Gratis pickup & delivery maksimal 2 kali/minggu",
        "Prioritas penjadwalan pickup",
        "Pengerjaan 1 hari",
      ],
    },
  ];

  const regularServices = [
    {
      name: "Cuci Setrika Wangi",
      price: "mulai dari Rp17.000/kg",
    },
    {
      name: "Cuci Lipat Rapi",
      price: "mulai dari Rp12.000/kg",
    },
  ];

  const regularInfo = [
    "Pilihan waktu pengerjaan: 1 hari, 12 jam, 6 jam.",
    "Minimal book 3 kg.",
    "Untuk pakaian sehari-hari seperti kaus, kemeja, celana pendek, dll.",
    "Gratis pickup & delivery dengan minimal book 5 kg.",
    "Pembayaran dilakukan tiap transaksi.",
  ];

  return (
    <section id="harga" className="py-20 lg:py-28 bg-background">
      <Container>
        <div className="max-w-2xl mx-auto text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-black text-primary leading-tight mb-4">
            Pricelist & Service
          </h2>
          <p className="text-gray-600 leading-relaxed">
            OFFLOAD Laundry menawarkan pilihan fleksibel yang mengakomodasi rutinitas kamu.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Subscription Card */}
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            {/* Header */}
            <div className="bg-primary text-white p-8">
              <h3 className="text-2xl font-black mb-4">BERLANGGANAN</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                Untuk kamu yang efisien. Satu kali pembayaran untuk 30 hari bebas stres laundry.
                Tersedia tiga pilihan paket sesuai kebutuhanmu.
              </p>
            </div>

            {/* Features */}
            <div className="p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {subscriptionPlans.map((plan) => (
                  <div
                    key={plan.name}
                    className="border border-gray-200 rounded-lg p-4 hover:border-secondary transition-colors flex flex-col h-full"
                  >
                    <div>
                      <h4 className="font-bold text-primary mb-2 text-sm sm:text-base">{plan.name}</h4>
                      <p className="text-base sm:text-lg font-bold text-primary mb-3">{plan.price}</p>
                      <div className="h-px bg-gradient-to-r from-primary/20 to-primary/20 mb-3"></div>
                    </div>
                    <ul className="space-y-2 flex-1">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="text-xs text-gray-600 leading-tight">
                          <span className="text-primary font-bold">•</span> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Button */}
            <div className="px-8 pb-8">
              <button
                onClick={scrollToTop}
                className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-primary-light transition-colors"
              >
                Daftar Early Access
              </button>
            </div>
          </div>

          {/* Regular Service Card */}
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            {/* Header */}
            <div className="bg-primary text-white p-8">
              <h3 className="text-2xl font-black mb-4">REGULAR</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                Untuk kamu yang dinamis. Tersedia pilihan layanan dan waktu pengerjaan. Pilih yang
                paling tepat untuk kebutuhanmu.
              </p>
            </div>

            {/* Features */}
            <div className="p-8">
              {/* Services Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {regularServices.map((service) => (
                  <div
                    key={service.name}
                    className="border border-gray-200 rounded-lg p-4 hover:border-secondary transition-colors"
                  >
                    <h4 className="font-bold text-primary mb-2 text-sm sm:text-base">{service.name}</h4>
                    <div className="h-px bg-gradient-to-r from-primary/20 to-primary/20 mb-2"></div>
                    <p className="text-sm font-bold text-primary">{service.price}</p>
                  </div>
                ))}
              </div>

              {/* Info List */}
              <div className="bg-gray-50 rounded-lg p-4">
                <ul className="space-y-2">
                  {regularInfo.map((info, idx) => (
                    <li key={idx} className="text-xs text-gray-600">
                      <span className="text-primary font-bold">•</span> {info}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Button */}
            <div className="px-8 pb-8">
              <button
                onClick={scrollToTop}
                className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-primary-light transition-colors"
              >
                Daftar Early Access
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
