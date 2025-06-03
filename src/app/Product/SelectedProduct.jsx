"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../HomePage/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

import productsData from "../HomePage/productsData";

const SelectedProduct = ({ product }) => {
  const [currentProduct, setCurrentProduct] = useState(product);
  // Use moreImage/moreImages from product data, fallback to images or image
  const galleryImages =
    (product.moreImage && product.moreImage.length > 0 && product.moreImage) ||
    (product.moreImages && product.moreImages.length > 0 && product.moreImages) ||
    (product.images && product.images.length > 0 && product.images) ||
    [product.image];
  const [selectedImage, setSelectedImage] = useState(galleryImages[0]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  useEffect(() => {
    if (!currentProduct) return;
    // Always update selectedImage when product changes
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

  // Dynamic icons for features and applications
  const featureIcons = currentProduct.featureIcons || [
    "/house.svg",
    "/premium.svg",
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

  return (
    <div className="bg-white">
      {/* Section 1: Product Overview */}
      <div className="flex justify-center w-full">
        <div className="flex flex-col gap-10 max-w-[1536px] w-full lg:flex-row lg:gap-20">
          {/* Product Image */}
          <div
            className="flex flex-col items-center w-full gap-6 lg:w-1/2"
            data-aos="fade-right"
          >
            <div className="bg-white rounded-2xl shadow-lg w-full h-64 sm:h-80 md:h-[400px] flex items-center justify-center">
              <img
                src={selectedImage}
                alt={currentProduct.title}
                className="w-full max-w-xs sm:max-w-md md:max-w-lg h-48 sm:h-64 md:h-[352px] object-contain"
                style={{ display: selectedImage ? "block" : "none" }}
              />
            </div>

            {/* Additional Images Gallery */}
            {galleryImages && galleryImages.length > 1 && (
              <div className="flex flex-col w-full gap-4">
                <h4 className="text-lg font-semibold text-gray-700">More Images</h4>
                <div className="flex gap-4 overflow-x-auto catagory-images">
                  {galleryImages.map((img, index) => (
                    <div
                      key={index}
                      className={`flex-shrink-0 h-20 sm:h-28 md:h-32 transition-all border rounded-lg w-28 sm:w-36 md:w-44 cursor-pointer hover:border-green-500 ${
                        selectedImage === img
                          ? "border-green-500 border-4"
                          : "border-gray-200"
                      }`}
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

          {/* Rest of your component remains the same... */}
          {/* Product Details */}
          <div
            className="flex flex-col w-full gap-6 lg:w-1/2"
            data-aos="fade-left"
          >
            <h4 className="text-3xl font-bold text-gray-900">
              {currentProduct.title}
            </h4>
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
                      className="flex items-start gap-4"
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <img
                        src="/right.svg"
                        alt=""
                        className="w-6 h-6 mt-1"
                      />
                      <span className="font-semibold text-gray-700">{item}</span>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of your component remains unchanged... */}
      <br />
      {/* Section 2: Product Description */}
      <div className="flex flex-col items-center justify-center w-full">
        {/* Tabs */}
        <div
          className=" flex-wrap text-sm sm:text-base cursor-pointer w-full md:w-[70%] lg:w-[80%]"
          data-aos="fade-down"
        >
        <div className=" lg:w-[60%] md:w-full sm:w-full flex justify-between flex-wrap">
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
        </div>
        <br />
        <div className="flex flex-col gap-12 lg:flex-row max-w-[1536px] w-full items-center justify-center">
          {/* Left Column */}
          <div className="w-full space-y-10 lg:w-[60%]">
            {/* Overview */}
            <div data-aos="fade-up">
              <h4 className="mb-4 text-2xl font-bold text-gray-900">
                {currentProduct.title} Overview
              </h4>
              <br />
              <p className="font-semibold leading-6 text-gray-700">
                {currentProduct.overview}
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
                {currentProduct.premiumQuality}
              </p>
            </div>
            <br />
            {/* Why Choose */}
            <div data-aos="fade-up" data-aos-delay="200">
              <h4 className="mb-4 text-xl font-semibold text-gray-900">
                Why Choose Agrolla's {currentProduct.title}?
              </h4>
              <br />
              <div className="grid gap-6 md:grid-cols-2">
                {currentProduct.features &&
                  currentProduct.features.slice(0, 4).map((feature, index) => (
                    <div
                      key={index}
                      className="border-1 border-gray-200 bg-gray-50 rounded-2xl h-[152px] w-[100%] flex flex-col"
                      data-aos="zoom-in"
                      data-aos-delay={index * 100}
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
          {/* Right Column (Sidebar) */}
          <div className="w-full space-y-10 lg:w-[40%]">
            {/* Certifications */}
            <div
              className="border-gray-200 border-1 bg-gray-50 rounded-2xl w-full max-w-md h-auto min-h-[180px] p-4"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <br />
              <h4 className="text-lg font-semibold text-gray-900 w-[90%] relative left-[5%]">
                Quality Certifications
              </h4>
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
                    data-aos="fade-left"
                    data-aos-delay={150 + index * 50}
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
            <div
              className="border-gray-200 border-1 bg-gray-50 rounded-2xl w-full max-w-md h-auto min-h-[220px] p-4"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <br />
              <h4 className="mb-3 text-lg font-semibold text-gray-900 w-[90%] relative left-[5%]">
                Need More Information?
              </h4>
              <p className="mb-4 text-gray-700 w-[90%] relative left-[5%] font-semibold">
                Our agricultural experts are available to answer your questions
                and provide detailed information about our{" "}
                {currentProduct.title}.
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
        <div className=" w-full md:w-[100%] lg:w-[85%]  flex flex-col items-start justify-start" data-aos="fade-up">
          <h4 className="mb-4 text-xl font-semibold text-gray-900 ">
            Applications
          </h4>
          <br />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {currentProduct.applications
              ? currentProduct.applications.split(",").map((app, index) => (
                <div
                    key={index}
                    className="flex items-center border-gray-200 rounded-2xl h-20 sm:h-[72px] lg:w-[300px] border-2"
                    data-aos="zoom-in"
                    data-aos-delay={index * 50}
                  >
                <div className="flex items-center w-[90%] relative left-[5%]">
                    <img
                      src={applicationIcons[index % applicationIcons.length]}
                      alt=""
                      className="w-10 h-10 mr-3"
                    />
                    <span className="font-semibold text-gray-700">
                      {app.trim()}
                    </span>
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