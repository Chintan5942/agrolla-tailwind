"use client";
import { useEffect, useMemo, useState } from "react";
import "../HomePage/Homepage.css";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import { supabase } from "@/lib/supabaseClient";

export default function Categories({ onCategorySelect }) {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(["All Products"]);
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: false });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }, [selectedCategory]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const { data, error } = await supabase.from("products").select("*");
      if (!error) {
        setProducts(data);

        const uniqueCategories = [
          "All Products",
          ...Array.from(new Set(data.map((p) => p.category).filter(Boolean))),
        ];
        setCategories(uniqueCategories);
        setLoading(false);
      } else {
        console.error("Failed to fetch products:", error.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const categoryImages = {
    "All Products": "/all-product.svg",
    Oilseeds: "/oilseed.svg",
    Pulses: "/pulses.svg",
    "Other Grains": "/grain.svg",
    Spices: "/spices.svg",
  };

  const categoryCounts = useMemo(() => {
    return categories.reduce((acc, category) => {
      acc[category] =
        category === "All Products"
          ? products.length
          : products.filter((p) => p.category === category).length;
      return acc;
    }, {});
  }, [products, categories]);

  const filteredProducts = useMemo(() => {
    return products
      .filter(
        (product) =>
          selectedCategory === "All Products" ||
          product.category === selectedCategory
      )
      .map((product) => ({
        ...product,
        rating: product.rating || 4.5,
      }));
  }, [products, selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (onCategorySelect && category !== "All Products") {
      onCategorySelect(category);
    }
    setTimeout(() => AOS.refresh(), 100);
  };

  return (
    <div className="relative mt-[100px] w-[90%] left-[5%]">
      {/* Header */}
      <div className="text-center" data-aos="fade-down">
        <div className="flex items-center justify-center w-full gap-3">
          <hr className="w-10 border border-[#2E7D32]" />
          <p className="text-xs sm:text-sm text-[#2E7D32] font-medium uppercase tracking-wider">
            Featured Products
          </p>
          <hr className="w-10 border border-[#2E7D32]" />
        </div>
        <br />
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] mt-6 leading-snug sm:leading-tight">
          Premium <span className="text-[#2E7D32]">Agricultural</span> Products
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-[#4B5563] font-normal mt-6 leading-relaxed sm:leading-loose">
          Agrolla Impex is a distinguished One Star Export House and a leading
          <br className="hidden md:inline" />
          manufacturer and exporter of peanuts, oilseeds, grains, and pulses.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 max-w-[1536px] catagory-container h-[1100px] relative left-[-2.5%]">
        {/* Mobile/Tablet Dropdown */}
        <div className="w-full px-4 lg:hidden" data-aos="fade-right">
          <div className="p-4 shadow-md bg-stone-50 rounded-xl">
            <br />
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
            <br />
            <div className="relative">
              <select
                id="categorySelect"
                value={selectedCategory}
                onChange={(e) => handleCategoryClick(e.target.value)}
                className="w-full appearance-none bg-white p-3 rounded-lg border border-gray-300 shadow-inner text-gray-800 transition duration-200 text-center text-xl font-semibold"
              >
                {Object.keys(categoryImages).map((cat) => (
                  <option key={cat} value={cat}>
                    {cat} ({categoryCounts[cat]})
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar (Desktop) */}
        <aside
          className="w-full lg:w-[25%] bg-stone-50 rounded-xl shadow-lg catagory-aside h-auto lg:h-[900px] catagory-section overflow-scroll"
          data-aos="fade-right"
        >
          <div className="flex items-center">
            <img
              src="/catagory.svg"
              alt="Category Icon"
              className="h-10 sm:h-12 lg:h-14"
            />
            <span className="ml-4 text-lg font-semibold sm:text-xl lg:text-2xl">
              Categories
            </span>
          </div>

          <ul className="px-2 pb-6 mt-6 space-y-4 lg:px-4">
            {Object.keys(categoryImages).map((cat, index) => (
              <li
                key={cat}
                onClick={() => handleCategoryClick(cat)}
                className={`flex items-center gap-3 lg:gap-4 p-2 lg:p-3 rounded-lg cursor-pointer transition hover:bg-green-100 ${
                  selectedCategory === cat ? "bg-green-200" : ""
                }`}
                data-aos="fade-right"
                data-aos-delay={index * 50}
              >
                <img
                  src={categoryImages[cat]}
                  alt={cat}
                  className="h-10 sm:h-12 lg:h-14 catImg"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-800 sm:text-base lg:text-lg">
                    {cat}{" "}
                    <span className="text-xs text-gray-500 sm:text-sm">
                      ({categoryCounts[cat]})
                    </span>
                  </p>
                  <p className="text-xs text-gray-600 sm:text-sm lg:text-base">
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

            {/* Need Help Section */}
            <li
              className="h-[180px] lg:h-[220px] bg-[#F2F9F2] rounded-2xl p-3 lg:p-4 mt-6 hidden lg:block"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex items-center h-10 lg:h-12">
                <img src="/help.svg" alt="Help Icon" className="h-8 lg:h-10" />
                <p className="ml-3 text-lg font-bold lg:text-xl">Need Help?</p>
              </div>
              <p className="text-[#4B5563] text-sm lg:text-base mt-3 lg:mt-4">
                Contact our customer support team anytime
              </p>
                <a href="/Contact" >
              <p className="text-[#4CAF50] text-sm lg:text-base mt-2">
                Contact Support →
              </p>
                </a>
            </li>
          </ul>
        </aside>

        {/* Product Grid */}
        <section className="w-full lg:w-[75%] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 p-2 catagory-section h-full lg:h-[980px] overflow-scroll">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="animate-pulse bg-white rounded-2xl h-[450px] p-4 flex flex-col justify-between shadow-sm border border-gray-100"
                >
                  <div className="h-48 bg-gray-200 rounded-xl mb-4"></div>
                  <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6 mb-2"></div>
                  <div className="h-8 bg-gray-300 rounded-lg w-[100px] mt-auto"></div>
                </div>
              ))
            : filteredProducts &&
              filteredProducts.map((product, index) => {
                const fullStars = Math.floor(product.rating);
                const hasHalfStar = product.rating % 1 >= 0.5;
                const emptyStars = Math.max(
                  0,
                  5 - fullStars - (hasHalfStar ? 1 : 0)
                );

                return (
                  <div
                    key={product.id}
                    className="bg-white rounded-2xl h-[450px] card cursor-pointer relative flex flex-col justify-between hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-green-300 p-4"
                    onClick={() => router.push(`/Product/${product.id}`)}
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
                        <FaRegStar
                          key={`empty-${i}`}
                          className="text-gray-300"
                        />
                      ))}
                      <span className="text-[#6B7280] text-lg font-semibold">
                        {product.reviews}
                      </span>
                    </div>
                    <h3 className="mt-4 text-2xl font-bold text-gray-800">
                      {product.title}
                    </h3>
                    <p className="mt-2 text-base font-semibold text-left text-gray-600 line-clamp-3">
                      {product.description}
                    </p>
                    <div className="flex justify-start mt-4">
                      <span className="text-xs font-semibold tracking-wide text-white bg-green-600 rounded-lg flex items-center justify-center shadow-sm h-[30px] w-[100px]">
                        {product.category}
                      </span>
                    </div>
                  </div>
                );
              })}
        </section>
      </div>
    </div>
  );
}