"use client";
import { useEffect, useState } from "react";
import "@/app/HomePage/Homepage.css";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

// Fixed product data (removed duplicate)
const productsData = [
  {
    id: 1,
    title: "Ground Nuts",
    description:
      "Premium quality ground nuts, carefully selected and processed to maintain their natural freshness and nutritional value.",
    category: "Oilseeds",
    image: "/ground-nuts.png",
    rating: 18,
  },
  {
    id: 2,
    title: "Bold Peanuts",
    description:
      "Premium quality bold peanuts with rich flavor and crunchy texture. Perfect for snacking and cooking.",
    category: "Oilseeds",
    image: "/Bold-Peanuts.png",
    rating: 18,
  },
  {
    id: 3,
    title: "TJ Peanuts",
    description:
      "Special TJ variety peanuts known for their exceptional taste and nutritional value. Ideal for healthy snacking.",
    category: "Oilseeds",
    image: "/TJ-Peanuts.png",
    rating: 32,
  },
  {
    id: 4,
    title: "Java Peanuts",
    description:
      "Imported Java variety peanuts with distinctive flavor profile and smooth texture. Perfect for gourmet recipes.",
    category: "Oilseeds",
    image: "/Java-Peanuts.png",
    rating: 27,
  },
  {
    id: 5,
    title: "Roasted Blanch Peanuts",
    description:
      "Carefully roasted and blanched peanuts with a delicate flavor and smooth texture. Great for baking and snacking.",
    category: "Oilseeds",
    image: "/Roasted-Blanch-Peanuts.png",
    rating: 21,
  },
  {
    id: 6,
    title: "Roasted Split Peanuts",
    description:
      "Split and roasted peanuts with enhanced flavor and aroma. Perfect for garnishing and cooking applications.",
    category: "Oilseeds",
    image: "/Roasted-Split-Peanuts.png",
    rating: 29,
  },
  {
    id: 7,
    title: "Coriander seeds",
    description:
      "Coriander seeds are the dried, brown fruits of the coriander plant, Coriandrum sativum. They have a mild, sweet.",
    category: "Spices",
    image: "/Coriander-seed.png",
    rating: 18,
  },
  {
    id: 8,
    title: "Fennel seeds",
    description:
      "Fennel seeds are small, elongated, greenish-brown to yellowish-brown seeds with a distinct licorice-like flavor.",
    category: "Spices",
    image: "/fennel.png",
    rating: 18,
  },
  {
    id: 9,
    title: "Green millet",
    description:
      "Green millet, also known as bajra or pearl millet, is a small, round, pale yellow to grayish-green grain that thrives in dry, low-water conditions.",
    category: "Other Grains",
    image: "/millet.png",
    rating: 18,
  },
  {
    id: 10,
    title: "Cummin Seeds",
    description:
      "Cumin seeds are small, dried fruits (actually schizocarps) of the Cuminum cyminum plant, a member of the parsley family.",
    category: "Spices",
    image: "/cumin-seed.png",
    rating: 18,
  },
  {
    id: 11,
    title: "Soyabeans",
    description:
      "Soybeans are a versatile legume, known for their high protein and oil content.",
    category: "Other Grains",
    image: "/soyabean.png",
    rating: 18,
  },
  {
    id: 12,
    title: "Chickpea",
    description:
      "Chickpeas are a versatile and nutritious legume widely consumed worldwide.",
    category: "Pulses",
    image: "/chickpea.png",
    rating: 18,
  },
  {
    id: 13,
    title: "Rise",
    description:
      "Rice is a staple food for over half the world's population, particularly in Asia.",
    category: "Pulses",
    image: "/rise.png",
    rating: 27,
  },
  {
    id: 14,
    title: "Sesame Seeds",
    description:
      "Sesame seeds are small, oil-rich seeds that are the edible seed of the Sesamum indicum plant.",
    category: "Oilseeds",
    image: "/Sesame.png",
    rating: 27,
  },
];

