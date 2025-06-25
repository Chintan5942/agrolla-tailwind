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
        className="bg-[url('/footer.png')] bg-cover bg-center bg-no-repeat bg-fixed overflow-hidden min-h-[600px] flex justify-center items-center"
        data-aos="fade-up"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-12">
            {/* Company Info - Takes half width on mobile, half on tablet, quarter on desktop */}
            <div
              className="flex flex-col items-center text-center md:items-start md:text-left xl:col-span-1 col-span-2 md:col-span-1"
              data-aos="fade-right"
            >
              <Link href="/" className="mb-4">
                <img
                  src="/agrolla-logo.png"
                  alt="Agrolla Logo"
                  className="h-auto w-28 lg:w-36"
                />
              </Link>
              <p className="text-gray-300 leading-6 mb-4 max-w-sm text-sm">
                Transforming agriculture through innovation and sustainable
                solutions for a better tomorrow.
              </p>

              <div className="space-y-2 w-full max-w-sm">
                <div className="flex items-start gap-2">
                  <img
                    src="/location.svg"
                    alt="Location"
                    className="w-4 h-4 mt-1 flex-shrink-0"
                  />
                  <span className="text-xs text-gray-300">
                    BM Square-1, Rajlaxmi Park, Junagadh
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="/call.svg"
                    alt="Phone"
                    className="w-4 h-4 flex-shrink-0"
                  />
                  <a
                    href="tel:+919876543210"
                    className="text-xs text-gray-300 transition-colors hover:text-white"
                  >
                    +91 98765 43210
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="/mail.svg"
                    alt="Email"
                    className="w-4 h-4 flex-shrink-0"
                  />
                  <a
                    href="mailto:info@agrollaimpex.com"
                    className="text-xs text-gray-300 transition-colors hover:text-white"
                  >
                    info@agrollaimpex.com
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links - Takes half width on mobile */}
            <div
              className="flex flex-col items-center text-center md:items-start md:text-left"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  { name: "Home", path: "/" },
                  { name: "About Us", path: "/About" },
                  { name: "Services", path: "#" },
                  { name: "Products", path: "/Product" },
                  { name: "Contact", path: "/Contact" },
                ].map((item) => (
                  <li key={item.name} className="group">
                    <Link
                      href={item.path}
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 group-hover:translate-x-1 text-sm"
                    >
                      <span className="text-green-500 font-bold text-xs">
                        ›
                      </span>
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Services - Takes half width on mobile */}
            <div
              className="flex flex-col items-center text-center md:items-start md:text-left"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="text-lg font-bold text-white mb-4">
                Our Services
              </h3>
              <ul className="space-y-2">
                {[
                  "Precision Farming",
                  "Irrigation Solutions",
                  "Organic Farming",
                  "Crop Protection",
                  "Farm Management",
                ].map((service) => (
                  <li key={service} className="group">
                    <Link
                      href="#"
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 group-hover:translate-x-1 text-sm"
                    >
                      <span className="text-green-500 font-bold text-xs">
                        ✓
                      </span>
                      <span>{service}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Working Hours & Social - Takes half width on mobile */}
            <div
              className="flex flex-col items-center text-center md:items-start md:text-left"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              {/* Working Hours */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-4">
                  Working Hours
                </h3>
                <div className="space-y-1 text-xs text-gray-300">
                  <div className="flex flex-col gap-1">
                    <span className="font-medium">Mon - Fri:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-medium">Saturday:</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-medium">Sunday:</span>
                    <span className="text-green-500 font-medium">Closed</span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Follow Us</h3>
                <div className="flex justify-center md:justify-start gap-3">
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
                      className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-green-600 hover:scale-110"
                    >
                      <img
                        src={`/${social.platform}.png`}
                        alt={social.platform}
                        className="w-5 h-5"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer Bar */}
          <div
            className="border-t border-gray-600 mt-8 pt-6"
            data-aos="fade-up"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <p className="text-xs text-gray-300 text-center md:text-left">
                © 2025 Agrolla. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center md:justify-end gap-4">
                <Link
                  href="/privacy-policy"
                  className="text-xs text-gray-300 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-of-service"
                  className="text-xs text-gray-300 hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/sitemap"
                  className="text-xs text-gray-300 hover:text-white transition-colors"
                >
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
