"use client";
import Image from "next/image";

export default function Section1() {
  return (
    <section className="w-full h-[863px] px-4 py-10 bg-white bg-[url('/section1-BG.png')] bg-cover bg-center bg-no-repeat  md:py-20">
      {/* Header Text */}
      <div className="relative text-center top-40">
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
      <div className="relative grid grid-cols-1 gap-10 px-4 md:px-8 lg:grid-cols-3 lg:items-center top-80">
        {/* Left Features */}
        <div className="flex flex-col items-center space-y-12 text-center lg:block lg:text-right">
          <div className="relative flex flex-col items-center gap-4 border-2 border-red-500 md:flex-row lg:flex-col lg:items-end lg:text-right top-[-150px] left-20">
            <Image
              src="/centric.svg"
              alt="Customer Centric"
              width={50}
              height={50}
              className="block lg:hidden"
            />
            <div>
              <h3 className="text-2xl font-semibold text-[#111827]">
                Customer Centric Approach
              </h3>
              <p className="text-xl text-[#4B5563]">
                Tailored Solutions, transparency, <br />
                and exceptional service to meet <br />
                your specific requirements.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 border-2 border-red-500 md:flex-row lg:flex-col lg:items-end lg:text-right">
            <Image
              src="/certified.svg"
              alt="Certified Quality"
              width={50}
              height={50}
              className="block lg:hidden"
            />
            <div>
              <h3 className="text-xl font-medium text-[#111827]">
                Certified Quality
              </h3>
              <p className="text-base text-[#4B5563]">
                Internationally recognized quality standards, ensuring <br />
                food safety and compliance. Our commitment to quality is <br />
                reflected in every aspect of our operations.
              </p>
            </div>
          </div>
        </div>

        {/* Tree Image (only on lg and above) */}
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
        <div className="flex flex-col items-center space-y-12 text-center lg:block lg:text-left">
          <div className="flex flex-col items-center gap-4 border-2 border-red-500 md:flex-row lg:flex-col lg:items-start lg:text-left">
            <Image
              src="/global.svg"
              alt="Global Supply Chain"
              width={50}
              height={50}
              className="block lg:hidden"
            />
            <div>
              <h3 className="text-xl font-medium text-[#111827]">
                Seamless Global Supply Chain
              </h3>
              <p className="text-base text-[#4B5563]">
                Efficient logistics and timely deliveries across international
                markets.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 border-2 border-red-500 md:flex-row lg:flex-col lg:items-start lg:text-left">
            <Image
              src="/pricing.svg"
              alt="Competitive Pricing"
              width={50}
              height={50}
              className="block lg:hidden"
            />
            <div>
              <h3 className="text-xl font-medium text-[#111827]">
                Competitive Pricing
              </h3>
              <p className="text-base text-[#4B5563] md:text-start ">
                Premium products at industry-best prices, ensuring maximum value
                for customers worldwide—without compromising quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
