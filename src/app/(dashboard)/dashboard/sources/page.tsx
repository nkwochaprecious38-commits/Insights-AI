"use client";
import { useState, useRef } from "react";

type FileState = {
  id: string;
  name: string;
  size: string;
  status: "uploading" | "analyzing" | "ready" | "error";
  progress: number;
  rows?: number;
  cols?: number;
};

const INTEGRATIONS = [
  { name: "Google Sheets", category: "Spreadsheets", available: true, color: "#269B70" },
  { name: "Microsoft Excel", category: "Spreadsheets", available: true, color: "#217346" },
  { name: "PostgreSQL", category: "Databases", available: true, color: "#336791" },
  { name: "MySQL", category: "Databases", available: true, color: "#4479A1" },
  { name: "BigQuery", category: "Databases", available: true, color: "#356AE6" },
  { name: "Snowflake", category: "Data Warehouses", available: true, color: "#29B5E8" },
  { name: "Salesforce", category: "CRM", available: false, color: "#00A1E0" },
  { name: "HubSpot", category: "CRM", available: false, color: "#FF7A59" },
  { name: "Stripe", category: "Payments", available: false, color: "#6256C7" },
  { name: "Shopify", category: "Ecommerce", available: false, color: "#96BF48" },
  { name: "Mixpanel", category: "Analytics", available: false, color: "#7856FF" },
  { name: "Segment", category: "Analytics", available: false, color: "#52BD94" },
];

