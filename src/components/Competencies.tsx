export default function Competencies() {
  const competencies = [
    {
      id: "backend",
      title: "Backend & Microservices",
      description:
        "Design of high-throughput REST APIs, relational schemas (PostgreSQL), Spring Data JPA, SOLID architecture, and enterprise Java backend services.",
      tag: "Spring Boot • JPA",
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
    {
      id: "ai",
      title: "AI & Intelligent Systems",
      description:
        "Integration of open-source LLMs (Llama 3.2), LoRA parameter-efficient fine-tuning, deterministic scheduling algorithms, and FastAPI endpoints.",
      tag: "FastAPI • LoRA",
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
    {
      id: "web",
      title: "Web & UI Engineering",
      description:
        "Development of modern, modular SPAs with React, TypeScript, TailwindCSS, accessible component hierarchies, and resilient client state handling.",
      tag: "React • TailwindCSS",
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
    {
      id: "telemetry",
      title: "Distributed Telemetry",
      description:
        "Real-time publish-subscribe architectures using Eclipse Mosquitto MQTT, concurrent thread orchestration, Docker containers, and edge events.",
      tag: "MQTT • Docker",
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
  ];

  return (
    <section className="space-y-6" data-purpose="services-competencies" id="competencies">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
            What I Do
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Core Competencies &amp; Domains
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 max-w-md">
          End-to-end full-stack development with deep focus on concurrent services, clean architecture, and modern web interfaces.
        </p>
      </div>

      {/* 4 Grid Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {competencies.map((comp) => (
          <div
            key={comp.id}
            className={`glass-card rounded-2xl p-6 border border-white hover:shadow-glass-hover transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 ${comp.borderHover}`}
          >
            <div>
              <div
                className={`w-12 h-12 rounded-xl ${comp.colorClass} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-sm`}
              >
                {comp.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{comp.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{comp.description}</p>
            </div>
            <div
              className={`pt-5 flex items-center justify-between text-xs font-semibold text-slate-400 ${comp.tagColor} transition-colors`}
            >
              <span>{comp.tag}</span>
              <span className="transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
