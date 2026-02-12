"use client";
import React from "react";
import Link from "next/link";
import Brand from "./brand";
import { Button } from "./ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function HomeNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="absolute top-0 left-0 w-full z-50 px-4 md:px-8 lg:px-20 py-4 md:py-6 flex items-center justify-between">
      {/* Logo */}
      <Link href={"/"}>
        <Brand />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-white font-medium text-sm lg:text-base">
        <Link
          href="/"
          className="hover:text-purple-200 transition whitespace-nowrap"
        >
          Home
        </Link>
        <Link
          href="/tuition-classes-for-class-5-to-12-pilathara-payyanur"
          className="hover:text-purple-200 transition whitespace-nowrap"
        >
          Tuition Classes
        </Link>
        <Link
          href="/computer-courses-pilathara-payyanur"
          className="hover:text-purple-200 transition whitespace-nowrap"
        >
          Computer Courses
        </Link>
        <Link
          href="/about"
          className="hover:text-purple-200 transition whitespace-nowrap"
        >
          About Us
        </Link>
        <Link
          href="/contact"
          className="hover:text-purple-200 transition whitespace-nowrap"
        >
          Contact
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden text-white p-2 focus:outline-none z-50"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-purple-900/95 z-40 md:hidden">
          <nav className="flex flex-col items-center justify-center h-full gap-8 text-white text-xl">
            <Link
              href="/"
              className="hover:text-purple-200 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/tuition-classes-for-class-5-to-12-pilathara-payyanur-for-class-5-to-12-pilathara-payyanur"
              className="hover:text-purple-200 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Tuition Classes
            </Link>
            <Link
              href="/computer-courses-pilathara-payyanur-pilathara-payyanur"
              className="hover:text-purple-200 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Computer Courses
            </Link>
            <Link
              href="/about"
              className="hover:text-purple-200 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="hover:text-purple-200 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
