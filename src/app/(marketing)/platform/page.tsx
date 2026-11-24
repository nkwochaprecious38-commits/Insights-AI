import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  container, display, Eyebrow, PageHero, PrimaryLink, SecondaryLink, CtaBand, Window,
  LinePreview, BarsPreview, ChatPreview, TablePreview, StatusPreview, KpiPreview,
} from "@/components/marketing/kit";

export const metadata = { title: "Platform | Insights AI" };

const MODULES = [
  {
    id: "integration", name: "Data Integration",
    title: "Bring business data together in one place",
    body: "Upload CSV, Excel, and JSON files today, and connect databases and cloud storage as integrations become available. Every dataset is checked on arrival so you know what you are working with before analysis begins.",
    points: ["Drag and drop uploads with validation", "Column and data type detection", "Missing value and duplicate checks"],
    feature: "/features#smart-upload", app: "/dashboard/sources",
    preview: <Window title="Datasets"><TablePreview head={["Dataset", "Source", "Status"]} rows={[["sales_2025.csv", "Upload", "Ready"], ["customers.xlsx", "Upload", "Ready"], ["orders.json", "Upload", "Checking"]]} /></Window>,
  },
  {
    id: "analysis", name: "AI Data Analysis",
    title: "Ask questions and get answers from your own data",
    body: "Ask in plain language. Insights AI selects the relevant dataset, runs the calculation, and explains the result with the chart, the assumptions, and a suggested next step.",
    points: ["Calculations run on your actual data", "Charts, assumptions, and follow up questions", "Clear separation of facts and explanations"],
    feature: "/features#ai-data-analyst", app: "/dashboard/analyst",
    preview: <Window title="AI Data Analyst"><ChatPreview q="Which expenses are growing faster than revenue?" a="Software and contractor costs grew faster than revenue over the period. Both are calculated from the expense and revenue columns by month." note="Assumption: expenses are grouped by category. Rows without a category are excluded." /></Window>,
  },
  {
    id: "predictive", name: "Predictive Intelligence",
    title: "Use history to see what may happen next",
    body: "Forecasts are generated only where the data supports them. Each forecast shows an uncertainty range, error metrics, and the assumptions behind it, and observed values stay visually separate from predictions.",
    points: ["Check for sufficient history before modeling", "Prediction intervals on every forecast", "Stated limitations, never guaranteed outcomes"],
    feature: "/features#predictive-analytics", app: "/dashboard/models",
    preview: <Window title="Revenue forecast"><LinePreview title="Observed and forecast" forecast accent="blue" /></Window>,
  },
  {
    id: "models", name: "Model Development",
    title: "Build, evaluate, and compare models with guidance",
    body: "Choose a dataset and a target, then compare candidate models against a baseline. Results are explained in business terms, with feature importance and the metrics that fit the task.",
    points: ["Classification, regression, and time series", "Baseline and model comparison", "Feature importance and explanations"],
    feature: "/features#model-builder", app: "/dashboard/models",
    preview: <Window title="Model comparison"><TablePreview head={["Model", "MAE", "RMSE"]} rows={[["Baseline", "Reference", "Reference"], ["Candidate A", "Measured", "Measured"], ["Candidate B", "Measured", "Measured"]]} /></Window>,
  },
  {
    id: "experiments", name: "AI Experimentation",
    title: "Test approaches and keep a record of what worked",
    body: "Run experiments across models, settings, and analysis prompts. History, configurations, and results stay together so decisions can be reviewed later.",
    points: ["Experiment history and versions", "Side by side evaluation results", "Prompt testing for AI analysis"],
    feature: "/features#experimentation", app: "/dashboard/experiments",
    preview: <Window title="Experiments"><TablePreview head={["Experiment", "Version", "Status"]} rows={[["Churn baseline", "v1", "Complete"], ["Churn with tenure", "v2", "Complete"], ["Forecast tuning", "v1", "Running"]]} /></Window>,
  },
  {
    id: "monitoring", name: "Model Monitoring",
    title: "Keep watching models after they go live",
    body: "Track performance, prediction volume, data drift, feature drift, latency, and error rates over time, with alerts when something moves outside the range you set.",
    points: ["Performance and drift over time", "Model versions and alerts", "Latency and error tracking"],
    feature: "/features#model-monitoring", app: "/dashboard/monitoring",
    preview: <Window title="Model health"><StatusPreview title="Deployed models" rows={[["Churn model v2", "Healthy", "ok"], ["Demand forecast v1", "Drift detected", "warn"], ["Lead scoring v3", "Healthy", "ok"]]} /></Window>,
  },
  {
    id: "governance", name: "AI Governance",
    title: "Manage AI assets with ownership and an audit trail",
    body: "Register models, record documentation and owners, route approvals, and review who did what and when. Access is controlled by role.",
    points: ["Asset registry and model documentation", "Approval workflows and audit trail", "Risk assessments and access controls"],
    feature: "/features#governance", app: "/dashboard/governance",
    preview: <Window title="Approvals"><StatusPreview title="Review queue" rows={[["Churn model v2", "Approved", "ok"], ["Demand forecast v2", "In review", "info"], ["Lead scoring v4", "Changes requested", "warn"]]} /></Window>,
  },
  {
    id: "reporting", name: "Reporting and Visualization",
    title: "Turn results into dashboards and reports people read",
    body: "Build dashboards from metric cards and charts, filter by date range, and generate reports where every figure traces back to the analysis that produced it.",
    points: ["Interactive dashboards with filters", "Reports with findings and recommended actions", "Export to PDF and CSV where appropriate"],
    feature: "/features#reports", app: "/dashboard/reports",
    preview: <Window title="Executive dashboard"><div className="space-y-4"><KpiPreview items={[["Revenue", "Sample"], ["Orders", "Sample"]]} /><BarsPreview title="Revenue by region" rows={[["North", 88], ["South", 62], ["East", 47], ["West", 33]]} /></div></Window>,
  },
];

