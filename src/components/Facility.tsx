"use client";

import { motion } from "motion/react";

export default function Facility() {
  const facilities = [
    {
      icon: (
        <svg
          width="51"
          height="38"
          viewBox="0 0 51 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.625 18.9583C1.625 18.9583 10.2917 1.625 25.4583 1.625C40.625 1.625 49.2917 18.9583 49.2917 18.9583C49.2917 18.9583 40.625 36.2917 25.4583 36.2917C10.2917 36.2917 1.625 18.9583 1.625 18.9583Z"
            stroke="#F8E5C7"
            strokeWidth="3.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M25.4583 25.4583C29.0482 25.4583 31.9583 22.5482 31.9583 18.9583C31.9583 15.3685 29.0482 12.4583 25.4583 12.4583C21.8685 12.4583 18.9583 15.3685 18.9583 18.9583C18.9583 22.5482 21.8685 25.4583 25.4583 25.4583Z"
            stroke="#F8E5C7"
            strokeWidth="3.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title: "Visão de longo prazo",
      description:
        "A Vertis não faz por tendência ou impulso. Construímos pensando no que faz sentido hoje e fará daqui muitos anos.",
    },
    {
      icon: (
        <svg
          width="47"
          height="47"
          viewBox="0 0 47 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.2917 1.625V10.2917M23.2917 36.2917V44.9583M7.97333 7.97333L14.105 14.105M32.4783 32.4783L38.61 38.61M1.625 23.2917H10.2917M36.2917 23.2917H44.9583M7.97333 38.61L14.105 32.4783M32.4783 14.105L38.61 7.97333"
            stroke="#F8E5C7"
            strokeWidth="3.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title: "Detalhe com verdade",
      description:
        "O que parece pequeno é o que muda tudo. Trabalhamos para que cada escolha tenha propósito e não só aparência.",
    },
    {
      icon: (
        <svg
          width="47"
          height="45"
          viewBox="0 0 47 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M42.6441 1.625L38.3108 5.95833M38.3108 5.95833L44.8108 12.4583L37.2275 20.0417L30.7275 13.5417M38.3108 5.95833L30.7275 13.5417M21.8225 22.4467C22.9412 23.5505 23.8306 24.8647 24.4393 26.3137C25.048 27.7627 25.3641 29.3177 25.3694 30.8894C25.3746 32.461 25.069 34.0181 24.47 35.4712C23.871 36.9242 22.9904 38.2443 21.8791 39.3556C20.7678 40.467 19.4476 41.3475 17.9946 41.9465C16.5416 42.5455 14.9845 42.8512 13.4129 42.8459C11.8412 42.8406 10.2862 42.5245 8.8372 41.9158C7.38823 41.3071 6.07399 40.4177 4.97015 39.299C2.79943 37.0515 1.5983 34.0413 1.62545 30.9168C1.6526 27.7923 2.90586 24.8034 5.11531 22.594C7.32476 20.3845 10.3136 19.1313 13.4381 19.1041C16.5626 19.077 19.5728 20.2781 21.8203 22.4488L21.8225 22.4467ZM21.8225 22.4467L30.7275 13.5417"
            stroke="#F8E5C7"
            strokeWidth="3.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title: "Confiança na entrega",
      description:
        "Clareza, cuidado e gestão firme em cada etapa. Porque confiança não se promete, se constrói.",
    },
  ];

  return (
    <section className="bg-brown py-16 md:pt-20 md:pb-7">
      <div className="flex flex-col gap-20 mx-auto px-6 lg:px-25 max-w-480">
        <div className="flex md:flex-row flex-col gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              className="flex-1 bg-card-gradient p-10 md:p-10 rounded-2xl transition-colors"
            >
              <div className="mb-7 text-white">{facility.icon}</div>
              <h3 className="mb-3 font-bold text-white md:text-2xl text-3xl">
                {facility.title}
              </h3>
              <p className="text-white/80 md:text-base text-lg leading-relaxed">
                {facility.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Pagination dots */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center gap-2 mt-10"
        >
          <div className="bg-[#D4BB95] rounded-full w-8 h-2"></div>
          <div className="bg-[#A6814E] rounded-full w-2 h-2"></div>
          <div className="bg-[#A6814E] rounded-full w-2 h-2"></div>
        </motion.div>
      </div>
    </section>
  );
}
