"use client";
import { useEffect, useState } from "react";
import "@/app/HomePage/Homepage.css";

export default function HeroSection() {
  const [count, setCount] = useState(5);

  useEffect(() => {
    const updateCount = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setCount(5);
      } else {
        setCount(3);
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
      img.style.animation = "growUp 1s ease-out forwards";
      img.style.animationDelay = `${i * 0.3}s`;
    });
  }, [count]);

  return (
    <div className="relative w-full max-w-[1920px] h-[800px] md:h-[700px] lg:h-[838px] sm:h-[800px] overflow-hidden border-2 border-blue-700 hero">

      {/* Cloud - always visible */}
      <img src="/cloud.svg" alt="cloud" className="absolute top-[20px] left-[10%] w-[80px] sm:w-[100px] md:w-[150px] lg:w-[300px] cloud" />

      {/* Bird - always visible */}
      <img src="/birds.svg" alt="bird" className="absolute top-[80px] left-[70%] w-[60px] sm:w-[80px] md:w-[90px] bird" />

      {/* Extra clouds and birds - lg only */}
      <img src="/cloud.svg" alt="" className="hidden lg:block absolute top-[-50px] left-[45%] w-[300px]" />
      <img src="/cloud.svg" alt="" className="hidden lg:block absolute top-[-20px] left-3/4 w-[300px]" />
      <img src="/birds.svg" alt="" className="hidden lg:block absolute top-[180px] left-[10%]" />

      {/* Farmer */}
      <img
        src="/farmer.svg"
        alt="farmer"
        className="absolute h-[140px] left-[10%] top-[90%] sm:top-[5%] sm:h-[150px] md:top-[64%] md:left-[125px] md:h-[225px] lg:top-[60%] lg:left-[13%] lg:h-[300px]"
      />

      {/* Windmill base */}
      <img
        src="/Wingstand.svg"
        alt="windmill base"
        className="absolute top-[42%] left-[3%] h-[200px] sm:h-[250px] md:top-[53%] md:left-[4%] md:h-[290px] lg:h-[435px]"
      />
      <img
        src="/sidewing.svg"
        alt="sidewing"
        className="absolute top-[325px] left-[9%] w-[60px] sm:w-[80px] md:left-[14%] md:top-[50%] md:w-[70px] lg:w-[110px] lg:left-[10%] lg:top-[48%]"
      />
      <img
        src="/wings.svg"
        alt="wings"
        className="absolute top-[250px] left-[1.8%] h-[100px] sm:h-[140px] md:h-[125px] md:top-[41.5%] lg:h-[175px] lg:top-[39%] lg:left-[2.8%] wing"
      />

      {/* Groundnuts */}
      {positions.slice(0, count).map((left, i) => (
        <img
          key={i}
          src="/ground-nut.png"
          alt="groundnut"
          style={{ left: `${left * 4}px` }}
          className="groundNut absolute z-30 w-[80px] h-[70px] sm:h-[90px] md:h-[120px] md:top-[82%] lg:h-[150px]"
        />
      ))}

      {/* Factory - only md+ */}
      <img
        src="/factory.svg"
        alt="factory"
        className="hidden md:block absolute top-[45%] right-0 h-[400px] lg:h-[700px] lg:top-[20%]"
      />

      {/* Tractor - visible only on lg */}
      <img
        src="/tractor.svg"
        alt="tractor"
        className="hidden lg:block absolute top-[700px] right-[33%] h-[100px] tractor"
      />

      {/* Land */}
      <img src="/land.svg" alt="land" className="absolute bottom-[-25px] w-full h-[80px] sm:h-[90px]" />

      {/* Text and Buttons */}
      <div className="absolute top-[80px] sm:top-[150px] left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[604px] text-center">
        <p className="text-2xl sm:text-5xl lg:text-6xl text-[#111827] font-semibold tracking-wide">Revolutionizing</p>
        <p className="text-2xl sm:text-5xl lg:text-6xl text-[#2E7D32] font-semibold tracking-wide mt-2">Agriculture</p>
        <p className="text-xs sm:text-base lg:text-lg text-[#374151] mt-4 mx-auto max-w-[515px]">
          Agrolla delivers cutting-edge agricultural solutions that maximize yield, minimize environmental impact, and transform farming practices for a sustainable future.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
          <button className="h-[44px] w-full sm:w-[193px] bg-[#2E7D32] text-white text-sm rounded-lg">Explore Services</button>
          <button className="h-[44px] w-full sm:w-[193px] border border-[#2e7d32] text-[#2e7d32] bg-white text-sm rounded-lg">Contact Us</button>
        </div>
      </div>
    </div>
  );
}