const FLOW = ["Integrate", "Analyze", "Predict", "Build", "Experiment", "Monitor", "Govern", "Report"];

export default function PlatformPage() {
  return (
    <div className="bg-white text-[#172B4D]">
      <PageHero
        eyebrow="Platform"
        title="A unified platform for business intelligence and AI powered analytics."
        body="Insights AI connects data preparation, analysis, predictive modeling, reporting, and decision making, so each step builds on the one before it."
      >
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <PrimaryLink href="/signup">Get Started</PrimaryLink>
          <SecondaryLink href="/features">See All Features</SecondaryLink>
        </div>
      </PageHero>

      {/* flow */}
      <section className="border-b border-[#E4E7EC] bg-white py-10">
        <div className={container}>
          <ol className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3 text-sm font-semibold text-[#475467]">
            {FLOW.map((f, i) => (
              <li key={f} className="flex items-center gap-3">
                <a href={`#${MODULES[i].id}`} className="rounded-full bg-[#F5F7FB] px-4 py-1.5 transition-colors hover:bg-[#EDF3FF] hover:text-[#356AE6]">{f}</a>
                {i < FLOW.length - 1 && <ArrowRight className="hidden h-3.5 w-3.5 text-[#D0D5DD] sm:block" />}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {MODULES.map((m, i) => (
        <section key={m.id} id={m.id} className={`scroll-mt-20 py-20 sm:py-24 ${i % 2 ? "bg-[#F5F7FB]" : "bg-white"}`}>
          <div className={`${container} grid items-center gap-12 lg:grid-cols-2 lg:gap-16`}>
            <div className={i % 2 ? "lg:order-2" : ""}>
              <Eyebrow>{m.name}</Eyebrow>
              <h2 style={display} className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">{m.title}</h2>
              <p className="mt-5 text-lg leading-8 text-[#667085]">{m.body}</p>
              <ul className="mt-7 space-y-3">
                {m.points.map((p) => (
                  <li key={p} className="flex gap-3 text-[15px] leading-6 text-[#344054]">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#356AE6]" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold">
                <Link href={m.feature} className="inline-flex items-center gap-1.5 text-[#356AE6] hover:text-[#2458D0]">Read about this feature <ArrowRight className="h-3.5 w-3.5" /></Link>
                <Link href={m.app} className="inline-flex items-center gap-1.5 text-[#475467] hover:text-[#172B4D]">Open in the app <ArrowRight className="h-3.5 w-3.5" /></Link>
              </div>
            </div>
            <div className={i % 2 ? "lg:order-1" : ""}>{m.preview}</div>
          </div>
        </section>
      ))}

      <div className="pt-24 sm:pt-28">
        <CtaBand title="See how it works with your own data." body="Create an account, upload a file, and review the automated analysis." cta="Get Started" />
      </div>
    </div>
  );
}
