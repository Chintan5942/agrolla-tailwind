"use client";
import { useEffect, useState, useCallback } from "react";

export default function HeroSection() {
  const [count, setCount] = useState(5);
  const [animateText, setAnimateText] = useState(false);

  const updateResponsiveSettings = useCallback(() => {
    const width = window.innerWidth;
    if (width >= 1024) {
      setCount(5);
    } else if (width >= 866) {
      setCount(3);
    } else if (width >= 768) {
      setCount(4);
    } else if (width >= 640) {
      setCount(3);
    } else if (width >= 480) {
      setCount(2);
    } else {
      setCount(1);
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

  return (
    <div className="relative w-full max-w-[1920px] min-h-[640px] lg:min-h-[840px] overflow-hidden hero">
      {/* Clouds */}
      <img
        src="/cloud.svg"
        alt="Cloud"
        loading="lazy"
        className="absolute left-[5%] top-0 lg:w-[300px] sm:w-[180px] cloud"
      />
      <img
        src="/cloud.svg"
        alt="Cloud center"
        loading="lazy"
        className="hidden md:block absolute top-[-50px] left-[45%] w-[300px] cloud"
      />
      <img
        src="/cloud.svg"
        alt="Cloud right"
        loading="lazy"
        className="hidden md:block absolute top-[-20px] left-3/4 w-[300px] cloud"
      />

      {/* Birds */}
      <img
        src="/birds.svg"
        alt="Birds"
        loading="lazy"
        className="absolute top-[60px] left-[65%] sm:top-[40px] sm:left-[55%] lg:w-[120px] sm:w-[80px] bird"
      />
      <img
        src="/birds.svg"
        alt="Flock"
        loading="lazy"
        className="hidden md:block absolute top-[60px] left-[25%] bird"
      />

      {/* Farmer + Groundnuts */}
      <div className="absolute lg:bottom-[80px] md:bottom-[85px] sm:bottom-[70px] lg:left-[12%] md:left-[12%] sm:left-[10%]">
        <div className="relative w-[600px] h-[300px] md:h-[250px] sm:h-[200px] xs:h-[180px]">
          {/* Farmer */}
          <img
            src="/farmer.svg"
            alt="Farmer"
            loading="lazy"
            className="relative z-0 object-contain w-auto h-full farmer"
          />

          {/* Groundnuts in front of Farmer */}
          <div className="absolute bottom-[0px] left-1/2 transform -translate-x-1/2 translate-y-[30%] flex items-end gap-2 sm:gap-1 z-30">
            {Array.from({ length: count }).map((_, i) => (
              <div
                key={i}
                className="groundNut w-[88px] md:w-[72px] sm:w-[60px] xs:w-[50px] h-[150px] md:h-[120px] sm:h-[100px] xs:h-[80px]"
              >
                <img
                  src="/ground-nut.png"
                  alt="Groundnut"
                  loading="lazy"
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Windmill */}
      <div className="absolute bottom-[48px] sm:bottom-[30px] left-[3%] h-[435px] md:h-[370px] sm:h-[280px] xs:h-[220px] w-auto">
        <img
          src="/Wingstand.svg"
          alt="Windmill stand"
          loading="lazy"
          className="w-auto h-full wingstand"
        />
      </div>
      <div className="absolute lg:bottom-[400px] sm:bottom-[400px] left-[8%] w-[110px] md:w-[90px] sm:w-[70px] xs:w-[60px]">
        <img
          src="/sidewing.svg"
          alt="Sidewing"
          loading="lazy"
          className="w-full h-auto sidewing"
          style={{ height: 'auto', maxHeight: '100%' }}
        />
      </div>
      <div className="absolute bottom-[450px] sm:bottom-[350px] left-[2.2%] h-[175px] md:h-[140px] sm:h-[100px] xs:h-[80px] w-auto">
        <img
          src="/wings.svg"
          alt="Wings"
          loading="lazy"
          className="w-auto h-full wing"
        />
      </div>

      {/* Factory */}
      <div className="absolute right-0 bottom-[15px] h-[640px] md:h-[500px] sm:h-[360px] xs:h-[300px] w-auto max-w-[50%] sm:max-w-[70%] xs:max-w-[90%]">
        <img
          src="/factory.svg"
          alt="Factory"
          loading="lazy"
          className="w-auto h-full factory"
        />
      </div>

      {/* Tractor */}
      <div className="hidden lg:block absolute bottom-[65px] right-[35%] h-[100px] w-auto">
        <img
          src="/tractor.svg"
          alt="Tractor"
          loading="lazy"
          className="w-auto h-full tractor"
        />
      </div>

      {/* Land */}
      <img
        src="/land.svg"
        alt="Land"
        loading="lazy"
        className="absolute bottom-0 inset-x-0 w-full h-[80px] sm:h-[100px] object-cover z-10 land"
      />

      {/* Text Content */}
      <div className="absolute top-[36%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[700px] text-center flex flex-col items-center">
        <div className="space-y-2 sm:space-y-3 md:space-y-4">
          <h1
            className={`text-[#111827] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[60px] font-bold transition-all duration-700 delay-[300ms] ${
              animateText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Revolutionizing
          </h1>
          <h1
            className={`text-[#2E7D32] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[60px] font-bold transition-all duration-700 delay-[600ms] ${
              animateText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Agriculture
          </h1>
        </div>
        <br />
        <p
          className={`text-sm sm:text-base md:text-lg leading-[28px] text-[#374151] transition-opacity duration-700 delay-[1200ms] words ${
            animateText ? "opacity-100" : "opacity-0"
          }`}
        >
          Agrolla delivers cutting-edge agricultural solutions that maximize
          yield, minimize environmental impact, and transform farming
          practices for a sustainable future.
        </p>
        <br />
        <div
          className={`grid sm:grid-cols-1 md:grid-cols-2 gap-4 mt-6 transition-opacity duration-700 delay-[1500ms] h-[52px] ${
            animateText ? "opacity-100" : "opacity-0"
          }`}
        >
          <button className="lg:h-[52px] lg:w-[200px] md:h-[40px] md:w-[200px] sm:h-[35px] sm:w-[160px]  h-[32px] w-[120px]  bg-[#2E7D32] text-white font-medium lg:text-[16px] md:text-[14px] sm:text-[14px] text-[12px] rounded-lg hover:cursor-pointer hover:bg-[#1b5e1fea]">
            Explore Services
          </button>
          <button className="lg:h-[52px]  lg:w-[193px] md:h-[40px] md:w-[180px] sm:h-[32px] sm:w-[160px] h-[32px] w-[120px] border border-[#2e7d32] text-[#2e7d32] bg-white lg:text-[16px] font-semibold sm:text-sm rounded-lg hover:cursor-pointer">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
