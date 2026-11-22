import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-white">

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-[#0D1117] overflow-hidden">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Glow blobs */}
        <div
          className="absolute top-0 left-0 w-[700px] h-[700px] -translate-x-1/3 -translate-y-1/3 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(53,106,230,0.15) 0%, transparent 65%)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] translate-x-1/4 translate-y-1/4 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(98,86,199,0.12) 0%, transparent 65%)" }}
        />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-32 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center">

            {/* Left: copy */}
            <div>
              <div className="inline-flex items-center gap-2 border border-white/10 rounded-full px-3.5 py-1.5 mb-8 bg-white/5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#16A6A1] animate-pulse" />
                <span className="text-[12px] font-semibold text-white/50 tracking-widest uppercase">
                  Business Intelligence Platform
                </span>
              </div>

              <h1
                className="text-5xl sm:text-6xl lg:text-[68px] font-black text-white mb-6"
                style={{ fontFamily: "Manrope, sans-serif", letterSpacing: "-0.03em", lineHeight: 1.03 }}
              >
                See beyond
                <br />
                <span style={{ color: "#356AE6" }}>the numbers.</span>
              </h1>

              <p className="text-[17px] text-white/50 leading-[1.75] mb-10 max-w-[480px]">
                Insights AI transforms complex business data into clear insights, predictive forecasts, and decisions you can act on. No data science degree required.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-14">
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#356AE6] text-white text-[15px] font-semibold rounded-xl hover:bg-[#2458D0] transition-colors"
                >
                  Start for free
                  <ArrowRight />
                </Link>
                <Link
                  href="/platform"
                  className="inline-flex items-center justify-center px-6 py-3.5 border border-white/10 bg-white/5 text-white text-[15px] font-semibold rounded-xl hover:bg-white/10 transition-colors"
                >
                  Explore platform
                </Link>
              </div>

              <div className="flex flex-wrap gap-10">
                {STATS.map(({ number, label }) => (
                  <div key={label}>
                    <div
                      className="text-[26px] font-black text-white"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      {number}
                    </div>
                    <div className="text-[12px] text-white/40 mt-0.5 font-medium">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: mockup */}
            <div className="flex justify-center lg:justify-end">
              <DashboardMockup />
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRUSTED BY ───────────────────────────────────────── */}
      <section className="py-14 border-y border-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <p className="text-center text-[11px] font-bold text-[#9CA3AF] uppercase tracking-widest mb-8">
            Trusted by data-driven teams
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10">
            {LOGOS.map((name) => (
              <span key={name} className="text-[13px] font-bold text-[#D1D5DB] tracking-tight">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROBLEM ─────────────────────────────────────────── */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <p className="text-[11px] font-bold text-[#356AE6] uppercase tracking-widest mb-5">The problem</p>
              <h2
                className="text-4xl sm:text-5xl font-black text-[#0D1117] mb-6"
                style={{ fontFamily: "Manrope, sans-serif", letterSpacing: "-0.03em", lineHeight: 1.1 }}
              >
                Your business has
                <br />
                the data.
                <br />
                <span className="text-[#9CA3AF]">Do you have the insights?</span>
              </h2>
              <p className="text-[16px] text-[#6B7280] leading-relaxed">
                Organizations collect enormous amounts of data every day. Most of it sits unused, buried in spreadsheets and disconnected systems while opportunities pass unnoticed.
              </p>
            </div>

            <div className="space-y-2">
              {PROBLEMS.map(({ n, title, text }) => (
                <div
                  key={n}
                  className="flex gap-4 p-5 rounded-xl border border-transparent hover:border-[#E9EAEC] hover:bg-[#F9FAFB] transition-all group cursor-default"
                >
                  <span
                    className="text-[11px] font-bold text-[#E4E7EC] group-hover:text-[#356AE6] transition-colors mt-0.5 w-6 flex-shrink-0"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    {n}
                  </span>
                  <div>
                    <p className="text-[14px] font-semibold text-[#111827] mb-1">{title}</p>
                    <p className="text-[13.5px] text-[#6B7280] leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PLATFORM FEATURES ───────────────────────────────── */}
      <section className="py-28 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-2xl mb-16">
            <p className="text-[11px] font-bold text-[#356AE6] uppercase tracking-widest mb-5">The platform</p>
            <h2
              className="text-4xl sm:text-5xl font-black text-[#0D1117] mb-5"
              style={{ fontFamily: "Manrope, sans-serif", letterSpacing: "-0.03em", lineHeight: 1.1 }}
            >
              One intelligent workspace.
              <br />
              Better decisions.
            </h2>
            <p className="text-[16px] text-[#6B7280] leading-relaxed">
              Everything your team needs to go from raw data to clear decisions, in a single connected platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map(({ accent, title, text }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 border border-[#E9EAEC] hover:border-[#D1D5DB] hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)] transition-all duration-200"
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: accent + "18" }}
                >
                  <FeatureIcon accent={accent} />
                </div>
                <h3
                  className="text-[15px] font-bold text-[#0D1117] mb-2.5"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  {title}
                </h3>
                <p className="text-[13.5px] text-[#6B7280] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURE SPOTLIGHT ───────────────────────────────── */}
      <section className="py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[11px] font-bold text-[#356AE6] uppercase tracking-widest mb-5">AI Data Analyst</p>
              <h2
                className="text-4xl sm:text-[46px] font-black text-[#0D1117] mb-6"
                style={{ fontFamily: "Manrope, sans-serif", letterSpacing: "-0.03em", lineHeight: 1.08 }}
              >
                Ask questions.
                <br />
                Get answers.
              </h2>
              <p className="text-[16px] text-[#6B7280] leading-relaxed mb-8">
                Type a question about your data the same way you would ask a colleague. Insights AI understands the context, runs the analysis, and shows you charts and recommendations in seconds.
              </p>
              <div className="space-y-3 mb-8">
                {SAMPLE_QUESTIONS.map((q) => (
                  <div key={q} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#356AE6] mt-[7px] flex-shrink-0" />
                    <p className="text-[14px] text-[#374151]">{q}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/features"
                className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#356AE6] hover:gap-3 transition-all"
              >
                See all features
                <ArrowRight />
              </Link>
            </div>
            <AnalystMockup />
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─────────────────────────────────────── */}
      <section className="py-28 bg-[#0D1117] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-16">
            <p className="text-[11px] font-bold text-[#356AE6] uppercase tracking-widest mb-5">How it works</p>
            <h2
              className="text-4xl sm:text-5xl font-black text-white"
              style={{ fontFamily: "Manrope, sans-serif", letterSpacing: "-0.03em" }}
            >
              From raw data to decisions
              <br />
              in three steps
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HOW_IT_WORKS.map(({ n, color, title, text }) => (
              <div
                key={n}
                className="p-7 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-colors"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-6 text-sm font-black"
                  style={{ backgroundColor: color + "25", color }}
                >
                  {n}
                </div>
                <h3
                  className="text-lg font-bold text-white mb-3"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  {title}
                </h3>
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
            <p className="text-[11px] font-bold text-[#356AE6] uppercase tracking-widest mb-5">Use cases</p>
            <h2
              className="text-4xl sm:text-5xl font-black text-[#0D1117]"
              style={{ fontFamily: "Manrope, sans-serif", letterSpacing: "-0.03em", lineHeight: 1.1 }}
            >
              Built for every part
              <br />
              of your business
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {USE_CASES.map(({ label, bg, items }) => (
              <div
                key={label}
                className="rounded-2xl border border-[#E9EAEC] p-6 hover:border-[#D1D5DB] hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-7 h-7 rounded-lg" style={{ backgroundColor: bg }} />
                  <h3
                    className="text-[15px] font-bold text-[#0D1117]"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    {label}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-[13.5px] text-[#6B7280]">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="#D1D5DB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="py-28 bg-[#172B4D] relative overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, #356AE6 0%, transparent 70%)" }}
        />
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <h2
            className="text-5xl sm:text-[64px] font-black text-white mb-6"
            style={{ fontFamily: "Manrope, sans-serif", letterSpacing: "-0.03em", lineHeight: 1.03 }}
          >
            Make every business
            <br />
            decision more informed.
          </h2>
          <p className="text-[17px] text-white/50 leading-relaxed mb-10 max-w-xl mx-auto">
            Bring your data into focus and uncover the insights that move your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#172B4D] text-[15px] font-bold rounded-xl hover:bg-[#F5F7FB] transition-colors"
            >
              Start analyzing your data
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white text-[15px] font-semibold rounded-xl hover:bg-white/10 transition-colors"
            >
              View pricing
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

/* ─── Static data ─────────────────────────────────────────────── */

const STATS = [
  { number: "10x", label: "Faster than spreadsheets" },
  { number: "94%", label: "Forecast accuracy" },
  { number: "2 min", label: "Time to first insight" },
];

const LOGOS = ["Meridian Capital", "NovaTech", "Blueshore Group", "Oryx Partners", "Vantage Labs", "Clearfield Inc"];

const PROBLEMS = [
  { n: "01", title: "Data without direction", text: "Businesses collect data but struggle to understand what it means for their operations or strategy." },
  { n: "02", title: "Reports take too long", text: "Analysis that should take minutes takes days. Manual work slows down every decision." },
  { n: "03", title: "Hidden patterns and trends", text: "Opportunities and warning signals remain invisible inside disconnected, unanalyzed data." },
  { n: "04", title: "Decisions without forecasting", text: "Without reliable forecasting, companies react rather than prepare for what comes next." },
  { n: "05", title: "Technical barriers", text: "Meaningful analysis requires specialized skills that most business teams simply do not have." },
];

const FEATURES = [
  { accent: "#356AE6", title: "AI Data Analyst", text: "Ask questions about your data in plain language. Get analysis, calculations, and charts instantly." },
  { accent: "#6256C7", title: "Predictive Analytics", text: "Forecast revenue, demand, churn, and performance using historical data patterns." },
  { accent: "#16A6A1", title: "AI Report Generator", text: "Generate executive summaries, findings, and recommendations ready to share with your team." },
  { accent: "#269B70", title: "Interactive Dashboards", text: "Build custom dashboards with drag-and-drop components, filters, and date range controls." },
  { accent: "#E6A23C", title: "Anomaly Detection", text: "Automatically identify unusual changes in revenue, expenses, and customer behavior." },
  { accent: "#356AE6", title: "AI Recommendations", text: "Receive evidence-based recommendations linked directly to your data findings." },
];

const SAMPLE_QUESTIONS = [
  "What were our highest performing products last month?",
  "Which marketing channel generated the most revenue?",
  "What are our projected sales for the next quarter?",
  "Which customers have the highest lifetime value?",
];

const HOW_IT_WORKS = [
  { n: "1", color: "#356AE6", title: "Connect your data", text: "Upload CSV files, Excel spreadsheets, or connect to your existing databases and cloud services." },
  { n: "2", color: "#6256C7", title: "Let AI analyze it", text: "The platform examines your data for trends, anomalies, correlations, and opportunities." },
  { n: "3", color: "#16A6A1", title: "Act on the insights", text: "Turn findings into dashboards, reports, and recommendations grounded in real evidence." },
];

const USE_CASES = [
  { label: "Finance", bg: "#172B4D", items: ["Revenue analysis", "Expense tracking", "Cash flow forecasting", "Financial trend reporting"] },
  { label: "Sales", bg: "#356AE6", items: ["Pipeline forecasting", "Conversion analysis", "Territory performance", "Customer value scoring"] },
  { label: "Marketing", bg: "#6256C7", items: ["Campaign ROI analysis", "Channel attribution", "Customer acquisition cost", "Funnel performance"] },
  { label: "Operations", bg: "#16A6A1", items: ["Demand forecasting", "Resource utilization", "Inventory optimization", "Process efficiency"] },
  { label: "Customer Experience", bg: "#269B70", items: ["Churn prediction", "Satisfaction analysis", "Behavior segmentation", "Retention modeling"] },
  { label: "Executive", bg: "#E6A23C", items: ["Cross-org performance", "Strategic KPI tracking", "Board reporting", "AI governance"] },
];

/* ─── Shared micro-components ─────────────────────────────────── */

function ArrowRight() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <path d="M3 7.5h9M8 3l4.5 4.5L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FeatureIcon({ accent }: { accent: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M2 14l3.5-6.5 3 3.5 2.5-5.5 3 4.5" stroke={accent} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="14.5" cy="3.5" r="1.5" fill={accent} />
    </svg>
  );
}

/* ─── Dashboard mockup ───────────────────────────────────────── */

function DashboardMockup() {
  return (
    <div className="w-full max-w-[600px]">
      <div
        className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_32px_80px_rgba(0,0,0,0.6)]"
        style={{ background: "#161B27" }}
      >
        {/* Title bar */}
        <div
          className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.06]"
          style={{ background: "#0F1420" }}
        >
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-white/[0.06] rounded px-4 py-1 text-[11px] text-white/30">
              app.insights-ai.com/dashboard
            </div>
          </div>
        </div>

        {/* App chrome */}
        <div className="flex" style={{ height: 400 }}>
          {/* Sidebar */}
          <div
            className="w-11 border-r border-white/[0.06] flex flex-col items-center pt-3 gap-2 flex-shrink-0"
            style={{ background: "#0D1117" }}
          >
            <div className="w-7 h-7 rounded-lg bg-[#356AE6] flex items-center justify-center mb-2">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 9L4 4.5L6.5 7L9 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="9" cy="2.5" r="1.4" fill="#16A6A1" />
              </svg>
            </div>
            {[
              <svg key="1" width="13" height="13" viewBox="0 0 13 13" fill="none"><rect x="1" y="1" width="4.5" height="4.5" rx="1" fill="white" fillOpacity="0.3" /><rect x="7.5" y="1" width="4.5" height="4.5" rx="1" fill="white" fillOpacity="0.12" /><rect x="1" y="7.5" width="4.5" height="4.5" rx="1" fill="white" fillOpacity="0.12" /><rect x="7.5" y="7.5" width="4.5" height="4.5" rx="1" fill="white" fillOpacity="0.06" /></svg>,
              <svg key="2" width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M1.5 10.5l2.5-5 2.5 3 2-4.5 2.5 3.5" stroke="white" strokeOpacity="0.25" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
              <svg key="3" width="13" height="13" viewBox="0 0 13 13" fill="none"><rect x="1" y="2.5" width="11" height="8" rx="1.5" stroke="white" strokeOpacity="0.25" strokeWidth="1.2" /><path d="M4 6h5M4 8.5h3" stroke="white" strokeOpacity="0.25" strokeWidth="1.2" strokeLinecap="round" /></svg>,
              <svg key="4" width="13" height="13" viewBox="0 0 13 13" fill="none"><circle cx="6.5" cy="6.5" r="4.5" stroke="white" strokeOpacity="0.2" strokeWidth="1.2" /><path d="M6.5 4v2.5l1.5 1.5" stroke="white" strokeOpacity="0.2" strokeWidth="1.2" strokeLinecap="round" /></svg>,
            ].map((icon, i) => (
              <div key={i} className="w-7 h-7 rounded-lg flex items-center justify-center opacity-60">
                {icon}
              </div>
            ))}
          </div>

          {/* Main content */}
          <div className="flex-1 p-4 overflow-hidden min-w-0">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-white text-[12px] font-semibold mb-0.5">Business Overview</div>
                <div className="text-white/30 text-[10px]">November 2026 · Demo workspace</div>
              </div>
              <div className="flex gap-1.5">
                <div className="bg-white/[0.07] rounded px-2 py-1 text-white/40 text-[10px]">30 days</div>
                <div className="bg-[#356AE6] rounded px-2 py-1 text-white text-[10px] font-semibold">Export</div>
              </div>
            </div>

            {/* KPIs */}
            <div className="grid grid-cols-4 gap-2 mb-4">
              {[
                { label: "Revenue", value: "$2.4M", change: "+18%", color: "#356AE6" },
                { label: "Customers", value: "14,820", change: "+6%", color: "#16A6A1" },
                { label: "Avg Order", value: "$162", change: "+4.5%", color: "#6256C7" },
                { label: "Churn", value: "2.1%", change: "-0.4%", color: "#269B70" },
              ].map((kpi) => (
                <div
                  key={kpi.label}
                  className="rounded-xl p-2.5 border border-white/[0.06]"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  <div className="text-white/40 text-[9px] mb-1">{kpi.label}</div>
                  <div className="text-white text-[12px] font-bold">{kpi.value}</div>
                  <div className="text-emerald-400 text-[9px] font-medium mt-0.5">{kpi.change}</div>
                  <div className="mt-1.5 h-0.5 rounded-full bg-white/5">
                    <div className="h-full rounded-full w-3/5" style={{ background: kpi.color }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Chart + AI panel */}
            <div className="grid grid-cols-5 gap-2.5">
              {/* SVG chart */}
              <div
                className="col-span-3 rounded-xl p-3 border border-white/[0.06]"
                style={{ background: "rgba(255,255,255,0.025)" }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white text-[10px] font-semibold">Revenue trend</span>
                  <div className="flex gap-2">
                    <span className="text-white/30 text-[9px] flex items-center gap-1">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#356AE6]" />
                      Actual
                    </span>
                    <span className="text-white/30 text-[9px] flex items-center gap-1">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#6256C7]" />
                      Forecast
                    </span>
                  </div>
                </div>
                <svg viewBox="0 0 200 72" className="w-full" height="72" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="cg1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#356AE6" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#356AE6" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="cg2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#6256C7" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#6256C7" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <line x1="0" y1="18" x2="200" y2="18" stroke="white" strokeOpacity="0.04" strokeWidth="1" />
                  <line x1="0" y1="36" x2="200" y2="36" stroke="white" strokeOpacity="0.04" strokeWidth="1" />
                  <line x1="0" y1="54" x2="200" y2="54" stroke="white" strokeOpacity="0.04" strokeWidth="1" />
                  <path d="M0,66 L28,58 L56,50 L84,42 L112,32 L140,24 L168,18 L180,15 L180,72 L0,72 Z" fill="url(#cg1)" />
                  <path d="M0,66 L28,58 L56,50 L84,42 L112,32 L140,24 L168,18 L180,15" fill="none" stroke="#356AE6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M180,15 L192,11 L200,8 L200,72 L180,72 Z" fill="url(#cg2)" />
                  <path d="M180,15 L192,11 L200,8" fill="none" stroke="#6256C7" strokeWidth="1.6" strokeDasharray="2.5 2" strokeLinecap="round" />
                  <circle cx="180" cy="15" r="2.5" fill="#356AE6" stroke="#161B27" strokeWidth="1.5" />
                  {(["J","M","M","J","S","N"] as const).map((m, i) => (
                    <text key={i} x={i * 40} y="70" fill="white" fillOpacity="0.2" fontSize="6.5" textAnchor="middle">{m}</text>
                  ))}
                </svg>
              </div>

              {/* AI insight */}
              <div
                className="col-span-2 rounded-xl p-3 border border-[#356AE6]/20"
                style={{ background: "linear-gradient(135deg, rgba(53,106,230,0.1) 0%, rgba(98,86,199,0.1) 100%)" }}
              >
                <div className="flex items-center gap-1.5 mb-2">
                  <div className="w-4 h-4 rounded bg-[#356AE6] flex items-center justify-center">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M4 1L5 3H7L5.5 4.5L6 6.5L4 5.5L2 6.5L2.5 4.5L1 3H3L4 1Z" fill="white" />
                    </svg>
                  </div>
                  <span className="text-white text-[10px] font-semibold">AI Insight</span>
                </div>
                <p className="text-white/60 text-[9.5px] leading-relaxed mb-2.5">
                  Revenue on track to exceed Q4 targets by{" "}
                  <span className="text-[#16A6A1] font-semibold">12.4%</span>. Enterprise accelerated in Oct.
                </p>
                <div className="space-y-1.5">
                  <div className="rounded-lg p-2" style={{ background: "rgba(255,255,255,0.05)" }}>
                    <div className="text-white/30 text-[8.5px]">Top segment</div>
                    <div className="text-white text-[10px] font-semibold">Enterprise: +34% MoM</div>
                  </div>
                  <div className="rounded-lg p-2" style={{ background: "rgba(255,255,255,0.05)" }}>
                    <div className="text-white/30 text-[8.5px]">Recommendation</div>
                    <div className="text-[#16A6A1] text-[10px] font-medium">Increase enterprise outreach</div>
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

/* ─── AI Analyst mockup ──────────────────────────────────────── */

function AnalystMockup() {
  return (
    <div className="rounded-2xl border border-[#E9EAEC] overflow-hidden shadow-[0_16px_64px_rgba(0,0,0,0.08)]">
      {/* Header */}
      <div className="bg-[#0D1117] px-5 py-3.5 flex items-center gap-3">
        <div className="w-7 h-7 rounded-lg bg-[#172B4D] flex items-center justify-center">
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path d="M1 10L4.5 4.5L7 7.5L9.5 2.5" stroke="#356AE6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="9.5" cy="2.5" r="1.4" fill="#16A6A1" />
          </svg>
        </div>
        <span className="text-white text-[13px] font-semibold">AI Data Analyst</span>
        <div className="ml-auto flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="text-white/30 text-[11px]">Q4 Sales Data · 12,480 rows</span>
        </div>
      </div>

      {/* Chat */}
      <div className="bg-[#F9FAFB] p-5 space-y-4">
        {/* User bubble */}
        <div className="flex justify-end">
          <div className="bg-[#172B4D] text-white text-[13px] rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[280px] leading-relaxed">
            Which marketing channel generated the most revenue last quarter?
          </div>
        </div>

        {/* AI bubble */}
        <div className="flex gap-2.5">
          <div className="w-6 h-6 rounded-full bg-[#172B4D] flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M5 1L6 3.5H8.5L6.5 5L7 7.5L5 6L3 7.5L3.5 5L1.5 3.5H4L5 1Z" fill="#356AE6" />
            </svg>
          </div>
          <div className="flex-1 space-y-3">
            <div className="bg-white border border-[#E9EAEC] text-[13px] text-[#374151] rounded-2xl rounded-tl-sm px-4 py-3 leading-relaxed">
              Based on Q4 Sales Data,{" "}
              <span className="font-semibold text-[#172B4D]">Organic Search</span> generated the
              highest revenue at{" "}
              <span className="font-semibold text-[#356AE6]">$182,000</span> (34% of total). Email
              had the best ROI at 4.2x.
            </div>

            {/* Mini chart */}
            <div className="bg-white border border-[#E9EAEC] rounded-xl p-3.5">
              <p className="text-[11px] font-semibold text-[#374151] mb-3">Revenue by channel (Q4)</p>
              <div className="space-y-2">
                {[
                  { ch: "Organic", val: "$182k", pct: 100, color: "#356AE6" },
                  { ch: "Paid Search", val: "$134k", pct: 73, color: "#6256C7" },
                  { ch: "Email", val: "$98k", pct: 54, color: "#16A6A1" },
                  { ch: "Referral", val: "$76k", pct: 42, color: "#269B70" },
                ].map(({ ch, val, pct, color }) => (
                  <div key={ch} className="flex items-center gap-2.5">
                    <span className="text-[11px] text-[#6B7280] w-20 flex-shrink-0">{ch}</span>
                    <div className="flex-1 h-1.5 bg-[#F3F4F6] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${pct}%`, background: color }}
                      />
                    </div>
                    <span className="text-[11px] font-semibold text-[#374151] w-10 text-right">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Insight chip */}
            <div className="inline-flex items-center gap-2 bg-[#EEF0FF] border border-indigo-200 rounded-lg px-3 py-1.5">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 1l1.2 3.5H11L8 6.8l1 3.2L6 8.3 3 10l1-3.2L1 4.5h3.8L6 1z" fill="#6256C7" />
              </svg>
              <span className="text-[11.5px] font-semibold text-[#6256C7]">
                Increase Email investment: highest ROI at 4.2x
              </span>
            </div>
          </div>
        </div>

        {/* Input */}
        <div className="flex gap-2 pt-1">
          <div className="flex-1 bg-white border border-[#E9EAEC] rounded-xl px-3.5 py-2 text-[12.5px] text-[#9CA3AF]">
            Ask a follow-up question...
          </div>
          <div className="w-8 h-8 rounded-xl bg-[#356AE6] flex items-center justify-center flex-shrink-0">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M2 6.5h9M7 2l4.5 4.5L7 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
