"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../HomePage/Navbar";
import productsData from "../HomePage/productsData";

const SelectedProduct = ({ product }) => {
  const [currentProduct, setCurrentProduct] = useState(product);
  const [activeTab, setActiveTab] = useState("Product Description");

  const galleryImages = (product.moreImage?.length > 0 && product.moreImage) ||
    (product.moreImages?.length > 0 && product.moreImages) ||
    (product.images?.length > 0 && product.images) || [product.image];

  const [selectedImage, setSelectedImage] = useState(galleryImages[0]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  useEffect(() => {
    if (!currentProduct) return;
    const newGallery = (product.moreImage?.length > 0 && product.moreImage) ||
      (product.moreImages?.length > 0 && product.moreImages) ||
      (product.images?.length > 0 && product.images) || [product.image];
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

  return (
    <div className="bg-white">
      <div className="flex justify-center w-[90%] relative left-[5%]">
        <div className="flex flex-col gap-10 max-w-[1536px] w-full lg:flex-row lg:gap-20">
          {/* Left: Product Image */}
          <div className="flex flex-col items-center w-full gap-6 lg:w-1/2 animate-fadeInUp">
            <div className="bg-white rounded-2xl shadow-lg w-full h-64 sm:h-80 md:h-[400px] flex items-center justify-center">
              <img
                src={selectedImage}
                alt={currentProduct.title}
                className="w-full max-w-xs sm:max-w-md md:max-w-lg h-48 sm:h-64 md:h-[352px] object-contain"
              />
            </div>

            {galleryImages.length > 1 && (
              <div className="flex flex-col w-full gap-4">
                <h4 className="text-lg font-semibold text-gray-700">
                  More Images
                </h4>
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
                        alt={`Gallery ${index + 1}`}
                        className="object-contain w-full h-full"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          {/* Right: Product Details */}
          <div
            className="flex flex-col w-full gap-6 lg:w-1/2 animate-fadeInUp"
            style={{ animationDelay: "150ms" }}
          >
            <h4 className="text-3xl font-bold text-gray-900">
              {currentProduct.title}
            </h4>
            <div className="flex items-center gap-2">
              <img src="/star.svg" alt="Rating" className="w-6 h-6" />
              <span className="font-semibold text-gray-500">
                ({currentProduct.reviews || 0} reviews)
              </span>
            </div>
            <p className="font-bold leading-7 text-gray-700">
              {currentProduct.aboutProduct ||
                currentProduct.description ||
                "No description available."}
            </p>

            <div className="flex flex-col gap-4">
              <h5 className="text-xl font-semibold text-gray-700">
                Key Highlights
              </h5>
              <ul className="flex flex-col gap-4">
                {currentProduct.highlights?.length > 0 ? (
                  currentProduct.highlights.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-4 animate-fadeInUp"
                      style={{ animationDelay: `${200 + index * 50}ms` }}
                    >
                      <img src="/right.svg" alt="" className="w-6 h-6 mt-1" />
                      <span className="font-semibold text-gray-700">
                        {item}
                      </span>
                    </li>
                  ))
                ) : (
                  <li className="font-semibold text-gray-500">
                    No highlights available.
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Tabs */}
      <div className="flex flex-col items-center justify-center w-[90%] relative left-[5%]">
        {" "}
        <br />
        <div className="flex-wrap text-sm sm:text-base cursor-pointer w-full md:w-[70%] lg:w-[90%]">
          <div className="lg:w-[60%] flex justify-between flex-wrap">
            {[
              "Product Description",
              "Specifications",
              "Packaging & Shipping",
              "Nutritional Information",
            ].map((label, index) => (
              <span
                key={index}
                onClick={() => handleTabClick(label)}
                className={`px-4 py-3 font-semibold ${
                  activeTab === label
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
        {/* Tabs Content Area */} <br />
        <div className="flex flex-col gap-12 lg:flex-row max-w-[1536px] w-full items-start justify-center">
          {/* Left Column for Tabs */}
          <div className="w-full space-y-10 lg:w-[60%] animate-fadeInUp">
            {/* Product Description */}
            {activeTab === "Product Description" && (
              <div className="space-y-6">
                <div>
                  <h4 className="mb-4 text-2xl font-bold text-gray-900">
                    {currentProduct.title} Overview
                  </h4>
                  <p className="font-semibold leading-7 text-gray-700">
                    {currentProduct.overview || "No overview available."}
                  </p>
                </div>
                <div>
                  {" "}
                  <br />
                  <h4 className="mb-3 text-xl font-semibold text-gray-900">
                    Premium Quality & Versatility
                  </h4>
                  <p className="font-semibold leading-7 text-gray-700">
                    {currentProduct.premiumQuality ||
                      "No quality information available."}
                  </p>
                </div>
                <div>
                  <br />
                  <h4 className="mb-4 text-xl font-semibold text-gray-900">
                    Why Choose Agrolla's {currentProduct.title}?
                  </h4>{" "}
                  <br />
                  <div className="grid gap-6 md:grid-cols-2">
                    {currentProduct.features?.length > 0 ? (
                      currentProduct.features
                        .slice(0, 4)
                        .map((feature, index) => (
                          <div
                            key={index}
                            className="border border-gray-200 bg-gray-50 rounded-2xl h-[152px] flex flex-col items-center justify-center animate-zoomIn"
                            style={{ animationDelay: `${350 + index * 100}ms` }}
                          >
                            <div className="w-[90%]">
                              <img
                                src={featureIcons[index % featureIcons.length]}
                                alt=""
                                className="w-10 h-10"
                              />
                              <h5 className="text-lg font-semibold leading-10 text-gray-900">
                                {feature.split(" ")[0]}
                              </h5>
                              <p className="mt-1 font-semibold text-gra10 y-700 leading-">
                                {feature}
                              </p>
                            </div>
                          </div>
                        ))
                    ) : (
                      <p className="text-gray-500">
                        No features info available.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}
{/* Specifications */}
{activeTab === "Specifications" && (
  <div>
    <h4 className="mb-4 text-2xl font-bold text-gray-900">Specifications</h4>
    {Array.isArray(currentProduct.specifications) ? (
      <ul className="pl-5 space-y-2 font-semibold text-gray-700 list-disc list-inside">
        {currentProduct.specifications.map((spec, index) => (
          <li key={index}>{spec}</li>
        ))}
      </ul>
    ) : typeof currentProduct.specifications === "string" ? (
      <p className="font-semibold text-gray-700">
        {currentProduct.specifications}
      </p>
    ) : (
      <p className="font-semibold text-gray-700">
        No specifications available.
      </p>
    )}
  </div>
)}

{/* Packaging & Shipping */}
{activeTab === "Packaging & Shipping" && (
  <div>
    <h4 className="mb-4 text-2xl font-bold text-gray-900">
      Packaging & Shipping
    </h4>
    {Array.isArray(currentProduct.packagingShipping) ? (
      <ul className="pl-5 space-y-2 font-semibold text-gray-700 list-disc list-inside">
        {currentProduct.packagingShipping.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    ) : (
      <p className="font-semibold leading-7 text-gray-700">
        {currentProduct.packagingShipping ||
          "Packaging information not specified."}
      </p>
    )}
  </div>
)}

            {/* Nutritional Information */}
            {activeTab === "Nutritional Information" && (
              <div>
                <h4 className="mb-4 text-2xl font-bold text-gray-900">
                  Nutritional Information
                </h4>
                {Array.isArray(currentProduct.nutritionalInfo) ? (
                  <ul className="pl-0 space-y-4 list-none">
                    {currentProduct.nutritionalInfo.map((info, index) => (
                      <li key={index} className="flex items-start gap-4">
                        <img src="/right.svg" alt="" className="w-5 h-5 mt-1" />
                        <p className="font-semibold text-gray-700">{info}</p>
                      </li>
                    ))}
                  </ul>
                ) : typeof currentProduct.nutritionalInfo === "string" ? (
                  <p className="font-semibold text-gray-700">
                    {currentProduct.nutritionalInfo}
                  </p>
                ) : (
                  <p className="font-semibold text-gray-700">
                    No nutritional info available.
                  </p>
                )}
              </div>
            )}
          </div>
          {/* Right Column: Certifications & Contact */}
          <div className="w-full space-y-10 lg:w-[40%] animate-fadeInUp">
            <div className="p-4 border border-gray-200 bg-gray-50 rounded-2xl h-[200px] flex items-center">
              <div className="w-[90%] relative left-[5%]">
                <h4 className="mb-3 text-lg font-semibold text-gray-900">
                  Quality Certifications
                </h4>
                <ul className="space-y-3">
                  {[
                    "ISO 22000:2018",
                    "HACCP Certified",
                    "GMP Compliant",
                    "FDA Registered",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-5 leading-8"
                    >
                      <img src="/bookmark.svg" alt="" className="w-7 h-7" />
                      <span className="font-semibold text-gray-700">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <br />
            <br />
            <div className="p-4 border border-gray-200 bg-gray-50 rounded-2xl h-[300px]">
              <div className="w-[90%] relative left-[5%] top-5">
                <h4 className="mb-3 text-lg font-semibold leading-10 text-gray-900">
                  Need More Information?
                </h4>
                <p className="mb-4 font-semibold text-gray-700">
                  Our agricultural experts are available to answer your
                  questions and provide detailed information about our{" "}
                  {currentProduct.title}.
                </p>
                <br />
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <img src="/call.svg" alt="" className="w-10 h-10" />
                    <span className="font-semibold text-gray-700">
                      +1 (555) 123-4567
                    </span>
                  </div>{" "}
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
        </div>
        {/* Applications */}
        <br />
        <div className="w-full lg:w-[90%] flex flex-col items-start mt-10">
          <h4 className="mb-4 text-xl font-semibold text-gray-900">
            Applications
          </h4>{" "}
          <br />
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {currentProduct.applications ? (
              currentProduct.applications.split(",").map((app, index) => (
                <div
                  key={index}
                  className="flex items-center border-gray-200 rounded-2xl h-20 sm:h-[72px] w-full border-2 animate-zoomIn"
                >
                  <div className="flex items-center w-[90%] relative left-[5%]">
                    <img
                      src={applicationIcons[index % applicationIcons.length]}
                      alt=""
                      className="w-10 h-10 mr-3"
                    />
                    <span className="font-semibold text-gray-700">
                      {app.trim()}
                    </span>{" "}
                    <br />
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-3 p-4 text-center text-gray-500">
                No applications information available.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedProduct;
