"use client";
import { useState } from "react";
import Link from "next/link";

const starterFeatures = [
  "Up to 5 datasets",
  "AI Data Analyst (50 queries/mo)",
  "3 dashboard templates",
  "Automated reports (5/mo)",
  "Email support",
];

const proFeatures = [
  "Unlimited datasets",
  "AI Data Analyst (unlimited)",
  "Custom dashboard builder",
  "Unlimited reports",
  "Predictive forecasting",
  "Anomaly detection",
  "Team collaboration (5 seats)",
  "API access",
  "Priority support",
  "Data governance tools",
];

const enterpriseFeatures = [
  "Everything in Professional",
  "Unlimited team seats",
  "Custom AI model training",
  "Advanced governance and audit",
  "SSO and SAML authentication",
  "Dedicated onboarding",
  "SLA uptime guarantee",
  "Custom integrations",
  "White-label reporting",
  "Dedicated success manager",
];

const comparisonRows = [
  { feature: "Datasets", starter: "5", pro: "Unlimited", enterprise: "Unlimited" },
  { feature: "AI Analyst queries", starter: "50/mo", pro: "Unlimited", enterprise: "Unlimited" },
  { feature: "Team seats", starter: "1", pro: "5", enterprise: "Unlimited" },
  { feature: "Dashboard templates", starter: "3", pro: "Unlimited", enterprise: "Unlimited" },
  { feature: "Report generation", starter: "5/mo", pro: "Unlimited", enterprise: "Unlimited" },
  { feature: "Predictive forecasting", starter: false, pro: true, enterprise: true },
  { feature: "Anomaly detection", starter: false, pro: true, enterprise: true },
  { feature: "Experiment tracking", starter: false, pro: true, enterprise: true },
  { feature: "API access", starter: false, pro: true, enterprise: true },
  { feature: "Data governance", starter: false, pro: true, enterprise: true },
  { feature: "SSO / SAML", starter: false, pro: false, enterprise: true },
  { feature: "Custom AI model training", starter: false, pro: false, enterprise: true },
  { feature: "Dedicated success manager", starter: false, pro: false, enterprise: true },
];

const faqs = [
  {
    q: "Can I start for free?",
    a: "Yes. You can sign up for free and explore the platform with sample data. When you are ready to connect your own data, choose the plan that fits your needs.",
  },
  {
    q: "What counts as a dataset?",
    a: "A dataset is any file, database table, or connected data source you bring into the platform. Each CSV upload, spreadsheet, or integration sync counts as one dataset.",
  },
  {
    q: "How does billing work?",
    a: "Plans are billed monthly or annually. Annual plans are charged upfront for the full year at the discounted rate. You can upgrade, downgrade, or cancel at any time.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. All data is encrypted at rest and in transit using AES-256 and TLS 1.3. We do not use your data to train models. Enterprise plans include additional security controls and compliance documentation.",
  },
  {
    q: "What integrations are supported?",
    a: "Insights AI connects to 40+ sources including PostgreSQL, MySQL, BigQuery, Salesforce, HubSpot, Stripe, Google Analytics, Shopify, and more. Additional integrations are added regularly.",
  },
  {
    q: "Can I change plans later?",
    a: "Yes. You can upgrade or downgrade your plan at any time. Upgrades take effect immediately. Downgrades take effect at the start of the next billing period.",
  },
];

