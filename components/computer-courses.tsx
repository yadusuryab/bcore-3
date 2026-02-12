import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { 
  Computer, 
  Code, 
  PenTool, 
  Calculator, 
  Languages, 
  BookOpen,
  ArrowRight,
  Layout,
  Palette,
  BarChart
} from 'lucide-react'

export default function ComputerCourses() {
  
  const courseCategories = [
    {
      title: "Professional Diploma Courses",
      icon: <Computer className="w-6 h-6" />,
      color: "from-blue-600 to-blue-700",
      courses: [
        "PGDCA (Post Graduate Diploma in Computer Application)",
        "DCA (Diploma in Computer Application)",
        "CTTC (Certificate in Teacher Training Course)",
        "DCM (Diploma in Computer Multimedia)"
      ]
    },
    {
      title: "Graphic Designing & Animation",
      icon: <Palette className="w-6 h-6" />,
      color: "from-purple-600 to-purple-700",
      courses: [
        "Animation",
        "Graphic Designing",
        "Photoshop",
        "Illustrator",
        "CorelDRAW",
        "ImageReady",
        "Flash",
        "HTML"
      ]
    },
    {
      title: "IT & Programming",
      icon: <Code className="w-6 h-6" />,
      color: "from-green-600 to-green-700",
      courses: [
        "C & C++ Programming",
        "HTML",
        "DTP (Desktop Publishing)",
        "ISM Malayalam",
        "MS Office",
        "Tally"
      ]
    },
    {
      title: "Academic Tuition",
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-orange-600 to-orange-700",
      courses: [
        "5th to 10th STD (CBSE)",
        "Basic Maths",
        "English",
        "Hindi",
        "Malayalam",
        "Spoken English & Hindi",
        "Calligraphy"
      ]
    },
    {
      title: "Short Term & Vacation Courses",
      icon: <Calendar className="w-6 h-6" />,
      color: "from-red-600 to-red-700",
      courses: [
        "Vacation Courses",
        "MS Office",
        "Spoken English",
        "Spoken Hindi",
        "Calligraphy",
        "Basic Computer"
      ]
    }
  ];

  const allCourses = [
    "PGDCA", "CTTC", "DCA", "DCM", "Animation", "Graphic Designing", 
    "MS Office", "DTP", "Tally", "C & C++", "Photoshop", "Illustrator", 
    "ImageReady", "CorelDRAW", "Flash", "HTML", "ISM Malayalam", 
    "Vacation Courses", "Spoken English", "Spoken Hindi", "Calligraphy",
    "Basic Maths", "English", "Hindi", "Malayalam"
  ];

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        
        {/* ===== HEADER SECTION ===== */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-700 inline-block relative">
            Our Computer Courses & Tuition Programs
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full"></div>
          </h2>
          <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
            Bcore Computer Education in <strong>Bus Stand, Pilathara</strong> offers comprehensive 
            computer training and academic tuition. ISO certified institute with job-oriented courses.
          </p>
        </div>

        {/* ===== CONTACT CARD ===== */}
        <div className="bg-gradient-to-r from-purple-700 to-purple-800 rounded-2xl p-6 md:p-8 mb-12 text-white shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-full">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Bcore Computer Education</h3>
                <p className="text-purple-100">Bus Stand, Pilathara - Near Payyanur</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <Phone className="w-4 h-4" />
                <span className="font-medium">9447 082 101</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <Mail className="w-4 h-4" />
                <span className="font-medium">bcorece@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <Globe className="w-4 h-4" />
                <span className="font-medium">www.bcore.in</span>
              </div>
            </div>
          </div>
        </div>

        {/* ===== COURSE GRID - CATEGORY WISE ===== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {courseCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
            >
              {/* Category Header */}
              <div className={`bg-gradient-to-r ${category.color} p-4 text-white flex items-center gap-3`}>
                <div className="bg-white/20 p-2 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              
              {/* Course List */}
              <div className="p-5">
                <ul className="space-y-2.5">
                  {category.courses.map((course, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <span className="text-purple-600 mt-1 flex-shrink-0">•</span>
                      <span className="text-sm md:text-base">{course}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Course Count Badge */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="text-xs bg-gray-100 px-3 py-1.5 rounded-full text-gray-600">
                    {category.courses.length}+ Courses
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ===== ALL COURSES GRID ===== */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
              Complete List of Programs
            </h3>
            <p className="text-gray-600 mt-2">
              Choose from {allCourses.length}+ professional courses & tuition programs
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div className="flex flex-wrap gap-2.5 justify-center">
              {allCourses.map((course, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 rounded-full text-sm font-medium border border-purple-100 hover:shadow-md transition-shadow"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ===== KEY HIGHLIGHTS ===== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          <div className="bg-white p-6 rounded-xl text-center shadow-md">
            <div className="text-3xl mb-2">📚</div>
            <div className="font-bold text-purple-700">5th-10th STD</div>
            <div className="text-sm text-gray-600">CBSE Tuition</div>
          </div>
          <div className="bg-white p-6 rounded-xl text-center shadow-md">
            <div className="text-3xl mb-2">💻</div>
            <div className="font-bold text-purple-700">15+</div>
            <div className="text-sm text-gray-600">Computer Courses</div>
          </div>
          <div className="bg-white p-6 rounded-xl text-center shadow-md">
            <div className="text-3xl mb-2">🎨</div>
            <div className="font-bold text-purple-700">Animation</div>
            <div className="text-sm text-gray-600">& Graphic Design</div>
          </div>
          <div className="bg-white p-6 rounded-xl text-center shadow-md">
            <div className="text-3xl mb-2">🗣️</div>
            <div className="font-bold text-purple-700">Spoken English</div>
            <div className="text-sm text-gray-600">& Hindi</div>
          </div>
        </div>

        {/* ===== CTA BUTTON ===== */}
        <div className="text-center mt-12">
          <Link href="/contact-bcore-pilathara-payyanur">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Enquire Now for Admission 2024
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <p className="text-sm text-gray-500 mt-4">
            ⚡ Admissions started for 5th to 10th STD (CBSE) • Limited seats available
          </p>
        </div>

        {/* ===== SCHEMA MARKUP ===== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationEvent",
              "name": "Bcore Computer Education Courses",
              "description": "Computer courses including PGDCA, DCA, Animation, Graphic Designing, MS Office, Tally, Programming and Tuition for 5th to 10th STD CBSE",
              "location": {
                "@type": "Place",
                "name": "Bcore Computer Education",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Bus Stand",
                  "addressLocality": "Pilathara",
                  "addressRegion": "Payyanur",
                  "addressCountry": "IN"
                }
              },
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock"
              }
            })
          }}
        />
      </div>
    </section>
  )
}

// Required imports for icons
import { MapPin, Phone, Mail, Globe, Calendar } from 'lucide-react';