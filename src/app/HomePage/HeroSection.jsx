"use client";
import { useEffect, useState, useCallback } from "react";

export default function HeroSection() {
  const [count, setCount] = useState(5);
  const [animateText, setAnimateText] = useState(false);

  const updateResponsiveSettings = useCallback(() => {
    const width = window.innerWidth;
    if (width >= 1250) {
      setCount(5);
    } else if (width >= 1024) {
      setCount(4);
    } else if (width >= 768) {
      setCount(3);
    } else {
      setCount(2);
    }
  }, []);

  useEffect(() => {
    updateResponsiveSettings();
    window.addEventListener("resize", updateResponsiveSettings);
    return () => window.removeEventListener("resize", updateResponsiveSettings);
  }, [updateResponsiveSettings]);

  useEffect(() => {
    const groundNuts = document.querySelectorAll(".groundNut");
    groundNuts.forEach((img, i) => {
      img.style.animation = "growUp 2s ease-in-out forwards";
      img.style.animationDelay = `${i * 0.3}s`;
    });
  }, [count]);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimateText(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const positions = [110, 128, 146, 164, 182];

  return (
    <div className="relative w-full max-w-[1920px] mx-auto h-[840px] overflow-hidden">
      {/* Clouds */}
      <img
        src="/cloud.svg"
        alt="Fluffy cloud"
        loading="lazy"
        className="absolute left-[5%] top-0 lg:w-[300px] sm:w-[180px]"
      />
      <img
        src="/cloud.svg"
        alt="Cloud drifting above center"
        loading="lazy"
        className="hidden md:block absolute top-[-50px] left-[45%] w-[300px]"
      />
      <img
        src="/cloud.svg"
        alt="Cloud in top right sky"
        loading="lazy"
        className="hidden md:block absolute top-[-20px] left-3/4 w-[300px]"
      />

      {/* Birds */}
      <img
        src="/birds.svg"
        alt="Flying birds"
        loading="lazy"
        className="absolute top-[60px] left-[65%] sm:top-[40px] sm:left-[55%] w-[120px] sm:w-[80px]"
      />
      <img
        src="/birds.svg"
        alt="Flock of birds"
        loading="lazy"
        className="hidden md:block absolute top-[60px] left-[25%]"
      />

      {/* Farmer */}
      <img
        src="/farmer.svg"
        alt="Smiling farmer in field"
        loading="lazy"
        className="absolute left-[15%] top-[62%] h-[300px] md:h-[250px] sm:h-[200px]"
      />

      {/* Windmill */}
      <img
        src="/Wingstand.svg"
        alt="Windmill stand"
        loading="lazy"
        className="absolute bottom-[48px] left-[3%] lg:h-[435px] md:h-[370px] sm:h-[300px]"
      />
      <img
        src="/sidewing.svg"
        alt="Windmill sidewing"
        loading="lazy"
        className="absolute bottom-[500px] left-[9.3%] lg:w-[110px] md:w-[90px] sm:w-[70px]"
      />
      <img
        src="/wings.svg"
        alt="Rotating windmill blades"
        loading="lazy"
        className="absolute bottom-[435px] left-[2%] lg:h-[175px] md:h-[140px] sm:h-[100px] wing"
      />

      {/* Groundnuts */}
      {positions.slice(0, count).map((left, i) => (
        <img
          key={i}
          src="/ground-nut.png"
          alt="Groundnut plant"
          loading="lazy"
          style={{ left: `${left * 4}px` }}
          className="groundNut absolute bottom-[35px] z-30 w-[88px] h-[150px] md:w-[72px] md:h-[120px] sm:w-[60px] sm:h-[100px]"
        />
      ))}

      {/* Factory */}
      <img
        src="/factory.svg"
        alt="Modern agriculture factory"
        loading="lazy"
        className="absolute right-0 bottom-[15px] h-[640px] md:h-[500px] sm:h-[400px]"
      />

      {/* Tractor */}
      <img
        src="/tractor.svg"
        alt="Tractor on farmland"
        loading="lazy"
        className="hidden lg:block absolute bottom-[55px] right-[35%] h-[100px]"
      />

      {/* Land */}
      <img
        src="/land.svg"
        alt="Agricultural land"
        loading="lazy"
        className="absolute w-full bottom-0"
      />

      {/* Centered Text Box with Animation */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[700px] text-center flex flex-col items-center">
        <div className="space-y-2 sm:space-y-3 md:space-y-4">
          <h1
            className={`text-[#111827] sm:text-3xl md:text-3xl lg:text-[60px] font-bold transition-all duration-700 delay-[300ms] ${
              animateText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Revolutionizing
          </h1>
          <h1
            className={`text-[#2E7D32] sm:text-3xl md:text-3xl lg:text-[60px] font-bold transition-all duration-700 delay-[600ms] ${
              animateText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Agriculture
          </h1>
        </div>
        <br />
        <p
          className={`text-sm sm:text-base md:text-lg leading-[28px] text-[#374151] transition-opacity duration-700 delay-[1200ms] ${
            animateText ? "opacity-100" : "opacity-0"
          }`}
        >
          Agrolla delivers cutting-edge agricultural solutions that maximize
          <br />
          yield, minimize environmental impact, and transform farming
          <br />
          practices for a sustainable future.
        </p>
        <br />
        <div
          className={`grid sm:grid-cols-1 md:grid-cols-2 gap-4 mt-6 transition-opacity duration-700 delay-[1500ms] ${
            animateText ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            className="h-[40px] sm:h-[38px] w-[160px] sm:w-[140px] bg-[#2E7D32] text-white text-xs sm:text-sm rounded-lg"
            aria-label="Explore our services"
          >
            Explore Services
          </button>
          <button
            className="h-[40px] sm:h-[38px] w-[160px] sm:w-[140px] border border-[#2e7d32] text-[#2e7d32] bg-white text-xs sm:text-sm rounded-lg"
            aria-label="Contact us for more info"
          >
            Contact Us
          </button> 
        </div>
      </div>
    </div>
  );
}
