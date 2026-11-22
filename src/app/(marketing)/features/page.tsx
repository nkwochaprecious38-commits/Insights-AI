import Link from "next/link";

const featureGroups = [
  {
    id: "ai",
    label: "AI and Analysis",
    color: "#356AE6",
    features: [
      {
        title: "Natural Language Queries",
        description: "Ask questions about your data in plain language and receive instant analysis, charts, and calculations without writing a single line of code.",
        bullets: ["Plain language interface", "Context-aware follow-ups", "Multi-dataset queries"],
        icon: (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M3 6h14M3 10h9M3 14h6" stroke="#356AE6" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="16" cy="13" r="3" stroke="#356AE6" strokeWidth="1.5" />
            <path d="M18.5 15.5L20 17" stroke="#356AE6" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        title: "Predictive Forecasting",
        description: "Machine learning models trained on your historical data generate accurate forecasts for revenue, demand, churn, and performance metrics.",
        bullets: ["Revenue and sales forecasting", "Demand projection", "Scenario modeling"],
        icon: (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M2 15l4-6 3 4 4-8 4 6" stroke="#356AE6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 7l3 0 0 3" stroke="#356AE6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 1.5" />
          </svg>
        ),
      },
      {
        title: "Anomaly Detection",
        description: "Automated monitoring surfaces unusual changes in your data the moment they occur, with contextual explanations and recommended actions.",
        bullets: ["Real-time monitoring", "Configurable thresholds", "Root cause assistance"],
        icon: (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="8" stroke="#356AE6" strokeWidth="1.5" />
            <path d="M10 6v4M10 13v1" stroke="#356AE6" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        title: "AI Recommendations",
        description: "Evidence-based recommendations derived from your data tell you what actions to consider, ranked by potential impact on your business goals.",
        bullets: ["Data-linked recommendations", "Impact ranking", "Action tracking"],
        icon: (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 2l1.5 4.5H16l-3.5 2.5 1.3 4L10 11l-3.8 2 1.3-4L4 6.5h4.5L10 2z" stroke="#356AE6" strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        title: "Experiment Tracking",
        description: "Design A/B tests, track experiment results, compare model variants, and make decisions grounded in statistical significance.",
        bullets: ["A/B and multivariate tests", "Statistical significance", "Model comparison"],
        icon: (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M6 3v7l-3 7h14l-3-7V3" stroke="#356AE6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7 3h6" stroke="#356AE6" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ),
      },
    ],
  },
  {
    id: "data",
    label: "Data Management",
    color: "#6256C7",
    features: [
      {
        title: "Multi-Source Integration",
        description: "Connect databases, spreadsheets, CRMs, marketing platforms, and cloud services into one unified workspace with 40+ native integrations.",
        bullets: ["40+ native connectors", "CSV and Excel import", "Automated sync"],
        icon: (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="4" r="2" stroke="#6256C7" strokeWidth="1.5" />
            <circle cx="4" cy="16" r="2" stroke="#6256C7" strokeWidth="1.5" />
            <circle cx="16" cy="16" r="2" stroke="#6256C7" strokeWidth="1.5" />
            <path d="M10 6v4M6 15L9 10M14 15L11 10" stroke="#6256C7" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        title: "Data Profiling",
        description: "Automatic profiling of every dataset reveals data quality issues, distribution statistics, and completeness metrics before analysis begins.",
        bullets: ["Quality scoring", "Distribution statistics", "Completeness checks"],
        icon: (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect x="2" y="4" width="16" height="12" rx="2" stroke="#6256C7" strokeWidth="1.5" />
            <path d="M6 8h2M6 12h4M12 8h2M14 12h2" stroke="#6256C7" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        title: "Data Governance",
        description: "Maintain complete audit trails, enforce access controls, and track data lineage across every analysis and report in your workspace.",
        bullets: ["Full audit logging", "Role-based access", "Data lineage tracking"],
        icon: (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 2l7 3v5c0 4-3 7-7 8C6 17 3 14 3 10V5l7-3z" stroke="#6256C7" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M7 10l2 2 4-4" stroke="#6256C7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        title: "Dataset Versioning",
        description: "Track changes to datasets over time, restore previous versions, and understand exactly when and how your data changed.",
        bullets: ["Version history", "One-click restore", "Change diffing"],
        icon: (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="8" stroke="#6256C7" strokeWidth="1.5" />
            <path d="M10 6v4l3 2" stroke="#6256C7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
    ],
  },
  {
    id: "viz",
    label: "Visualization",
    color: "#16A6A1",
    features: [
      {
        title: "Interactive Dashboard Builder",
        description: "Drag and drop KPI cards, charts, and tables into custom dashboards with real-time data refresh and advanced filtering.",
        bullets: ["Drag-and-drop editor", "50+ chart types", "Real-time refresh"],
        icon: (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect x="2" y="2" width="7" height="7" rx="1.5" stroke="#16A6A1" strokeWidth="1.5" />
            <rect x="11" y="2" width="7" height="7" rx="1.5" stroke="#16A6A1" strokeWidth="1.5" />
            <rect x="2" y="11" width="7" height="7" rx="1.5" stroke="#16A6A1" strokeWidth="1.5" />
            <rect x="11" y="11" width="7" height="7" rx="1.5" stroke="#16A6A1" strokeWidth="1.5" strokeOpacity="0.4" />
          </svg>
        ),
      },
      {
        title: "Automated Report Generation",
        description: "AI writes professional reports complete with narrative analysis, key findings, and recommendations based on your actual data.",
        bullets: ["Narrative generation", "Branded export", "Scheduled delivery"],
        icon: (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect x="3" y="2" width="14" height="16" rx="2" stroke="#16A6A1" strokeWidth="1.5" />
            <path d="M7 7h6M7 10h6M7 13h4" stroke="#16A6A1" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        title: "Chart Builder",
        description: "Build any visualization from your data using an intuitive chart editor. Choose from area, bar, line, scatter, pie, funnel, and more.",
        bullets: ["20+ chart types", "Custom styling", "Chart annotations"],
        icon: (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M3 15l4-5 3 3 4-7 3 4" stroke="#16A6A1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 18h14" stroke="#16A6A1" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        title: "KPI Scorecards",
        description: "Track business metrics in clean, shareable scorecards that update automatically and can be embedded in reports or shared via link.",
        bullets: ["Metric tracking", "Trend indicators", "Embeddable cards"],
        icon: (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect x="2" y="5" width="16" height="11" rx="2" stroke="#16A6A1" strokeWidth="1.5" />
            <path d="M7 10h2v3H7zM10 8h2v5h-2zM13 6h2v7h-2z" fill="#16A6A1" fillOpacity="0.3" />
            <path d="M7 10h2v3H7zM10 8h2v5h-2zM13 6h2v7h-2z" stroke="#16A6A1" strokeWidth="1" />
          </svg>
        ),
      },
    ],
  },
  {
    id: "collab",
    label: "Collaboration",
    color: "#269B70",
    features: [
      {
        title: "Team Workspaces",
        description: "Organize datasets, dashboards, and reports into shared team workspaces with granular permissions so everyone works from the same source of truth.",
        bullets: ["Shared workspaces", "Granular permissions", "Activity feeds"],
        icon: (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="8" cy="6" r="3" stroke="#269B70" strokeWidth="1.5" />
            <circle cx="14" cy="8" r="2.5" stroke="#269B70" strokeWidth="1.5" />
            <path d="M2 17c0-3 2.7-5 6-5s6 2 6 5" stroke="#269B70" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M14 11c2 0 4 1.3 4 4" stroke="#269B70" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        title: "Report Sharing",
        description: "Share reports, dashboards, and analysis via secure links or scheduled email delivery. Control who can view, comment, or edit.",
        bullets: ["Secure share links", "Scheduled delivery", "View tracking"],
        icon: (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="16" cy="4" r="2" stroke="#269B70" strokeWidth="1.5" />
            <circle cx="4" cy="10" r="2" stroke="#269B70" strokeWidth="1.5" />
            <circle cx="16" cy="16" r="2" stroke="#269B70" strokeWidth="1.5" />
            <path d="M6 9l8-4M6 11l8 4" stroke="#269B70" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        title: "Notification Alerts",
        description: "Subscribe to anomalies, threshold breaches, and scheduled report delivery. Receive alerts via email, Slack, or in-app notifications.",
        bullets: ["Threshold alerts", "Slack integration", "Custom notification rules"],
        icon: (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 2.5A5.5 5.5 0 0 0 4.5 8v3L3 13h14l-1.5-2V8A5.5 5.5 0 0 0 10 2.5z" stroke="#269B70" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M8 15a2 2 0 0 0 4 0" stroke="#269B70" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ),
      },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-[#0D1117] overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="absolute top-[-80px] left-[-80px] w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle, rgba(53,106,230,0.14) 0%, transparent 70%)" }} />
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <p className="text-xs font-bold text-[#356AE6] uppercase tracking-widest mb-6">Features</p>
          <h1
            className="text-5xl sm:text-[64px] font-black text-white mb-6"
            style={{ fontFamily: "Manrope, sans-serif", letterSpacing: "-0.03em", lineHeight: 1.03 }}
          >
            Every feature you need
            <br />
            to work with data intelligently.
          </h1>
          <p className="text-[17px] text-white/55 leading-relaxed max-w-2xl mx-auto">
            From AI-powered analysis to automated reporting, every capability in Insights AI is built to help business teams move faster and decide smarter.
          </p>
        </div>
      </section>

      {/* Feature groups */}
      {featureGroups.map((group, gi) => (
        <section key={group.id} id={group.id} className={`py-24 ${gi % 2 === 0 ? "bg-white" : "bg-[#F9FAFB]"}`}>
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="mb-12">
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: group.color }}>{group.label}</p>
              <div className="h-px w-full bg-[#E9EAEC]" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {group.features.map((f) => (
                <div
                  key={f.title}
                  className="bg-white rounded-2xl border border-[#E9EAEC] p-6 hover:border-[#D1D5DB] hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)] transition-all duration-200"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: group.color + "12" }}
                  >
                    {f.icon}
                  </div>
                  <h3
                    className="text-[15px] font-bold text-[#0D1117] mb-2.5"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    {f.title}
                  </h3>
                  <p className="text-[13.5px] text-[#6B7280] leading-relaxed mb-5">{f.description}</p>
                  <ul className="space-y-2">
                    {f.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2.5">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-5" stroke={group.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-[13px] text-[#374151]">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-28 bg-[#172B4D] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] opacity-10" style={{ background: "radial-gradient(circle, #356AE6 0%, transparent 70%)" }} />
        <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <h2
            className="text-5xl font-black text-white mb-6"
            style={{ fontFamily: "Manrope, sans-serif", letterSpacing: "-0.03em" }}
          >
            Start using every feature today.
          </h2>
          <p className="text-[17px] text-white/55 mb-10 leading-relaxed">
            All features are available on every plan. Start for free and scale when you need to.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-7 py-4 bg-white text-[#172B4D] text-[15px] font-bold rounded-xl hover:bg-[#F5F7FB] transition-colors"
            >
              Get started free
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
