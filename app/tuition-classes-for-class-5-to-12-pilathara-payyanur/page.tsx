import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Users,
  FileCheck,
  Lightbulb,
  Snowflake,
  BookOpen,
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  Award,
  Calendar,
  ChevronRight,
  Sparkles,
  Target,
  TrendingUp,
  Shield,
  Clock,
  UserCheck,
  Building,
  School,
  Landmark,
  ArrowRight,
  Star,
  BarChart,
  Brain,
  Notebook,
  Compass,
  PenTool,
  Globe,
  Zap,
} from "lucide-react";

// shadcn/ui components
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// Magic UI components (if available)
// import { BlurFade } from "@/components/magicui/blur-fade";
// import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
// import { BorderBeam } from "@/components/magicui/border-beam";

export const metadata = {
  title:
    "Tuition Classes for Class 5–12 in Pilathara, Payyanur | bCORE Coaching Centre",
  description:
    "Looking for tuition classes in Pilathara, Payyanur? bCORE offers expert coaching for Class 5–12 CBSE & State syllabus with personalized attention and exam-focused training.",
  keywords:
    "tuition classes in Pilathara, tuition in Payyanur, CBSE tuition Payyanur, State syllabus tuition, class 5 to 12 tuition, best tuition centre Pilathara",
};

