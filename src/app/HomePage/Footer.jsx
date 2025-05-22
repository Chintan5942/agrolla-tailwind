"use client";

export default function Footer() {
  return (
    <>
    <br /><br /><br />
      <footer className="bg-gradient-to-b from-black/20 to-black/20 bg-[url('/footer.png')] bg-cover bg-center bg-no-repeat font-poppins w-full">
        <div className="mx-auto max-w-[1536px] text-gray-300 flex flex-col lg:flex-row gap-y-12 gap-x-16 items-start">
          {/* Column 1 */}
          <div className="flex-1 min-w-[260px] flex flex-col gap-4">
            <img
              src="/footer-logo.png"
              alt="Agrolla Logo"
              className="w-auto h-auto"
            />
            <p className="text-base font-normal leading-6">
              Transforming agriculture through <br />
              innovation and sustainable solutions for a <br />
              better tomorrow.
            </p>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3">
                <img src="/location.svg" alt="Location" className="mt-1" />
                <span className="text-base font-normal">
                  BM Square-1, Rajlaxmi Park, Junagadh
                </span>
              </li>
              <li className="flex items-start gap-3">
                <img src="/call.svg" alt="Phone" className="mt-1" />
                <span className="text-base font-normal">+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3">
                <img src="/mail.svg" alt="Email" className="mt-1" />
                <span className="text-base font-normal">info@agrolla.in</span>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="flex-1 min-w-[260px] flex flex-col gap-4">
            <h3 className="text-2xl font-extrabold">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {["Home", "About Us", "Services", "Products", "Contact"].map(
                (item) => (
                  <li key={item} className="relative pl-6">
                    <span className="absolute left-0 font-bold">&gt;</span>
                    <a
                      href="#"
                      className="text-base font-normal hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Column 3 */}
          <div className="flex-1 min-w-[260px] flex flex-col gap-4">
            <h3 className="text-2xl font-extrabold">Our Services</h3>
            <ul className="flex flex-col gap-3">
              {[
                "Precision Farming",
                "Irrigation Solutions",
                "Organic Farming",
                "Crop Protection",
                "Farm Management",
              ].map((service) => (
                <li key={service} className="relative pl-6">
                  <span className="absolute left-0 font-bold">✓</span>
                  <span className="text-base font-medium">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div className="flex-1 min-w-[260px] flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl font-extrabold">Working Hours</h3>
              <ul className="flex flex-col gap-2">
                <li className="flex flex-wrap">
                  <span className="w-full sm:w-[120px]">Monday - Friday:</span>
                  <span className="sm:pl-4">9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex flex-wrap">
                  <span className="w-full sm:w-[120px]">Saturday:</span>
                  <span className="sm:pl-4">9:00 AM - 4:00 PM</span>
                </li>
                <li className="flex flex-wrap">
                  <span className="w-full sm:w-[120px]">Sunday:</span>
                  <span className="sm:pl-4 text-green-500">Closed</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-extrabold">Follow Us</h3>
              <div className="flex gap-4 flex-wrap">
                {["facebook", "x", "instagram", "linkedin"].map((platform) => (
                  <img
                    key={platform}
                    src={`/${platform}.png`}
                    alt={platform}
                    className="w-10 h-10 object-contain hover:opacity-80 transition-opacity"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mx-auto max-w-[1536px] border-t border-white/20 flex flex-col sm:flex-row justify-between items-center gap-4 mt-12 py-6">
          <p className="text-sm">© 2025 Agrolla. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm">
            <a href="#" className="hover:underline">
              Privacy-Policy
            </a>
            <a href="#" className="hover:underline">
              Terms-of-Service
            </a>
            <a href="#" className="hover:underline">
              Sitemap
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
