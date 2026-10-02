export default function About() {
  return (
    <section
      className="glass-card rounded-3xl p-6 sm:p-10 border border-white/90 shadow-glass"
      data-purpose="about-philosophy"
      id="about"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Statement & Metrics */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
              About Me
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
              Engineering with Empathy,<br className="hidden sm:inline" /> Building with Analytical Rigor
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-2">
            {/* Metric 1 */}
            <div className="glass-card-subtle rounded-2xl p-4 text-center border border-white hover:bg-white/80 transition-all">
              <div className="w-8 h-8 mx-auto mb-2 rounded-xl bg-blue-50 text-brand-600 flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <p className="text-2xl font-black text-slate-900">7+</p>
              <p className="text-[11px] font-medium text-slate-500">Core Systems</p>
            </div>

            {/* Metric 2 */}
            <div className="glass-card-subtle rounded-2xl p-4 text-center border border-white hover:bg-white/80 transition-all">
              <div className="w-8 h-8 mx-auto mb-2 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M12 14l9-5-9-5-9 5 9 5z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <p className="text-2xl font-black text-slate-900">B.Sc.</p>
              <p className="text-[11px] font-medium text-slate-500">Informatik FH DO</p>
            </div>

            {/* Metric 3 */}
            <div className="glass-card-subtle rounded-2xl p-4 text-center border border-white hover:bg-white/80 transition-all">
              <div className="w-8 h-8 mx-auto mb-2 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <p className="text-2xl font-black text-slate-900">3</p>
              <p className="text-[11px] font-medium text-slate-500">DE (C1) • EN • FR</p>
            </div>
          </div>
        </div>

        {/* Right: Background Context & Route */}
        <div className="lg:col-span-5 space-y-4">
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Graduated in <span className="font-semibold text-slate-800">Praktische Informatik (B.Sc.)</span> from{" "}
            <span className="font-semibold text-slate-800">Fachhochschule Dortmund</span>. My technical journey began with top-tier STEM foundations in Cameroon, followed by successful academic integration in Germany, attaining professional C1 German mastery (DSH-2).
          </p>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            I synthesize solid back-end architecture with human-centered front-end experiences, bringing structured problem-solving to every layer of the modern application stack.
          </p>
          <div className="pt-2 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500">
              <span className="text-brand-600">●</span> Cameroon ➔ Germany ➔ FH Dortmund
            </span>
            <a
              className="inline-flex items-center gap-1 text-xs font-bold text-brand-600 hover:text-brand-700 transition-colors"
              href="#contact"
            >
              <span>Connect with Me</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
