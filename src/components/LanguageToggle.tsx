"use client";

import { useLanguage, Language } from "@/context/LanguageContext";

interface LanguageToggleProps {
  className?: string;
}

export default function LanguageToggle({ className = "" }: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language selection"
      className={`inline-flex items-center p-1 rounded-full bg-slate-100/70 border border-white/80 shadow-inner backdrop-blur-sm ${className}`}
    >
      <button
        type="button"
        onClick={() => setLanguage("de")}
        className={`px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wider transition-all duration-200 cursor-pointer ${
          language === "de"
            ? "bg-slate-900 text-white shadow-sm"
            : "text-slate-500 hover:text-slate-900 hover:bg-white/50"
        }`}
        aria-pressed={language === "de"}
        title="Deutsch (Primär)"
      >
        DE
      </button>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wider transition-all duration-200 cursor-pointer ${
          language === "en"
            ? "bg-slate-900 text-white shadow-sm"
            : "text-slate-500 hover:text-slate-900 hover:bg-white/50"
        }`}
        aria-pressed={language === "en"}
        title="English"
      >
        EN
      </button>
    </div>
  );
}
