"use client";

import { useState, useEffect } from "react";

export default function Section4() {
  const [yearsExp, setYearsExp] = useState(0);
  const [happyFarmers, setHappyFarmers] = useState(0);
  const [teamMembers, setTeamMembers] = useState(0);
  const [statesCovered, setStatesCovered] = useState(0);

  const targetValues = {
    years: 10,
    farmers: 1000,
    members: 10,
    states: 10,
  };

  const duration = 2000;

  useEffect(() => {
    let startTime = null;
    let hasAnimated = false;

    const animateCounters = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsedTime = timestamp - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      setYearsExp(Math.floor(progress * targetValues.years));
      setHappyFarmers(Math.floor(progress * targetValues.farmers));
      setTeamMembers(Math.floor(progress * targetValues.members));
      setStatesCovered(Math.floor(progress * targetValues.states));

      if (progress < 1) {
        requestAnimationFrame(animateCounters);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          requestAnimationFrame(animateCounters);
          hasAnimated = true;
        }
      },
      { threshold: 0.1 }
    );

    const countersSection = document.querySelector(".counter-number");
    if (countersSection) {
      observer.observe(countersSection);
    }

    return () => {
      if (countersSection) {
        observer.unobserve(countersSection);
      }
    };
  }, []);

  const counterData = [
    { value: yearsExp, label: "Years Experience" },
    { value: happyFarmers, label: "Happy Farmers" },
    { value: teamMembers, label: "Team Members" },
    { value: statesCovered, label: "States Covered" },
  ];

  return (
    <>
   
      <div className="flex justify-center max-w-full px-4 overflow-x-hidden mt-10">
        <div
          className="flex flex-col lg:flex-row items-center justify-center gap-8 max-w-[1536px] sm:gap-x-8 md:gap-x-10"
          data-aos="fade-up"
        >
          {/* Video Section */}
          <div className="w-full lg:w-[720px] lg:h-[536px] rounded-lg overflow-hidden">
            <video
              src="/video/DJI_0071.mp4"
              alt="About Agrolla"
              className="w-full h-full object-cover"
              data-aos="zoom-in-right"
              autoPlay
              muted
              loop
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Text + Counters Section */}
          <div className="lg:w-[680px] w-full flex flex-col gap-4 sm:w-[700px]">
            <div className="w-full relative left-[5%]" data-aos="fade-left">
              <br />
              <div className="flex items-center justify-center">
                <hr className="w-10 border border-[#2E7D32]" />
                <p className="text-xs sm:text-sm md:text-base text-[#2E7D32] font-bold uppercase tracking-wider">
                  &nbsp;Featured Products&nbsp;
                </p>
                <hr className="w-10 border border-[#2E7D32]" />
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-[#111827] leading-snug text-center">
                <span className="text-3xl text-green-700">Agrolla Impex</span>:
                Nurturing Quality, Cultivating Trust
              </h1>
              <h5 className="flex flex-wrap text-xs leading-relaxed text-center text-gray-700 sm:text-sm md:text-base lg:text-md">
                Agrolla Impex is a distinguished One Star Export House and a
                leading manufacturer and exporter of peanuts, oilseeds, grains,
                and pulses. Headquartered in Gujarat, India, we take immense
                pride in our fully integrated operations, ensuring uncompromised
                quality, consistency, and reliability in every shipment.
              </h5>
              <br />
              {/* Counters */}
              <div className="flex flex-wrap justify-between text-center gap-y-6">
                {counterData.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center w-1/2 sm:w-1/3 md:w-1/4"
                    data-aos="flip-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="text-xl font-bold text-green-700 sm:text-2xl md:text-3xl lg:text-4xl counter-number">
                      {item.value}+
                    </div>
                    <div className="text-xs font-semibold text-center text-gray-700 sm:text-sm md:text-base lg:text-md">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
              <br />
              {/* Buttons */}
              <div className="flex justify-center gap-4 flex-wrap">
                {/* Contact Us Button */}
                <button
                  className="bg-green-700 h-[48px] w-[154px] hover:bg-green-700/80 text-xs sm:text-sm md:text-base text-white font-medium rounded"
                  data-aos="fade-up"
                  onClick={() => (window.location.href = "/Contact")}
                >
                  Contact Us
                </button>

                {/* YouTube Button */}
                <button
                  className="bg-red-600 h-[48px] w-[154px] hover:bg-red-600/80 text-xs sm:text-sm md:text-base text-white font-medium rounded"
                  data-aos="fade-up"
                  onClick={() =>
                    window.open(
                      "https://youtu.be/g9Lzn_JhGDQ?si=fh9XeZ4nX-Jj9N54",
                      "_blank"
                    )
                  }
                >
                  Watch on YouTube
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
