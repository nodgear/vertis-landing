"use client";

import { motion } from "motion/react";

export default function AboutUs() {
  return (
    <section id="sobre" className="bg-[url(/about_bg.png)] bg-cover bg-center py-24">
      <div className="mx-auto px-6 lg:px-25 max-w-480">
        <div className="flex md:flex-row flex-col items-stretch gap-12 md:gap-20">
          {/*  Content  */}
          <div className="flex flex-col justify-center items-start w-full md:w-1/3">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-8 text-white/70 text-sm uppercase tracking-widest"
            >
              VERTIS INCORPORADORA
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="mb-8 font-display font-bold text-white text-3xl md:text-4xl lg:text-5xl leading-tight"
            >
              CUIDADO DE PERTO.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="mb-8 text-white text-xl md:text-2xl"
            >
              CONTROLE DE <span className="font-semibold">PONTA A PONTA.</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="mb-8 text-white/90 text-base leading-6.5"
            >
              Cada projeto segue um processo firme:{" "}
              <span className="font-semibold text-[#B3D335]">
                leitura do entorno, concepção bem resolvida e execução com
                controle técnico.
              </span>
              <br />A Vertis reúne profissionais com mais de duas décadas em
              projetos de grande porte e atua ao lado de parceiros altamente
              exigentes, de arquitetos e engenheiros a consultores e
              fornecedores. Resultado: qualidade indiscutível e confiança na
              entrega.
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              whileHover={{ backgroundColor: "#333" }}
              href="#sobre"
              className="inline-block bg-[#4a4a4a] bg-button-gradient px-9 py-4 rounded-lg text-white tracking-wider"
            >
              CONHECER A VERTIS
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="lg:ml-auto w-full md:w-1/2"
          >
            <div className="bg-[url(/about_us_display.png)] bg-cover bg-no-repeat bg-center rounded-4xl w-full aspect-612/390" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
