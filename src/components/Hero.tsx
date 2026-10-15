"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  const profileImageUrl =
    "https://lh3.googleusercontent.com/aida/AEtjO1VTyA6VPBoDqYm7gcX1-ooNIYb81ghcVvCzndz2rVcPVmj3rz2V9rSyz31KSrKmZV7V4I_dJGIGBKE5HY5eVst_ML1oO71enWIOIFSwX4ESGbJBaMOXtP4nY7xNT6si1k9Uni_rEW0_JKGyAHzBuhunZJgyXuLNCV_HY7Q0vNuTU-3XeyTBzXgOqEQCYu9PLquSHG6uhs3xHWfQ3EEVia60hEOPPDNnS1NpDeAeH6_gLU6i-xKC8720jI4";

  return (
    <section className="relative pt-6 sm:pt-12 pb-8" data-purpose="hero-banner" id="hero">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Hero Text Column (Left) */}
        <div className="lg:col-span-6 space-y-6">
          {/* Hello / Status Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-slate-200/70 shadow-sm backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold tracking-wider text-slate-700 uppercase">
              {t.hero.statusAvailable}
            </span>
          </div>

          {/* Hero Name & Dynamic Title */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Phalonne Guemkam
            </h1>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              {t.hero.role}
            </p>
          </div>

          {/* Concise Technical Bio */}
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
            {t.hero.bio}
          </p>

          {/* Call To Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-full px-6 py-3.5 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              href="#projects"
            >
              <span>{t.hero.viewWork}</span>
              <span>↗</span>
            </a>
            <a
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 bg-white/80 hover:bg-white border border-slate-200/80 rounded-full px-5 py-3.5 transition-all shadow-sm hover:shadow"
              href="#contact"
            >
              <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
              <span>{t.hero.downloadCv}</span>
            </a>
          </div>

          {/* Technology Badges Row */}
          <div className="pt-6 border-t border-slate-200/60">
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-3">
              {t.hero.stackTitle}
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-700">
              <span className="glass-pill px-3 py-1.5 rounded-full border border-white/80 flex items-center gap-1.5 hover:bg-white transition-all shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Java &amp; Spring Boot
              </span>
              <span className="glass-pill px-3 py-1.5 rounded-full border border-white/80 flex items-center gap-1.5 hover:bg-white transition-all shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" /> React.js
              </span>
              <span className="glass-pill px-3 py-1.5 rounded-full border border-white/80 flex items-center gap-1.5 hover:bg-white transition-all shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" /> PostgreSQL
              </span>
              <span className="glass-pill px-3 py-1.5 rounded-full border border-white/80 flex items-center gap-1.5 hover:bg-white transition-all shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> FastAPI
              </span>
              <span className="glass-pill px-3 py-1.5 rounded-full border border-white/80 flex items-center gap-1.5 hover:bg-white transition-all shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" /> Docker &amp; MQTT
              </span>
            </div>
          </div>
        </div>

        {/* Hero Visual Column with Portrait & Floating Cards (Right) */}
        <div className="lg:col-span-6 relative flex justify-center items-center">
          <div className="relative w-[320px] sm:w-[390px] md:w-[440px]">
            {/* Frosted Glass Arch Frame */}
            <div className="relative rounded-[2.5rem] sm:rounded-[3rem] p-3 sm:p-4 bg-white/50 backdrop-blur-xl border border-white/90 shadow-2xl overflow-hidden">
              {/* Portrait Image Container */}
              <div className="relative rounded-[2rem] sm:rounded-[2.4rem] overflow-hidden aspect-[4/4.8] bg-slate-100">
                <Image
                  src={profileImageUrl}
                  alt="Phalonne Christelle Guemkam Tuedjo - Software Developer"
                  width={500}
                  height={600}
                  priority
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 390px, 440px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Floating Glass Stat 1: Top Right (Years / Output) */}
            <div className="absolute -top-4 -right-4 sm:-right-6 glass-card rounded-2xl p-4 shadow-float border border-white/80 max-w-[150px] animate-float">
              <div className="flex items-center gap-1">
                <span className="text-3xl font-extrabold text-slate-800">{t.hero.stat1Number}</span>
                <span className="text-lg font-bold text-brand-600">+</span>
              </div>
              <p className="text-[11px] font-semibold text-slate-500 leading-tight">
                {t.hero.stat1Label}
              </p>
            </div>

            {/* Floating Glass Stat 2: Bottom Left (AI & Systems Impact) */}
            <div className="absolute -bottom-6 -left-4 sm:-left-8 glass-card rounded-2xl p-4 shadow-float border border-white/80 max-w-[210px]">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  {t.hero.stat2Tag}
                </span>
                <span className="text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  {t.hero.stat2Status}
                </span>
              </div>
              <p className="text-xs font-bold text-slate-800">{t.hero.stat2Title}</p>
              <div className="mt-2 flex items-center gap-1 text-[11px] text-slate-500">
                <svg className="w-3.5 h-3.5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                </svg>
                <span className="font-medium text-slate-700">{t.hero.stat2Subtitle}</span>
              </div>
            </div>

            {/* Decorative 3D Glass Orbs */}
            <div className="absolute -top-6 -left-6 w-14 h-14 rounded-full bg-gradient-to-br from-white/90 to-blue-200/40 backdrop-blur-md border border-white shadow-lg pointer-events-none" />
            <div className="absolute -bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-tr from-purple-200/70 to-white/90 backdrop-blur-md border border-white shadow-md pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
