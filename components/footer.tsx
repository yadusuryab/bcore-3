import React from "react";
import Brand from "./brand";
import { Facebook, Globe, Instagram, Mail, PhoneCall } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="relative bg-primary text-white">
      <div className="p-4 pt-20 text-xs">
        <h2 className="font-bold text-sm">Why bCORE For Tuition?</h2>
        <p>
          bCORE Computers & Tuition is a trusted tuition center in Payyanur,
          located in Pilathara, Kannur district, offering quality coaching for
          students from Classes 5 to 12. We provide structured tuition for CBSE
          and State syllabus students with a strong focus on concept clarity,
          exam preparation, and individual attention. As a growing academic hub
          in Payyanur, our goal is to help students improve their school
          performance and achieve excellent results in board examinations. Our
          experienced teachers conduct small-batch classes to ensure
          personalized guidance, regular tests, and continuous performance
          monitoring. Parents looking for a reliable tuition center near
          Payyanur choose bCORE for its disciplined learning environment and
          result-oriented approach. In addition to academic tuition, we also
          offer job-oriented computer courses including PGDCA, DCA, MS Office,
          Advanced Excel, and Photoshop training, making us a complete learning
          center in Pilathara for both students and career aspirants. If you are
          searching for the best tuition center in Payyanur for academic
          excellence and skill development, bCORE is your trusted destination.
        </p>
        <h2 className="font-bold text-sm mt-5">
          What is bCORE Computer Education
        </h2>
        <p>
          bCORE Computer Education is a premier tuition and computer training
          institute located at Bus Stand, Pilathara, near Payyanur in Kannur
          district, Kerala. Established with a mission to empower students and
          job seekers, bCORE offers comprehensive tuition classes for Classes 5
          to 12 following CBSE and State syllabus, covering subjects like
          English, Hindi, Malayalam, Maths, Spoken English & Hindi, and
          Calligraphy. In addition, bCORE provides 18+ job-oriented computer
          courses including PGDCA, DCA, CTTC, DCM, Animation, Graphic Designing,
          MS Office, DTP, Tally, C & C++, Photoshop, Illustrator, CorelDRAW,
          Flash, HTML, and ISM Malayalam, along with special vacation batches.
          With admissions open for 2024, the institute is known for its
          experienced faculty, small batch sizes, practical lab-based training,
          and affordable fees, making it the most trusted choice for academic
          coaching and professional skill development in Pilathara and Payyanur.
          For more details, visit www.bcore.in, call 9447 082 101, or email
          bcorece@gmail.com.
        </p>
      </div>
      {/* ===== CURVED WAVE TOP ===== */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 z-10">
        <svg
          viewBox="0 0 1440 120"
          className="relative block w-full h-[60px] md:h-[80px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64L80,74.7C160,85,320,107,480,101.3C640,96,800,64,960,58.7C1120,53,1280,75,1360,85.3L1440,96V120H0Z"
            fill="white"
          ></path>
        </svg>
      </div>

      {/* ===== FOOTER CONTENT ===== */}
      <div className="relative container mx-auto px-6 pt-24 md:pt-32 pb-12 z-20">
        {/* Grid Layout */}
        <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
          {/* Logo / About */}
          <div>
            <Brand />
            <p className="text-white/80 mt-5 text-sm tracking-tight leading-relaxed">
              Empowering students in{" "}
              <span className="text-white font-semibold">
                Pilathara, Payyanur
              </span>{" "}
              with result-oriented tuition classes and job-oriented computer
              courses.
            </p>

            {/* Contact Info Short */}
          </div>

    
      

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-white rounded-full"></span>
            </h4>
            <ul className="space-y-2 text-white text-sm">
              <li className="hover:text-underline transition-colors cursor-pointer flex items-center gap-2">
                <span className="text-white">›</span> About Us
              </li>
              <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-2">
                <span className="text-white">›</span> Tuition Classes
              </li>
              <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-2">
                <span className="text-white">›</span> Computer Courses
              </li>

              <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-2">
                <span className="text-white">›</span> Contact
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4 relative inline-block">
              Contact
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-white rounded-full"></span>
            </h4>
            <div className="space-y-2 text-white text-sm">
              <p className="flex items-start gap-2">
                <span>
                  <strong className="text-white">Bus Stand, Pilathara</strong>
                  <br />
                  Payyanur, Kannur
                  <br />
                  Kerala - 670504
                </span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-white">
                  <PhoneCall size={12} />
                </span>
                <span className="text-white font-medium">9447 082 101</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-white">
                  <Mail size={12} />
                </span>
                bcorece@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <span className="text-white">
                  <Globe size={12} />
                </span>
                www.bcore.in
              </p>
            </div>
            <div className="mt-6 space-y-2">
              <h5 className="text-sm font-semibold text-white/90">Follow Us</h5>
              <div className="flex flex-wrap items-center gap-4">
                
                {/* Instagram - bcore.ce */}
                <Link 
                  href="https://instagram.com/bcore.ce" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/10 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 px-4 py-2 rounded-full transition-all duration-300 group"
                >
                  <Instagram size={16} className="group-hover:scale-110 transition-transform" />
                  <span className="text-xs">@bcore.ce</span>
                </Link>
                
                {/* Instagram - bcore.tuition */}
                <Link 
                  href="https://instagram.com/bcore.tuition" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/10 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 px-4 py-2 rounded-full transition-all duration-300 group"
                >
                  <Instagram size={16} className="group-hover:scale-110 transition-transform" />
                  <span className="text-xs">@bcore.tuition</span>
                </Link>
                
                {/* Facebook - bcore.ce */}
                <Link 
                  href="https://facebook.com/bcore.ce" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/10 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 px-4 py-2 rounded-full transition-all duration-300 group"
                >
                  <Facebook size={16} className="group-hover:scale-110 transition-transform" />
                  <span className="text-xs">@bcore.ce</span>
                </Link>
              </div>
              
              {/* Social Media Note */}
              <p className="text-[10px] text-white/60 mt-2">
                Follow us for updates, tips & admission notifications
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white text-center md:text-left">
              © 2000 - {new Date().getFullYear()}{" "}
              <span className="text-white font-semibold">
                bCORE Computer Education
              </span>
              . All rights reserved.
            </p>
          </div>

          {/* Admission Badge */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
