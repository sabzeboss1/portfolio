"use client";

import { useState } from "react";

type Category = "all" | "backend" | "frontend" | "ai-data" | "devops";

interface TechItem {
  name: string;
  subtitle: string;
  category: "backend" | "frontend" | "ai-data" | "devops";
  iconText: string;
  badgeColor: string;
}

const techItems: TechItem[] = [
  { name: "Java", subtitle: "Core & Enterprise", category: "backend", iconText: "☕", badgeColor: "bg-amber-500/10 text-amber-600" },
  { name: "Spring Boot 3", subtitle: "MVC, REST, JPA", category: "backend", iconText: "🌱", badgeColor: "bg-emerald-500/10 text-emerald-600" },
  { name: "React.js", subtitle: "Hooks, SPA, SSR", category: "frontend", iconText: "⚛️", badgeColor: "bg-cyan-500/10 text-cyan-600" },
  { name: "TypeScript", subtitle: "Type-Safe Web", category: "frontend", iconText: "🔷", badgeColor: "bg-blue-500/10 text-blue-600" },
  { name: "Python", subtitle: "FastAPI & AI Data", category: "ai-data", iconText: "🐍", badgeColor: "bg-indigo-500/10 text-indigo-600" },
  { name: "PostgreSQL", subtitle: "Relational Schema", category: "backend", iconText: "🐘", badgeColor: "bg-blue-600/10 text-blue-700" },
  { name: "Docker", subtitle: "Containerization", category: "devops", iconText: "🐳", badgeColor: "bg-sky-500/10 text-sky-600" },
  { name: "MQTT", subtitle: "Mosquitto Broker", category: "devops", iconText: "📡", badgeColor: "bg-purple-500/10 text-purple-600" },
  { name: "Git & GitHub", subtitle: "CI/CD & GitFlow", category: "devops", iconText: "🐙", badgeColor: "bg-slate-500/10 text-slate-700" },
  { name: "Llama 3.2", subtitle: "LoRA Fine-Tuning", category: "ai-data", iconText: "🦙", badgeColor: "bg-violet-500/10 text-violet-600" },
  { name: "Tailwind CSS", subtitle: "Modern Glass UI", category: "frontend", iconText: "🎨", badgeColor: "bg-teal-500/10 text-teal-600" },
  { name: "FastAPI", subtitle: "High-Speed Async APIs", category: "backend", iconText: "⚡", badgeColor: "bg-emerald-600/10 text-emerald-700" },
];

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredItems =
    activeCategory === "all"
      ? techItems
      : techItems.filter((item) => item.category === activeCategory);

  const categories: { key: Category; label: string }[] = [
    { key: "all", label: "All Technologies" },
    { key: "backend", label: "Backend & Systems" },
    { key: "frontend", label: "Frontend & UI" },
    { key: "ai-data", label: "AI & Data" },
    { key: "devops", label: "DevOps & IoT" },
  ];

  return (
    <section className="space-y-4" data-purpose="tech-stack-row">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Tools &amp; Skills
          </span>
          <h3 className="text-xl font-bold text-slate-800">Technologies I Work With</h3>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100/70 rounded-2xl border border-white/60 text-xs">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setActiveCategory(cat.key)}
              className={`px-3 py-1.5 rounded-xl transition-all font-medium ${
                activeCategory === cat.key
                  ? "bg-white text-slate-900 shadow-sm font-semibold"
                  : "text-slate-600 hover:text-slate-900 hover:bg-white/40"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Frosted Badge Grid */}
      <div className="glass-card rounded-2xl p-4 sm:p-5 border border-white/90">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 text-center">
          {filteredItems.map((tech) => (
            <div
              key={tech.name}
              className="glass-pill rounded-xl p-3 hover:bg-white transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 group cursor-default"
            >
              <div className="text-lg mb-1">{tech.iconText}</div>
              <span className="block text-xs font-bold text-slate-800 group-hover:text-brand-600 transition-colors">
                {tech.name}
              </span>
              <span className="text-[10px] text-slate-400 font-medium line-clamp-1">
                {tech.subtitle}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
