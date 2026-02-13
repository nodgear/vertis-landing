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
import Itaparica from "@/components/Itaparica";

export default function Home() {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const marginTop = useTransform(scrollYProgress, [0, 1], ["0px", "-300px"]);

  return (
    <SmoothScroll>
      <main className="min-h-screen">
        <div ref={heroRef}>
          <Hero />
        </div>
        <motion.div style={{ marginTop }} className="relative w-full">
          <AboutUs2 />
          <Facility />
          <Itaparica />
          {/* <BestResort  /> */}
          <AboutUs />
          <ContactUs />
          <Footer />
        </motion.div>
      </main>
    </SmoothScroll>
  );
}
