"use client";
import React, { useEffect } from "react";
import Footer from "../HomePage/Footer";
import Navbar from "../HomePage/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

const SelectedProduct = ({ product }) => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      easing: "ease-in-out", // Easing type
      once: false, // Whether animation should happen only once
    });
  }, []);

  if (!product) {
    return (
      <div className="flex items-center justify-center text-xl font-semibold text-gray-600 h-96">
        Product not found.
      </div>
    );
  }

  return (
    <div className="bg-white">
      <Navbar />
      {/* Section 1: Product Overview */}
      <div className="py-12">
        <div className="container lg:w-[90%] lg:relative lg:left-[5%]">
          <div className="flex flex-col gap-10 lg:flex-row">
            {/* Product Image */}
            <div className="lg:w-1/2" data-aos="fade-right">
              <div className="bg-white rounded-2xl shadow-lg h-[400px] flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-[476px] h-[352px] object-contain"
                />
              </div>
            </div>
            {/* Product Details */}
            <div className="lg:w-1/2" data-aos="fade-left"> <br />
              <h4 className="mb-2 text-3xl font-bold text-gray-900">
                {product.title}
              </h4>
              <div className="flex items-center mb-4">
                <img
                  src="/star.svg"
                  alt="Rating"
                  className="w-6 h-6 mr-2"
                />
                <span className="font-semibold text-gray-500">
                ({product.reviews} reviews)
                </span>
              </div>
              <p className="mb-6 font-bold leading-7 text-gray-700">
                {product.aboutProduct || product.description}
              </p>
              {/* Highlights */}
              <div className="rounded-2xl"> <br />
                <h5 className="mb-4 text-xl font-semibold text-gray-700">
                  Key Highlights
                </h5> <br />
                <ul className="gap-4">
                  {product.highlights && product.highlights.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-4 leading-8"
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <img
                        src="/right.svg"
                        alt=""
                        className="items-center w-6 h-6 mt-1 mr-3"
                      />
                      <span className="font-semibold text-gray-700">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      {/* Section 2: Product Description */}
      <div className="container lg:w-[90%] lg:relative lg:left-[5%]">
        {/* Tabs */}
        <div 
          className="flex text-sm border-1 border-b border-gray-200 sm:text-base justify-between w-[45%]"
          data-aos="fade-down"
        >
          {[
            { label: "Product Description", active: true },
            { label: "Specifications" },
            { label: "Packaging & Shipping" },
            { label: "Nutritional Information" },
          ].map(({ label, active }, index) => (
            <span
              key={index}
              className={`px-4 py-3 font-semibold ${
                active
                  ? "text-green-700 border-b-2 border-green-700"
                  : "text-gray-500"
              }`}
            >
              {label}
            </span>
          ))}
        </div>
        <br />
        <div className="flex flex-col gap-12 mt-10 lg:flex-row">
          {/* Left Column */}
          <div className="space-y-10 lg:w-2/3">
            {/* Overview */}
            <div data-aos="fade-up">
              <h4 className="mb-4 text-2xl font-bold text-gray-900">
                {product.title} Overview
              </h4>
              <br />
              <p className="font-semibold leading-6 text-gray-700">
                {product.overview}
              </p>
            </div>
            <br />
            {/* Quality & Versatility */}
            <div data-aos="fade-up" data-aos-delay="100">
              <h4 className="mb-3 text-xl font-semibold text-gray-900">
                Premium Quality & Versatility
              </h4>
              <br />
              <p className="font-semibold leading-6 text-gray-700">
                {product.premiumQuality}
              </p>
            </div>
            <br />
            {/* Why Choose */}
            <div data-aos="fade-up" data-aos-delay="200">
              <h4 className="mb-4 text-xl font-semibold text-gray-900">
                Why Choose Agrolla's {product.title}?
              </h4>
              <br />
              <div className="grid gap-6 md:grid-cols-2">
                {product.features &&
                  product.features.slice(0, 4).map((feature, index) => (
                    <div
                      key={index}
                      className="border-1 border-gray-200 bg-gray-50 rounded-2xl h-[172px] w-[492px]"
                      data-aos="zoom-in"
                      data-aos-delay={index * 100}
                    >
                      <img
                        src="/house.svg"
                        alt=""
                        className="relative w-10 h-10 left-[5%] top-3"
                      />
                      <h5 className="mb-1 text-lg font-semibold text-gray-900 relative left-[5%] top-6">
                        {feature.split(" ")[0]}
                      </h5>
                      <p className="text-gray-700 relative left-[5%] font-semibold w-[90%] top-9">
                        {feature}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          {/* Right Column (Sidebar) */}
          <div className="space-y-6">
            {/* Certifications */}
            <div 
              className="border-gray-200 border-1 bg-gray-50 rounded-2xl w-[480px] h-[228px]"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <br />
              <h4 className="text-lg font-semibold text-gray-900 w-[90%] relative left-[5%]">
                Quality Certifications
              </h4>
              <ul className="space-y-3">
                <br />
                {["ISO 22000:2018", "HACCP Certified", "GMP Compliant", "FDA Registered"].map(
                  (item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-5 leading-8 w-[90%] relative left-[5%]"
                      data-aos="fade-left"
                      data-aos-delay={150 + (index * 50)}
                    >
                      <img src="/bookmark.svg" alt="" className="w-7 h-7" />
                      <span className="font-semibold text-gray-700">{item}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
            <br />
            <br />
            <br />
            {/* Contact Box */}
            <div 
              className="border-gray-200 border-1 bg-gray-50 rounded-2xl w-[480px] h-[284px]"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <br />
              <h4 className="mb-3 text-lg font-semibold text-gray-900 w-[90%] relative left-[5%]">
                Need More Information?
              </h4>
              <p className="mb-4 text-gray-700 w-[90%] relative left-[5%] font-semibold">
                Our agricultural experts are available to answer your questions
                and provide detailed information about our {product.title}.
              </p>
              <div className="space-y-3 w-[90%] relative left-[5%]">
                <br />
                <div 
                  className="flex items-center gap-2"
                  data-aos="fade-left"
                  data-aos-delay="250"
                >
                  <img src="/call.svg" alt="" className="w-10 h-10" />
                  <span className="font-semibold text-gray-700">
                    +1 (555) 123-4567
                  </span>
                </div>
                <br />
                <div 
                  className="flex items-center gap-2"
                  data-aos="fade-left"
                  data-aos-delay="300"
                >
                  <img src="/mail.svg" alt="" className="w-10 h-10" />
                  <span className="font-semibold text-gray-700">
                    info@agrolla.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        {/* Applications */}
        <div className="mt-16 w-[66%]" data-aos="fade-up">
          <h4 className="mb-4 text-xl font-semibold text-gray-900 ">
            Applications
          </h4>
          <br />
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {product.applications
              ? product.applications.split(",").map((app, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 border-gray-200 border-1 bg-gray-50 rounded-2xl h-[72px] w-[325px]"
                    data-aos="zoom-in"
                    data-aos-delay={index * 50}
                  >
                    <img src="/food.svg" alt="" className="w-10 h-10 mr-3" />
                    <span className="font-semibold text-gray-700">
                      {app.trim()}
                    </span>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default SelectedProduct;