function Check({ color = "#356AE6" }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="7" fill={color + "15"} />
      <path d="M5 8l2 2 4-4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Cross() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M4 4l6 6M10 4l-6 6" stroke="#D1D5DB" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-32 pb-16 text-center border-b border-[#F3F4F6]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <p className="text-xs font-bold text-[#356AE6] uppercase tracking-widest mb-6">Pricing</p>
          <h1
            className="text-5xl sm:text-6xl font-black text-[#0D1117] mb-5"
            style={{ fontFamily: "Manrope, sans-serif", letterSpacing: "-0.03em" }}
          >
            Simple, transparent pricing.
          </h1>
          <p className="text-[17px] text-[#6B7280] mb-10">Start free. Scale as you grow.</p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 p-1 bg-[#F3F4F6] rounded-xl">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-lg text-[14px] font-semibold transition-all ${
                !annual ? "bg-white shadow text-[#0D1117]" : "text-[#6B7280]"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-lg text-[14px] font-semibold transition-all flex items-center gap-2 ${
                annual ? "bg-white shadow text-[#0D1117]" : "text-[#6B7280]"
              }`}
            >
              Annual
              <span className="text-[11px] font-bold bg-[#EDF8F3] text-[#269B70] px-1.5 py-0.5 rounded-md">Save 20%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="py-16 bg-[#F9FAFB]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Starter */}
            <div className="bg-white rounded-2xl border border-[#E9EAEC] p-7 flex flex-col">
              <div className="mb-6">
                <p className="text-xs font-bold text-[#6B7280] uppercase tracking-widest mb-3">Starter</p>
                <div className="flex items-end gap-1.5 mb-1">
                  <span className="text-[42px] font-black text-[#0D1117]" style={{ fontFamily: "Manrope, sans-serif", lineHeight: 1 }}>
                    ${annual ? "38" : "47"}
                  </span>
                  <span className="text-[14px] text-[#9CA3AF] mb-1">/mo</span>
                </div>
                {annual && <p className="text-[12px] text-[#9CA3AF]">Billed annually as $456/year</p>}
                <p className="text-[14px] text-[#6B7280] mt-3">For individuals and small teams getting started with data analysis.</p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {starterFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-2.5">
                    <Check />
                    <span className="text-[13.5px] text-[#374151]">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://selar.com/47plan?currency=USD"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center py-3 px-5 border border-[#E9EAEC] rounded-xl text-[14px] font-semibold text-[#374151] hover:border-[#D1D5DB] hover:bg-[#F9FAFB] transition-colors"
              >
                Get started
              </a>
            </div>

            {/* Professional */}
            <div className="bg-white rounded-2xl border-2 border-[#356AE6] p-7 flex flex-col relative shadow-[0_8px_32px_rgba(53,106,230,0.12)]">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="bg-[#356AE6] text-white text-[11px] font-bold px-3 py-1 rounded-full">Most popular</span>
              </div>
              <div className="mb-6">
                <p className="text-xs font-bold text-[#356AE6] uppercase tracking-widest mb-3">Professional</p>
                <div className="flex items-end gap-1.5 mb-1">
                  <span className="text-[42px] font-black text-[#0D1117]" style={{ fontFamily: "Manrope, sans-serif", lineHeight: 1 }}>
                    ${annual ? "46" : "57"}
                  </span>
                  <span className="text-[14px] text-[#9CA3AF] mb-1">/mo</span>
                </div>
                {annual && <p className="text-[12px] text-[#9CA3AF]">Billed annually as $552/year</p>}
                <p className="text-[14px] text-[#6B7280] mt-3">For growing businesses that need unlimited analysis and team features.</p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {proFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-2.5">
                    <Check color="#356AE6" />
                    <span className="text-[13.5px] text-[#374151]">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://selar.com/57plan?currency=USD"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center py-3 px-5 bg-[#356AE6] rounded-xl text-[14px] font-semibold text-white hover:bg-[#2458D0] transition-colors"
              >
                Get started
              </a>
            </div>

            {/* Enterprise */}
            <div className="bg-[#0D1117] rounded-2xl border border-white/10 p-7 flex flex-col">
              <div className="mb-6">
                <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-3">Enterprise</p>
                <div className="flex items-end gap-1.5 mb-1">
                  <span className="text-[42px] font-black text-white" style={{ fontFamily: "Manrope, sans-serif", lineHeight: 1 }}>
                    ${annual ? "78" : "97"}
                  </span>
                  <span className="text-[14px] text-white/35 mb-1">/mo</span>
                </div>
                {annual && <p className="text-[12px] text-white/30">Billed annually as $936/year</p>}
                <p className="text-[14px] text-white/50 mt-3">For large organizations that need unlimited scale and advanced security.</p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {enterpriseFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-2.5">
                    <Check color="#16A6A1" />
                    <span className="text-[13.5px] text-white/70">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://selar.com/97plan?currency=USD"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center py-3 px-5 border border-white/15 rounded-xl text-[14px] font-semibold text-white hover:bg-white/5 transition-colors"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold text-[#356AE6] uppercase tracking-widest mb-4">Compare plans</p>
            <h2
              className="text-4xl font-black text-[#0D1117]"
              style={{ fontFamily: "Manrope, sans-serif", letterSpacing: "-0.03em" }}
            >
              Everything side by side.
            </h2>
          </div>
          <div className="rounded-2xl border border-[#E9EAEC] overflow-hidden">
            <div className="grid grid-cols-4 bg-[#F9FAFB] border-b border-[#E9EAEC]">
              <div className="p-4 col-span-1" />
              {["Starter", "Professional", "Enterprise"].map((p) => (
                <div key={p} className="p-4 text-center">
                  <p className="text-[13px] font-bold text-[#0D1117]" style={{ fontFamily: "Manrope, sans-serif" }}>{p}</p>
                </div>
              ))}
            </div>
            {comparisonRows.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-4 border-b border-[#F3F4F6] last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"}`}
              >
                <div className="p-4 col-span-1">
                  <span className="text-[13.5px] text-[#374151]">{row.feature}</span>
                </div>
                {[row.starter, row.pro, row.enterprise].map((val, ci) => (
                  <div key={ci} className="p-4 flex items-center justify-center">
                    {typeof val === "boolean" ? (
                      val ? <Check color={ci === 1 ? "#356AE6" : ci === 2 ? "#16A6A1" : "#356AE6"} /> : <Cross />
                    ) : (
                      <span className="text-[13px] text-[#374151] font-medium">{val}</span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold text-[#356AE6] uppercase tracking-widest mb-4">FAQ</p>
            <h2
              className="text-4xl font-black text-[#0D1117]"
              style={{ fontFamily: "Manrope, sans-serif", letterSpacing: "-0.03em" }}
            >
              Common questions.
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-[#E9EAEC] overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between p-5 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-[14.5px] font-semibold text-[#0D1117]">{faq.q}</span>
                  <svg
                    width="16" height="16" viewBox="0 0 16 16" fill="none"
                    className={`flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                  >
                    <path d="M4 6l4 4 4-4" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5">
                    <p className="text-[14px] text-[#6B7280] leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-[#172B4D] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] opacity-10" style={{ background: "radial-gradient(circle, #356AE6 0%, transparent 70%)" }} />
        <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <h2
            className="text-5xl font-black text-white mb-6"
            style={{ fontFamily: "Manrope, sans-serif", letterSpacing: "-0.03em" }}
          >
            Start turning your data
            <br />
            into decisions today.
          </h2>
          <p className="text-[17px] text-white/55 mb-10">
            Sign up for free. No credit card required.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#172B4D] text-[15px] font-bold rounded-xl hover:bg-[#F5F7FB] transition-colors"
          >
            Get started free
          </Link>
        </div>
      </section>
    </div>
  );
}
