"use client";

import { LOCALES, LOCALE_LABELS, type Locale } from "./dictionary";
import { useI18n } from "./I18nProvider";

type Props = {
  className?: string;
};

export default function LanguageSwitcher({ className = "" }: Props) {
  const { locale, setLocale, d } = useI18n();

  return (
    <div
      role="group"
      aria-label={d.nav.languageMenuLabel}
      className={`flex items-center gap-1 rounded-full border border-white/30 px-1 py-0.5 ${className}`}
    >
      {LOCALES.map((l: Locale) => {
        const active = l === locale;
        return (
          <button
            key={l}
            type="button"
            onClick={() => setLocale(l)}
            aria-pressed={active}
            className={`rounded-full px-2.5 py-1 text-xs tracking-wider transition-colors cursor-pointer ${
              active
                ? "bg-white/20 text-white"
                : "text-white/70 hover:text-white"
            }`}
          >
            {LOCALE_LABELS[l]}
          </button>
        );
      })}
    </div>
  );
}
