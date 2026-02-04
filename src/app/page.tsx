"use client";

import Hero from "@/components/Hero";
import AboutUs2 from "@/components/AboutUs2";
import Facility from "@/components/Facility";
import BestResort from "@/components/BestResort";
import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Home() {
  const heroRef = useRef(null);
  const { scrollY } = useScroll();

  const contentY = useTransform(scrollY, [0, 800], [0, -400]);
  const marginBottom = useTransform(scrollY, [0, 800], [0, -400]);

  return (
    <main className="min-h-screen">
      <div ref={heroRef}>
        <Hero />
      </div>
      <motion.div style={{ y: contentY, marginBottom }} className="relative">
        <AboutUs2 />
        <Facility />
        {/* <BestResort  /> */}
        <AboutUs />
        <ContactUs />
        <Footer />
      </motion.div>
    </main>
  );
}
