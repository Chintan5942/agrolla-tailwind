"use client";
import React from "react";
import Footer from "../HomePage/Footer";
import Navbar from "../HomePage/Navbar";
import Categories from "../HomePage/Categories";

const ProductPage = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <Categories />
      <Footer />
    </div>
  );
};

export default ProductPage;
