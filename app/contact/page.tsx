import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Clock, 
  Send,
  CheckCircle,
  Users,
  GraduationCap,
  Monitor,
  Award,
  ChevronRight,
  Building,
  Instagram,
  Facebook,
  Sparkles,
  MessageSquare,
  Calendar,
  User,
  BookOpen,
  Laptop,
  School,
  Landmark,
  ArrowRight
} from "lucide-react";

// Shadcn UI components
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const metadata = {
  title: "Contact Us | bCORE Computer Education - Pilathara, Payyanur",
  description: "Get in touch with bCORE Computer Education in Pilathara, Payyanur. Call 9447 082 101, email bcorece@gmail.com, or visit our centre at Bus Stand, Pilathara for computer courses and tuition classes.",
  keywords: "contact bCORE, bCORE Pilathara address, bCORE Payyanur phone number, computer centre contact, tuition centre near me, bcorece@gmail.com, 9447 082 101",
};

export default function ContactPage() {
  
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: ["Bus Stand, Pilathara", "Payyanur, Kannur District", "Kerala - 670504"],
      action: "Get Directions",
      link: "https://maps.app.goo.gl/FMfwJqdMGDajtcFRA",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: ["9447 082 101"],
      action: "Call Now",
      link: "tel:9447082101",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: ["bcorece@gmail.com"],
      action: "Send Email",
      link: "mailto:bcorece@gmail.com",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      details: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sunday: Closed"],
      action: "View Schedule",
      link: "#",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const courses = [
    { value: "pgdca", label: "PGDCA - Post Graduate Diploma" },
    { value: "dca", label: "DCA - Diploma in Computer Application" },
    { value: "tally", label: "Tally Prime with GST" },
    { value: "ms-office", label: "MS Office Suite" },
    { value: "graphic-design", label: "Graphic Designing" },
    { value: "animation", label: "Animation" },
    { value: "c-cpp", label: "C & C++ Programming" },
    { value: "photoshop", label: "Adobe Photoshop" },
    { value: "coreldraw", label: "CorelDRAW" },
    { value: "html", label: "HTML & Web Design" },
    { value: "tuition-5-10", label: "Tuition Classes 5-10 (CBSE)" },
    { value: "tuition-11-12", label: "Tuition Classes 11-12" },
    { value: "spoken-english", label: "Spoken English & Hindi" },
    { value: "vacation", label: "Vacation Courses" }
  ];

  const locations = [
    "Pilathara",
    "Payyanur",
    "Pariyaram",
    "Taliparamba",
    
  ];

  const faqs = [
    {
      question: "What are the admission hours at bCORE?",
      answer: "Our centre is open from 9:00 AM to 6:00 PM, Monday to Saturday. You can visit during these hours for admission inquiries and course counselling."
    },
    {
      question: "Do you offer weekend batches?",
      answer: "Yes, we offer weekend batches for working professionals and college students. Please contact us for specific batch timings."
    },
    {
      question: "What is the fee structure for computer courses?",
      answer: "Our fees are affordable and vary by course. Please contact us directly for detailed fee information. We also offer early bird discounts and installment options."
    },
   
  ];

  return (
    <>
      <main className="flex-grow bg-white ">
        
        {/* ===== HERO SECTION ===== */}
        <section className="relative bg-primary text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-[url('/pattern-grid.svg')] opacity-10"></div>
          
          <div className="relative container mx-auto px-4 md:px-8 lg:px-12 py-20 md:py-28">
            <div className="max-w-4xl mx-auto text-center">
              
              {/* Breadcrumb */}
              <div className="flex items-center justify-center gap-2 text-sm text-blue-200 mb-6">
                <Link href="/" className="hover:text-white transition flex items-center gap-1">
                  <Building className="w-3 h-3" /> Home
                </Link>
                <ChevronRight className="w-3 h-3" />
                <span className="flex items-center gap-1">
                  <MessageSquare className="w-3 h-3" /> Contact Us
                </span>
              </div>
              
              {/* H1 */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-6">
                Contact bCORE Computer Education
              </h1>
              
              <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-10">
                Get in touch with us for admissions, course inquiries, or any questions about our 
                tuition classes and computer courses in Pilathara, Payyanur.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  <Link href="#enquiry-form">
                    <Send className="w-5 h-5 mr-2" />
                    Enquire Now
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-blue-800/50 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-blue-800 rounded-full px-8 py-6 text-lg font-bold">
                  <Link href="tel:9447082101">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Us: 9447 082 101
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Bottom Wave */}
          <div className="absolute bottom-0 left-0 w-full">
            <svg viewBox="0 0 1440 120" className="w-full h-auto" preserveAspectRatio="none">
              <path
                d="M0,64L80,74.7C160,85,320,107,480,101.3C640,96,800,64,960,58.7C1120,53,1280,75,1360,85.3L1440,96V120H0Z"
                fill="white"
              ></path>
            </svg>
          </div>
        </section>

        {/* ===== CONTACT INFO CARDS ===== */}
        <section className="py-16 md:py-20 px-4 md:px-8 lg:px-12 -mt-16 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((item, index) => (
                <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white mb-4 shadow-lg`}>
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <div className="space-y-1 text-gray-600 text-sm mb-4">
                      {item.details.map((detail, idx) => (
                        <p key={idx}>{detail}</p>
                      ))}
                    </div>
                    <Button asChild variant="link" className="text-blue-600 font-semibold">
                      <Link href={item.link} className="flex items-center gap-1">
                        {item.action} <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ===== MAP & ENQUIRY FORM ===== */}
        <section id="enquiry-form" className="py-16 md:py-20 px-4 md:px-8 lg:px-12 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Left - Google Map */}
              <div>
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 rounded-full px-4 py-2 mb-4 border-0">
                  <MapPin className="w-4 h-4 mr-1" /> Visit Our Centre
                </Badge>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  We&apos;re Located at Bus Stand, Pilathara
                </h2>
                <p className="text-gray-600 mb-6">
                  Easily accessible from Payyanur, Pariyaram and surrounding areas in Kannur district.
                </p>
                
                {/* Map Container */}
                <div className="rounded-3xl overflow-hidden shadow-2xl mb-6 h-[300px] md:h-[400px] relative">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.468310118528!2d75.26348169999999!3d12.0800591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba46b76ce6e9ffb%3A0xab3dfe0fc28feb31!2sBcore%20Computers%20%26%20Tuition!5e0!3m2!1sen!2sin!4v1770908715903!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="bCORE Computer Education Location - Bus Stand, Pilathara"
                    className="absolute inset-0"
                  ></iframe>
                </div>
                
                {/* Location Tags */}
                <div className="flex flex-wrap gap-2">
                  {locations.map((location, idx) => (
                    <Badge key={idx} variant="outline" className="bg-white text-gray-700 border-gray-200 px-3 py-1.5">
                      <MapPin className="w-3 h-3 mr-1" /> {location}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* Right - Enquiry Form */}
              <div>
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 rounded-full px-4 py-2 mb-4 border-0">
                  <Send className="w-4 h-4 mr-1" /> Quick Enquiry
                </Badge>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 mb-6">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>
                
                <Card className="border-0 shadow-xl">
                  <CardContent className="p-6 md:p-8">
                    <form className="space-y-6">
                      {/* Name */}
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-700 font-medium">
                          Full Name <span className="text-red-500">*</span>
                        </Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <Input 
                            id="name" 
                            placeholder="Enter your full name" 
                            className="pl-10 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                            required
                          />
                        </div>
                      </div>
                      
                      {/* Email */}
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-700 font-medium">
                          Email Address <span className="text-red-500">*</span>
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <Input 
                            id="email" 
                            type="email" 
                            placeholder="you@example.com" 
                            className="pl-10 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                            required
                          />
                        </div>
                      </div>
                      
                      {/* Phone */}
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-gray-700 font-medium">
                          Phone Number <span className="text-red-500">*</span>
                        </Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <Input 
                            id="phone" 
                            type="tel" 
                            placeholder="9447 082 101" 
                            className="pl-10 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                            required
                          />
                        </div>
                      </div>
                      
                      {/* Course Selection */}
                      <div className="space-y-2">
                        <Label htmlFor="course" className="text-gray-700 font-medium">
                          I&apos;m interested in <span className="text-red-500">*</span>
                        </Label>
                        <Select>
                          <SelectTrigger className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500 h-12">
                            <SelectValue placeholder="Select a course" />
                          </SelectTrigger>
                          <SelectContent>
                            {courses.map((course) => (
                              <SelectItem key={course.value} value={course.value}>
                                {course.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      {/* Message */}
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-gray-700 font-medium">
                          Your Message
                        </Label>
                        <Textarea 
                          id="message" 
                          placeholder="Tell us more about your requirements..." 
                          className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500 min-h-[120px]"
                        />
                      </div>
                      
                      {/* Preferred Contact Mode */}
                      <div className="space-y-2">
                        <Label className="text-gray-700 font-medium">Preferred contact mode</Label>
                        <div className="flex flex-wrap gap-4">
                          <div className="flex items-center space-x-2">
                            <input type="radio" id="phone-mode" name="contact-mode" className="text-blue-600" />
                            <Label htmlFor="phone-mode" className="text-sm font-normal text-gray-600">Phone</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input type="radio" id="email-mode" name="contact-mode" className="text-blue-600" />
                            <Label htmlFor="email-mode" className="text-sm font-normal text-gray-600">Email</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input type="radio" id="whatsapp-mode" name="contact-mode" className="text-blue-600" />
                            <Label htmlFor="whatsapp-mode" className="text-sm font-normal text-gray-600">WhatsApp</Label>
                          </div>
                        </div>
                      </div>
                      
                      {/* Consent */}
                      <div className="flex items-start gap-2">
                        <input type="checkbox" id="consent" className="mt-1 text-blue-600 rounded" required />
                        <Label htmlFor="consent" className="text-xs text-gray-500 font-normal">
                          I agree to receive communications from bCORE Computer Education. 
                          Your data is secure with us. <span className="text-red-500">*</span>
                        </Label>
                      </div>
                      
                      {/* Submit Button */}
                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700 text-white font-bold py-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
                      >
                        <Send className="w-5 h-5 mr-2" />
                        Submit Enquiry
                      </Button>
                      
                      <p className="text-xs text-center text-gray-400 mt-4">
                        🔒 100% confidential. We respect your privacy.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SOCIAL MEDIA SECTION ===== */}
        <section className="py-16 px-4 md:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-200 rounded-full px-4 py-2 mb-4 border-0">
                <Users className="w-4 h-4 mr-1" /> Connect With Us
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Follow Us on Social Media
              </h2>
              <p className="text-gray-600 text-lg">
                Stay updated with course announcements, results, and education tips
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-6">
              {/* Instagram - bcore.ce */}
              <Link href="https://instagram.com/bcore.ce" target="_blank" rel="noopener noreferrer">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-64">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-pink-600 rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg">
                      <Instagram className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">@bcore.ce</h3>
                    <p className="text-sm text-gray-500 mb-3">Main Account</p>
                  </CardContent>
                </Card>
              </Link>
              
              {/* Instagram - bcore.tuition */}
              <Link href="https://instagram.com/bcore.tuition" target="_blank" rel="noopener noreferrer">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-64">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-pink-600 rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg">
                      <Instagram className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">@bcore.tuition</h3>
                    <p className="text-sm text-gray-500 mb-3">Tuition Updates</p>
                  </CardContent>
                </Card>
              </Link>
              
              {/* Facebook - bcore.ce */}
              <Link href="https://facebook.com/bcore.ce" target="_blank" rel="noopener noreferrer">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-64">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg">
                      <Facebook className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">@bcore.ce</h3>
                    <p className="text-sm text-gray-500 mb-3">Facebook Page</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* ===== FAQ SECTION ===== */}
        <section className="py-16 md:py-20 bg-gray-50 px-4 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-green-100 text-green-700 hover:bg-green-200 rounded-full px-4 py-2 mb-4 border-0">
                <MessageSquare className="w-4 h-4 mr-1" /> Frequently Asked Questions
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Have Questions? We&apos;re Here to Help
              </h2>
              <p className="text-gray-600 text-lg">
                Find answers to common questions about admissions, courses, and more
              </p>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-start gap-2">
                      <span className="text-blue-600 mt-0.5">Q:</span>
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 pl-6 flex items-start gap-2">
                      <span className="text-green-600 font-bold">A:</span>
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <p className="text-gray-600 mb-4">Still have questions?</p>
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6">
                <Link href="#enquiry-form">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Ask Us Directly
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ===== CTA SECTION ===== */}
        <section className="py-16 px-4 md:px-8 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <Card className="border-0 bg-gradient-to-r from-blue-700 to-blue-800 text-white shadow-2xl overflow-hidden">
              <CardContent className="p-10 md:p-16 text-center relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 bg-[url('/pattern-grid.svg')] opacity-10"></div>
                
                <div className="relative z-10">
                  <Badge variant="outline" className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-5 py-2 text-sm font-semibold mb-6">
                    <Sparkles className="w-4 h-4 mr-1" /> Admissions Open 
                  </Badge>
                  
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    Ready to Start Your Learning Journey?
                  </h2>
                  
                  <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                    Join bCORE today and get access to expert faculty, modern labs, and job-oriented training
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-gray-100 rounded-full px-10 py-6 text-lg font-bold shadow-2xl hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                      <Link href="tel:9447082101">
                        <Phone className="w-5 h-5 mr-2" />
                        Call 9447 082 101
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 rounded-full px-10 py-6 text-lg font-bold">
                      <Link href="/computer-courses-pilathara-payyanur">
                        <Monitor className="w-5 h-5 mr-2" />
                        View Courses
                      </Link>
                    </Button>
                  </div>
                  
                  <div className="flex flex-wrap items-center justify-center gap-4 mt-10 text-sm text-blue-200">
                    <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> 18+ Courses</span>
                    <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> 1000+ Students</span>
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
              "@type": "EducationalOrganization",
              "name": "bCORE Computer Education",
              "description": "Computer training and tuition centre in Pilathara, Payyanur",
              "url": "https://www.bcore.in",
              "logo": "https://www.bcore.in/logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Bus Stand",
                "addressLocality": "Pilathara",
                "addressRegion": "Payyanur",
                "addressCountry": "IN",
                "postalCode": "670504"
              },
              "telephone": "+919447082101",
              "email": "bcorece@gmail.com",
              "openingHours": "Mo-Fr 09:00-19:00, Sa 09:00-19:00",
              "sameAs": [
                "https://instagram.com/bcore.ce",
                "https://instagram.com/bcore.tuition",
                "https://facebook.com/bcore.ce"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+919447082101",
                "contactType": "customer service",
                "availableLanguage": ["English", "Malayalam", "Hindi"]
              }
            })
          }}
        />
      </main>
    </>
  );
}