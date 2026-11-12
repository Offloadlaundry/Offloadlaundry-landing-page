// content/sections.ts (UPDATED dengan pricing content)
// All website copy lives here, separate from UI components (design.md architecture)

export const heroContent = {
  eyebrow: "SEGERA HADIR DI SCBD, JAKARTA SELATAN",
  headline: "Laundry Beres,\nWaktu Lebih Bebas.",
  supportingCopy:
    "Rutinitas sudah cukup padat. Urusan laundry seharusnya nggak ikut bikin repot. OFFLOAD Laundry sedang menyiapkan layanan laundry online yang praktis untuk membantu kamu punya lebih banyak waktu untuk hal yang penting.",
  formHeading: "Jadi yang Pertama Tahu!",
  formSupportingText:
    "Tinggalkan nama dan Instagram kamu. Kami akan mengabari saat OFFLOAD Laundry semakin dekat dengan hari peluncuran.",
};

export const problemSolutionContent = {
  headline: "Waktu Kamu Terlalu Berharga untuk Habis Mengurus Laundry.",
  supportingCopy:
    "Mulai dari memilah pakaian, mencuci, sampai memastikan semuanya siap dipakai lagi—urusan laundry bisa menyita waktu di tengah jadwal yang padat. OFFLOAD Laundry hadir dengan ide sederhana: membuat pengalaman laundry terasa lebih praktis, supaya kamu bisa fokus pada aktivitas yang lebih penting.",
  benefits: [
    {
      icon: "✦",
      title: "Lebih Praktis",
      description:
        "Bayangkan urusan laundry yang bisa dimulai secara online, tanpa harus menambah banyak hal ke to-do list kamu.",
    },
    {
      icon: "⏱",
      title: "Lebih Banyak Waktu",
      description:
        "Kurangi waktu yang biasanya tersita untuk mengurus pakaian dan gunakan untuk hal yang lebih berarti.",
    },
    {
      icon: "📍",
      title: "Lebih Mudah Diakses",
      description:
        "OFFLOAD Laundry sedang dipersiapkan untuk menemani kebutuhan laundry masyarakat SCBD, Jakarta Selatan.",
    },
  ],
};

export const howItWorksContent = {
  headline: "Pengalaman Laundry, Kini Lebih Sederhana.",
  supportingCopy:
    "Kami sedang menyiapkan pengalaman laundry online yang lebih praktis. Ini gambaran sederhana tentang pengalaman yang ingin kami hadirkan.",
  steps: [
    {
      number: "01",
      title: "Kenali Kebutuhan Laundry Kamu",
      description:
        "Mulai dengan mengetahui kebutuhan laundry yang ingin kamu selesaikan.",
    },
    {
      number: "02",
      title: "Proses yang Lebih Praktis",
      description:
        "Nikmati pengalaman layanan yang dirancang agar urusan laundry terasa lebih sederhana.",
    },
    {
      number: "03",
      title: "Kembali ke Aktivitas Kamu",
      description:
        "Lebih banyak waktu untuk pekerjaan, keluarga, hobi, dan hal-hal yang kamu suka.",
    },
  ],
};

export const brandValueContent = {
  headline: "Bukan Cuma Soal Pakaian Bersih.\nIni Soal Waktu Kamu.",
  bodyCopy:
    "Kami percaya hal sederhana seperti mengurus laundry seharusnya tidak mengambil terlalu banyak ruang dalam keseharian. OFFLOAD Laundry ingin membantu menciptakan pengalaman yang lebih praktis, agar kamu punya lebih banyak ruang untuk menjalani hidup.",
};

export const pricingContent = {
  headline: "Berlangganan",
  supportingCopy: "Pilih paket yang sesuai dengan kebutuhan Anda.",
  plans: [
    {
      id: "essential",
      name: "Essential",
      weight: "10 KG",
      price: "160.000",
      bonus: "Bonus 3 KG",
      bonusLabel: "Bulan pertama",
      features: [
        { icon: "🧥", label: "Cuci Setrika Wangi" },
        { icon: "🚚", label: "Pickup & Delivery 1x/minggu" },
        { icon: "⏰", label: "Pengerjaan 1 hari" },
      ],
    },
    {
      id: "standard",
      name: "Standard+",
      weight: "20 KG",
      price: "300.000",
      bonus: "Bonus 5 KG",
      bonusLabel: "Bulan pertama",
      isRecommended: true,
      features: [
        { icon: "🧥", label: "Cuci Setrika Wangi" },
        { icon: "🚚", label: "Pickup & Delivery 2x/minggu" },
        { icon: "⭐", label: "Prioritas pickup" },
        { icon: "⏰", label: "Pengerjaan 1 hari" },
      ],
    },
    {
      id: "ultimate",
      name: "Ultimate",
      weight: "30 KG",
      price: "420.000",
      bonus: "Bonus 7 KG",
      bonusLabel: "Bulan pertama",
      features: [
        { icon: "🧥", label: "Cuci Setrika Wangi" },
        { icon: "🚚", label: "Pickup & Delivery 2x/minggu" },
        { icon: "⭐", label: "Prioritas pickup" },
        { icon: "⏰", label: "Pengerjaan 1 hari" },
      ],
    },
  ],
};

export const earlyAccessContent = {
  headline: "Jadi yang Pertama Tahu.",
  supportingCopy:
    "OFFLOAD Laundry sedang dalam perjalanan menuju SCBD, Jakarta Selatan. Bergabunglah dalam daftar early access dan jadi salah satu orang pertama yang mendapatkan kabar saat kami siap meluncur.",
  buttonText: "Gabung Early Access",
};

export const footerContent = {
  wordmark: "OFFLOAD Laundry",
  description:
    "Pengalaman laundry yang lebih sederhana akan hadir di SCBD, Jakarta Selatan.",
  navLinks: [
    { label: "Beranda", target: "#beranda" },
    { label: "Kenapa OFFLOAD Laundry", target: "#kenapa" },
    { label: "Cara Kerja", target: "#cara-kerja" },
    { label: "FAQ", target: "#faq" },
  ],
  copyright: "© 2026 OFFLOAD Laundry. Hak Cipta Dilindungi.",
};
