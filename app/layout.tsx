import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OffLoad Laundry — Laundry Beres, Waktu Lebih Bebas.",
  description: "OffLoad Laundry hadir di SCBD, Jakarta Selatan. Daftar early access untuk jadi yang pertama tahu.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className="antialiased bg-background text-text overflow-x-hidden">{children}</body>
    </html>
  );
}
