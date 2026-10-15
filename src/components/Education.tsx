"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function Education() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="space-y-6" data-purpose="education-credentials" id="education">
      <div>
        <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
          {t.education.tag}
        </span>
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          {t.education.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {t.education.credentials.map((cred, idx) => (
          <div
            key={idx}
            className="glass-card rounded-2xl p-6 border border-white hover:shadow-glass-hover transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${cred.badgeColor}`}>
                  {cred.category}
                </span>
                <span className="text-xs text-slate-400 font-mono">{cred.location}</span>
              </div>
              <h3 className="text-base font-bold text-slate-900">{cred.title}</h3>
              <p className={`text-xs ${cred.institutionColor} font-semibold mt-0.5`}>
                {cred.institution}
              </p>
              <p className="text-xs text-slate-500 mt-3 leading-relaxed">
                {cred.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
