"use client";
import { useEffect, useState } from "react";
import Categories from "./Categories";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import Section1 from "./Section1";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Certificate from "./Certificate";
import ImageGallery from "./ImageGallery";
import Slider from "./Slider";
import Contact from "./Contact";
import Preloader from "./Preloader";

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Wait for all images and content to load
    const handleLoad = () => setLoading(false);
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <>
      {loading && <Preloader />}
      {!loading && (
        <>
          <HeroSection />
          <Section1 />
          <Categories />
          <Section3 />
          <Section4 />
          <Certificate />
          <ImageGallery />
          <Slider />
          <Contact />
        </>
      )}
    </>
  );
}
