/* eslint-disable @typescript-eslint/no-explicit-any */
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
    Gamepad2,
    Brain,
    Cpu,
    BookOpen,
    Laptop,
    Wifi,
    Briefcase,
    Users,
    Target,
    Zap
  } from "lucide-react";
  
  export interface Course {
    id: string;
    slug: string;
    name: string;
    fullName: string;
    shortName: string;
    category: string;
    categoryDisplay: string;
    duration: string;
    durationWeeks: number;
    level: any;
    fee: string;
    description: string;
    longDescription: string;
    curriculum: string[];
    prerequisites: string[];
    careerOpportunities: string[];
    learningOutcomes: string[];
    icon: any;
    gradient: string;
    lightBg: string;
    textColor: string;
    borderColor: string;
    features: string[];
    certification: string;
    classMode: "Offline" | "Online" | "Both";
    batchTimings: string[];
    studentsEnrolled: number;
    rating: number;
    reviews: number;
  }
  
  export const courses: Course[] = [
    {
      id: "pgdca",
      slug: "pgdca",
      name: "PGDCA",
      fullName: "Post Graduate Diploma in Computer Application",
      shortName: "PGDCA",
      category: "diploma",
      categoryDisplay: "Diploma Programs",
      duration: "1 Year",
      durationWeeks: 48,
      level: "Advanced",
      fee: "Contact for fee",
      description: "Comprehensive postgraduate diploma covering advanced computer applications, programming, and database management.",
      longDescription: "PGDCA (Post Graduate Diploma in Computer Application) is a one-year professional program designed for graduates who want to build a career in IT. This course provides in-depth knowledge of computer applications, programming languages, database management, and software development. Students gain hands-on experience with modern tools and technologies used in the industry.",
      curriculum: [
        "Fundamentals of Computers & IT",
        "Programming in C & C++",
        "Database Management Systems",
        "Web Technologies (HTML, CSS, JavaScript)",
        "Software Engineering",
        "Operating Systems",
        "Computer Networks",
        "Project Work"
      ],
      prerequisites: [
        "Graduation in any discipline",
        "Basic computer knowledge",
        "No prior programming experience required"
      ],
      careerOpportunities: [
        "Software Developer",
        "Web Designer",
        "Database Administrator",
        "System Analyst",
        "IT Support Specialist",
        "Network Administrator"
      ],
      learningOutcomes: [
        "Develop proficiency in programming languages",
        "Design and manage databases",
        "Build dynamic websites",
        "Understand software development lifecycle",
        "Troubleshoot hardware and software issues"
      ],
      icon: GraduationCap,
      gradient: "from-purple-600 to-purple-700",
      lightBg: "bg-purple-50",
      textColor: "text-purple-700",
      borderColor: "border-purple-200",
      features: [
        "Government recognized certificate",
        "100% practical training",
        "Industry relevant curriculum",
        "Placement assistance"
      ],
      certification: "ISO Certified Diploma",
      classMode: "Both",
      batchTimings: ["Morning: 7:30 AM - 9:30 AM", "Day: 11:00 AM - 1:00 PM", "Evening: 5:30 PM - 7:30 PM"],
      studentsEnrolled: 450,
      rating: 4.8,
      reviews: 128
    },
    {
      id: "dca",
      slug: "dca",
      name: "DCA",
      fullName: "Diploma in Computer Application",
      shortName: "DCA",
      category: "diploma",
      categoryDisplay: "Diploma Programs",
      duration: "6 Months",
      durationWeeks: 24,
      level: "Beginner",
      fee: "Contact for fee",
      description: "Foundation course covering basic computer applications, MS Office, internet, and programming fundamentals.",
      longDescription: "DCA (Diploma in Computer Application) is a six-month foundation program designed for students and professionals who want to build strong fundamentals in computer applications. This course covers essential computer skills, office automation tools, internet technologies, and basic programming concepts.",
      curriculum: [
        "Computer Fundamentals",
        "MS Windows & File Management",
        "MS Word - Document Processing",
        "MS Excel - Spreadsheet Management",
        "MS PowerPoint - Presentations",
        "Internet & Email",
        "Tally Accounting Basics",
        "Programming in C (Basics)"
      ],
      prerequisites: [
        "10+2 pass or equivalent",
        "Basic English reading skills",
        "No prior computer knowledge required"
      ],
      careerOpportunities: [
        "Data Entry Operator",
        "Office Assistant",
        "Computer Operator",
        "Junior Accountant",
        "Front Office Executive"
      ],
      learningOutcomes: [
        "Master MS Office suite",
        "Handle accounting with Tally",
        "Manage files and folders efficiently",
        "Use internet for research and communication",
        "Understand basic programming logic"
      ],
      icon: Monitor,
      gradient: "from-blue-600 to-blue-700",
      lightBg: "bg-blue-50",
      textColor: "text-blue-700",
      borderColor: "border-blue-200",
      features: [
        "Beginner friendly",
        "Practical lab sessions",
        "Certificate included",
        "Flexible timings"
      ],
      certification: "Certified Diploma",
      classMode: "Both",
      batchTimings: ["Morning: 7:30 AM - 9:30 AM", "Day: 2:00 PM - 4:00 PM", "Evening: 6:00 PM - 8:00 PM"],
      studentsEnrolled: 680,
      rating: 4.7,
      reviews: 156
    },
    {
      id: "tally",
      slug: "tally",
      name: "Tally Prime",
      fullName: "Tally Prime with GST",
      shortName: "Tally",
      category: "accounting",
      categoryDisplay: "Accounting & Tally",
      duration: "3 Months",
      durationWeeks: 12,
      level: "Beginner",
      fee: "Contact for fee",
      description: "Complete accounting and inventory management with GST filing training using Tally Prime.",
      longDescription: "Tally Prime with GST is a comprehensive accounting course that prepares students for careers in finance and accounting. This course covers fundamental accounting principles, inventory management, tax calculations, and GST filing procedures using the latest Tally Prime software.",
      curriculum: [
        "Accounting Fundamentals",
        "Tally Prime Interface & Features",
        "Creating Company & Ledgers",
        "Voucher Entry & Accounting",
        "Inventory Management",
        "GST Configuration & Returns",
        "TDS & TCS",
        "Payroll Management",
        "Financial Reports & Analysis"
      ],
      prerequisites: [
        "10+2 pass (Commerce preferred)",
        "Basic math skills",
        "No prior Tally knowledge required"
      ],
      careerOpportunities: [
        "Accountant",
        "GST Consultant",
        "Accounts Executive",
        "Tax Assistant",
        "Finance Associate",
        "Audit Assistant"
      ],
      learningOutcomes: [
        "Maintain books of accounts",
        "File GST returns independently",
        "Generate financial statements",
        "Manage inventory and stock",
        "Process payroll and salary"
      ],
      icon: Calculator,
      gradient: "from-orange-600 to-orange-700",
      lightBg: "bg-orange-50",
      textColor: "text-orange-700",
      borderColor: "border-orange-200",
      features: [
        "Live GST filing practice",
        "Updated with latest Tally version",
        "100% placement assistance",
        "Certified trainers"
      ],
      certification: "Tally Certified Professional",
      classMode: "Both",
      batchTimings: ["Morning: 7:30 AM - 9:30 AM", "Day: 2:00 PM - 4:00 PM", "Evening: 6:00 PM - 8:00 PM"],
      studentsEnrolled: 520,
      rating: 4.9,
      reviews: 189
    },
    {
      id: "ms-office",
      slug: "ms-office",
      name: "MS Office",
      fullName: "Microsoft Office Suite",
      shortName: "MS Office",
      category: "it",
      categoryDisplay: "IT & Office Applications",
      duration: "2 Months",
      durationWeeks: 8,
      level: "Beginner",
      fee: "Contact for fee",
      description: "Complete training on MS Word, Excel, PowerPoint, Access, and Outlook for professional productivity.",
      longDescription: "Microsoft Office Suite is the world's most widely used productivity software. This comprehensive course teaches students how to use Word, Excel, PowerPoint, Access, and Outlook professionally. From basic document creation to advanced data analysis and presentations, students gain skills essential for any office environment.",
      curriculum: [
        "MS Word - Document Formatting, Mail Merge, Templates",
        "MS Excel - Formulas, Functions, Pivot Tables, Charts",
        "MS PowerPoint - Slide Design, Animations, Transitions",
        "MS Access - Database Creation, Queries, Reports",
        "MS Outlook - Email Management, Calendar, Tasks",
        "Integration between Office Applications"
      ],
      prerequisites: [
        "Basic computer knowledge",
        "Familiarity with Windows OS"
      ],
      careerOpportunities: [
        "Office Assistant",
        "Data Entry Operator",
        "Administrative Assistant",
        "Executive Assistant",
        "Secretarial Staff"
      ],
      learningOutcomes: [
        "Create professional documents",
        "Analyze data with Excel",
        "Design impactful presentations",
        "Manage databases",
        "Organize emails and schedules"
      ],
      icon: FileText,
      gradient: "from-blue-600 to-cyan-600",
      lightBg: "bg-blue-50",
      textColor: "text-blue-700",
      borderColor: "border-blue-200",
      features: [
        "Short duration course",
        "Certificate of completion",
        "Practical assignments",
        "Weekend batches available"
      ],
      certification: "MS Office Specialist",
      classMode: "Both",
      batchTimings: ["Morning: 7:30 AM - 9:30 AM", "Day: 3:00 PM - 5:00 PM", "Evening: 6:00 PM - 8:00 PM"],
      studentsEnrolled: 750,
      rating: 4.6,
      reviews: 210
    },
    {
      id: "graphic-designing",
      slug: "graphic-designing",
      name: "Graphic Designing",
      fullName: "Professional Graphic Designing",
      shortName: "Graphic Design",
      category: "design",
      categoryDisplay: "Graphic Designing & Animation",
      duration: "4 Months",
      durationWeeks: 16,
      level: "Intermediate",
      fee: "Contact for fee",
      description: "Master graphic design tools and techniques for print and digital media using industry-standard software.",
      longDescription: "Professional Graphic Designing course prepares students for creative careers in design, advertising, and digital media. Students master industry-standard software including Photoshop, Illustrator, CorelDRAW, and InDesign. The curriculum covers design principles, typography, color theory, branding, and production techniques for both print and digital media.",
      curriculum: [
        "Design Fundamentals - Color Theory, Typography, Composition",
        "Adobe Photoshop - Photo Editing, Manipulation, Digital Painting",
        "Adobe Illustrator - Vector Graphics, Logo Design, Illustrations",
        "CorelDRAW - Page Layout, Vector Illustration",
        "Adobe InDesign - Publication Design, Brochures, Magazines",
        "Brand Identity Design",
        "Social Media Graphics",
        "Portfolio Development"
      ],
      prerequisites: [
        "Basic computer skills",
        "Creative aptitude",
        "No prior design experience required"
      ],
      careerOpportunities: [
        "Graphic Designer",
        "Visualizer",
        "UI/UX Designer",
        "Brand Identity Designer",
        "Digital Marketing Specialist",
        "Pre-press Operator"
      ],
      learningOutcomes: [
        "Create professional logos and branding",
        "Edit and retouch photographs",
        "Design marketing collateral",
        "Prepare files for print",
        "Build a professional portfolio"
      ],
      icon: Palette,
      gradient: "from-pink-600 to-pink-700",
      lightBg: "bg-pink-50",
      textColor: "text-pink-700",
      borderColor: "border-pink-200",
      features: [
        "Industry-standard software training",
        "Live projects",
        "Portfolio creation",
        "Placement assistance"
      ],
      certification: "Certified Graphic Designer",
      classMode: "Both",
      batchTimings: ["Morning: 7:30 AM - 9:30 AM", "Day: 11:00 AM - 1:00 PM", "Evening: 5:30 PM - 7:30 PM"],
      studentsEnrolled: 380,
      rating: 4.8,
      reviews: 95
    },
    {
      id: "photoshop",
      slug: "photoshop",
      name: "Photoshop",
      fullName: "Adobe Photoshop Mastery",
      shortName: "Photoshop",
      category: "design",
      categoryDisplay: "Graphic Designing & Animation",
      duration: "2 Months",
      durationWeeks: 8,
      level: "Beginner to Advanced",
      fee: "Contact for fee",
      description: "Professional image editing, photo retouching, and digital art creation using Adobe Photoshop.",
      longDescription: "Adobe Photoshop is the industry standard for image editing and digital art. This comprehensive course takes students from beginners to advanced users, covering everything from basic photo corrections to complex compositing, retouching, and digital painting techniques.",
      curriculum: [
        "Photoshop Interface & Workspace",
        "Selections & Masks",
        "Layers & Layer Styles",
        "Color Correction & Enhancement",
        "Photo Retouching & Restoration",
        "Compositing & Montage",
        "Text Effects & Typography",
        "Digital Painting",
        "Web & Social Media Graphics",
        "Export & Optimization"
      ],
      prerequisites: [
        "Basic computer knowledge",
        "Creative interest"
      ],
      careerOpportunities: [
        "Photo Editor",
        "Image Retoucher",
        "Digital Artist",
        "Social Media Designer",
        "E-commerce Image Specialist"
      ],
      learningOutcomes: [
        "Retouch portraits professionally",
        "Create composite images",
        "Design social media graphics",
        "Restore old photographs",
        "Master selection and masking"
      ],
      icon: Palette,
      gradient: "from-purple-600 to-pink-600",
      lightBg: "bg-purple-50",
      textColor: "text-purple-700",
      borderColor: "border-purple-200",
      features: [
        "Hands-on projects",
        "Before-after retouching",
        "Certificate included",
        "Flexible batches"
      ],
      certification: "Adobe Certified Associate (ACA) Preparation",
      classMode: "Both",
      batchTimings: ["Morning: 7:30 AM - 9:30 AM", "Day: 3:00 PM - 5:00 PM", "Evening: 6:00 PM - 8:00 PM"],
      studentsEnrolled: 420,
      rating: 4.7,
      reviews: 112
    },
    {
      id: "c-cpp",
      slug: "c-cpp",
      name: "C & C++",
      fullName: "C & C++ Programming",
      shortName: "C/C++",
      category: "programming",
      categoryDisplay: "Programming Languages",
      duration: "4 Months",
      durationWeeks: 16,
      level: "Intermediate",
      fee: "Contact for fee",
      description: "Master C and C++ programming languages with data structures and object-oriented programming concepts.",
      longDescription: "C and C++ are fundamental programming languages that form the backbone of modern software development. This comprehensive course covers C programming fundamentals, followed by object-oriented programming with C++. Students learn data structures, algorithms, and develop practical applications.",
      curriculum: [
        "C Programming Fundamentals",
        "Control Structures & Functions",
        "Arrays & Strings",
        "Pointers & Dynamic Memory",
        "Structures & Unions",
        "File Handling in C",
        "C++ Introduction",
        "Object-Oriented Programming",
        "Classes & Objects",
        "Inheritance & Polymorphism",
        "Templates & STL",
        "Exception Handling",
        "Mini Projects"
      ],
      prerequisites: [
        "Basic computer knowledge",
        "Logical thinking ability",
        "No prior programming required"
      ],
      careerOpportunities: [
        "Software Developer",
        "System Programmer",
        "Game Developer",
        "Embedded Systems Engineer",
        "Application Developer"
      ],
      learningOutcomes: [
        "Write efficient C programs",
        "Implement OOP concepts in C++",
        "Use data structures effectively",
        "Debug programs systematically",
        "Build console applications"
      ],
      icon: Code,
      gradient: "from-green-600 to-green-700",
      lightBg: "bg-green-50",
      textColor: "text-green-700",
      borderColor: "border-green-200",
      features: [
        "Strong fundamentals focus",
        "50+ programming exercises",
        "Algorithm implementation",
        "Project-based learning"
      ],
      certification: "Certified C/C++ Programmer",
      classMode: "Both",
      batchTimings: ["Morning: 7:30 AM - 9:30 AM", "Evening: 5:30 PM - 7:30 PM", "Weekend: 9:00 AM - 12:00 PM"],
      studentsEnrolled: 320,
      rating: 4.6,
      reviews: 78
    },
    {
      id: "html",
      slug: "html",
      name: "HTML",
      fullName: "HTML & Web Design",
      shortName: "HTML",
      category: "programming",
      categoryDisplay: "Programming Languages",
      duration: "2 Months",
      durationWeeks: 8,
      level: "Beginner",
      fee: "Contact for fee",
      description: "Learn HTML5, CSS3, and responsive web design fundamentals to create modern websites.",
      longDescription: "HTML & Web Design is the perfect starting point for aspiring web developers. This course teaches students how to create responsive, mobile-friendly websites using HTML5 and CSS3. From basic page structure to advanced layouts, animations, and forms, students gain the skills needed to build professional websites.",
      curriculum: [
        "HTML5 Document Structure",
        "Text Formatting & Lists",
        "Links & Navigation",
        "Images & Multimedia",
        "Tables & Forms",
        "CSS3 Selectors & Properties",
        "Box Model & Layout",
        "Flexbox & Grid",
        "Responsive Design",
        "CSS Animations",
        "Publishing Websites",
        "Mini Project: Portfolio Website"
      ],
      prerequisites: [
        "Basic computer skills",
        "No prior coding experience required"
      ],
      careerOpportunities: [
        "Front-end Developer",
        "Web Designer",
        "UI Developer",
        "WordPress Developer",
        "Digital Marketing Specialist"
      ],
      learningOutcomes: [
        "Build responsive websites",
        "Style pages with CSS3",
        "Create forms and tables",
        "Implement modern layouts",
        "Publish websites online"
      ],
      icon: Globe,
      gradient: "from-cyan-600 to-cyan-700",
      lightBg: "bg-cyan-50",
      textColor: "text-cyan-700",
      borderColor: "border-cyan-200",
      features: [
        "Beginner friendly",
        "Live website project",
        "Mobile-first approach",
        "Certificate included"
      ],
      certification: "Certified Web Designer",
      classMode: "Both",
      batchTimings: ["Morning: 7:30 AM - 9:30 AM", "Day: 2:00 PM - 4:00 PM", "Evening: 6:00 PM - 8:00 PM"],
      studentsEnrolled: 580,
      rating: 4.8,
      reviews: 145
    },
    {
      id: "animation",
      slug: "animation",
      name: "Animation",
      fullName: "2D & 3D Animation",
      shortName: "Animation",
      category: "design",
      categoryDisplay: "Graphic Designing & Animation",
      duration: "4 Months",
      durationWeeks: 16,
      level: "Intermediate",
      fee: "Contact for fee",
      description: "Learn 2D and 3D animation techniques, character design, and visual effects.",
      longDescription: "Animation course covers both traditional 2D animation principles and modern 3D animation techniques. Students learn character design, storyboarding, keyframing, and visual effects using professional animation software. This course is ideal for creative individuals aspiring to work in animation, gaming, or visual effects industries.",
      curriculum: [
        "Principles of Animation",
        "Storyboarding & Scripting",
        "2D Animation Techniques",
        "Character Design",
        "Adobe Flash/Animate",
        "Introduction to 3D Animation",
        "Modeling Basics",
        "Texturing & Lighting",
        "Keyframe Animation",
        "Rendering & Export",
        "Portfolio Development"
      ],
      prerequisites: [
        "Basic computer skills",
        "Creative aptitude",
        "Drawing interest (not mandatory)"
      ],
      careerOpportunities: [
        "2D Animator",
        "3D Modeler",
        "Character Designer",
        "Motion Graphics Artist",
        "VFX Artist",
        "Game Designer"
      ],
      learningOutcomes: [
        "Create 2D animations",
        "Design characters and scenes",
        "Understand animation principles",
        "Work with 3D software basics",
        "Build animation portfolio"
      ],
      icon: Sparkles,
      gradient: "from-yellow-600 to-yellow-700",
      lightBg: "bg-yellow-50",
      textColor: "text-yellow-700",
      borderColor: "border-yellow-200",
      features: [
        "Creative field",
        "Project-based learning",
        "Portfolio creation",
        "Industry software training"
      ],
      certification: "Certified Animator",
      classMode: "Offline",
      batchTimings: ["Morning: 7:30 AM - 9:30 AM", "Evening: 5:30 PM - 7:30 PM", "Weekend: 9:00 AM - 12:00 PM"],
      studentsEnrolled: 210,
      rating: 4.7,
      reviews: 52
    },
    {
      id: "coreldraw",
      slug: "coreldraw",
      name: "CorelDRAW",
      fullName: "CorelDRAW Graphics Suite",
      shortName: "CorelDRAW",
      category: "design",
      categoryDisplay: "Graphic Designing & Animation",
      duration: "2 Months",
      durationWeeks: 8,
      level: "Beginner",
      fee: "Contact for fee",
      description: "Vector illustration and page layout software for creative design and print production.",
      longDescription: "CorelDRAW is a powerful vector graphics editor used by design professionals worldwide. This course teaches students how to create logos, illustrations, brochures, and other print materials using CorelDRAW. From basic shapes to complex illustrations, students master the tools and techniques for professional design work.",
      curriculum: [
        "CorelDRAW Interface",
        "Drawing & Shaping Tools",
        "Working with Objects",
        "Color & Fills",
        "Text & Typography",
        "Effects & Transformations",
        "Working with Bitmaps",
        "Page Layout & Design",
        "Print Preparation",
        "Logo Design Projects",
        "Brochure & Flyer Design"
      ],
      prerequisites: [
        "Basic computer knowledge"
      ],
      careerOpportunities: [
        "Graphic Designer",
        "DTP Operator",
        "Print Designer",
        "Logo Designer",
        "Flex Printing Specialist"
      ],
      learningOutcomes: [
        "Create vector illustrations",
        "Design logos and branding",
        "Prepare files for print",
        "Layout brochures and flyers",
        "Work with text and typography"
      ],
      icon: PenTool,
      gradient: "from-indigo-600 to-indigo-700",
      lightBg: "bg-indigo-50",
      textColor: "text-indigo-700",
      borderColor: "border-indigo-200",
      features: [
        "Print-ready projects",
        "Logo design workshop",
        "Certificate included",
        "Flexible timings"
      ],
      certification: "Certified CorelDRAW Professional",
      classMode: "Both",
      batchTimings: ["Morning: 7:30 AM - 9:30 AM", "Day: 2:00 PM - 4:00 PM", "Evening: 6:00 PM - 8:00 PM"],
      studentsEnrolled: 450,
      rating: 4.7,
      reviews: 98
    },
    {
      id: "cttc",
      slug: "cttc",
      name: "CTTC",
      fullName: "Certificate in Teacher Training Course",
      shortName: "CTTC",
      category: "diploma",
      categoryDisplay: "Diploma Programs",
      duration: "3 Months",
      durationWeeks: 12,
      level: "Intermediate",
      fee: "Contact for fee",
      description: "Specialized course for aspiring computer teachers with teaching methodologies and subject expertise.",
      longDescription: "CTTC (Certificate in Teacher Training Course) is designed for individuals who want to become computer educators. This course combines technical computer knowledge with effective teaching methodologies, lesson planning, classroom management, and student assessment techniques.",
      curriculum: [
        "Computer Fundamentals",
        "MS Office Suite",
        "Teaching Methodologies",
        "Lesson Planning",
        "Classroom Management",
        "Student Assessment",
        "Educational Psychology",
        "Communication Skills",
        "Practical Teaching Sessions",
        "Teaching Portfolio"
      ],
      prerequisites: [
        "Graduation in any discipline",
        "Basic computer knowledge",
        "Interest in teaching"
      ],
      careerOpportunities: [
        "Computer Teacher",
        "Instructor",
        "Trainer",
        "Faculty",
        "Education Coordinator"
      ],
      learningOutcomes: [
        "Master computer fundamentals",
        "Develop lesson plans",
        "Manage classroom effectively",
        "Assess student performance",
        "Deliver engaging lectures"
      ],
      icon: Award,
      gradient: "from-teal-600 to-teal-700",
      lightBg: "bg-teal-50",
      textColor: "text-teal-700",
      borderColor: "border-teal-200",
      features: [
        "Teaching practice sessions",
        "Curriculum design training",
        "Placement assistance in schools",
        "Recognized certificate"
      ],
      certification: "Certified Computer Teacher",
      classMode: "Both",
      batchTimings: ["Morning: 7:30 AM - 9:30 AM", "Day: 11:00 AM - 1:00 PM", "Evening: 5:30 PM - 7:30 PM"],
      studentsEnrolled: 180,
      rating: 4.8,
      reviews: 42
    },
    {
      id: "dcm",
      slug: "dcm",
      name: "DCM",
      fullName: "Diploma in Computer Multimedia",
      shortName: "DCM",
      category: "diploma",
      categoryDisplay: "Diploma Programs",
      duration: "6 Months",
      durationWeeks: 24,
      level: "Intermediate",
      fee: "Contact for fee",
      description: "Diploma program focusing on multimedia applications, animation, and graphic design.",
      longDescription: "DCM (Diploma in Computer Multimedia) is a comprehensive program that covers various aspects of multimedia creation including graphic design, 2D/3D animation, video editing, and audio processing. Students gain practical skills in industry-standard software and build a professional portfolio.",
      curriculum: [
        "Graphic Design Fundamentals",
        "Adobe Photoshop",
        "CorelDRAW",
        "Adobe Illustrator",
        "2D Animation",
        "3D Animation Basics",
        "Video Editing",
        "Audio Processing",
        "Web Design Basics",
        "Multimedia Project"
      ],
      prerequisites: [
        "10+2 pass or equivalent",
        "Basic computer knowledge",
        "Creative interest"
      ],
      careerOpportunities: [
        "Multimedia Specialist",
        "Graphic Designer",
        "Video Editor",
        "Animator",
        "Web Designer",
        "Content Creator"
      ],
      learningOutcomes: [
        "Create multimedia content",
        "Edit videos and audio",
        "Design graphics for web/print",
        "Create basic animations",
        "Build multimedia portfolio"
      ],
      icon: Layers,
      gradient: "from-amber-600 to-amber-700",
      lightBg: "bg-amber-50",
      textColor: "text-amber-700",
      borderColor: "border-amber-200",
      features: [
        "Comprehensive curriculum",
        "Multiple software training",
        "Portfolio development",
        "Project-based learning"
      ],
      certification: "Diploma in Computer Multimedia",
      classMode: "Offline",
      batchTimings: ["Morning: 7:30 AM - 9:30 AM", "Evening: 5:30 PM - 7:30 PM"],
      studentsEnrolled: 150,
      rating: 4.6,
      reviews: 35
    },
    {
      id: "dtp",
      slug: "dtp",
      name: "DTP",
      fullName: "Desktop Publishing",
      shortName: "DTP",
      category: "it",
      categoryDisplay: "IT & Office Applications",
      duration: "3 Months",
      durationWeeks: 12,
      level: "Beginner",
      fee: "Contact for fee",
      description: "Learn page layout, design, and publishing software for print media production.",
      longDescription: "Desktop Publishing (DTP) course prepares students for careers in print production and publishing. Students learn to create professional layouts for books, magazines, brochures, and other print materials using industry-standard software like PageMaker, CorelDRAW, and InDesign.",
      curriculum: [
        "Introduction to DTP",
        "Typography & Fonts",
        "Page Layout Principles",
        "CorelDRAW for DTP",
        "Adobe PageMaker",
        "Adobe InDesign Basics",
        "Brochure & Flyer Design",
        "Book & Magazine Layout",
        "Print Preparation",
        "Pre-press Processes"
      ],
      prerequisites: [
        "Basic computer knowledge",
        "Typing skills beneficial"
      ],
      careerOpportunities: [
        "DTP Operator",
        "Print Designer",
        "Layout Artist",
        "Publication Designer",
        "Pre-press Technician"
      ],
      learningOutcomes: [
        "Create professional layouts",
        "Design print materials",
        "Prepare files for printing",
        "Work with typography",
        "Understand pre-press requirements"
      ],
      icon: Layout,
      gradient: "from-slate-600 to-slate-700",
      lightBg: "bg-slate-50",
      textColor: "text-slate-700",
      borderColor: "border-slate-200",
      features: [
        "Print industry focus",
        "Hands-on training",
        "Certificate included",
        "Placement assistance"
      ],
      certification: "Certified DTP Operator",
      classMode: "Both",
      batchTimings: ["Morning: 7:30 AM - 9:30 AM", "Day: 2:00 PM - 4:00 PM", "Evening: 6:00 PM - 8:00 PM"],
      studentsEnrolled: 390,
      rating: 4.6,
      reviews: 82
    },
    {
      id: "illustrator",
      slug: "illustrator",
      name: "Illustrator",
      fullName: "Adobe Illustrator",
      shortName: "Illustrator",
      category: "design",
      categoryDisplay: "Graphic Designing & Animation",
      duration: "2 Months",
      durationWeeks: 8,
      level: "Beginner to Advanced",
      fee: "Contact for fee",
      description: "Vector graphics design for logos, illustrations, and print materials using Adobe Illustrator.",
      longDescription: "Adobe Illustrator is the industry standard for vector graphics creation. This course teaches students how to create scalable graphics for logos, illustrations, packaging, and print materials. From basic shapes to complex illustrations, students master the pen tool, pathfinder, typography, and advanced vector techniques.",
      curriculum: [
        "Illustrator Interface",
        "Vector vs Raster Graphics",
        "Drawing Tools & Pen Tool",
        "Shapes & Paths",
        "Color & Swatches",
        "Typography & Text Effects",
        "Layers & Appearance",
        "Effects & Filters",
        "Patterns & Brushes",
        "Logo Design Projects",
        "Print Ready Files",
        "Web Graphics"
      ],
      prerequisites: [
        "Basic computer knowledge"
      ],
      careerOpportunities: [
        "Illustrator",
        "Logo Designer",
        "Brand Identity Designer",
        "Packaging Designer",
        "Print Designer"
      ],
      learningOutcomes: [
        "Create vector illustrations",
        "Design professional logos",
        "Master pen tool",
        "Prepare print-ready files",
        "Build brand identity systems"
      ],
      icon: PenTool,
      gradient: "from-amber-600 to-amber-700",
      lightBg: "bg-amber-50",
      textColor: "text-amber-700",
      borderColor: "border-amber-200",
      features: [
        "Logo design focus",
        "Portfolio projects",
        "Certificate included",
        "Industry software"
      ],
      certification: "Certified Illustrator Professional",
      classMode: "Both",
      batchTimings: ["Morning: 7:30 AM - 9:30 AM", "Day: 3:00 PM - 5:00 PM", "Evening: 6:00 PM - 8:00 PM"],
      studentsEnrolled: 280,
      rating: 4.7,
      reviews: 63
    },
    {
      id: "flash",
      slug: "flash",
      name: "Flash",
      fullName: "Adobe Flash Animation",
      shortName: "Flash",
      category: "design",
      categoryDisplay: "Graphic Designing & Animation",
      duration: "2 Months",
      durationWeeks: 8,
      level: "Intermediate",
      fee: "Contact for fee",
      description: "2D animation and interactive content creation using Adobe Flash/Animate.",
      longDescription: "Adobe Flash (now Adobe Animate) is a powerful tool for creating 2D animations, interactive content, and multimedia presentations. This course covers frame-by-frame animation, tweening, character animation, and basic ActionScript for interactive projects.",
      curriculum: [
        "Flash Interface",
        "Drawing Tools",
        "Symbols & Instances",
        "Frame-by-Frame Animation",
        "Motion Tweening",
        "Shape Tweening",
        "Masking Techniques",
        "Character Animation",
        "Bone Tool",
        "Basic ActionScript",
        "Interactive Presentations",
        "Export & Publishing"
      ],
      prerequisites: [
        "Basic computer knowledge",
        "Creative interest"
      ],
      careerOpportunities: [
        "2D Animator",
        "Flash Animator",
        "E-learning Developer",
        "Interactive Designer",
        "Multimedia Specialist"
      ],
      learningOutcomes: [
        "Create 2D animations",
        "Animate characters",
        "Build interactive content",
        "Export for web/video",
        "Understand animation principles"
      ],
      icon: Sparkles,
      gradient: "from-red-600 to-red-700",
      lightBg: "bg-red-50",
      textColor: "text-red-700",
      borderColor: "border-red-200",
      features: [
        "Creative animation",
        "Project-based learning",
        "Portfolio development",
        "Flexible batches"
      ],
      certification: "Certified Flash Animator",
      classMode: "Offline",
      batchTimings: ["Morning: 7:30 AM - 9:30 AM", "Evening: 5:30 PM - 7:30 PM"],
      studentsEnrolled: 120,
      rating: 4.5,
      reviews: 28
    },
    {
      id: "ism-malayalam",
      slug: "ism-malayalam",
      name: "ISM Malayalam",
      fullName: "ISM Malayalam Typing",
      shortName: "ISM Malayalam",
      category: "it",
      categoryDisplay: "IT & Office Applications",
      duration: "1 Month",
      durationWeeks: 4,
      level: "Beginner",
      fee: "Contact for fee",
      description: "Malayalam typing and documentation using ISM software for government and office work.",
      longDescription: "ISM Malayalam Typing course teaches students how to type efficiently in Malayalam using ISM (Intelligent Script Manager) software. This course is essential for government job aspirants, office staff, and anyone who needs to create documents in Malayalam language.",
      curriculum: [
        "Introduction to ISM",
        "Malayalam Keyboard Layout",
        "Vowels & Consonants",
        "Conjunct Consonants",
        "Chillu Letters",
        "Typing Practice",
        "Speed Development",
        "Document Formatting",
        "Translation Work",
        "Practical Assignments"
      ],
      prerequisites: [
        "Ability to read Malayalam",
        "Basic computer knowledge"
      ],
      careerOpportunities: [
        "Typist",
        "Data Entry Operator",
        "Office Assistant",
        "Government Clerk",
        "Translator"
      ],
      learningOutcomes: [
        "Type Malayalam efficiently",
        "Achieve typing speed 30+ WPM",
        "Format Malayalam documents",
        "Work with bilingual documents",
        "Prepare for government exams"
      ],
      icon: Languages,
      gradient: "from-emerald-600 to-emerald-700",
      lightBg: "bg-emerald-50",
      textColor: "text-emerald-700",
      borderColor: "border-emerald-200",
      features: [
        "Short duration",
        "Government exam oriented",
        "Certificate included",
        "Flexible timings"
      ],
      certification: "Certified Malayalam Typist",
      classMode: "Both",
      batchTimings: ["Morning: 7:30 AM - 9:30 AM", "Day: 2:00 PM - 4:00 PM", "Evening: 6:00 PM - 8:00 PM"],
      studentsEnrolled: 340,
      rating: 4.8,
      reviews: 76
    },
    {
      id: "vacation-courses",
      slug: "vacation-courses",
      name: "Vacation Courses",
      fullName: "Summer & Vacation Courses",
      shortName: "Vacation",
      category: "shortterm",
      categoryDisplay: "Short Term & Vacation",
      duration: "1-2 Months",
      durationWeeks: 6,
      level: "Beginner",
      fee: "Contact for fee",
      description: "Special short-term courses during school/college vacations for skill development.",
      longDescription: "Vacation Courses are specially designed for students during summer and winter breaks. These short-term programs help students develop valuable computer skills in a fun, engaging environment. Choose from basic computer skills, creative design, programming fundamentals, or office productivity courses.",
      curriculum: [
        "Option 1: Basic Computer Skills",
        "Computer Fundamentals",
        "Windows & File Management",
        "Internet & Email",
        "MS Word Basics",
        
        "Option 2: Creative Design",
        "Canva for Social Media",
        "Basic Photoshop",
        "Digital Art",
        
        "Option 3: Programming for Kids",
        "Scratch Programming",
        "HTML Basics",
        "Logic Building",
        
        "Option 4: Office Productivity",
        "MS Excel Basics",
        "PowerPoint Presentations",
        "Typing Skills"
      ],
      prerequisites: [
        "School students (Class 5-12)",
        "No prior computer knowledge required"
      ],
      careerOpportunities: [
        "Skill development",
        "Academic projects",
        "Competition preparation",
        "Hobby development"
      ],
      learningOutcomes: [
        "Build computer confidence",
        "Learn new skills during break",
        "Complete fun projects",
        "Prepare for digital future"
      ],
      icon: Clock,
      gradient: "from-cyan-600 to-cyan-700",
      lightBg: "bg-cyan-50",
      textColor: "text-cyan-700",
      borderColor: "border-cyan-200",
      features: [
        "School students special",
        "Fun learning approach",
        "Certificate of completion",
        "Flexible duration"
      ],
      certification: "Certificate of Participation",
      classMode: "Both",
      batchTimings: ["Morning: 9:00 AM - 11:00 AM", "Day: 11:30 AM - 1:30 PM", "Evening: 3:00 PM - 5:00 PM"],
      studentsEnrolled: 520,
      rating: 4.9,
      reviews: 167
    }
  ];
  
  export const categories = [
    {
      id: "diploma",
      title: "Diploma Programs",
      gradient: "from-purple-600 to-purple-700",
      lightBg: "bg-purple-50",
      textColor: "text-purple-700",
      borderColor: "border-purple-200",
      icon: GraduationCap,
      description: "Advanced diploma courses for career excellence"
    },
    {
      id: "design",
      title: "Graphic Designing & Animation",
      gradient: "from-pink-600 to-pink-700",
      lightBg: "bg-pink-50",
      textColor: "text-pink-700",
      borderColor: "border-pink-200",
      icon: Palette,
      description: "Creative courses for design professionals"
    },
    {
      id: "it",
      title: "IT & Office Applications",
      gradient: "from-blue-600 to-blue-700",
      lightBg: "bg-blue-50",
      textColor: "text-blue-700",
      borderColor: "border-blue-200",
      icon: Laptop,
      description: "Essential computer skills for every professional"
    },
    {
      id: "programming",
      title: "Programming Languages",
      gradient: "from-green-600 to-green-700",
      lightBg: "bg-green-50",
      textColor: "text-green-700",
      borderColor: "border-green-200",
      icon: Code,
      description: "Learn coding from fundamentals to advanced"
    },
    {
      id: "accounting",
      title: "Accounting & Tally",
      gradient: "from-orange-600 to-orange-700",
      lightBg: "bg-orange-50",
      textColor: "text-orange-700",
      borderColor: "border-orange-200",
      icon: Calculator,
      description: "Financial and accounting software training"
    },
    {
      id: "shortterm",
      title: "Short Term & Vacation",
      gradient: "from-cyan-600 to-cyan-700",
      lightBg: "bg-cyan-50",
      textColor: "text-cyan-700",
      borderColor: "border-cyan-200",
      icon: Clock,
      description: "Quick skill-building courses for students"
    }
  ];
  
  export function getCourseBySlug(slug: string): Course | undefined {
    return courses.find(course => course.slug === slug);
  }
  
  export function getCoursesByCategory(category: string): Course[] {
    return courses.filter(course => course.category === category);
  }
  
  export function getRelatedCourses(slug: string, limit: number = 3): Course[] {
    const currentCourse = getCourseBySlug(slug);
    if (!currentCourse) return [];
    
    return courses
      .filter(course => course.slug !== slug && course.category === currentCourse.category)
      .slice(0, limit);
  }
  
  export function getAllCourses(): Course[] {
    return courses;
  }