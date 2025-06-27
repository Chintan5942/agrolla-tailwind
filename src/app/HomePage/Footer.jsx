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
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-12">
            {/* Company Info */}
            <div
              className="flex flex-col items-center text-center sm:items-start sm:text-left"
              data-aos="fade-right"
            >
              <Link href="/" className="mb-4">
                <img
                  src="/White.png"
                  alt="Agrolla Logo"
                  className="h-auto w-28 lg:w-36"
                />
              </Link>
              <p className="text-gray-300 leading-6 mb-4 max-w-sm text-[14px]">
                Transforming agriculture through innovation and sustainable
                solutions for a better tomorrow.
              </p>
              <div className="space-y-2 w-full max-w-sm">
                {/* Office Address */}
                <div className="flex items-start gap-2">
                  <img
                    src="/location.svg"
                    alt="Location"
                    className="w-8 h-8 mt-1 flex-shrink-0"
                  />
                  <span className="text-[14px] text-gray-300">
                    Regd. Office : At Office No: 306 B.M. Square 1, RAJLAXMI
                    PARK, JUNAGADH, GUJARAT362001, INDIA
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <img
                    src="/location.svg"
                    alt="Location"
                    className="w-8 h-8 mt-1 flex-shrink-0"
                  />
                  <span className="text-[14px] text-gray-300">
                    Factory: AT-SURVEY NO.113/P1/P1/P2, RAJKOT-JUNAGADH HIGHWAY
                    VILLAGE-BHIYAL, TA/DI: JUNGADH, GUJARAT-362310,INDIA
                  </span>
                </div>
                {/* Phone Numbers */}
                <div className="flex items-center gap-2">
                  <img
                    src="/call.svg"
                    alt="Phone"
                    className="w-8 h-8 flex-shrink-0"
                  />
                  <div className="text-[14px] text-gray-300">
                    <div>+91 7227021300</div>
                    <div>+91 7227021301</div>
                    <div>+91 7227021302</div>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-center gap-2">
                  <img
                    src="/mail.svg"
                    alt="Email"
                    className="w-8 h-8 flex-shrink-0"
                  />
                  <a
                    href="mailto:info@agrollaimpex.com"
                    className="text-[14px] text-gray-300 transition-colors hover:text-white"
                  >
                    info@agrollaimpex.com
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div
              className="flex flex-col items-center text-center sm:items-start sm:text-left"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 className="text-lg font-bold text-white mb-4 text-[14px]">
                Quick Links
              </h3>
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
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 group-hover:translate-x-1 text-[14px]"
                    >
                      <span className="text-green-500 font-bold text-[14px]">
                        ›
                      </span>
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Services */}
            <div
              className="flex flex-col items-center text-center sm:items-start sm:text-left"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="text-lg font-bold text-white mb-4 text-[14px]">
                Our Services
              </h3>
              <ul className="space-y-2">
                {[
                  "High-Quality Seed Production",

                  "Seed Treatment Solutions",

                  "Custom Seed Blends & Varieties",

                  "Sustainable Farming Practices",

                  "Crop Yield Enhancement",
                ].map((service) => (
                  <li key={service} className="group">
                    <Link
                      href="#"
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 group-hover:translate-x-1 text-[14px]"
                    >
                      <span className="text-green-500 font-bold text-[14px]">
                        ✓
                      </span>
                      <span>{service}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Working Hours & Social */}
            <div
              className="flex flex-col items-center text-center sm:items-start sm:text-left"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              {/* Working Hours */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-4 text-[14px]">
                  Working Hours
                </h3>
                <div className="space-y-1 text-[14px] text-gray-300">
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
                <h3 className="text-lg font-bold text-white mb-4 text-[14px] text-center sm:text-left">
                  Follow Us
                </h3>
                <div className="flex justify-center sm:justify-start gap-3 flex-wrap">
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
                      className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-green-600 hover:scale-110"
                    >
                      <img
                        src={`/${social.platform}.png`}
                        alt={social.platform}
                        className="w-8 h-8"
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
              <p className="text-[14px] text-gray-300 text-center md:text-left">
                © 2025 Agrolla. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center md:justify-end gap-4">
                <Link
                  href="/privacy-policy"
                  className="text-[14px] text-gray-300 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-of-service"
                  className="text-[14px] text-gray-300 hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/sitemap"
                  className="text-[14px] text-gray-300 hover:text-white transition-colors"
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
