"use client";

import { motion } from "motion/react";
import { useI18n } from "@/i18n/I18nProvider";

export default function CasaDoPoetaBanner() {
  const { d } = useI18n();
  return (
    <section className="relative flex justify-center items-center bg-[url('/casa_do_poeta_bg.png')] bg-cover bg-no-repeat bg-top w-full min-h-[700px] overflow-hidden">
      {/* <div className="absolute inset-0 bg-black/20" /> */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative flex flex-col items-center bg-black/30 shadow-2xl backdrop-blur-md mx-6 px-8 sm:px-14 py-12 sm:py-16 rounded-2xl w-full max-w-2xl text-center"
      >
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          src="/casa_do_poeta_logo.svg"
          alt={d.casaDoPoetaBanner.logoAlt}
          className="mb-12 lg:mb-8 w-full max-w-md h-auto select-none"
          draggable={false}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mb-14 lg:mb-10 max-w-md text-white text-lg sm:text-lg leading-relaxed"
        >
          {d.casaDoPoetaBanner.bodyPre}
          <span className="font-bold">{d.casaDoPoetaBanner.bodyBold}</span>
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
            {d.casaDoPoetaBanner.ctaPrimary}
          </motion.a>

          <motion.a
            href="https://www.google.com/maps/search/?api=1&query=rua+Itoror%C3%B3+80+Real+Park+SP"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ backgroundColor: "rgba(0,0,0,0.55)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
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
            {d.casaDoPoetaBanner.ctaSecondary}
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
