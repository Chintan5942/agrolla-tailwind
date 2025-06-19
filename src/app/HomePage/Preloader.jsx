"use client";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const minDelay = 2000;
    const handleLoad = () => {
      setTimeout(() => setShow(false), minDelay);
    };
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#E8F5E9]">
      {/* Logo */}
      <img
        src="/agrolla-logo.png"
        alt="Agrolla Logo"
        className="w-[80px] h-[50px] mb-6"
      />

      {/* Spinner */}
      <div className="w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin mb-4" />

      {/* Text */}
      <span className="text-xl font-semibold text-green-800 tracking-wide">
        Preparing Agrolla...
      </span>
    </div>
  );
}
