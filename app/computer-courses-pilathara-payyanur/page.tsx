import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
import { 
  Monitor, 
  Award, 
  Briefcase, 
  Clock, 
  Wifi, 
  Users, 
  MapPin, 
  Phone, 
  Mail,
  CheckCircle,
  Code,
  Palette,
  FileText,
  Calculator,
  Sparkles,
  GraduationCap,
  BookOpen,
  ChevronRight,
  Star,
  Building,
  Calendar,
  Laptop,
  Brain,
  Cpu,
  GanttChartSquare,
  Layout,
  Layers,
  PenTool,
  Gamepad2,
  Hash,
  Globe,
  Languages,
  SunSnow,
  ArrowRight,
  BadgeCheck,
  School,
  Landmark,
  Rocket
} from "lucide-react";

// Shadcn UI components
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Computer Courses in Pilathara, Payyanur | PGDCA, DCA, Tally, MS Office | bCORE",
  description: "Looking for computer courses in Pilathara, Payyanur? bCORE offers PGDCA, DCA, Tally, MS Office, Photoshop, Graphic Designing, C++, HTML & more. Job-oriented training with certificates.",
  keywords: "computer courses in Pilathara, computer courses in Payyanur, PGDCA Payyanur, DCA Pilathara, Tally course Payyanur, MS Office training Pilathara, graphic designing course Kannur, computer centre near me",
};

