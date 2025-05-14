"use client";
import '@/app/HomePage/HeroSection.css'
import { useEffect } from 'react';

export default function HeroSection() {

  useEffect(() => {
    const groundNuts = document.querySelectorAll('.groundNut');
    groundNuts.forEach((img, i) => {
      img.style.animation = 'growUp 1s ease-out forwards';
      img.style.animationDelay = `${i * 0.3}s`;
    });
  }, []); 
  return (
    <>
    <div className="h-210 w-[1920px(fixed)] z-20:">
        <img src="/cloud.svg" alt="" className="absolute top-[41px] left-1/6 cloud" />
        <img src="/cloud.svg" alt="" className="absolute top-[2px] left-[45%] cloud" />
        <img src="/cloud.svg" alt="" className="absolute top-[65px] left-3/4 cloud" />
        <img src="/birds.svg" alt="" className="absolute top-[180px] left-1/10 bird" />
        <img src="/birds.svg" alt="" className="absolute top-[100px] left-[68%] bird" />
        <img src="/sidewing.svg" alt="" className="w-[115px] absolute top-[370px] left-[11.2%] " />
        <img src="/wings.svg" alt="" className="h-[185px] absolute top-[290px] left-[3.5%] wing" />
        <img src="/Wingstand.svg" alt="" className="h-[420px] absolute top-103 left-[5%]" />
        <img src="/factory.svg" alt="" className="h-[700px] absolute left-296.5 top-56"/>
        <img src="/tractor.svg" alt="" className="h-[100px] absolute left-266 top-188"/>
        <img src="/farmer.svg" alt="" className="h-[277px] absolute left-70 top-141"/>
        <img src="/ground-nut.png" alt="" className="h-[150px] absolute left-110 top-179 z-30 groundNut"/>
        <img src="/ground-nut.png" alt="" className="h-[150px] absolute left-128 top-179 z-30 groundNut"/>
        <img src="/ground-nut.png" alt="" className="h-[150px] absolute left-146 top-179 z-30 groundNut"/>
        <img src="/ground-nut.png" alt="" className="h-[150px] absolute left-164 top-179 z-30 groundNut"/>
        <img src="/ground-nut.png" alt="" className="h-[150px] absolute left-182 top-179 z-30 groundNut"/>
        <img src="/land.svg" alt="" className="h-[88.5px]  absolute top-[823px]" />
        <div className="h-[376px] w-[604px]  absolute left-[650px] top-[211px]">
            <p className="text-6xl text-[#111827] font-semibold tracking-[5px] text-center">Revolutionizing</p> <br />
            <p className="text-6xl text-[#2E7D32] font-semibold tracking-[5px] text-center">Agriculture</p>
            <p className=" w-[515px] text-lg text-center  relative top-6 left-10">Agrolla delivers cutting-edge agricultural solutions that maximize yield, minimize environmental impact, and transform farming practices for a sustainable future.</p>
            <div className="flex justify-center  relative top-16">
                <button className='h-[52px] w-[193px] text-stone-50 font-xl rounded-lg bg-[#2E7D32] text-lg'>Explore Services</button>
                <button className='h-[52px] w-[193px] text-[#2e7d32] border-2 border-[#2e7d32]-200 font-xl rounded-lg bg-[#FFFFFF] relative left-[16px] text-lg'>Contact Us</button>
            </div>
        </div>
    </div>
    </>
  );
}