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
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Main content without background image or bg-fixed */}
        <div className="flex justify-center w-full px-4">
          <div className="relative z-10 flex flex-col items-center justify-center min-h-screen lg:flex-row animate-fadeIn max-w-7xl w-full">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <div className="text-center text-white lg:text-left animate-slideInLeft pt-8 lg:pt-0 max-w-lg">
                <br className="lg:hidden" />

                {/* 100% Organic Badge */}
                <div className="flex justify-center lg:justify-start mb-6">
                  <div className="h-10 w-[200px] sm:w-[220px] bg-white rounded-full flex items-center justify-center text-[14px] sm:text-[16px] text-[#2e7d32] font-bold animate-bounce">
                    <img src="/leaf.svg" alt="leaf" className="h-4 w-4 mr-2" />
                    100% ORGANIC
                  </div>
                </div>

                {/* Main Heading */}
                <h1 className="font-bold text-[28px] sm:text-[36px] lg:text-[48px] xl:text-[60px] text-[#2e7d32] leading-tight">
                  Fresh From Farm
                </h1>
                <h2 className="font-bold text-[28px] sm:text-[36px] lg:text-[48px] xl:text-[60px] text-white leading-tight mb-4">
                  Healthy Produce For Every Home
                </h2>

                {/* Description */}
                <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-gray-200 leading-[24px] sm:leading-[28px] mb-8 max-w-md mx-auto lg:mx-0">
                  Discover nature's finest organic produce, carefully cultivated
                  and harvested to bring the freshest, most nutritious food
                  directly from our farms to your table.
                </p>

                {/* Buttons - Single Row */}
                <div className="flex flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
                  <button
                    className="h-[44px] w-[120px] sm:h-[52px] sm:w-[144px] bg-[#2e7d32] text-white rounded-md hover:bg-[#2e7d32d2] text-[14px] sm:text-[16px] font-medium hover:cursor-pointer transition-colors"
                    onClick={() => (window.location.href = "/Product")}
                  >
                    See Products
                  </button>
                  <button
                    className="h-[44px] w-[120px] sm:h-[52px] sm:w-[140px] border-2 border-[#fff] text-[#fff] rounded-md bg-transparent hover:bg-[#2e7d3221] text-[14px] sm:text-[16px] font-medium transition-colors"
                    onClick={() => (window.location.href = "/About")}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            {/* Image Section - Increased width with minimal side spacing */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0 animate-slideInRight px-[2%] sm:px-[3%] lg:px-[5%]">
              <div className="relative w-full max-w-none">
                <img
                  src="/farmer.jpg"
                  alt="Farmer"
                  className="w-full h-[280px] sm:h-[350px] md:h-[420px] lg:h-[480px] xl:h-[580px] rounded-3xl object-cover shadow-2xl"
                />
                {/* Optional: Add a subtle overlay for better text contrast if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
