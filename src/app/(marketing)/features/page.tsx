import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { container, display, Eyebrow, PageHero, PrimaryLink, SecondaryLink, CtaBand, Window, LinePreview, BarsPreview, ChatPreview, TablePreview, KpiPreview, HeatPreview, FunnelPreview, StatusPreview } from "@/components/marketing/kit";

export const metadata = { title: "Features | Insights AI" };

type Feature = { id: string; name: string; body: string; points: string[]; app: string; preview: React.ReactNode };
type Group = { label: string; intro: string; items: Feature[] };

const GROUPS: Group[] = [
  {
    label: "Data and analysis", intro: "Bring data in, understand it, and ask questions about it.",
    items: [
      { id: "ai-data-analyst", name: "AI Data Analyst", body: "Ask questions about a selected dataset in plain language. Numbers come from calculations on your data, and each answer shows its chart, assumptions, and suggested next steps.", points: ["Calculations run on real data", "Assumptions stated with every answer", "Follow up questions in the same thread"], app: "/dashboard/analyst",
        preview: <Window title="AI Data Analyst"><ChatPreview q="Which customers have the highest lifetime value?" a="The top ten customers are listed below, ranked by total order value in the selected dataset." note="Calculation: sum of order value per customer." /></Window> },
      { id: "smart-upload", name: "Smart Data Upload", body: "Upload CSV, Excel, and JSON files with validation and progress. Preview the data before analysis and review detected columns and types.", points: ["Drag and drop with file validation", "Column and type detection", "Dataset preview and management"], app: "/dashboard/sources",
        preview: <Window title="Upload"><TablePreview head={["Column", "Detected type", "Missing"]} rows={[["order_date", "Date", "Counted"], ["revenue", "Number", "Counted"], ["channel", "Category", "Counted"]]} /></Window> },
      { id: "automated-analysis", name: "Automated Data Analysis", body: "When a dataset arrives, Insights AI profiles its structure, statistics, outliers, correlations, and trends, then summarizes what deserves attention.", points: ["Structure, types, and quality summary", "Outliers and correlations", "Written summary of key patterns"], app: "/dashboard/analysis",
        preview: <Window title="Data quality"><StatusPreview title="Dataset checks" rows={[["Missing values", "Reviewed", "info"], ["Duplicate records", "Reviewed", "info"], ["Outliers", "Flagged", "warn"]]} /></Window> },
      { id: "visualization", name: "Data Visualization", body: "Create bar, line, area, pie, scatter, histogram, heatmap, and funnel charts, plus KPI cards. Charts are interactive and resize to any screen.", points: ["Core chart types and KPI cards", "Interactive and responsive", "Built from your analysis results"], app: "/dashboard/dashboards",
        preview: <Window title="Charts"><HeatPreview title="Activity by day" /></Window> },
    ],
  },
  {
    label: "Prediction and anomalies", intro: "Look ahead, and notice when something changes.",
    items: [
      { id: "predictive-analytics", name: "Predictive Analytics", body: "Generate forecasts where the history supports them. Each forecast shows an interval, error metrics, and assumptions, with predictions kept visually apart from observed data.", points: ["History checked before modeling", "Prediction intervals shown", "Limitations explained"], app: "/dashboard/models",
        preview: <Window title="Forecast"><LinePreview title="Observed and predicted" forecast accent="indigo" /></Window> },
      { id: "sales-forecasting", name: "Sales Forecasting", body: "Forecast sales and revenue from historical records, and compare model results against a simple baseline so you can judge whether the model adds value.", points: ["Time series forecasting", "Baseline comparison", "MAE and RMSE reported"], app: "/dashboard/models",
        preview: <Window title="Sales forecast"><LinePreview title="Monthly sales" forecast accent="blue" /></Window> },
      { id: "churn", name: "Customer Churn Prediction", body: "Estimate which customers are likely to leave and see which factors contribute, so retention work can focus on the accounts that matter.", points: ["Classification with evaluation metrics", "Feature importance", "Prediction explanations"], app: "/dashboard/models",
        preview: <Window title="Churn drivers"><BarsPreview title="Contributing factors" rows={[["Support tickets", 84], ["Tenure", 61], ["Usage trend", 49], ["Plan type", 26]]} accent="teal" /></Window> },
      { id: "anomaly-detection", name: "Anomaly Detection", body: "Detect sudden declines, unusual expense increases, and abnormal conversion rates. Set the thresholds that matter to you and choose how you are notified.", points: ["Configurable alert thresholds", "Notification preferences", "Flagged points shown on the chart"], app: "/dashboard/monitoring",
        preview: <Window title="Anomalies"><StatusPreview title="Recent flags" rows={[["Revenue, week 12", "Below range", "warn"], ["Conversion rate", "Within range", "ok"], ["Expenses, March", "Above range", "warn"]]} /></Window> },
    ],
  },
  {
    label: "Dashboards and reporting", intro: "Share what you found with the people who decide.",
    items: [
      { id: "dashboards", name: "Interactive Dashboards", body: "Assemble dashboards from metric cards and charts, rearrange them, filter by date range, save layouts, and share with your team.", points: ["Metric cards and charts", "Filters and date ranges", "Saved layouts and sharing"], app: "/dashboard/dashboards",
        preview: <Window title="Dashboard"><KpiPreview items={[["Revenue", "Sample"], ["Orders", "Sample"], ["Conversion", "Sample"], ["Churn risk", "Sample"]]} /></Window> },
      { id: "reports", name: "AI Report Generator", body: "Turn analysis into reports with key findings, metrics, visualizations, anomalies, explanations, and recommended actions. Export to PDF or CSV where appropriate.", points: ["Executive and operational reports", "Figures traceable to the analysis", "PDF and CSV export"], app: "/dashboard/reports",
        preview: <Window title="Report"><FunnelPreview title="Report sections" stages={[["Key findings", 100], ["Metrics", 82], ["Trends", 64], ["Recommendations", 46]]} /></Window> },
      { id: "recommendations", name: "AI Recommendations", body: "Receive practical next steps based on your analysis, such as underperforming channels or customer segments with high churn risk. Each one links to its evidence and explains why it was suggested.", points: ["Linked to supporting evidence", "Explains the reasoning", "Separate from calculated facts"], app: "/dashboard/analyst",
        preview: <Window title="Recommendation"><ChatPreview q="What should we review first?" a="Paid social has the highest acquisition cost in the selected period. Review its budget against conversions." note="Evidence: cost per acquisition by channel." /></Window> },
    ],
  },
  {
    label: "Models and governance", intro: "Build, test, watch, and manage predictive models responsibly.",
    items: [
      { id: "model-builder", name: "Predictive Model Builder", body: "Pick a dataset, a prediction goal, and a target column. Insights AI compares candidate models with a baseline for classification, regression, and time series tasks.", points: ["Guided experiment setup", "Automated model comparison", "Prediction explanations"], app: "/dashboard/models",
        preview: <Window title="New model"><TablePreview head={["Setting", "Choice"]} rows={[["Dataset", "customers.csv"], ["Task", "Classification"], ["Target", "churned"]]} /></Window> },
      { id: "model-evaluation", name: "Model Evaluation", body: "See the metrics that fit the task: accuracy, precision, recall, F1, and ROC AUC for classification, and MAE, RMSE, and R squared for regression, explained in plain terms.", points: ["Task appropriate metrics", "Confusion matrix and residuals", "Explanations for business users"], app: "/dashboard/models",
        preview: <Window title="Evaluation"><TablePreview head={["Metric", "Meaning"]} rows={[["Precision", "How many flagged cases were right"], ["Recall", "How many real cases were found"], ["F1 score", "Balance of the two"]]} /></Window> },
      { id: "experimentation", name: "AI Experimentation", body: "Create experiments, compare configurations, test analysis prompts, and keep version history and written results in one place.", points: ["Experiment history", "Configuration and version tracking", "Results documentation"], app: "/dashboard/experiments",
        preview: <Window title="Experiments"><TablePreview head={["Experiment", "Version"]} rows={[["Churn baseline", "v1"], ["Churn with tenure", "v2"], ["Forecast tuning", "v1"]]} /></Window> },
      { id: "model-monitoring", name: "Model Monitoring", body: "Follow performance, prediction volume, data drift, feature drift, latency, error rates, and versions over time, with alerts for the thresholds you set.", points: ["Drift and performance trends", "Model versions", "Monitoring alerts"], app: "/dashboard/monitoring",
        preview: <Window title="Monitoring"><LinePreview title="Model performance over time" accent="teal" /></Window> },
      { id: "governance", name: "AI Governance", body: "Keep a registry of AI assets with documentation, owners, version history, approvals, risk assessments, access controls, and an audit trail.", points: ["Asset registry and documentation", "Approvals and audit trail", "Role based access controls"], app: "/dashboard/governance",
        preview: <Window title="Governance"><StatusPreview title="Asset registry" rows={[["Churn model v2", "Approved", "ok"], ["Demand forecast v2", "In review", "info"], ["Lead scoring v4", "Changes requested", "warn"]]} /></Window> },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div className="bg-white text-[#172B4D]">
      <PageHero
        eyebrow="Features"
        title="Everything you need to turn data into business intelligence."
        body="Sixteen capabilities, from data upload to model governance, in one connected workspace."
      >
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <PrimaryLink href="/signup">Get Started</PrimaryLink>
          <SecondaryLink href="/pricing">View Pricing</SecondaryLink>
        </div>
      </PageHero>

      {GROUPS.map((g, gi) => (
        <section key={g.label} className={`py-20 sm:py-24 ${gi % 2 ? "bg-[#F5F7FB]" : "bg-white"}`}>
          <div className={container}>
            <div className="max-w-2xl">
              <Eyebrow>{g.label}</Eyebrow>
              <h2 style={display} className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">{g.intro}</h2>
            </div>

            <div className="mt-14 space-y-16 sm:space-y-20">
              {g.items.map((f, i) => (
                <div key={f.id} id={f.id} className="grid scroll-mt-24 items-center gap-10 lg:grid-cols-2 lg:gap-16">
                  <div className={i % 2 ? "lg:order-2" : ""}>
                    <h3 style={display} className="text-2xl font-bold tracking-tight">{f.name}</h3>
                    <p className="mt-4 text-[17px] leading-8 text-[#667085]">{f.body}</p>
                    <ul className="mt-5 space-y-2.5">
                      {f.points.map((p) => (
                        <li key={p} className="flex gap-3 text-[15px] leading-6 text-[#344054]"><span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#356AE6]" />{p}</li>
                      ))}
                    </ul>
                    <Link href={f.app} className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#356AE6] hover:text-[#2458D0]">
                      Open in the app <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                  <div className={i % 2 ? "lg:order-1" : ""}>{f.preview}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <div className="pt-24 sm:pt-28">
        <CtaBand title="Try it on your own data." body="Create an account and upload your first dataset." cta="Get Started" />
      </div>
    </div>
  );
}