// Course data with individual slugs and detailed info
const allCourses = [
  { 
    id: "pgdca",
    name: "PGDCA", 
    fullName: "Post Graduate Diploma in Computer Application",
    category: "diploma", 
    icon: <GraduationCap className="w-5 h-5" />,
    duration: "1 Year",
    level: "Advanced",
    description: "Comprehensive postgraduate diploma covering advanced computer applications, programming, and database management.",
    curriculum: ["Advanced Programming", "Database Management", "Web Development", "Software Engineering", "Project Work"],
    fee: "Contact for fee",
    slug: "/computer-courses-pilathara-payyanur/pgdca"
  },
  { 
    id: "dca",
    name: "DCA", 
    fullName: "Diploma in Computer Application",
    category: "diploma", 
    icon: <GraduationCap className="w-5 h-5" />,
    duration: "6 Months",
    level: "Beginner",
    description: "Foundation course covering basic computer applications, MS Office, internet, and programming fundamentals.",
    curriculum: ["Computer Fundamentals", "MS Office", "Internet", "Programming Basics", "Accounting"],
    fee: "Contact for fee",
    slug: "/computer-courses-pilathara-payyanur/dca"
  },
  { 
    id: "cttc",
    name: "CTTC", 
    fullName: "Certificate in Teacher Training Course",
    category: "diploma", 
    icon: <Award className="w-5 h-5" />,
    duration: "3 Months",
    level: "Intermediate",
    description: "Specialized course for aspiring computer teachers with teaching methodologies and subject expertise.",
    curriculum: ["Teaching Methods", "Computer Fundamentals", "Lesson Planning", "Student Assessment", "Classroom Management"],
    fee: "Contact for fee",
    slug: "/computer-courses-pilathara-payyanur/cttc"
  },
  { 
    id: "dcm",
    name: "DCM", 
    fullName: "Diploma in Computer Multimedia",
    category: "diploma", 
    icon: <Monitor className="w-5 h-5" />,
    duration: "6 Months",
    level: "Intermediate",
    description: "Diploma program focusing on multimedia applications, animation, and graphic design.",
    curriculum: ["Graphic Design", "Animation", "Video Editing", "Audio Processing", "Web Design"],
    fee: "Contact for fee",
    slug: "/computer-courses-pilathara-payyanur/dcm"
  },
  { 
    id: "animation",
    name: "ANIMATION", 
    fullName: "2D & 3D Animation",
    category: "design", 
    icon: <Sparkles className="w-5 h-5" />,
    duration: "4 Months",
    level: "Beginner to Advanced",
    description: "Learn 2D and 3D animation techniques, character design, and visual effects.",
    curriculum: ["2D Animation", "3D Modeling", "Character Design", "Visual Effects", "Rendering"],
    fee: "Contact for fee",
    slug: "/computer-courses-pilathara-payyanur/animation"
  },
  { 
    id: "graphic-designing",
    name: "GRAPHIC DESIGNING", 
    fullName: "Professional Graphic Designing",
    category: "design", 
    icon: <Palette className="w-5 h-5" />,
    duration: "4 Months",
    level: "Beginner to Advanced",
    description: "Master graphic design tools and techniques for print and digital media.",
    curriculum: ["Photoshop", "Illustrator", "CorelDRAW", "InDesign", "Typography", "Color Theory"],
    fee: "Contact for fee",
    slug: "/computer-courses-pilathara-payyanur/graphic-designing"
  },
  { 
    id: "ms-office",
    name: "MS-OFFICE", 
    fullName: "Microsoft Office Suite",
    category: "it", 
    icon: <FileText className="w-5 h-5" />,
    duration: "2 Months",
    level: "Beginner",
    description: "Complete training on MS Word, Excel, PowerPoint, Access, and Outlook.",
    curriculum: ["MS Word", "MS Excel", "MS PowerPoint", "MS Access", "MS Outlook"],
    fee: "Contact for fee",
    slug: "/computer-courses-pilathara-payyanur/ms-office"
  },
  { 
    id: "dtp",
    name: "DTP", 
    fullName: "Desktop Publishing",
    category: "it", 
    icon: <Layout className="w-5 h-5" />,
    duration: "3 Months",
    level: "Beginner",
    description: "Learn page layout, design, and publishing software for print media.",
    curriculum: ["PageMaker", "CorelDRAW", "Photoshop", "InDesign", "Print Production"],
    fee: "Contact for fee",
    slug: "/computer-courses-pilathara-payyanur/dtp"
  },
  { 
    id: "tally",
    name: "TALLY", 
    fullName: "Tally Prime with GST",
    category: "accounting", 
    icon: <Calculator className="w-5 h-5" />,
    duration: "3 Months",
    level: "Beginner",
    description: "Complete accounting and inventory management with GST filing training.",
    curriculum: ["Accounting Basics", "Tally Prime", "GST Filing", "Inventory", "Payroll", "Reports"],
    fee: "Contact for fee",
    slug: "/computer-courses-pilathara-payyanur/tally"
  },
  { 
    id: "c-cpp",
    name: "C & C++", 
    fullName: "C & C++ Programming",
    category: "programming", 
    icon: <Code className="w-5 h-5" />,
    duration: "4 Months",
    level: "Intermediate",
    description: "Master C and C++ programming languages with data structures and OOP concepts.",
    curriculum: ["C Fundamentals", "OOP Concepts", "Data Structures", "File Handling", "STL", "Projects"],
    fee: "Contact for fee",
    slug: "/computer-courses-pilathara-payyanur/c-cpp"
  },
  { 
    id: "photoshop",
    name: "PHOTOSHOP", 
    fullName: "Adobe Photoshop",
    category: "design", 
    icon: <Palette className="w-5 h-5" />,
    duration: "2 Months",
    level: "Beginner to Advanced",
    description: "Professional image editing, photo retouching, and digital art creation.",
    curriculum: ["Photo Editing", "Retouching", "Layers & Masks", "Color Correction", "Digital Painting"],
    fee: "Contact for fee",
    slug: "/computer-courses-pilathara-payyanur/photoshop"
  },
  { 
    id: "illustrator",
    name: "ILLUSTRATOR", 
    fullName: "Adobe Illustrator",
    category: "design", 
    icon: <PenTool className="w-5 h-5" />,
    duration: "2 Months",
    level: "Beginner to Advanced",
    description: "Vector graphics design for logos, illustrations, and print materials.",
    curriculum: ["Vector Graphics", "Logo Design", "Typography", "Illustration", "Print Design"],
    fee: "Contact for fee",
    slug: "/computer-courses-pilathara-payyanur/illustrator"
  },
  { 
    id: "imageready",
    name: "IMAGEREADY", 
    fullName: "Adobe ImageReady",
    category: "design", 
    icon: <Layers className="w-5 h-5" />,
    duration: "1 Month",
    level: "Beginner",
    description: "Web graphics and basic animation creation.",
    curriculum: ["Web Graphics", "Image Optimization", "Basic Animation", "Rollovers", "Slicing"],
    fee: "Contact for fee",
    slug: "/computer-courses-pilathara-payyanur/imageready"
  },
  { 
    id: "coreldraw",
    name: "CORELDRAW", 
    fullName: "CorelDRAW Graphics Suite",
    category: "design", 
    icon: <PenTool className="w-5 h-5" />,
    duration: "2 Months",
    level: "Beginner",
    description: "Vector illustration and page layout software for creative design.",
    curriculum: ["Vector Illustration", "Layout Design", "Typography", "Photo Editing", "Print Ready"],
    fee: "Contact for fee",
    slug: "/computer-courses-pilathara-payyanur/coreldraw"
  },
  { 
    id: "flash",
    name: "FLASH", 
    fullName: "Adobe Flash Animation",
    category: "design", 
    icon: <Sparkles className="w-5 h-5" />,
    duration: "2 Months",
    level: "Intermediate",
    description: "2D animation and interactive content creation.",
    curriculum: ["2D Animation", "Frame by Frame", "Tweening", "Actionscript", "Interactive Content"],
    fee: "Contact for fee",
    slug: "/computer-courses-pilathara-payyanur/flash"
  },
  { 
    id: "html",
    name: "HTML", 
    fullName: "HTML & Web Design",
    category: "programming", 
    icon: <Globe className="w-5 h-5" />,
    duration: "2 Months",
    level: "Beginner",
    description: "Learn HTML5, CSS3, and responsive web design fundamentals.",
    curriculum: ["HTML5", "CSS3", "Responsive Design", "Flexbox", "Grid", "Basic JavaScript"],
    fee: "Contact for fee",
    slug: "/computer-courses-pilathara-payyanur/html"
  },
  { 
    id: "ism-malayalam",
    name: "ISM MALAYALAM", 
    fullName: "ISM Malayalam Typing",
    category: "it", 
    icon: <Languages className="w-5 h-5" />,
    duration: "1 Month",
    level: "Beginner",
    description: "Malayalam typing and documentation using ISM software.",
    curriculum: ["ISM Software", "Malayalam Typing", "Document Formatting", "Translation", "Layout"],
    fee: "Contact for fee",
    slug: "/computer-courses-pilathara-payyanur/ism-malayalam"
  },
  { 
    id: "vacation-courses",
    name: "VACATION COURSES", 
    fullName: "Summer & Vacation Courses",
    category: "shortterm", 
    icon: <SunSnow className="w-5 h-5" />,
    duration: "1-2 Months",
    level: "Beginner",
    description: "Special short-term courses during school/college vacations.",
    curriculum: ["Basic Computer", "MS Office", "Internet", "Typing", "Creative Design"],
    fee: "Contact for fee",
    slug: "/computer-courses-pilathara-payyanur/vacation"
  }
];

