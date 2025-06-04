"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../HomePage/Navbar";
// No AOS import

import productsData from "../HomePage/productsData";

// Custom animation classes
const animationDur = 600;

const SelectedProduct = ({ product }) => {
  const [currentProduct, setCurrentProduct] = useState(product);
  const galleryImages =
    (product.moreImage && product.moreImage.length > 0 && product.moreImage) ||
    (product.moreImages && product.moreImages.length > 0 && product.moreImages) ||
    (product.images && product.images.length > 0 && product.images) ||
    [product.image];
  const [selectedImage, setSelectedImage] = useState(galleryImages[0]);

  // No AOS initialization

  React.useEffect(() => {
    if (!currentProduct) return;
    const newGallery =
      (product.moreImage && product.moreImage.length > 0 && product.moreImage) ||
      (product.moreImages && product.moreImages.length > 0 && product.moreImages) ||
      (product.images && product.images.length > 0 && product.images) ||
      [product.image];
    setSelectedImage(newGallery[0]);
  }, [currentProduct, product]);

  if (!currentProduct) {
    return (
      <div className="flex items-center justify-center text-xl font-semibold text-gray-600 h-96">
        Product not found.
      </div>
    );
  }

  const featureIcons = currentProduct.featureIcons || [
    "/house.svg",
    "/Premium.svg",
    "/oil.svg",
    "/global.svg",
  ];
  const applicationIcons = currentProduct.applicationIcons || [
    "/food.svg",
    "/snack.svg",
    "/leaf.svg",
    "/oildrop.svg",
    "/animal.svg",
    "/Confectionery.svg",
  ];

  // Utility for staggered animation delay style
  const animDelayStyle = (index) => ({
    animationDelay: `${index * 100}ms`,
  });

  return (
    <div className="bg-white">
      {/* Section 1: Product Overview */}
      <div className="flex justify-center w-[90%] relative left-[5%]">
        <div className="flex flex-col gap-10 max-w-[1536px] w-full lg:flex-row lg:gap-20">
          {/* Product Image */}
          <div className="flex flex-col items-center w-full gap-6 lg:w-1/2 animate-fadeInUp">
            <div className="bg-white rounded-2xl shadow-lg w-full h-64 sm:h-80 md:h-[400px] flex items-center justify-center">
              <img
                src={selectedImage}
                alt={currentProduct.title}
                className="w-full max-w-xs sm:max-w-md md:max-w-lg h-48 sm:h-64 md:h-[352px] object-contain"
                style={{ display: selectedImage ? "block" : "none" }}
              />
            </div>

            {/* Gallery */}
            {galleryImages && galleryImages.length > 1 && (
              <div className="flex flex-col w-full gap-4">
                <h4 className="text-lg font-semibold text-gray-700">More Images</h4>
                <div className="flex gap-4 pb-2 overflow-x-auto catagory-images">
                  {galleryImages.map((img, index) => (
                    <div
                      key={index}
                      className={`flex-shrink-0 h-20 sm:h-28 md:h-32 border rounded-lg w-28 sm:w-36 md:w-44 cursor-pointer hover:border-green-500 transition-all ${
                        selectedImage === img
                          ? "border-green-500 border-4"
                          : "border-gray-200"
                      } animate-zoomIn`}
                      style={{ animationDelay: `${300 + index * 50}ms` }}
                      onClick={() => setSelectedImage(img)}
                    >
                      <img
                        src={img}
                        alt={`Gallery view ${index + 1}`}
                        className="object-contain w-full h-full"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="flex flex-col w-full gap-6 lg:w-1/2 animate-fadeInUp" style={{ animationDelay: "150ms" }}>
            <h4 className="text-3xl font-bold text-gray-900">{currentProduct.title}</h4>
            <div className="flex items-center gap-2">
              <img src="/star.svg" alt="Rating" className="w-6 h-6" />
              <span className="font-semibold text-gray-500">
                ({currentProduct.reviews} reviews)
              </span>
            </div>
            <p className="font-bold leading-7 text-gray-700">
              {currentProduct.aboutProduct || currentProduct.description}
            </p>

            {/* Highlights */}
            <div className="flex flex-col gap-4">
              <h5 className="text-xl font-semibold text-gray-700">Key Highlights</h5>
              <ul className="flex flex-col gap-4">
                {currentProduct.highlights &&
                  currentProduct.highlights.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-4 animate-fadeInUp"
                      style={{ animationDelay: `${200 + index * 50}ms` }}
                    >
                      <img src="/right.svg" alt="" className="w-6 h-6 mt-1" />
                      <span className="font-semibold text-gray-700">{item}</span>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <br />
      {/* Section 2: Product Description */}
      <div className="flex flex-col items-center justify-center w-[90%] relative left-[5%]">
        {/* Tabs */}
        <div className="flex-wrap text-sm sm:text-base cursor-pointer w-full md:w-[70%] lg:w-[90%]">
          <div className="lg:w-[60%] md:w-full sm:w-full flex justify-between flex-wrap">
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
                } animate-fadeInDown`}
                style={{ animationDelay: `${150 + index * 50}ms` }}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
        <br />
        <div className="flex flex-col gap-12 lg:flex-row max-w-[1536px] w-full items-center justify-center">
          {/* Left Column */}
          <div className="w-full space-y-10 lg:w-[60%] animate-fadeInUp" style={{ animationDelay: "200ms" }}>
            {/* Overview */}
            <div>
              <h4 className="mb-4 text-2xl font-bold text-gray-900">{currentProduct.title} Overview</h4>
              <br />
              <p className="font-semibold leading-6 text-gray-700">{currentProduct.overview}</p>
            </div>
            <br />
            {/* Quality & Versatility */}
            <div>
              <h4 className="mb-3 text-xl font-semibold text-gray-900">Premium Quality & Versatility</h4>
              <br />
              <p className="font-semibold leading-6 text-gray-700">{currentProduct.premiumQuality}</p>
            </div>
            <br />
            {/* Why Choose */}
            <div>
              <h4 className="mb-4 text-xl font-semibold text-gray-900">Why Choose Agrolla's {currentProduct.title}?</h4>
              <br />
              <div className="grid gap-6 md:grid-cols-2">
                {currentProduct.features &&
                  currentProduct.features.slice(0, 4).map((feature, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 bg-gray-50 rounded-2xl h-[152px] w-full flex flex-col animate-zoomIn"
                      style={{ animationDelay: `${350 + index * 100}ms` }}
                    >
                      <img
                        src={featureIcons[index % featureIcons.length]}
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

          {/* Right Column */}
          <div className="w-full space-y-10 lg:w-[40%] animate-fadeInUp" style={{ animationDelay: "200ms" }}>
            {/* Certifications */}
            <div className="border border-gray-200 bg-gray-50 rounded-2xl w-full max-w-md h-auto min-h-[180px] p-4 animate-zoomIn" style={{ animationDelay: "400ms" }}>
              <br />
              <h4 className="text-lg font-semibold text-gray-900 w-[90%] relative left-[5%]">Quality Certifications</h4>
              <ul className="space-y-3">
                <br />
                {[
                  "ISO 22000:2018",
                  "HACCP Certified",
                  "GMP Compliant",
                  "FDA Registered",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-5 leading-8 w-[90%] relative left-[5%]"
                    style={{ animationDelay: `${450 + index * 50}ms` }}
                  >
                    <img src="/bookmark.svg" alt="" className="w-7 h-7" />
                    <span className="font-semibold text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <br />
            <br />
            <br />
            {/* Contact Box */}
            <div className="border border-gray-200 bg-gray-50 rounded-2xl w-full max-w-md h-auto min-h-[220px] p-4 animate-zoomIn" style={{ animationDelay: "500ms" }}>
              <br />
              <h4 className="mb-3 text-lg font-semibold text-gray-900 w-[90%] relative left-[5%]">
                Need More Information?
              </h4>
              <p className="mb-4 text-gray-700 w-[90%] relative left-[5%] font-semibold">
                Our agricultural experts are available to answer your questions
                and provide detailed information about our {currentProduct.title}.
              </p>
              <div className="space-y-3 w-[90%] relative left-[5%]">
                <br />
                <div className="flex items-center gap-2" style={{ animationDelay: "550ms" }}>
                  <img src="/call.svg" alt="" className="w-10 h-10" />
                  <span className="font-semibold text-gray-700">+1 (555) 123-4567</span>
                </div>
                <br />
                <div className="flex items-center gap-2" style={{ animationDelay: "600ms" }}>
                  <img src="/mail.svg" alt="" className="w-10 h-10" />
                  <span className="font-semibold text-gray-700">info@agrolla.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        {/* Applications */}
        <div className="w-full md:w-[100%] lg:w-[90%] flex flex-col items-start justify-start animate-fadeInUp " style={{ animationDelay: "300ms" }}>
          <h4 className="mb-4 text-xl font-semibold text-gray-900">Applications</h4>
          <br />
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {currentProduct.applications
              ? currentProduct.applications.split(",").map((app, index) => (
                  <div
                    key={index}
                    className="flex items-center border-gray-200 rounded-2xl h-20 sm:h-[72px] w-full border-2 animate-zoomIn"
                    style={{ animationDelay: `${350 + index * 50}ms` }}
                  >
                    <div className="flex items-center w-[90%] relative left-[5%]">
                      <img
                        src={applicationIcons[index % applicationIcons.length]}
                        alt=""
                        className="w-10 h-10 mr-3"
                      />
                      <span className="font-semibold text-gray-700">{app.trim()}</span>
                    </div>
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
