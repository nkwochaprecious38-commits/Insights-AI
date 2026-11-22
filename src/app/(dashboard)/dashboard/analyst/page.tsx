"use client";
import { useState, useRef, useEffect } from "react";

const DATASETS = [
  { id: "q4-sales", label: "Q4 Sales Data · 12,480 rows" },
  { id: "customers", label: "Customer Database · 8,230 rows" },
  { id: "marketing", label: "Marketing Analytics · 5,610 rows" },
  { id: "operations", label: "Operations Log · 22,100 rows" },
];

type Message = {
  role: "user" | "assistant";
  content: string;
  chart?: { labels: string[]; values: number[]; color: string };
  insight?: string;
};

const SUGGESTIONS = [
  "Which marketing channel generated the most revenue last quarter?",
  "What is our customer churn rate by segment?",
  "Show me revenue trends over the last 6 months",
  "Which products have the highest profit margin?",
  "What are our top 5 customer segments by lifetime value?",
];

function simulateResponse(q: string): Message {
  const ql = q.toLowerCase();
  if (ql.includes("channel") || ql.includes("marketing")) {
    return {
      role: "assistant",
      content: "Based on your Q4 Sales Data, Organic Search generated the highest revenue at $182,000 (34% of total). Email had the strongest ROI at 4.2x spend.",
      chart: {
        labels: ["Organic", "Paid Search", "Email", "Referral", "Social"],
        values: [182, 134, 98, 76, 54],
        color: "#356AE6",
      },
      insight: "Increase Email investment: highest ROI at 4.2x with 23% lower acquisition cost than Paid Search.",
    };
  }
  if (ql.includes("churn") || ql.includes("retention")) {
    return {
      role: "assistant",
      content: "Your overall churn rate is 2.1% this month, down from 2.5% last month. SMB segment shows highest churn at 3.8%, while Enterprise remains stable at 0.9%.",
      chart: {
        labels: ["Enterprise", "Mid-Market", "SMB", "Startup"],
        values: [0.9, 1.6, 3.8, 2.4],
        color: "#6256C7",
      },
      insight: "SMB churn is 81% above your enterprise rate. Focus retention programs on the SMB segment first.",
    };
  }
  if (ql.includes("revenue") || ql.includes("trend")) {
    return {
      role: "assistant",
      content: "Revenue has grown 18% YTD reaching $2.4M. November was your strongest month at $412,000. The forecast for Q1 2027 is $680,000 based on current trajectory.",
      chart: {
        labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
        values: [280, 310, 335, 358, 390, 412],
        color: "#16A6A1",
      },
      insight: "Q4 growth rate of 14% MoM is above your historical average of 9%. On track to exceed annual target by 12%.",
    };
  }
  return {
    role: "assistant",
    content: "I analyzed your dataset and found several key patterns. The data shows consistent growth in your primary segments with some variance in the secondary cohorts that warrants closer review.",
    chart: {
      labels: ["Segment A", "Segment B", "Segment C", "Segment D"],
      values: [420, 310, 185, 95],
      color: "#356AE6",
    },
    insight: "Segment A contributes 42% of total value but represents only 18% of your customer base. Prioritizing this segment could significantly improve overall performance.",
  };
}

