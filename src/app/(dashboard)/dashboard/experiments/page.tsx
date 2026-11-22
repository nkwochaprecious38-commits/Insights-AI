"use client";
import { useState } from "react";

const EXPERIMENTS = [
  {
    id: "1",
    name: "Revenue Forecast: LSTM vs XGBoost",
    status: "completed",
    winner: "LSTM",
    improvement: "+3.2%",
    metric: "Accuracy",
    runs: 2,
    started: "Nov 10, 2026",
    completed: "Nov 15, 2026",
    variants: [
      { name: "LSTM v2", accuracy: "94.1%", rmse: "0.042", runtime: "2.4s" },
      { name: "XGBoost v1", accuracy: "90.9%", rmse: "0.058", runtime: "0.8s" },
    ],
  },
  {
    id: "2",
    name: "Churn Prediction: Feature Engineering",
    status: "running",
    winner: null,
    improvement: null,
    metric: "F1 Score",
    runs: 2,
    started: "Nov 20, 2026",
    completed: null,
    variants: [
      { name: "Baseline features", accuracy: "88.7%", rmse: "0.071", runtime: "1.1s" },
      { name: "Engineered features", accuracy: "In progress...", rmse: "—", runtime: "—" },
    ],
  },
  {
    id: "3",
    name: "CLV Model: Regularization Tuning",
    status: "draft",
    winner: null,
    improvement: null,
    metric: "MAE",
    runs: 1,
    started: "Nov 22, 2026",
    completed: null,
    variants: [
      { name: "L2 Regularization", accuracy: "85.2%", rmse: "0.088", runtime: "1.6s" },
    ],
  },
];

const STATUS_COLORS: Record<string, { text: string; bg: string; dot: string }> = {
  completed: { text: "#269B70", bg: "#F0FDF4", dot: "#269B70" },
  running: { text: "#356AE6", bg: "#EDF3FF", dot: "#356AE6" },
  draft: { text: "#9CA3AF", bg: "#F9FAFB", dot: "#9CA3AF" },
};

export default function ExperimentsPage() {
  const [expanded, setExpanded] = useState<string | null>("1");

  return (
    <div className="p-6 max-w-4xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-[18px] font-bold text-[#0D1117] mb-1" style={{ fontFamily: "Manrope, sans-serif" }}>Experiments</h1>
          <p className="text-[13px] text-[#9CA3AF]">Compare models, feature sets, and configurations</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-[#172B4D] text-white text-[13.5px] font-semibold rounded-xl hover:bg-[#1E3A5F] transition-colors">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 2v10M2 7h10" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
          New experiment
        </button>
      </div>

      <div className="space-y-4">
        {EXPERIMENTS.map((exp) => (
          <div key={exp.id} className="bg-white border border-[#E9EAEC] rounded-2xl overflow-hidden">
            <button
              className="w-full flex items-center gap-4 px-5 py-4 hover:bg-[#FAFAFA] transition-colors text-left"
              onClick={() => setExpanded(expanded === exp.id ? null : exp.id)}
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-[14px] font-bold text-[#0D1117]" style={{ fontFamily: "Manrope, sans-serif" }}>{exp.name}</span>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-0.5 rounded-full"
                    style={{ color: STATUS_COLORS[exp.status].text, background: STATUS_COLORS[exp.status].bg }}>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: STATUS_COLORS[exp.status].dot }} />
                    {exp.status.charAt(0).toUpperCase() + exp.status.slice(1)}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-[12px] text-[#9CA3AF]">
                  <span>Metric: {exp.metric}</span>
                  <span>{exp.runs} variant{exp.runs !== 1 ? "s" : ""}</span>
                  <span>Started {exp.started}</span>
                  {exp.completed && <span>Completed {exp.completed}</span>}
                </div>
              </div>
              {exp.winner && (
                <div className="flex items-center gap-2 px-3 py-1.5 bg-[#F0FDF4] border border-[#D1FAE5] rounded-xl">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1l1.2 3.5H11L8 6.8l1 3.2L6 8.3 3 10l1-3.2L1 4.5h3.8L6 1z" fill="#269B70"/></svg>
                  <span className="text-[12px] font-bold text-[#269B70]">{exp.winner}: {exp.improvement}</span>
                </div>
              )}
              <svg
                width="16" height="16" viewBox="0 0 16 16" fill="none"
                className={`transition-transform text-[#9CA3AF] ${expanded === exp.id ? "rotate-180" : ""}`}
              >
                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {expanded === exp.id && (
              <div className="border-t border-[#F3F4F6] px-5 py-4">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-[#F9FAFB] rounded-xl">
                        {["Variant", "Accuracy", "RMSE", "Runtime", ""].map((h) => (
                          <th key={h} className="text-left text-[11px] font-semibold text-[#9CA3AF] uppercase tracking-wide px-4 py-2.5 first:rounded-l-xl last:rounded-r-xl">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#F9FAFB]">
                      {exp.variants.map((v, i) => {
                        const isWinner = exp.winner === v.name;
                        return (
                          <tr key={i} className={isWinner ? "bg-[#F9FEFF]" : ""}>
                            <td className="px-4 py-3">
                              <div className="flex items-center gap-2">
                                <span className="text-[13.5px] font-semibold text-[#0D1117]">{v.name}</span>
                                {isWinner && (
                                  <span className="text-[10px] font-bold text-[#269B70] bg-[#F0FDF4] px-2 py-0.5 rounded-full">Winner</span>
                                )}
                              </div>
                            </td>
                            <td className="px-4 py-3 text-[13.5px] font-mono text-[#374151]">{v.accuracy}</td>
                            <td className="px-4 py-3 text-[13.5px] font-mono text-[#374151]">{v.rmse}</td>
                            <td className="px-4 py-3 text-[13.5px] text-[#6B7280]">{v.runtime}</td>
                            <td className="px-4 py-3">
                              <button className="text-[12px] font-semibold text-[#356AE6] hover:text-[#2458D0] px-2.5 py-1 rounded-lg hover:bg-[#F0F4FF] transition-colors">
                                Details
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
