import Link from "next/link";
import {
  ArrowRight,
  MessageSquareText,
  LineChart,
  FileText,
  LayoutDashboard,
  Radar,
  Lightbulb,
  Database,
  Wallet,
  TrendingUp,
  Megaphone,
  Settings2,
  HeartHandshake,
  Briefcase,
  Check,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Shared layout helpers                                               */
/* ------------------------------------------------------------------ */

const container = "mx-auto w-full max-w-6xl px-6 sm:px-8";
const display = { fontFamily: "Manrope, sans-serif" } as const;

function SectionHeading({
  eyebrow,
  title,
  body,
  align = "center",
  light = false,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className={`mb-4 text-sm font-semibold ${light ? "text-[#8FB0FF]" : "text-[#356AE6]"}`}>{eyebrow}</p>
      <h2
        style={display}
        className={`text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-[#172B4D]"
        }`}
      >
        {title}
      </h2>
      {body && (
        <p className={`mt-5 text-lg leading-8 ${light ? "text-white/70" : "text-[#667085]"}`}>{body}</p>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const PROBLEMS = [
  { title: "Data without answers", body: "Teams collect large volumes of information but struggle to understand what it means for the business." },
  { title: "Slow, manual reporting", body: "Reports take days to prepare because analysis still depends on manual spreadsheet work." },
  { title: "Disconnected sources", body: "Opportunities stay hidden when sales, finance, and marketing data live in separate places." },
  { title: "Decisions without forecasts", body: "Plans are set on instinct when there is no reliable view of what may happen next." },
  { title: "Specialist skills required", body: "Meaningful analysis often requires technical expertise that most teams do not have in house." },
  { title: "No single view of performance", body: "Leaders lack one place to monitor how the organization is performing over time." },
];

const CAPABILITIES = [
  { icon: MessageSquareText, title: "AI Data Analyst", body: "Ask questions in plain language. Answers come from calculations on your own datasets, with charts and assumptions shown." },
  { icon: LineChart, title: "Predictive Analytics", body: "Generate forecasts from historical data, with confidence intervals and model error metrics beside every prediction." },
  { icon: FileText, title: "Automated Reporting", body: "Turn analysis into reports that include findings, metrics, visualizations, and recommended actions." },
  { icon: LayoutDashboard, title: "Interactive Dashboards", body: "Build dashboards with metric cards and charts, apply filters, change date ranges, and share with your team." },
  { icon: Radar, title: "Anomaly Detection", body: "Detect unusual changes in revenue, expenses, and customer behavior, with alert thresholds you control." },
  { icon: Lightbulb, title: "AI Recommendations", body: "Receive practical next steps that link back to the evidence and explain why each one was suggested." },
];

const STEPS = [
  { n: "01", title: "Connect or upload your data", body: "Bring in CSV, Excel, and JSON files, or connect a database. Structure and data quality are checked on arrival." },
  { n: "02", title: "Let Insights AI analyze", body: "The platform profiles every column, finds trends, outliers, and correlations, and summarizes what deserves attention." },
  { n: "03", title: "Turn findings into decisions", body: "Create forecasts, dashboards, and reports, then act on recommendations that point to their supporting data." },
];

const USE_CASES = [
  { icon: Wallet, title: "Finance", body: "Track revenue, expenses, and cash flow, and see which costs are growing faster than income." },
  { icon: TrendingUp, title: "Sales", body: "Forecast revenue, find conversion gaps, and understand which products and channels perform." },
  { icon: Megaphone, title: "Marketing", body: "Compare campaigns and channels by acquisition cost, conversion rate, and return." },
  { icon: Settings2, title: "Operations", body: "Monitor efficiency, demand patterns, and resource use across the business." },
  { icon: HeartHandshake, title: "Customer Experience", body: "Understand behavior, spot churn risk, and read satisfaction patterns." },
  { icon: Briefcase, title: "Executive Management", body: "See strategic metrics, forecasts, and opportunities in one central view." },
];

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  return (
    <div className="bg-white text-[#172B4D]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#EDF3FF] via-[#F5F8FF] to-white">
        <div className={`${container} pt-36 text-center sm:pt-40`}>
          <p className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-[#D6E2FF] bg-white px-4 py-1.5 text-sm font-medium text-[#356AE6]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#16A6A1]" />
            Business intelligence and decision intelligence
          </p>

          <h1
            style={display}
            className="mx-auto max-w-4xl text-4xl font-extrabold leading-[1.1] tracking-tight text-[#172B4D] sm:text-5xl lg:text-[64px]"
          >
            See Beyond the Numbers.{" "}
            <span className="text-[#356AE6]">Discover What Your Data Is Telling You.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#667085]">
            Insights AI transforms complex business data into clear insights, predictive forecasts, and actionable
            recommendations. Understand performance, uncover opportunities, and make confident decisions with AI.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/signup"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#356AE6] px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-[#2458D0] sm:w-auto"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/platform"
              className="inline-flex w-full items-center justify-center rounded-xl border border-[#D0D5DD] bg-white px-7 py-3.5 text-base font-semibold text-[#172B4D] transition-colors hover:bg-[#F5F7FB] sm:w-auto"
            >
              Explore the Platform
            </Link>
          </div>
        </div>

        {/* Dashboard preview */}
        <div className={`${container} mt-16 pb-24 sm:mt-20`}>
          <DashboardPreview />
          <p className="mt-5 text-center text-sm text-[#667085]">
            Product preview using sample data. Forecast values are model generated and shown with an uncertainty range.
          </p>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="bg-white py-24 sm:py-28">
        <div className={container}>
          <SectionHeading
            eyebrow="The challenge"
            title="Your business has the data. Do you have the insights?"
            body="Organizations collect valuable information every day, yet most of it never becomes a decision. The gap is rarely the data itself. It is the time and skill needed to understand it."
          />

          <div className="mt-16 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {PROBLEMS.map((p, i) => (
              <div key={p.title} className="border-t border-[#E4E7EC] pt-6">
                <span className="text-sm font-semibold text-[#356AE6]">{String(i + 1).padStart(2, "0")}</span>
                <h3 style={display} className="mt-3 text-lg font-bold text-[#172B4D]">
                  {p.title}
                </h3>
                <p className="mt-2 leading-7 text-[#667085]">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="bg-[#F5F7FB] py-24 sm:py-28">
        <div className={container}>
          <SectionHeading
            eyebrow="The platform"
            title="One intelligent workspace. Better business decisions."
            body="Everything from data upload to forecasting and reporting lives in a single place, so analysis stays connected to the data behind it."
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-2xl border border-[#E4E7EC] bg-white p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EDF3FF] text-[#356AE6]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 style={display} className="mt-6 text-lg font-bold text-[#172B4D]">
                  {title}
                </h3>
                <p className="mt-3 leading-7 text-[#667085]">{body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/features" className="inline-flex items-center gap-2 font-semibold text-[#356AE6] hover:text-[#2458D0]">
              See all features
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white py-24 sm:py-28">
        <div className={container}>
          <SectionHeading eyebrow="How it works" title="From raw data to a confident decision in three steps" />

          <div className="relative mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
            <div className="absolute left-[16.6%] right-[16.6%] top-6 hidden h-px bg-[#E4E7EC] md:block" />
            {STEPS.map((s) => (
              <div key={s.n} className="relative text-center">
                <div
                  style={display}
                  className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#172B4D] text-sm font-bold text-white ring-8 ring-white"
                >
                  {s.n}
                </div>
                <h3 style={display} className="mt-6 text-xl font-bold text-[#172B4D]">
                  {s.title}
                </h3>
                <p className="mx-auto mt-3 max-w-xs leading-7 text-[#667085]">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT PREVIEW */}
      <section className="bg-[#172B4D] py-24 sm:py-28">
        <div className={container}>
          <SectionHeading
            light
            eyebrow="Inside the product"
            title="Answers you can trace back to your data"
            body="Every response from the AI Data Analyst shows the calculation, the data it used, and the assumptions behind it."
          />

          <div className="mt-16 grid items-start gap-8 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <AnalystPreview />
            </div>
            <div className="space-y-4 lg:col-span-2">
              <DataQualityPreview />
              <ul className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-6">
                {[
                  "Observed data and model predictions are always labeled separately",
                  "Numbers come from calculations, never from language model estimates",
                  "Assumptions and limitations are stated with each forecast",
                ].map((t) => (
                  <li key={t} className="flex gap-3 text-[15px] leading-6 text-white/80">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#16A6A1]" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="bg-white py-24 sm:py-28">
        <div className={container}>
          <SectionHeading
            eyebrow="Use cases"
            title="Built for every team that depends on data"
            body="Each function gets analysis that fits the questions it asks most often."
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {USE_CASES.map(({ icon: Icon, title, body }) => (
              <Link
                key={title}
                href="/solutions"
                className="group rounded-2xl border border-[#E4E7EC] bg-white p-8 transition-colors hover:border-[#B8CDFB] hover:bg-[#F8FAFF]"
              >
                <Icon className="h-6 w-6 text-[#356AE6]" />
                <h3 style={display} className="mt-5 text-lg font-bold text-[#172B4D]">
                  {title}
                </h3>
                <p className="mt-2 leading-7 text-[#667085]">{body}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#356AE6]">
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white pb-24 sm:pb-28">
        <div className={container}>
          <div className="rounded-3xl bg-[#EDF3FF] px-6 py-16 text-center sm:px-16 sm:py-20">
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#356AE6]">
              <Database className="h-5 w-5" />
            </div>
            <h2 style={display} className="mx-auto max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-[#172B4D] sm:text-4xl">
              Make every business decision more informed.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-[#667085]">
              Bring your data into focus and uncover the insights that move your business forward.
            </p>
            <Link
              href="/signup"
              className="mt-9 inline-flex items-center justify-center gap-2 rounded-xl bg-[#356AE6] px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-[#2458D0]"
            >
              Start Analyzing Your Data
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Product previews (static illustrations using clearly labeled sample */
/* data)                                                               */
/* ------------------------------------------------------------------ */

const OBSERVED = [42, 45, 44, 49, 53, 51, 57, 61, 60, 66, 70, 73];
const FORECAST = [73, 76, 79, 82, 85];

function DashboardPreview() {
  const W = 560;
  const H = 220;
  const pad = { l: 8, r: 8, t: 16, b: 16 };
  const total = OBSERVED.length + FORECAST.length - 1;
  const min = 35;
  const max = 100;
  const x = (i: number) => pad.l + (i / total) * (W - pad.l - pad.r);
  const y = (v: number) => pad.t + (1 - (v - min) / (max - min)) * (H - pad.t - pad.b);

  const obsPath = OBSERVED.map((v, i) => `${i === 0 ? "M" : "L"}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(" ");
  const fcStart = OBSERVED.length - 1;
  const fcPath = FORECAST.map((v, i) => `${i === 0 ? "M" : "L"}${x(fcStart + i).toFixed(1)},${y(v).toFixed(1)}`).join(" ");
  const upper = FORECAST.map((v, i) => `${i === 0 ? "M" : "L"}${x(fcStart + i).toFixed(1)},${y(v + i * 2.2).toFixed(1)}`).join(" ");
  const lower = [...FORECAST]
    .map((v, i) => ({ v, i }))
    .reverse()
    .map(({ v, i }) => `L${x(fcStart + i).toFixed(1)},${y(v - i * 2.2).toFixed(1)}`)
    .join(" ");
  const band = `${upper} ${lower} Z`;
  const areaPath = `${obsPath} L${x(fcStart).toFixed(1)},${H - pad.b} L${x(0).toFixed(1)},${H - pad.b} Z`;

  const kpis = [
    { label: "Revenue", value: "$1.24M", delta: "+8.2%" },
    { label: "Orders", value: "18,420", delta: "+5.1%" },
    { label: "Conversion", value: "3.6%", delta: "+0.4 pts" },
    { label: "Churn risk", value: "142", delta: "accounts" },
  ];

  return (
    <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-[#E4E7EC] bg-white shadow-[0_24px_60px_-20px_rgba(23,43,77,0.25)]">
      {/* window bar */}
      <div className="flex items-center gap-2 border-b border-[#E4E7EC] bg-[#F9FAFB] px-5 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#E4E7EC]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#E4E7EC]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#E4E7EC]" />
        <span className="ml-3 text-xs font-medium text-[#667085]">Executive overview · Sample workspace</span>
      </div>

      <div className="p-4 sm:p-6">
        {/* KPIs */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {kpis.map((k) => (
            <div key={k.label} className="rounded-xl border border-[#E4E7EC] p-4 text-left">
              <p className="text-xs font-medium text-[#667085]">{k.label}</p>
              <p style={display} className="mt-1.5 text-xl font-extrabold text-[#172B4D] sm:text-2xl">
                {k.value}
              </p>
              <p className="mt-1 text-xs font-semibold text-[#269B70]">{k.delta}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          {/* Chart */}
          <div className="rounded-xl border border-[#E4E7EC] p-4 text-left sm:p-5 lg:col-span-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p style={display} className="text-sm font-bold text-[#172B4D]">
                Revenue trend and forecast
              </p>
              <div className="flex items-center gap-4 text-xs text-[#667085]">
                <span className="flex items-center gap-1.5">
                  <span className="h-0.5 w-4 bg-[#356AE6]" />
                  Observed
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-0 w-4 border-t-2 border-dashed border-[#6256C7]" />
                  Forecast
                </span>
              </div>
            </div>
            <svg viewBox={`0 0 ${W} ${H}`} className="mt-3 h-auto w-full" role="img" aria-label="Revenue trend with forecast">
              <defs>
                <linearGradient id="obsFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#356AE6" stopOpacity="0.16" />
                  <stop offset="100%" stopColor="#356AE6" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[0, 1, 2, 3].map((g) => (
                <line key={g} x1={pad.l} x2={W - pad.r} y1={pad.t + (g * (H - pad.t - pad.b)) / 3} y2={pad.t + (g * (H - pad.t - pad.b)) / 3} stroke="#EEF0F4" />
              ))}
              <line x1={x(fcStart)} x2={x(fcStart)} y1={pad.t} y2={H - pad.b} stroke="#D0D5DD" strokeDasharray="3 4" />
              <path d={areaPath} fill="url(#obsFill)" />
              <path d={band} fill="#6256C7" fillOpacity="0.12" />
              <path d={obsPath} fill="none" stroke="#356AE6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d={fcPath} fill="none" stroke="#6256C7" strokeWidth="2.5" strokeDasharray="6 5" strokeLinecap="round" />
              <circle cx={x(fcStart)} cy={y(OBSERVED[fcStart])} r="4.5" fill="#fff" stroke="#356AE6" strokeWidth="2.5" />
            </svg>
          </div>

          {/* Insight panel */}
          <div className="rounded-xl border border-[#E4E7EC] bg-[#F5F8FF] p-5 text-left">
            <p className="text-xs font-semibold text-[#356AE6]">AI generated insight</p>
            <p className="mt-3 text-sm leading-6 text-[#344054]">
              Revenue grew in 9 of the last 12 months. Paid search contributed the largest share of the increase.
            </p>
            <div className="mt-5 space-y-3">
              {[
                { l: "Forecast confidence", v: "Interval shown", w: "72%", c: "#6256C7" },
                { l: "Data quality", v: "Checked", w: "91%", c: "#16A6A1" },
                { l: "Target progress", v: "On track", w: "84%", c: "#356AE6" },
              ].map((b) => (
                <div key={b.l}>
                  <div className="flex justify-between text-xs">
                    <span className="font-medium text-[#475467]">{b.l}</span>
                    <span className="text-[#667085]">{b.v}</span>
                  </div>
                  <div className="mt-1.5 h-1.5 rounded-full bg-white">
                    <div className="h-1.5 rounded-full" style={{ width: b.w, backgroundColor: b.c }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AnalystPreview() {
  const bars = [
    { l: "Paid search", v: 92 },
    { l: "Email", v: 68 },
    { l: "Organic", v: 55 },
    { l: "Referral", v: 31 },
  ];
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
      <div className="flex items-center justify-between border-b border-[#E4E7EC] px-5 py-3.5">
        <p style={display} className="text-sm font-bold text-[#172B4D]">
          AI Data Analyst
        </p>
        <span className="rounded-full bg-[#F5F7FB] px-3 py-1 text-xs font-medium text-[#667085]">Dataset: sample_sales.csv</span>
      </div>
      <div className="space-y-5 p-5 sm:p-6">
        <div className="ml-auto max-w-sm rounded-2xl rounded-tr-md bg-[#356AE6] px-4 py-3 text-sm leading-6 text-white">
          Which marketing channel generated the most revenue?
        </div>

        <div className="max-w-xl">
          <p className="text-sm leading-6 text-[#344054]">
            Paid search generated the most revenue in the selected period. The ranking below is calculated from the revenue column grouped by channel.
          </p>

          <div className="mt-4 rounded-xl border border-[#E4E7EC] p-4">
            <p className="text-xs font-semibold text-[#667085]">Revenue by channel (sample, indexed)</p>
            <div className="mt-3 space-y-2.5">
              {bars.map((b, i) => (
                <div key={b.l} className="flex items-center gap-3 text-xs">
                  <span className="w-20 flex-shrink-0 text-[#475467]">{b.l}</span>
                  <div className="h-2.5 flex-1 rounded-full bg-[#F2F4F7]">
                    <div className="h-2.5 rounded-full" style={{ width: `${b.v}%`, backgroundColor: i === 0 ? "#356AE6" : "#A9C0F5" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl bg-[#F5F7FB] p-4">
              <p className="text-xs font-semibold text-[#172B4D]">Assumptions</p>
              <p className="mt-1.5 text-xs leading-5 text-[#667085]">Revenue is summed per channel. Rows with missing channel values are excluded.</p>
            </div>
            <div className="rounded-xl bg-[#F5F7FB] p-4">
              <p className="text-xs font-semibold text-[#172B4D]">Suggested next step</p>
              <p className="mt-1.5 text-xs leading-5 text-[#667085]">Compare cost per acquisition across channels before shifting budget.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DataQualityPreview() {
  const rows = [
    { l: "Rows analyzed", v: "Detected on upload" },
    { l: "Missing values", v: "Flagged by column" },
    { l: "Duplicate records", v: "Counted and listed" },
    { l: "Outliers", v: "Marked in each column" },
  ];
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <p style={display} className="text-sm font-bold text-white">
        Automated data analysis
      </p>
      <dl className="mt-4 divide-y divide-white/10">
        {rows.map((r) => (
          <div key={r.l} className="flex items-center justify-between gap-4 py-3 text-sm">
            <dt className="text-white/60">{r.l}</dt>
            <dd className="font-medium text-white">{r.v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
