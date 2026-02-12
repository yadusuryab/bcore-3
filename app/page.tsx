// components/HeroSection.tsx
"use client";

import AdSection from "@/components/ad";
import CoursesSection from "@/components/courses";
import Hero from "@/components/hero";
import BcoreFeatures from "@/components/our-features";
import SeoAbout from "@/components/seo-about";
import SeoCourses from "@/components/seo-courses";


const HeroSection = () => {
  

  return (
    <div>
      <Hero/>
      <AdSection/>
      <SeoAbout/>
      <CoursesSection/>
      <SeoCourses/>
      <BcoreFeatures/>
      
      {/* <ComputerCourses/> */}
    </div>
  )
};

export default HeroSection;
