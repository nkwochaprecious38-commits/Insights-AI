"use client";
import { useState, useEffect } from "react";
import { createBrowserClient } from "@supabase/ssr";

type Tab = "profile" | "organization" | "notifications" | "security" | "subscription";

const TABS: { id: Tab; label: string }[] = [
  { id: "profile", label: "Profile" },
  { id: "organization", label: "Organization" },
  { id: "notifications", label: "Notifications" },
  { id: "security", label: "Security" },
  { id: "subscription", label: "Subscription" },
];

const PLANS = [
  { name: "Starter", price: "$47/mo", url: "https://selar.com/47plan?currency=USD", features: ["5 datasets", "AI Analyst", "Basic reports", "Email support"] },
  { name: "Professional", price: "$57/mo", url: "https://selar.com/57plan?currency=USD", features: ["25 datasets", "Advanced AI", "Custom dashboards", "Priority support"], popular: true },
  { name: "Enterprise", price: "$97/mo", url: "https://selar.com/97plan?currency=USD", features: ["Unlimited datasets", "Full platform", "Governance tools", "Dedicated support"] },
];

export default function SettingsPage() {
  const [tab, setTab] = useState<Tab>("profile");
  const [user, setUser] = useState<{ email?: string; full_name?: string; company?: string } | null>(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pwError, setPwError] = useState("");
  const [pwSuccess, setPwSuccess] = useState(false);
  const [notifs, setNotifs] = useState({ weekly: true, anomaly: true, reports: false, product: true });

  useEffect(() => {
    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) {
        setUser({
          email: data.user.email,
          full_name: data.user.user_metadata?.full_name || "",
          company: data.user.user_metadata?.company || "",
        });
      }
    });
  }, []);

  async function handleSaveProfile() {
    setSaving(true);
    await new Promise((r) => setTimeout(r, 800));
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  async function handleChangePassword() {
    setPwError("");
    setPwSuccess(false);
    if (newPassword.length < 8) return setPwError("Password must be at least 8 characters.");
    if (newPassword !== confirmPassword) return setPwError("Passwords do not match.");
    setSaving(true);
    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    setSaving(false);
    if (error) return setPwError(error.message);
    setPwSuccess(true);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  }

  return (
    <div className="p-6 max-w-3xl">
      <div className="mb-6">
        <h1 className="text-[18px] font-bold text-[#0D1117] mb-1" style={{ fontFamily: "Manrope, sans-serif" }}>Settings</h1>
        <p className="text-[13px] text-[#9CA3AF]">Manage your account, preferences, and subscription</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-7 border-b border-[#E9EAEC]">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`px-4 py-2.5 text-[13.5px] font-medium border-b-2 -mb-px transition-colors ${
              tab === t.id
                ? "border-[#356AE6] text-[#356AE6]"
                : "border-transparent text-[#6B7280] hover:text-[#374151]"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Profile */}
      {tab === "profile" && (
        <div className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[13px] font-medium text-[#374151] mb-1.5">Full name</label>
              <input
                value={user?.full_name || ""}
                onChange={(e) => setUser((u) => u ? { ...u, full_name: e.target.value } : u)}
                className="w-full px-3.5 py-2.5 border border-[#E4E7EC] rounded-xl text-[14px] text-[#0D1117] focus:outline-none focus:border-[#356AE6] bg-white"
              />
            </div>
            <div>
              <label className="block text-[13px] font-medium text-[#374151] mb-1.5">Email address</label>
              <input
                value={user?.email || ""}
                disabled
                className="w-full px-3.5 py-2.5 border border-[#E4E7EC] rounded-xl text-[14px] text-[#9CA3AF] bg-[#F9FAFB] cursor-not-allowed"
              />
            </div>
          </div>
          <div>
            <label className="block text-[13px] font-medium text-[#374151] mb-1.5">Company</label>
            <input
              value={user?.company || ""}
              onChange={(e) => setUser((u) => u ? { ...u, company: e.target.value } : u)}
              className="w-full px-3.5 py-2.5 border border-[#E4E7EC] rounded-xl text-[14px] text-[#0D1117] focus:outline-none focus:border-[#356AE6] bg-white"
            />
          </div>
          <div className="pt-2">
            <button
              onClick={handleSaveProfile}
              disabled={saving}
              className="px-5 py-2.5 bg-[#172B4D] text-white text-[13.5px] font-semibold rounded-xl hover:bg-[#1E3A5F] disabled:opacity-50 transition-colors"
            >
              {saving ? "Saving..." : saved ? "Saved" : "Save changes"}
            </button>
          </div>
        </div>
      )}

      {/* Organization */}
      {tab === "organization" && (
        <div className="space-y-5">
          <div>
            <label className="block text-[13px] font-medium text-[#374151] mb-1.5">Organization name</label>
            <input
              defaultValue="My Organization"
              className="w-full px-3.5 py-2.5 border border-[#E4E7EC] rounded-xl text-[14px] focus:outline-none focus:border-[#356AE6]"
            />
          </div>
          <div>
            <label className="block text-[13px] font-medium text-[#374151] mb-1.5">Industry</label>
            <select className="w-full px-3.5 py-2.5 border border-[#E4E7EC] rounded-xl text-[14px] focus:outline-none focus:border-[#356AE6] bg-white">
              <option>Technology</option>
              <option>Finance</option>
              <option>Retail / Ecommerce</option>
              <option>Healthcare</option>
              <option>Manufacturing</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-[13px] font-medium text-[#374151] mb-1.5">Company size</label>
            <select className="w-full px-3.5 py-2.5 border border-[#E4E7EC] rounded-xl text-[14px] focus:outline-none focus:border-[#356AE6] bg-white">
              <option>1 to 10</option>
              <option>11 to 50</option>
              <option>51 to 200</option>
              <option>201 to 1000</option>
              <option>1000+</option>
            </select>
          </div>
          <button className="px-5 py-2.5 bg-[#172B4D] text-white text-[13.5px] font-semibold rounded-xl hover:bg-[#1E3A5F] transition-colors">
            Save changes
          </button>
        </div>
      )}

      {/* Notifications */}
      {tab === "notifications" && (
        <div className="space-y-3">
          {[
            { key: "weekly" as const, label: "Weekly summary report", desc: "Receive a summary of your key metrics every Monday" },
            { key: "anomaly" as const, label: "Anomaly alerts", desc: "Get notified immediately when unusual patterns are detected" },
            { key: "reports" as const, label: "Report completions", desc: "Be notified when AI-generated reports are ready" },
            { key: "product" as const, label: "Product updates", desc: "Receive updates about new features and improvements" },
          ].map((item) => (
            <div key={item.key} className="flex items-start justify-between p-4 bg-white border border-[#E9EAEC] rounded-xl">
              <div>
                <p className="text-[14px] font-semibold text-[#0D1117]">{item.label}</p>
                <p className="text-[13px] text-[#9CA3AF] mt-0.5">{item.desc}</p>
              </div>
              <button
                onClick={() => setNotifs((n) => ({ ...n, [item.key]: !n[item.key] }))}
                className={`relative w-10 h-6 rounded-full transition-colors flex-shrink-0 ml-6 mt-0.5 ${notifs[item.key] ? "bg-[#356AE6]" : "bg-[#E4E7EC]"}`}
              >
                <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${notifs[item.key] ? "translate-x-4" : "translate-x-0.5"}`} />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Security */}
      {tab === "security" && (
        <div className="space-y-5">
          <div className="bg-white border border-[#E9EAEC] rounded-2xl p-5">
            <h3 className="text-[15px] font-bold text-[#0D1117] mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>Change password</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-[13px] font-medium text-[#374151] mb-1.5">Current password</label>
                <input type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-[#E4E7EC] rounded-xl text-[14px] focus:outline-none focus:border-[#356AE6]" />
              </div>
              <div>
                <label className="block text-[13px] font-medium text-[#374151] mb-1.5">New password</label>
                <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-[#E4E7EC] rounded-xl text-[14px] focus:outline-none focus:border-[#356AE6]" />
              </div>
              <div>
                <label className="block text-[13px] font-medium text-[#374151] mb-1.5">Confirm new password</label>
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-[#E4E7EC] rounded-xl text-[14px] focus:outline-none focus:border-[#356AE6]" />
              </div>
              {pwError && <p className="text-[13px] text-red-600">{pwError}</p>}
              {pwSuccess && <p className="text-[13px] text-[#269B70] font-medium">Password updated successfully.</p>}
              <button onClick={handleChangePassword} disabled={saving}
                className="px-5 py-2.5 bg-[#172B4D] text-white text-[13.5px] font-semibold rounded-xl hover:bg-[#1E3A5F] disabled:opacity-50 transition-colors">
                {saving ? "Updating..." : "Update password"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Subscription */}
      {tab === "subscription" && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {PLANS.map((plan) => (
              <div key={plan.name} className={`bg-white rounded-2xl p-5 border transition-all ${plan.popular ? "border-[#356AE6] shadow-[0_0_0_1px_#356AE6]" : "border-[#E9EAEC]"}`}>
                {plan.popular && (
                  <div className="inline-flex items-center gap-1.5 bg-[#EDF3FF] text-[#356AE6] text-[11px] font-bold px-2.5 py-1 rounded-full mb-3">
                    Most popular
                  </div>
                )}
                <h3 className="text-[16px] font-bold text-[#0D1117] mb-1" style={{ fontFamily: "Manrope, sans-serif" }}>{plan.name}</h3>
                <p className="text-[22px] font-black text-[#0D1117] mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>{plan.price}</p>
                <ul className="space-y-2 mb-5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-[13px] text-[#6B7280]">
                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 6.5l3 3 6-6" stroke="#269B70" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-2.5 rounded-xl text-[13.5px] font-semibold transition-colors ${
                    plan.popular
                      ? "bg-[#356AE6] text-white hover:bg-[#2458D0]"
                      : "border border-[#E4E7EC] text-[#374151] hover:bg-[#F5F7FB]"
                  }`}
                >
                  {plan.popular ? "Get started" : "Choose plan"}
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
