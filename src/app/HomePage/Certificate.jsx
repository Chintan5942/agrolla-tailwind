"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Section5() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <br /><br />
      <div className="w-full lg:relative lg:top-25 overflow-hidden h-[600px] " data-aos="fade-up">
        <div className="flex flex-col items-center px-4 space-y-6">
          {/* Section Title */}
          <div className="flex items-center justify-center gap-2" data-aos="fade-down">
            <hr className="flex-1 w-12 border-t border-green-700" />
            <h2 className="text-xs font-bold tracking-wide text-green-700 sm:text-sm md:text-base whitespace-nowrap">
              OUR CERTIFICATION
            </h2> 
            <hr className="flex-1 w-12 border-t border-green-700" />
          </div>
          <br />
          <h1 className="text-2xl font-bold text-center text-gray-900 sm:text-3xl md:text-4xl" data-aos="fade-up" data-aos-delay="200">
            Quality <span className="text-green-700">Certifications</span> & Standards
          </h1>
          <br />
          <h5 className="max-w-2xl text-sm font-medium leading-relaxed text-center text-gray-600 " data-aos="fade-up" data-aos-delay="400">
            Our commitment to excellence is backed by international certifications and quality
            standards, ensuring the highest level of product quality and safety.
          </h5>
          <br /><br />
          {/* Certification Images in Single Row */}
          <div className="flex flex-wrap w-full gap-6 justify-evenly">
            <img 
              src="/cer1.png" 
              alt="Certification 1" 
              className="object-contain w-40 transition-all duration-500 border-2 border-transparent h-22 hover:scale-115 hover:cursor-pointer hover:border-gray-300"
              data-aos="zoom-in" data-aos-delay="100"
            />
            <img 
              src="/cer2.png" 
              alt="Certification 2" 
              className="object-contain w-40 transition-all duration-500 border-2 border-transparent h-22 hover:scale-115 hover:cursor-pointer hover:border-gray-300"
              data-aos="zoom-in" data-aos-delay="200"
            />
            <img 
              src="/cer3.png" 
              alt="Certification 3" 
              className="object-contain w-40 transition-all duration-500 border-2 border-transparent h-22 hover:scale-115 hover:cursor-pointer hover:border-gray-300"
              data-aos="zoom-in" data-aos-delay="300"
            />
            <img 
              src="/cer4.png" 
              alt="Certification 4" 
              className="object-contain w-40 transition-all duration-500 border-2 border-transparent h-22 hover:scale-115 hover:cursor-pointer hover:border-gray-300"
              data-aos="zoom-in" data-aos-delay="400"
            />
            <img 
              src="/cer5.png" 
              alt="Certification 5" 
              className="object-contain w-40 transition-all duration-500 border-2 border-transparent h-22 hover:scale-115 hover:cursor-pointer hover:border-gray-300"
              data-aos="zoom-in" data-aos-delay="500"
            />
          </div>
        </div>
      </div>
    </>
  );
}