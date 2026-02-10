"use client";

import SmoothScroll from "@/components/SmoothScroll";
import AboutPageHero from "@/components/AboutPageHero";
import VisionSection from "@/components/VisionSection";
import ValuesSection from "@/components/ValuesSection";
import TeamSection from "@/components/TeamSection";
import ProcessSection from "@/components/ProcessSection";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function AboutPage() {
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
          <AboutPageHero />
        </div>
        <motion.div style={{ marginTop }} className="relative w-full">
          <VisionSection />
          <ValuesSection />
          <TeamSection />
          <ProcessSection />
          <Footer />
        </motion.div>
      </main>
    </SmoothScroll>
  );
}
