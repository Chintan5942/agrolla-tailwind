"use client";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Slider() {
  const swiperRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const swiperEl = swiperRef.current;
    if (!swiperEl) return;

    const handleMouseEnter = () => {
      swiperEl.swiper.autoplay.stop();
    };
    const handleMouseLeave = () => {
      swiperEl.swiper.autoplay.start();
    };

    swiperEl.addEventListener("mouseenter", handleMouseEnter);
    swiperEl.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      swiperEl.removeEventListener("mouseenter", handleMouseEnter);
      swiperEl.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const testimonials = [
    {
      text: `Implementing Agrolla's precision farming solutions has increased my crop yield by 40% while reducing water usage by 30%. Their team provided exceptional support throughout the entire process.`,
    },
    {
      text: `The smart irrigation system from Agrolla has revolutionized our water management. We've seen significant improvements in crop quality and substantial water savings. Highly recommended!`,
    },
    {
      text: `Switching to Agrolla's organic farming solutions has been a game-changer for our farm. We've reduced chemical inputs while maintaining high yields, and our products now command premium prices in the market.`,
    },
  ];

  return (
    <>
      <br />
      <br />
      <div className="bg-white max-w-[1920px] overflow-hidden">
        <div>
          <div className="text-center" data-aos="fade-down">
            <center>
              <br />
              <br />
              <h1 className="text-3xl font-semibold text-gray-900 md:text-4xl">
                What Our <span className="text-green-700">Clients</span> Say
              </h1>
              <p className="text-sm font-medium leading-relaxed text-center text-gray-600 ">
                Hear from farmers who have transformed their agricultural
                practices with our solutions.
              </p>
            </center>
          </div>
          <br />
          <div className="flex items-center justify-center">
            <div className="w-full max-w-[1536px]" data-aos="fade-up">
              <Swiper
                ref={swiperRef}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 1, spaceBetween: 20 },
                  768: { slidesPerView: 2, spaceBetween: 30 },
                  1024: { slidesPerView: 3, spaceBetween: 40 },
                }}
                pagination={{
                  clickable: true,
                  el: ".swiper-pagination",
                  type: "bullets",
                }}
                autoplay={{ delay: 900, disableOnInteraction: false }}
                modules={[Pagination, Autoplay]}
                className="h-[350px]"
              >
                {testimonials.concat(testimonials).map((item, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="bg-white rounded-xl shadow-xl p-6 transition-all duration-300 hover:shadow-2xl h-[275px] w-full max-w-[450px] mx-auto flex flex-col lg:relative lg:top-10"
                      data-aos="zoom-in-up"
                    >
                      <br />
                      <div className="flex space-x-1 w-80 relative left-[25px]">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <br />
                      <p className="text-sm text-gray-700 mb-6 flex-grow italic w-80 relative left-[25px]">
                        "{item.text}"
                      </p>
                      <br />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="swiper-pagination !relative !bottom-0 mt-8"></div>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
    </>
  );
}
