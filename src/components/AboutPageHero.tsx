"use client";

import Navbar from "./Navbar";
import { motion } from "motion/react";
import { useI18n } from "@/i18n/I18nProvider";

export default function AboutPageHero() {
  const { d } = useI18n();
  return (
    <section
      className="relative flex flex-col bg-cover bg-no-repeat bg-center min-h-screen"
      style={{ backgroundImage: "url('/about_hero_bg.png')" }}
    >
      <Navbar />

      <div className="z-10 relative flex flex-1 justify-center items-center">
        <div className="mx-auto px-6 lg:px-25 pt-20 pb-16 md:pb-24 w-full max-w-340 text-center">
          {/* Label with line below */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center gap-3 mb-8"
          >
            <p className="text-white/90 text-xs uppercase tracking-[0.2em]">
              {d.aboutHero.kicker}
            </p>
            <div className="bg-divider-gradient w-2/3 h-0.5" />
          </motion.div>

          {/* Main heading — bold first sentence, lighter second */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="mb-10 text-white text-3xl md:text-4xl lg:text-5xl uppercase leading-tight"
          >
            <span className="font-bold">{d.aboutHero.titleBold}</span>{" "}
            {d.aboutHero.titleAfter}
          </motion.h1>

          {/* Body paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mx-auto max-w-xl text-white/80 text-sm md:text-base leading-relaxed"
          >
            {d.aboutHero.body}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
