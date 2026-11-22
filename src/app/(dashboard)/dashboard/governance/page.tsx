"use client";

const ASSETS = [
  { name: "Q4 Sales Data", type: "Dataset", owner: "Sarah Mitchell", risk: "Low", status: "Approved", updated: "Nov 20" },
  { name: "Customer Database", type: "Dataset", owner: "James Okafor", risk: "High", status: "Under Review", updated: "Nov 18" },
  { name: "Revenue Forecast v3", type: "Model", owner: "Sarah Mitchell", risk: "Medium", status: "Approved", updated: "Nov 15" },
  { name: "Churn Predictor v2", type: "Model", owner: "Priya Sharma", risk: "Medium", status: "Approved", updated: "Nov 12" },
  { name: "Marketing Analytics", type: "Dataset", owner: "Lucas Fernandez", risk: "Low", status: "Draft", updated: "Nov 10" },
  { name: "CLV Model v4", type: "Model", owner: "James Okafor", risk: "High", status: "Flagged", updated: "Nov 8" },
];

const AUDIT = [
  { action: "Dataset uploaded", user: "James Okafor", target: "Customer Database", time: "2 hours ago" },
  { action: "Model approved", user: "Sarah Mitchell", target: "Revenue Forecast v3", time: "5 hours ago" },
  { action: "Report downloaded", user: "Priya Sharma", target: "Q4 Revenue Analysis", time: "8 hours ago" },
  { action: "Settings changed", user: "Sarah Mitchell", target: "Notification preferences", time: "1 day ago" },
  { action: "Team member invited", user: "Sarah Mitchell", target: "lucas@company.com", time: "2 days ago" },
];

const RISK_COLORS: Record<string, { text: string; bg: string }> = {
  Low: { text: "#269B70", bg: "#F0FDF4" },
  Medium: { text: "#E6A23C", bg: "#FFFBEB" },
  High: { text: "#EF4444", bg: "#FEF2F2" },
};

const STATUS_COLORS: Record<string, { text: string; bg: string }> = {
  Approved: { text: "#269B70", bg: "#F0FDF4" },
  "Under Review": { text: "#356AE6", bg: "#EDF3FF" },
  Draft: { text: "#6B7280", bg: "#F9FAFB" },
  Flagged: { text: "#EF4444", bg: "#FEF2F2" },
};

export default function GovernancePage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-[18px] font-bold text-[#0D1117] mb-1" style={{ fontFamily: "Manrope, sans-serif" }}>Governance</h1>
        <p className="text-[13px] text-[#9CA3AF]">Track data assets, model approvals, and audit activity</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-7">
        {[
          { label: "Total assets", value: "6", color: "#356AE6" },
          { label: "Approved", value: "3", color: "#269B70" },
          { label: "Under review", value: "1", color: "#E6A23C" },
          { label: "Flagged", value: "1", color: "#EF4444" },
        ].map((s) => (
          <div key={s.label} className="bg-white border border-[#E9EAEC] rounded-2xl p-5">
            <p className="text-[12px] text-[#9CA3AF] font-medium mb-1.5">{s.label}</p>
            <p className="text-[28px] font-black text-[#0D1117]" style={{ fontFamily: "Manrope, sans-serif", color: s.color }}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* Asset registry */}
      <div className="bg-white border border-[#E9EAEC] rounded-2xl overflow-hidden mb-7">
        <div className="px-5 py-4 border-b border-[#E9EAEC]">
          <h3 className="text-[14px] font-bold text-[#0D1117]" style={{ fontFamily: "Manrope, sans-serif" }}>Asset registry</h3>
        </div>
        <table className="w-full">
          <thead>
            <tr className="bg-[#F9FAFB]">
              {["Asset", "Type", "Owner", "Risk level", "Status", "Updated", ""].map((h) => (
                <th key={h} className="text-left text-[11px] font-semibold text-[#9CA3AF] uppercase tracking-wide px-5 py-3">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#F3F4F6]">
            {ASSETS.map((asset) => (
              <tr key={asset.name} className="hover:bg-[#FAFAFA] transition-colors">
                <td className="px-5 py-3.5 text-[13.5px] font-semibold text-[#0D1117]">{asset.name}</td>
                <td className="px-5 py-3.5">
                  <span className={`text-[12px] font-medium px-2.5 py-1 rounded-full ${asset.type === "Model" ? "bg-[#F3F0FF] text-[#6256C7]" : "bg-[#EDF3FF] text-[#356AE6]"}`}>
                    {asset.type}
                  </span>
                </td>
                <td className="px-5 py-3.5 text-[13px] text-[#6B7280]">{asset.owner}</td>
                <td className="px-5 py-3.5">
                  <span className="text-[12px] font-semibold px-2.5 py-1 rounded-full"
                    style={{ color: RISK_COLORS[asset.risk].text, background: RISK_COLORS[asset.risk].bg }}>
                    {asset.risk}
                  </span>
                </td>
                <td className="px-5 py-3.5">
                  <span className="text-[12px] font-semibold px-2.5 py-1 rounded-full"
                    style={{ color: STATUS_COLORS[asset.status].text, background: STATUS_COLORS[asset.status].bg }}>
                    {asset.status}
                  </span>
                </td>
                <td className="px-5 py-3.5 text-[13px] text-[#9CA3AF]">{asset.updated}</td>
                <td className="px-5 py-3.5">
                  <button className="text-[12px] font-semibold text-[#356AE6] hover:text-[#2458D0] px-2.5 py-1 rounded-lg hover:bg-[#F0F4FF] transition-colors">
                    Review
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Audit trail */}
      <div className="bg-white border border-[#E9EAEC] rounded-2xl overflow-hidden">
        <div className="px-5 py-4 border-b border-[#E9EAEC]">
          <h3 className="text-[14px] font-bold text-[#0D1117]" style={{ fontFamily: "Manrope, sans-serif" }}>Audit trail</h3>
        </div>
        <div className="divide-y divide-[#F3F4F6]">
          {AUDIT.map((entry, i) => (
            <div key={i} className="flex items-center gap-4 px-5 py-3.5">
              <div className="w-8 h-8 rounded-full bg-[#F5F7FB] flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-[#D1D5DB]" />
              </div>
              <div className="flex-1">
                <span className="text-[13.5px] font-semibold text-[#0D1117]">{entry.action}</span>
                <span className="text-[13px] text-[#9CA3AF]"> on </span>
                <span className="text-[13px] text-[#374151] font-medium">{entry.target}</span>
              </div>
              <span className="text-[12.5px] text-[#9CA3AF]">{entry.user}</span>
              <span className="text-[12px] text-[#9CA3AF] w-24 text-right flex-shrink-0">{entry.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
