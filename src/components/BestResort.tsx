"use client";

import { motion } from "motion/react";

export default function BestResort() {
  const projects = [
    {
      name: "Amalfi  Itaparica",
      location: "Itaparica,  BA",
      status: "LANÇAMENTO  EM  BREVE",
      description:
        "Um  novo  olhar  sobre  o  viver  à  beira-mar,  inspirado  na  região  de  Amalfi,  no  sul  da  Itália.",
      specs: [
        { label: "Áreas  privativas", value: "de  22m²  a  93m²" },
        { label: "Dormitórios", value: "1  a  3" },
        { label: "Planta", value: "modular" },
      ],
      imagePosition: "left",
    },
    {
      name: "Horto  Florestal",
      location: "Salvador,  BA",
      status: "EM  DESENVOLVIMENTO",
      description:
        "Um  vertical  em  uma  das  localizações  mais  desejadas  da  cidade,  com  entorno  valorizado  e  vida  urbana  completa.",
      specs: [
        { label: "Studios  Compactos", value: "de  23m²  a  46m²" },
        { label: "Dormitórios", value: "1  e  2" },
        { label: "Vaga  de  Garagem", value: "" },
        { label: "Localizado  em", value: "Bairro  Nobre" },
      ],
      imagePosition: "right",
    },
  ];

  return (
    <section id="empreendimentos" className="bg-[#f5f5f5] py-20 md:py-28">
      <div className="mx-auto px-6 lg:px-25 max-w-480">
        {/*  Header  */}
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 font-display font-bold text-[#333] text-3xl md:text-4xl lg:text-5xl"
          >
            EMPREENDIMENTOS
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="bg-[#8b7355] mx-auto mb-8 w-24 h-1"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mx-auto max-w-2xl text-[#666] text-base md:text-lg"
          >
            Projetos em diferentes estágios e em modelos de negócio. Aqui você
            tem a visão geral e pode falar com o parceiro responsável pela
            gestão comercial.
          </motion.p>
        </div>

        {/*  Features  */}
        <div className="flex md:flex-row flex-col justify-center gap-12 md:gap-24 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="flex items-center gap-3"
          >
            <svg
              className="w-8 h-8 text-[#666]"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0  0  24  24"
            >
              <path d="M9  12l2  2  4-4m6  2a9  9  0  11-18  0  9  9  0  0118  0z" />
            </svg>
            <div>
              <p className="font-semibold text-[#333] text-sm">
                Projetos com governança e
              </p>
              <p className="font-semibold text-[#333] text-sm">
                estrutura financeira
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="flex items-center gap-3"
          >
            <svg
              className="w-8 h-8 text-[#666]"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0  0  24  24"
            >
              <path d="M17.657  16.657L13.414  20.9a1.998  1.998  0  01-2.827  0l-4.244-4.243a8  8  0  1111.314  0z" />
              <path d="M15  11a3  3  0  11-6  0  3  3  0  016  0z" />
            </svg>
            <div>
              <p className="font-semibold text-[#333] text-sm">
                Execução em parceria com
              </p>
              <p className="font-semibold text-[#333] text-sm">
                construtora de referência
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-[#ddd] mb-16 w-full h-px"
        ></motion.div>

        {/*  Project  1  -  Amalfi  Itaparica  */}
        <div className="flex lg:flex-row flex-col gap-10 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <motion.div
              whileHover={{ boxShadow: "0 20px 50px rgba(0,0,0,0.15)" }}
              transition={{ duration: 0.3 }}
              className="relative bg-[#8a8a8a] rounded-lg aspect-4/3 overflow-hidden"
            >
              <span className="top-4 left-4 absolute bg-[#4a4a4a] px-4 py-2 rounded text-white text-xs">
                LANÇAMENTO EM BREVE
              </span>
              <div className="right-0 bottom-0 left-0 absolute bg-gradient-to-t from-black/60 to-transparent p-6">
                <h3 className="font-semibold text-white text-2xl md:text-3xl">
                  Amalfi Itaparica
                </h3>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center w-full lg:w-1/2"
          >
            <h4 className="mb-4 font-semibold text-[#333] text-xl md:text-2xl">
              Itaparica, BA
            </h4>
            <p className="mb-6 text-[#666] text-base leading-relaxed">
              Um novo olhar sobre o viver à beira-mar, inspirado na região de
              Amalfi, no sul da Itália.
            </p>
            <div className="bg-[#ddd] mb-6 w-full h-px"></div>
            <div className="flex gap-8 mb-8">
              <div>
                <p className="mb-1 text-[#999] text-xs">Áreas privativas</p>
                <p className="font-semibold text-[#333] text-sm">
                  de 22m² a 93m²
                </p>
              </div>
              <div>
                <p className="mb-1 text-[#999] text-xs">Dormitórios</p>
                <p className="font-semibold text-[#333] text-sm">1 a 3</p>
              </div>
              <div>
                <p className="mb-1 text-[#999] text-xs">Planta</p>
                <p className="font-semibold text-[#333] text-sm">modular</p>
              </div>
            </div>
            <div className="bg-[#ddd] mb-6 w-full h-px"></div>
            <motion.a
              href="#"
              whileHover={{ backgroundColor: "#333" }}
              transition={{ duration: 0.3 }}
              className="inline-flex justify-between items-center bg-[#4a4a4a] px-6 py-4 rounded max-w-sm text-white"
            >
              <span className="text-sm tracking-wider">
                CONHECER PROJETO & ESTRUTURA
              </span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0  0  24  24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17  8l4  4m0  0l-4  4m4-4H3"
                />
              </svg>
            </motion.a>
          </motion.div>
        </div>

        {/*  Project  2  -  Horto  Florestal  */}
        <div className="flex lg:flex-row flex-col-reverse gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center w-full lg:w-1/2"
          >
            <h4 className="mb-4 font-semibold text-[#333] text-xl md:text-2xl">
              Salvador, BA
            </h4>
            <p className="mb-6 text-[#666] text-base leading-relaxed">
              Um vertical em uma das localizações mais desejadas da cidade, com
              entorno valorizado e vida urbana completa.
            </p>
            <div className="bg-[#ddd] mb-6 w-full h-px"></div>
            <div className="flex flex-wrap gap-6 mb-8">
              <div>
                <p className="mb-1 text-[#999] text-xs">Studios Compactos</p>
                <p className="font-semibold text-[#333] text-sm">
                  de 23m² a 46m²
                </p>
              </div>
              <div>
                <p className="mb-1 text-[#999] text-xs">Dormitórios</p>
                <p className="font-semibold text-[#333] text-sm">1 e 2</p>
              </div>
              <div>
                <p className="mb-1 text-[#999] text-xs">Vaga de</p>
                <p className="font-semibold text-[#333] text-sm">Garagem</p>
              </div>
              <div>
                <p className="mb-1 text-[#999] text-xs">Localizado em</p>
                <p className="font-semibold text-[#333] text-sm">
                  Bairro Nobre
                </p>
              </div>
            </div>
            <div className="bg-[#ddd] mb-6 w-full h-px"></div>
            <motion.a
              href="#"
              whileHover={{ backgroundColor: "#333" }}
              transition={{ duration: 0.3 }}
              className="inline-flex justify-between items-center bg-[#4a4a4a] px-6 py-4 rounded max-w-sm text-white"
            >
              <span className="text-sm tracking-wider">
                CONHECER PROJETO & ESTRUTURA
              </span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0  0  24  24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17  8l4  4m0  0l-4  4m4-4H3"
                />
              </svg>
            </motion.a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <motion.div
              whileHover={{ boxShadow: "0 20px 50px rgba(0,0,0,0.15)" }}
              transition={{ duration: 0.3 }}
              className="relative bg-[#8a8a8a] rounded-lg aspect-4/3 overflow-hidden"
            >
              <span className="top-4 left-4 absolute bg-[#4a4a4a] px-4 py-2 rounded text-white text-xs">
                EM DESENVOLVIMENTO
              </span>
              <div className="right-0 bottom-0 left-0 absolute bg-gradient-to-t from-black/60 to-transparent p-6">
                <h3 className="font-semibold text-white text-2xl md:text-3xl">
                  Horto Florestal
                </h3>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
