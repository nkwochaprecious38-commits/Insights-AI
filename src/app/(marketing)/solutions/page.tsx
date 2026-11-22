import Link from "next/link";

const solutions = [
  {
    id: "finance",
    color: "#172B4D",
    label: "Finance",
    summary: "Revenue forecasting, expense analysis, and cash flow intelligence for finance teams.",
    capabilities: [
      "Revenue trend analysis and quarterly forecasting",
      "Expense categorization and variance reporting",
      "Cash flow projection and working capital modeling",
      "Budget vs. actual performance dashboards",
      "Financial anomaly detection and alerts",
      "Automated CFO-ready report generation",
    ],
  },
  {
    id: "sales",
    color: "#356AE6",
    label: "Sales",
    summary: "Pipeline forecasting, conversion optimization, and territory performance analysis.",
    capabilities: [
      "Sales pipeline forecast with confidence intervals",
      "Lead-to-close conversion funnel analysis",
      "Territory and rep performance benchmarking",
      "Customer lifetime value scoring",
      "Deal risk identification and prioritization",
      "Quota attainment tracking and projection",
    ],
  },
  {
    id: "marketing",
    color: "#6256C7",
    label: "Marketing",
    summary: "Campaign attribution, channel ROI, and customer acquisition cost intelligence.",
    capabilities: [
      "Multi-touch attribution modeling",
      "Channel-level ROI and ROAS analysis",
      "Customer acquisition cost tracking",
      "Campaign performance comparison",
      "Audience segmentation and behavior analysis",
      "Marketing spend optimization recommendations",
    ],
  },
  {
    id: "operations",
    color: "#16A6A1",
    label: "Operations",
    summary: "Demand planning, resource utilization, and process efficiency optimization.",
    capabilities: [
      "Demand forecasting and inventory planning",
      "Resource utilization and capacity analysis",
      "Supply chain performance monitoring",
      "Operational bottleneck identification",
      "Process efficiency benchmarking",
      "Vendor and supplier performance tracking",
    ],
  },
  {
    id: "cx",
    color: "#269B70",
    label: "Customer Experience",
    summary: "Churn prediction, satisfaction analysis, and customer behavior segmentation.",
    capabilities: [
      "Churn prediction with intervention recommendations",
      "Customer satisfaction and NPS trend analysis",
      "Behavioral segmentation and cohort analysis",
      "Support ticket trend detection",
      "Product usage and feature adoption tracking",
      "Customer health scoring",
    ],
  },
  {
    id: "executive",
    color: "#E6A23C",
    label: "Executive",
    summary: "Cross-organization performance visibility, strategic KPI tracking, and board reporting.",
    capabilities: [
      "Executive KPI dashboard with drill-down",
      "Cross-departmental performance comparison",
      "Strategic goal tracking and OKR reporting",
      "Board-ready report generation",
      "Competitive benchmarking analysis",
      "AI-generated executive briefings",
    ],
  },
];

export default function SolutionsPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-white border-b border-[#F3F4F6]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <p className="text-xs font-bold text-[#356AE6] uppercase tracking-widest mb-6">Solutions</p>
          <h1
            className="text-5xl sm:text-6xl font-black text-[#0D1117] mb-6"
            style={{ fontFamily: "Manrope, sans-serif", letterSpacing: "-0.03em", lineHeight: 1.03 }}
          >
            Built for every business function.
          </h1>
          <p className="text-[17px] text-[#6B7280] leading-relaxed max-w-2xl mx-auto">
            Whether you lead finance, sales, marketing, or the entire organization, Insights AI delivers the analysis and intelligence your function needs to perform.
          </p>
        </div>
      </section>

      {/* Solution cards */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {solutions.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="bg-white rounded-2xl border border-[#E9EAEC] p-6 hover:border-[#D1D5DB] hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)] transition-all duration-200 group block"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-xl" style={{ background: s.color }} />
                  <h3
                    className="text-[15px] font-bold text-[#0D1117]"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    {s.label}
                  </h3>
                </div>
                <p className="text-[13.5px] text-[#6B7280] leading-relaxed mb-4">{s.summary}</p>
                <div
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold transition-colors group-hover:gap-2.5"
                  style={{ color: s.color }}
                >
                  Explore {s.label} solutions
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Solution detail sections */}
      {solutions.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`py-24 ${i % 2 === 0 ? "bg-white" : "bg-[#F9FAFB]"}`}
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl" style={{ background: s.color }} />
                  <p
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{ color: s.color }}
                  >
                    {s.label}
                  </p>
                </div>
                <h2
                  className="text-4xl font-black text-[#0D1117] mb-5"
                  style={{ fontFamily: "Manrope, sans-serif", letterSpacing: "-0.03em", lineHeight: 1.1 }}
                >
                  Intelligence built for
                  <br />
                  {s.label} teams.
                </h2>
                <p className="text-[16px] text-[#6B7280] leading-relaxed mb-8">{s.summary}</p>
                <Link
                  href="/signup"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-[14px] font-semibold transition-opacity hover:opacity-90"
                  style={{ background: s.color }}
                >
                  Get started free
                </Link>
              </div>
              <div className="bg-white rounded-2xl border border-[#E9EAEC] p-7 shadow-[0_4px_24px_rgba(0,0,0,0.05)]">
                <p className="text-[13px] font-bold text-[#0D1117] mb-5" style={{ fontFamily: "Manrope, sans-serif" }}>
                  What you can do:
                </p>
                <ul className="space-y-3.5">
                  {s.capabilities.map((c) => (
                    <li key={c} className="flex items-start gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: s.color + "15" }}
                      >
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5l2 2 4-4" stroke={s.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span className="text-[14px] text-[#374151] leading-relaxed">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-28 bg-[#0D1117] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <h2
            className="text-5xl font-black text-white mb-6"
            style={{ fontFamily: "Manrope, sans-serif", letterSpacing: "-0.03em" }}
          >
            Start with the solution
            <br />
            your team needs most.
          </h2>
          <p className="text-[17px] text-white/55 mb-10 leading-relaxed">
            Connect your data and have your first insights ready in minutes.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#356AE6] text-white text-[15px] font-bold rounded-xl hover:bg-[#2458D0] transition-colors"
          >
            Get started free
          </Link>
        </div>
      </section>
    </div>
  );
}
