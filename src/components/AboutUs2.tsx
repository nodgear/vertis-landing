"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function AboutUs2() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax transforms - stronger movement range
  // const imageY = useTransform(scrollYProgress, [0, 1], [350, -350]);
  
  // Content moves at different speed for depth
  // const contentY = useTransform(scrollYProgress, [0, 1], [200, -200]);

  // Entire section moves upward as you scroll down
  const sectionY = useTransform(scrollYProgress, [0, 1], [0, -400]);

  return (
    <motion.section 
      ref={sectionRef} 
      id="sobre" 
      style={{ y: sectionY }}
      className="relative py-20 md:py-28 overflow-hidden bg-white will-change-transform"
    >
      <div className="mx-auto px-6 lg:px-25 max-w-480">
        <div className="flex md:flex-row flex-col items-center gap-12 md:gap-20">
          {/*  Image  Placeholder  */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            // style={{ y: imageY }}
            className="w-full md:w-1/2 will-change-transform"
          >
            <div className="bg-[url(/aboutus_2_display.png)] bg-contain bg-no-repeat bg-center rounded-3xl w-full aspect-4/3"></div>
          </motion.div>

          {/*  Content  */}
          <motion.div /* style={{ y: contentY }} */ className="w-full md:w-1/2 will-change-transform">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="mb-14"
            >
              <p className="mb-4 text-white/70 text-sm uppercase tracking-widest">
                VERTIS INCORPORADORA
              </p>
              <div className="bg-card-gradient w-1/4 h-0.5"></div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="mb-14 font-display font-medium text-brown text-3xl md:text-4xl lg:text-5xl"
            >
              O QUE NÓS
              <br />
              <span className="inline-block text-gradient">CONSTRUÍMOS</span>
              <br />
              VAI ALÉM.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="text-black text-base md:text-lg leading-relaxed"
            >
              <span className="font-semibold">Um bom empreendimento</span> não
              nasce por acaso.
              <br />
              Ele nasce quando existe{" "}
              <span className="font-semibold">intenção, critério e uma</span>
              <br />
              <span className="font-semibold">
                equipe que trata o detalhe como responsabilidade.
              </span>
            </motion.p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
