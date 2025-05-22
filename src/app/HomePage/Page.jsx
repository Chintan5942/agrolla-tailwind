"use-client";

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

export default function Page() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Section1/>
    <Categories/>
    <Section3/>
    <Section4/>
    <Certificate/>
    <ImageGallery/>
    <Slider/>
    <Contact/>
    </>
  )
}
