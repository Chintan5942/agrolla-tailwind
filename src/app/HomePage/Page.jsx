"use-client";

import Categories from "./Categories";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import Section1 from "./Section1";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";

export default function Page() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Section1/>
    <Categories/>
    <Section3/>
    <Section4/>
    <Section5/>
    </>
  )
}
