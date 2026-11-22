"use client";
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const COLUMNS = [
  { name: "revenue", type: "Numeric", missing: "0%", unique: "12,480", mean: "$192.40", std: "$84.20" },
  { name: "customer_id", type: "String", missing: "0%", unique: "8,230", mean: "—", std: "—" },
  { name: "product_category", type: "Categorical", missing: "0.3%", unique: "14", mean: "—", std: "—" },
  { name: "order_date", type: "Date", missing: "0%", unique: "365", mean: "—", std: "—" },
  { name: "quantity", type: "Numeric", missing: "0.1%", unique: "142", mean: "3.2", std: "2.1" },
  { name: "discount", type: "Numeric", missing: "2.1%", unique: "24", mean: "8.4%", std: "5.7%" },
];

const DISTRIBUTION = [
  { range: "$0–50", count: 820 },
  { range: "$50–100", count: 2340 },
  { range: "$100–150", count: 3180 },
  { range: "$150–200", count: 2960 },
  { range: "$200–250", count: 1840 },
  { range: "$250–300", count: 980 },
  { range: "$300+", count: 380 },
];

function ChartTooltip({ active, payload, label }: { active?: boolean; payload?: { value: number }[]; label?: string }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-[#0D1117] text-white px-3 py-2 rounded-xl text-[12px] shadow-xl">
      <p className="text-white/50 mb-0.5">{label}</p>
      <p className="font-semibold">{payload[0].value.toLocaleString()} orders</p>
    </div>
  );
}

export default function AnalysisPage() {
  const [running, setRunning] = useState(false);
  const [ran, setRan] = useState(false);
  const [dataset, setDataset] = useState("Q4 Sales Data");

  async function handleRun() {
    setRunning(true);
    await new Promise((r) => setTimeout(r, 2000));
    setRunning(false);
    setRan(true);
  }

  return (
    <div className="p-6 max-w-5xl">
      <div className="mb-6">
        <h1 className="text-[18px] font-bold text-[#0D1117] mb-1" style={{ fontFamily: "Manrope, sans-serif" }}>Data Analysis</h1>
        <p className="text-[13px] text-[#9CA3AF]">Automated profiling and quality assessment of your datasets</p>
      </div>

      {/* Run panel */}
      <div className="bg-white border border-[#E9EAEC] rounded-2xl p-5 mb-7">
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <label className="block text-[12.5px] font-medium text-[#374151] mb-1.5">Dataset to analyze</label>
            <select
              value={dataset}
              onChange={(e) => { setDataset(e.target.value); setRan(false); }}
              className="w-full px-3.5 py-2.5 border border-[#E4E7EC] rounded-xl text-[13.5px] bg-white focus:outline-none focus:border-[#356AE6]"
            >
              {["Q4 Sales Data", "Customer Database", "Marketing Analytics", "Operations Log Q4"].map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>
          </div>
          <div className="pt-6">
            <button
              onClick={handleRun}
              disabled={running}
              className="flex items-center gap-2.5 px-5 py-2.5 bg-[#172B4D] text-white text-[13.5px] font-semibold rounded-xl hover:bg-[#1E3A5F] disabled:opacity-60 transition-colors"
            >
              {running ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7L6 10L11 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Run analysis
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {ran && (
        <>
          {/* Quality summary */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-7">
            {[
              { label: "Data quality score", value: "96.4%", color: "#269B70", sub: "Excellent" },
              { label: "Complete rows", value: "97.6%", color: "#356AE6", sub: "11,982 / 12,480" },
              { label: "Missing values", value: "2.4%", color: "#E6A23C", sub: "298 cells" },
              { label: "Duplicate rows", value: "0", color: "#269B70", sub: "No duplicates found" },
            ].map((s) => (
              <div key={s.label} className="bg-white border border-[#E9EAEC] rounded-2xl p-5">
                <p className="text-[12px] text-[#9CA3AF] font-medium mb-2">{s.label}</p>
                <p className="text-[26px] font-black mb-1" style={{ fontFamily: "Manrope, sans-serif", color: s.color }}>{s.value}</p>
                <p className="text-[12px] text-[#9CA3AF]">{s.sub}</p>
              </div>
            ))}
          </div>

          {/* Distribution chart */}
          <div className="bg-white border border-[#E9EAEC] rounded-2xl p-5 mb-5">
            <h3 className="text-[14px] font-bold text-[#0D1117] mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>Revenue distribution</h3>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={DISTRIBUTION} margin={{ top: 4, right: 4, bottom: 0, left: -20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" vertical={false} />
                <XAxis dataKey="range" tick={{ fontSize: 11, fill: "#9CA3AF" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "#9CA3AF" }} axisLine={false} tickLine={false} />
                <Tooltip content={<ChartTooltip />} />
                <Bar dataKey="count" fill="#356AE6" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Column statistics */}
          <div className="bg-white border border-[#E9EAEC] rounded-2xl overflow-hidden">
            <div className="px-5 py-4 border-b border-[#E9EAEC]">
              <h3 className="text-[14px] font-bold text-[#0D1117]" style={{ fontFamily: "Manrope, sans-serif" }}>Column statistics</h3>
            </div>
            <table className="w-full">
              <thead>
                <tr className="bg-[#F9FAFB]">
                  {["Column", "Type", "Missing", "Unique values", "Mean", "Std dev"].map((h) => (
                    <th key={h} className="text-left text-[11px] font-semibold text-[#9CA3AF] uppercase tracking-wide px-5 py-3">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3F4F6]">
                {COLUMNS.map((col) => (
                  <tr key={col.name} className="hover:bg-[#FAFAFA] transition-colors">
                    <td className="px-5 py-3.5 text-[13.5px] font-semibold text-[#0D1117] font-mono">{col.name}</td>
                    <td className="px-5 py-3.5">
                      <span className={`text-[12px] font-semibold px-2.5 py-0.5 rounded-full ${
                        col.type === "Numeric" ? "text-[#356AE6] bg-[#EDF3FF]"
                        : col.type === "Categorical" ? "text-[#6256C7] bg-[#F3F0FF]"
                        : col.type === "Date" ? "text-[#16A6A1] bg-[#ECFDF5]"
                        : "text-[#6B7280] bg-[#F9FAFB]"
                      }`}>
                        {col.type}
                      </span>
                    </td>
                    <td className="px-5 py-3.5">
                      <span className={`text-[13px] font-medium ${col.missing !== "0%" ? "text-[#E6A23C]" : "text-[#269B70]"}`}>
                        {col.missing}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-[13px] text-[#6B7280] font-mono">{col.unique}</td>
                    <td className="px-5 py-3.5 text-[13px] text-[#6B7280] font-mono">{col.mean}</td>
                    <td className="px-5 py-3.5 text-[13px] text-[#6B7280] font-mono">{col.std}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {!ran && !running && (
        <div className="text-center py-16 text-[13.5px] text-[#9CA3AF]">
          <div className="w-12 h-12 rounded-2xl bg-[#F5F7FB] flex items-center justify-center mx-auto mb-4">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M3 16l3.5-7 3.5 4 3-6 3 5" stroke="#D1D5DB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          Select a dataset and click Run analysis to see profiling results
        </div>
      )}
    </div>
  );
}
