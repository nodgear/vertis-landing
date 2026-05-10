"use client";

import { motion } from "motion/react";
import { useI18n } from "@/i18n/I18nProvider";

export default function TeamSection() {
  const { d } = useI18n();
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
              {d.team.firstName}{" "}
              <span style={{ color: "#b5a887" }}>{d.team.lastName}</span>
            </h2>

            {/* Title */}
            <p className="mb-6 font-bold text-white text-xs uppercase tracking-widest">
              {d.team.role}
            </p>

            {/* Bio */}
            <p className="mb-5 text-white text-sm md:text-base leading-relaxed">
              {d.team.bio}
            </p>

            <p className="font-bold text-white text-sm md:text-base leading-relaxed">
              {d.team.bioHighlight}
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
