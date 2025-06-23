import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./HomePage/Navbar";
import GoogleTranslate from "../app/GoogleTranslate";
import Footer from "./HomePage/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Agrolla Impex ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Google Translate Widget */}
        {/* <GoogleTranslate /> */}

        {/* Navbar always on top */}
        <Navbar />

        {/* Main page content */}
        {children}
        <Footer/>
      </body>
    </html>
  );
}
