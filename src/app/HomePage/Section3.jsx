"use client";

export default function Section3() {
  return (
    <>
      <br />
      <br />
      <br />
      {/* Move background image and bg-fixed to the outermost div */}
      <div className="relative min-h-screen bg-[url('/section3-BG.png')] bg-no-repeat bg-cover bg-fixed">
        {/* Dark overlay */}
        <div className="absolute inset-2 bg-black/75 right-0 left-0 h-full"></div>

        {/* Main content without background image or bg-fixed */}
        <div className="flex justify-center max-w-full ">
          <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 md:flex-row animate-fadeIn">
            {/* Text Content */}
            <div className="">
              <div className="text-center text-white md:text-left lg:relative lg:left-5 md:relative md:left-5 w-[90%] relative left-[5%] animate-slideInLeft pt-4 md:pt-0">
                <br />
                <div className="flex justify-center lg:justify-start md:justify-start">
                  <div className="h-10 w-[260px] lg:w-[200px] md:w-[200px] sm:w-[200px] bg-white rounded-full flex items-center justify-center text-[16px] text-[#2e7d32] font-bold animate-bounce">
                    <img src="/leaf.svg" alt="leaf" className="h-5" />
                    100% ORGANIC
                  </div>
                </div>

                <p className="font-bold text-[32px] sm:text-[36px] md:text-[60px] text-[#2e7d32] pt-8">
                  Fresh From Farm
                </p>
                <p className="font-bold text-[32px] sm:text-[36px] md:text-[60px] text-white leading-tight">
                  Healthy Produce For Every Home
                </p>
                <p className="text-[14px] sm:text-[16px] md:text-[18px] text-gray-200 leading-[26px] sm:leading-[28px] pt-4">
                  Discover nature's finest organic produce, carefully
                  <br className="hidden md:block" />
                  cultivated and harvested to bring the freshest, most
                  <br className="hidden md:block" />
                  nutritious food directly from our farms to your table.
                </p>
                <br />
                <div className="flex flex-col items-center gap-4 mt-8 lg:justify-start sm:flex-row sm:justify-center md:justify-start">
                  <button className="h-[52px] w-[144px] bg-[#2e7d32] text-white rounded-md hover:bg-[#2e7d32d2] text-[16px] font-medium hover:cursor-pointer">
                    Shop Now
                  </button>
                  <button className="h-[52px] w-[157px] border-2 border-[#2e7d32] text-[#2e7d32] rounded-md bg-transparent hover:bg-[#2e7d3221] text-[16px] font-medium">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            {/* Image */}
            <div className="mt-10 md:mt-8 md:ml-[100px] animate-slideInRight">
              <img
                src="/farmer.png"
                alt="Farmer"
                className="h-[300px] sm:h-[400px] md:h-[620px] w-auto rounded-3xl mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
