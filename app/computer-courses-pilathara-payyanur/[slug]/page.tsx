/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { 
  GraduationCap, 
  Monitor, 
  Award, 
  Sparkles, 
  Palette, 
  FileText, 
  Calculator, 
  Code, 
  PenTool, 
  Layers, 
  Globe, 
  Languages, 
  Clock,
  Layout,
  MapPin,
  ChevronRight,
  Users,
  Star,
  BookOpen,
  Briefcase,
  CheckCircle,
  Calendar,
  Target,
  Zap,
  Building,
  School,
  Mail,
  Phone,
  Download,
  Share2,
  Heart,
  BarChart,
  Brain,
  Wifi,
  Coffee,
  CreditCard,
  Shield,
  TrendingUp,
  Award as AwardIcon,
  UserCheck,
  FileCheck,
  ArrowRight
} from "lucide-react";

// shadcn/ui components
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

import { getCourseBySlug, getRelatedCourses, courses } from "@/lib/courses-data";

interface CoursePageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: CoursePageProps) {
    // ✅ FIX: Await the params Promise
    const { slug } = await params;
    const course = getCourseBySlug(slug);
  if (!course) {
    return {
      title: "Course Not Found | bCORE Computer Education",
      description: "The requested course could not be found."
    };
  }
  
  return {
    title: `${course.name} Course in Pilathara, Payyanur | ${course.fullName} | bCORE`,
    description: course.description,
    keywords: `${course.name} course in Pilathara, ${course.name} course in Payyanur, ${course.fullName}, computer course ${course.duration}, ${course.category} training Kannur`,
  };
}

