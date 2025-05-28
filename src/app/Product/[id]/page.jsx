"use client";
import { useParams } from "next/navigation";
import Navbar from "../../HomePage/Navbar";
import Footer from "../../HomePage/Footer";
import productsData from "../../HomePage/productsData";

export default function ProductDetailPage() {
  const params = useParams();
  const id = parseInt(params.id);
  const product = productsData.find((p) => p.id === id);

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
          <h2 className="mb-4 text-3xl font-bold text-red-600">Please Select a Product</h2>
          <p className="max-w-md text-center text-gray-600">
            Sorry, we couldn't find the product you're looking for. Please go back and select a valid product.
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen px-2 pt-24 pb-12 bg-gradient-to-b from-green-50 to-white sm:px-6">
        <div className="flex flex-col items-center max-w-5xl gap-12 mx-auto md:flex-row md:items-start md:gap-16">
          {/* Product Image */}
          <div className="flex items-center justify-center flex-shrink-0 w-full md:w-1/2">
            <img
              src={product.image}
              alt={product.title}
              className="w-full max-w-[420px] h-auto rounded-3xl shadow-2xl border-4 border-green-200 bg-white object-contain transition-transform duration-300 hover:scale-105 hover:shadow-green-200"
            />
          </div>
          {/* Product Details */}
          <div className="flex-1 w-full md:w-1/2">
            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-green-900 sm:text-5xl drop-shadow-md">{product.title}</h1>
            <p className="mb-6 text-lg font-medium tracking-wide text-gray-700 sm:text-xl">{product.description}</p>
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="inline-block px-4 py-2 text-base font-semibold text-green-800 bg-green-100 rounded-full shadow-sm">Category: {product.category}</span>
              <span className="inline-block px-4 py-2 text-base font-semibold text-yellow-700 bg-yellow-100 rounded-full shadow-sm">Rating: {product.rating} ⭐</span>
            </div>
            {/* Add more product-specific details here if needed */}
          </div>
        </div>
        {/* Company Features - stays the same for all products */}
        <section className="max-w-5xl mx-auto mt-16">
          <h2 className="mb-8 text-3xl font-bold text-center text-green-800 sm:text-4xl">Why Choose Agrolla Impex?</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="flex flex-col items-center p-6 text-center transition-shadow bg-white border border-green-100 shadow-md rounded-2xl hover:shadow-green-200">
              <img src="/certified.svg" alt="Certified" className="w-16 h-16 mb-4" />
              <h3 className="mb-2 text-xl font-semibold text-green-900">Certified Quality</h3>
              <p className="text-base text-gray-600">All products are certified and meet international quality standards.</p>
            </div>
            <div className="flex flex-col items-center p-6 text-center transition-shadow bg-white border border-green-100 shadow-md rounded-2xl hover:shadow-green-200">
              <img src="/factory.svg" alt="Modern Facilities" className="w-16 h-16 mb-4" />
              <h3 className="mb-2 text-xl font-semibold text-green-900">Modern Facilities</h3>
              <p className="text-base text-gray-600">State-of-the-art processing and packaging for maximum freshness.</p>
            </div>
            <div className="flex flex-col items-center p-6 text-center transition-shadow bg-white border border-green-100 shadow-md rounded-2xl hover:shadow-green-200">
              <img src="/global.svg" alt="Global Export" className="w-16 h-16 mb-4" />
              <h3 className="mb-2 text-xl font-semibold text-green-900">Global Export</h3>
              <p className="text-base text-gray-600">Trusted by clients in 30+ countries for reliable delivery.</p>
            </div>
            <div className="flex flex-col items-center p-6 text-center transition-shadow bg-white border border-green-100 shadow-md rounded-2xl hover:shadow-green-200">
              <img src="/customer.svg" alt="Customer Support" className="w-16 h-16 mb-4" />
              <h3 className="mb-2 text-xl font-semibold text-green-900">24/7 Support</h3>
              <p className="text-base text-gray-600">Dedicated customer support for all your queries and needs.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
