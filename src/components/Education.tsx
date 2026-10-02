export default function Education() {
  const credentials = [
    {
      category: "Higher Education",
      location: "Dortmund, Germany",
      badgeColor: "bg-blue-100 text-blue-800",
      title: "B.Sc. Praktische Informatik",
      institution: "Fachhochschule Dortmund",
      institutionColor: "text-brand-700",
      description:
        "Core emphasis on software architecture, concurrent systems, algorithms & data structures, relational database management, and intelligent software agents.",
    },
    {
      category: "Language Proficiency",
      location: "Accredited C1",
      badgeColor: "bg-emerald-100 text-emerald-800",
      title: "DSH-2 (German C1 Equivalent)",
      institution: "Deutsche Sprachprüfung für den Hochschulzugang",
      institutionColor: "text-emerald-700",
      description:
        "Fluent technical and professional communication in German. Trilingual proficiency: German (C1), English (Fluent), and French (Native).",
    },
    {
      category: "STEM Foundations",
      location: "Cameroon",
      badgeColor: "bg-purple-100 text-purple-800",
      title: "Baccalauréat / Abitur (STEM)",
      institution: "Gymnasium Bafang & Goethe-Institut",
      institutionColor: "text-purple-700",
      description:
        "Rigorous mathematical and natural sciences track. Goethe-Institut German certification prior to relocating to Germany for university studies.",
    },
  ];

  return (
    <section className="space-y-6" data-purpose="education-credentials" id="education">
      <div>
        <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
          Background
        </span>
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Academic &amp; Language Credentials
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {credentials.map((cred, idx) => (
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
