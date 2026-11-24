"use client";
import { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { createClient, isSupabaseConfigured } from "@/lib/supabase/client";
import Link from "next/link";
import { Upload, BarChart2, FileText, Brain, TrendingUp, TrendingDown } from "lucide-react";

const revenueData = [
  { month: "Apr", revenue: 185000, forecast: null },
  { month: "May", revenue: 210000, forecast: null },
  { month: "Jun", revenue: 198000, forecast: null },
  { month: "Jul", revenue: 234000, forecast: null },
  { month: "Aug", revenue: 251000, forecast: null },
  { month: "Sep", revenue: 278000, forecast: null },
  { month: "Oct", revenue: 295000, forecast: null },
  { month: "Nov", revenue: 312000, forecast: 312000 },
  { month: "Dec", revenue: null, forecast: 338000 },
  { month: "Jan", revenue: null, forecast: 362000 },
];

const activityData = [
  { day: "Mon", analyses: 12 },
  { day: "Tue", analyses: 19 },
  { day: "Wed", analyses: 15 },
  { day: "Thu", analyses: 28 },
  { day: "Fri", analyses: 22 },
  { day: "Sat", analyses: 8 },
  { day: "Sun", analyses: 5 },
];

const kpis = [
  { label: "Revenue", value: "$2.4M", change: "+18.0%", positive: true, sub: "vs last quarter" },
  { label: "Active Customers", value: "14,820", change: "+6.1%", positive: true, sub: "vs last month" },
  { label: "Avg Order Value", value: "$162", change: "+4.5%", positive: true, sub: "vs last month" },
  { label: "Churn Rate", value: "2.1%", change: "-0.4%", positive: true, sub: "vs last month" },
];

const sparkData = [3, 5, 4, 7, 6, 8, 9, 10, 9, 12];

function Sparkline({ color }: { color: string }) {
  const max = Math.max(...sparkData);
  const h = 32;
  const w = 80;
  const pts = sparkData
    .map((v, i) => `${(i / (sparkData.length - 1)) * w},${h - (v / max) * h}`)
    .join(" ");
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <defs>
        <linearGradient id={`sg-${color.replace("#", "")}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.2" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon
        points={`0,${h} ${pts} ${w},${h}`}
        fill={`url(#sg-${color.replace("#", "")})`}
      />
      <polyline
        points={pts}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const kpiColors = ["#356AE6", "#16A6A1", "#6256C7", "#269B70"];

const insights = [
  {
    color: "#356AE6",
    title: "Revenue acceleration in Enterprise",
    text: "Enterprise segment grew 34% month-over-month in October, outpacing SMB growth by 2.8x. Recommend increasing enterprise outreach and account expansion efforts.",
    time: "2 hours ago",
  },
  {
    color: "#269B70",
    title: "Churn rate at 6-month low",
    text: "Customer churn dropped to 2.1% this month, the lowest since May. Correlation analysis suggests the new onboarding flow introduced in September is the primary driver.",
    time: "5 hours ago",
  },
  {
    color: "#E6A23C",
    title: "Paid Search spend efficiency declining",
    text: "Paid Search CAC increased 18% over the past 30 days while conversion rates remained flat. Consider reallocating budget toward Organic and Email channels.",
    time: "Yesterday",
  },
];

const quickActions = [
  { label: "Upload Data", desc: "Add a new CSV or spreadsheet", icon: <Upload size={18} />, href: "/dashboard/sources", color: "#356AE6" },
  { label: "Run Analysis", desc: "Analyze an existing dataset", icon: <BarChart2 size={18} />, href: "/dashboard/analysis", color: "#6256C7" },
  { label: "New Report", desc: "Generate an AI-written report", icon: <FileText size={18} />, href: "/dashboard/reports", color: "#16A6A1" },
  { label: "View Models", desc: "Review predictive models", icon: <Brain size={18} />, href: "/dashboard/models", color: "#269B70" },
];

function greeting() {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 17) return "Good afternoon";
  return "Good evening";
}

const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; dataKey: string }>; label?: string }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-[#E9EAEC] rounded-xl shadow-lg px-3.5 py-2.5 text-[12px]">
      <p className="font-semibold text-[#374151] mb-1">{label}</p>
      {payload.map((p) => (
        <p key={p.dataKey} className="text-[#6B7280]">
          {p.dataKey === "revenue" ? "Actual" : p.dataKey === "forecast" ? "Forecast" : "Analyses"}: {" "}
          <span className="font-semibold text-[#0D1117]">
            {p.dataKey.includes("revenue") || p.dataKey.includes("forecast")
              ? `$${(p.value / 1000).toFixed(0)}k`
              : p.value}
          </span>
        </p>
      ))}
    </div>
  );
};

