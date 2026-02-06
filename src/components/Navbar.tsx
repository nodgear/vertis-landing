"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          ></motion.div>
        )}
      </AnimatePresence>

      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          // translateY: { type: "spring", stiffness: 120, damping: 25, mass: 0.8 },
          opacity: { duration: 1, ease: "easeOut" },
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "backdrop-blur-sm bg-brown/40" : ""}`}
      >
        <div className="mx-auto px-6 lg:px-25 max-w-480">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center">
                <motion.img
                  src="/logo.png"
                  alt="VERTIS"
                  width="110"
                  height="110"
                  animate={{
                    width: isScrolled ? 82 : 144,
                  }}
                  transition={{ duration: 0.3 }}
                  className="p-4 w-36 h-auto object-contain aspect-square"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              <a
                href="#"
                className="hover:opacity-80 text-white text-sm tracking-wider transition-opacity"
              >
                HOME
              </a>
              <a
                href="#sobre"
                className="hover:opacity-80 text-white text-sm tracking-wider transition-opacity cursor-pointer"
              >
                SOBRE
              </a>
              {/* <div className="group relative">
                <button className="flex items-center gap-1 hover:opacity-80 text-white text-sm tracking-wider transition-opacity">
                  EMPREENDIMENTOS
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div> */}
              <a
                href="#contato"
                className="hover:opacity-80 text-white text-sm tracking-wider transition-opacity"
              >
                CONTATO
              </a>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <motion.a
                href="#contato"
                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
                transition={{ duration: 0.3 }}
                className="inline-block bg-button-gradient backdrop-blur-xs px-6 py-2.5 rounded-lg text-white text-sm tracking-wider"
              >
                FALE CONOSCO!
              </motion.a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="md:hidden pb-6 relative z-50 overflow-hidden"
              >
                <div className="flex flex-col space-y-4">
                  <a href="#" className="text-white text-sm tracking-wider">
                    HOME
                  </a>
                  <a
                    href="#sobre"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white text-sm tracking-wider"
                  >
                    SOBRE
                  </a>
                  {/* <a href="#empreendimentos" className="text-white text-sm tracking-wider">EMPREENDIMENTOS</a> */}
                  <a href="#contato" className="text-white text-sm tracking-wider">
                    CONTATO
                  </a>
                  <a
                    href="https://wa.me/5511966298399?text=Ol%C3%A1%21%20Quero%20conhecer%20mais%20sobre%20a%20Vertis%21"
                    className="bg-white/20 backdrop-blur-xs px-6 py-2.5 rounded-lg text-white text-sm text-center tracking-wider"
                  >
                    FALE CONOSCO!
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  );
}
