"use client";
export default function ImageGallery() {
  return (
    <>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="flex flex-col items-center text-center">
          <div className="flex gap-2 items-center w-full max-w-[350px]">
            <hr className="flex-grow border-[0.2px] border-green-800" />
            <h2 className="text-green-800 font-bold text-sm tracking-widest whitespace-nowrap">
              OUR GALLERY
            </h2>
            <hr className="flex-grow border-[0.2px] border-green-800" />
          </div> <br />
          <h1 className="pt-5 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Capturing Agricultural
            <span className="text-green-800">Excellence</span>
          </h1> <br />
          <h5 className="text-gray-600 font-normal mt-5 max-w-xl text-sm sm:text-base md:text-lg">
            Experience the beauty and innovation of modern agriculture through our
            lens. Each image tells a story of dedication, technology, and
            sustainable farming practices.
          </h5>
        </div>
        {/* Gallery 1 */}
        <div className="flex flex-col lg:flex-row justify-between gap-6 mt-16 max-w-[1488px] lg:relative lg:left-[216px]">
          {/* Left big image */}
          <div className="w-full lg:w-1/3 overflow-hidden rounded-xl">
            <img
              src="/gal1.png"
              alt=""
              className="w-full h-[300px] sm:h-[450px] md:h-[600px] object-contain sm:object-cover transition-transform duration-500 hover:scale-105 rounded-xl"
            />
          </div>

          {/* Middle stacked images */}
          <div className="flex flex-col gap-12 w-full lg:w-1/3">
            <div className="overflow-hidden rounded-xl">
              <img
                src="/gal2.png"
                alt=""
                className="w-full h-[130px] sm:h-[200px] md:h-[270px] object-contain sm:object-cover transition-transform duration-500 hover:scale-105 rounded-xl"
              />
            </div>
            <div className="overflow-hidden rounded-xl">
              <img
                src="/gal3.png"
                alt=""
                className="w-full h-[130px] sm:h-[200px] md:h-[270px] object-contain sm:object-cover transition-transform duration-500 hover:scale-105 rounded-xl"
              />
            </div>
          </div>

          {/* Right big image */}
          <div className="w-full lg:w-1/3 overflow-hidden rounded-xl">
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
        <div className="flex flex-wrap justify-between gap-6 max-w-[1488px] lg:relative lg:left-[216px]">
          {["gal5.png", "gal6.png", "gal7.png", "gal8.png"].map((img, i) => (
            <div key={i} className="w-[45%] sm:w-[22%] overflow-hidden rounded-xl">
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
