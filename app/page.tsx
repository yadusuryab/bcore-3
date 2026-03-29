"use client";

import { useEffect, useState } from "react";
import AdSection from "@/components/ad";
import CoursesSection from "@/components/courses";
import Hero from "@/components/hero";
import BcoreFeatures from "@/components/our-features";
import SeoAbout from "@/components/seo-about";
import SeoCourses from "@/components/seo-courses";
import PostersPopup from "@/components/popup";
import ContactButton from "@/components/contactbutton";

const HeroSection = () => {
  const [isPostersOpen, setIsPostersOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsPostersOpen(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Hero />
      <AdSection />
      <SeoAbout />
      <CoursesSection />
      <SeoCourses />
      <BcoreFeatures />
      <PostersPopup isOpen={isPostersOpen} onClose={() => setIsPostersOpen(false)} />
      <ContactButton />
    </div>
  );
};

export default HeroSection;