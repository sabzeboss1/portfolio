"use client";

import { useState, useRef, useEffect } from "react";
import ProjectModal, { ProjectData } from "./ProjectModal";

const allProjects: ProjectData[] = [
  {
    id: "ai-study-planner",
    code: "FEATURED // 01",
    typeBadge: "FULL-STACK & AI",
    period: "Bachelor Thesis",
    title: "AI Study Planner",
    category: "Full-Stack & Applied AI",
    badge: "Llama-3.2",
    filename: "AI_STUDY_PLANNER.py",
    techHighlight: "Bachelor Thesis Focus System",
    description:
      "Intelligent web application generating personalized weekly university schedules via a hybrid deterministic constraint engine + fine-tuned Llama 3.2 LLM architecture.",
    bullets: [
      "Automated planning with Llama 3.2 (LoRA fine-tuning) & Ollama fallback",
      "Institutional Super Administration with RBAC & bulk CSV/Excel import",
      "Dynamic schedule versioning, conflict resolution & vector PDF export",
    ],
    stackText: "React • FastAPI • PostgreSQL 15+ • Llama 3.2",
    pills: ["React", "FastAPI (Python)", "PostgreSQL 15+", "Llama 3.2 (LoRA)", "Docker", "Nginx"],
    gradient: "bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900",
    linkText: "Explore Architecture & Specs →",
    longDescription:
      "Developed as the central engineering artifact for the B.Sc. thesis at FH Dortmund. The system takes complex academic module catalogues, prerequisites, and student time constraints, applying a hybrid pipeline of fine-tuned Llama 3.2 (via LoRA parameter efficiency) and a deterministic topological constraint solver to prevent curriculum bottlenecks.",
    architectureDetails: [
      "LoRA adapter integration for tailored extraction of academic degree regulations and syllabi.",
      "Deterministic graph-based scheduling algorithm eliminating AI hallucinations for prerequisites.",
      "High-concurrency FastAPI microservice communicating with React SPA interface.",
      "Containerized orchestration via Docker with PostgreSQL transactional storage.",
    ],
  },
  {
    id: "dortmund-events",
    code: "PROJECT // 02",
    typeBadge: "FULL-STACK",
    period: "Real-Time Telemetry",
    title: "Dortmund Event Platform",
    category: "Enterprise Backend & IoT",
    badge: "MQTT Telemetry",
    filename: "DORTMUND_EVENTS.java",
    techHighlight: "Real-Time Event Architecture",
    description:
      "Comprehensive event management system with Spring Boot backend, PostgreSQL persistence, stateless JWT security, and MQTT-driven telemetry streaming.",
    bullets: [
      "Real-time sensor telemetry ingestion via Eclipse Mosquitto broker",
      "Spatial venue seating occupancy maps with live WebSocket push",
      "Stateless JWT authentication and role-based access control",
    ],
    stackText: "Java • Spring Boot • React • PostgreSQL • MQTT",
    pills: ["Java", "Spring Boot", "React", "PostgreSQL", "MQTT"],
    gradient: "bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900",
    linkText: "View System Blueprint →",
    longDescription:
      "A scalable IoT telemetry system designed for metropolitan venue management in Dortmund. Sensors publish crowd density and seat occupancy over Eclipse Mosquitto MQTT broker channels, which are ingested by a multi-threaded Spring Boot ingestion daemon and persisted into PostgreSQL with spatial indexing.",
    architectureDetails: [
      "Spring Boot 3 multi-threaded asynchronous subscriber consuming MQTT telemetry messages.",
      "PostgreSQL schema designed with indexed spatial queries for venue zone occupancy.",
      "Real-time WebSocket bridge pushing state updates to the frontend dashboard without polling.",
      "Docker compose topology ensuring fault-tolerant broker recovery.",
    ],
  },
  {
    id: "bed-preparation",
    code: "PROJECT // 03",
    typeBadge: "SYSTEMS",
    period: "Oct 2023 – Jan 2024",
    title: "Bed Preparation System",
    category: "Software Architecture & Modeling",
    badge: "Domain Model",
    filename: "BED_MANAGEMENT.uml",
    techHighlight: "Clinical Process Automation",
    description:
      "Software engineering group project at FH Dortmund. Concept, domain modeling, and user-centric GUI prototyping for healthcare bed lifecycle management using UML diagrams.",
    bullets: [
      "Comprehensive UML modeling: Class diagrams, state machines, and activity workflows",
      "Strict hygiene lifecycle state machine (Contaminated → Disinfecting → Prepared → Occupied)",
      "Java domain model with clean separation of concerns and validation logic",
    ],
    stackText: "UML Modeling • GUI Design • Software Engineering",
    pills: ["UML Modeling", "GUI Design", "Software Engineering", "Java"],
    gradient: "bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950",
    linkText: "View Concept Scope →",
    longDescription:
      "Engineered clinical workflow automation to solve hospital capacity bottlenecks during bed turnaround. The project formalizes hospital hygiene cycles, ward transfers, and patient discharge states using strict UML state machine specifications, mapped to an object-oriented Java domain model.",
    architectureDetails: [
      "State Pattern implementation handling sanitary transitions.",
      "Rigorous UML behavioral models ensuring zero race-conditions in bed assignment queues.",
      "Extensive unit testing validating state transition invariants and regulatory compliance.",
      "Clean Architecture decoupling core domain logic from persistence and interface drivers.",
    ],
  },
  {
    id: "password-generator",
    code: "PROJECT // 04",
    typeBadge: "SECURITY",
    period: "Jul 2023 – Sep 2023",
    title: "Secure Password Generator",
    category: "Web Utilities & Security",
    badge: "Web Crypto",
    filename: "PASSWORD_GEN.js",
    techHighlight: "Cryptographic Entropy Engine",
    description:
      "Interactive client-side web utility for customizable, cryptographically strong password creation with entropy indicators and copy-to-clipboard functionality.",
    bullets: [
      "Cryptographically secure pseudo-random number generator (Crypto.getRandomValues)",
      "Real-time password entropy calculation and brute-force crack time estimates",
      "Zero server telemetry: 100% client-side memory safety and instant clipboard copy",
    ],
    stackText: "HTML5 • CSS3 • JavaScript",
    pills: ["HTML5", "CSS3", "JavaScript"],
    gradient: "bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-900",
    linkText: "View Source / Specs →",
    longDescription:
      "A client-side cryptographic utility designed for security-conscious users. Utilizing the browser Web Cryptography API, it guarantees entropy without relying on standard Math.random pseudo-randomness. Includes custom character set options and visual strength heatmaps.",
    architectureDetails: [
      "Native Web Crypto API (crypto.getRandomValues) preventing predictable seed patterns.",
      "Entropy bit scoring computed via Shannon entropy formulas.",
      "Zero network payloads ensuring complete credential privacy.",
    ],
  },
  {
    id: "digital-education",
    code: "PROJECT // 05",
    typeBadge: "FRONTEND",
    period: "Sep 2022 – Jan 2023",
    title: "Digital Education Web App",
    category: "Frontend & E-Learning",
    badge: "E-Learning",
    filename: "EDUCATION_PORTAL.html",
    techHighlight: "Coursework Delivery Platform",
    description:
      "E-learning portal built for structured coursework delivery, interactive module exercises, progress state tracking, and responsive accessibility across viewports.",
    bullets: [
      "Modular coursework navigation with interactive practice quiz logic",
      "LocalStorage-persisted learning progress and completion milestones",
      "Semantic WCAG 2.1 accessible markup with responsive fluid design",
    ],
    stackText: "HTML5 • CSS3 • JavaScript",
    pills: ["HTML5", "CSS3", "JavaScript"],
    gradient: "bg-gradient-to-br from-violet-950 via-slate-900 to-slate-900",
    linkText: "View Application Flow →",
    longDescription:
      "An educational portal delivering structured modules and step-by-step programming tutorials. Features accessible components, keyboard navigation, and responsive layouts tailored for mobile, tablet, and desktop students.",
    architectureDetails: [
      "Semantic HTML5 landmarks adhering to WCAG 2.1 accessibility guidelines.",
      "Client-side quiz evaluation engine with instant feedback loops.",
      "Zero-dependency vanilla architecture optimizing load time to sub-second.",
    ],
  },
  {
    id: "java-apps-suite",
    code: "PROJECT // 06",
    typeBadge: "DESKTOP OOP",
    period: "Mar 2022 – Jul 2022",
    title: "Java Applications Suite",
    category: "Desktop Software & Algorithms",
    badge: "Minimax & JavaFX",
    filename: "JAVA_SUITE.java",
    techHighlight: "Game Theory & Media GUI",
    description:
      "Console Tic-Tac-Toe logic engine with minimax evaluation alongside a full Media Management Prototype featuring a rich JavaFX graphical interface.",
    bullets: [
      "Unbeatable AI opponent implementation using minimax adversarial search",
      "JavaFX desktop GUI for cataloguing, sorting, and filtering multimedia entries",
      "Object-oriented file serialization and exception handling hierarchy",
    ],
    stackText: "Java • JavaFX • OOP",
    pills: ["Java", "JavaFX", "OOP"],
    gradient: "bg-gradient-to-br from-amber-950 via-slate-900 to-slate-900",
    linkText: "View Architecture →",
    longDescription:
      "A dual-purpose software engineering suite comprising an algorithmic game theory solver and a desktop GUI application. Built to demonstrate rigorous object-oriented design patterns, recursion, and graphical event bindings in Java.",
    architectureDetails: [
      "Recursive minimax algorithm with alpha-beta pruning concepts.",
      "JavaFX Model-View-Controller (MVC) decoupling UI views from storage layers.",
      "Custom binary serialization for persistent multimedia library states.",
    ],
  },
  {
    id: "interactive-systems-engine",
    code: "PROJECT // 07",
    typeBadge: "SYSTEMS OOP",
    period: "Academic Study",
    title: "Interactive Systems Engine",
    category: "Core Systems & Concurrency",
    badge: "Concurrency",
    filename: "CONCURRENT_ENGINE.java",
    techHighlight: "Multithreaded Java Architecture",
    description:
      "Rigorous object-oriented programming study exploring abstract class hierarchies, polymorphism, thread synchronization, concurrency, and event-driven JavaFX components.",
    bullets: [
      "Multi-threaded worker pool with synchronized resource sharing",
      "Deep inheritance hierarchies and interface polymorphism",
      "Event-driven UI updates with JavaFX concurrency task bindings",
    ],
    stackText: "Java • Multithreading • Polymorphism",
    pills: ["Java", "Multithreading", "Polymorphism"],
    gradient: "bg-gradient-to-br from-cyan-950 via-slate-900 to-slate-900",
    linkText: "View Code Breakdown →",
    longDescription:
      "An advanced investigation into Java concurrency and polymorphic design patterns. Explores thread synchronization primitives, locks, condition variables, and real-time visualization of concurrent tasks in a JavaFX interface.",
    architectureDetails: [
      "Thread-safe producer-consumer queue design avoiding deadlock states.",
      "Extensive polymorphic interface hierarchy showcasing Open-Closed Principle.",
      "JavaFX Task and Service worker threads preventing UI thread freezing.",
    ],
  },
];