export default async function CourseDetailPage({ params }: CoursePageProps) {
    const { slug } = await params;
  const course = getCourseBySlug(slug);
  
  if (!course) {
    notFound();
  }
  
  const relatedCourses = getRelatedCourses(slug, 3);
  const Icon = course.icon;
  
  const features = [
    { icon: <Clock className="w-5 h-5" />, label: "Duration", value: course.duration },
    { icon: <BarChart className="w-5 h-5" />, label: "Level", value: course.level },
    { icon: <Users className="w-5 h-5" />, label: "Students", value: `${course.studentsEnrolled}+` },
    { icon: <Star className="w-5 h-5" />, label: "Rating", value: `${course.rating} (${course.reviews} reviews)` },
    { icon: <AwardIcon className="w-5 h-5" />, label: "Certification", value: course.certification },
    { icon: <Wifi className="w-5 h-5" />, label: "Class Mode", value: course.classMode }
  ];
  
  return (
    <main className="w-full bg-white">
      
      {/* ===== HERO SECTION ===== */}
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="relative container mx-auto px-4 md:px-8 lg:px-12 py-20 md:py-24">
          <div className="max-w-5xl mx-auto">
            
            {/* Breadcrumb */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
              <Link href="/" className="text-sm text-white/80 hover:text-white transition flex items-center gap-1">
                <Building className="w-3 h-3" />
                Home
              </Link>
              <ChevronRight className="w-3 h-3 text-white/60" />
              <Link href="/computer-courses" className="text-sm text-white/80 hover:text-white transition flex items-center gap-1">
                <Monitor className="w-3 h-3" />
                Computer Courses
              </Link>
              <ChevronRight className="w-3 h-3 text-white/60" />
              <span className="text-sm text-white flex items-center gap-1">
                {course.name}
              </span>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              
              {/* Left - Course Info */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${course.gradient} flex items-center justify-center text-white shadow-lg`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div>
                    <Badge className={`${course.lightBg} ${course.textColor} border-0 px-4 py-1.5 text-sm mb-2`}>
                      {course.categoryDisplay}
                    </Badge>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                      {course.name}
                    </h1>
                  </div>
                </div>
                
                <p className="text-xl text-white/90 mb-4">
                  {course.fullName}
                </p>
                
                <p className="text-lg text-white/80 mb-6 leading-relaxed">
                  {course.description}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {course.features.map((feature: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, idx: React.Key | null | undefined) => (
                    <Badge key={idx} variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/30 px-4 py-2">
                      <CheckCircle className="w-3.5 h-3.5 mr-1.5" />
                      {feature}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-white text-purple-700 hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 group">
                    <Link href="/contact">
                      <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                      Enquire Now
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="bg-transparent backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/10 rounded-full px-8 py-6 text-lg font-semibold">
                    <Link href="#curriculum">
                      <BookOpen className="w-5 h-5 mr-2" />
                      View Curriculum
                    </Link>
                  </Button>
                </div>
              </div>
              
              {/* Right - Quick Info Card */}
              <Card className="w-full lg:w-80 border-0 bg-white/10 backdrop-blur-md shadow-2xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Quick Overview
                  </h3>
                  
                  <div className="space-y-4">
                    {features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-white flex-shrink-0">
                          {feature.icon}
                        </div>
                        <div>
                          <p className="text-xs text-white/70">{feature.label}</p>
                          <p className="text-sm font-semibold text-white">{feature.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Separator className="bg-white/20 my-6" />
                  
                  <div className="text-center">
                    <p className="text-sm text-white/80 mb-2">Course Fee</p>
                    <p className="text-2xl font-bold text-white mb-4">{course.fee}</p>
                    <Button asChild className="w-full bg-white text-purple-700 hover:bg-gray-100 rounded-full">
                      <Link href="/contact">Get Fee Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 120" className="w-full h-auto" preserveAspectRatio="none">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="white"></path>
          </svg>
        </div>
      </section>

      {/* ===== COURSE DETAILS TABS ===== */}
      <section id="curriculum" className="py-20 px-4 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          
          <Tabs defaultValue="curriculum" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto p-1 bg-gray-100 rounded-2xl mb-12">
              <TabsTrigger value="curriculum" className="rounded-xl py-3 data-[state=active]:bg-white data-[state=active]:shadow-md">
                <BookOpen className="w-4 h-4 mr-2" />
                Curriculum
              </TabsTrigger>
              <TabsTrigger value="opportunities" className="rounded-xl py-3 data-[state=active]:bg-white data-[state=active]:shadow-md">
                <Briefcase className="w-4 h-4 mr-2" />
                Careers
              </TabsTrigger>
              <TabsTrigger value="prerequisites" className="rounded-xl py-3 data-[state=active]:bg-white data-[state=active]:shadow-md">
                <UserCheck className="w-4 h-4 mr-2" />
                Prerequisites
              </TabsTrigger>
              <TabsTrigger value="outcomes" className="rounded-xl py-3 data-[state=active]:bg-white data-[state=active]:shadow-md">
                <Target className="w-4 h-4 mr-2" />
                Outcomes
              </TabsTrigger>
            </TabsList>
            
            {/* Curriculum Tab */}
            <TabsContent value="curriculum" className="mt-0">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${course.gradient} flex items-center justify-center text-white`}>
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                      Course Curriculum
                    </h2>
                  </div>
                  
                  <p className="text-gray-600 mb-8 text-lg">
                    {course.duration} comprehensive program with practical, industry-relevant modules
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {course.curriculum.map((item: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, index: any) => (
                      <div key={index} className="flex items-start gap-3 group">
                        <div className={`w-6 h-6 rounded-full ${course.lightBg} flex items-center justify-center text-xs font-bold ${course.textColor} mt-0.5 group-hover:scale-110 transition-transform`}>
                          {index + 1}
                        </div>
                        <div>
                          <p className="text-gray-800 font-medium">{item}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-10 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center flex-shrink-0">
                        <FileCheck className="w-5 h-5 text-purple-700" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Hands-on Training</h4>
                        <p className="text-gray-600 text-sm">
                          All modules include practical lab sessions, assignments, and real-world projects.
                          You&apos;ll build a portfolio that demonstrates your skills to employers.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Careers Tab */}
            <TabsContent value="opportunities" className="mt-0">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${course.gradient} flex items-center justify-center text-white`}>
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                      Career Opportunities
                    </h2>
                  </div>
                  
                  <p className="text-gray-600 mb-8 text-lg">
                    Start your career in these exciting roles after completing the course
                  </p>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {course.careerOpportunities.map((career: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, index: React.Key | null | undefined) => (
                      <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                          <TrendingUp className="w-5 h-5" />
                        </div>
                        <span className="font-medium text-gray-800">{career}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-10 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center flex-shrink-0">
                        <AwardIcon className="w-5 h-5 text-green-700" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Placement Assistance</h4>
                        <p className="text-gray-600 text-sm">
                          bCORE provides 100% placement support including resume building, 
                          interview preparation, and job referrals to partner companies.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Prerequisites Tab */}
            <TabsContent value="prerequisites" className="mt-0">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${course.gradient} flex items-center justify-center text-white`}>
                      <UserCheck className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                      Prerequisites & Eligibility
                    </h2>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Who Can Join?</h3>
                      <ul className="space-y-4">
                        {course.prerequisites.map((item: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, index: React.Key | null | undefined) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mt-0.5 flex-shrink-0">
                              <CheckCircle className="w-3.5 h-3.5" />
                            </div>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Course Level</h3>
                      <div className="bg-gray-50 p-6 rounded-2xl">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                            <BarChart className="w-6 h-6 text-purple-600" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Difficulty</p>
                            <p className="text-lg font-bold text-gray-900">{course.level}</p>
                          </div>
                        </div>
                        
                        <Progress value={
                          course.level === "Beginner" ? 33 :
                          course.level === "Intermediate" ? 66 :
                          course.level === "Advanced" ? 100 : 75
                        } className="h-2 mb-2" />
                        
                        <p className="text-xs text-gray-500 mt-2">
                          {course.level === "Beginner" && "No prior experience needed. Perfect for beginners."}
                          {course.level === "Intermediate" && "Basic computer knowledge recommended."}
                          {course.level === "Advanced" && "Prior programming/design experience required."}
                          {course.level === "All Levels" && "Suitable for beginners to advanced learners."}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Learning Outcomes Tab */}
            <TabsContent value="outcomes" className="mt-0">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${course.gradient} flex items-center justify-center text-white`}>
                      <Target className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                      What You&apos;ll Learn
                    </h2>
                  </div>
                  
                  <p className="text-gray-600 mb-8 text-lg">
                    By the end of this course, you&apos;ll be able to:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {course.learningOutcomes.map((outcome: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, index: React.Key | null | undefined) => (
                      <div key={index} className="flex items-start gap-3 p-5 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                        <div className={`w-8 h-8 rounded-full ${course.lightBg} flex items-center justify-center ${course.textColor} flex-shrink-0`}>
                          <CheckCircle className="w-4 h-4" />
                        </div>
                        <span className="text-gray-800">{outcome}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-10 flex justify-center">
                    <Button asChild className={`bg-gradient-to-r ${course.gradient} text-white rounded-full px-8 py-6 font-semibold shadow-lg hover:shadow-xl transition-all`}>
                      <Link href="/contact">
                        <Download className="w-5 h-5 mr-2" />
                        Download Course Brochure
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* ===== COURSE HIGHLIGHTS ===== */}
      <section className="py-16 px-4 md:px-8 lg:px-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Course Highlights
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to succeed in your learning journey
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Clock className="w-6 h-6" />, label: "Duration", value: course.duration },
              { icon: <Users className="w-6 h-6" />, label: "Batch Size", value: "15 students" },
              { icon: <Wifi className="w-6 h-6" />, label: "Class Mode", value: course.classMode },
              { icon: <Calendar className="w-6 h-6" />, label: "Batches", value: course.batchTimings.length },
              { icon: <Coffee className="w-6 h-6" />, label: "Flexible", value: "Weekend options" },
              { icon: <CreditCard className="w-6 h-6" />, label: "EMI Option", value: "Available" },
              { icon: <AwardIcon className="w-6 h-6" />, label: "Certificate", value: "ISO Certified" },
              { icon: <Shield className="w-6 h-6" />, label: "Placement", value: "100% Support" }
            ].map((item, idx) => (
              <Card key={idx} className="border-0 shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-3">
                    {item.icon}
                  </div>
                  <p className="text-sm text-gray-500">{item.label}</p>
                  <p className="text-lg font-bold text-gray-900">{item.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BATCH TIMINGS ===== */}
      <section className="py-16 px-4 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <Badge className={`${course.lightBg} ${course.textColor} rounded-full px-4 py-2 mb-4 border-0`}>
                <Calendar className="w-4 h-4 mr-1" />
                Batch Timings
              </Badge>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Choose Your Preferred Schedule
              </h2>
              
              <p className="text-gray-600 mb-8 text-lg">
                We offer flexible batch timings to accommodate students, working professionals, 
                and college students.
              </p>
              
              <div className="space-y-4 mb-8">
                {course.batchTimings.map((timing: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, idx: React.Key | null | undefined) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{timing}</p>
                      <p className="text-xs text-gray-500">Mon - Sat</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8 py-6 font-semibold">
                <Link href="/contact">
                  Check Seat Availability
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-30"></div>
              <Card className="border-0 shadow-2xl overflow-hidden relative">
                <CardContent className="p-8 bg-gradient-to-br from-purple-50 to-blue-50">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Limited Seats Available</h3>
                  <p className="text-gray-600 mb-6">
                    We maintain small batch sizes of maximum 15 students to ensure individual attention and better learning outcomes.
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Morning Batch</span>
                      <span className="font-semibold text-gray-900">5 seats left</span>
                    </div>
                    <Progress value={70} className="h-2" />
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Evening Batch</span>
                      <span className="font-semibold text-gray-900">3 seats left</span>
                    </div>
                    <Progress value={80} className="h-2" />
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Weekend Batch</span>
                      <span className="font-semibold text-gray-900">8 seats left</span>
                    </div>
                    <Progress value={40} className="h-2" />
                  </div>
                  
                  <Button asChild className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full py-6 font-semibold shadow-lg hover:shadow-xl transition-all">
                    <Link href="/contact">Book Your Seat Now</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ===== RELATED COURSES ===== */}
      {relatedCourses.length > 0 && (
        <section className="py-20 px-4 md:px-8 lg:px-12 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Related Courses
              </h2>
              <p className="text-lg text-gray-600">
                Explore similar courses in {course.categoryDisplay}
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {relatedCourses.map((related: { icon: any; id: React.Key | null | undefined; slug: any; gradient: any; lightBg: any; textColor: any; duration: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; name: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; fullName: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; level: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }) => {
                const RelatedIcon = related.icon;
                return (
                  <Link key={related.id} href={`/computer-courses/${related.slug}`} className="group">
                    <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${related.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                            <RelatedIcon className="w-7 h-7" />
                          </div>
                          <Badge className={`${related.lightBg} ${related.textColor} border-0`}>
                            {related.duration}
                          </Badge>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                          {related.name}
                        </h3>
                        
                        <p className="text-sm text-gray-500 mb-4">
                          {related.fullName}
                        </p>
                        
                        <div className="flex items-center justify-between mt-4">
                          <span className={`text-xs font-medium ${related.textColor}`}>
                            {related.level}
                          </span>
                          <span className="text-purple-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                            View Details <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ===== CTA SECTION ===== */}
      <section className="py-20 px-4 md:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <Card className="border-0 bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-2xl overflow-hidden">
            <CardContent className="p-12 md:p-16 text-center relative">
              <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
              
              <div className="relative z-10">
                <Badge variant="outline" className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-5 py-2 text-sm font-semibold mb-6">
                  <Zap className="w-4 h-4 mr-1" />
                  Start Your Journey Today
                </Badge>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  Ready to Master {course.name}?
                </h2>
                
                <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                  Join bCORE&apos;s {course.name} course in Pilathara, Payyanur and gain industry-relevant skills
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button asChild size="lg" className="bg-white text-purple-700 hover:bg-gray-100 rounded-full px-10 py-6 text-lg font-bold shadow-2xl hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    <Link href="/contact">
                      <Phone className="w-5 h-5 mr-2" />
                      Call 9447 082 101
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 rounded-full px-10 py-6 text-lg font-bold">
                    <Link href="/computer-courses">
                      Browse More Courses
                    </Link>
                  </Button>
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
            "name": course.fullName,
            "description": course.description,
            "provider": {
              "@type": "EducationalOrganization",
              "name": "bCORE Computer Education",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Bus Stand",
                "addressLocality": "Pilathara",
                "addressRegion": "Payyanur",
                "addressCountry": "IN",
                "postalCode": "670504"
              },
              "telephone": "+919447082101",
              "email": "bcorece@gmail.com"
            },
            "hasCourseInstance": {
              "@type": "CourseInstance",
              "courseMode": course.classMode === "Both" ? ["onsite", "online"] : course.classMode === "Offline" ? "onsite" : "online",
              "duration": `P${course.durationWeeks}W`,
              "location": {
                "@type": "Place",
                "name": "bCORE Computer Education",
                "address": "Bus Stand, Pilathara, Payyanur"
              }
            },
            "offers": {
              "@type": "Offer",
              "category": "Paid",
              "availability": "https://schema.org/InStock"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": course.rating,
              "reviewCount": course.reviews
            }
          })
        }}
      />
      
     
    </main>
  );
}