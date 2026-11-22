"use client";
import { useState } from "react";

const MODELS = [
  {
    id: "1",
    name: "Revenue Forecast v3",
    type: "Time Series",
    accuracy: "94.1%",
    metric: "RMSE: 0.042",
    dataset: "Q4 Sales Data",
    status: "deployed",
    created: "Nov 15, 2026",
    features: [
      { name: "Historical revenue", importance: 100 },
      { name: "Seasonality index", importance: 78 },
      { name: "Marketing spend", importance: 61 },
      { name: "Market conditions", importance: 44 },
      { name: "Product mix", importance: 32 },
    ],
  },
  {
    id: "2",
    name: "Churn Predictor v2",
    type: "Classification",
    accuracy: "88.7%",
    metric: "F1: 0.84",
    dataset: "Customer Database",
    status: "deployed",
    created: "Nov 10, 2026",
    features: [
      { name: "Days since last login", importance: 100 },
      { name: "Support tickets", importance: 85 },
      { name: "Usage frequency", importance: 72 },
      { name: "Plan tier", importance: 54 },
      { name: "NPS score", importance: 38 },
    ],
  },
  {
    id: "3",
    name: "CLV Model v4",
    type: "Regression",
    accuracy: "85.2%",
    metric: "MAE: 0.088",
    dataset: "Customer Database",
    status: "monitoring",
    created: "Nov 5, 2026",
    features: [
      { name: "Order frequency", importance: 100 },
      { name: "Avg order value", importance: 90 },
      { name: "Customer tenure", importance: 65 },
      { name: "Product categories", importance: 48 },
    ],
  },
];

const STATUS_COLORS: Record<string, { text: string; bg: string }> = {
  deployed: { text: "#269B70", bg: "#F0FDF4" },
  monitoring: { text: "#E6A23C", bg: "#FFFBEB" },
  training: { text: "#356AE6", bg: "#EDF3FF" },
};

export default function ModelsPage() {
  const [selected, setSelected] = useState(MODELS[0].id);
  const model = MODELS.find((m) => m.id === selected)!;

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-[18px] font-bold text-[#0D1117] mb-1" style={{ fontFamily: "Manrope, sans-serif" }}>Models</h1>
        <p className="text-[13px] text-[#9CA3AF]">Manage predictive models and view performance</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Model list */}
        <div className="space-y-3">
          {MODELS.map((m) => (
            <button
              key={m.id}
              onClick={() => setSelected(m.id)}
              className={`w-full text-left p-4 rounded-2xl border transition-all ${
                selected === m.id
                  ? "border-[#356AE6] bg-[#F0F4FF] shadow-[0_0_0_1px_#356AE6]"
                  : "border-[#E9EAEC] bg-white hover:border-[#D1D5DB]"
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <span className="text-[13.5px] font-bold text-[#0D1117]" style={{ fontFamily: "Manrope, sans-serif" }}>{m.name}</span>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full"
                  style={{ color: STATUS_COLORS[m.status].text, background: STATUS_COLORS[m.status].bg }}>
                  {m.status}
                </span>
              </div>
              <div className="flex items-center gap-3 text-[12px] text-[#9CA3AF]">
                <span>{m.type}</span>
                <span>·</span>
                <span className="font-semibold text-[#374151]">{m.accuracy}</span>
              </div>
            </button>
          ))}
          <button className="w-full p-4 rounded-2xl border border-dashed border-[#E4E7EC] text-[13px] text-[#9CA3AF] hover:border-[#356AE6] hover:text-[#356AE6] hover:bg-[#F0F4FF] transition-all flex items-center justify-center gap-2">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            Train new model
          </button>
        </div>

        {/* Model detail */}
        <div className="lg:col-span-2 space-y-5">
          <div className="bg-white border border-[#E9EAEC] rounded-2xl p-5">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-[16px] font-bold text-[#0D1117] mb-1" style={{ fontFamily: "Manrope, sans-serif" }}>{model.name}</h2>
                <p className="text-[13px] text-[#9CA3AF]">{model.type} · Trained on {model.dataset} · {model.created}</p>
              </div>
              <div className="flex gap-2">
                <button className="text-[12.5px] font-semibold text-[#374151] px-3 py-1.5 border border-[#E4E7EC] rounded-xl hover:bg-[#F5F7FB] transition-colors">
                  Retrain
                </button>
                <button className="text-[12.5px] font-semibold text-white px-3 py-1.5 bg-[#356AE6] rounded-xl hover:bg-[#2458D0] transition-colors">
                  Deploy
                </button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Accuracy", value: model.accuracy },
                { label: "Performance", value: model.metric },
                { label: "Status", value: model.status },
              ].map((s) => (
                <div key={s.label} className="bg-[#F9FAFB] rounded-xl p-3.5">
                  <p className="text-[11px] text-[#9CA3AF] font-medium mb-1">{s.label}</p>
                  <p className="text-[15px] font-bold text-[#0D1117]" style={{ fontFamily: "Manrope, sans-serif" }}>{s.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Feature importance */}
          <div className="bg-white border border-[#E9EAEC] rounded-2xl p-5">
            <h3 className="text-[14px] font-bold text-[#0D1117] mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>Feature importance</h3>
            <div className="space-y-3">
              {model.features.map((f) => (
                <div key={f.name} className="flex items-center gap-3">
                  <span className="text-[13px] text-[#6B7280] w-48 flex-shrink-0 truncate">{f.name}</span>
                  <div className="flex-1 h-2 bg-[#F3F4F6] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${f.importance}%`, background: "linear-gradient(90deg, #356AE6, #6256C7)" }}
                    />
                  </div>
                  <span className="text-[12px] font-semibold text-[#374151] w-10 text-right">{f.importance}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
