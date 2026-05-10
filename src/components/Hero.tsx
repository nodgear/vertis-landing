"use client";

import Navbar from "./Navbar";
import { motion } from "motion/react";
import { useI18n } from "@/i18n/I18nProvider";

export default function Hero() {
  const { d } = useI18n();
  return (
    <section
      className="relative flex flex-col bg-cover bg-no-repeat bg-top-left min-h-screen"
      style={{
        backgroundImage: "url('/hero_bg.png')",
      }}
    >
      <Navbar />

      <div className="flex flex-1 items-center">
        <div className="mx-auto px-6 lg:px-25 pt-20 w-full max-w-480">
          <div className="w-full">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8 overflow-x-hidden text-white text-3xl md:text-5xl leading-tight"
            >
              {d.hero.title.line1}
              <br />
              {d.hero.title.line2Pre}
              <span className="font-bold">{d.hero.title.line2Bold}</span>
              <br />
              {d.hero.title.line3}
              <span className="ml-1 font-bold">{d.hero.title.line3Bold1}</span>
              <span className="ml-1 font-bold">{d.hero.title.line3Bold2}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="overflow-x-hidden text-white/90 text-base md:text-lg leading-relaxed"
            >
              {d.hero.paragraph1Part1}
              <br className="hidden md:block" />
              {d.hero.paragraph1Part2}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="mb-10 font-semibold text-white text-base md:text-lg leading-relaxed"
            >
              <span className="ml-1 text-white/80">
                {d.hero.paragraph2Part1}
              </span>
              <span className="ml-1 text-white/80">
                {d.hero.paragraph2Part2Line1} <br />
                {d.hero.paragraph2Part2Line2}
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex sm:flex-row flex-col gap-4"
            >
              <motion.a
                href="https://wa.me/5511966298399?text=Ol%C3%A1%21%20Quero%20conhecer%20mais%20sobre%20a%20Vertis%21"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
                transition={{ duration: 0.3 }}
                className="flex justify-center items-center gap-2 bg-white/20 backdrop-blur-xs px-8 py-4 rounded-lg text-white text-sm tracking-wider"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {d.hero.whatsappCta}
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
