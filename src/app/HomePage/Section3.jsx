"use client";

export default function Section3() {
  return (
    <>
      <br />
      <br />
      <br />
      <div className="relative">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/80 z-0"></div>

        {/* Main content */}
        <div className="relative z-10 h-[750px] bg-[url('/section3-BG.png')] bg-cover bg-top-right bg-no-repeat bg-fixed flex flex-col md:flex-row justify-center items-center">
          {/* Text Content */}
          <div className="md:w-[670px] mt-6 sm:mt-10 md:mt-[70px] md:pl-4 text-center md:text-left text-white">
            <div className="h-10 w-[198px] mx-auto md:mx-0 bg-white rounded-full flex items-center justify-center text-[16px] text-[#2e7d32] font-bold mt-8">
              <img src="/leaf.svg" alt="leaf" className="h-5 mr-2" />
              100% ORGANIC
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
            </p>{" "}
            <br />
            <div className="flex flex-col sm:flex-row items-center justify-start gap-4 mt-8">
              <button className="h-[52px] w-[144px] bg-[#2e7d32] text-white rounded-md hover:bg-[#2e7d32d2] text-[16px] font-medium">
                Shop Now
              </button>
              <button className="h-[52px] w-[157px] border-2 border-[#2e7d32] text-[#2e7d32] rounded-md bg-transparent hover:bg-[#2e7d3221] text-[16px] font-medium">
                Learn More
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="mt-10 md:mt-8 md:ml-[100px]">
            <img
              src="/farmer.png"
              alt="Farmer"
              className="h-[300px] sm:h-[400px] md:h-[620px] w-auto rounded-3xl mx-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
}
