"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "de" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "de",
  setLanguage: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // German is the default and primary language
  const [language, setLanguageState] = useState<Language>("de");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("portfolio_lang");
      if (stored === "de" || stored === "en") {
        setLanguageState(stored);
      } else {
        // Default to German
        setLanguageState("de");
        localStorage.setItem("portfolio_lang", "de");
      }
    } catch {
      // Fallback
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("portfolio_lang", lang);
      document.documentElement.lang = lang;
    } catch {
      // Ignore storage errors
    }
  };

  useEffect(() => {
    if (mounted) {
      document.documentElement.lang = language;
    }
  }, [language, mounted]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  return context;
}
