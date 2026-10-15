"use client";

import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export interface ProjectData {
  id: string;
  code: string;
  typeBadge?: string;
  period?: string;
  title: string;
  category: string;
  badge: string;
  filename: string;
  techHighlight: string;
  description: string;
  bullets?: string[];
  stackText: string;
  pills: string[];
  gradient: string;
  linkText?: string;
  longDescription: string;
  architectureDetails: string[];
  githubUrl?: string;
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="glass-card w-full max-w-2xl rounded-3xl p-6 sm:p-8 bg-white/95 border border-white shadow-2xl relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
          aria-label={t.modal.closeBtn}
        >
          ✕
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-2.5 py-0.5 rounded-md border border-brand-200">
              {project.code}
            </span>
            {project.typeBadge && (
              <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                {project.typeBadge}
              </span>
            )}
            {project.period && (
              <span className="text-[10px] font-mono text-slate-400">
                {project.period}
              </span>
            )}
          </div>
          <h3 id="modal-title" className="text-2xl font-extrabold text-slate-900">
            {project.title}
          </h3>
          <p className="text-xs font-mono text-slate-500">{project.stackText}</p>
        </div>

        {/* Tech Terminal Preview */}
        <div
          className={`mt-5 rounded-2xl ${project.gradient} p-5 text-white shadow-inner aspect-[16/8] flex flex-col justify-between overflow-hidden`}
        >
          <div className="flex items-center justify-between text-xs font-mono opacity-80">
            <span>{project.filename}</span>
            <span className="px-2 py-0.5 rounded-full bg-white/20 text-white border border-white/20 text-[10px]">
              {project.badge}
            </span>
          </div>
          <div className="space-y-1">
            <div className="text-base font-semibold">{project.techHighlight}</div>
            <p className="text-xs text-slate-300 font-mono">
              {t.modal.verifiedBadge}
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.pills.map((pill) => (
              <span
                key={pill}
                className="text-[10px] bg-white/10 px-2.5 py-0.5 rounded-full backdrop-blur-sm"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        {/* Bullet Points from Catalog */}
        {project.bullets && project.bullets.length > 0 && (
          <div className="mt-5 p-4 rounded-2xl bg-slate-50/80 border border-slate-200/60 space-y-2">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
              {t.modal.coreCapabilities}
            </h4>
            <ul className="space-y-1.5">
              {project.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                  <span className="text-brand-600 font-bold shrink-0 mt-0.5">●</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Detailed Breakdown */}
        <div className="mt-5 space-y-4">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              {t.modal.projectOverview}
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              {project.longDescription}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              {t.modal.keyDecisions}
            </h4>
            <ul className="space-y-2">
              {project.architectureDetails.map((detail, index) => (
                <li key={index} className="flex items-start gap-2 text-xs text-slate-600">
                  <span className="w-4 h-4 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5">
                    ✓
                  </span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Action Buttons */}
        <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-full text-xs font-medium text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            {t.modal.closeBtn}
          </button>
          <a
            href="#contact"
            onClick={onClose}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-full px-5 py-2.5 transition-all shadow-sm"
          >
            <span>{t.modal.discussBtn}</span>
            <span>↗</span>
          </a>
        </div>
      </div>
    </div>
  );
}
