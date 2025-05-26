"use client";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [count, setCount] = useState(5);

  useEffect(() => {
    const updateCount = () => {
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
    };
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  const positions = [110, 128, 146, 164, 182];

  useEffect(() => {
    const groundNuts = document.querySelectorAll(".groundNut");
    groundNuts.forEach((img, i) => {
      img.style.animation = "growUp 2s ease-in-out forwards";
      img.style.animationDelay = `${i * 0.3}s`;
    });
  }, [count]);

  return (
    <div className="relative w-full max-w-[1920px] mx-auto min-h-[925px] overflow-hidden">
      {/* Clouds */}
      <img
        src="/cloud.svg"
        alt="cloud"
        className="absolute left-[5%] w-[300px] sm:w-[180px] cloud"
      />
      <img
        src="/cloud.svg"
        alt="cloud"
        className="hidden lg:block absolute top-[-50px] left-[45%] w-[300px] cloud"
      />
      <img
        src="/cloud.svg"
        alt="cloud"
        className="hidden lg:block absolute top-[-20px] left-3/4 w-[300px] cloud"
      />

      {/* Birds */}
      <img
        src="/birds.svg"
        alt="bird"
        className="absolute top-[60px] left-[65%] sm:top-[40px] sm:left-[55%] w-[120px] sm:w-[80px] bird"
      />
      <img
        src="/birds.svg"
        alt="bird"
        className="hidden lg:block absolute top-[60px] left-[25%] bird"
      />

      {/* Farmer */}
      <img
        src="/farmer.svg"
        alt="farmer"
        className="absolute left-[15%] top-[65%] h-[300px] md:h-[250px] sm:h-[200px] farmer"
      />

      {/* Windmill */}
      <img
        src="/Wingstand.svg"
        alt="windmill base"
        className="absolute top-[480px] left-[3%] h-[435px] md:h-[370px] sm:h-[300px] windmill"
      />
      <img
        src="/sidewing.svg"
        alt="sidewing"
        className="absolute top-[435px] left-[8%] w-[110px] md:w-[90px] sm:w-[70px] sideWing"
      />
      <img
        src="/wings.svg"
        alt="wings"
        className="absolute top-[375px] left-[2.2%] h-[175px] md:h-[140px] sm:h-[100px] wing"
      />

      {/* Groundnuts */}
      {positions.slice(0, count).map((left, i) => (
        <img
          key={i}
          src="/ground-nut.png"
          alt="groundnut"
          style={{ left: `${left * 4}px` }}
          className="groundNut absolute top-[755px] z-30 w-[88px] h-[150px] md:w-[72px] md:h-[120px] sm:w-[60px] sm:h-[100px]"
        />
      ))}

      {/* Factory */}
      <img
        src="/factory.svg"
        alt="factory"
        className="absolute right-0 top-[400px] h-[640px] md:h-[500px] sm:h-[400px] factory"
      />

      {/* Tractor */}
      <img
        src="/tractor.svg"
        alt="tractor"
        className="hidden lg:block absolute top-[755px] right-[35%] h-[100px] tractor"
      />

      {/* Land */}
      <img
        src="/land.svg"
        alt="land"
        className="absolute w-full bottom-[20px] md:bottom-[0px] land"
      />

      {/* Text and Buttons */}
      <div className="absolute top-[20%] sm:top-[150px] left-1/2 transform -translate-x-1/2 w-[40%] sm:w-[85%] text-center">
        <p className="text-lg sm:text-2xl md:text-4xl lg:text-6xl text-[#111827] font-semibold tracking-wide">
          Revolutionizing
        </p>
        <p className="text-lg sm:text-2xl md:text-4xl lg:text-6xl text-[#2E7D32] font-semibold tracking-wide">
          Agriculture
        </p>
        <br />
        <p className="text-sm sm:text-base md:text-lg text-[#374151] text-center w-full sm:w-[100%] mx-auto">
          Agrolla delivers cutting-edge agricultural solutions that maximize <br /> yield,
          minimize environmental impact, and transform farming <br /> practices for a
          sustainable future. 
        </p>
        <br />
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="h-[44px] w-[193px] bg-[#2E7D32] text-white text-sm rounded-lg">
            Explore Services
          </button>
          <button className="h-[44px] w-[193px] border border-[#2e7d32] text-[#2e7d32] bg-white text-sm rounded-lg">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
