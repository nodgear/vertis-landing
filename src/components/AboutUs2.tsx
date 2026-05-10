"use client";

import { motion } from "motion/react";
import { useI18n } from "@/i18n/I18nProvider";

export default function AboutUs2() {
  const { d } = useI18n();
  return (
    <section
      id="sobre"
      className="relative bg-white py-20 md:py-28 overflow-hidden scroll-mt-40"
    >
      <div className="mx-auto px-6 lg:px-25 max-w-480">
        <div className="flex md:flex-row flex-col items-center gap-12 md:gap-20">
          {/*  Image  Placeholder  */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2 will-change-transform"
          >
            <div className="bg-[url(/aboutus_2_display.png)] bg-contain bg-no-repeat bg-center rounded-3xl w-full aspect-4/3"></div>
          </motion.div>

          {/*  Content  */}
          <motion.div className="w-full md:w-1/2 will-change-transform">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="mb-14"
            >
              <p className="mb-4 text-white/70 text-sm uppercase tracking-widest">
                {d.aboutUs2.kicker}
              </p>
              <div className="bg-card-gradient w-1/4 h-0.5"></div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mb-14 font-medium text-brown text-3xl md:text-4xl lg:text-5xl"
            >
              {d.aboutUs2.titleLine1}
              <br />
              <span className="inline-block text-gradient">
                {d.aboutUs2.titleLine2}
              </span>
              <br />
              {d.aboutUs2.titleLine3}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="md:hidden text-black text-base md:text-lg leading-relaxed"
            >
              <span className="font-semibold">{d.aboutUs2.bodyBoldStart}</span>
              {d.aboutUs2.bodyAfterBoldStart}
              <br />
              {d.aboutUs2.bodyMiddle}
              <span className="font-semibold">
                {d.aboutUs2.bodyBoldEndMobile}
              </span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="hidden md:block text-black text-base md:text-lg leading-relaxed"
            >
              <span className="font-semibold">{d.aboutUs2.bodyBoldStart}</span>
              {d.aboutUs2.bodyAfterBoldStart}
              <br />
              {d.aboutUs2.bodyMiddle}
              <span className="font-semibold">
                {d.aboutUs2.bodyBoldEndDesktopLine1}
              </span>
              <br />
              <span className="font-semibold">
                {d.aboutUs2.bodyBoldEndDesktopLine2}
              </span>
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
