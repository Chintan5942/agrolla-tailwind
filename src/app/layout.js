// app/layout.tsx or app/layout.js

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./HomePage/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Default metadata for SEO
export const metadata = {
  title: "Agrolla Impex – Premium Seeds Supplier in Gujarat | Saurashtra",
  description:
    "Agrolla Impex is a trusted seed production company based in Saurashtra, Gujarat. We supply high-quality seeds for agriculture across India.",
  keywords:
    "Agrolla Impex, Seeds, Agriculture, Saurashtra, Gujarat, Seed Supplier India, Organic Seeds, Farming Solutions, Agrolla",
  authors: [{ name: "Agrolla Impex" }],
  openGraph: {
    title: "Agrolla Impex – Seeds Supplier in Gujarat",
    description:
      "Top seed company from Saurashtra, Gujarat – Agrolla Impex offers high-quality agricultural seeds.",
    images: ["/agrolla-logo.png"],
    url: "https://www.agrollaimpex.com",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://www.agrollaimpex.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
