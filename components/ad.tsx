/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function AdSection() {
  const [api, setApi] = useState<any>(null);
  const [current, setCurrent] = useState<any>(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const slides = [
    {
      title: "Admissions Open – Tuition for Classes 5–12",
      description:
        "Personalized coaching for CBSE & State syllabus students in Pilathara, Payyanur. Small batches, expert faculty, and focused board exam preparation.",
      features: [
        "Weekly Tests & Progress Reports",
        "Individual Attention",
        "Board Exam Special Coaching",
      ],
      image: "/tuition.png",
      alt: "Best Tuition Centre in Pilathara Payyanur",
      link: "/tuition-for-class-5-to-12-in-pilathara-payyanur",
      buttonText: "Explore Tuition",
    },
    {
      title: "Job-Oriented Computer Courses",
      description:
        "Professional computer training programs like PGDCA, DCA, MS Office, Excel, and Photoshop for students and job seekers in Pilathara, Payyanur.",
      features: [
        "Practical Lab Training",
        "Certificate Courses",
        "Flexible Batch Timings",
      ],
      image: "/computer-lab.png",
      alt: "Computer Courses in Pilathara Payyanur",
      link: "/computer-courses-pilathara-payyanur-in-pilathara-payyanur",
      buttonText: "View Courses",
    },
  ];

  return (
    <section className="w-full px-4 md:px-8 lg:px-20 py-16 rounded-3xl">
      <div className="max-w-7xl mx-auto rounded-3xl">
        <Carousel setApi={setApi} className="w-full rounded-3xl">
          <CarouselContent className="rounded-3xl">
            {slides.map((slide, index) => (
              <CarouselItem key={index}>
                {/* ===== CARD WITH BACKGROUND IMAGE ===== */}
                <div className="relative w-full h-[500px] md:h-[550px] lg:h-[500px] overflow-hidden rounded-3xl  group">
                  
                  {/* Background Image with Overlay Gradient */}
                  <div className="absolute inset-0">
                    <Image
                      src={slide.image}
                      alt={slide.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority={index === 0}
                    />
                    {/* Multi-layer gradient overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90  via-black/50 to-black/30 rounded-3xl"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent rounded-3xl"></div>
                  </div>

                  {/* Content Overlay */}
                  <div className="relative z-10 h-full flex flex-col justify-end md:justify-center p-8 md:p-12 lg:p-16 text-white">
                    
                    {/* Badge */}
                    <span className="inline-block px-2 py-1 mb-4 md:mb-6 bg-primary/50 backdrop-blur-sm rounded-full text-xs font-semibold w-fit border border-white/20">
                      Featured Program
                    </span>

                    {/* Title */}
                    <h2 className="text-xl md:text-3xl lg:text-4xl font-bold max-w-2xl leading-tight">
                      {slide.title}
                    </h2>

                    {/* Description */}
                    <p className="mt-4 md:mt-6 text-gray-100 text-xs md:text-lg max-w-xl">
                      {slide.description}
                    </p>

                    {/* Features List */}
                    <ul className="mt-6 space-y-2 text-xs md:text-base">
                      {slide.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <svg 
                            className="w-5 h-5 text-primary/70 flex-shrink-0" 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path 
                              fillRule="evenodd" 
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                              clipRule="evenodd" 
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Button */}
                    <Link href={slide.link} className="mt-8 md:mt-10">
                      <Button 
                        size="sm" 
                      >
                        {slide.buttonText}
                        <svg 
                          className="w-5 h-5 ml-2" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M13 7l5 5m0 0l-5 5m5-5H6" 
                          />
                        </svg>
                      </Button>
                    </Link>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Arrows - Styled for dark background */}
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm border-0 text-white hover:text-white" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm border-0 text-white hover:text-white" />

          {/* ===== CAROUSEL INDICATORS ===== */}
          <div className="flex items-center  justify-between">
            <div className="flex justify-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`
                  transition-all duration-300 rounded-full
                  ${current === index 
                    ? 'w-10 h-1 bg-primary' 
                    : 'w-1 h-1 bg-gray-300 hover:bg-purple-400'
                  }
                `}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
            </div>
             {/* Slide Counter */}
          <div className="text-center mt-4 text-xs text-gray-600">
            <span className="font-semibold text-primary">{current + 1}</span>
            <span className="mx-1">/</span>
            <span>{slides.length}</span>
          </div>
          </div>

         

        </Carousel>
      </div>

    </section>
  );
}