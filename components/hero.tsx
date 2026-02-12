import Image from "next/image";

import { Button } from "./ui/button";
import HomeNav from "./homenav";
import { RainbowButton } from "./ui/rainbow-button";
import { Phone, PhoneCall } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full max-h-screen md:min-h-screen overflow-hidden bg-purple-700">
      {/* Background SVG */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/homebannerbg.svg')" }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-purple-900/40"></div>

      {/* ===== NAVBAR ===== */}
    
      {/* ===== HERO CONTENT ===== */}
      <div className="relative z-20 flex flex-col md:flex-row-reverse items-center justify-between px-8 md:px-20 pt-30 pb-40">
        {/* LEFT TEXT */}
        <div className="max-w-xl text-white text-center md:text-left">
          <h1 className="text-2xl md:text-3xl tracking-tight font-bold leading-tight">
            Tuition Classes & Computer Courses in Pilathara, Payyanur
          </h1>

          <p className="mt-4 text-xs md:text-sm text-gray-200">
            Trusted tuition for Classes 5–12 and professional computer training
            programs like PGDCA, DCA, MS Office, Excel, and Photoshop for
            students and job seekers.
          </p>

          <RainbowButton
            size="lg"
            className="mt-6 cursor-pointer text-lg "
          >
           <PhoneCall/> Admission Open
          </RainbowButton>
        </div>

        {/* RIGHT STUDENT IMAGE */}
        <div className="mt-4 md:mt-0">
          <Image
            src="/student.png"
            alt="Student learning at Bcore Pilathara Payyanur"
            width={550}
            height={600}
            className="w-[350px] md:w-[550px] relative -mb-32 "
            priority
          />
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full z-20 leading-none">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,96L80,128C160,160,320,224,480,218.7C640,213,800,139,960,112C1120,85,1280,107,1360,117.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
      </div>
    </section>
  );
}
