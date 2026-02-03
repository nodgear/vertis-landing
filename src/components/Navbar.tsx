"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 will-change-transform ${isScrolled ? "backdrop-blur-sm bg-brown/40" : ""}`}
    >
      <div className="mx-auto px-6 lg:px-25 max-w-480">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <img
                src="/logo.png"
                alt="VERTIS"
                width="82"
                height="82"
                className="object-contain aspect-square w-20 p-4"
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
              className="hover:opacity-80 text-white text-sm tracking-wider transition-opacity"
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
              className="bg-button-gradient backdrop-blur-xs px-6 py-2.5 rounded-lg text-white text-sm tracking-wider inline-block"
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
        {isMenuOpen && (
          <div className="md:hidden pb-6">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-white text-sm tracking-wider">
                HOME
              </a>
              <a href="#sobre" className="text-white text-sm tracking-wider">
                SOBRE
              </a>
              {/* <a href="#empreendimentos" className="text-white text-sm tracking-wider">EMPREENDIMENTOS</a> */}
              <a href="#contato" className="text-white text-sm tracking-wider">
                CONTATO
              </a>
              <a
                href="#contato"
                className="bg-white/20 backdrop-blur-xs px-6 py-2.5 rounded-lg text-white text-sm text-center tracking-wider"
              >
                FALE CONOSCO!
              </a>
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  );
}