const categories = [
  {
    id: "diploma",
    title: "Diploma Programs",
    color: "from-purple-600 to-purple-700",
    lightBg: "bg-purple-50",
    textColor: "text-purple-700",
    borderColor: "border-purple-200",
    icon: <GraduationCap className="w-6 h-6" />
  },
  {
    id: "design",
    title: "Graphic Designing & Animation",
    color: "from-pink-600 to-pink-700",
    lightBg: "bg-pink-50",
    textColor: "text-pink-700",
    borderColor: "border-pink-200",
    icon: <Palette className="w-6 h-6" />
  },
  {
    id: "it",
    title: "IT & Office Applications",
    color: "from-blue-600 to-blue-700",
    lightBg: "bg-blue-50",
    textColor: "text-blue-700",
    borderColor: "border-blue-200",
    icon: <Laptop className="w-6 h-6" />
  },
  {
    id: "programming",
    title: "Programming Languages",
    color: "from-green-600 to-green-700",
    lightBg: "bg-green-50",
    textColor: "text-green-700",
    borderColor: "border-green-200",
    icon: <Code className="w-6 h-6" />
  },
  {
    id: "accounting",
    title: "Accounting & Tally",
    color: "from-orange-600 to-orange-700",
    lightBg: "bg-orange-50",
    textColor: "text-orange-700",
    borderColor: "border-orange-200",
    icon: <Calculator className="w-6 h-6" />
  },
  {
    id: "shortterm",
    title: "Short Term & Vacation",
    color: "from-cyan-600 to-cyan-700",
    lightBg: "bg-cyan-50",
    textColor: "text-cyan-700",
    borderColor: "border-cyan-200",
    icon: <Clock className="w-6 h-6" />
  }
];