export default function DashboardOverviewPage() {
  const [userName, setUserName] = useState("there");

  useEffect(() => {
    if (!isSupabaseConfigured) return;
    createClient().auth.getUser().then(({ data }) => {
      if (data.user) {
        const name = data.user.user_metadata?.full_name || data.user.email?.split("@")[0];
        if (name) setUserName(name.split(" ")[0]);
      }
    });
  }, []);

  const [today, setToday] = useState("");
  const [greetingText, setGreetingText] = useState("Hello");
  useEffect(() => {
    setToday(new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" }));
    setGreetingText(greeting());
  }, []);

  return (
    <div className="p-5 sm:p-7 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1
            className="text-[22px] font-black text-[#0D1117]"
            style={{ fontFamily: "Manrope, sans-serif", letterSpacing: "-0.02em" }}
          >
            {greetingText}, {userName}.
          </h1>
          <p className="text-[13px] text-[#9CA3AF] mt-0.5">{today} · Demo workspace</p>
        </div>
        <div className="flex items-center gap-1.5 text-[12px] text-[#9CA3AF] bg-[#FFF8ED] border border-[#FCDFA0] rounded-lg px-3 py-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#E6A23C]" />
          Sample demo data · Connect your own data to get started
        </div>
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi, i) => (
          <div
            key={kpi.label}
            className="bg-white rounded-2xl border border-[#E9EAEC] p-5 hover:shadow-[0_4px_24px_rgba(0,0,0,0.07)] transition-all duration-200"
          >
            <div className="flex items-start justify-between mb-3">
              <p className="text-[12px] font-semibold text-[#9CA3AF]">{kpi.label}</p>
              <Sparkline color={kpiColors[i]} />
            </div>
            <p
              className="text-[26px] font-black text-[#0D1117] mb-1.5"
              style={{ fontFamily: "Manrope, sans-serif", letterSpacing: "-0.02em" }}
            >
              {kpi.value}
            </p>
            <div className="flex items-center gap-1.5">
              <span
                className={`inline-flex items-center gap-0.5 text-[12px] font-semibold px-1.5 py-0.5 rounded-md ${
                  kpi.positive ? "bg-[#EDF8F3] text-[#269B70]" : "bg-[#FEF2F2] text-[#EF4444]"
                }`}
              >
                {kpi.positive ? <TrendingUp size={11} /> : <TrendingDown size={11} />}
                {kpi.change}
              </span>
              <span className="text-[11.5px] text-[#9CA3AF]">{kpi.sub}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Revenue chart */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-[#E9EAEC] p-5">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-[14px] font-bold text-[#0D1117]" style={{ fontFamily: "Manrope, sans-serif" }}>Revenue trend</h2>
              <p className="text-[12px] text-[#9CA3AF] mt-0.5">Last 8 months with 90-day forecast</p>
            </div>
            <div className="flex gap-3">
              <span className="flex items-center gap-1.5 text-[11.5px] text-[#6B7280]">
                <span className="w-2 h-2 rounded-full bg-[#356AE6]" />Actual
              </span>
              <span className="flex items-center gap-1.5 text-[11.5px] text-[#6B7280]">
                <span className="w-2 h-2 rounded-full bg-[#6256C7]" />Forecast
              </span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={revenueData} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#356AE6" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#356AE6" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="fcastGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6256C7" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#6256C7" stopOpacity="0" />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" vertical={false} />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#9CA3AF" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "#9CA3AF" }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v / 1000}k`} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="revenue" stroke="#356AE6" strokeWidth={2} fill="url(#revGrad)" dot={false} connectNulls={false} />
              <Area type="monotone" dataKey="forecast" stroke="#6256C7" strokeWidth={2} strokeDasharray="4 3" fill="url(#fcastGrad)" dot={false} connectNulls />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Activity chart */}
        <div className="bg-white rounded-2xl border border-[#E9EAEC] p-5">
          <div className="mb-5">
            <h2 className="text-[14px] font-bold text-[#0D1117]" style={{ fontFamily: "Manrope, sans-serif" }}>Analysis activity</h2>
            <p className="text-[12px] text-[#9CA3AF] mt-0.5">Queries run this week</p>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={activityData} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" vertical={false} />
              <XAxis dataKey="day" tick={{ fontSize: 11, fill: "#9CA3AF" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "#9CA3AF" }} axisLine={false} tickLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="analyses" fill="#6256C7" radius={[4, 4, 0, 0]} maxBarSize={28} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Insights + Quick actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* AI Insights */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-[#E9EAEC] p-5">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-[14px] font-bold text-[#0D1117]" style={{ fontFamily: "Manrope, sans-serif" }}>Recent AI Insights</h2>
            <Link href="/dashboard/analyst" className="text-[12.5px] font-semibold text-[#356AE6] hover:text-[#2458D0]">
              View all
            </Link>
          </div>
          <div className="space-y-3">
            {insights.map((ins) => (
              <div
                key={ins.title}
                className="flex gap-3 p-4 rounded-xl border border-[#F3F4F6] hover:border-[#E9EAEC] transition-colors"
              >
                <div className="w-1 rounded-full flex-shrink-0 self-stretch" style={{ background: ins.color }} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <p className="text-[13.5px] font-semibold text-[#0D1117]">{ins.title}</p>
                    <span className="text-[11px] text-[#9CA3AF] flex-shrink-0">{ins.time}</span>
                  </div>
                  <p className="text-[12.5px] text-[#6B7280] leading-relaxed">{ins.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick actions */}
        <div className="bg-white rounded-2xl border border-[#E9EAEC] p-5">
          <h2 className="text-[14px] font-bold text-[#0D1117] mb-5" style={{ fontFamily: "Manrope, sans-serif" }}>Quick actions</h2>
          <div className="space-y-2.5">
            {quickActions.map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#F9FAFB] border border-transparent hover:border-[#E9EAEC] transition-all group"
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: action.color + "12", color: action.color }}
                >
                  {action.icon}
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-[#0D1117]">{action.label}</p>
                  <p className="text-[11.5px] text-[#9CA3AF]">{action.desc}</p>
                </div>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="ml-auto text-[#D1D5DB] group-hover:text-[#9CA3AF] transition-colors">
                  <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
