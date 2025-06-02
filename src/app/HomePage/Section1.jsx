"use client";
import Image from "next/image";

export default function Section1() {
  return (
    <>
      <section className="w-full h-[1450px] lg:h-[850px] bg-white bg-[url('/section1-BG.png')] bg-cover bg-center bg-no-repeat bg-fixed overflow-hidden md:h-255">
        {/* Header Text */}
        <div className="relative text-center top-20">
          <div className="flex items-center justify-center ">
            <hr className="w-12 border border-[#2E7D32]" />
            <p className="text-sm text-[#2E7D32] font-medium uppercase">
              Trusted Quality, Global Reach
            </p>
            <hr className="w-12 border border-[#2E7D32]" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] ">
            Why Choose <span className="text-[#2E7D32]">Agrolla Impex</span>?
          </h2>

          <p className="text-sm sm:text-base text-[#4B5563] mx-auto">
            Agrolla Impex is a distinguished One Star Export House and a leading
            manufacturer <br /> and exporter of peanuts, oilseeds, grains, and
            pulses.
          </p>
        </div>

        {/* Features Section */}
        <div className="flex justify-center max-w-full">
          <div className="relative grid items-center grid-cols-1 gap-10 px-4 lg:grid-cols-3 top-60 max-w-[1536px]">
            {/* Left Features */}
            <div className="flex flex-col items-center gap-10 text-center sm:items-start lg:items-end sm:text-left lg:text-right">
              {/* Customer Centric */}
              <div className="flex flex-col sm:flex-row items-center gap-4 max-w-xs sm:max-w-200 lg:relative lg:top-[-100px] left-5 ">
                <Image
                  src="/centric.svg"
                  alt="Customer Centric"
                  width={50}
                  height={50}
                  className="lg:hidden"
                />
                <div>
                  <h3 className="text-xl font-semibold text-[#111827]">
                    Customer Centric Approach
                  </h3>
                  <p className="text-base font-semibold text-[#4B5563]">
                    {" "}
                    <br />
                    Tailored Solutions, transparency, <br /> and exceptional
                    service to meet <br /> your specific requirements.
                  </p>
                </div>
              </div>

              {/* Certified Quality */}
              <div className="flex flex-col sm:flex-row items-center gap-4 max-w-xs sm:max-w-none lg:relative lg:top-[50px] left-5 ">
                <Image
                  src="/certified.svg"
                  alt="Certified Quality"
                  width={50}
                  height={50}
                  className="lg:hidden"
                />
                <div>
                  <h3 className="text-xl font-semibold text-[#111827]">
                    Certified Quality
                  </h3>
                  <p className="text-base font-semibold text-[#4B5563]">
                    {" "}
                    <br />
                    Internationally recognized quality standards, ensuring{" "}
                    <br /> food safety and compliance for all our products and{" "}
                    <br /> processes. Our commitment to quality is reflected in{" "}
                    <br /> every aspect of our operations.
                  </p>
                </div>
              </div>
            </div>

            {/* Centered Tree Image */}
            <div className="justify-center hidden lg:flex">
              <Image
                src="/Section1-tree.svg"
                alt="Tree"
                width={467}
                height={400}
                className="object-contain"
              />
            </div>

            {/* Right Features */}
            <div className="flex flex-col items-center gap-10 text-center sm:items-start sm:text-left">
              {/* Seamless Global Supply Chain */}
              <div className="flex flex-col sm:flex-row items-center gap-4 max-w-xs sm:max-w-none lg:relative lg:top-[-20px] left-[-20px]">
                <Image
                  src="/global.svg"
                  alt="Global Supply Chain"
                  width={50}
                  height={50}
                  className="lg:hidden"
                />
                <div>
                  <h3 className="text-xl font-semibold text-[#111827]">
                    Seamless Global Supply Chain
                  </h3>
                  <p className="text-base font-semibold text-[#4B5563]">
                    {" "}
                    <br />
                    Efficient logistics and timely deliveries <br /> across
                    international markets.
                  </p>
                </div>
              </div>

              {/* Competitive Pricing */}
              <div className="flex flex-col sm:flex-row items-center gap-4 max-w-xs sm:max-w-none lg:relative lg:top-[100px] left-[-20px] ">
                <Image
                  src="/pricing.svg"
                  alt="Competitive Pricing"
                  width={50}
                  height={50}
                  className="lg:hidden"
                />
                <div>
                  <h3 className="text-xl font-semibold text-[#111827]">
                    Competitive Pricing
                  </h3>
                  <p className="text-base font-semibold text-[#4B5563]">
                    {" "}
                    <br />
                    Premium products at industry-best prices, ensuring <br />{" "}
                    maximum value for our customers worldwide. We <br />{" "}
                    maintain competitive pricing without compromising on <br />{" "}
                    quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
