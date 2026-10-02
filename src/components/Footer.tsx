export default function Footer() {
  return (
    <footer
      className="border-t border-slate-200/70 bg-white/40 backdrop-blur-md py-8 px-4 sm:px-8 text-xs text-slate-500 relative z-20"
      data-purpose="site-footer"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright and Name */}
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-[10px]">
            PG
          </span>
          <p>© 2026 Phalonne Christelle Guemkam Tuedjo. All rights reserved.</p>
        </div>

        {/* Live Status Indicator */}
        <div className="flex items-center gap-2 text-[11px]">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-medium text-slate-600">All Systems &amp; APIs Operational</span>
        </div>

        {/* Quick Back-to-Top */}
        <div>
          <a
            className="text-slate-600 hover:text-slate-900 font-semibold flex items-center gap-1 transition-colors"
            href="#hero"
          >
            <span>Back to Top</span>
            <span>↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
