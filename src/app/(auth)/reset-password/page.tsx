"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Check } from "lucide-react";
import { createClient, isSupabaseConfigured, NOT_CONFIGURED_MESSAGE } from "@/lib/supabase/client";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (password.length < 8) { setError("Password must be at least 8 characters."); return; }
    if (!/[A-Z]/.test(password) || !/[0-9]/.test(password)) { setError("Password must include an uppercase letter and a number."); return; }
    if (password !== confirm) { setError("Passwords do not match."); return; }
    if (!isSupabaseConfigured) { setError(NOT_CONFIGURED_MESSAGE); return; }

    setLoading(true);
    const supabase = createClient();
    const { data } = await supabase.auth.getUser();
    if (!data.user) {
      setLoading(false);
      setError("This reset link is invalid or has expired. Request a new one from the log in page.");
      return;
    }
    const { error: err } = await supabase.auth.updateUser({ password });
    setLoading(false);
    if (err) { setError(err.message); return; }
    setDone(true);
    setTimeout(() => router.push("/dashboard"), 1500);
  };

  const inputCls =
    "w-full rounded-lg border border-[#D0D5DD] bg-white px-3.5 py-2.5 text-sm text-[#172B4D] placeholder:text-[#98A2B3] focus:border-[#356AE6] focus:outline-none focus:ring-2 focus:ring-[#356AE6]/20";

  if (done) {
    return (
      <div className="w-full max-w-md rounded-2xl border border-[#E4E7EC] bg-white p-8 text-center shadow-sm">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50">
          <Check className="h-7 w-7 text-emerald-600" />
        </div>
        <h1 className="mb-2 text-xl font-bold text-[#172B4D]" style={{ fontFamily: "Manrope, sans-serif" }}>Password updated</h1>
        <p className="text-sm text-[#667085]">Redirecting you to your dashboard...</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="rounded-2xl border border-[#E4E7EC] bg-white p-8 shadow-sm">
        <h1 className="mb-1.5 text-2xl font-bold text-[#172B4D]" style={{ fontFamily: "Manrope, sans-serif" }}>Choose a new password</h1>
        <p className="mb-7 text-sm text-[#667085]">Use at least 8 characters, including an uppercase letter and a number.</p>

        {error && <div className="mb-5 rounded-lg border border-red-200 bg-red-50 p-3.5 text-sm text-red-700">{error}</div>}

        <label className="mb-1.5 block text-sm font-medium text-[#172B4D]" htmlFor="new-password">New password</label>
        <div className="relative mb-5">
          <input id="new-password" type={show ? "text" : "password"} autoComplete="new-password" value={password} onChange={(e) => setPassword(e.target.value)} className={`${inputCls} pr-10`} />
          <button type="button" onClick={() => setShow(!show)} aria-label={show ? "Hide password" : "Show password"} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#98A2B3] hover:text-[#667085]">
            {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>

        <label className="mb-1.5 block text-sm font-medium text-[#172B4D]" htmlFor="confirm-password">Confirm new password</label>
        <input id="confirm-password" type={show ? "text" : "password"} autoComplete="new-password" value={confirm} onChange={(e) => setConfirm(e.target.value)} className={`${inputCls} mb-6`} />

        <button type="submit" disabled={loading} className="w-full rounded-lg bg-[#356AE6] py-3 text-sm font-semibold text-white transition-colors hover:bg-[#2458D0] disabled:opacity-60">
          {loading ? "Updating..." : "Update password"}
        </button>
        <p className="mt-5 text-center text-sm text-[#667085]">
          <Link href="/login" className="font-semibold text-[#356AE6] hover:text-[#2458D0]">Back to log in</Link>
        </p>
      </form>
    </div>
  );
}
