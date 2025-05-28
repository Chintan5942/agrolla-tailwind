"use client";
import { useParams } from "next/navigation";
import Navbar from "../../HomePage/Navbar";
import Footer from "../../HomePage/Footer";
import Categories from "../../HomePage/Categories";
import SelectedProduct from "@/app/Product/SelectedProduct";
import productsData from "../../HomePage/productsData";

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = productsData.find((p) => p.id.toString() === id);

  if (!product) {
    return (
      <>
        <Categories />
        <div className="flex items-center justify-center text-xl font-semibold text-gray-600 h-96">
          Product not found.
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <SelectedProduct product={product} />
      <Footer />
    </>
  );
}
