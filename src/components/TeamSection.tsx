"use client";

import { motion } from "motion/react";

export default function TeamSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Blurred background — same image, 120% size, centered, no-repeat */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center blur-md scale-110"
        style={{
          backgroundImage: "url('/about_team_display.png')",
          backgroundSize: "120%",
        }}
      />
      {/* Dark overlay to ensure text legibility */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="z-10 relative mx-auto px-6 lg:px-25 max-w-480">
        <div className="flex md:flex-row flex-col items-center gap-12 md:gap-20">
          {/* Text content */}
          <div className="w-full md:w-1/2">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="mb-8 font-bold text-white text-4xl md:text-5xl lg:text-6xl uppercase leading-tight"
            >
              NOSSO TIME
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              className="mb-2 max-w-sm text-white/85 text-sm md:text-base leading-relaxed"
            >
              Profissionais com mais de duas décadas em projetos de grande
              porte, incluindo shoppings, indústrias, galpões logísticos,
              prédios corporativos e residenciais.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
              className="max-w-sm text-white/85 text-sm md:text-base leading-relaxed"
            >
              <span className="font-semibold text-[#B3D335]">Lideranças</span>{" "}
              <span className="text-[#B3D335]">
                com visão de mercado, técnica apurada e histórico de entrega.
              </span>
            </motion.p>
          </div>

          {/* Team image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="w-full md:w-1/2"
          >
            <div className="bg-[url(/about_team_display.png)] bg-cover bg-center rounded-3xl w-full aspect-590/300" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
