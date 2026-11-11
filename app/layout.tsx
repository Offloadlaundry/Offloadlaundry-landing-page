import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OffLoad Laundry — Laundry Beres, Waktu Lebih Bebas.",
  description:
    "OffLoad Laundry — pengalaman laundry yang lebih sederhana akan hadir di SCBD, Jakarta Selatan. Daftar early access untuk jadi yang pertama tahu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">{children}</body>
    </html>
  );
}
