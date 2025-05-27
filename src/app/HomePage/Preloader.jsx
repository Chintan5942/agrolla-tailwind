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
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white">
      <img
        src="/agrolla-logo.png"
        alt="Agrolla Logo"
        className="w-16 h-16 animate-bounce"
      />
      <span className="text-2xl font-bold text-[#2E7D32] tracking-wide">Loading...</span>
    </div>
  );
}
