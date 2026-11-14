// content/faq.ts — Req 16.4: five FAQ items from project brief

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "Apa itu OFFLOAD Laundry?",
    answer:
      "OFFLOAD Laundry merupakan layanan laundry online yang akan segera hadir untuk membantu kamu dengan layanan yang praktis dan terpercaya. Stay tuned!",
  },
  {
    question: "Kapan bisa mulai book layanan?",
    answer:
      "Saat ini OFFLOAD Laundry masih dalam tahap pre-launch sehingga kamu belum bisa book. Daftar ke list Early Access untuk mendapatkan info terupdate selagi kami memepersiapkan layanan terbaik untukmu.",
  },
  {
    question: "Di mana saja area operasional OFFLOAD Laundry?",
    answer:
      "Kami akan beroperasi di daerah SCBD. Kami akan update area yang lebih spesifik menjelang launch.",
  },
  {
    question: "Bagaimana caranya mendapatkan info mengenai launching?",
    answer:
      "Isi form di atas agar kami bisa mengirimkanmu informasi terbaru. Let's keep in touch!",
  },
  {
    question: "Apakah ada biaya bergabung ke list early access?",
    answer:
      "Tidak ada sama sekali! Form ini digunakan untuk membagi informasi mengenai layanan saat launching nanti.",
  },
];
