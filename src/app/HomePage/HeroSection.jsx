"use client";
import { useEffect, useState } from "react";
import "@/app/HomePage/Homepage.css";

export default function HeroSection() {
  const [count, setCount] = useState(5);

  useEffect(() => {
    const updateCount = () => {
      const width = window.innerWidth;
      if (width >= 1250) {
        setCount(5);
      } else if (width >= 1024) {
        setCount(4);
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
    <div className="relative w-full max-w-[1920px] h-[840px] xsm:h-[750px] mmd:h-[800px] mlg: overflow-hidden hero ">
      {/* Cloud - always visible */}
      <img
        src="/cloud.svg"
        alt="cloud"
        className="absolute left-[5%] w-[60px] xsm:w-[80px] mmd:w-[120px] lg:w-[300px] cloud"
      />

      {/* Bird - always visible */}
      <img
        src="/birds.svg"
        alt="bird"
        className="absolute top-[60px] left-[65%]  xsm:w-[60px] mmd:w-[80px] bird"
      />

      {/* Extra clouds and birds - lg+ */}
      <img
        src="/cloud.svg"
        alt=""
        className="hidden lg:block mlg:border-2 mlg:border-red-500 absolute top-[-50px] left-[45%] w-[200px] lg:w-[300px] cloud"
      />
      <img
        src="/cloud.svg"
        alt=""
        className="hidden lg:block absolute top-[-20px] left-3/4 w-[200px] lg:w-[300px] cloud"
      />
      <img
        src="/birds.svg"
        alt=""
        className="hidden lg:block absolute top-[60px] left-[25%] bird"
      />

      {/* Farmer */}
      <img
        src="/farmer.svg"
        alt="farmer"
        className="absolute left-[10%] top-[90%] h-[120px] xsm:top-[10%] xsm:h-[140px] mmd:top-[65%] mmd:left-[8%] mmd:h-[190px] lg:top-[60%] lg:left-[13%] lg:h-[300px] farmer"
      />

      {/* Windmill */}
      <img
        src="/Wingstand.svg"
        alt="windmill base"
        className="absolute top-100 left-[3%] h-[140px] xsm:h-[180px] mmd:h-[260px] lg:h-[435px]"
      />
      <img
        src="/sidewing.svg"
        alt="sidewing"
        className="absolute top-85 left-1/11 w-[40px] xsm:w-[55px] mmd:w-[75px] lg:w-[110px] sideWing"
      />
      <img
        src="/wings.svg"
        alt="wings"
        className="absolute top-68 left-1/56 h-[80px] xsm:h-[100px] mmd:h-[140px] lg:h-[175px] wing"
      />

      {/* Groundnuts */}
      {positions.slice(0, count).map((left, i) => (
        <img
          key={i}
          src="/ground-nut.png"
          alt="groundnut"
          style={{ left: `${left * 4}px` }}
          className="groundNut absolute top-172 z-30 w-20 h-[50px] xsm:h-[70px] mmd:h-[100px] mmd:top-[83%] lg:h-[150px]"
        />
      ))}

      {/* Factory */}
      <img
        src="/factory.svg"
        alt="factory"
        className="absolute right-0 top-57 h-160 factory"
      />

      {/* Tractor - lg only */}
      <img
        src="/tractor.svg"
        alt="tractor"
        className="hidden lg:block absolute top-177 right-[35%] h-[100px] tractor"
      />

      {/* Land */}
      <img
        src="/land.svg"
        alt="land"
        className="absolute bottom-[-25px] w-full  xsm:h-[80px] mmd:h-[90px]"
      />

      {/* Text + Buttons */}
      <div className="absolute top-1/5 xsm:top-[150px]  left-1/2 transform -translate-x-1/2 w-[40%] mmd:w-[604px] text-center">
        <p className="text-lg xsm:text-2xl mmd:text-4xl lg:text-6xl text-[#111827] font-semibold tracking-wide">
          Revolutionizing
        </p>
        <p className="text-lg xsm:text-2xl mmd:text-4xl lg:text-6xl text-[#2E7D32] font-semibold tracking-wide">
          Agriculture
        </p>{" "}
        <br />
        <p className="text-lg text-center xsm:text-base mmd:text-lg text-[#374151]  max-w-[515px] ">
          Agrolla delivers cutting-edge agricultural solutions that maximize
          yield, minimize environmental impact, and transform farming practices
          for a sustainable future.
        </p>{" "}
        <br />
        <div className="flex items-center justify-center gap-4 xsm:flex-row">
          <button className="h-[44px] w-50 xsm:w-[193px] bg-[#2E7D32] text-white text-sm rounded-lg">
            Explore Services
          </button>
          <button className="h-[44px] w-50 xsm:w-[193px] border border-[#2e7d32] text-[#2e7d32] bg-white text-sm rounded-lg">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}