type FilterCategory = "all" | "fullstack-ai" | "systems-oop" | "web";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const carouselRef = useRef<HTMLDivElement>(null);

  // Filter projects for desktop view
  const filteredProjects = allProjects.filter((p) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "fullstack-ai")
      return p.category.includes("AI") || p.category.includes("Backend");
    if (activeFilter === "systems-oop")
      return p.category.includes("Systems") || p.category.includes("Modeling") || p.category.includes("Algorithms");
    if (activeFilter === "web")
      return p.category.includes("Security") || p.category.includes("Frontend");
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
              Portfolio Directory
            </span>
            <span className="text-xs font-mono font-bold bg-brand-50 text-brand-700 px-2 py-0.5 rounded-full border border-brand-200">
              {allProjects.length} Projects
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
            Selected Projects
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mt-1">
            A catalogue of software engineering projects, desktop applications, web interfaces, and academic implementations.
          </p>
        </div>

        {/* Desktop Filter Pills */}
        <div className="hidden md:flex items-center gap-1.5 p-1 bg-slate-100/80 rounded-2xl border border-white/60 text-xs">
          <button
            type="button"
            onClick={() => setActiveFilter("all")}
            className={`px-3 py-1.5 rounded-xl font-medium transition-all ${
              activeFilter === "all"
                ? "bg-white text-slate-900 shadow-sm font-semibold"
                : "text-slate-600 hover:text-slate-900 hover:bg-white/40"
            }`}
          >
            All ({allProjects.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("fullstack-ai")}
            className={`px-3 py-1.5 rounded-xl font-medium transition-all ${
              activeFilter === "fullstack-ai"
                ? "bg-white text-slate-900 shadow-sm font-semibold"
                : "text-slate-600 hover:text-slate-900 hover:bg-white/40"
            }`}
          >
            Full-Stack &amp; AI
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("systems-oop")}
            className={`px-3 py-1.5 rounded-xl font-medium transition-all ${
              activeFilter === "systems-oop"
                ? "bg-white text-slate-900 shadow-sm font-semibold"
                : "text-slate-600 hover:text-slate-900 hover:bg-white/40"
            }`}
          >
            Systems &amp; OOP
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("web")}
            className={`px-3 py-1.5 rounded-xl font-medium transition-all ${
              activeFilter === "web"
                ? "bg-white text-slate-900 shadow-sm font-semibold"
                : "text-slate-600 hover:text-slate-900 hover:bg-white/40"
            }`}
          >
            Web &amp; Utilities
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
            Swipe or use arrows ({activeSlideIndex + 1}/{allProjects.length})
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
          {allProjects.map((project, idx) => (
            <article
              key={project.id}
              onClick={() => setSelectedProject(project)}
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
                  {project.linkText || "View Details →"}
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
              className={`transition-all duration-300 rounded-full ${
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
            onClick={() => setSelectedProject(project)}
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
                {project.linkText || "Explore Specs →"}
              </span>
              <span className="w-7 h-7 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center text-xs group-hover:bg-slate-900 group-hover:text-white transition-colors">
                ↗
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Project Modal Deep Dive */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
