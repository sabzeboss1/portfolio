export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Requirements & UML",
      arrow: "→",
      description:
        "User stories, domain modeling, state diagrams, and entity-relationship specifications.",
    },
    {
      num: "02",
      title: "Architecture",
      arrow: "→",
      description:
        "Schema normalization (PostgreSQL), API contracts, data flow boundaries, and security design.",
    },
    {
      num: "03",
      title: "Development",
      arrow: "→",
      description:
        "Strict OOP practices, Spring Boot controllers, FastAPI routing, and accessible React interfaces.",
    },
    {
      num: "04",
      title: "Integration",
      arrow: "→",
      description:
        "Mosquitto MQTT event brokers, AI model inference wrappers, and Docker multi-container setups.",
    },
    {
      num: "05",
      title: "Test & Deploy",
      arrow: "✓",
      isLast: true,
      description:
        "Unit test coverage, edge constraint verification, automated build pipelines, and production prep.",
    },
  ];

  return (
    <section className="space-y-6" data-purpose="engineering-process" id="process">
      <div>
        <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
          My Methodology
        </span>
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Engineering Lifecycle I Follow
        </h2>
      </div>

      {/* 5 Step Cards Flow */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
        {steps.map((step) => (
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
                  step.isLast ? "text-emerald-500" : "text-slate-300 group-hover:text-brand-500 transition-colors"
                }`}
              >
                {step.arrow}
              </span>
            </div>
            <h3 className="text-sm font-bold text-slate-900">{step.title}</h3>
            <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
