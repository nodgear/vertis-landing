"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function TeamSection() {
  return (
    <section className="relative bg-[url(/about_team_display.png)] bg-cover bg-no-repeat bg-center pt-8 overflow-hidden">
      {/* Blurred background */}

      <div className="z-10 relative mx-auto px-6 w-full">
        <div className="flex md:flex-row flex-col justify-center items-center gap-8 md:gap-12">
          {/* Info card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="flex-1 order-1 md:order-2 mb-8 p-12 md:p-10 border border-[#7D745D] rounded-2xl max-w-md"
          >
            {/* Name */}
            <h2 className="mb-1 font-bold text-white text-4xl md:text-4xl uppercase leading-tight tracking-wide">
              TALES <span style={{ color: "#b5a887" }}>PENS</span>
            </h2>

            {/* Title */}
            <p className="mb-6 font-bold text-white text-xs uppercase tracking-widest">
              Diretor
            </p>

            {/* Bio */}
            <p className="mb-5 text-white text-sm md:text-base leading-relaxed">
              Engenheiro civil formado pela Ulbra e pós-graduado pela Fundação
              Getúlio Vargas, é especialista em obras de grande porte, incluindo
              shoppings, indústrias, prédios corporativos e empreendimentos
              residenciais.
            </p>

            <p className="font-bold text-white text-sm md:text-base leading-relaxed">
              Nos últimos 10 anos, foi engenheiro-líder de mais de 20, e em toda sua carreira já entregou mais de 5.340 unidades, totalizando 580.150 m² de obras.
            </p>
          </motion.div>

          {/* Person photo */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(3px)" }}
            whileInView={{ opacity: 1, filter: "blur(0)" }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="flex-shrink-0 order-2 md:order-1 mt-auto -mr-[10%] w-4/5 md:w-1/3"
          >
            <img
              src="/team_talespen.png"
              className="w-full h-auto object-bottom object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
