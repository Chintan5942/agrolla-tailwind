"use client";
export default function ImageGallery() {
  return (
    <>
      <div className="w-full px-4 overflow-hidden sm:px-6 lg:px-8" data-aos="fade-up">
        {/* Title Section */}
        <div className="flex flex-col items-center text-center" data-aos="fade-down">
          <div className="flex gap-2 items-center w-full max-w-[350px]">
            <hr className="flex-grow border-[0.2px] border-green-800" />
            <h2 className="text-sm font-bold tracking-widest text-green-800 whitespace-nowrap">
              OUR GALLERY
            </h2>
            <hr className="flex-grow border-[0.2px] border-green-800" />
          </div> <br />
          <h1 className="pt-5 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
            Capturing Agricultural
            <span className="text-green-800">Excellence</span>
          </h1> <br />
          <h5 className="max-w-xl mt-5 text-sm font-normal text-gray-600 sm:text-base md:text-lg">
            Experience the beauty and innovation of modern agriculture through our
            lens. Each image tells a story of dedication, technology, and
            sustainable farming practices.
          </h5>
        </div>
        {/* Gallery 1 */}
        <div className="flex flex-col lg:flex-row justify-between gap-6 mt-16 max-w-[1488px] lg:relative lg:left-[216px]" data-aos="fade-up" data-aos-delay="200">
          {/* Left big image */}
          <div className="w-full overflow-hidden lg:w-1/3 rounded-xl" data-aos="zoom-in-right">
            <img
              src="/gal1.png"
              alt=""
              className="w-full h-[300px] sm:h-[450px] md:h-[600px] object-contain sm:object-cover transition-transform duration-500 hover:scale-105 rounded-xl"
            />
          </div>

          {/* Middle stacked images */}
          <div className="flex flex-col w-full gap-12 lg:w-1/3">
            <div className="overflow-hidden rounded-xl" data-aos="zoom-in">
              <img
                src="/gal2.png"
                alt=""
                className="w-full h-[130px] sm:h-[200px] md:h-[270px] object-contain sm:object-cover transition-transform duration-500 hover:scale-105 rounded-xl"
              />
            </div>
            <div className="overflow-hidden rounded-xl" data-aos="zoom-in">
              <img
                src="/gal3.png"
                alt=""
                className="w-full h-[130px] sm:h-[200px] md:h-[270px] object-contain sm:object-cover transition-transform duration-500 hover:scale-105 rounded-xl"
              />
            </div>
          </div>

          {/* Right big image */}
          <div className="w-full overflow-hidden lg:w-1/3 rounded-xl" data-aos="zoom-in-left">
            <img
              src="/gal4.png"
              alt=""
              className="w-full h-[300px] sm:h-[450px] md:h-[600px] object-contain sm:object-cover transition-transform duration-500 hover:scale-105 rounded-xl"
            />
          </div>
        </div>
    <br />
        <hr className="my-12 border-2 border-gray-300 max-w-[1488px] mx-auto lg:relative lg:left-[216px]" />
<br />
        {/* Gallery 2 */}
        <div className="flex flex-wrap justify-between gap-6 max-w-[1488px] lg:relative lg:left-[216px]" data-aos="fade-up" data-aos-delay="400">
          {["gal5.png", "gal6.png", "gal7.png", "gal8.png"].map((img, i) => (
            <div key={i} className="w-[45%] sm:w-[22%] overflow-hidden rounded-xl" data-aos="flip-left" data-aos-delay={i * 100}>
              <img
                src={`/${img}`}
                alt=""
                className="w-full h-[150px] sm:h-[250px] md:h-[354px] object-contain sm:object-cover transition-transform duration-500 hover:scale-105 rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
