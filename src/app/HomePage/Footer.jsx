"use client";

export default function Footer() {
  return (
    <footer className="relative bg-[url('/footer.png')] bg-cover bg-center bg-no-repeat overflow-hidden">
      <br /><br /><br /><br /><br />
      <div className="relative flex flex-col gap-10 w-full max-w-screen-2xl h-full lg:relative lg:left-50">
        <div className="grid gap-5 sm:grid-cols-6 lg:grid-cols-4 w-full">

          {/* Company Info */}
          <div className="flex flex-col gap-6">
            <img src="/footer-logo.png" alt="Agrolla Logo" className="w-36 h-auto" />
            <p className="text-gray-300 leading-6">
              Transforming agriculture through innovation and sustainable solutions for a better tomorrow.
            </p>

            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <img src="/location.svg" alt="Location" className="mt-1 h-10 w-10" />
                <span className="text-gray-300">BM Square-1, Rajlaxmi Park, Junagadh</span>
              </div>
              <div className="flex items-center gap-3">
                <img src="/call.svg" alt="Phone" className="h-10 w-10" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <img src="/mail.svg" alt="Email" className="h-10 w-10" />
                <span className="text-gray-300">info@agrolla.in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-bold text-gray-300 lg:text-2xl">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {['Home', 'About Us', 'Services', 'Products', 'Contact'].map((item) => (
                <li key={item} className="group flex items-start gap-2">
                  <span className="font-bold transition-transform group-hover:translate-x-1 text-white">›</span>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-bold text-gray-300 lg:text-2xl">Our Services</h3>
            <ul className="flex flex-col gap-3">
              {['Precision Farming', 'Irrigation Solutions', 'Organic Farming', 'Crop Protection', 'Farm Management'].map((service) => (
                <li key={service} className="group flex items-start gap-2">
                  <span className="font-bold text-white">✔</span>
                  <span className="text-gray-300 group-hover:text-white transition-colors">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Working Hours & Social */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <h3 className="text-xl font-bold text-gray-300 lg:text-2xl">Working Hours</h3>
              <ul className="flex flex-col gap-3">
                <li className="flex justify-between text-gray-300">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between text-gray-300">
                  <span>Saturday:</span>
                  <span>9:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between text-gray-300">
                  <span>Sunday:</span>
                  <span className="text-green-500">Closed</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="text-xl font-bold text-gray-300 lg:text-2xl">Follow Us</h3>
              <div className="flex gap-4">
                {['facebook', 'x', 'instagram', 'linkedin'].map((platform) => (
                  <a key={platform} href="#" className="h-8 w-8 transition-transform hover:scale-105 hover:opacity-80">
                    <img src={`/${platform}.png`} alt={platform} className="h-full w-full" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */} 
        <div className="border-t border-gray-600">
          <br /><br />
          <div className="flex flex-col gap-4 text-sm text-gray-300 md:flex-row md:justify-between">
            <p className="text-center md:text-left">© 2025 Agrolla. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4 md:justify-end">
              <a href="#" className="hover:text-white hover:underline transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white hover:underline transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white hover:underline transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
      <br /><br /><br /><br /><br />
    </footer>
  );
} 