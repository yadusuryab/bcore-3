"use client";

import Image from "next/image";

export default function BcoreFeatures() {
  const features = [
    {
      id: 1,
      title: "Affordable Fees",
      subtitle: "bCORE Offers you the best courses at a affordable price.",
      image: "/affordable.png",
      alt: "Teacher explaining with digital board at Bcore Pilathara",
      bgColor: "from-purple-100 to-purple-200",
      shadowColor: "shadow-purple-100/50"
    },
    {
      id: 2,
      title: "Experienced Faculties",
      subtitle: "bCORE provide the best offline classes taught by experienced faculty in respective subjects.",
      image: "/exp.png",
      alt: "Student learning with tablet at Bcore computer courses Payyanur",
      bgColor: "from-blue-100 to-blue-200",
      shadowColor: "shadow-blue-100/50"
    },
    {
      id: 3,
      title: "Smart Classrooms and Learning System",
      subtitle: "bCORE’s smart classrooms with AC (Air conditioners) and other modern learning facilites create good learning environments for the best results.",
      image: "/ac.png",
      alt: "One-on-one tutoring session at Bcore tuition Pilathara",
      bgColor: "from-pink-100 to-pink-200",
      shadowColor: "shadow-pink-100/50"
    }
  ];

  return (
    <section className="w-full py-20 md:py-28 bg-white px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className=" text-xl md:text-2xl lg:text-5xl font-bold text-[#222] tracking-tight">
          Why Choose bCORE?
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-600 text-sm tracking-tight md:text-lg max-w-2xl mx-auto mt-6">
            Empowering students in Pilathara, Payyanur with cutting-edge learning methodologies
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 lg:gap-20">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="group flex flex-col items-center text-center transform hover:-translate-y-2 transition-all duration-300 ease-in-out"
            >
              {/* Circular Visual Container - Soft Pastel Background */}
              <div className={`
                relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 
                rounded-full bg-gradient-to-br ${feature.bgColor}
                shadow-xl ${feature.shadowColor} 
                group-hover:shadow-2xl transition-all duration-300
                flex items-center justify-center
                mb-8 md:mb-10
              `}>
                {/* Inner glow effect */}
                <div className="absolute inset-2 rounded-full bg-white/30 backdrop-blur-[2px]"></div>
                
                {/* Illustration */}
                <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 z-10">
                  <Image
                    src={feature.image}
                    alt={feature.alt}
                    fill
                    className="object-contain rounded-full drop-shadow-lg scale-90 group-hover:scale-95 transition-transform duration-300"
                    sizes="(max-width: 768px) 160px, (max-width: 1200px) 200px, 224px"
                  />
                </div>

                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full border-2 border-white/50"></div>
              </div>

              {/* Feature Title */}
              <h3 className=" text-xl md:text-2xl font-bold text-gray-800 mb-3 max-w-[280px] leading-tight">
                {feature.title}
              </h3>

              {/* Supporting Text */}
              <p className="text-sm md:text-base text-gray-600 max-w-[260px] leading-relaxed">
                {feature.subtitle}
              </p>

              {/* Animated underline on hover */}
              <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center mt-16 md:mt-20">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-50 to-pink-50 px-6 py-3 rounded-full shadow-sm">
            <span className="text-purple-700 font-semibold text-sm md:text-base">
               Trusted by 1000+ students in Pilathara & Payyanur
            </span>
          </div>
        </div> */}

        {/* Schema Markup - Hidden */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "bCORE Computer Education",
              "description": "EdTech platform offering conceptual clarity through visualization, personalised learning programs, and unmatched individual attention in Pilathara, Payyanur.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Bus Stand",
                "addressLocality": "Pilathara",
                "addressRegion": "Payyanur",
                "addressCountry": "IN"
              }
            })
          }}
        />
      </div>
    </section>
  );
}