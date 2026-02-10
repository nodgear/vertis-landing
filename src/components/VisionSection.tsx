"use client";

import { motion } from "motion/react";

export default function VisionSection() {
  return (
    <section className="bg-[#676B59] py-24 md:py-32">
      <div className="mx-auto px-6 lg:px-25 max-w-340 text-center">
        {/* Label with line below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center gap-3 mb-8"
        >
          <p className="text-white/80 text-xs uppercase tracking-[0.2em]">
            NOSSA VISÃO
          </p>
          <div className="bg-divider-gradient w-2/3 h-0.5" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="mb-10 font-bold text-white text-3xl md:text-4xl lg:text-5xl uppercase leading-tight"
        >
          RESSIGNIFICAMOS OPORTUNIDADES PROMISSORAS, ELEVANDO-AS A UM NOVO
          PATAMAR DE QUALIDADE, SOFISTICAÇÃO E FUNCIONALIDADE.
        </motion.h2>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mx-auto max-w-xl text-white/75 text-sm md:text-base leading-relaxed"
        >
          Nosso foco é entregar produtos cuidadosamente trabalhados, com
          compromisso de criar empreendimentos que inspiram e valorizam o
          entorno e geram resultados consistentes para clientes e investidores.
        </motion.p>
      </div>
    </section>
  );
}
