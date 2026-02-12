/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { ArrowRight, ArrowRightCircle, ArrowUpRightFromCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function CoursesSection() {
  // Course data from poster
  const coursesData = {
    tuition: {
      badge: "Classes 5–12 (CBSE/STATE)",
      title: "Tuition Classes",
      subtitle: "CBSE & State syllabus with expert faculty",
      image: "/tuition-2.png",
      alt: "Students learning at Bcore tuition classes in Pilathara, Payyanur",
      href: "/tuition-classes-for-class-5-to-12-pilathara-payyanur",
      color: "purple",
      subjects: [
        "CBSE", "State English", "State Malayalam", "Class 5th to 12th", "BASIC MATHS, ENGLISH, HINDI, MALAYALAM",
      
      ]
    },
    computer: {
      badge: "18+ Professional Courses",
      title: "Computer Courses",
      subtitle: "Job-oriented training with certificates",
      image: "/computer-2.png",
      alt: "Computer lab and training at Bcore computer courses in Pilathara, Payyanur",
      href: "/computer-courses-pilathara-payyanur",
      color: "blue",
      subjects: [
        "PGDCA", "CTTC", "DCA", "DCM", "ANIMATION", "GRAPHIC DESIGNING",
        "MS-OFFICE", "DTP", "TALLY", "C & C++", "PHOTOSHOP", "ILLUSTRATOR",
        "IMAGEREADY", "CORELDRAW", "FLASH", "HTML", "ISM MALAYALAM", 
        "VACATION COURSES"
      ]
    }
  };

  const colorSchemes:any = {
    purple: {
      gradient: "from-green-400 to-green-600",
      lightBg: "bg-green-50",
      text: "text-green-800",
      dark: "text-purple-800",
      logo: "from-purple-500 to-purple-700",
      dot: "bg-purple-600"
    },
    blue: {
      gradient: "from-blue-400 to-blue-600",
      lightBg: "bg-blue-50",
      text: "text-blue-700",
      dark: "text-blue-800",
      logo: "from-blue-500 to-blue-700",
      dot: "bg-blue-600"
    }
  };

  return (
    <section className="w-full py-16 md:py-24 bg-gray-50 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Courses We Provide
          </h2>
          <p className="mt-4 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Explore our tuition classes and job-oriented professional computer courses
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {Object.entries(coursesData).map(([key, course]) => {
            const colors = colorSchemes[course.color];
            
            return (
              <Link 
                key={key}
                href={course.href} 
                className="group"
              >
                <div className="bg-muted  rounded-3xl border transition-all duration-300 px-6 pb-6 md:px-7 md:pb-7 h-full flex flex-col">
                  
                  {/* Badge */}
                  <div className="flex justify-center mb-6">
                    <span className={`px-5 py-1.5  text-xs font-semibold text-white bg-gradient-to-r ${colors.gradient} rounded-b-xl`}>
                      {course.badge}
                    </span>
                  </div>
                  
                  {/* Main Content - Flex Row */}
                  <div className="flex gap-4 md:gap-5 mb-6">
                    
                    {/* Image Container */}
                    <div className="relative w-24 h-24 md:w-28 md:h-28 shrink-0 ">
                      <Image
                        src={course.image}
                        alt={course.alt}
                        fill
                        className="object-contain drop-shadow-md rounded-2xl group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 96px, 112px"
                      />
                    </div>
                    
                    {/* Text Content */}
                    <div className="flex-1 min-w-0">
                      
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                        {course.title}
                      </h3>
                      
                      <p className="text-xs md:text-sm text-gray-600 mt-1">
                        {course.subtitle}
                      </p>
                      
                      <span className={`flex items-center mt-2.5 ${colors.text} font-semibold text-xs md:text-sm group-hover:translate-x-1 transition-transform`}>
                        <span>
                        Know more</span> <ArrowRightCircle className="text-base ml-0.5" size={12}/>
                      </span>
                    </div>
                  </div>
                  
                  {/* Divider */}
                  <div className="border-t border-gray-100 my-4" />
                  
                  {/* Course Tags Grid */}
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-gray-800 mb-3 flex items-center">
                      <span className={`w-1.5 h-1.5 ${colors.dot} rounded-full mr-2`} />
                      {key === 'tuition' ? 'For Syllabus :' : 'All Computer Courses:'}
                    </h4>
                    
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {course.subjects.slice(0, 8).map((item, idx) => (
                        <span 
                          key={idx}
                          className={`px-2.5 py-1 ${colors.lightBg} ${colors.text} rounded-md text-[10px] md:text-xs font-medium border border-${course.color}-100`}
                        >
                          {item}
                        </span>
                      ))}
                      {course.subjects.length > 8 && (
                        <span className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-md text-[10px] md:text-xs font-medium">
                          +{course.subjects.length - 8} more
                        </span>
                      )}
                    </div>
                    
                    {key === 'computer' && (
                      <p className="text-[10px] text-gray-400 mt-2">
                        Includes PGDCA, DCA, CTTC, DCM & more
                      </p>
                    )}
                  </div>
                  
                  {/* CTA Button */}
                  <div className="mt-8 flex justify-center">
                    <div className="w-full ">
                      <Button size={'lg'} className="w-full rounded-xl bg-linear-to-r from-blue-800 to-blue-500 text-white font-semibold transform hover:scale-[1.03] active:scale-[0.99] transition-all duration-300">
                        Explore More <ArrowRight/>
                      </Button >
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Trust Badge */}
      

        {/* Hidden Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "Course",
                  "name": "Tuition Classes 5-12 CBSE",
                  "provider": "Bcore Computers & Tuition",
                  "location": "Pilathara, Payyanur"
                },
                {
                  "@type": "Course",
                  "name": "Computer Courses",
                  "provider": "Bcore Computers & Tuition",
                  "location": "Pilathara, Payyanur"
                }
              ]
            })
          }}
        />
      </div>
    </section>
  );
}