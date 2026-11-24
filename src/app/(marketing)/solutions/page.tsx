import { container, display, Eyebrow, PageHero, PrimaryLink, CtaBand, Window, LinePreview, BarsPreview, ChatPreview, FunnelPreview, StatusPreview, KpiPreview } from "@/components/marketing/kit";

export const metadata = { title: "Solutions | Insights AI" };

const SOLUTIONS = [
  {
    id: "finance", name: "Finance and Accounting",
    problem: "Finance teams spend days assembling spreadsheets before they can answer a simple question about margins, costs, or cash.",
    help: "Analyze revenue, expenses, profitability, and cash flow trends in one place. Ask which costs are growing faster than revenue and see the calculation behind the answer.",
    features: ["AI Data Analyst", "Financial trend analysis", "Anomaly Detection", "Forecast reports"],
    cases: ["Compare expense growth with revenue growth by category", "Flag unusual spend increases for review", "Prepare a monthly financial analysis report"],
    preview: <Window title="Expense growth versus revenue"><BarsPreview title="Growth by category" rows={[["Software", 82], ["Contractors", 64], ["Travel", 38], ["Revenue", 45]]} accent="indigo" /></Window>,
  },
  {
    id: "sales", name: "Sales and Revenue",
    problem: "Sales leaders see results after the quarter closes, and it is hard to tell which products and channels actually drive them.",
    help: "Monitor sales performance, find where prospects drop out, forecast revenue with an uncertainty range, and understand purchasing patterns across customers.",
    features: ["Sales Forecasting", "Interactive Dashboards", "AI Recommendations", "Customer segmentation"],
    cases: ["Forecast revenue for the next three months", "Find the stage where conversion falls", "Identify the highest value customers"],
    preview: <Window title="Sales forecast"><LinePreview title="Observed and forecast revenue" forecast accent="blue" /></Window>,
  },
  {
    id: "marketing", name: "Marketing",
    problem: "Campaign data sits in separate tools, so comparing channels by cost and return means rebuilding the same report each month.",
    help: "Analyze campaign performance, customer acquisition cost, conversion rates, and channel effectiveness from your exported or connected data.",
    features: ["AI Data Analyst", "Data Visualization", "AI Report Generator", "AI Recommendations"],
    cases: ["Rank channels by revenue and acquisition cost", "Compare campaign conversion rates", "Report on marketing performance for leadership"],
    preview: <Window title="Conversion funnel"><FunnelPreview title="Campaign funnel" stages={[["Visits", 100], ["Leads", 74], ["Trials", 52], ["Customers", 34]]} /></Window>,
  },
  {
    id: "operations", name: "Operations",
    problem: "Operations managers react to problems after they appear, because demand shifts and bottlenecks are buried in routine reports.",
    help: "Monitor efficiency, resource utilization, demand patterns, and performance indicators, with alerts when a metric moves outside its normal range.",
    features: ["Demand forecasting", "Anomaly Detection", "Interactive Dashboards", "Model Monitoring"],
    cases: ["Forecast demand and inventory needs", "Detect irregular inventory movements", "Track operating metrics against targets"],
    preview: <Window title="Operational alerts"><StatusPreview title="Alert thresholds" rows={[["Order volume", "Within range", "ok"], ["Fulfilment time", "Above threshold", "warn"], ["Inventory level", "Within range", "ok"]]} /></Window>,
  },
  {
    id: "customer-experience", name: "Customer Experience",
    problem: "Teams learn that customers are leaving only after they have gone, and satisfaction signals are hard to connect to behavior.",
    help: "Understand customer behavior, identify accounts at risk of churn, and analyze satisfaction patterns, with the factors behind each prediction explained.",
    features: ["Customer Churn Prediction", "Model Evaluation", "AI Recommendations", "Customer insights reports"],
    cases: ["Score accounts by churn risk", "See which factors drive churn", "Segment customers by behavior"],
    preview: <Window title="Churn risk factors"><BarsPreview title="Feature importance" rows={[["Support tickets", 86], ["Tenure", 64], ["Usage trend", 52], ["Plan type", 28]]} accent="teal" /></Window>,
  },
  {
    id: "executive", name: "Executive Leadership",
    problem: "Leaders receive different numbers from different teams and have no single view of performance, forecasts, and opportunities.",
    help: "Get a central view of organizational performance with strategic metrics, forecasts, and recommendations that link back to supporting evidence.",
    features: ["Executive dashboards", "AI Report Generator", "Predictive Analytics", "AI Governance"],
    cases: ["Review company performance in one dashboard", "Receive a written executive summary", "Track forecasts against actual results"],
    preview: <Window title="Executive overview"><div className="space-y-4"><KpiPreview items={[["Revenue", "Sample", "vs prior period"], ["Customers", "Sample", "vs prior period"]]} /><ChatPreview q="What needs attention this quarter?" a="Two areas moved outside their usual range. See the supporting calculations below." /></div></Window>,
  },
];

export default function SolutionsPage() {
  return (
    <div className="bg-white text-[#172B4D]">
      <PageHero
        eyebrow="Solutions"
        title="AI powered insights for every part of your business."
        body="Each team asks different questions. Insights AI gives every function analysis that fits the decisions it makes most often."
      >
        <div className="flex flex-wrap justify-center gap-2.5">
          {SOLUTIONS.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="rounded-full border border-[#D6E2FF] bg-white px-4 py-2 text-sm font-medium text-[#475467] transition-colors hover:border-[#356AE6] hover:text-[#356AE6]">{s.name}</a>
          ))}
        </div>
      </PageHero>

      {SOLUTIONS.map((s, i) => (
        <section key={s.id} id={s.id} className={`scroll-mt-20 py-20 sm:py-24 ${i % 2 ? "bg-[#F5F7FB]" : "bg-white"}`}>
          <div className={`${container} grid items-start gap-12 lg:grid-cols-2 lg:gap-16`}>
            <div className={i % 2 ? "lg:order-2" : ""}>
              <Eyebrow>{s.name}</Eyebrow>
              <h2 style={display} className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">{s.name}</h2>

              <div className="mt-8 space-y-7">
                <div>
                  <h3 className="text-sm font-semibold text-[#667085]">The business problem</h3>
                  <p className="mt-2 text-[17px] leading-8 text-[#344054]">{s.problem}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#667085]">How Insights AI helps</h3>
                  <p className="mt-2 text-[17px] leading-8 text-[#344054]">{s.help}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#667085]">Relevant features</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {s.features.map((f) => <span key={f} className="rounded-full bg-[#EDF3FF] px-3.5 py-1.5 text-sm font-medium text-[#2B56BD]">{f}</span>)}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#667085]">Practical use cases</h3>
                  <ul className="mt-3 space-y-2.5">
                    {s.cases.map((c) => (
                      <li key={c} className="flex gap-3 text-[15px] leading-6 text-[#344054]"><span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#356AE6]" />{c}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-9"><PrimaryLink href="/signup">Get Started</PrimaryLink></div>
            </div>
            <div className={`lg:sticky lg:top-28 ${i % 2 ? "lg:order-1" : ""}`}>{s.preview}</div>
          </div>
        </section>
      ))}

      <div className="pt-24 sm:pt-28">
        <CtaBand title="Start with the questions your team asks most." body="Upload a dataset and ask your first question in plain language." cta="Get Started" />
      </div>
    </div>
  );
}