export default function AnalystPage() {
  const [dataset, setDataset] = useState(DATASETS[0].id);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function send(text: string) {
    if (!text.trim() || loading) return;
    const userMsg: Message = { role: "user", content: text };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1400));
    setMessages((m) => [...m, simulateResponse(text)]);
    setLoading(false);
  }

  const selectedDataset = DATASETS.find((d) => d.id === dataset);

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="px-6 py-5 border-b border-[#E9EAEC] flex items-center justify-between flex-shrink-0">
        <div>
          <h1 className="text-[18px] font-bold text-[#0D1117]" style={{ fontFamily: "Manrope, sans-serif" }}>AI Data Analyst</h1>
          <p className="text-[13px] text-[#9CA3AF] mt-0.5">Ask questions about your data in plain language</p>
        </div>
        <div className="flex items-center gap-3">
          <select
            value={dataset}
            onChange={(e) => setDataset(e.target.value)}
            className="text-[13px] border border-[#E9EAEC] rounded-xl px-3 py-2 bg-white text-[#374151] focus:outline-none focus:border-[#356AE6]"
          >
            {DATASETS.map((d) => (
              <option key={d.id} value={d.id}>{d.label}</option>
            ))}
          </select>
          {messages.length > 0 && (
            <button
              onClick={() => setMessages([])}
              className="text-[13px] text-[#9CA3AF] hover:text-[#374151] px-3 py-2 rounded-xl hover:bg-[#F5F7FB] transition-colors"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Chat area */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
        {messages.length === 0 ? (
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <div className="w-12 h-12 rounded-2xl bg-[#172B4D] flex items-center justify-center mx-auto mb-4">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 2L13.5 8.5H20.5L14.5 12.5L16.5 19L11 15L5.5 19L7.5 12.5L1.5 8.5H8.5L11 2Z" fill="#356AE6"/></svg>
              </div>
              <h2 className="text-[17px] font-bold text-[#0D1117] mb-2" style={{ fontFamily: "Manrope, sans-serif" }}>Ask anything about your data</h2>
              <p className="text-[13.5px] text-[#9CA3AF]">
                Using: <span className="font-semibold text-[#374151]">{selectedDataset?.label}</span>
              </p>
            </div>
            <div className="space-y-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="w-full text-left px-4 py-3 rounded-xl border border-[#E9EAEC] hover:border-[#356AE6] hover:bg-[#F0F4FF] transition-all text-[13.5px] text-[#374151] group"
                >
                  <span className="text-[#9CA3AF] mr-2 group-hover:text-[#356AE6]">→</span>
                  {s}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto space-y-6">
            {messages.map((msg, i) => (
              <div key={i}>
                {msg.role === "user" ? (
                  <div className="flex justify-end">
                    <div className="bg-[#172B4D] text-white text-[14px] rounded-2xl rounded-tr-sm px-4 py-3 max-w-[75%] leading-relaxed">
                      {msg.content}
                    </div>
                  </div>
                ) : (
                  <div className="flex gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#172B4D] flex items-center justify-center flex-shrink-0 mt-1">
                      <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M5.5 1L7 4.5H10.5L7.5 6.5L8.5 10L5.5 8L2.5 10L3.5 6.5L0.5 4.5H4L5.5 1Z" fill="#356AE6"/></svg>
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="bg-white border border-[#E9EAEC] rounded-2xl rounded-tl-sm px-4 py-3.5 text-[14px] text-[#374151] leading-relaxed">
                        {msg.content}
                      </div>

                      {msg.chart && (
                        <div className="bg-white border border-[#E9EAEC] rounded-2xl p-4">
                          <p className="text-[12px] font-semibold text-[#374151] mb-4 uppercase tracking-wide">Chart: {msg.chart.labels.join(", ")}</p>
                          <div className="space-y-2.5">
                            {msg.chart.labels.map((label, j) => {
                              const max = Math.max(...msg.chart!.values);
                              const pct = (msg.chart!.values[j] / max) * 100;
                              return (
                                <div key={label} className="flex items-center gap-3">
                                  <span className="text-[12px] text-[#6B7280] w-24 flex-shrink-0">{label}</span>
                                  <div className="flex-1 h-2 bg-[#F3F4F6] rounded-full overflow-hidden">
                                    <div
                                      className="h-full rounded-full"
                                      style={{ width: `${pct}%`, background: msg.chart!.color }}
                                    />
                                  </div>
                                  <span className="text-[12px] font-semibold text-[#374151] w-14 text-right">
                                    {typeof msg.chart!.values[j] === "number" && msg.chart!.values[j] > 10
                                      ? `$${msg.chart!.values[j]}k`
                                      : `${msg.chart!.values[j]}%`}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {msg.insight && (
                        <div className="flex items-start gap-2.5 bg-[#EEF0FF] border border-indigo-200 rounded-xl px-4 py-3">
                          <svg className="flex-shrink-0 mt-0.5" width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 1L8 5H12L8.5 7.5L9.5 11.5L6.5 9.5L3.5 11.5L4.5 7.5L1 5H5L6.5 1Z" fill="#6256C7"/></svg>
                          <p className="text-[13px] text-[#4338CA] font-medium leading-snug">{msg.insight}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex gap-3">
                <div className="w-7 h-7 rounded-full bg-[#172B4D] flex items-center justify-center flex-shrink-0">
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M5.5 1L7 4.5H10.5L7.5 6.5L8.5 10L5.5 8L2.5 10L3.5 6.5L0.5 4.5H4L5.5 1Z" fill="#356AE6"/></svg>
                </div>
                <div className="bg-white border border-[#E9EAEC] rounded-2xl rounded-tl-sm px-4 py-3.5 flex gap-1 items-center">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-[#9CA3AF] animate-bounce"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>
        )}
      </div>

      {/* Input */}
      <div className="px-6 py-4 border-t border-[#E9EAEC] flex-shrink-0">
        <div className="max-w-3xl mx-auto flex gap-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && send(input)}
            placeholder="Ask a question about your data..."
            className="flex-1 bg-[#F5F7FB] border border-[#E9EAEC] rounded-xl px-4 py-3 text-[14px] text-[#0D1117] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#356AE6] focus:bg-white transition-colors"
          />
          <button
            onClick={() => send(input)}
            disabled={!input.trim() || loading}
            className="w-11 h-11 rounded-xl bg-[#356AE6] flex items-center justify-center hover:bg-[#2458D0] disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex-shrink-0"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M8 3l5 5-5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
