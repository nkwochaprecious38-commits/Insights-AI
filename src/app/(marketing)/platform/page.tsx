import Link from "next/link";

const capabilities = [
  {
    color: "#356AE6",
    label: "AI-Powered Data Analyst",
    title: "Ask questions. Get answers instantly.",
    text: "Type natural language questions about your data and receive analysis, charts, and calculations in seconds. No SQL, no code, no technical expertise required.",
    bullets: [
      "Plain language query interface",
      "Instant chart and table generation",
      "Follow-up questions with full context",
      "Export results as reports",
    ],
    visual: "analyst",
  },
  {
    color: "#6256C7",
    label: "Predictive Analytics Engine",
    title: "Know what comes next before it arrives.",
    text: "Machine learning models trained on your historical data surface accurate forecasts for revenue, demand, churn, and performance across every business unit.",
    bullets: [
      "Revenue and sales forecasting",
      "Demand planning and inventory projection",
      "Customer churn prediction",
      "Scenario modeling and what-if analysis",
    ],
    visual: "forecast",
  },
  {
    color: "#16A6A1",
    label: "Automated Report Generation",
    title: "Professional reports written by AI.",
    text: "Generate structured, executive-ready reports from your analysis. AI writes the narrative, highlights key findings, and formats everything for immediate sharing.",
    bullets: [
      "Executive summary generation",
      "Data-backed narrative writing",
      "Branded PDF and document export",
      "Scheduled delivery to stakeholders",
    ],
    visual: "report",
  },
  {
    color: "#172B4D",
    label: "Interactive Dashboard Builder",
    title: "Build dashboards your team actually uses.",
    text: "Drag and drop KPI cards, charts, and data tables into custom dashboards. Apply filters, adjust date ranges, and share live views with your entire organization.",
    bullets: [
      "Drag-and-drop dashboard editor",
      "50+ chart and visualization types",
      "Real-time data refresh",
      "Role-based sharing and permissions",
    ],
    visual: "dashboard",
  },
  {
    color: "#E6A23C",
    label: "Anomaly Detection",
    title: "Catch problems before they become crises.",
    text: "Automated monitoring surfaces unusual changes in revenue, expenses, customer behavior, and operational metrics the moment they occur.",
    bullets: [
      "Real-time anomaly alerts",
      "Configurable sensitivity thresholds",
      "Root cause analysis assistance",
      "Slack and email notifications",
    ],
    visual: "anomaly",
  },
  {
    color: "#269B70",
    label: "Data Governance and Compliance",
    title: "Full visibility into how data is used.",
    text: "Maintain a complete audit trail of every analysis, report, and data access event. Enforce access controls, track data lineage, and satisfy compliance requirements.",
    bullets: [
      "Comprehensive audit logging",
      "Role-based access control",
      "Data lineage tracking",
      "GDPR and SOC 2 readiness tools",
    ],
    visual: "governance",
  },
  {
    color: "#356AE6",
    label: "Experiment Tracking",
    title: "Run tests. Understand what works.",
    text: "Design A/B tests, compare model variants, and track experiment performance over time. Make decisions grounded in statistical evidence.",
    bullets: [
      "A/B and multivariate experiment design",
      "Statistical significance testing",
      "Model version comparison",
      "Performance history and rollback",
    ],
    visual: "experiments",
  },
  {
    color: "#6256C7",
    label: "Multi-Source Integration",
    title: "Connect every data source you rely on.",
    text: "Bring together data from spreadsheets, databases, CRMs, marketing tools, and cloud platforms into one unified workspace.",
    bullets: [
      "40+ native integrations",
      "CSV, Excel, and Google Sheets import",
      "REST API and webhook support",
      "Automated sync scheduling",
    ],
    visual: "integrations",
  },
];

