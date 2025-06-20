"use client";
import React, { useEffect, useState } from "react";

const SelectedProduct = ({ product }) => {
  const [currentProduct, setCurrentProduct] = useState(product);
  const [activeTab, setActiveTab] = useState("Product Description");

  // Handle different image field names between static and dynamic data
  const galleryImages = React.useMemo(() => {
    if (!product) return [];

    // For dynamic data: check more_image, then images, then fallback to image
    const moreImages =
      product.more_image?.length > 0 ? product.more_image : null;
    const regularImages = product.images?.length > 0 ? product.images : null;
    const singleImage = product.image ? [product.image] : [];

    return moreImages || regularImages || singleImage;
  }, [product]);

  const [selectedImage, setSelectedImage] = useState(galleryImages[0]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  useEffect(() => {
    if (!currentProduct) return;
    setSelectedImage(galleryImages[0]);
  }, [currentProduct, product, galleryImages]);

  if (!currentProduct) {
    return (
      <div className="flex items-center justify-center text-xl font-semibold text-gray-600 h-96">
        Product not found.
      </div>
    );
  }

  // Handle different field names between static and dynamic data
  const getProductField = (staticField, dynamicField) => {
    return currentProduct[dynamicField] || currentProduct[staticField] || "";
  };

  // Parse highlights - handle both array and string formats
  const [highlights, setHighlights] = useState([]);

  useEffect(() => {
    if (product) {
      // Parse highlights from the product data
      setHighlights(parseHighlights(product.highlights));
    }
  }, [product]); // Dependency is `product`, so this effect runs when the `product` changes

  const parseHighlights = (highlights) => {
    if (!highlights) return [];

    // If highlights is an array with a single string, handle this case
    if (Array.isArray(highlights) && highlights.length === 1) {
      highlights = highlights[0]; // Get the first (and only) element in the array
    }

    if (typeof highlights === "string") {
      // Using regex to split by commas not inside quotes
      const regex = /,(?=(?:[^"]*"[^"]*")*[^"]*$)/g;
      const cleanHighlights = highlights
        .split(regex) // Split based on commas not inside quotes
        .map((item) => item.trim().replace(/^"|"$/g, "")); // Remove leading and trailing quotes
      return cleanHighlights.filter((item) => item.length > 0); // Filter out empty strings
    }

    return [];
  };
  // Parse features - handle both array and string formats
  const parseFeatures = () => {
    const features = currentProduct.features;
    if (!features) return [];

    if (Array.isArray(features)) {
      return features;
    }

    if (typeof features === "string") {
      return features
        .split(",")
        .map((item) => item.trim().replace(/^"|"$/g, ""))
        .filter((item) => item.length > 0);
    }

    return [];
  };

  const features = parseFeatures();

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
    <div className="relative overflow-hidden bg-white">
      {/* Decorative Side Images */}
      {galleryImages.length >= 2 && (
        <>
          <img
            src={galleryImages[1]}
            alt="Side Decoration Left"
            className="hidden sm:block absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 w-32 h-32 opacity-30 rotate-[-12deg] object-contain z-0"
          />
          <img
            src={galleryImages[2] || galleryImages[0]}
            alt="Side Decoration Right"
            className="hidden sm:block absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 w-32 h-32 opacity-30 rotate-[12deg] object-contain z-0"
          />
        </>
      )}

      {/* Product Content */}
      <div className="relative z-10">
        <br />
        <br />
        <br />
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
                  <div className="flex gap-4 pb-2 overflow-x-auto">
                    {galleryImages.map((img, index) => (
                      <div
                        key={index}
                        className={`flex-shrink-0 h-20 sm:h-28 md:h-32 border rounded-lg w-28 sm:w-36 md:w-44 cursor-pointer hover:border-green-500 transition-all ${
                          selectedImage === img
                            ? "border-green-500 border-4"
                            : "border-gray-200"
                        }`}
                        onClick={() => setSelectedImage(img)}
                      >
                        <img
                          src={img}
                          alt={`Gallery ${index + 1}`}
                          className="object-contain w-full h-full rounded-lg"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right: Product Details */}
            <div className="flex flex-col w-full gap-6 lg:w-1/2">
              <h4 className="text-3xl font-bold text-gray-900">
                {currentProduct.title}
              </h4>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <span className="font-semibold text-gray-500">
                  ({currentProduct.reviews || 0} reviews)
                </span>
              </div>
              <p className="font-semibold leading-7 text-gray-700">
                {getProductField("aboutProduct", "about_product") ||
                  currentProduct.description ||
                  "No description available."}
              </p>

              <div className="flex flex-col gap-4">
                <h5 className="text-xl font-semibold text-gray-700">
                  Key Highlights
                </h5>
                <ul className="flex flex-col gap-4">
                  {highlights.length > 0 ? (
                    <ul>
                      {highlights.map((item, index) => (
                        <li key={index} className="flex items-start gap-4">
                          <span className="text-green-500 text-xl">✓</span>
                          <span className="font-semibold text-gray-700">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
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

        {/* Tabs Section */}
        <div className="flex flex-col items-center justify-center w-[90%] relative left-[5%] mt-16">
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
                  className={`px-4 py-3 font-semibold cursor-pointer ${
                    activeTab === label
                      ? "text-green-700 border-b-2 border-green-700"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
          <br />

          {/* Tabs Content */}
          <div className="flex flex-col gap-12 lg:flex-row max-w-[1536px] w-full items-start justify-center">
            {/* Left Tab Content */}
            <div className="w-full space-y-10 lg:w-[60%]">
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
                    <br />
                    <h4 className="mb-3 text-xl font-semibold text-gray-900">
                      Premium Quality & Versatility
                    </h4>
                    <p className="font-semibold leading-7 text-gray-700">
                      {getProductField("premiumQuality", "premium_quality") ||
                        "No quality information available."}
                    </p>
                  </div>
                  <div>
                    <br />
                    <h4 className="mb-4 text-xl font-semibold text-gray-900">
                      Why Choose Our {currentProduct.title}?
                    </h4>
                    <br />
                    <div className="grid gap-6 md:grid-cols-2">
                      {features.length > 0 ? (
                        features.slice(0, 4).map((feature, index) => (
                          <div
                            key={index}
                            className="border border-gray-200 bg-gray-50 rounded-2xl h-[152px] flex flex-col items-center justify-center p-4"
                          >
                            <div className="w-full text-center">
                              <img
                                src={featureIcons[index % featureIcons.length]}
                                alt=""
                                className="w-10 h-10 mx-auto mb-2 rounded-full"
                              />
                              <h5 className="text-lg font-semibold text-gray-900 mb-2">
                                {feature.split(" ").slice(0, 2).join(" ")}
                              </h5>
                              <p className="text-sm font-medium text-gray-700">
                                {feature}
                              </p>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p className="text-gray-500">
                          No features information available.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "Specifications" && (
                <div>
                  <h4 className="mb-4 text-2xl font-bold text-gray-900">
                    Specifications
                  </h4>
                  <div className="font-semibold text-gray-700 whitespace-pre-line">
                    {currentProduct.specifications ||
                      "No specifications available."}
                  </div>
                </div>
              )}

              {activeTab === "Packaging & Shipping" && (
                <div>
                  <h4 className="mb-4 text-2xl font-bold text-gray-900">
                    Packaging & Shipping
                  </h4>
                  <div className="font-semibold leading-7 text-gray-700 whitespace-pre-line">
                    {getProductField(
                      "packagingShipping",
                      "packaging_shipping"
                    ) || "Packaging information not specified."}
                  </div>
                </div>
              )}

              {activeTab === "Nutritional Information" && (
                <div>
                  <h4 className="mb-4 text-2xl font-bold text-gray-900">
                    Nutritional Information
                  </h4>
                  <div className="font-semibold text-gray-700 whitespace-pre-line">
                    {getProductField("nutritionalInfo", "nutritional_info") ||
                      "No nutritional information available."}
                  </div>
                </div>
              )}
            </div>

            {/* Right Sidebar Info */}
            <div className="w-full space-y-10 lg:w-[40%]">
              <div className="p-6 border border-gray-200 bg-gray-50 rounded-2xl">
                <h4 className="mb-4 text-lg font-semibold text-gray-900">
                  Quality Certifications
                </h4>
                <ul className="space-y-3">
                  {[
                    "ISO 22000:2018",
                    "HACCP Certified",
                    "GMP Compliant",
                    "FDA Registered",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="text-green-500 text-lg">✓</span>
                      <span className="font-semibold text-gray-700">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 border border-gray-200 bg-gray-50 rounded-2xl">
                <h4 className="mb-4 text-lg font-semibold text-gray-900">
                  Need More Information?
                </h4>
                <p className="mb-6 font-semibold text-gray-700">
                  Our agricultural experts are available to answer your
                  questions and provide detailed information about our{" "}
                  {currentProduct.title}.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-green-500 text-xl">📞</span>
                    <span className="font-semibold text-gray-700">
                      +1 (555) 123-4567
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-500 text-xl">✉️</span>
                    <span className="font-semibold text-gray-700">
                      info@company.com
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Applications Section */}
          <div className="w-full lg:w-[90%] flex flex-col items-start mt-16">
            <h4 className="mb-6 text-xl font-semibold text-gray-900">
              Applications
            </h4>
            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {currentProduct.applications ? (
                currentProduct.applications
                  .split(/,(?![^"]*"[^"]*$)/) // Split by commas that aren't inside quotes
                  .map((app, index) => (
                    <div
                      key={index}
                      className="flex items-center border-gray-200 rounded-2xl h-20 w-full border-2 p-4"
                    >
                      <div className="flex items-center w-full">
                        <img
                          src={
                            applicationIcons[index % applicationIcons.length]
                          }
                          alt=""
                          className="w-10 h-10 mr-3 rounded-full"
                        />
                        <span className="font-semibold text-gray-700">
                          {app.trim()}
                        </span>
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
    </div>
  );
};

export default SelectedProduct;
