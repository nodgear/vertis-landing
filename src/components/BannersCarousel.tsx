"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import CasaDoPoetaBanner from "./CasaDoPoetaBanner";
import GuaiuBanner from "./GuaiuBanner";
import SenseBanner from "./SenseBanner";

const slides = [
  { key: "casa", Component: CasaDoPoetaBanner, label: "Casa do Poeta" },
  { key: "guaiu", Component: GuaiuBanner, label: "Guaiu" },
  { key: "sense", Component: SenseBanner, label: "Sense" },
];

const slideVariants = {
  enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d: number) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0 }),
};

export default function BannersCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = (i: number) => {
    const next = (i + slides.length) % slides.length;
    if (next === index) return;
    setDirection(next > index ? 1 : -1);
    setIndex(next);
  };

  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  const { Component, key } = slides[index];

  return (
    <div className="relative w-full min-h-[700px] overflow-hidden">
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={key}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0"
        >
          <Component />
        </motion.div>
      </AnimatePresence>

      <button
        type="button"
        onClick={prev}
        aria-label="Slide anterior"
        className="z-20 absolute top-1/2 left-3 lg:left-6 flex justify-center items-center bg-black/30 hover:bg-black/50 backdrop-blur-sm p-3 rounded-full text-white transition -translate-y-1/2"
      >
        <svg
          className="w-5 h-5 lg:w-6 lg:h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <button
        type="button"
        onClick={next}
        aria-label="Próximo slide"
        className="z-20 absolute top-1/2 right-3 lg:right-6 flex justify-center items-center bg-black/30 hover:bg-black/50 backdrop-blur-sm p-3 rounded-full text-white transition -translate-y-1/2"
      >
        <svg
          className="w-5 h-5 lg:w-6 lg:h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      <div className="bottom-6 left-1/2 z-20 absolute flex gap-2.5 -translate-x-1/2">
        {slides.map((s, i) => (
          <button
            key={s.key}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Ir para ${s.label}`}
            aria-current={i === index}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
