"use client";
import React, { useState } from "react";
import Footer from "../HomePage/Footer";
import Navbar from "../HomePage/Navbar";
import productsData from "../HomePage/productsData";

const ProductPage = () => {
  // Default to first product
  const [selectedProduct, setSelectedProduct] = useState(productsData[0]);

  // Other products for thumbnails (exclude selected)
  const otherProducts = productsData.filter((p) => p.id !== selectedProduct.id);

  return (
    <div className="bg-white">
      <Navbar />
      {/* Section 1: Product Overview */}
      <div className="py-12">
        <div className="container lg:w-[90%] lg:relative lg:left-[5%]">
          <div className="flex flex-col gap-10 lg:flex-row">
            {/* Product Image */}
            <div className="lg:w-1/2">
              <div className="bg-white rounded-2xl shadow-lg h-[400px] flex items-center justify-center">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className="w-[476px] h-[352px] object-contain"
                />
              </div>
            </div>
            {/* Product Details */}
            <div className="lg:w-1/2"> <br />
              <h4 className="mb-2 text-3xl font-bold text-gray-900">
                {selectedProduct.title}
              </h4>
              <div className="flex items-center mb-4">
                <img
                  src="/star.svg"
                  alt="Rating"
                  className="w-6 h-6 mr-2"
                />
                <span className="text-gray-500">
                ({selectedProduct.reviews} reviews)
                </span>
              </div>
              <p className="mb-6 font-bold leading-7 text-gray-700">
                {selectedProduct.aboutProduct}
              </p>
              {/* Highlights */}
              <div className="rounded-2xl"> <br />
                <h5 className="mb-4 text-xl font-semibold text-gray-700">
                  Key Highlights
                </h5> <br />
                <ul className="gap-4">
                  {selectedProduct.highlights.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-4 leading-8"
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
          {/* Thumbnail Images */} <br />
                <div className="flex gap-4 mt-10 lg:mt-12  w-[52%] overflow-scroll overflow-y-hidden scrollbar-y-hide catagory-images">
            {[selectedProduct, ...otherProducts].map((product, index) => (
              <img
                key={product.id}
                src={product.image}
                alt={product.title}
                onClick={() => setSelectedProduct(product)}
                className={`w-36 h-24 rounded-xl cursor-pointer object-contain transition-all duration-200 ${
                  product.id === selectedProduct.id
                    ? "border-2 border-green-500"
                    : "border border-gray-200 opacity-80 hover:opacity-100"
                }`}
              />
            ))}
          </div>
        </div>
      </div> 
      <br />
      {/* Section 2: Product Description */}
      <div className="container lg:w-[90%] lg:relative lg:left-[5%]">
        {/* Tabs */}
        <div className="flex text-sm border-1 border-b border-gray-200 sm:text-base justify-between w-[45%]">
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
            <div>
              <h4 className="mb-4 text-2xl font-bold text-gray-900">
                {selectedProduct.title} Overview
              </h4>
              <br />
              <p className="font-semibold leading-6 text-gray-700">
                {selectedProduct.description}
              </p>
            </div>
            <br />
            {/* Quality & Versatility */}
            <div>
              <h4 className="mb-3 text-xl font-semibold text-gray-900">
                Premium Quality & Versatility
              </h4>
              <br />
              <p className="font-semibold leading-6 text-gray-700">
                {selectedProduct.features &&
                  selectedProduct.features.join(". ")}
              </p>
            </div>
            <br />
            {/* Why Choose */}
            <div>
              <h4 className="mb-4 text-xl font-semibold text-gray-900">
                Why Choose Agrolla's {selectedProduct.title}?
              </h4>
              <br />
              <div className="grid gap-6 md:grid-cols-2">
                {selectedProduct.features &&
                  selectedProduct.features
                    .slice(0, 4)
                    .map((feature, index) => (
                      <div
                        key={index}
                        className="border-1 border-gray-200 bg-gray-50 rounded-2xl h-[172px] w-[492px]"
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
          <div className="space-y-6 ">
            {/* Certifications */}
            <div className="border-gray-200 border-1 bg-gray-50 rounded-2xl w-[480px] h-[228px]">
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
            <div className="border-gray-200 border-1 bg-gray-50 rounded-2xl w-[480px] h-[284px]">
              <br />
              <h4 className="mb-3 text-lg font-semibold text-gray-900 w-[90%] relative left-[5%]">
                Need More Information?
              </h4>
              <p className="mb-4 text-gray-700 w-[90%] relative left-[5%] font-semibold">
                Our agricultural experts are available to answer your questions
                and provide detailed information about our {selectedProduct.title}.
              </p>
              <div className="space-y-3 w-[90%] relative left-[5%]">
                <br />
                <div className="flex items-center gap-2">
                  <img src="/call.svg" alt="" className="w-10 h-10" />
                  <span className="font-semibold text-gray-700">
                    +1 (555) 123-4567
                  </span>
                </div>
                <br />
                <div className="flex items-center gap-2">
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
        <div className="mt-16 w-[66%]">
          <h4 className="mb-4 text-xl font-semibold text-gray-900 ">
            Applications
          </h4>
          <br />
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {selectedProduct.applications
              ? selectedProduct.applications.split(",").map((app, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 border-gray-200 border-1 bg-gray-50 rounded-2xl h-[72px] w-[325px]"
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
      <Footer />
    </div>
  );
};

export default ProductPage;
