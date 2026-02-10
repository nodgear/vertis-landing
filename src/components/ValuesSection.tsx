"use client";

import { motion } from "motion/react";

const values = [
  {
    title: "Transparência",
    description: "Relações claras e próximas em todas as etapas.",
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30 13.5H16.5C14.8431 13.5 13.5 14.8431 13.5 16.5V30C13.5 31.6569 14.8431 33 16.5 33H30C31.6569 33 33 31.6569 33 30V16.5C33 14.8431 31.6569 13.5 30 13.5Z"
          stroke="#F8E5C7"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.5 22.5H6C5.20435 22.5 4.44129 22.1839 3.87868 21.6213C3.31607 21.0587 3 20.2956 3 19.5V6C3 5.20435 3.31607 4.44129 3.87868 3.87868C4.44129 3.31607 5.20435 3 6 3H19.5C20.2956 3 21.0587 3.31607 21.6213 3.87868C22.1839 4.44129 22.5 5.20435 22.5 6V7.5"
          stroke="#F8E5C7"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Solidez",
    description:
      "Decisões responsáveis, visão de longo prazo e gestão rigorosa.",
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M31.5 24V12C31.4995 11.4739 31.3606 10.9572 31.0973 10.5017C30.834 10.0462 30.4556 9.66802 30 9.40498L19.5 3.40498C19.0439 3.14167 18.5266 3.00305 18 3.00305C17.4734 3.00305 16.9561 3.14167 16.5 3.40498L6 9.40498C5.54439 9.66802 5.16597 10.0462 4.90269 10.5017C4.63941 10.9572 4.50054 11.4739 4.5 12V24C4.50054 24.5261 4.63941 25.0428 4.90269 25.4982C5.16597 25.9537 5.54439 26.3319 6 26.595L16.5 32.595C16.9561 32.8583 17.4734 32.9969 18 32.9969C18.5266 32.9969 19.0439 32.8583 19.5 32.595L30 26.595C30.4556 26.3319 30.834 25.9537 31.0973 25.4982C31.3606 25.0428 31.4995 24.5261 31.5 24Z"
          stroke="#F8E5C7"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Inovação",
    description:
      "Soluções inteligentes, design autoral e tecnologia a serviço do conforto.",
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_961_152)">
          <path
            d="M18 22.5C20.4853 22.5 22.5 20.4853 22.5 18C22.5 15.5147 20.4853 13.5 18 13.5C15.5147 13.5 13.5 15.5147 13.5 18C13.5 20.4853 15.5147 22.5 18 22.5Z"
            stroke="#F8E5C7"
            strokeWidth="2.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M29.1 22.5C28.9003 22.9524 28.8408 23.4543 28.929 23.9409C29.0172 24.4275 29.2492 24.8765 29.595 25.23L29.685 25.32C29.9639 25.5986 30.1852 25.9295 30.3362 26.2937C30.4872 26.6579 30.5649 27.0483 30.5649 27.4425C30.5649 27.8367 30.4872 28.2271 30.3362 28.5913C30.1852 28.9555 29.9639 29.2864 29.685 29.565C29.4064 29.8439 29.0755 30.0652 28.7113 30.2162C28.3471 30.3672 27.9567 30.4449 27.5625 30.4449C27.1683 30.4449 26.7779 30.3672 26.4137 30.2162C26.0495 30.0652 25.7186 29.8439 25.44 29.565L25.35 29.475C24.9965 29.1292 24.5475 28.8972 24.0609 28.809C23.5743 28.7208 23.0724 28.7803 22.62 28.98C22.1763 29.1701 21.798 29.4859 21.5315 29.8883C21.2649 30.2907 21.1219 30.7623 21.12 31.245V31.5C21.12 32.2956 20.8039 33.0587 20.2413 33.6213C19.6787 34.1839 18.9156 34.5 18.12 34.5C17.3244 34.5 16.5613 34.1839 15.9987 33.6213C15.4361 33.0587 15.12 32.2956 15.12 31.5V31.365C15.1084 30.8685 14.9477 30.387 14.6588 29.9831C14.3699 29.5791 13.9661 29.2714 13.5 29.1C13.0476 28.9003 12.5457 28.8408 12.0591 28.929C11.5725 29.0172 11.1235 29.2492 10.77 29.595L10.68 29.685C10.4014 29.9639 10.0705 30.1852 9.70632 30.3362C9.34213 30.4872 8.95175 30.5649 8.5575 30.5649C8.16325 30.5649 7.77287 30.4872 7.40868 30.3362C7.04448 30.1852 6.71362 29.9639 6.435 29.685C6.15607 29.4064 5.93479 29.0755 5.78382 28.7113C5.63285 28.3471 5.55514 27.9567 5.55514 27.5625C5.55514 27.1683 5.63285 26.7779 5.78382 26.4137C5.93479 26.0495 6.15607 25.7186 6.435 25.44L6.525 25.35C6.87081 24.9965 7.10278 24.5475 7.19101 24.0609C7.27924 23.5743 7.21967 23.0724 7.02 22.62C6.82986 22.1763 6.51413 21.798 6.1117 21.5315C5.70926 21.2649 5.23768 21.1219 4.755 21.12H4.5C3.70435 21.12 2.94129 20.8039 2.37868 20.2413C1.81607 19.6787 1.5 18.9156 1.5 18.12C1.5 17.3244 1.81607 16.5613 2.37868 15.9987C2.94129 15.4361 3.70435 15.12 4.5 15.12H4.635C5.13149 15.1084 5.61301 14.9477 6.01695 14.6588C6.42089 14.3699 6.72857 13.9661 6.9 13.5C7.09967 13.0476 7.15924 12.5457 7.07101 12.0591C6.98278 11.5725 6.75081 11.1235 6.405 10.77L6.315 10.68C6.03607 10.4014 5.81479 10.0705 5.66382 9.70632C5.51285 9.34213 5.43514 8.95175 5.43514 8.5575C5.43514 8.16325 5.51285 7.77287 5.66382 7.40868C5.81479 7.04448 6.03607 6.71362 6.315 6.435C6.59362 6.15607 6.92448 5.93479 7.28868 5.78382C7.65287 5.63285 8.04325 5.55514 8.4375 5.55514C8.83175 5.55514 9.22213 5.63285 9.58632 5.78382C9.95052 5.93479 10.2814 6.15607 10.56 6.435L10.65 6.525C11.0035 6.87081 11.4525 7.10278 11.9391 7.19101C12.4257 7.27924 12.9276 7.21967 13.38 7.02H13.5C13.9437 6.82986 14.322 6.51413 14.5885 6.1117C14.8551 5.70926 14.9981 5.23768 15 4.755V4.5C15 3.70435 15.3161 2.94129 15.8787 2.37868C16.4413 1.81607 17.2044 1.5 18 1.5C18.7956 1.5 19.5587 1.81607 20.1213 2.37868C20.6839 2.94129 21 3.70435 21 4.5V4.635C21.0019 5.11768 21.1449 5.58926 21.4115 5.9917C21.678 6.39413 22.0563 6.70986 22.5 6.9C22.9524 7.09967 23.4543 7.15924 23.9409 7.07101C24.4275 6.98278 24.8765 6.75081 25.23 6.405L25.32 6.315C25.5986 6.03607 25.9295 5.81479 26.2937 5.66382C26.6579 5.51285 27.0483 5.43514 27.4425 5.43514C27.8367 5.43514 28.2271 5.51285 28.5913 5.66382C28.9555 5.81479 29.2864 6.03607 29.565 6.315C29.8439 6.59362 30.0652 6.92448 30.2162 7.28868C30.3672 7.65287 30.4449 8.04325 30.4449 8.4375C30.4449 8.83175 30.3672 9.22213 30.2162 9.58632C30.0652 9.95052 29.8439 10.2814 29.565 10.56L29.475 10.65C29.1292 11.0035 28.8972 11.4525 28.809 11.9391C28.7208 12.4257 28.7803 12.9276 28.98 13.38V13.5C29.1701 13.9437 29.4859 14.322 29.8883 14.5885C30.2907 14.8551 30.7623 14.9981 31.245 15H31.5C32.2956 15 33.0587 15.3161 33.6213 15.8787C34.1839 16.4413 34.5 17.2044 34.5 18C34.5 18.7956 34.1839 19.5587 33.6213 20.1213C33.0587 20.6839 32.2956 21 31.5 21H31.365C30.8823 21.0019 30.4107 21.1449 30.0083 21.4115C29.6059 21.678 29.2901 22.0563 29.1 22.5Z"
            stroke="#F8E5C7"
            strokeWidth="2.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_961_152">
            <rect width="36" height="36" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    title: "Confiança",
    description:
      "Compromisso com prazos, qualidade e respeito ao investidor, ao cliente e à vizinhança.",
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.5 16.5L16.5 3C17.6935 3 18.8381 3.47411 19.682 4.31802C20.5259 5.16193 21 6.30653 21 7.5V13.5H29.49C29.9249 13.4951 30.3556 13.5848 30.7524 13.7628C31.1491 13.9409 31.5024 14.2031 31.7878 14.5313C32.0732 14.8594 32.2838 15.2457 32.405 15.6634C32.5263 16.081 32.5553 16.52 32.49 16.95L30.42 30.45C30.3115 31.1654 29.9482 31.8174 29.3969 32.286C28.8456 32.7546 28.1435 33.0082 27.42 33H10.5M10.5 16.5V33M10.5 16.5H6C5.20435 16.5 4.44129 16.8161 3.87868 17.3787C3.31607 17.9413 3 18.7044 3 19.5V30C3 30.7956 3.31607 31.5587 3.87868 32.1213C4.44129 32.6839 5.20435 33 6 33H10.5"
          stroke="#F8E5C7"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

// Placeholder icon — swap with real SVG when assets are provided
function IconPlaceholder() {
  return <div className="bg-white/20 w-10 h-10" />;
}

export default function ValuesSection() {
  return (
    <section className="bg-brown py-20 md:pt-28 md:pb-12">
      <div className="mx-auto px-6 lg:px-25 max-w-480">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-14 text-center"
        >
          <h2 className="mb-4 text-white text-3xl md:text-5xl uppercase tracking-wider">
            NOSSOS VALORES
          </h2>
          <div className="bg-card-gradient mx-auto w-1/3 h-0.5" />
        </motion.div>

        {/* Cards */}
        <div className="flex md:flex-row flex-col gap-6">
          {values.map((value, index) => {
            const delay = index * 0.3 * 0.3;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay, ease: "easeOut" }}
                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                className="flex-1 bg-card-gradient p-8 md:p-10 rounded-2xl"
              >
                {/* Icon placeholder */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay, ease: "easeOut" }}
                  className="mb-6"
                >
                  {value.icon}
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.4,
                    delay: delay + 0.05,
                    ease: "easeOut",
                  }}
                  className="mb-3 font-bold text-white text-xl md:text-2xl"
                >
                  {value.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.4,
                    delay: delay + 0.1,
                    ease: "easeOut",
                  }}
                  className="text-white/80 text-sm md:text-base leading-relaxed"
                >
                  {value.description}
                </motion.p>
              </motion.div>
            );
          })}
        </div>

        {/* Pagination dots */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center gap-2 mt-12"
        >
          <div className="bg-[#D4BB95] rounded-full w-8 h-2" />
          <div className="bg-[#A6814E] rounded-full w-2 h-2" />
          <div className="bg-[#A6814E] rounded-full w-2 h-2" />
        </motion.div>
      </div>
    </section>
  );
}