export default function TuitionPage() {
  const features = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Experienced Faculty",
      description:
        "Qualified teachers with subject expertise and student-focused teaching methods.",
      gradient: "from-purple-600 to-purple-700",
      lightBg: "bg-purple-50",
      textColor: "text-purple-700",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Small Batch Size",
      description: "Limited students per batch to ensure individual attention.",
      gradient: "from-blue-600 to-blue-700",
      lightBg: "bg-blue-50",
      textColor: "text-blue-700",
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Regular Tests & Tracking",
      description: "Weekly tests and progress reports to monitor improvement.",
      gradient: "from-green-600 to-green-700",
      lightBg: "bg-green-50",
      textColor: "text-green-700",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Concept-Based Learning",
      description:
        "Strong focus on fundamentals and exam preparation strategies.",
      gradient: "from-amber-600 to-amber-700",
      lightBg: "bg-amber-50",
      textColor: "text-amber-700",
    },
    {
      icon: <Snowflake className="w-6 h-6" />,
      title: "Smart Classrooms",
      description:
        "AC-enabled classrooms and modern teaching facilities for better learning comfort.",
      gradient: "from-cyan-600 to-cyan-700",
      lightBg: "bg-cyan-50",
      textColor: "text-cyan-700",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Exam-Focused Preparation",
      description:
        "Strategic approach to board exams with mock tests and time management.",
      gradient: "from-rose-600 to-rose-700",
      lightBg: "bg-rose-50",
      textColor: "text-rose-700",
    },
  ];

  const subjects = [
    {
      name: "Mathematics",
      class: "5-12",
      icon: <BarChart className="w-6 h-6" />,
    },
    {
      name: "Science",
      class: "5-10",
      icon: <FlaskConical className="w-6 h-6" />,
    },
    { name: "Physics", class: "11-12", icon: <Atom className="w-6 h-6" /> },
    { name: "Chemistry", class: "11-12", icon: <Beaker className="w-6 h-6" /> },
    { name: "Biology", class: "11-12", icon: <Leaf className="w-6 h-6" /> },
    { name: "English", class: "5-12", icon: <BookOpen className="w-6 h-6" /> },
    {
      name: "Social Science",
      class: "5-12",
      icon: <Globe className="w-6 h-6" />,
    },
  ];

  const locations = [
    { name: "Pilathara", icon: <MapPin className="w-3 h-3" /> },
    { name: "Payyanur", icon: <MapPin className="w-3 h-3" /> },
    { name: "Peringome", icon: <MapPin className="w-3 h-3" /> },
    { name: "Cherupuzha", icon: <MapPin className="w-3 h-3" /> },
    { name: "Kannur", icon: <Landmark className="w-3 h-3" /> },
  ];

  const stats = [
    {
      value: "500+",
      label: "Students Trained",
      icon: <Users className="w-4 h-4" />,
    },
    {
      value: "10+",
      label: "Years Experience",
      icon: <Calendar className="w-4 h-4" />,
    },
    {
      value: "98%",
      label: "Parent Satisfaction",
      icon: <Star className="w-4 h-4" />,
    },
    {
      value: "15",
      label: "Students per Batch",
      icon: <UserCheck className="w-4 h-4" />,
    },
  ];

  const testimonials = [
    {
      quote:
        "bCORE's structured approach helped my daughter improve her math scores from 65% to 92% in one year.",
      author: "Parent of Class 10 Student",
      role: "Payyanur",
    },
    {
      quote:
        "The small batch size ensures my son gets individual attention. Teachers are truly dedicated.",
      author: "Parent of Class 12 Student",
      role: "Pilathara",
    },
  ];

  return (
    <main className="w-full bg-white">
      {/* ===== HERO SECTION - MODERN WITH MAGIC UI EFFECTS ===== */}
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>

        <div className="relative container mx-auto px-4 md:px-8 lg:px-12 py-24 md:py-32 lg:py-36">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb with glass effect */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
              <Link
                href="/"
                className="text-sm text-white/80 hover:text-white transition flex items-center gap-1"
              >
                <Building className="w-3 h-3" />
                Home
              </Link>
              <ChevronRight className="w-3 h-3 text-white/60" />
              <span className="text-sm text-white flex items-center gap-1">
                <School className="w-3 h-3" />
                Tuition Classes
              </span>
            </div>

            {/* H1 with gradient text */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
                Tuition Classes
              </span>
              <br />
              <span className="relative inline-block mt-2">
                for Class 5–12 in Pilathara, Payyanur
                <svg
                  className="absolute -bottom-3 left-0 w-full"
                  viewBox="0 0 100 8"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,4 Q25,8 50,4 T100,4"
                    stroke="white"
                    strokeWidth="1.5"
                    fill="none"
                    strokeOpacity="0.5"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed">
              bCORE Coaching Centre in Pilathara, Payyanur provides structured
              tuition classes for students from Class 5 to Class 12 (CBSE &
              State syllabus).
            </p>

            {/* CTA Buttons - Modern design */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-purple-700 hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
              >
                <Link href="/contact">
                  <GraduationCap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Enroll Now
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/10 rounded-full px-8 py-6 text-lg font-semibold group"
              >
                <Link href="#why-choose">
                  <Compass className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Learn More
                </Link>
              </Button>
            </div>

            {/* Trust Badges - Modern pills */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-12">
              <Badge
                variant="outline"
                className="bg-white/10 backdrop-blur-sm text-white border-white/30 px-4 py-2 text-sm font-medium"
              >
                <School className="w-3.5 h-3.5 mr-1.5" />
                CBSE & State Syllabus
              </Badge>
              <Badge
                variant="outline"
                className="bg-white/10 backdrop-blur-sm text-white border-white/30 px-4 py-2 text-sm font-medium"
              >
                <Award className="w-3.5 h-3.5 mr-1.5" />
                10+ Years Experience
              </Badge>
              <Badge
                variant="outline"
                className="bg-white/10 backdrop-blur-sm text-white border-white/30 px-4 py-2 text-sm font-medium"
              >
                <MapPin className="w-3.5 h-3.5 mr-1.5" />
                Pilathara, Payyanur
              </Badge>
            </div>
          </div>
        </div>

        {/* Modern wave design */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg
            viewBox="0 0 1440 120"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
              fill="white"
              fillOpacity="1"
            ></path>
          </svg>
        </div>
      </section>

      {/* ===== INTRO SECTION - MATURE DESIGN ===== */}
      <section className="py-20 md:py-24 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 rounded-full px-4 py-2 border-0">
                <Star className="w-4 h-4 mr-1" />
                Since 2014
              </Badge>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
                Reliable Tuition Centre in Payyanur
                <span className="text-purple-600 block mt-2">
                  Trusted by Parents
                </span>
              </h2>

              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  bCORE Coaching Centre in{" "}
                  <strong className="text-purple-700 font-semibold">
                    Pilathara, Payyanur
                  </strong>{" "}
                  provides structured tuition classes for students from{" "}
                  <strong className="text-purple-700 font-semibold">
                    Class 5 to Class 12
                  </strong>
                  following CBSE and State syllabus.
                </p>

                <p>
                  Our pedagogical approach emphasizes conceptual clarity,
                  regular assessments, and personalized mentoring. We maintain
                  an optimal teacher-student ratio to ensure every learner
                  receives the attention they deserve.
                </p>

                <p>
                  Parents seeking a{" "}
                  <strong className="text-purple-700 font-semibold">
                    reliable tuition centre in Payyanur
                  </strong>
                  choose bCORE for our disciplined learning environment,
                  experienced faculty, and consistent track record of academic
                  improvement.
                </p>
              </div>

              {/* Stats - Modern cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                {stats.map((stat, index) => (
                  <Card
                    key={index}
                    className="border-0 shadow-sm bg-gradient-to-b from-gray-50 to-white"
                  >
                    <CardContent className="p-4 text-center">
                      <div className="flex justify-center mb-2">
                        <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                          {stat.icon}
                        </div>
                      </div>
                      <div className="text-xl font-bold text-gray-900">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Right Image - Premium styling */}
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-30"></div>

              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <Image
                  src="/tuition.png"
                  alt="Students learning at bCORE tuition classes in Pilathara, Payyanur"
                  width={600}
                  height={700}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

                {/* Experience badge */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-5 py-3 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <Award className="w-5 h-5 text-purple-700" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">
                        Academic Excellence
                      </p>
                      <p className="text-sm font-bold text-gray-900">
                        10+ Years Legacy
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US - ELEVATED DESIGN ===== */}
      <section
        id="why-choose"
        className="py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white px-4 md:px-8 lg:px-12"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 rounded-full px-5 py-2 mb-5 border-0">
              <Sparkles className="w-4 h-4 mr-1" />
              Why Choose bCORE
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why bCORE Tuition in Payyanur?
            </h2>
            <p className="text-lg text-gray-600">
              We provide the optimal learning environment for academic
              excellence
            </p>
          </div>

          {/* Features Grid - Enhanced cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-transparent to-purple-50 rounded-bl-3xl rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SUBJECTS & LOCATION - SPLIT LAYOUT ===== */}
      <section className="py-20 md:py-24 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left - Subjects */}
            <div>
              <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 rounded-full px-4 py-2 mb-5 border-0">
                <BookOpen className="w-4 h-4 mr-1" />
                Curriculum
              </Badge>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Subjects We Cover
              </h2>

              <p className="text-gray-600 text-lg mb-8">
                Comprehensive coverage across all major subjects for CBSE and
                State syllabus
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {subjects.map((subject, index) => (
                  <div
                    key={index}
                    className="bg-white p-5 rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all group"
                  >
                    <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600 mb-3 group-hover:bg-purple-100 transition-colors">
                      {subject.icon}
                    </div>
                    <h4 className="font-bold text-gray-900 text-base">
                      {subject.name}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      Class {subject.class}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-2xl border border-purple-100">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-purple-700" />
                  </div>
                  <div>
                    <p className="text-purple-900 font-semibold">
                      For students in Class 5 to 10 & Higher Secondary (11 & 12)
                    </p>
                    <p className="text-purple-700 mt-1 text-sm">
                      Both CBSE and State syllabus students are welcome.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Who Can Join & Location */}
            <div className="space-y-8">
              {/* Who Can Join - Premium card */}
              <Card className="border-0 shadow-xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                      <Users className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Who Can Join?
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {[
                      "Students seeking to improve academic performance",
                      "Board exam aspirants (10th & 12th)",
                      "Learners requiring structured academic support",
                      "Parents seeking quality tuition near Payyanur",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 group">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 mt-0.5 flex-shrink-0 group-hover:bg-green-200 transition-colors">
                          <CheckCircle className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Location Advantage - Premium gradient card */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-700 to-purple-900 shadow-2xl">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                <div className="relative p-8 text-white">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold">Location Advantage</h3>
                  </div>

                  <p className="text-purple-100 mb-6 text-lg">
                    Our tuition centre is located at{" "}
                    <span className="text-white font-semibold">
                      Bus Stand, Pilathara
                    </span>
                    , strategically positioned for students from:
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {locations.map((location, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30 px-4 py-2 text-sm font-medium"
                      >
                        {location.icon} {location.name}
                      </Badge>
                    ))}
                  </div>

                  <Separator className="bg-white/20 my-6" />

                  <div className="flex items-center gap-3 text-purple-100">
                    <Building className="w-5 h-5" />
                    <span>
                      Bus Stand, Pilathara | Payyanur, Kannur - 670504
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS - ADDED FOR CREDIBILITY ===== */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-200 rounded-full px-5 py-2 mb-5 border-0">
              <Star className="w-4 h-4 mr-1" />
              Parent Testimonials
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Families in Payyanur
            </h2>
            <p className="text-lg text-gray-600">
              Real feedback from parents who chose bCORE for their children
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all"
              >
                <CardContent className="p-8">
                  <div className="flex gap-1 text-amber-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-lg italic mb-6">
                  {testimonial.quote}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONVERSION BOOST SECTION - PREMIUM ===== */}
      <section className="py-20 md:py-24 bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-800 px-4 md:px-8 lg:px-12 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')]"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center text-white relative z-10">
          {/* Badge */}
          <Badge
            variant="outline"
            className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-5 py-2 text-sm font-semibold mb-6"
          >
            <Calendar className="w-4 h-4 mr-1" />
            Admissions Open for 2026 Academic Year
          </Badge>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Improve Academic Performance?
          </h2>

          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Early batch registrations now available. Special focus batches for
            board exam students.
          </p>

          {/* CTA Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 mb-10">
            {[
              {
                icon: <Calendar className="w-8 h-8" />,
                title: "Early Bird",
                desc: "10% discount on early registration",
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Board Special",
                desc: "Dedicated batches for 10th & 12th",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Limited Seats",
                desc: "Only 15 students per batch",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-colors"
              >
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                <p className="text-sm text-purple-100">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Main CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-purple-700 hover:bg-gray-100 rounded-full px-10 py-6 text-lg font-bold shadow-2xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
            >
              <Link href="/contact">
                <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Contact bCORE Coaching Centre
              </Link>
            </Button>
          </div>

          <p className="text-sm text-purple-200 mt-6 flex items-center justify-center gap-2">
            <Shield className="w-4 h-4" />
            Seats are limited to maintain small batch sizes
          </p>
        </div>
      </section>

      {/* ===== FINAL CTA SECTION ===== */}
      <section className="py-20 px-4 md:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <Card className="border-0 shadow-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                {/* Left content */}
                <div className="p-8 md:p-10">
                  <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 rounded-full px-4 py-2 mb-4 border-0">
                    <GraduationCap className="w-4 h-4 mr-1" />
                    Enrollment Open
                  </Badge>

                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Enroll in Class 5–12 Tuition Programs
                  </h3>

                  <p className="text-gray-600 mb-6">
                    Join the most trusted tuition centre in Pilathara, Payyanur.
                    Limited seats available per batch.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                      <Phone className="w-5 h-5 text-purple-600" />
                      <span className="font-semibold text-gray-800">
                        9447 082 101
                      </span>
                    </div>
                    <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                      <Mail className="w-5 h-5 text-purple-600" />
                      <span className="text-gray-600">bcorece@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                      <MapPin className="w-5 h-5 text-purple-600" />
                      <span className="text-gray-600">
                        Bus Stand, Pilathara, Payyanur - 670504
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right content - Why Join */}
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 md:p-10 flex flex-col justify-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Award className="w-6 h-6 text-purple-600" />
                    Why Join bCORE?
                  </h4>

                  <ul className="space-y-4">
                    {[
                      "Experienced faculty with subject expertise",
                      "Small batch size (15 students maximum)",
                      "Weekly tests and progress tracking",
                      "AC smart classrooms with modern facilities",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0">
                          <CheckCircle className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Button
                      asChild
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full py-6 font-semibold shadow-lg hover:shadow-xl transition-all"
                    >
                      <Link href="/contact">
                        Enquire Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ===== SCHEMA MARKUP ===== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "Tuition Classes for Class 5-12 CBSE & State Syllabus",
            description:
              "Expert tuition classes in Pilathara, Payyanur for Class 5 to 12 CBSE and State syllabus students.",
            provider: {
              "@type": "EducationalOrganization",
              name: "bCORE Computer Education",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Bus Stand",
                addressLocality: "Pilathara",
                addressRegion: "Payyanur",
                addressCountry: "IN",
              },
              telephone: "+919447082101",
            },
            hasCourseInstance: {
              "@type": "CourseInstance",
              courseMode: "onsite",
              location: {
                "@type": "Place",
                name: "bCORE Coaching Centre",
                address: "Bus Stand, Pilathara, Payyanur",
              },
            },
          }),
        }}
      />
    </main>
  );
}

// Add these imports at the top
import { FlaskConical, Atom, Beaker, Leaf } from "lucide-react";