function VisualMockup({ type, color }: { type: string; color: string }) {
  return (
    <div
      className="rounded-2xl border border-[#E9EAEC] overflow-hidden bg-white shadow-[0_8px_40px_rgba(0,0,0,0.07)]"
      style={{ minHeight: 260 }}
    >
      <div className="h-8 border-b border-[#F3F4F6] flex items-center px-4 gap-2 bg-[#FAFAFA]">
        <div className="w-2 h-2 rounded-full bg-[#E4E7EC]" />
        <div className="w-2 h-2 rounded-full bg-[#E4E7EC]" />
        <div className="w-2 h-2 rounded-full bg-[#E4E7EC]" />
        <div className="ml-2 flex-1 h-4 rounded bg-[#F3F4F6] max-w-[160px]" />
      </div>
      <div className="p-5 flex flex-col gap-3">
        <div className="flex gap-2">
          <div className="h-14 flex-1 rounded-xl border border-[#E9EAEC] flex flex-col justify-center px-3">
            <div className="text-[9px] font-semibold text-[#9CA3AF] mb-1">METRIC</div>
            <div className="text-[18px] font-black" style={{ color, fontFamily: "Manrope, sans-serif" }}>84.2%</div>
          </div>
          <div className="h-14 flex-1 rounded-xl border border-[#E9EAEC] flex flex-col justify-center px-3">
            <div className="text-[9px] font-semibold text-[#9CA3AF] mb-1">TREND</div>
            <div className="text-[18px] font-black text-[#269B70]" style={{ fontFamily: "Manrope, sans-serif" }}>+12.4%</div>
          </div>
          <div className="h-14 flex-1 rounded-xl border border-[#E9EAEC] flex flex-col justify-center px-3">
            <div className="text-[9px] font-semibold text-[#9CA3AF] mb-1">STATUS</div>
            <div className="text-[11px] font-bold text-[#269B70]">On track</div>
          </div>
        </div>
        <div className="rounded-xl border border-[#E9EAEC] p-3">
          <div className="text-[11px] font-semibold text-[#374151] mb-2.5">Performance over time</div>
          <svg viewBox="0 0 320 80" className="w-full" height="70">
            <defs>
              <linearGradient id={`grad-${type}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={color} stopOpacity="0.2" />
                <stop offset="100%" stopColor={color} stopOpacity="0" />
              </linearGradient>
            </defs>
            {[20, 40, 60].map((y) => (
              <line key={y} x1="0" y1={y} x2="320" y2={y} stroke="#F3F4F6" strokeWidth="1" />
            ))}
            <path
              d="M0,65 L40,55 L80,42 L120,38 L160,30 L200,22 L240,18 L280,12 L320,8 L320,80 L0,80 Z"
              fill={`url(#grad-${type})`}
            />
            <path
              d="M0,65 L40,55 L80,42 L120,38 L160,30 L200,22 L240,18 L280,12 L320,8"
              fill="none"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="320" cy="8" r="3" fill={color} />
          </svg>
        </div>
        <div className="flex gap-2">
          <div className="flex-1 h-7 rounded-lg" style={{ background: color + "15" }} />
          <div className="w-16 h-7 rounded-lg bg-[#F3F4F6]" />
        </div>
      </div>
    </div>
  );
}

export default function PlatformPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-[#0D1117] overflow-hidden pt-32 pb-24">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle, rgba(53,106,230,0.15) 0%, transparent 70%)" }} />
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <p className="text-xs font-bold text-[#356AE6] uppercase tracking-widest mb-6">Platform</p>
          <h1
            className="text-5xl sm:text-6xl font-black text-white mb-6"
            style={{ fontFamily: "Manrope, sans-serif", letterSpacing: "-0.03em", lineHeight: 1.03 }}
          >
            One platform. All the intelligence
            <br />
            your business needs.
          </h1>
          <p className="text-[17px] text-white/55 leading-relaxed max-w-2xl mx-auto mb-10">
            Insights AI connects your data, your analysis, and your decisions in a single intelligent workspace. Every capability works together so nothing falls through the gaps.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#356AE6] text-white text-[15px] font-semibold rounded-xl hover:bg-[#2458D0] transition-colors"
          >
            Start for free
          </Link>
        </div>
      </section>

      {/* Capabilities */}
      {capabilities.map((cap, i) => {
        const isEven = i % 2 === 0;
        return (
          <section
            key={cap.label}
            className={`py-24 ${isEven ? "bg-white" : "bg-[#F9FAFB]"}`}
          >
            <div className="max-w-7xl mx-auto px-5 sm:px-8">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                <div className={isEven ? "" : "lg:order-2"}>
                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-4"
                    style={{ color: cap.color }}
                  >
                    {cap.label}
                  </p>
                  <h2
                    className="text-4xl font-black text-[#0D1117] mb-5"
                    style={{ fontFamily: "Manrope, sans-serif", letterSpacing: "-0.03em", lineHeight: 1.1 }}
                  >
                    {cap.title}
                  </h2>
                  <p className="text-[16px] text-[#6B7280] leading-relaxed mb-7">{cap.text}</p>
                  <ul className="space-y-2.5">
                    {cap.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-3">
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: cap.color + "15" }}
                        >
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d="M2 5l2 2 4-4" stroke={cap.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <span className="text-[14px] text-[#374151]">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={isEven ? "" : "lg:order-1"}>
                  <VisualMockup type={cap.visual} color={cap.color} />
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-28 bg-[#172B4D] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] opacity-10" style={{ background: "radial-gradient(circle, #356AE6 0%, transparent 70%)" }} />
        <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <h2
            className="text-5xl font-black text-white mb-6"
            style={{ fontFamily: "Manrope, sans-serif", letterSpacing: "-0.03em" }}
          >
            Ready to see it in action?
          </h2>
          <p className="text-[17px] text-white/55 mb-10 leading-relaxed">
            Connect your data and start uncovering insights in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-7 py-4 bg-white text-[#172B4D] text-[15px] font-bold rounded-xl hover:bg-[#F5F7FB] transition-colors"
            >
              Start for free
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-7 py-4 border border-white/15 text-white text-[15px] font-semibold rounded-xl hover:bg-white/5 transition-colors"
            >
              View pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
