"use client";
import { useState } from "react";
import { AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const REVENUE = [
  { month: "Jun", value: 280 }, { month: "Jul", value: 310 }, { month: "Aug", value: 335 },
  { month: "Sep", value: 358 }, { month: "Oct", value: 390 }, { month: "Nov", value: 412 },
];

const CHANNELS = [
  { name: "Organic", value: 182 }, { name: "Paid", value: 134 },
  { name: "Email", value: 98 }, { name: "Referral", value: 76 }, { name: "Social", value: 54 },
];

const PIE_DATA = [
  { name: "Enterprise", value: 42, color: "#356AE6" },
  { name: "Mid-Market", value: 31, color: "#6256C7" },
  { name: "SMB", value: 18, color: "#16A6A1" },
  { name: "Startup", value: 9, color: "#269B70" },
];

const TABS = ["Overview", "Revenue", "Customers", "Marketing"];

function ChartTooltip({ active, payload, label }: { active?: boolean; payload?: { value: number }[]; label?: string }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-[#0D1117] text-white px-3 py-2 rounded-xl text-[12px] shadow-xl border border-white/10">
      <p className="text-white/50 mb-0.5">{label}</p>
      <p className="font-semibold">{payload[0].value}</p>
    </div>
  );
}

export default function DashboardsPage() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-[18px] font-bold text-[#0D1117] mb-1" style={{ fontFamily: "Manrope, sans-serif" }}>Dashboards</h1>
          <p className="text-[13px] text-[#9CA3AF]">Interactive views of your business metrics</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 border border-[#E4E7EC] text-[#374151] text-[13.5px] font-semibold rounded-xl hover:bg-[#F5F7FB] transition-colors">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          New dashboard
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 border-b border-[#E9EAEC] mb-6">
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setActiveTab(t)}
            className={`px-4 py-2.5 text-[13.5px] font-medium border-b-2 -mb-px transition-colors ${
              activeTab === t ? "border-[#356AE6] text-[#356AE6]" : "border-transparent text-[#6B7280] hover:text-[#374151]"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* KPI row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Total revenue", value: "$2.4M", change: "+18%", pos: true },
          { label: "Active customers", value: "14,820", change: "+6.1%", pos: true },
          { label: "Avg order value", value: "$162", change: "+4.5%", pos: true },
          { label: "Churn rate", value: "2.1%", change: "-0.4%", pos: true },
        ].map((kpi) => (
          <div key={kpi.label} className="bg-white border border-[#E9EAEC] rounded-2xl p-5">
            <p className="text-[12px] text-[#9CA3AF] font-medium mb-2">{kpi.label}</p>
            <p className="text-[26px] font-black text-[#0D1117] mb-1" style={{ fontFamily: "Manrope, sans-serif" }}>{kpi.value}</p>
            <span className="text-[12px] font-semibold text-[#269B70] bg-[#F0FDF4] px-2 py-0.5 rounded-full">{kpi.change}</span>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
        <div className="lg:col-span-2 bg-white border border-[#E9EAEC] rounded-2xl p-5">
          <h3 className="text-[14px] font-bold text-[#0D1117] mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>Revenue trend</h3>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={REVENUE} margin={{ top: 4, right: 4, bottom: 0, left: -20 }}>
              <defs>
                <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#356AE6" stopOpacity={0.15}/>
                  <stop offset="100%" stopColor="#356AE6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#9CA3AF" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "#9CA3AF" }} axisLine={false} tickLine={false} />
              <Tooltip content={<ChartTooltip />} />
              <Area type="monotone" dataKey="value" stroke="#356AE6" fill="url(#rev)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white border border-[#E9EAEC] rounded-2xl p-5">
          <h3 className="text-[14px] font-bold text-[#0D1117] mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>Revenue by segment</h3>
          <ResponsiveContainer width="100%" height={160}>
            <PieChart>
              <Pie data={PIE_DATA} cx="50%" cy="50%" innerRadius={45} outerRadius={70} paddingAngle={3} dataKey="value">
                {PIE_DATA.map((entry, i) => <Cell key={i} fill={entry.color} />)}
              </Pie>
              <Tooltip formatter={(v) => `${v}%`} />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-1.5 mt-2">
            {PIE_DATA.map((d) => (
              <div key={d.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ background: d.color }} />
                  <span className="text-[12px] text-[#6B7280]">{d.name}</span>
                </div>
                <span className="text-[12px] font-semibold text-[#374151]">{d.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Channel bar chart */}
      <div className="bg-white border border-[#E9EAEC] rounded-2xl p-5">
        <h3 className="text-[14px] font-bold text-[#0D1117] mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>Revenue by marketing channel ($k)</h3>
        <ResponsiveContainer width="100%" height={180}>
          <BarChart data={CHANNELS} margin={{ top: 4, right: 4, bottom: 0, left: -20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" vertical={false} />
            <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#9CA3AF" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 11, fill: "#9CA3AF" }} axisLine={false} tickLine={false} />
            <Tooltip content={<ChartTooltip />} />
            <Bar dataKey="value" fill="#6256C7" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
