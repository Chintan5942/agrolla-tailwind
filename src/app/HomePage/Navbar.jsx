"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname.toLowerCase() === path.toLowerCase();

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("aos").then((AOS) => {
        AOS.init({ once: true, duration: 800 });
      });
    }
  }, []);

  return (
    <div className="">
          <nav className="w-[95%] h-[72px] px-4 md:px-8 flex items-center justify-between lg:justify-around bg-[#ffffff] top-0 sticky z-40" data-aos="fade-down">
      {/* Logo */}
      <a href="/" className="flex items-center" data-aos="fade-right">
        <img src="/agrolla-logo.png" alt="Agrolla Logo" className="w-[85.71px] h-[60px]" />
      </a>
      <div className="hidden md:flex gap-8 text-[#4E4E4E] text-base font-semibold" data-aos="fade-up">
        <a href="/" className={`hover:underline hover:underline-offset-[5px] hover:text-[#2E7D32] ${isActive("/") ? "text-[#2E7D32]" : ""}`}>Home</a>
        <a href="/Product" className={`hover:underline hover:underline-offset-[5px] hover:text-[#2E7D32] ${isActive("/Product") ? "text-[#2E7D32]" : ""}`}>Products</a>
        <a href="/About" className={`hover:underline hover:underline-offset-[5px] hover:text-[#2E7D32] ${isActive("/About") ? "text-[#2E7D32]" : ""}`}>About Us</a>
        <a href="/Contact" className={`hover:underline hover:underline-offset-[5px] hover:text-[#2E7D32] ${isActive("/Contact") ? "text-[#2E7D32]" : ""}`}>Contact</a>
      </div>

      <div className="hidden md:block" data-aos="fade-left">
        <button className="h-[40px] w-[130px] bg-[#2E7D32] rounded-lg text-white text-base font-semibold">Get Quote</button>
      </div>

      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} data-aos="zoom-in">
        {isOpen ? <X size={32} /> : <Menu size={28} />}
      </button>

{/* Mobile  */}
      {isOpen && (
        <div className="absolute top-[72px] left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 z-50 text-[#4E4E4E] text-base font-semibold" data-aos="fade-down">
          <a href="/" className={isActive("/") ? "text-[#2E7D32]" : ""} onClick={() => setIsOpen(false)}>Home</a>
          <a href="/Product" className={isActive("/Product") ? "text-[#2E7D32]" : ""} onClick={() => setIsOpen(false)}>Products</a>
          <a href="/About" className={isActive("/About") ? "text-[#2E7D32]" : ""} onClick={() => setIsOpen(false)}>About Us</a>
          <a href="/Contact" className={isActive("/Contact") ? "text-[#2E7D32]" : ""} onClick={() => setIsOpen(false)}>Contact</a>
            <button className="h-[40px] w-[130px] bg-[#2E7D32] rounded-lg text-white font-semibold" onClick={() => setIsOpen(false)}>
            Get Quote
          </button>
        </div>
      )}
    </nav>
    </div>
  );
}
