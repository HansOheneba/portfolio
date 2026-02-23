'use client';

import ContactSection from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import TechStackStrip from "@/components/sections/techStackStrip";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100); // Wait for DOM
      }
    }
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="flex min-h-screen w-full  flex-col items-center justify-between sm:items-start">
        <Hero
  
      
          title="Hans Opoku"
          blurb="I am building modern front-end experiences with secure defaults, clean design systems, and performance-first execution."
        />
  <TechStackStrip />
        <ContactSection email="hansoheneba.io@gmail.com" />
      </main>
    </div>
  );
}
