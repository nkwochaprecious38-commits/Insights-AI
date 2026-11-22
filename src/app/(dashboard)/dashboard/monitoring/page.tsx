"use client";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const accuracyData = [
  { month: "Jun", value: 91.2 },
  { month: "Jul", value: 92.8 },
  { month: "Aug", value: 91.9 },
  { month: "Sep", value: 93.4 },
  { month: "Oct", value: 94.1 },
  { month: "Nov", value: 93.8 },
];

const driftData = [
  { day: "Mon", drift: 0.02 },
  { day: "Tue", drift: 0.03 },
  { day: "Wed", drift: 0.05 },
  { day: "Thu", drift: 0.08 },
  { day: "Fri", drift: 0.12 },
  { day: "Sat", drift: 0.09 },
  { day: "Sun", drift: 0.11 },
];

const models = [
  { name: "Revenue Forecast v3", accuracy: "94.1%", status: "Healthy", drift: "Low", predictions: "12,440", updated: "2h ago" },
  { name: "Churn Predictor v2", accuracy: "88.7%", status: "Warning", drift: "Medium", predictions: "8,230", updated: "4h ago" },
  { name: "Demand Planner v1", accuracy: "91.3%", status: "Healthy", drift: "Low", predictions: "5,180", updated: "1d ago" },
  { name: "CLV Model v4", accuracy: "85.2%", status: "Degraded", drift: "High", predictions: "3,920", updated: "3d ago" },
];

const statusColors: Record<string, { text: string; bg: string }> = {
  Healthy: { text: "#269B70", bg: "#F0FDF4" },
  Warning: { text: "#E6A23C", bg: "#FFFBEB" },
  Degraded: { text: "#EF4444", bg: "#FEF2F2" },
};

const driftColors: Record<string, string> = {
  Low: "#269B70",
  Medium: "#E6A23C",
  High: "#EF4444",
};

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: { value: number }[]; label?: string }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-[#0D1117] text-white px-3 py-2 rounded-xl text-[12px] shadow-lg">
      <p className="text-white/50 mb-0.5">{label}</p>
      <p className="font-semibold">{payload[0].value}</p>
    </div>
  );
}

export default function MonitoringPage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-[18px] font-bold text-[#0D1117] mb-1" style={{ fontFamily: "Manrope, sans-serif" }}>Model Monitoring</h1>
        <p className="text-[13px] text-[#9CA3AF]">Track accuracy, drift, and health of your deployed models</p>
      </div>

      {/* KPI row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-7">
        {[
          { label: "Active models", value: "4", sub: "2 updated today", color: "#356AE6" },
          { label: "Avg accuracy", value: "89.8%", sub: "+1.2% vs last week", color: "#269B70" },
          { label: "Drift alerts", value: "1", sub: "CLV Model: high drift", color: "#EF4444" },
          { label: "Predictions today", value: "29.8k", sub: "Across all models", color: "#6256C7" },
        ].map((kpi) => (
          <div key={kpi.label} className="bg-white border border-[#E9EAEC] rounded-2xl p-5">
            <p className="text-[12px] text-[#9CA3AF] font-medium mb-2">{kpi.label}</p>
            <p className="text-[26px] font-black text-[#0D1117] mb-1" style={{ fontFamily: "Manrope, sans-serif" }}>{kpi.value}</p>
            <p className="text-[12px]" style={{ color: kpi.color }}>{kpi.sub}</p>
          </div>
        ))}
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-7">
        <div className="bg-white border border-[#E9EAEC] rounded-2xl p-5">
          <h3 className="text-[14px] font-bold text-[#0D1117] mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>Accuracy trend</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={accuracyData} margin={{ top: 4, right: 4, bottom: 0, left: -20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#9CA3AF" }} axisLine={false} tickLine={false} />
              <YAxis domain={[88, 96]} tick={{ fontSize: 11, fill: "#9CA3AF" }} axisLine={false} tickLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Line type="monotone" dataKey="value" stroke="#356AE6" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white border border-[#E9EAEC] rounded-2xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[14px] font-bold text-[#0D1117]" style={{ fontFamily: "Manrope, sans-serif" }}>Data drift (this week)</h3>
            <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 rounded-lg px-2.5 py-1">
              <div className="w-1.5 h-1.5 rounded-full bg-[#E6A23C]" />
              <span className="text-[11px] font-semibold text-[#E6A23C]">Drift detected: CLV Model</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={driftData} margin={{ top: 4, right: 4, bottom: 0, left: -20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
              <XAxis dataKey="day" tick={{ fontSize: 11, fill: "#9CA3AF" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "#9CA3AF" }} axisLine={false} tickLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="drift" stroke="#E6A23C" fill="#FEF3C7" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Model table */}
      <div className="bg-white border border-[#E9EAEC] rounded-2xl overflow-hidden">
        <div className="px-5 py-4 border-b border-[#E9EAEC]">
          <h3 className="text-[14px] font-bold text-[#0D1117]" style={{ fontFamily: "Manrope, sans-serif" }}>Model health summary</h3>
        </div>
        <table className="w-full">
          <thead>
            <tr className="bg-[#F9FAFB]">
              {["Model", "Accuracy", "Status", "Drift", "Predictions", "Last updated", ""].map((h) => (
                <th key={h} className="text-left text-[11px] font-semibold text-[#9CA3AF] uppercase tracking-wide px-5 py-3">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#F3F4F6]">
            {models.map((m) => (
              <tr key={m.name} className="hover:bg-[#FAFAFA] transition-colors">
                <td className="px-5 py-3.5 text-[13.5px] font-semibold text-[#0D1117]">{m.name}</td>
                <td className="px-5 py-3.5 text-[13.5px] text-[#374151] font-mono">{m.accuracy}</td>
                <td className="px-5 py-3.5">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[12px] font-semibold"
                    style={{ color: statusColors[m.status].text, background: statusColors[m.status].bg }}>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: statusColors[m.status].text }} />
                    {m.status}
                  </span>
                </td>
                <td className="px-5 py-3.5">
                  <span className="text-[13px] font-semibold" style={{ color: driftColors[m.drift] }}>{m.drift}</span>
                </td>
                <td className="px-5 py-3.5 text-[13.5px] text-[#6B7280]">{m.predictions}</td>
                <td className="px-5 py-3.5 text-[13px] text-[#9CA3AF]">{m.updated}</td>
                <td className="px-5 py-3.5">
                  <button className="text-[12px] font-semibold text-[#356AE6] hover:text-[#2458D0] px-2.5 py-1 rounded-lg hover:bg-[#F0F4FF] transition-colors">
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