const features = [
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Job-Oriented Training",
    description: "Industry-relevant curriculum designed for career success",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Certified Courses",
    description: "Recognized certificates to boost your resume",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: <Monitor className="w-6 h-6" />,
    title: "Practical Lab Training",
    description: "Hands-on experience with modern computer labs",
    color: "from-pink-500 to-pink-600"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Expert Faculty",
    description: "Industry experienced instructors",
    color: "from-green-500 to-green-600"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Flexible Batches",
    description: "Morning, evening & weekend batches available",
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: <Wifi className="w-6 h-6" />,
    title: "Smart Lab Facility",
    description: "AC classrooms with high-speed internet",
    color: "from-cyan-500 to-cyan-600"
  }
];

const locations = [
  { name: "Pilathara", icon: <MapPin className="w-3 h-3" /> },
  { name: "Payyanur", icon: <MapPin className="w-3 h-3" /> },
  { name: "Pariyaram", icon: <MapPin className="w-3 h-3" /> },
  { name: "Taliparamba", icon: <MapPin className="w-3 h-3" /> },

];

export default function ComputerCoursesPage() {
  return (
    <>
      <main className="flex-grow bg-white">
        
        {/* ===== HERO SECTION ===== */}
        <section className="relative bg-gradient-to-br from-purple-700 to-blue-800 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-[url('/pattern-grid.svg')] opacity-10"></div>
          
          <div className="relative container mx-auto px-4 md:px-8 lg:px-12 py-20 md:py-28 lg:py-32">
            <div className="max-w-4xl mx-auto text-center">
              
              {/* Breadcrumb */}
              <div className="flex items-center justify-center gap-2 text-sm text-purple-200 mb-6">
                <Link href="/" className="hover:text-white transition flex items-center gap-1">
                  <Building className="w-3 h-3" /> Home
                </Link>
                <ChevronRight className="w-3 h-3" />
                <span className="flex items-center gap-1">
                  <Monitor className="w-3 h-3" /> Computer Courses
                </span>
              </div>
              
              {/* H1 - Most Important SEO Element */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-6">
                Computer Courses in Pilathara, Payyanur
              </h1>
              
              <p className="text-lg md:text-xl text-purple-100 max-w-3xl mx-auto mb-10">
                bCORE offers job-oriented computer courses including PGDCA, DCA, Tally, MS Office, 
                Graphic Designing, and Programming with practical lab training.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="bg-white text-purple-700 hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  <Link href="/contact">
                    <GraduationCap className="w-5 h-5 mr-2" />
                    Enroll Now
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-purple-800/50 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-purple-800 rounded-full px-8 py-6 text-lg font-bold">
                  <Link href="#courses">
                    <Monitor className="w-5 h-5 mr-2" />
                    View All Courses
                  </Link>
                </Button>
              </div>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
                <Badge variant="outline" className="bg-white/10 text-purple-100 border-purple-300/30 px-4 py-2 text-sm">
                  <BadgeCheck className="w-4 h-4 mr-1" /> 18+ Professional Courses
                </Badge>
                
                <Badge variant="outline" className="bg-white/10 text-purple-100 border-purple-300/30 px-4 py-2 text-sm">
                  <MapPin className="w-4 h-4 mr-1" /> Pilathara, Payyanur
                </Badge>
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

        {/* ===== INTRO SECTION ===== */}
        <section className="py-16 md:py-20 px-4 md:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              
              {/* Left Content */}
              <div>
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 rounded-full px-4 py-2 mb-4 border-0">
                  <School className="w-4 h-4 mr-1" /> Since 2010
                </Badge>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Best Computer Training Institute in Payyanur
                </h2>
                
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    <strong className="text-blue-700">bCORE Computer Education</strong> is the leading 
                    <strong className="text-blue-700"> computer training institute in Pilathara, Payyanur</strong>, 
                    offering job-oriented courses for students, graduates, and working professionals.
                  </p>
                  
                  <p>
                    Our courses are designed to meet industry demands with <strong className="text-blue-700">practical lab-based training</strong>, 
                    experienced faculty, and affordable fees. We provide recognized certificates that enhance your employability.
                  </p>
                  
                  <p>
                    Whether you&apos;re a <strong className="text-blue-700">fresher looking for your first job</strong> or a 
                    <strong className="text-blue-700"> professional wanting to upgrade skills</strong>, bCORE has the right course for you.
                  </p>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <Card className="border-0 shadow-sm bg-gradient-to-b from-gray-50 to-white">
                    <CardContent className="p-4 text-center">
                      <div className="text-3xl font-bold text-blue-700">18+</div>
                      <div className="text-xs text-gray-600 mt-1 flex items-center justify-center gap-1">
                        <Laptop className="w-3 h-3" /> Courses
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-0 shadow-sm bg-gradient-to-b from-gray-50 to-white">
                    <CardContent className="p-4 text-center">
                      <div className="text-3xl font-bold text-blue-700">1000+</div>
                      <div className="text-xs text-gray-600 mt-1 flex items-center justify-center gap-1">
                        <Users className="w-3 h-3" /> Students
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-0 shadow-sm bg-gradient-to-b from-gray-50 to-white">
                    <CardContent className="p-4 text-center">
                      <div className="text-3xl font-bold text-blue-700">95%</div>
                      <div className="text-xs text-gray-600 mt-1 flex items-center justify-center gap-1">
                        <Briefcase className="w-3 h-3" /> Placement
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              {/* Right Image */}
              <div className="relative h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/computer-2.png"
                  alt="Computer lab at bCORE computer courses in Pilathara, Payyanur"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
               
              </div>
            </div>
          </div>
        </section>

        {/* ===== FEATURES SECTION ===== */}
        <section className="py-16 md:py-20 bg-gray-50 px-4 md:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 rounded-full px-4 py-2 mb-4 border-0">
                <Star className="w-4 h-4 mr-1" /> Why Choose bCORE
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why bCORE for Computer Courses?
              </h2>
              <p className="text-gray-600 text-lg">
                Industry-relevant training with practical approach
              </p>
            </div>
            
            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="border shadow-none bg-muted transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mb-5 shadow-md`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ===== ALL COURSES SECTION ===== */}
        <section id="courses" className="py-16 md:py-20 px-4 md:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 rounded-full px-4 py-2 mb-4 border-0">
                <BookOpen className="w-4 h-4 mr-1" /> 18+ Professional Courses
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                All Computer Courses We Offer
              </h2>
              <p className="text-gray-600 text-lg">
                Complete list of courses from bCORE Computer Education, Pilathara
              </p>
            </div>
            
            {/* Categories Grid */}
            <div className="space-y-10">
              {categories.map((category) => {
                const categoryCourses = allCourses.filter(c => c.category === category.id);
                if (categoryCourses.length === 0) return null;
                
                return (
                  <div key={category.id} className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
                    {/* Category Header */}
                    <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                          {category.icon}
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold">{category.title}</h3>
                          <p className="text-white/80 text-sm mt-1 flex items-center gap-1">
                            <Layers className="w-3 h-3" /> {categoryCourses.length} Courses
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Courses Grid - Clickable Cards */}
                    <div className="p-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        {categoryCourses.map((course, idx) => (
                          <Link 
                            key={idx} 
                            href={course.slug}
                            className="group"
                          >
                            <div className={`${category.lightBg} ${category.textColor} p-4 rounded-xl border ${category.borderColor} hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer h-full flex flex-col`}>
                              <div className="flex items-center gap-2 mb-2">
                                <span className="flex-shrink-0 p-1.5 bg-white rounded-lg shadow-sm">
                                  {course.icon}
                                </span>
                                <span className="font-bold text-sm truncate">{course.name}</span>
                              </div>
                              <p className="text-xs text-gray-600 line-clamp-2 mb-2">
                                {course.fullName}
                              </p>
                              <div className="flex items-center justify-between mt-auto">
                                <div className="flex items-center gap-1 text-[10px] bg-white/60 px-2 py-1 rounded-full">
                                  <Clock className="w-2.5 h-2.5" />
                                  <span>{course.duration}</span>
                                </div>
                                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Course Stats */}
            <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold">18+</div>
                  <div className="text-sm text-white/80 mt-1 flex items-center justify-center gap-1">
                    <BookOpen className="w-3 h-3" /> Total Courses
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold">6</div>
                  <div className="text-sm text-white/80 mt-1 flex items-center justify-center gap-1">
                    <Layers className="w-3 h-3" /> Categories
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold">Diploma</div>
                  <div className="text-sm text-white/80 mt-1 flex items-center justify-center gap-1">
                    <Award className="w-3 h-3" /> Certified Programs
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold">Vacation</div>
                  <div className="text-sm text-white/80 mt-1 flex items-center justify-center gap-1">
                    <SunSnow className="w-3 h-3" /> Short Term Courses
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== POPULAR COURSES HIGHLIGHT ===== */}
        <section className="py-16 md:py-20 bg-gray-50 px-4 md:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200 rounded-full px-4 py-2 mb-4 border-0">
                <Star className="w-4 h-4 mr-1" /> Most Popular
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Most Popular Courses
              </h2>
              <p className="text-gray-600 text-lg">
                Highly sought-after programs by students in Payyanur & Pilathara
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* PGDCA */}
              <Link href="/computer-courses-pilathara-payyanur/pgdca" className="group">
                <Card className="border shadow-none bg-purple-100 transition-all duration-300 hover:scale-[1.02]">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center text-white mb-5 shadow-md group-hover:scale-110 transition-transform">
                      <GraduationCap className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">PGDCA</h3>
                    <p className="text-sm text-gray-600 mb-4">Post Graduate Diploma in Computer Application</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                        <Clock className="w-3 h-3 mr-1" /> 1 Year
                      </Badge>
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                        <Brain className="w-3 h-3 mr-1" /> Advanced
                      </Badge>
                    </div>
                    <div className="text-purple-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      View Details <ArrowRight className="w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
              
              {/* DCA */}
              <Link href="/computer-courses-pilathara-payyanur/dca" className="group">
                <Card className="border shadow-none bg-blue-100 transition-all duration-300 hover:scale-[1.02]">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center text-white mb-5 shadow-md group-hover:scale-110 transition-transform">
                      <Monitor className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">DCA</h3>
                    <p className="text-sm text-gray-600 mb-4">Diploma in Computer Application</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                        <Clock className="w-3 h-3 mr-1" /> 6 Months
                      </Badge>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        <Cpu className="w-3 h-3 mr-1" /> Beginner
                      </Badge>
                    </div>
                    <div className="text-blue-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      View Details <ArrowRight className="w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
              
              {/* Tally */}
              <Link href="/computer-courses-pilathara-payyanur/tally" className="group">
                <Card className="border shadow-none bg-orange-100 transition-all duration-300 hover:scale-[1.02]">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl flex items-center justify-center text-white mb-5 shadow-md group-hover:scale-110 transition-transform">
                      <Calculator className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Tally Prime</h3>
                    <p className="text-sm text-gray-600 mb-4">Accounting & GST Training</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                        <Clock className="w-3 h-3 mr-1" /> 3 Months
                      </Badge>
                      <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                        <Briefcase className="w-3 h-3 mr-1" /> Job Oriented
                      </Badge>
                    </div>
                    <div className="text-orange-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      View Details <ArrowRight className="w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* ===== LOCATION & CONTACT ===== */}
        <section className="py-16 md:py-20 px-4 md:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left - Location Advantage */}
              <div className="bg-gradient-to-br from-orange-600 to-orange-400 rounded-3xl p-8 md:p-10 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2">
                  <MapPin className="w-7 h-7" />
                  Location Advantage
                </h3>
                
                <p className="text-orange-100 mb-6 text-md tracking-tight flex items-center gap-2">
                  <Building className="w-5 h-5" />
                  <p>
                  Our computer centre is located at <strong className="text-white">Bus Stand, Pilathara</strong>, 
                  easily accessible from:
                  </p>
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
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
                
                <div className="space-y-3 text-orange-100">
                  <p className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-white" />
                    <span>Bus Stand, Pilathara, Payyanur, Kerala - 670504</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-white" />
                    <span>Mon - Sat: 10:00 AM - 6:00 PM</span>
                  </p>
                </div>
              </div>
              
              {/* Right - Why Join */}
              <div className="bg-muted rounded-3xl  p-8 md:p-10 border ">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <BadgeCheck className="w-7 h-7 text-green-600" />
                  Why Join bCORE for Computer Courses?
                </h3>
                
                <div className="space-y-4">
                  {[
                    { icon: <GraduationCap className="w-5 h-5" />, text: "<strong>18+ Courses</strong> - From diploma to short term" },
                    { icon: <Monitor className="w-5 h-5" />, text: "<strong>Practical Training</strong> - 80% lab, 20% theory" },
                    { icon: <Award className="w-5 h-5" />, text: "<strong>Certified Faculty</strong> - Industry experienced trainers" },
                    { icon: <Briefcase className="w-5 h-5" />, text: "<strong>Placement Support</strong> - Job assistance provided" },
                    { icon: <Calculator className="w-5 h-5" />, text: "<strong>Affordable Fees</strong> - Quality education at best price" },
                    { icon: <Clock className="w-5 h-5" />, text: "<strong>Flexible Batches</strong> - Morning, evening & weekend" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0 mt-0.5">
                        {item.icon}
                      </div>
                      <span className="text-gray-700" dangerouslySetInnerHTML={{ __html: item.text }} />
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-5 bg-blue-50 rounded-xl flex items-center gap-3">
                  <Award className="w-6 h-6 text-blue-700 flex-shrink-0" />
                  <p className="text-blue-800 font-semibold">
                    Admissions Open for 2026 - Limited Seats!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CONVERSION BOOST SECTION ===== */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-blue-600 to-purple-700 px-4 md:px-8 lg:px-12">
          <div className="max-w-5xl mx-auto text-center text-white">
            
            {/* Badge */}
            <Badge variant="outline" className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-5 py-2 text-sm font-semibold mb-6">
              <Rocket className="w-4 h-4 mr-1" /> Start Your Tech Career Today
            </Badge>
            
            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Build Your Career in IT?
            </h2>
            
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join bCORE&apos;s computer courses in Pilathara, Payyanur and get industry-ready skills
            </p>
            
            {/* Main CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-gray-100 rounded-full px-10 py-6 text-lg font-bold shadow-2xl hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <Link href="/contact">
                  <Phone className="w-5 h-5 mr-2" />
                  Enquire About Courses
                </Link>
              </Button>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
              {["PGDCA", "DCA", "Tally", "MS Office", "Photoshop", "C++"].map((course, idx) => (
                <Badge key={idx} variant="outline" className="bg-white/10 text-blue-100 border-white/30 px-3 py-1.5">
                  <CheckCircle className="w-3 h-3 mr-1" /> {course}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FINAL CTA SECTION ===== */}
        <section className="py-16 px-4 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <Card className="border bg-muted">
              <CardContent className="p-8 md:p-12">
                <div className="text-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
                    <GraduationCap className="w-8 h-8 text-blue-600" />
                    Enroll in Computer Courses at bCORE
                  </h3>
                  <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                    Join the most trusted computer training institute in Pilathara, Payyanur. 
                    Limited seats available for each batch.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
                    <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <span className="font-semibold text-gray-800">9447 082 101</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-600">bcorece@gmail.com</span>
                    </div>
                  </div>
                  
                  <Button asChild size="lg" className="bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-lg  px-10 py-6  transform hover:scale-105 transition-all duration-300">
                    <Link href="/contact">
                      <Calendar className="w-5 h-5 mr-2" />
                      Enquire Now for Admission 
                    </Link>
                  </Button>
               
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </>
  );
}