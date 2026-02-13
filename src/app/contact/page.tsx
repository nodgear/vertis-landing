"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { motion } from "motion/react";
import { useState } from "react";

type Result = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [result, setResult] = useState<Result>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setResult("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    const name    = data.get("name")    as string;
    const email   = data.get("email")   as string;
    const phone   = data.get("phone")   as string;
    const assunto = data.get("assunto") as string;
    const message = data.get("message") as string;

    // Compose body with all fields, same structure as WhatsApp message
    const body = [
      `Nome: ${name}`,
      `E-mail: ${email}`,
      `Telefone / WhatsApp: ${phone}`,
      `Assunto: ${assunto}`,
      ``,
      `Mensagem:`,
      message,
    ].join("\n");

    data.set("from_name", name);
    data.set("subject", assunto || "Nova mensagem - Site Vertis");
    data.set("message", body);

    try {
      const res  = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      const json = await res.json();
      if (json.success) { setResult("success"); form.reset(); }
      else setResult("error");
    } catch {
      setResult("error");
    }
  }

  return (
    <SmoothScroll>
      <main className="min-h-screen">
        {/* Olive background section — navbar + form */}
        <div className="bg-[#676B59] min-h-[70svh]">
          <Navbar />

          <div className="mx-auto px-6 lg:px-25 pt-52 pb-36 max-w-340">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex items-center gap-4 mb-8"
            >
              <svg
                width="31"
                height="32"
                viewBox="0 0 31 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0"
              >
                <path
                  d="M24.5417 30.6667C24.5417 31.0203 24.4056 31.3595 24.1633 31.6095C23.9211 31.8596 23.5926 32 23.25 32H1.29167C0.949095 32 0.620555 31.8596 0.37832 31.6095C0.136086 31.3595 0 31.0203 0 30.6667C0 30.3131 0.136086 29.9739 0.37832 29.7239C0.620555 29.4738 0.949095 29.3334 1.29167 29.3334H23.25C23.5926 29.3334 23.9211 29.4738 24.1633 29.7239C24.4056 29.9739 24.5417 30.3131 24.5417 30.6667ZM31 10.6667C31 14.3654 28.1777 18.6667 24.5417 18.6667H22.4595L22.072 21.0947C21.8247 22.6544 21.0471 24.072 19.8786 25.0932C18.7101 26.1143 17.2273 26.6722 15.6963 26.6667H8.8505C7.32039 26.671 5.83883 26.1125 4.67144 25.0914C3.50404 24.0704 2.72713 22.6534 2.48 21.0947L0.0723333 6.20937C-0.0508738 5.44557 -0.0114858 4.66324 0.18776 3.91674C0.387006 3.17023 0.741332 2.47747 1.22611 1.88658C1.71089 1.2957 2.31451 0.820862 2.995 0.495075C3.67549 0.169288 4.41655 0.000362689 5.16667 3.84604e-05H19.375C20.0532 -0.00263079 20.7251 0.133664 21.3519 0.401026C21.9787 0.668387 22.5479 1.0615 23.0264 1.55758C23.5049 2.05365 23.8833 2.64283 24.1397 3.29097C24.396 3.93911 24.5252 4.63332 24.5197 5.33337H24.5417C28.5859 5.33337 31 7.33337 31 10.6667ZM21.9222 5.77204C21.9839 5.39009 21.9643 4.99885 21.8647 4.62552C21.7651 4.25218 21.588 3.90571 21.3456 3.61019C21.1032 3.31467 20.8013 3.07719 20.461 2.91426C20.1207 2.75133 19.7501 2.66685 19.375 2.66671H5.16667C4.79167 2.66688 4.42121 2.75133 4.08102 2.91419C3.74082 3.07704 3.43905 3.3144 3.19667 3.60976C2.95429 3.90513 2.77711 4.25142 2.67744 4.62459C2.57777 4.99776 2.558 5.38885 2.6195 5.77071L5.02329 20.6574C5.17182 21.5924 5.63802 22.4423 6.33836 23.0548C7.0387 23.6673 7.92743 24.0024 8.84533 24H15.6912C16.6091 24.0024 17.4978 23.6673 18.1981 23.0548C18.8985 22.4423 19.3647 21.5924 19.5132 20.6574L21.9222 5.77204ZM28.4167 10.6667C28.4167 10 28.4167 8.00004 24.5417 8.00004H24.1813L22.8896 16H24.5417C26.5373 16 28.4167 12.9947 28.4167 10.6667Z"
                  fill="white"
                />
              </svg>
              <h1 className="font-bold text-white text-3xl md:text-4xl uppercase tracking-wide">
                VAMOS CONVERSAR!
              </h1>
            </motion.div>

            {/* Divider */}
            <div className="bg-white/30 mb-4 w-full h-px" />

            {/* Form */}
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              onSubmit={onSubmit}
              className="flex flex-col gap-3"
            >
              {/* Web3Forms hidden config */}
              <input type="hidden" name="access_key" value="2cf5be51-4b0e-47d1-a99d-5b0a99962441" />
              <input type="hidden" name="to" value="vertis@vertisincorporadora.com.br" />
              <input type="hidden" name="subject" value="New Submission from Web3Forms" />
              <input type="hidden" name="from_name" value="" />

              {/* Full name */}
              <input
                type="text"
                name="name"
                placeholder="NOME COMPLETO"
                required
                className="bg-[#f5f4f0] px-5 py-4 rounded-sm outline-none w-full text-brown placeholder:text-brown/60 text-xs uppercase tracking-widest"
              />

              {/* Email + Phone row */}
              <div className="flex sm:flex-row flex-col gap-3">
                <input
                  type="email"
                  name="email"
                  placeholder="E-MAIL"
                  required
                  className="flex-1 bg-[#f5f4f0] px-5 py-4 rounded-sm outline-none text-brown placeholder:text-brown/60 text-xs uppercase tracking-widest"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="TELEFONE / WHATSAPP"
                  className="flex-1 bg-[#f5f4f0] px-5 py-4 rounded-sm outline-none text-brown placeholder:text-brown/60 text-xs uppercase tracking-widest"
                />
              </div>

              {/* Subject — named "assunto" to avoid collision with hidden email subject */}
              <input
                type="text"
                name="assunto"
                placeholder="ASSUNTO:"
                className="bg-[#f5f4f0] px-5 py-4 rounded-sm outline-none w-full text-brown placeholder:text-brown/60 text-xs uppercase tracking-widest"
              />

              {/* Message */}
              <textarea
                name="message"
                placeholder="MENSAGEM"
                rows={6}
                className="bg-[#f5f4f0] px-5 py-4 rounded-sm outline-none w-full text-brown placeholder:text-brown/60 text-xs uppercase tracking-widest resize-none"
              />

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={result === "loading"}
                whileHover={result !== "loading" ? { opacity: 0.9 } : {}}
                transition={{ duration: 0.2 }}
                className="flex justify-center items-center gap-3 bg-[#B5A887] bg-button-gradient py-5 rounded-sm w-full text-white text-xs uppercase tracking-widest cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {result === "loading" ? (
                  <span>ENVIANDO...</span>
                ) : (
                  <>
                    <span>
                      <span className="font-bold">QUERO FALAR</span> COM A{" "}
                      <span className="font-bold">VERTIS</span>
                    </span>
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 6H15M15 6L10 1M15 6L10 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </>
                )}
              </motion.button>

              {/* Feedback */}
              {result === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="pt-2 text-center text-white text-sm tracking-wide"
                >
                  Mensagem enviada com sucesso! Entraremos em contato em breve.
                </motion.p>
              )}
              {result === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="pt-2 text-center text-white/80 text-sm tracking-wide"
                >
                  Algo deu errado. Por favor, tente novamente.
                </motion.p>
              )}
            </motion.form>
          </div>
        </div>

        {/* Full-width map */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="w-full h-[420px]"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1544185!2d-46.6762!3d-23.5847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce574b7a1b9e93%3A0x1e6c3d4e5f6a7b8c!2sR.%20Pedroso%20Alvarenga%2C%201221%20-%20sala%209A%2C%20Itaim%20Bibi%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        <Footer />
      </main>
    </SmoothScroll>
  );
}
