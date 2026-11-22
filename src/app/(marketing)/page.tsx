import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-white">

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-[#0D1117] overflow-hidden min-h-screen flex flex-col">
        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Glow blobs */}
        <div className="absolute top-[-180px] left-[-80px] w-[600px] h-[600px] rounded-full" style={{ background: "radial-gradient(circle, rgba(53,106,230,0.18) 0%, transparent 70%)" }} />
        <div className="absolute top-[200px] right-[-120px] w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle, rgba(98,86,199,0.14) 0%, transparent 70%)" }} />

        <div className="relative flex-1 flex flex-col max-w-7xl mx-auto px-5 sm:px-8 w-full pt-32 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center flex-1">

            {/* Left: Text */}
            <div>
              <div className="inline-flex items-center gap-2 border border-white/10 rounded-full px-3.5 py-1.5 mb-8 bg-white/5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#16A6A1] animate-pulse" />
                <span className="text-[12.5px] font-medium text-white/60 tracking-wide uppercase">Business Intelligence Platform</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-[68px] font-black text-white mb-6 leading-[1.03]" style={{ fontFamily: "Manrope, sans-serif", letterSpacing: "-0.03em" }}>
                See beyond
                <br />
                <span style={{ color: "#356AE6" }}>the numbers.</span>
              </h1>

              <p className="text-[17px] text-white/55 leading-[1.75] mb-10 max-w-[480px]">
                Insights AI transforms complex business data into clear insights, predictive forecasts, and decisions you can act on. No data science degree required.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-14">
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#356AE6] text-white text-[15px] font-semibold rounded-xl hover:bg-[#2458D0] transition-colors"
                >
                  Start for free
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
                <Link
                  href="/platform"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-white/10 bg-white/5 text-white text-[15px] font-semibold rounded-xl hover:bg-white/10 transition-colors"
                >
                  Explore platform
                </Link>
              </div>

              {/* Stats row */}
              <div className="flex flex-wrap gap-8">
                {[
                  { number: "10x", label: "Faster than spreadsheets" },
                  { number: "94%", label: "Forecast accuracy" },
                  { number: "< 2min", label: "Time to first insight" },
                ].map(({ number, label }) => (
                  <div key={label}>
                    <div className="text-2xl font-black text-white" style={{ fontFamily: "Manrope, sans-serif" }}>{number}</div>
                    <div className="text-xs text-white/40 mt-0.5 font-medium">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Dashboard mockup */}
            <div className="relative lg:flex lg:items-center lg:justify-end">
              <DashboardMockup />
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ─── TRUSTED BY ───────────────────────────────────────── */}
      <section className="py-14 border-b border-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <p className="text-center text-xs font-semibold text-[#9CA3AF] uppercase tracking-widest mb-10">
            Trusted by data-driven teams
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 opacity-40">
            {["Meridian Capital", "NovaTech", "Blueshore Group", "Oryx Partners", "Vantage Labs", "Clearfield Inc"].map((name) => (
              <span key={name} className="text-[13px] font-bold text-[#374151] tracking-tight">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROBLEM ─────────────────────────────────────────── */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold text-[#356AE6] uppercase tracking-widest mb-5">The problem</p>
              <h2 className="text-4xl sm:text-5xl font-black text-[#0D1117] mb-6" style={{ fontFamily: "Manrope, sans-serif", letterSpacing: "-0.03em" }}>
                Your business has
                <br />
                the data.
                <br />
                <span className="text-[#9CA3AF]">Do you have the insights?</span>
              </h2>
              <p className="text-[16px] text-[#6B7280] leading-relaxed max-w-md">
                Organizations collect enormous amounts of data every day. Most of it sits unused, buried in spreadsheets and disconnected systems while opportunities pass unnoticed.
              </p>
            </div>

            <div className="space-y-3">
              {[
                { n: "01", title: "Data without direction", text: "Businesses collect data but struggle to understand what it means for their operations or strategy." },
                { n: "02", title: "Reports take too long", text: "Analysis that should take minutes takes days. Manual work slows down every decision." },
                { n: "03", title: "Hidden patterns and trends", text: "Important opportunities and warning signals remain invisible inside disconnected, unanalyzed data." },
                { n: "04", title: "Decisions without forecasting", text: "Without reliable forecasting, companies react rather than prepare for what comes next." },
                { n: "05", title: "Technical barriers", text: "Meaningful analysis requires specialized skills that most business teams simply do not have." },
              ].map(({ n, title, text }) => (
                <div key={n} className="flex gap-4 p-4 rounded-xl hover:bg-[#F9FAFB] transition-colors group">
                  <span className="text-xs font-bold text-[#E4E7EC] group-hover:text-[#356AE6] transition-colors mt-0.5 w-6 flex-shrink-0" style={{ fontFamily: "Manrope, sans-serif" }}>{n}</span>
                  <div>
                    <p className="text-[14px] font-semibold text-[#111827] mb-0.5">{title}</p>
                    <p className="text-[13.5px] text-[#6B7280] leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SOLUTION / FEATURES ─────────────────────────────── */}
      <section className="py-28 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-2xl mb-16">
            <p className="text-xs font-bold text-[#356AE6] uppercase tracking-widest mb-5">The platform</p>
            <h2 className="text-4xl sm:text-5xl font-black text-[#0D1117] mb-5" style={{ fontFamily: "Manrope, sans-serif", letterSpacing: "-0.03em" }}>
              One intelligent workspace.
              <br />
              Better decisions.
            </h2>
            <p className="text-[16px] text-[#6B7280] leading-relaxed">
              Everything your team needs to go from raw data to clear decisions, in a single connected platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                accent: "#356AE6",
                icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#356AE6" strokeWidth="1.5"/><path d="M6 10h8M10 6v8" stroke="#356AE6" strokeWidth="1.5" strokeLinecap="round"/></svg>,
                title: "AI Data Analyst",
                text: "Ask questions about your data in plain language. Get analysis, calculations, and charts instantly — no SQL required.",
              },
              {
                accent: "#6256C7",
                icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 16l3.5-7 3.5 4 3-6 3 5" stroke="#6256C7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                title: "Predictive Analytics",
                text: "Use historical data to forecast revenue, demand, churn, and performance. Understand what comes next before it arrives.",
              },
              {
                accent: "#16A6A1",
                icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="4" width="16" height="12" rx="2" stroke="#16A6A1" strokeWidth="1.5"/><path d="M6 9h8M6 13h5" stroke="#16A6A1" strokeWidth="1.5" strokeLinecap="round"/></svg>,
                title: "AI Report Generator",
                text: "Generate professional reports from actual analysis. Executive summaries, findings, and recommendations — ready to share.",
              },
              {
                accent: "#269B70",
                icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="2" width="7" height="7" rx="1.5" stroke="#269B70" strokeWidth="1.5"/><rect x="11" y="2" width="7" height="7" rx="1.5" stroke="#269B70" strokeWidth="1.5"/><rect x="2" y="11" width="7" height="7" rx="1.5" stroke="#269B70" strokeWidth="1.5"/><rect x="11" y="11" width="7" height="7" rx="1.5" stroke="#269B70" strokeWidth="1.5" strokeOpacity="0.4"/></svg>,
                title: "Interactive Dashboards",
                text: "Build custom dashboards with drag-and-drop components. Apply filters, adjust date ranges, and share with your team.",
              },
              {
                accent: "#E6A23C",
                icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2v3M10 15v3M2 10h3M15 10h3M4.22 4.22l2.12 2.12M13.66 13.66l2.12 2.12M4.22 15.78l2.12-2.12M13.66 6.34l2.12-2.12" stroke="#E6A23C" strokeWidth="1.5" strokeLinecap="round"/></svg>,
                title: "Anomaly Detection",
                text: "Automatically identify unusual changes in revenue, expenses, and customer behavior. Get alerted before issues escalate.",
              },
              {
                accent: "#356AE6",
                icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 3l1.5 4.5H16l-3.5 2.5L14 14l-4-2.5L6 14l1.5-4.5L4 7.5h4.5L10 3z" stroke="#356AE6" strokeWidth="1.5" strokeLinejoin="round"/></svg>,
                title: "AI Recommendations",
                text: "Receive evidence-based recommendations linked to your data. Understand what actions to consider and why they matter.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 border border-[#E9EAEC] hover:border-[#D1D5DB] hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)] transition-all duration-200"
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: item.accent + "12" }}>
                  {item.icon}
                </div>
                <h3 className="text-[15px] font-bold text-[#0D1117] mb-2.5" style={{ fontFamily: "Manrope, sans-serif" }}>{item.title}</h3>
                <p className="text-[13.5px] text-[#6B7280] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURE SPOTLIGHT: AI Analyst ───────────────────── */}
      <section className="py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold text-[#356AE6] uppercase tracking-widest mb-5">AI Data Analyst</p>
              <h2 className="text-4xl sm:text-[46px] font-black text-[#0D1117] mb-6 leading-tight" style={{ fontFamily: "Manrope, sans-serif", letterSpacing: "-0.03em" }}>
                Ask questions.
                <br />
                Get answers.
              </h2>
              <p className="text-[16px] text-[#6B7280] leading-relaxed mb-8">
                Type a question about your data the same way you would ask a colleague. Insights AI understands the context, runs the analysis, and shows you charts, calculations, and recommendations in seconds.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "What were our highest performing products last month?",
                  "Which marketing channel generated the most revenue?",
                  "What are our projected sales for the next quarter?",
                  "Which customers have the highest lifetime value?",
                ].map((q) => (
                  <div key={q} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#356AE6] mt-2 flex-shrink-0" />
                    <p className="text-[14px] text-[#374151]">{q}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/features"
                className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#356AE6] hover:gap-3 transition-all"
              >
                See all features
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </div>

            <AnalystMockup />
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─────────────────────────────────────── */}
      <section className="py-28 bg-[#0D1117] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold text-[#356AE6] uppercase tracking-widest mb-5">How it works</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white" style={{ fontFamily: "Manrope, sans-serif", letterSpacing: "-0.03em" }}>
              From raw data to decisions
              <br />
              in three steps
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                n: "1",
                color: "#356AE6",
                title: "Connect your data",
                text: "Upload CSV files, Excel spreadsheets, or connect to your existing databases and cloud services. Insights AI validates and profiles your data automatically.",
              },
              {
                n: "2",
                color: "#6256C7",
                title: "Let AI analyze it",
                text: "The platform examines your data for trends, anomalies, correlations, and opportunities. Ask questions, run forecasts, and explore findings interactively.",
              },
              {
                n: "3",
                color: "#16A6A1",
                title: "Act on the insights",
                text: "Turn findings into dashboards, reports, and recommendations. Share with your team and make decisions grounded in real evidence.",
              },
            ].map(({ n, color, title, text }) => (
              <div key={n} className="relative p-7 rounded-2xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.05] transition-colors">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-6 text-sm font-black"
                  style={{ backgroundColor: color + "20", color }}
                >
                  {n}
                </div>
                <h3 className="text-lg font-bold text-white mb-3" style={{ fontFamily: "Manrope, sans-serif" }}>{title}</h3>
                <p className="text-[14px] text-white/50 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── USE CASES ───────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-xl mb-16">
            <p className="text-xs font-bold text-[#356AE6] uppercase tracking-widest mb-5">Use cases</p>
            <h2 className="text-4xl sm:text-5xl font-black text-[#0D1117]" style={{ fontFamily: "Manrope, sans-serif", letterSpacing: "-0.03em" }}>
              Built for every part
              <br />
              of your business
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                label: "Finance",
                color: "#172B4D",
                bg: "#172B4D",
                items: ["Revenue analysis", "Expense tracking", "Cash flow forecasting", "Financial trend reporting"],
              },
              {
                label: "Sales",
                color: "#356AE6",
                bg: "#356AE6",
                items: ["Pipeline forecasting", "Conversion analysis", "Territory performance", "Customer value scoring"],
              },
              {
                label: "Marketing",
                color: "#6256C7",
                bg: "#6256C7",
                items: ["Campaign ROI analysis", "Channel attribution", "Customer acquisition cost", "Funnel performance"],
              },
              {
                label: "Operations",
                color: "#16A6A1",
                bg: "#16A6A1",
                items: ["Demand forecasting", "Resource utilization", "Inventory optimization", "Process efficiency"],
              },
              {
                label: "Customer Experience",
                color: "#269B70",
                bg: "#269B70",
                items: ["Churn prediction", "Satisfaction analysis", "Behavior segmentation", "Retention modeling"],
              },
              {
                label: "Executive",
                color: "#E6A23C",
                bg: "#E6A23C",
                items: ["Cross-org performance", "Strategic KPI tracking", "Board reporting", "AI governance"],
              },
            ].map(({ label, bg, items }) => (
              <div key={label} className="rounded-2xl border border-[#E9EAEC] p-6 hover:border-[#D1D5DB] hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-all duration-200 group">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-7 h-7 rounded-lg" style={{ backgroundColor: bg }} />
                  <h3 className="text-[15px] font-bold text-[#0D1117]" style={{ fontFamily: "Manrope, sans-serif" }}>{label}</h3>
                </div>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-[13.5px] text-[#6B7280]">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#D1D5DB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-[#356AE6] transition-colors"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ────────────────────────────────────────── */}
      <section className="py-28 bg-[#172B4D] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-10" style={{ background: "radial-gradient(circle, #356AE6 0%, transparent 70%)" }} />
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="text-5xl sm:text-[64px] font-black text-white mb-6" style={{ fontFamily: "Manrope, sans-serif", letterSpacing: "-0.03em", lineHeight: 1.03 }}>
            Make every business
            <br />
            decision more informed.
          </h2>
          <p className="text-[17px] text-white/55 leading-relaxed mb-10 max-w-xl mx-auto">
            Bring your data into focus and uncover the insights that move your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#172B4D] text-[15px] font-bold rounded-xl hover:bg-[#F5F7FB] transition-colors"
            >
              Start analyzing your data
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/15 text-white text-[15px] font-semibold rounded-xl hover:bg-white/5 transition-colors"
            >
              View pricing
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

/* ─── Dashboard mockup component ──────────────────────────────── */
function DashboardMockup() {
  return (
    <div className="w-full max-w-[620px] ml-auto">
      <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_32px_80px_rgba(0,0,0,0.5)]" style={{ background: "#161B27" }}>
        {/* Title bar */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.07]" style={{ background: "#0F1420" }}>
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-white/[0.06] rounded-md px-4 py-1 text-[11px] text-white/30">app.insights-ai.com/dashboard</div>
          </div>
        </div>

        {/* App chrome */}
        <div className="flex" style={{ height: 420 }}>
          {/* Sidebar */}
          <div className="w-12 border-r border-white/[0.06] flex flex-col items-center pt-3 gap-2.5 flex-shrink-0" style={{ background: "#0D1117" }}>
            <div className="w-7 h-7 rounded-lg bg-[#356AE6] flex items-center justify-center mb-1">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M1 10L4.5 4.5L7 7.5L9.5 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="9.5" cy="2.5" r="1.5" fill="#16A6A1"/></svg>
            </div>
            {[
              <svg key="a" width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="1" width="5" height="5" rx="1" fill="white" fillOpacity="0.3"/><rect x="8" y="1" width="5" height="5" rx="1" fill="white" fillOpacity="0.15"/><rect x="1" y="8" width="5" height="5" rx="1" fill="white" fillOpacity="0.15"/><rect x="8" y="8" width="5" height="5" rx="1" fill="white" fillOpacity="0.08"/></svg>,
              <svg key="b" width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5.5" stroke="white" strokeOpacity="0.25" strokeWidth="1.2"/><path d="M4 7h6M7 4v6" stroke="white" strokeOpacity="0.25" strokeWidth="1.2" strokeLinecap="round"/></svg>,
              <svg key="c" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 11l2.5-5 2.5 3 2-4.5 2.5 3.5" stroke="white" strokeOpacity="0.25" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
              <svg key="d" width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="3" width="12" height="8" rx="1.5" stroke="white" strokeOpacity="0.25" strokeWidth="1.2"/><path d="M4 6.5h6M4 9h3.5" stroke="white" strokeOpacity="0.25" strokeWidth="1.2" strokeLinecap="round"/></svg>,
            ].map((icon, i) => (
              <div key={i} className="w-7 h-7 rounded-lg flex items-center justify-center hover:bg-white/5">{icon}</div>
            ))}
          </div>

          {/* Main content */}
          <div className="flex-1 p-4 overflow-hidden">
            {/* Header row */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-white text-[13px] font-semibold mb-0.5">Business Overview</div>
                <div className="text-white/35 text-[11px]">November 2026 · Demo workspace</div>
              </div>
              <div className="flex gap-2">
                <div className="bg-white/[0.07] rounded-lg px-2.5 py-1 text-white/50 text-[11px]">30 days</div>
                <div className="bg-[#356AE6] rounded-lg px-2.5 py-1 text-white text-[11px] font-semibold">Export</div>
              </div>
            </div>

            {/* KPI cards */}
            <div className="grid grid-cols-4 gap-2 mb-4">
              {[
                { label: "Revenue", value: "$2.4M", change: "+18%", color: "#356AE6" },
                { label: "Customers", value: "14,820", change: "+6.1%", color: "#16A6A1" },
                { label: "Avg Order", value: "$162", change: "+4.5%", color: "#6256C7" },
                { label: "Churn Rate", value: "2.1%", change: "-0.4%", color: "#269B70" },
              ].map((kpi) => (
                <div key={kpi.label} className="rounded-xl p-2.5 border border-white/[0.07]" style={{ background: "rgba(255,255,255,0.03)" }}>
                  <div className="text-white/40 text-[9.5px] mb-1">{kpi.label}</div>
                  <div className="text-white text-[13px] font-bold">{kpi.value}</div>
                  <div className="text-emerald-400 text-[9px] font-medium mt-0.5">{kpi.change}</div>
                  <div className="mt-2 h-0.5 rounded-full" style={{ background: "rgba(255,255,255,0.05)" }}>
                    <div className="h-full rounded-full" style={{ width: "60%", background: kpi.color }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Chart + AI panel */}
            <div className="grid grid-cols-5 gap-3">
              {/* Chart */}
              <div className="col-span-3 rounded-xl p-3 border border-white/[0.07]" style={{ background: "rgba(255,255,255,0.025)" }}>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-white text-[11px] font-semibold">Revenue trend</span>
                  <div className="flex gap-2">
                    <span className="text-white/35 text-[9.5px] flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full inline-block bg-[#356AE6]"/>Actual</span>
                    <span className="text-white/35 text-[9.5px] flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full inline-block bg-[#6256C7]"/>Forecast</span>
                  </div>
                </div>
                <svg viewBox="0 0 220 80" className="w-full" height="80">
                  <defs>
                    <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#356AE6" stopOpacity="0.25"/>
                      <stop offset="100%" stopColor="#356AE6" stopOpacity="0"/>
                    </linearGradient>
                    <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#6256C7" stopOpacity="0.15"/>
                      <stop offset="100%" stopColor="#6256C7" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                  {[16,32,48,64].map(y => <line key={y} x1="0" y1={y} x2="220" y2={y} stroke="white" strokeOpacity="0.04" strokeWidth="1"/>)}
                  <path d="M0,70 L27,62 L55,54 L82,46 L110,36 L137,28 L165,22 L193,16 L193,80 L0,80 Z" fill="url(#g1)"/>
                  <path d="M0,70 L27,62 L55,54 L82,46 L110,36 L137,28 L165,22 L193,16" fill="none" stroke="#356AE6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M193,16 L207,11 L220,7 L220,80 L193,80 Z" fill="url(#g2)"/>
                  <path d="M193,16 L207,11 L220,7" fill="none" stroke="#6256C7" strokeWidth="1.8" strokeDasharray="3,2" strokeLinecap="round"/>
                  <circle cx="193" cy="16" r="2.5" fill="#356AE6" stroke="#161B27" strokeWidth="1.5"/>
                  {["J","M","M","J","S","N"].map((m, i) => (
                    <text key={m+i} x={i * 44} y="78" fill="white" fillOpacity="0.25" fontSize="7" textAnchor="middle">{m}</text>
                  ))}
                </svg>
              </div>

              {/* AI panel */}
              <div className="col-span-2 rounded-xl p-3 border border-[#356AE6]/20" style={{ background: "linear-gradient(135deg, rgba(53,106,230,0.12) 0%, rgba(98,86,199,0.12) 100%)" }}>
                <div className="flex items-center gap-1.5 mb-2.5">
                  <div className="w-4 h-4 rounded-md bg-[#356AE6] flex items-center justify-center">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M4 1L5 3H7L5.5 4.5L6 6.5L4 5.5L2 6.5L2.5 4.5L1 3H3L4 1Z" fill="white"/></svg>
                  </div>
                  <span className="text-white text-[10.5px] font-semibold">AI Insight</span>
                </div>
                <p className="text-white/65 text-[10px] leading-relaxed mb-2.5">
                  Revenue is on track to exceed Q4 targets by <span className="text-[#16A6A1] font-semibold">12.4%</span>. Enterprise segment accelerated significantly in October.
                </p>
                <div className="space-y-1.5">
                  <div className="rounded-lg p-2" style={{ background: "rgba(255,255,255,0.05)" }}>
                    <div className="text-white/35 text-[9px]">Top segment</div>
                    <div className="text-white text-[10.5px] font-semibold">Enterprise: +34% MoM</div>
                  </div>
                  <div className="rounded-lg p-2" style={{ background: "rgba(255,255,255,0.05)" }}>
                    <div className="text-white/35 text-[9px]">Recommendation</div>
                    <div className="text-[#16A6A1] text-[10.5px] font-medium">Increase enterprise outreach</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── AI Analyst mockup ───────────────────────────────────────── */
function AnalystMockup() {
  return (
    <div className="rounded-2xl border border-[#E9EAEC] overflow-hidden shadow-[0_16px_64px_rgba(0,0,0,0.08)]">
      {/* Header */}
      <div className="bg-[#0D1117] px-5 py-3.5 flex items-center gap-3">
        <div className="w-7 h-7 rounded-lg bg-[#172B4D] flex items-center justify-center">
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M1 10L4.5 4.5L7 7.5L9.5 2.5" stroke="#356AE6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="9.5" cy="2.5" r="1.5" fill="#16A6A1"/></svg>
        </div>
        <span className="text-white text-[13px] font-semibold">AI Data Analyst</span>
        <div className="ml-auto flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="text-white/35 text-[11px]">Q4 Sales Data · 12,480 rows</span>
        </div>
      </div>

      {/* Chat */}
      <div className="bg-[#F9FAFB] p-5 space-y-4">
        {/* User message */}
        <div className="flex justify-end">
          <div className="bg-[#172B4D] text-white text-[13px] rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[280px]">
            Which marketing channel generated the most revenue last quarter?
          </div>
        </div>

        {/* AI response */}
        <div className="flex gap-2.5">
          <div className="w-6 h-6 rounded-full bg-[#172B4D] flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 1L6 3.5H8.5L6.5 5L7 7.5L5 6L3 7.5L3.5 5L1.5 3.5H4L5 1Z" fill="#356AE6"/></svg>
          </div>
          <div className="flex-1 space-y-3">
            <div className="bg-white border border-[#E9EAEC] text-[13px] text-[#374151] rounded-2xl rounded-tl-sm px-4 py-3 leading-relaxed">
              Based on Q4 Sales Data, <span className="font-semibold text-[#172B4D]">Organic Search</span> generated the highest revenue at <span className="font-semibold text-[#356AE6]">$182,000</span> (34% of total). Email had the best ROI at 4.2x.
            </div>
            {/* Mini chart */}
            <div className="bg-white border border-[#E9EAEC] rounded-xl p-3.5">
              <p className="text-[11px] font-semibold text-[#374151] mb-3">Revenue by channel (Q4)</p>
              <div className="space-y-2">
                {[
                  { ch: "Organic", val: 182000, pct: 100, color: "#356AE6" },
                  { ch: "Paid Search", val: 134000, pct: 73, color: "#6256C7" },
                  { ch: "Email", val: 98000, pct: 54, color: "#16A6A1" },
                  { ch: "Referral", val: 76000, pct: 42, color: "#269B70" },
                ].map(({ ch, val, pct, color }) => (
                  <div key={ch} className="flex items-center gap-2.5">
                    <span className="text-[11px] text-[#6B7280] w-20 flex-shrink-0">{ch}</span>
                    <div className="flex-1 h-1.5 bg-[#F3F4F6] rounded-full overflow-hidden">
                      <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, background: color }} />
                    </div>
                    <span className="text-[11px] font-semibold text-[#374151] w-16 text-right">${(val/1000).toFixed(0)}k</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Recommendation chip */}
            <div className="inline-flex items-center gap-2 bg-[#EEF0FF] border border-indigo-200 rounded-lg px-3 py-1.5">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1l1.2 3.5H11L8 6.8l1 3.2L6 8.3 3 10l1-3.2L1 4.5h3.8L6 1z" fill="#6256C7"/></svg>
              <span className="text-[11.5px] font-semibold text-[#6256C7]">Increase Email investment: highest ROI at 4.2x</span>
            </div>
          </div>
        </div>

        {/* Input */}
        <div className="flex gap-2 pt-1">
          <div className="flex-1 bg-white border border-[#E9EAEC] rounded-xl px-3.5 py-2 text-[12.5px] text-[#9CA3AF]">
            Ask a follow-up question...
          </div>
          <div className="w-8 h-8 rounded-xl bg-[#356AE6] flex items-center justify-center flex-shrink-0">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M7 2l5 5-5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        </div>
      </div>
    </div>
  );
}
