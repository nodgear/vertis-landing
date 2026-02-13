"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function TeamSection() {
  return (
    <section className="relative bg-[url(/about_team_display.png)] bg-cover bg-no-repeat bg-center pt-8 overflow-hidden">
      {/* Blurred background */}

      <div className="z-10 relative mx-auto px-6 w-full">
        <div className="flex md:flex-row flex-col justify-center items-center gap-8 md:gap-12">
          {/* Person photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="flex-shrink-0 w-64 md:w-80 lg:w-96"
          >
            <Image
              src="/team_talespen.png"
              alt="Tales Pens"
              width={400}
              height={500}
              className="w-full h-auto object-bottom object-contain"
            />
          </motion.div>

          {/* Info card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="flex-1 mb-8 p-8 md:p-10 border border-[#7D745D] rounded-2xl max-w-md"
          >
            {/* Name */}
            <h2 className="mb-1 font-bold text-white text-4xl md:text-5xl uppercase leading-tight tracking-wide">
              TALES <span style={{ color: "#b5a887" }}>PENS</span>
            </h2>

            {/* Title */}
            <p className="mb-6 font-bold text-white text-xs uppercase tracking-widest">
              Diretor Técnico
            </p>

            {/* Bio */}
            <p className="mb-5 text-white text-sm md:text-base leading-relaxed">
              Engenheiro civil formado pela Ulbra e pós-graduado pela Fundação
              Getúlio Vargas, é especialista em obras de grande porte, incluindo
              shoppings, indústrias, prédios corporativos e empreendimentos
              residenciais.
            </p>

            <p className="font-bold text-white text-sm md:text-base leading-relaxed">
              Nos últimos 10 anos, foi engenheiro-líder de 20 prédios
              residenciais, tendo entregue 5.342 unidades, totalizando 580.150m²
              de obras.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
