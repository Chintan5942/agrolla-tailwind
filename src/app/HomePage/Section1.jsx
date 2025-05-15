"use-client";
export default function Section1() {
  return (
    <>
      <div className="h-[863px] w-[1920px(fixed)] section1">
        <div className="h-[136px] w-[1504px]  relative left-[208px] top-20">
          <div className="flex justify-center h-[20px] items-center">
            <hr className="w-[52px] border-1 border-[#2E7D32]" />
            <p className="text-sm text-[#2E7D32] font-medium uppercase relative left-2 ">
              Trusted Quality, Global Reach
            </p>
            <hr className="w-[52px] border-1 border-[#2E7D32] relative left-4" />
          </div>
          <p className="text-3xl font-bold text-[#111827] text-center relative top-4">
            Why Choose <span className="text-[#2e7d32]">Agrolla Impex</span>?
          </p>
          <p className="text-base font-normal text-[#4B5563] text-center relative top-8">
            Agrolla Impex is a distinguished One Star Export House and a leading
            manufacturer <br /> and exporter of peanuts, oilseeds, grains, and
            pulses.{" "}
          </p>
        </div>
        <div className="h-[488px] w-[1437px] border-[0.1px] border-[#EAF2EA] relative left-[288px] top-[150px] flex flex-wrap flex-col">
          <div className="h-[112px] w-[287px]  relative left-40 " >
            <p className="text-[#111827] font-medium text-xl text-right">
              Customer Centric Approach
            </p>
            <p className="text-[#4B5563] font-normal text-base text-right">
              Tailored Solutions, transparency, <br /> and exceptional service
              to meet <br /> your specific requirements.
            </p>
          </div>
          <div className="h-[136px] w-[445px]  relative top-50">
            <p className="text-[#111827] font-medium text-xl text-right">
              Certified Quality
            </p>
            <p className="text-[#4B5563] font-normal text-base text-right">
              Internationally recognized quality standards, ensuring <br /> food
              safety and compliance for all our products and <br /> processes.
              Our commitment to quality is reflected in <br /> every aspect of
              our operations.
            </p>
          </div>
          <img
            src="/Section1-tree.svg"
            alt=""
            className="h-[400px] w-[467px] relative top-5"
          />
          <div className="h-[88px] w-[311px]  relative top-25">
            <p className="text-[#111827] font-medium text-xl text-left">
              Seamless Global Supply Chain
            </p>
            <p className="text-[#4B5563] font-normal text-base text-left">
              Efficient logistics and timely deliveries across international
              markets.
            </p>
          </div>
          <div className="h-[136px] w-[445px]  relative top-60">
            <p className="text-[#111827] font-medium text-xl text-left">
              Competitive Pricing
            </p>
            <p className="text-[#4B5563] font-normal text-base text-left">
              Premium products at industry-best prices, ensuring maximum value
              for our customers worldwide. We maintain competitive pricing
              without compromising on quality.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
