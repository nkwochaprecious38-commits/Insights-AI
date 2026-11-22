"use client";
import { useState } from "react";

const REPORTS = [
  { id: "1", title: "Q4 Revenue Analysis", type: "Financial", status: "ready", pages: 12, created: "Nov 20, 2026", size: "2.4 MB" },
  { id: "2", title: "Customer Churn Deep Dive", type: "Customer", status: "ready", pages: 8, created: "Nov 18, 2026", size: "1.8 MB" },
  { id: "3", title: "Marketing Channel ROI Report", type: "Marketing", status: "generating", pages: null, created: "Nov 22, 2026", size: null },
  { id: "4", title: "Sales Pipeline Q4 Summary", type: "Sales", status: "ready", pages: 15, created: "Nov 15, 2026", size: "3.1 MB" },
  { id: "5", title: "Operations Efficiency Report", type: "Operations", status: "ready", pages: 9, created: "Nov 10, 2026", size: "2.0 MB" },
];

const TYPE_COLORS: Record<string, string> = {
  Financial: "#356AE6",
  Customer: "#16A6A1",
  Marketing: "#6256C7",
  Sales: "#269B70",
  Operations: "#E6A23C",
};

export default function ReportsPage() {
  const [reports, setReports] = useState(REPORTS);
  const [generating, setGenerating] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newType, setNewType] = useState("Financial");

  async function handleGenerate() {
    if (!newTitle.trim()) return;
    setGenerating(true);
    const id = Math.random().toString(36).slice(2);
    setReports((r) => [
      { id, title: newTitle, type: newType, status: "generating", pages: null, created: "Nov 22, 2026", size: null },
      ...r,
    ]);
    setShowNew(false);
    setNewTitle("");
    setTimeout(() => {
      setReports((r) =>
        r.map((x) => x.id === id ? { ...x, status: "ready", pages: Math.floor(Math.random() * 12 + 6), size: `${(Math.random() * 2 + 1).toFixed(1)} MB` } : x)
      );
      setGenerating(false);
    }, 3000);
  }

  return (
    <div className="p-6 max-w-5xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-[18px] font-bold text-[#0D1117] mb-1" style={{ fontFamily: "Manrope, sans-serif" }}>Reports</h1>
          <p className="text-[13px] text-[#9CA3AF]">AI-generated business reports from your data</p>
        </div>
        <button
          onClick={() => setShowNew(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-[#172B4D] text-white text-[13.5px] font-semibold rounded-xl hover:bg-[#1E3A5F] transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 2v10M2 7h10" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
          Generate report
        </button>
      </div>

      {/* New report form */}
      {showNew && (
        <div className="bg-white border border-[#356AE6] rounded-2xl p-5 mb-6 shadow-[0_0_0_1px_#356AE6]">
          <h3 className="text-[14px] font-bold text-[#0D1117] mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>New AI report</h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-[12.5px] font-medium text-[#374151] mb-1.5">Report title</label>
              <input
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="e.g. Q4 Sales Summary"
                className="w-full px-3.5 py-2.5 border border-[#E4E7EC] rounded-xl text-[13.5px] focus:outline-none focus:border-[#356AE6]"
              />
            </div>
            <div>
              <label className="block text-[12.5px] font-medium text-[#374151] mb-1.5">Report type</label>
              <select
                value={newType}
                onChange={(e) => setNewType(e.target.value)}
                className="w-full px-3.5 py-2.5 border border-[#E4E7EC] rounded-xl text-[13.5px] bg-white focus:outline-none focus:border-[#356AE6]"
              >
                {["Financial", "Customer", "Marketing", "Sales", "Operations"].map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleGenerate}
              disabled={!newTitle.trim()}
              className="px-5 py-2.5 bg-[#356AE6] text-white text-[13.5px] font-semibold rounded-xl hover:bg-[#2458D0] disabled:opacity-50 transition-colors"
            >
              Generate
            </button>
            <button
              onClick={() => { setShowNew(false); setNewTitle(""); }}
              className="px-5 py-2.5 border border-[#E4E7EC] text-[#6B7280] text-[13.5px] font-semibold rounded-xl hover:bg-[#F5F7FB] transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Reports list */}
      <div className="bg-white border border-[#E9EAEC] rounded-2xl overflow-hidden">
        <div className="divide-y divide-[#F3F4F6]">
          {reports.map((report) => (
            <div key={report.id} className="flex items-center gap-4 px-5 py-4 hover:bg-[#FAFAFA] transition-colors">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: (TYPE_COLORS[report.type] || "#356AE6") + "15" }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="1" width="12" height="14" rx="2" stroke={TYPE_COLORS[report.type] || "#356AE6"} strokeWidth="1.4"/><path d="M5 6h6M5 9h6M5 12h3" stroke={TYPE_COLORS[report.type] || "#356AE6"} strokeWidth="1.4" strokeLinecap="round"/></svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <p className="text-[13.5px] font-semibold text-[#0D1117] truncate">{report.title}</p>
                  <span className="text-[11px] font-semibold flex-shrink-0 px-2 py-0.5 rounded-full"
                    style={{ color: TYPE_COLORS[report.type] || "#356AE6", background: (TYPE_COLORS[report.type] || "#356AE6") + "15" }}>
                    {report.type}
                  </span>
                </div>
                <p className="text-[12px] text-[#9CA3AF]">
                  {report.status === "generating"
                    ? "Generating report..."
                    : `${report.pages} pages · ${report.size} · ${report.created}`}
                </p>
              </div>

              {report.status === "generating" ? (
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[0, 1, 2].map((i) => (
                      <div key={i} className="w-1 h-1 rounded-full bg-[#356AE6] animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                    ))}
                  </div>
                  <span className="text-[12px] text-[#356AE6] font-medium">Processing</span>
                </div>
              ) : (
                <div className="flex gap-1.5">
                  <button className="text-[12px] font-semibold text-[#374151] px-3 py-1.5 rounded-lg hover:bg-[#F5F7FB] transition-colors">View</button>
                  <button className="text-[12px] font-semibold text-[#356AE6] px-3 py-1.5 rounded-lg hover:bg-[#F0F4FF] transition-colors">Download</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