export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  const categoryImages = {
    "All Products": "/all-product.svg",
    Oilseeds: "/oilseed.svg",
    Pulses: "/pulses.svg",
    "Other Grains": "/grain.svg",
    Spices: "/spices.svg",
  };

  const filteredProducts = productsData
    .filter(
      (product) =>
        selectedCategory === "All Products" ||
        product.category === selectedCategory
    )
    .map((product) => ({
      ...product,
      rating: Math.random() > 0.5 ? 4.5 : 4,
    }));

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    console.log("Category Changed:", selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      <div className="relative top-20 w-[90%] mx-auto">
        {/* Header */}
        <div className="text-center lg:relative lg:left-30" data-aos="fade-up">
          <div className="flex items-center justify-center space-x-3">
            <hr className="w-10 border border-[#2E7D32]" />
            <p className="text-xs sm:text-sm text-[#2E7D32] font-medium uppercase tracking-wider">
              Featured Products
            </p>
            <hr className="w-10 border border-[#2E7D32]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] mt-6 leading-snug sm:leading-tight">
            Premium <span className="text-[#2E7D32]">Agricultural</span>{" "}
            Products
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-[#4B5563] font-normal mt-6 leading-relaxed sm:leading-loose">
            Agrolla Impex is a distinguished One Star Export House and a leading
            <br className="hidden md:inline" />
            manufacturer and exporter of peanuts, oilseeds, grains, and pulses.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 mt-16 catagory-container h-[1000px]">
          {/* Mobile Category Dropdown */}
          <div className="w-full px-4 lg:hidden" data-aos="fade-right">
            <div className="p-4 shadow-md bg-stone-50 rounded-xl">
              <div className="flex items-center mb-4">
                <img
                  src="/catagory.svg"
                  alt="Category Icon"
                  className="w-10 h-10"
                />
                <span className="ml-3 text-xl font-semibold text-gray-800">
                  Select Category
                </span>
              </div>
              <div className="relative">
                <select
                  id="categorySelect"
                  value={selectedCategory}
                  onChange={(e) => handleCategoryClick(e.target.value)}
                  className="w-full h-[45px] appearance-none bg-white p-3 rounded-lg border border-gray-300 shadow-inner text-gray-800 transition duration-200 text-center text-xl font-semibold"
                >
                  {Object.keys(categoryImages).map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Desktop only */}
          <aside className="hidden lg:block lg:w-[20%] bg-stone-50 rounded-xl shadow-lg catagory-aside h-[900px]" data-aos="fade-right">
            <div className="flex items-center px-4 pt-4">
              <img src="/catagory.svg" alt="Category Icon" className="h-12" />
              <span className="ml-4 text-2xl font-semibold">Categories</span>
            </div>
            <ul className="px-4 pb-6 mt-6 space-y-4">
              {Object.keys(categoryImages).map((cat) => (
                <li
                  key={cat}
                  onClick={() => handleCategoryClick(cat)}
                  className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer transition hover:bg-green-100 ${
                    selectedCategory === cat ? "bg-green-200" : ""
                  }`}
                >
                  <img src={categoryImages[cat]} alt={cat} className="h-14" />
                  <div>
                    <p className="text-lg font-semibold text-gray-800">{cat}</p>
                    <p className="text-sm text-gray-600">
                      {cat === "All Products"
                        ? "View all items"
                        : cat === "Oilseeds"
                        ? "Premium quality seeds"
                        : cat === "Pulses"
                        ? "Fresh & organic"
                        : cat === "Other Grains"
                        ? "Whole & natural"
                        : "Pure & aromatic"}
                    </p>
                  </div>
                </li>
              ))}
              <li className="h-[240px] bg-[#F2F9F2] rounded-2xl p-4 mt-6 hidden lg:block">
                <div className="flex items-center h-12">
                  <img src="/help.svg" alt="Help Icon" />
                  <p className="ml-3 text-2xl font-bold">Need Help?</p>
                </div>
                <p className="text-[#4B5563] text-xl mt-4">
                  Contact our customer support team anytime
                </p>
                <p className="text-[#4CAF50] text-xl mt-2">Contact Support →</p>
              </li>
            </ul>
          </aside>

          {/* Product Grid */}
          <section className="w-full lg:w-[80%] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 p-2 catagory-section h-[980px]">
            {filteredProducts.map((product, index) => {
              const fullStars = Math.floor(product.rating);
              const hasHalfStar = product.rating % 1 >= 0.5;
              const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl h-[450px] card cursor-pointer"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="object-contain w-full h-48 rounded-xl"
                  />
                  <div className="flex items-center gap-1 mt-4">
                    {[...Array(fullStars)].map((_, i) => (
                      <FaStar key={`full-${i}`} className="text-yellow-500" />
                    ))}
                    {hasHalfStar && (
                      <FaStarHalfAlt className="text-yellow-500" />
                    )}
                    {[...Array(emptyStars)].map((_, i) => (
                      <FaRegStar key={`empty-${i}`} className="text-gray-300" />
                    ))}
                    <span className="text-[#6B7280] text-lg font-semibold">
                      {product.rating * 4}
                    </span>
                  </div>
                  <h3 className="mt-4 text-2xl font-bold text-gray-800">
                    {product.title}
                  </h3>
                  <p className="text-lg text-[#6B7280] font-semibold mt-2">
                    {product.description}
                  </p>
                </div>
              );
            })}
          </section>
        </div>
      </div>
    </>
  );
}
