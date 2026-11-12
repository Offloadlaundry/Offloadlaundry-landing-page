import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OffLoad Laundry — Laundry Beres, Waktu Lebih Bebas.",
  description: "OffLoad Laundry hadir di SCBD, Jakarta Selatan. Daftar early access untuk jadi yang pertama tahu.",
  icons: {
    icon: [
      { url: "/favicon-512.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon-256.png", sizes: "256x256", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-128.png", sizes: "128x128", type: "image/png" },
      { url: "/favicon-64.png", sizes: "64x64", type: "image/png" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
    apple: "/favicon-192.png",
  },
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
