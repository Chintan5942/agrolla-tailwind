"use client";

import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <br />
      <br />
      <br />
      <footer
        className="bg-[url('/footer.png')] bg-cover bg-center bg-no-repeat overflow-hidden lg:h-[600px] flex justify-center items-center"
        data-aos="fade-up"
      >
        <div className="flex flex-col max-w-screen-2xl">
          {" "}
          <br />
          <div className="grid w-full grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4">
            {/* Company Info */}
            <div
              className="flex flex-col items-center gap-6 text-center"
              data-aos="fade-right"
            >
              <Link href="/">
                <img
                  src="/footer-logo.png"
                  alt="Agrolla Logo"
                  className="h-auto mx-auto w-36 sm:mx-0"
                />
              </Link>
              <p className="leading-6 text-gray-300">
                Transforming agriculture through innovation and sustainable
                solutions for a better tomorrow.
              </p>

              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <img
                    src="/location.svg"
                    alt="Location"
                    className="w-10 h-10 mt-1"
                  />
                  <span className="text-gray-300">
                    BM Square-1, Rajlaxmi Park, Junagadh
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="/call.svg" alt="Phone" className="w-10 h-10" />
                  <a
                    href="tel:+919876543210"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    +91 98765 43210
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <img src="/mail.svg" alt="Email" className="w-10 h-10" />
                  <a
                    href="mailto:info@agrolla.in"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    info@agrollaimpex.com
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div
              className="flex flex-col items-center gap-6 text-center"
              data-aos="fade-up"
            >
              <h3 className="text-xl font-bold text-gray-300 lg:text-2xl">
                Quick Links
              </h3>
              <ul className="flex flex-col gap-3">
                {[
                  { name: "Home", path: "/" },
                  { name: "About Us", path: "/About" },
                  { name: "Services", path: "#" },
                  { name: "Products", path: "/Product" },
                  { name: "Contact", path: "/Contact" },
                ].map((item) => (
                  <li key={item.name} className="flex items-start gap-2 group">
                    <span className="font-bold text-white transition-transform group-hover:translate-x-1">
                      ›
                    </span>
                    <Link
                      href={item.path}
                      className="text-gray-300 transition-colors hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Services */}
            <div
              className="flex flex-col items-center gap-6 text-center"
              data-aos="fade-up"
            >
              <h3 className="text-xl font-bold text-gray-300 lg:text-2xl">
                Our Services
              </h3>
              <ul className="flex flex-col gap-3">
                {[
                  {
                    name: "Precision Farming",
                    path: "/services#precision-farming",
                  },
                  {
                    name: "Irrigation Solutions",
                    path: "/services#irrigation",
                  },
                  { name: "Organic Farming", path: "/services#organic" },
                  {
                    name: "Crop Protection",
                    path: "/services#crop-protection",
                  },
                  {
                    name: "Farm Management",
                    path: "/services#farm-management",
                  },
                ].map((service) => (
                  <li
                    key={service.name}
                    className="flex items-start gap-2 group"
                  >
                    <span className="font-bold text-white">✔</span>
                    <Link
                      href={service.path}
                      className="text-gray-300 transition-colors hover:text-white"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Working Hours & Social */}
            <div
              className="flex flex-col items-center gap-8 text-center"
              data-aos="fade-left"
            >
              <div className="flex flex-col gap-6">
                <h3 className="text-xl font-bold text-gray-300 lg:text-2xl">
                  Working Hours
                </h3>
                <ul className="flex flex-col gap-3 text-gray-300">
                  <li className="flex justify-between gap-2">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between gap-2">
                    <span>Saturday:</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between gap-2">
                    <span>Sunday:</span>
                    <span className="text-green-500">Closed</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-6">
                <h3 className="text-xl font-bold text-gray-300 lg:text-2xl">
                  Follow Us
                </h3>
                <div className="flex justify-center gap-4 sm:justify-start">
                  {[
                    {
                      platform: "facebook",
                      url: "https://facebook.com/agrolla",
                    },
                    { platform: "x", url: "https://twitter.com/agrolla" },
                    {
                      platform: "instagram",
                      url: "https://www.instagram.com/agrolla_impex?igsh=dmhqc3RjM2hzands&utm_source=qr",
                    },
                    {
                      platform: "linkedin",
                      url: "https://www.linkedin.com/company/agrolla-impex/",
                    },
                  ].map((social) => (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 transition-transform hover:scale-105 hover:opacity-80"
                    >
                      <img
                        src={`/${social.platform}.png`}
                        alt={social.platform}
                        className="w-full h-full"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <br />
          {/* Bottom Footer Bar */}
          <div className="w-full border-t border-gray-600" data-aos="fade-up">
            <br />
            <br />
            <div className="flex flex-col items-center gap-4 text-sm text-gray-300 md:flex-row md:justify-between md:items-center">
              <p className="text-center md:text-left">
                © 2025 Agrolla. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-4 md:justify-end">
                <Link
                  href="/privacy-policy"
                  className="transition-colors hover:text-white hover:underline"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-of-service"
                  className="transition-colors hover:text-white hover:underline"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/sitemap"
                  className="transition-colors hover:text-white hover:underline"
                >
                  Sitemap
                </Link>
              </div>
            </div>
          </div>{" "}
          <br />
        </div>
      </footer>
    </>
  );
}
