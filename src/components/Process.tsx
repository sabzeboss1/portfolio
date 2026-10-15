"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function Process() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="space-y-6" data-purpose="engineering-process" id="process">
      <div>
        <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
          {t.process.tag}
        </span>
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          {t.process.title}
        </h2>
      </div>

      {/* 5 Step Cards Flow */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
        {t.process.steps.map((step, idx) => {
          const isLast = idx === t.process.steps.length - 1;
          const arrow = isLast ? "✓" : "→";

          return (
            <div
              key={step.num}
              className="glass-card rounded-2xl p-4 border border-white hover:bg-white/90 transition-all hover:shadow-md hover:-translate-y-0.5 group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-brand-600 bg-brand-50 px-2 py-0.5 rounded-full border border-brand-200">
                  {step.num}
                </span>
                <span
                  className={`text-sm font-bold ${
                    isLast
                      ? "text-emerald-500"
                      : "text-slate-300 group-hover:text-brand-500 transition-colors"
                  }`}
                >
                  {arrow}
                </span>
              </div>
              <h3 className="text-sm font-bold text-slate-900">{step.title}</h3>
              <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
