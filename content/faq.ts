// content/faq.ts — Req 16.4: five FAQ items from project brief

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "Apa itu OFFLOAD Laundry?",
    answer:
      "OFFLOAD Laundry adalah layanan laundry online yang sedang dipersiapkan untuk membantu urusan laundry terasa lebih praktis.",
  },
  {
    question: "Apakah OFFLOAD Laundry sudah bisa digunakan?",
    answer:
      "Belum. Saat ini OFFLOAD Laundry masih dalam tahap pre-launch dan belum menerima pesanan. Kami sedang mempersiapkan layanan sebelum resmi hadir.",
  },
  {
    question: "Di mana OFFLOAD Laundry akan tersedia?",
    answer:
      "OFFLOAD Laundry sedang dipersiapkan untuk area SCBD, Jakarta Selatan. Informasi cakupan layanan lebih detail akan diumumkan menjelang peluncuran.",
  },
  {
    question: "Bagaimana cara mendapatkan informasi peluncurannya?",
    answer:
      "Isi form early access dengan nama lengkap dan Instagram username kamu. Kami akan mengabari saat ada informasi terbaru.",
  },
  {
    question: "Apakah ada biaya untuk bergabung dalam early access?",
    answer:
      "Tidak. Mengisi form early access hanya untuk menyatakan ketertarikan dan mendapatkan informasi peluncuran.",
  },
];
