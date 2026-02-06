"use client";

import { motion } from "motion/react";

export default function ContactUs() {
  return (
    <>
      <section id="contato" className="py-20 md:py-28 text-[#676B59]">
        <div className="mx-auto px-6 lg:px-25 max-w-480">
          {/*  CTA  Section  */}
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-6 text-3xl md:text-4xl lg:text-5xl"
            >
              VAMOS <span className="font-bold">CONVERSAR!</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="mx-auto mb-10 max-w-2xl text-base md:text-lg /70"
            >
              Se você quer entender melhor os empreendimentos, falar sobre
              oportunidades ou construir uma parceria com a Vertis, a porta está
              aberta!
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              whileHover={{ backgroundColor: "#333" }}
              href="https://wa.me/5511966298399?text=Ol%C3%A1%21%20Quero%20conhecer%20mais%20sobre%20a%20Vertis%21"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-button-gradient px-12 py-5 rounded-xl text-white text-lg tracking-widest"
            >
              ENTRE EM CONTATO
            </motion.a>
          </div>
        </div>
      </section>

      {/*  Partners  Logos  Section  */}
      {/* <section className="bg-[#6b6b6b] py-10">
        <div className="px-6 lg:px-25 max-w-480 max-w-480to">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="opacity-50">
                <svg className="w-20 h-16" viewBox="0  0  80  64" fill="none">
                  <path d="M40  8L50  28H30L40  8Z" fill="white" />
                  <path d="M40  28L55  52H25L40  28Z" fill="white" />
                  <path d="M35  24L30  52" stroke="white" strokeWidth="1" />
                  <path d="M45  24L50  52" stroke="white" strokeWidth="1" />
                  <text
                    x="15"
                    y="62"
                    fill="white"
                    fontSize="10"
                    fontFamily="sans-serif"
                    letterSpacing="1"
                  >
                    KAHHU
                  </text>
                </svg>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
}
