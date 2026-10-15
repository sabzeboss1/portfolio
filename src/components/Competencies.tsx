"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function Competencies() {
  const { language } = useLanguage();
  const t = translations[language];

  const competencyMeta: Record<
    string,
    {
      colorClass: string;
      borderHover: string;
      tagColor: string;
      icon: React.ReactNode;
    }
  > = {
    backend: {
      colorClass: "bg-blue-100/70 text-blue-600",
      borderHover: "hover:border-blue-300",
      tagColor: "group-hover:text-blue-600",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      ),
    },
    ai: {
      colorClass: "bg-purple-100/70 text-purple-600",
      borderHover: "hover:border-purple-300",
      tagColor: "group-hover:text-purple-600",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M13 10V3L4 14h7v7l9-11h-7z"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      ),
    },
    web: {
      colorClass: "bg-cyan-100/70 text-cyan-600",
      borderHover: "hover:border-cyan-300",
      tagColor: "group-hover:text-cyan-600",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      ),
    },
    telemetry: {
      colorClass: "bg-amber-100/70 text-amber-600",
      borderHover: "hover:border-amber-300",
      tagColor: "group-hover:text-amber-600",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      ),
    },
  };

  return (
    <section className="space-y-6" data-purpose="services-competencies" id="competencies">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
            {t.competencies.tag}
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            {t.competencies.title}
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 max-w-md">
          {t.competencies.subtitle}
        </p>
      </div>

      {/* 4 Grid Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {t.competencies.items.map((comp) => {
          const meta = competencyMeta[comp.id] || competencyMeta.backend;
          return (
            <div
              key={comp.id}
              className={`glass-card rounded-2xl p-6 border border-white hover:shadow-glass-hover transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 ${meta.borderHover}`}
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-xl ${meta.colorClass} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-sm`}
                >
                  {meta.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{comp.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{comp.description}</p>
              </div>
              <div
                className={`pt-5 flex items-center justify-between text-xs font-semibold text-slate-400 ${meta.tagColor} transition-colors`}
              >
                <span>{comp.tag}</span>
                <span className="transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
