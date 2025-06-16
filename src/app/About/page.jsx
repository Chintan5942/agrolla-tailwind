"use client";

import Footer from "../HomePage/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <>
      <div className="overflow-hidden font-poppins">
        {/* Hero Section */}
        <div className="w-full h-[1000px] bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/abouthero.png')] bg-cover bg-bottom flex items-center overflow-hidden">
          <div className="flex flex-col items-center justify-start w-full max-w-[600px] gap-4 absolute top-[450px] lg:left-[5%]">
            <div className="w-[90%]" data-aos="fade-up" data-aos-delay="100">
              <h1 className="lg:text-[48px] text-4xl font-bold text-white leading-tight ">
                Nurturing Quality, Cultivating Trust
              </h1>{" "}
              <br />
              <p className="lg:text-[18px] font-normal w-full text-[#d3d3d3] text-start flex flex-wrap ">
                Discover the story behind Agrolla Impex, a distinguished One
                Star Export House and leading manufacturer of premium
                agricultural products.
              </p>{" "}
              <br />
              <div className="flex flex-row justify-start w-full gap-4">
                <button className="h-[50px] w-[123px] bg-[#2E7D32] text-white text-[16px] font-semibold rounded-[8px]">
                  Our Story
                </button>
                <button className="h-[50px] w-[123px] bg-white text-[#1f2937] text-[16px] font-semibold rounded-[8px]">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="flex flex-col items-center w-full gap-16 px-4 md:gap-12 sm:gap-8">
          {/* Section 1 */}
          <section
            className="w-full max-w-[1536px] flex flex-col items-center gap-8"
            data-aos="fade-up"
          >
            <br />
            <br />
            <h2 className="text-[30px] font-bold text-center">Who We Are</h2>
            <p className="w-full max-w-xl text-[18px] text-[#4b5563] text-center">
              Agrolla Impex is a distinguished One Star Export House and a
              leading manufacturer and exporter of peanuts, oilseeds, grains,
              and pulses.
            </p>
            <div className="flex flex-col items-center justify-center w-full gap-8 overflow-hidden lg:flex-row">
              <div className="flex flex-col justify-center gap-6 max-w-[728px] w-full">
                <div
                  className=" w-[90%] relative left-[5%]"
                  data-aos="fade-right"
                >
                  <p className="text-[16px] font-semibold text-[#374151] leading-[24px]">
                    Headquartered in Gujarat, India, we take immense pride in
                    our fully integrated operations, ensuring uncompromised
                    quality, consistency, and reliability in every shipment.
                  </p>{" "}
                  <br />
                  <p className="text-[16px] font-semibold text-[#374151] leading-[24px]">
                    Our strategic location allows us to stay directly connected
                    with farmers, enabling real-time communication and strict
                    quality oversight right from the cultivation phase. This
                    hands-on approach ensures that our products meet stringent
                    global food safety and quality standards, making us a
                    preferred supplier across international markets.
                  </p>{" "}
                  <br />
                  <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
                    {/* Quality Items */}
                    {[
                      {
                        icon: "/state.svg",
                        title: "State-of-the-Art Processing",
                        desc: "Equipped with cutting-edge technology to maintain purity, freshness, and nutritional value.",
                      },
                      {
                        icon: "/quality.svg",
                        title: "Quality Control",
                        desc: "Every batch undergoes rigorous testing to meet the highest international benchmarks.",
                      },
                      {
                        icon: "/sustain.svg",
                        title: "Sustainable Sourcing",
                        desc: "Partnering with trusted farmers to maintain transparency and environmental responsibility.",
                      },
                      {
                        icon: "/global.svg",
                        title: "Global Distribution",
                        desc: "Serving bulk buyers, food manufacturers, wholesalers, and retailers worldwide.",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4"
                        data-aos="fade-up"
                        data-aos-delay={100 * index}
                      >
                        <img
                          src={item.icon}
                          alt=""
                          className="w-12 h-12 mt-1"
                        />
                        <div className="flex flex-col">
                          <p className="text-[16px] font-semibold text-[#111827]">
                            {item.title}
                          </p>
                          <p className="text-[14px] font-semibold text-[#4b5563]">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <img
                src="/aboutSection1.jpg"
                alt=""
                className="w-full max-w-[728px] h-[613px] rounded-[8px]"
                data-aos="fade-left"
              />
            </div>
          </section>
          {/* Section 2 */}
          <section
            className="w-full bg-[#F9FAFB] flex justify-center items-center overflow-hidden"
            data-aos="fade-up"
          >
            <div className="lg:h-[650px] flex items-center">
              <div className="w-full  max-w-[1536px] flex flex-col lg:flex-row gap-8">
                {/* Mission Card */}
                <div
                  className="w-full lg:w-1/2 rounded-[16px] bg-white shadow-lg flex flex-col gap-6"
                  data-aos="fade-right"
                >
                  <div className="flex flex-col  w-[90%] relative left-[5%]">
                    {" "}
                    <br />
                    <img src="/mission.svg" alt="" className="w-16 h-16" />{" "}
                    <br />
                    <h3 className="text-2xl font-bold">Our Mission</h3>
                  </div>

                  <ul className="space-y-5 w-[90%] relative left-[5%]">
                    {[
                      {
                        title: "Uncompromised Quality",
                        desc: "Delivering premium agro products that exceed global quality expectations.",
                      },
                      {
                        title: "Expanding Global Reach",
                        desc: "Strengthening our presence in key international markets with seamless trade operations.",
                      },
                      {
                        title: "Sustainability & Ethical Sourcing",
                        desc: "Empowering farmers and promoting environmentally responsible agricultural practices.",
                      },
                      {
                        title: "Innovation & Growth",
                        desc: "Investing in modern technology and continuous improvement to adapt to evolving market needs.",
                      },
                      {
                        title: "Client Success",
                        desc: "Building long-term partnerships by offering customized solutions and exceptional service.",
                      },
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-6 leading-relaxed"
                        data-aos="fade-up"
                        data-aos-delay={100 * index}
                      >
                        <span className="text-[#4caf50] text-xl font-semibold">
                          ✓
                        </span>
                        <div className="space-y-1">
                          <p className="text-[16px] font-semibold text-[#111827]">
                            {item.title}
                          </p>
                          <p className="text-[14px] text-[#4b5563] leading-snug">
                            {item.desc}
                          </p>
                          <br />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Vision Card */}
                <div
                  className="w-full lg:w-1/2 rounded-[16px] bg-white shadow-lg flex flex-col gap-6"
                  data-aos="fade-left"
                >
                  <div className="flex flex-col  w-[90%] relative left-[5%]">
                    {" "}
                    <br />
                    <img src="/vision.svg" alt="" className="w-16 h-16" />{" "}
                    <br />
                    <h3 className="text-2xl font-bold">Our Vision</h3>
                  </div>
                  <p className="text-lg font-medium leading-relaxed w-[90%] relative left-[5%]">
                    To be a globally recognized leader in agro exports, setting
                    industry benchmarks in quality, innovation, and sustainable
                    trade practices.
                  </p>
                  <img
                    src="/visionimg.jpg"
                    alt=""
                    className="h-48 rounded-[16px] object-cover w-[90%] relative left-[5%]"
                    data-aos="zoom-in"
                  />
                  <p className="italic text-[#4b5563] text-center font-semibold leading-relaxed w-[90%] relative left-[5%]">
                    "At Agrolla Impex, we don't just export agro products—we
                    deliver trust, excellence, and a commitment to quality in
                    every shipment."
                  </p>{" "}
                  <br />
                </div>
              </div>
            </div>
          </section>
          {/* Section 3 */}
          <section
            className="w-full max-w-[1536px] flex flex-col items-center gap-8 px-4 overflow-hidden"
            data-aos="fade-up"
          >
            <h2 className="text-[30px] font-bold text-center">Our Values</h2>
            <p className=" max-w-2xl text-[18px] text-[#4b5563] text-center w-[90%]">
              At Agrolla Impex, our foundation is built on principles that
              define our commitment to excellence, integrity, and customer
              satisfaction. Our values guide every aspect of our operations,
              from sourcing to delivery, ensuring that we uphold the highest
              standards in the agro-export industryion.
            </p>
            <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Value Cards */}
              {[
                {
                  icon: "/uncompromie.svg",
                  title: "Uncompromising Quality",
                  desc: "We adhere to the strictest international food safety standards, ensuring that every product we supply is pure, fresh, and meets global regulatory requirements. Our rigorous quality control processes guarantee superior-grade agricultural commodities.",
                },
                {
                  icon: "/integrety.svg",
                  title: "Integrity & Transparency",
                  desc: "At Agrolla Impex, our foundation is built on principles that define our commitment to excellence, integrity, and customer satisfaction. Our values guide every aspect of our operations, from sourcing to delivery, ensuring that we uphold the highest standards in the agro-export industry",
                },
                {
                  icon: "/centric.svg",
                  title: "Farmer-Centric Approach",
                  desc: "Our close collaboration with farmers ensures that they receive fair compensation and access to the best agricultural practices. By working directly with growers, we maintain traceability, sustainability, and product integrity from farm to market",
                },
                {
                  icon: "/innovation.svg",
                  title: "Innovation & Excellence",
                  desc: "We continuously invest in advanced processing technology and innovative techniques to enhance product quality and efficiency. Our dedication to excellence in operations enables us to meet the dynamic needs of the global agro-market.",
                },
                {
                  icon: "/customer.svg",
                  title: "Customer Commitment",
                  desc: "Customer satisfaction is at the heart of everything we do. We strive to provide tailored solutions, timely deliveries, and unmatched service quality, building long-term partnerships with our global clientele",
                },
                {
                  icon: "/Perspective.svg",
                  title: "Global Perspective",
                  desc: "With an international outlook, we understand diverse market needs and cultural preferences, adapting our products and services to meet global demands while maintaining local relevance.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#f9fafb] rounded-[16px] p-6 shadow-sm hover:shadow-md transition-shadow] flex items-center h-[260px]"
                  data-aos="fade-up"
                  data-aos-delay={100 * (index % 3)}
                >
                  <div className="relative left-[5%] flex flex-col w-[90%]  overflow-hidden">
                    <img src={item.icon} alt="" className="w-14 h-14" /> <br />
                    <h3 className="text-xl font-semibold">{item.title}</h3>{" "}
                    <br />
                    <p className="text-[#4b5563] w-[432px] font-semibold overflow-hidden">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          {/* Section 4 */}
          <section
            className="w-full max-w-[1536px] flex flex-col items-center gap-8 px-4 overflow-hidden"
            data-aos="fade-up"
          >
            <br />
            <br />
            <h2 className="text-[30px] font-bold text-center">
              Our Quality Assurance Process
            </h2>
            <p className=" max-w-2xl text-[18px] text-[#4b5563] text-center w-[90%]">
              We follow a rigorous quality control process to ensure that every
              product meets international standards.
            </p>

            <div className="w-full max-w-4xl space-y-8">
              {/* Process Items */}
              {[
                {
                  icon: "/process1.svg",
                  title: "Sourcing & Selection",
                  desc: "We carefully select farmers and suppliers who follow sustainable and ethical farming practices. Our agronomists regularly visit farms to ensure quality standards are maintained from the cultivation stage.",
                  note: "Direct farmer relationships for traceability and quality control",
                },
                {
                  icon: "/process2.svg",
                  title: "Raw Material Inspection",
                  desc: "All incoming raw materials undergo thorough inspection for physical properties, moisture content, and potential contaminants. Only materials meeting our strict criteria proceed to processing.",
                  note: "Advanced testing equipment for accurate quality assessment",
                },
                {
                  icon: "/process3.svg",
                  title: "Processing & Cleaning",
                  desc: "Our state-of-the-art processing facilities use advanced technology for cleaning, sorting, grading, and packaging. Every step is monitored to maintain product integrity and quality.",
                  note: "ISO-certified processing facilities with HACCP implementation",
                },
                {
                  icon: "/process4.svg",
                  title: "Laboratory Testing",
                  desc: "Our in-house laboratory conducts comprehensive tests for physical, chemical, and microbiological parameters. We also work with accredited third-party labs for additional verification.",
                  note: "Comprehensive testing for aflatoxins, pesticide residues, and more",
                },
                {
                  icon: "/process5.svg",
                  title: "Final Inspection & Certification",
                  desc: "Before shipping, all products undergo final inspection and receive necessary certifications. Our quality assurance team ensures compliance with destination country requirements.",
                  note: "Documentation and certification aligned with global standards",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex gap-6 md:gap-8"
                  data-aos="fade-up"
                  data-aos-delay={100 * index}
                >
                  <div className="flex flex-col items-center">
                    <img src={item.icon} alt="" className="w-10 md:w-12" />
                    {index < 4 && (
                      <div className="w-[2px] h-full bg-gray-300 mt-3 md:mt-4"></div>
                    )}
                  </div>

                  <div className="flex-1 space-y-3 md:space-y-4">
                    <h3 className="text-xl md:text-2xl font-semibold leading-[28px] md:leading-normal">
                      {item.title}
                    </h3>
                    <p className="text-[#4b5563] font-semibold leading-relaxed md:leading-loose">
                      {item.desc}
                    </p>{" "}
                    <br />
                    <div className="bg-[#F9FAFB] rounded-md flex gap-3 md:gap-4 items-center h-[40px]">
                      <img src="/bookmark.svg" alt="" className="" />
                      <p className="text-[#374151] font-semibold leading-snug md:leading-normal">
                        {item.note}
                      </p>
                    </div>
                    <br />
                  </div>
                </div>
              ))}
            </div>

            <div
              className="flex flex-col items-center w-full gap-8 mt-12"
              data-aos="fade-up"
            >
              <h3 className="text-2xl font-semibold text-center">
                Our Certifications
              </h3>
              <div className="flex flex-wrap w-full gap-6 justify-evenly md:gap-4 sm:gap-3">
                {[1, 2, 3, 4, 5].map((num, index) => (
                  <img
                    key={num}
                    src={`/cer${num}.png`}
                    alt=""
                    className="object-contain h-24 md:h-20 sm:h-16"
                    data-aos="zoom-in"
                    data-aos-delay={100 * index}
                  />
                ))}
              </div>
            </div>
          </section>
          {/* Section 5 */}
          <div
            className="relative w-full px-4 overflow-hidden bg-gray-50 md:px-8"
            data-aos="fade-up"
          >
            <br />
            <br />
            <div className="w-[90%] relative left-[5%]">
              <div className="flex flex-col lg:flex-row mx-auto gap-8 lg:gap-10 max-w-[1536px] w-full lg:relative lg:left-[5%]">
                {/* Contact Information */}
                <div className="w-full gap-8 p-6 mx-auto bg-white shadow-lg x-w-lg w- rounded-xl lg:max-w-md lg:w-1/3 lg:mx-">
                  <div
                    className="flex flex-col w-[90%] justify-between relative left-[5%]"
                    data-aos="fade-right"
                  >
                    <div className="flex flex-col gap-4">
                      {" "}
                      <br />
                      <h3 className="text-xl font-semibold text-gray-900">
                        Contact Information
                      </h3>
                      <div className="flex flex-col gap-4">
                        {/* Location */}
                        <div className="flex items-center gap-4">
                          <img
                            src="/location.svg"
                            alt="Location"
                            className="flex-shrink-0 w-10 h-10"
                          />
                          <div>
                            <h4 className="text-base font-semibold text-gray-900">
                              Headquarters
                            </h4>
                            <p className="text-base font-medium text-gray-700">
                              BM Square-1, Rajlaxmi Park, <br />
                              Junagadh
                            </p>
                          </div>
                        </div>
                        {/* Phone */}
                        <div className="flex items-center gap-4">
                          <img
                            src="/call.svg"
                            alt="Phone"
                            className="flex-shrink-0 w-10 h-10"
                          />
                          <div>
                            <h4 className="text-base font-semibold text-gray-900">
                              Phone
                            </h4>
                            <p className="text-base font-medium text-gray-700">
                              +91 79 2345 6789
                              <br />
                              +1 (800) 123-4567 (International)
                            </p>
                          </div>
                        </div>
                        {/* Email */}
                        <div className="flex items-center gap-4">
                          <img
                            src="/mail.svg"
                            alt="Email"
                            className="flex-shrink-0 w-10 h-10"
                          />
                          <div>
                            <h4 className="text-base font-semibold text-gray-900">
                              Email
                            </h4>
                            <p className="text-base font-medium text-gray-700">
                              info@agrollaimpex.com
                              <br />
                              exports@agrollaimpex.com
                            </p>
                          </div>
                        </div>
                        {/* Business Hours */}
                        <div className="flex items-center gap-4">
                          <img
                            src="/clock.svg"
                            alt="Business Hours"
                            className="flex-shrink-0 w-10 h-10"
                          />
                          <div>
                            <h4 className="text-base font-semibold text-gray-900">
                              Business Hours
                            </h4>
                            <p className="text-base text-gray-700">
                              Monday - Friday: 9:00 AM - 6:00 PM IST
                              <br />
                              Saturday: 9:00 AM - 1:00 PM IST
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Social Icons */} <br />
                    <div className="flex flex-col gap-4">
                      <h4 className="text-base font-bold text-gray-900">
                        Connect With Us
                      </h4>
                      <div className="flex gap-4">
                        <img
                          src="/linkedin.svg"
                          alt="LinkedIn"
                          className="w-10 h-10"
                        />
                        <img
                          src="/twitter.svg"
                          alt="Twitter"
                          className="w-10 h-10"
                        />
                        <img
                          src="/facebook.svg"
                          alt="Facebook"
                          className="w-10 h-10"
                        />
                        <img
                          src="/instagram.svg"
                          alt="Instagram"
                          className="w-10 h-10"
                        />
                      </div>
                      <br />
                    </div>
                  </div>
                </div>
                {/* Contact Form */}
                <div className="w-full gap-6 bg-white shadow-lg rounded-xl">
                  <div
                    className="flex flex-col  w-[95%] relative left-[2.5%]"
                    data-aos="fade-left"
                  >
                    {" "}
                    <br />
                    <h3 className="mb-2 text-xl font-semibold text-gray-900">
                      Send Us a Message
                    </h3>
                    <form className="flex flex-col w-full gap-6">
                      <div className="grid grid-cols-1 gap-y-6 gap-x-12 md:grid-cols-2">
                        <div className="flex flex-col gap-4">
                          <label
                            htmlFor="name"
                            className="text-lg font-medium text-gray-700"
                          >
                            Your Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            className="block w-full rounded-md border border-gray-300 px-3 py-2 pl-6 pr-6 h-[42px]"
                          />
                        </div>
                        <div className="flex flex-col gap-4">
                          <label
                            htmlFor="email"
                            className="text-lg font-medium text-gray-700"
                          >
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            className="block w-full rounded-md border border-gray-300 px-3 py-2 pl-6 pr-6 h-[42px] "
                          />
                        </div>
                        <div className="flex flex-col gap-4">
                          <label
                            htmlFor="company"
                            className="text-lg font-medium text-gray-700"
                          >
                            Company Name
                          </label>
                          <input
                            type="text"
                            id="company"
                            className="block w-full rounded-md border border-gray-300 px-3 py-2 pl-6 pr-6 h-[42px]"
                          />
                        </div>
                        <div className="flex flex-col gap-4">
                          <label
                            htmlFor="subject"
                            className="text-lg font-medium text-gray-700"
                          >
                            Subject
                          </label>
                          <input
                            type="text"
                            id="subject"
                            className="block w-full rounded-md border border-gray-300 px-3 py-2 pl-6 pr-6 h-[42px]"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-4">
                        <label
                          htmlFor="message"
                          className="text-lg font-medium text-gray-700"
                        >
                          Your Message
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          className="block w-full rounded-md border border-gray-300 px-3 py-2 pl-6 pr-6 min-h-[120px]"
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="rounded-md bg-green-700 text-base font-semibold text-white hover:bg-green-800 h-[48px] w-full md:w-[200px] self-start transition-all duration-200"
                      >
                        Send Message
                      </button>
                      <br />
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
          </div>
          {/* Section 7 */}
          <div
            className="relative flex justify-center w-full overflow-hidden"
            data-aos="fade-up"
          >
            <div className="w-[1536px]">
              <div className="text-center  w-[90%] relative left-[5%]">
                <br />
                <br />
                <h2 className="text-3xl font-bold text-gray-900 leading-[42px]">
                  Our Global Presence
                </h2>
                <p className="mt-4 text-lg text-gray-600 ">
                  We export premium agricultural products to over 30 countries
                  across 5 continents.
                </p>
              </div>
              <br />
              <br />
              <div
                className="rounded-xl overflow-hidden shadow-sm flex justify-center w-[98%]"
                data-aos="zoom-in"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d-122.4194154846816!3d37.77492977975971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f0e2c5b1%3A0x4c8b8b6e8f8b8b8b!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sus!4v1681234567890!5m2!1sen!2sus"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <br />
              <br />
            </div>
          </div>
          {/* Section 8 */}
          <div
            className="relative w-full overflow-hidden bg-green-50"
            data-aos="fade-up"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">
                <br />
                <br />
                Ready to Partner with Agrolla Impex?
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Join our global network of satisfied customers and experience
                the premium quality and service that sets us apart.
              </p>
            </div>
            <br />
            <br />
            <div className="flex flex-row justify-center gap-4">
              <div
                className="w-[90%] flex justify-center gap-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <button className="rounded-md bg-green-700 text-base font-semibold text-white shadow-sm hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2 h-[50px] w-[208px]">
                  Contact Us Today
                </button>
                <button className="rounded-md bg-white  text-base font-semibold text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 h-[50px] w-[208px]">
                  Request a Quote
                </button>
              </div>
            </div>
            <br />
            <br />
            <br />
          </div>
        </div>
        {/* Footer */}
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    </>
  );
}
