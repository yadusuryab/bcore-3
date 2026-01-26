// components/HeroSection.tsx
"use client";

import Brand from "@/components/brand";
import Link from "next/link";
import { useState } from "react";

const HeroSection = () => {
  const [currentLanguage, setCurrentLanguage] = useState("English");

  const languages = ["Busstand", "Pilathara", "Kannur Dt.", ];
  const socialLinks = [
    { name: "Whatsapp", href: "https://wa.me/+919447082101?text=Hello+bCORE" },
    { name: "Email", href: "mailto:bcorece@gmail.com" },
  ];

  const navigation = ["Home"];

  return (
    <div className="relative min-h-screen overflow-hidden ">
      {/* Abstract linear Background */}
      <div className="absolute inset-0 bg-linear-to-br from-red-50  via-green-100  to-orange-200">
        {/* Soft Blurs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse delay-500"></div>

        {/* Light Streaks */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-blue-400 to-transparent opacity-30"></div>
          <div className="absolute top-1/3 left-0 w-full h-px bg-linear-to-r from-transparent via-blue-300 to-transparent opacity-20"></div>
          <div className="absolute top-2/3 left-0 w-full h-px bg-linear-to-r from-transparent via-blue-400 to-transparent opacity-30"></div>
        </div>
      </div>

      {/* Dashed Circular Grid */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="50"
                cy="50"
                r="48"
                fill="none"
                stroke="black"
                strokeWidth="0.5"
                strokeDasharray="2,4"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Left Sidebar Navigation */}
      <div className="absolute left-8 top-2 transform z-20">
        <nav className="flex flex-col space-y-6">
          {navigation.map((item) => (
            <a
              key={item}
              href="#"
              className="text-xs font-mono text-gray-600 hover:text-black transition-colors duration-300 tracking-widest uppercase transform hover:translate-x-1"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>

      {/* Right Sidebar Language Selector */}
      <div className="absolute right-8 top-2   z-20">
        <div className="flex flex-col justify-end items-end space-y-1">
          {languages.map((language) => (
            <button
              key={language}
              onClick={() => setCurrentLanguage(language)}
              className={`text-xs font-mono transition-all duration-300 tracking-widest uppercase ${
                currentLanguage === language
                  ? "text-black font-bold"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {language}
            </button>
          ))}
        </div>
      </div>

      {/* Centered Brand Name */}
      <div className="relative z-10 flex flex-col items-center  justify-center min-h-screen">
       <Brand/>
      

<p className="text-sm text-center text-black/80 backdrop-blur-lg bg-white/20 mt-4  p-2 rounded max-w-[320px] leading-relaxed">
<p className="text-lg text-center font-bold text-black ">
  We’re updating the website
</p>
  We provide tuition classes for students from 5th to 12th (CBSE & State syllabus) and Computer Courses.

  <br /><br />
  Our website is currently being updated. Thank you for your patience.
  Please use the <span className="font-semibold">Get in Touch</span> button at the bottom right to contact us.
</p>



      </div>

      {/* Bottom Left Social Links */}
      <div className="absolute left-8 bottom-8 z-20">
        <div className="flex flex-col space-y-3">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              className="text-xs font-mono text-gray-600 hover:text-black transition-colors duration-300 tracking-widest uppercase transform hover:translate-x-1 transition-transform"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Center Contact CTA */}
      <div className="absolute bottom-8 right-8 transform  z-20  text-end">
        <Link href={"https://wa.me/+919447082101"} target="_blank">
          {" "}
        
          <h2 className="text-lg font-mono font-light bg-black px-3 py-2 text-white tracking-widest uppercase mb-1">
            Get in touch
          </h2>
        </Link>
       
      </div>

      {/* Additional Grid Overlay for Technical Feel */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="container mx-auto h-full">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="border-l border-r border-dashed border-gray-200 opacity-20"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
