"use client";

import { motion } from "motion/react";

// Placeholder — replace icon with real SVG when assets are provided
const placeholder = <div className="bg-[#B5A887]/30 mx-auto w-10 h-10" />;

const steps = [
  {
    label: "PESQUISA\n& VISÃO",
    description: "Entendemos vocações do entorno e tendências urbanas.",
    icon: (
      <svg
        width="23"
        height="23"
        viewBox="0 0 23 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.8035 21.2144L16.7285 16.1394M19.4701 9.54769C19.4701 14.7023 15.2915 18.881 10.1368 18.881C4.98214 18.881 0.803467 14.7023 0.803467 9.54769C0.803467 4.39303 4.98214 0.214355 10.1368 0.214355C15.2915 0.214355 19.4701 4.39303 19.4701 9.54769Z"
          stroke="#A6814E"
          strokeWidth="1.60714"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "CONCEPÇÃO",
    description: "Projetos que aliam estética, funcionalidade e valor perene.",
    icon: (
      <svg
        width="23"
        height="23"
        viewBox="0 0 23 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.3035 0.214355L21.8035 7.03936M11.3035 0.214355L0.803467 7.03936M11.3035 0.214355V7.03936M21.8035 7.03936V14.3894M21.8035 7.03936L11.3035 14.3894M21.8035 14.3894L11.3035 21.2144M21.8035 14.3894L11.3035 7.03936M11.3035 21.2144L0.803467 14.3894M11.3035 21.2144V14.3894M0.803467 14.3894V7.03936M0.803467 14.3894L11.3035 7.03936M0.803467 7.03936L11.3035 14.3894"
          stroke="#A6814E"
          strokeWidth="1.60714"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "ENGENHARIA\n& QUALIDADE",
    description:
      "Métodos rigorosos, fornecedores homologados e controle de desempenho.",
    icon: (
      <svg
        width="23"
        height="23"
        viewBox="0 0 23 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.7331 4.96977C13.5307 5.17632 13.4173 5.45402 13.4173 5.74325C13.4173 6.03248 13.5307 6.31018 13.7331 6.51674L15.5011 8.28469C15.7076 8.48716 15.9853 8.60056 16.2746 8.60056C16.5638 8.60056 16.8415 8.48716 17.0481 8.28469L21.2138 4.11894C21.7694 5.34678 21.9377 6.71478 21.6961 8.04066C21.4545 9.36653 20.8146 10.5873 19.8616 11.5403C18.9087 12.4932 17.6879 13.1331 16.362 13.3747C15.0362 13.6163 13.6681 13.4481 12.4403 12.8924L4.80493 20.5278C4.36535 20.9674 3.76914 21.2144 3.14747 21.2144C2.5258 21.2144 1.9296 20.9674 1.49001 20.5278C1.05042 20.0882 0.803467 19.492 0.803467 18.8703C0.803467 18.2487 1.05042 17.6525 1.49001 17.2129L9.12538 9.57752C8.56976 8.34968 8.40153 6.98167 8.64311 5.6558C8.88469 4.32993 9.5246 3.10917 10.4776 2.1562C11.4305 1.20323 12.6513 0.563318 13.9772 0.321742C15.303 0.0801646 16.671 0.248396 17.8989 0.804016L13.7331 4.96977Z"
          stroke="#A6814E"
          strokeWidth="1.60714"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "SUSTENTABILIDADE\n& EFICIÊNCIA",
    description:
      "Materiais responsáveis, tecnologia construtiva e gestão de recursos.",
    icon: (
      <svg
        width="23"
        height="18"
        viewBox="0 0 23 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.803467 0.942458V6.61061M0.803467 6.61061H6.53074M0.803467 6.61061L5.23256 2.49175C6.25845 1.47594 7.52764 0.733876 8.92169 0.334807C10.3157 -0.0642624 11.7892 -0.107331 13.2046 0.20962C14.6201 0.526571 15.9313 1.19321 17.016 2.14734C18.1007 3.10146 18.9234 4.31197 19.4076 5.66592M21.8035 16.0575V10.3894M21.8035 10.3894H16.0762M21.8035 10.3894L17.3744 14.5082C16.3485 15.5241 15.0793 16.2661 13.6852 16.6652C12.2912 17.0643 10.8177 17.1073 9.40229 16.7904C7.98687 16.4734 6.67564 15.8068 5.59096 14.8527C4.50628 13.8985 3.68349 12.688 3.19938 11.3341"
          stroke="#A6814E"
          strokeWidth="1.60714"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "ENTREGA\n& PÓS OBRA",
    description: "Projetos que aliam estética, funcionalidade e valor perene.",
    icon: (
      <svg
        width="23"
        height="17"
        viewBox="0 0 23 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.3535 15.2144L21.8035 7.71436L12.3535 0.214355V15.2144Z"
          stroke="#A6814E"
          strokeWidth="1.60714"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M0.803467 15.2144L10.2535 7.71436L0.803467 0.214355V15.2144Z"
          stroke="#A6814E"
          strokeWidth="1.60714"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto px-6 lg:px-25 max-w-480">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-26 text-center"
        >
          <h2 className="font-bold text-[#868686] text-3xl md:text-5xl uppercase tracking-wider">
            COMO FAZEMOS
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="gap-10 md:gap-20 grid grid-cols-2 md:grid-cols-5">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="flex flex-col items-center gap-4 text-center"
            >
              {/* Icon — replace step.icon with real SVG when assets are provided */}
              {step.icon}

              {/* Label */}
              <p className="font-bold text-[#878787] text-xl md:text-xl uppercase leading-snug tracking-wider whitespace-pre-line">
                {step.label}
              </p>

              {/* Description */}
              <p className="text-gray-dark text-xs md:text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
