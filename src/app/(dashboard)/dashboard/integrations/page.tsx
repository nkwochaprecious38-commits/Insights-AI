"use client";
import { useState } from "react";

type Category = "All" | "Spreadsheets" | "Databases" | "CRM" | "Analytics" | "Payments" | "Warehouses";

const INTEGRATIONS = [
  { name: "Google Sheets", category: "Spreadsheets", connected: true, color: "#269B70", desc: "Import data from Google Sheets automatically" },
  { name: "Microsoft Excel", category: "Spreadsheets", connected: false, color: "#217346", desc: "Connect Excel workbooks and sync data" },
  { name: "PostgreSQL", category: "Databases", connected: true, color: "#336791", desc: "Direct connection to PostgreSQL databases" },
  { name: "MySQL", category: "Databases", connected: false, color: "#4479A1", desc: "Connect to MySQL database instances" },
  { name: "BigQuery", category: "Warehouses", connected: false, color: "#356AE6", desc: "Query Google BigQuery datasets at scale" },
  { name: "Snowflake", category: "Warehouses", connected: false, color: "#29B5E8", desc: "Connect to your Snowflake data warehouse" },
  { name: "Salesforce", category: "CRM", connected: false, color: "#00A1E0", desc: "Sync CRM data: leads, opportunities, accounts" },
  { name: "HubSpot", category: "CRM", connected: false, color: "#FF7A59", desc: "Import contacts, deals, and pipeline data" },
  { name: "Stripe", category: "Payments", connected: false, color: "#6256C7", desc: "Revenue metrics, charges, and subscription data" },
  { name: "Mixpanel", category: "Analytics", connected: false, color: "#7856FF", desc: "Event analytics and user behavior data" },
  { name: "Google Analytics", category: "Analytics", connected: false, color: "#F4B400", desc: "Website traffic and conversion data" },
  { name: "Segment", category: "Analytics", connected: false, color: "#52BD94", desc: "Customer data platform integration" },
];

const CATEGORIES: Category[] = ["All", "Spreadsheets", "Databases", "Warehouses", "CRM", "Analytics", "Payments"];

export default function IntegrationsPage() {
  const [category, setCategory] = useState<Category>("All");
  const [connections, setConnections] = useState<Record<string, boolean>>(
    Object.fromEntries(INTEGRATIONS.map((i) => [i.name, i.connected]))
  );

  const filtered = category === "All" ? INTEGRATIONS : INTEGRATIONS.filter((i) => i.category === category);
  const connectedCount = Object.values(connections).filter(Boolean).length;

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-[18px] font-bold text-[#0D1117] mb-1" style={{ fontFamily: "Manrope, sans-serif" }}>Integrations</h1>
          <p className="text-[13px] text-[#9CA3AF]">{connectedCount} connected · {INTEGRATIONS.length} available</p>
        </div>
      </div>

      {/* Category tabs */}
      <div className="flex gap-1.5 mb-6 flex-wrap">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-3.5 py-1.5 rounded-xl text-[13px] font-medium transition-colors ${
              category === cat
                ? "bg-[#172B4D] text-white"
                : "bg-[#F5F7FB] text-[#6B7280] hover:bg-[#E9EAEC] hover:text-[#374151]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((integration) => {
          const isConnected = connections[integration.name];
          return (
            <div key={integration.name} className={`bg-white border rounded-2xl p-5 transition-all ${isConnected ? "border-[#D1FAE5]" : "border-[#E9EAEC] hover:border-[#D1D5DB]"}`}>
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: integration.color + "15" }}>
                  <div className="w-4 h-4 rounded-md" style={{ background: integration.color }} />
                </div>
                {isConnected && (
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#269B70]" />
                    <span className="text-[11px] font-semibold text-[#269B70]">Connected</span>
                  </div>
                )}
              </div>
              <h3 className="text-[14px] font-bold text-[#0D1117] mb-1" style={{ fontFamily: "Manrope, sans-serif" }}>{integration.name}</h3>
              <p className="text-[12.5px] text-[#9CA3AF] leading-relaxed mb-4">{integration.desc}</p>
              <button
                onClick={() => setConnections((c) => ({ ...c, [integration.name]: !c[integration.name] }))}
                className={`w-full py-2 rounded-xl text-[13px] font-semibold transition-colors ${
                  isConnected
                    ? "border border-[#E9EAEC] text-[#6B7280] hover:border-red-200 hover:text-red-500 hover:bg-red-50"
                    : "bg-[#172B4D] text-white hover:bg-[#1E3A5F]"
                }`}
              >
                {isConnected ? "Disconnect" : "Connect"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
