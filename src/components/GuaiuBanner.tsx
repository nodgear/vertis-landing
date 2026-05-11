"use client";

import { motion } from "motion/react";
import { useI18n } from "@/i18n/I18nProvider";

export default function GuaiuBanner() {
  const { d } = useI18n();
  return (
    <section className="relative flex items-center bg-[url('/guaiu_bg_mobile.png')] lg:bg-[url('/guaiu_bg.png')] bg-cover bg-no-repeat bg-top w-full min-h-[700px] overflow-hidden">
      {/* <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-black/10 to-transparent" /> */}

      <div className="z-10 relative flex justify-center lg:justify-end mx-auto px-6 lg:px-16 w-full max-w-480">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex flex-col items-center lg:items-start max-w-md lg:text-left text-center"
        >
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            src="/guaiu_logo_mobile.svg"
            alt={d.guaiuBanner.logoAlt}
            className="lg:hidden mb-14 w-56 h-auto select-none"
            draggable={false}
          />

          <motion.img
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            src="/guaiu_logo.svg"
            alt={d.guaiuBanner.logoAlt}
            className="hidden lg:block mb-12 w-56 h-auto select-none"
            draggable={false}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
            className="mb-12 lg:mb-8 max-w-sm text-white/90 text-lg sm:text-lg leading-relaxed"
          >
            {d.guaiuBanner.bodyPre}
            <span className="font-bold">{d.guaiuBanner.bodyBold}</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
            className="flex flex-col gap-3 w-full max-w-xs"
          >
            <motion.a
            href="#localizacao"
            whileHover={{ scale: 1.02, filter: "brightness(1.08)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="bg-linear-to-r from-[#c2b48d]/40 to-[#D4BB95]/100 backdrop-blur-xs px-6 py-3.5 rounded-lg font-bold text-white text-sm sm:text-lg text-center tracking-wide"
          >
            {d.guaiuBanner.ctaPrimary}
          </motion.a>

          <motion.a
            href="https://maps.app.goo.gl/eZhptRAG5PFurvvG6"
            whileHover={{ backgroundColor: "rgba(0,0,0,0.55)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            target="_blank"
            className="flex justify-center items-center gap-6 bg-white/20 backdrop-blur-sm px-6 py-3.5 rounded-md font-medium text-white text-sm sm:text-lg text-center tracking-wide"
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {d.guaiuBanner.ctaSecondary}
          </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
