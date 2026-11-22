"use client";
import { useState } from "react";

const DATASETS = [
  { id: "1", name: "Q4 Sales Data", rows: 12480, cols: 18, size: "2.4 MB", status: "ready", updated: "Nov 20, 2026", type: "CSV" },
  { id: "2", name: "Customer Database", rows: 8230, cols: 24, size: "5.1 MB", status: "ready", updated: "Nov 18, 2026", type: "CSV" },
  { id: "3", name: "Marketing Analytics", rows: 5610, cols: 15, size: "1.8 MB", status: "ready", updated: "Nov 15, 2026", type: "XLSX" },
  { id: "4", name: "Operations Log Q4", rows: 22100, cols: 12, size: "7.3 MB", status: "ready", updated: "Nov 12, 2026", type: "CSV" },
  { id: "5", name: "Product Catalog", rows: 1240, cols: 9, size: "0.4 MB", status: "processing", updated: "Nov 22, 2026", type: "CSV" },
];

const STATUS_COLORS: Record<string, { text: string; bg: string }> = {
  ready: { text: "#269B70", bg: "#F0FDF4" },
  processing: { text: "#356AE6", bg: "#EDF3FF" },
  error: { text: "#EF4444", bg: "#FEF2F2" },
};

export default function DatasetsPage() {
  const [search, setSearch] = useState("");
  const [datasets, setDatasets] = useState(DATASETS);

  const filtered = datasets.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  function handleDelete(id: string) {
    setDatasets((d) => d.filter((x) => x.id !== id));
  }

  return (
    <div className="p-6 max-w-5xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-[18px] font-bold text-[#0D1117] mb-1" style={{ fontFamily: "Manrope, sans-serif" }}>Datasets</h1>
          <p className="text-[13px] text-[#9CA3AF]">{datasets.length} datasets · Manage and analyze your data</p>
        </div>
        <a
          href="/dashboard/sources"
          className="flex items-center gap-2 px-4 py-2.5 bg-[#172B4D] text-white text-[13.5px] font-semibold rounded-xl hover:bg-[#1E3A5F] transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 2v10M2 7h10" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
          Upload dataset
        </a>
      </div>

      {/* Search */}
      <div className="relative mb-5">
        <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9CA3AF]" width="15" height="15" viewBox="0 0 15 15" fill="none">
          <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.3"/>
          <path d="M9.5 9.5L13 13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        </svg>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search datasets..."
          className="w-full pl-10 pr-4 py-2.5 border border-[#E4E7EC] rounded-xl text-[13.5px] focus:outline-none focus:border-[#356AE6] bg-white"
        />
      </div>

      {/* Table */}
      <div className="bg-white border border-[#E9EAEC] rounded-2xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-[#F9FAFB]">
              {["Dataset", "Type", "Rows", "Columns", "Size", "Status", "Updated", ""].map((h) => (
                <th key={h} className="text-left text-[11px] font-semibold text-[#9CA3AF] uppercase tracking-wide px-5 py-3">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#F3F4F6]">
            {filtered.map((d) => (
              <tr key={d.id} className="hover:bg-[#FAFAFA] transition-colors">
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#EDF3FF] flex items-center justify-center flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect x="1" y="1" width="10" height="10" rx="1.5" stroke="#356AE6" strokeWidth="1.2"/><path d="M3 4.5h6M3 6.5h6M3 8.5h3" stroke="#356AE6" strokeWidth="1.2" strokeLinecap="round"/></svg>
                    </div>
                    <span className="text-[13.5px] font-semibold text-[#0D1117]">{d.name}</span>
                  </div>
                </td>
                <td className="px-5 py-3.5">
                  <span className="text-[12px] font-semibold text-[#9CA3AF] bg-[#F5F7FB] px-2 py-0.5 rounded">{d.type}</span>
                </td>
                <td className="px-5 py-3.5 text-[13px] text-[#6B7280] font-mono">{d.rows.toLocaleString()}</td>
                <td className="px-5 py-3.5 text-[13px] text-[#6B7280] font-mono">{d.cols}</td>
                <td className="px-5 py-3.5 text-[13px] text-[#6B7280]">{d.size}</td>
                <td className="px-5 py-3.5">
                  <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold px-2.5 py-1 rounded-full"
                    style={{ color: STATUS_COLORS[d.status].text, background: STATUS_COLORS[d.status].bg }}>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: STATUS_COLORS[d.status].text }} />
                    {d.status.charAt(0).toUpperCase() + d.status.slice(1)}
                  </span>
                </td>
                <td className="px-5 py-3.5 text-[13px] text-[#9CA3AF]">{d.updated}</td>
                <td className="px-5 py-3.5">
                  <div className="flex gap-1">
                    <button className="text-[12px] font-semibold text-[#356AE6] px-2.5 py-1.5 rounded-lg hover:bg-[#F0F4FF] transition-colors">Analyze</button>
                    <button className="text-[12px] font-semibold text-[#9CA3AF] px-2.5 py-1.5 rounded-lg hover:bg-[#F5F7FB] hover:text-red-500 transition-colors"
                      onClick={() => handleDelete(d.id)}>Delete</button>
                  </div>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={8} className="text-center py-12 text-[13px] text-[#9CA3AF]">No datasets found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
