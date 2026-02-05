"use client";

import Hero from "@/components/Hero";
import AboutUs2 from "@/components/AboutUs2";
import Facility from "@/components/Facility";
import BestResort from "@/components/BestResort";
import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Home() {
  const heroRef = useRef(null);
  const { scrollY } = useScroll();

  const contentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -500]);

  return (
    <SmoothScroll>
      <main className="min-h-screen">
        <div ref={heroRef} className="relative">
          <Hero />
          <motion.div 
            ref={contentRef}
            style={{ y: contentY }} 
            className="absolute top-full w-full"
          >
            <AboutUs2 />
            <Facility />
            {/* <BestResort  /> */}
            <AboutUs />
            <ContactUs />
            <Footer />
          </motion.div>
        </div>
      </main>
    </SmoothScroll>
  );
}
