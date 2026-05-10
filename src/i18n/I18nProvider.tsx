"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  dictionaries,
  FALLBACK_LOCALE,
  resolveLocale,
  type Dictionary,
  type Locale,
} from "./dictionary";

const STORAGE_KEY = "vertis-locale";

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  d: Dictionary;
};

const I18nContext = createContext<I18nContextValue | null>(null);

function detectInitialLocale(): Locale {
  if (typeof window === "undefined") return FALLBACK_LOCALE;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) return resolveLocale(stored);
  } catch {
    // localStorage unavailable — fall through to navigator.language
  }
  return resolveLocale(window.navigator.language);
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(FALLBACK_LOCALE);

  useEffect(() => {
    const detected = detectInitialLocale();
    if (detected !== locale) setLocaleState(detected);
    // Run once on mount; locale changes from setLocale handle the rest.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = dictionaries[locale].htmlLang;
    }
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore storage failures
    }
  }, []);

  const value = useMemo<I18nContextValue>(
    () => ({ locale, setLocale, d: dictionaries[locale] }),
    [locale, setLocale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return ctx;
}