export default function SourcesPage() {
  const [files, setFiles] = useState<FileState[]>([]);
  const [dragging, setDragging] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  function simulateUpload(name: string, size: number) {
    const id = Math.random().toString(36).slice(2);
    const sizeLabel = size > 1024 * 1024 ? `${(size / 1024 / 1024).toFixed(1)} MB` : `${(size / 1024).toFixed(0)} KB`;
    const newFile: FileState = { id, name, size: sizeLabel, status: "uploading", progress: 0 };
    setFiles((f) => [newFile, ...f]);

    let p = 0;
    const t1 = setInterval(() => {
      p += Math.random() * 15 + 5;
      if (p >= 100) {
        clearInterval(t1);
        setFiles((f) => f.map((x) => x.id === id ? { ...x, status: "analyzing", progress: 100 } : x));
        setTimeout(() => {
          setFiles((f) => f.map((x) => x.id === id
            ? { ...x, status: "ready", rows: Math.floor(Math.random() * 15000 + 500), cols: Math.floor(Math.random() * 20 + 4) }
            : x));
        }, 1800);
      } else {
        setFiles((f) => f.map((x) => x.id === id ? { ...x, progress: Math.min(p, 100) } : x));
      }
    }, 120);
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragging(false);
    Array.from(e.dataTransfer.files).forEach((f) => simulateUpload(f.name, f.size));
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    Array.from(e.target.files || []).forEach((f) => simulateUpload(f.name, f.size));
  }

  const statusColors: Record<string, string> = {
    uploading: "#E6A23C",
    analyzing: "#356AE6",
    ready: "#269B70",
    error: "#EF4444",
  };

  return (
    <div className="p-6 max-w-5xl">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-[18px] font-bold text-[#0D1117] mb-1" style={{ fontFamily: "Manrope, sans-serif" }}>Data Sources</h1>
        <p className="text-[13px] text-[#9CA3AF]">Upload files or connect to your existing data systems</p>
      </div>

      {/* Upload zone */}
      <div
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        onClick={() => fileRef.current?.click()}
        className={`border-2 border-dashed rounded-2xl p-10 text-center cursor-pointer transition-all mb-6 ${
          dragging ? "border-[#356AE6] bg-[#F0F4FF]" : "border-[#E4E7EC] bg-[#F9FAFB] hover:border-[#356AE6] hover:bg-[#F5F7FB]"
        }`}
      >
        <input ref={fileRef} type="file" multiple accept=".csv,.xlsx,.xls,.json" className="hidden" onChange={handleChange} />
        <div className="w-12 h-12 rounded-2xl bg-[#EDF3FF] flex items-center justify-center mx-auto mb-4">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 15V5M7 9l4-4 4 4" stroke="#356AE6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 17h16" stroke="#356AE6" strokeWidth="1.8" strokeLinecap="round"/></svg>
        </div>
        <p className="text-[14px] font-semibold text-[#374151] mb-1">Drop files here or click to browse</p>
        <p className="text-[13px] text-[#9CA3AF]">Supports CSV, Excel, and JSON files up to 100MB</p>
      </div>

      {/* File list */}
      {files.length > 0 && (
        <div className="bg-white border border-[#E9EAEC] rounded-2xl overflow-hidden mb-8">
          <div className="px-5 py-3.5 border-b border-[#E9EAEC]">
            <span className="text-[13px] font-semibold text-[#374151]">Uploaded files</span>
          </div>
          <div className="divide-y divide-[#F3F4F6]">
            {files.map((f) => (
              <div key={f.id} className="px-5 py-4 flex items-center gap-4">
                <div className="w-8 h-8 rounded-lg bg-[#F5F7FB] flex items-center justify-center flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="2" y="1" width="10" height="12" rx="1.5" stroke="#9CA3AF" strokeWidth="1.2"/><path d="M5 5h4M5 7.5h4M5 10h2" stroke="#9CA3AF" strokeWidth="1.2" strokeLinecap="round"/></svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-[13.5px] font-semibold text-[#0D1117] truncate">{f.name}</p>
                    <span className="text-[11px] text-[#9CA3AF] flex-shrink-0">{f.size}</span>
                  </div>
                  {f.status === "uploading" && (
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1 bg-[#F3F4F6] rounded-full overflow-hidden">
                        <div className="h-full bg-[#E6A23C] rounded-full transition-all" style={{ width: `${f.progress}%` }} />
                      </div>
                      <span className="text-[11px] text-[#9CA3AF]">{Math.round(f.progress)}%</span>
                    </div>
                  )}
                  {f.status === "analyzing" && (
                    <span className="text-[12px] text-[#356AE6] font-medium">Analyzing structure...</span>
                  )}
                  {f.status === "ready" && (
                    <span className="text-[12px] text-[#9CA3AF]">{f.rows?.toLocaleString()} rows · {f.cols} columns · Ready</span>
                  )}
                </div>
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: statusColors[f.status] }} />
                  <span className="text-[12px] font-medium capitalize" style={{ color: statusColors[f.status] }}>{f.status}</span>
                </div>
                {f.status === "ready" && (
                  <button className="text-[12px] font-semibold text-[#356AE6] hover:text-[#2458D0] px-3 py-1.5 rounded-lg hover:bg-[#F0F4FF] transition-colors">
                    Analyze
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Integrations */}
      <div>
        <h2 className="text-[15px] font-bold text-[#0D1117] mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>Connect a data source</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {INTEGRATIONS.map((integration) => (
            <div
              key={integration.name}
              className={`bg-white border rounded-xl p-4 transition-all ${
                integration.available
                  ? "border-[#E9EAEC] hover:border-[#356AE6] hover:shadow-sm cursor-pointer"
                  : "border-[#F3F4F6] opacity-60 cursor-not-allowed"
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: integration.color + "15" }}>
                  <div className="w-3 h-3 rounded-sm" style={{ background: integration.color }} />
                </div>
                {!integration.available && (
                  <span className="text-[10px] font-semibold text-[#9CA3AF] bg-[#F5F7FB] px-1.5 py-0.5 rounded">Soon</span>
                )}
              </div>
              <p className="text-[13px] font-semibold text-[#0D1117]">{integration.name}</p>
              <p className="text-[11px] text-[#9CA3AF] mt-0.5">{integration.category}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
