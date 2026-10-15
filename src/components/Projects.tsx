"use client";

import { useState, useRef } from "react";
import ProjectModal, { ProjectData } from "./ProjectModal";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

type FilterCategory = "all" | "fullstack-ai" | "systems-oop" | "web";

export default function Projects() {
  const { language } = useLanguage();
  const t = translations[language];
  const allProjects = t.projects.list;

  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const carouselRef = useRef<HTMLDivElement>(null);

  // Selected project object dynamically retrieved based on current language
  const selectedProject: ProjectData | null =
    allProjects.find((p) => p.id === selectedProjectId) || null;

  // Filter projects by category
  const filteredProjects = allProjects.filter((p) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "fullstack-ai") {
      return p.id === "ai-study-planner" || p.id === "dortmund-events";
    }
    if (activeFilter === "systems-oop") {
      return (
        p.id === "bed-preparation" ||
        p.id === "java-apps-suite" ||
        p.id === "interactive-systems-engine"
      );
    }
    if (activeFilter === "web") {
      return p.id === "password-generator" || p.id === "digital-education";
    }
    return true;
  });

  // Track scroll position in mobile carousel
  const handleCarouselScroll = () => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.offsetWidth * 0.88;
    const newIndex = Math.round(scrollLeft / cardWidth);
    if (newIndex >= 0 && newIndex < allProjects.length) {
      setActiveSlideIndex(newIndex);
    }
  };

  const scrollToSlide = (index: number) => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const cardWidth = container.offsetWidth * 0.88;
    container.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
    setActiveSlideIndex(index);
  };

  const nextSlide = () => {
    if (activeSlideIndex < allProjects.length - 1) {
      scrollToSlide(activeSlideIndex + 1);
    } else {
      scrollToSlide(0);
    }
  };

  const prevSlide = () => {
    if (activeSlideIndex > 0) {
      scrollToSlide(activeSlideIndex - 1);
    } else {
      scrollToSlide(allProjects.length - 1);
    }
  };

  return (
    <section className="space-y-6" data-purpose="featured-projects" id="projects">
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
              {t.projects.tag}
            </span>
            <span className="text-xs font-mono font-bold bg-brand-50 text-brand-700 px-2 py-0.5 rounded-full border border-brand-200">
              {allProjects.length} {t.projects.countSuffix}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
            {t.projects.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mt-1">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Desktop Filter Pills */}
        <div className="hidden md:flex items-center gap-1.5 p-1 bg-slate-100/80 rounded-2xl border border-white/60 text-xs">
          <button
            type="button"
            onClick={() => setActiveFilter("all")}
            className={`px-3 py-1.5 rounded-xl font-medium transition-all cursor-pointer ${
              activeFilter === "all"
                ? "bg-white text-slate-900 shadow-sm font-semibold"
                : "text-slate-600 hover:text-slate-900 hover:bg-white/40"
            }`}
          >
            {t.projects.filterAll} ({allProjects.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("fullstack-ai")}
            className={`px-3 py-1.5 rounded-xl font-medium transition-all cursor-pointer ${
              activeFilter === "fullstack-ai"
                ? "bg-white text-slate-900 shadow-sm font-semibold"
                : "text-slate-600 hover:text-slate-900 hover:bg-white/40"
            }`}
          >
            {t.projects.filterFullstackAi}
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("systems-oop")}
            className={`px-3 py-1.5 rounded-xl font-medium transition-all cursor-pointer ${
              activeFilter === "systems-oop"
                ? "bg-white text-slate-900 shadow-sm font-semibold"
                : "text-slate-600 hover:text-slate-900 hover:bg-white/40"
            }`}
          >
            {t.projects.filterSystemsOop}
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("web")}
            className={`px-3 py-1.5 rounded-xl font-medium transition-all cursor-pointer ${
              activeFilter === "web"
                ? "bg-white text-slate-900 shadow-sm font-semibold"
                : "text-slate-600 hover:text-slate-900 hover:bg-white/40"
            }`}
          >
            {t.projects.filterWeb}
          </button>
        </div>
      </div>

      {/* ===================================================================== */}
      {/* MOBILE ONLY: Touch Swipe Carousel with Navigation & Dots            */}
      {/* ===================================================================== */}
      <div className="block md:hidden space-y-4">
        {/* Carousel Header Bar */}
        <div className="flex items-center justify-between px-1">
          <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
            {t.projects.swipeHint} ({activeSlideIndex + 1}/{allProjects.length})
          </span>
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={prevSlide}
              className="w-8 h-8 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center text-slate-700 active:scale-95"
              aria-label="Previous project"
            >
              ←
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="w-8 h-8 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center text-slate-700 active:scale-95"
              aria-label="Next project"
            >
              →
            </button>
          </div>
        </div>

        {/* Scrollable Horizontal Track */}
        <div
          ref={carouselRef}
          onScroll={handleCarouselScroll}
          className="flex overflow-x-auto gap-4 snap-x snap-mandatory scroll-smooth pb-3 px-1 scrollbar-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {allProjects.map((project) => (
            <article
              key={project.id}
              onClick={() => setSelectedProjectId(project.id)}
              className="w-[88vw] sm:w-[75vw] shrink-0 snap-center glass-card rounded-3xl p-5 border border-white shadow-lg flex flex-col justify-between cursor-pointer active:scale-[0.99] transition-transform"
            >
              <div className="space-y-3.5">
                {/* Top Code Badge & Period */}
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="font-bold text-brand-700 bg-brand-50 px-2 py-0.5 rounded border border-brand-200">
                    {project.code}
                  </span>
                  <span className="text-slate-400 font-medium">
                    {project.period || project.typeBadge}
                  </span>
                </div>

                {/* Simulated Screen Preview */}
                <div
                  className={`rounded-2xl ${project.gradient} p-4 text-white shadow-inner aspect-[16/9] flex flex-col justify-between overflow-hidden`}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono opacity-80">
                    <span className="truncate">{project.filename}</span>
                    <span className="px-2 py-0.5 rounded-full bg-white/20 text-white text-[9px] shrink-0">
                      {project.badge}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <div className="w-12 h-1 rounded bg-brand-400" />
                    <div className="text-xs font-semibold tracking-tight leading-tight line-clamp-1">
                      {project.techHighlight}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {project.pills.slice(0, 3).map((pill) => (
                      <span key={pill} className="text-[9px] bg-white/10 px-2 py-0.5 rounded">
                        {pill}
                      </span>
                    ))}
                    {project.pills.length > 3 && (
                      <span className="text-[9px] bg-white/10 px-1.5 py-0.5 rounded">
                        +{project.pills.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Title & Short Description */}
                <div>
                  <h3 className="text-base font-extrabold text-slate-900">{project.title}</h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Highlight Bullets if present */}
                {project.bullets && (
                  <ul className="space-y-1 pt-1 text-[11px] text-slate-600">
                    {project.bullets.slice(0, 2).map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-1.5 line-clamp-1">
                        <span className="text-brand-600 font-bold shrink-0">•</span>
                        <span className="truncate">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-brand-600">
                  {project.linkText || t.projects.viewDetails}
                </span>
                <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center text-xs">
                  ↗
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-1.5 pt-1">
          {allProjects.map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={() => scrollToSlide(dotIdx)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                activeSlideIndex === dotIdx
                  ? "w-6 h-2 bg-slate-900"
                  : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${dotIdx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ===================================================================== */}
      {/* DESKTOP & TABLET VIEW: Responsive Grid of Cards (All 7 Projects)       */}
      {/* ===================================================================== */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            onClick={() => setSelectedProjectId(project.id)}
            className="glass-card rounded-3xl p-6 border border-white hover:shadow-glass-hover transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-1"
          >
            <div className="space-y-4">
              {/* Card Meta Header */}
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-brand-700 bg-brand-50 px-2.5 py-0.5 rounded border border-brand-200">
                  {project.code}
                </span>
                <span className="text-slate-400 font-medium">
                  {project.period || project.typeBadge}
                </span>
              </div>

              {/* Simulated Tech Screen Preview */}
              <div
                className={`rounded-2xl ${project.gradient} p-5 text-white shadow-inner aspect-[16/10] flex flex-col justify-between relative overflow-hidden group-hover:shadow-lg transition-shadow`}
              >
                <div className="flex items-center justify-between text-[11px] font-mono opacity-80">
                  <span className="truncate">{project.filename}</span>
                  <span className="px-2 py-0.5 rounded-full bg-white/20 text-white border border-white/20 text-[10px] shrink-0">
                    {project.badge}
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="w-16 h-1 rounded bg-brand-400 group-hover:w-24 transition-all duration-300" />
                  <div className="text-sm font-semibold tracking-tight">{project.techHighlight}</div>
                  <p className="text-[11px] text-slate-300 font-mono line-clamp-1">
                    {project.stackText}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.pills.slice(0, 3).map((pill) => (
                    <span key={pill} className="text-[10px] bg-white/10 px-2 py-0.5 rounded">
                      {pill}
                    </span>
                  ))}
                  {project.pills.length > 3 && (
                    <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded">
                      +{project.pills.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Title & Description */}
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-600">
                  {project.category}
                </span>
                <h3 className="text-lg font-extrabold text-slate-900 mt-0.5 group-hover:text-brand-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Feature Highlights Bullets from Catalogue */}
              {project.bullets && (
                <ul className="space-y-1.5 pt-2 border-t border-slate-100/80 text-xs text-slate-600">
                  {project.bullets.map((bullet, bIndex) => (
                    <li key={bIndex} className="flex items-start gap-2">
                      <span className="text-brand-600 font-bold shrink-0 mt-0.5">●</span>
                      <span className="line-clamp-2">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Bottom Row */}
            <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-brand-600 group-hover:text-brand-700 transition-colors">
                {project.linkText || t.projects.viewDetails}
              </span>
              <span className="w-7 h-7 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center text-xs group-hover:bg-slate-900 group-hover:text-white transition-colors">
                ↗
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Project Modal Deep Dive */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProjectId(null)} />
    </section>
  );
}
