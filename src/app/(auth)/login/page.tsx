"use client";
import { useState, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/dashboard";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [resetSent, setResetSent] = useState(false);
  const [forgotMode, setForgotMode] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetLoading, setResetLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) { setError("Email and password are required"); return; }
    setLoading(true);
    setError("");
    const supabase = createClient();
    const { error: err } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (err) {
      setError(err.message === "Invalid login credentials" ? "Incorrect email or password. Please try again." : err.message);
    } else {
      router.push(redirect);
      router.refresh();
    }
  };

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resetEmail) return;
    setResetLoading(true);
    const supabase = createClient();
    await supabase.auth.resetPasswordForEmail(resetEmail, {
      redirectTo: `${window.location.origin}/auth/callback?next=/reset-password`,
    });
    setResetLoading(false);
    setResetSent(true);
  };

  if (forgotMode) {
    return (
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl border border-[#E4E7EC] p-8 shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
          <h1 className="text-2xl font-bold text-[#172B4D] mb-1.5" style={{ fontFamily: "Manrope, sans-serif" }}>Reset password</h1>
          <p className="text-sm text-[#667085] mb-7">Enter your email and we will send you a reset link.</p>
          {resetSent ? (
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg text-sm text-emerald-700">
              Reset link sent. Check your email inbox.
            </div>
          ) : (
            <form onSubmit={handleReset} className="space-y-4">
              <Input label="Email" type="email" placeholder="you@company.com" value={resetEmail} onChange={(e) => setResetEmail(e.target.value)} autoComplete="email" />
              <Button type="submit" variant="primary" size="lg" loading={resetLoading} className="w-full">Send Reset Link</Button>
            </form>
          )}
          <button onClick={() => setForgotMode(false)} className="mt-5 text-sm text-[#356AE6] hover:underline block mx-auto">Back to login</button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md">
      <div className="bg-white rounded-2xl border border-[#E4E7EC] p-8 shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
        <div className="mb-7">
          <h1 className="text-2xl font-bold text-[#172B4D] mb-1.5" style={{ fontFamily: "Manrope, sans-serif" }}>
            Welcome back
          </h1>
          <p className="text-sm text-[#667085]">Log in to your Insights AI workspace.</p>
        </div>

        {error && (
          <div className="mb-5 p-3.5 rounded-lg bg-red-50 border border-red-200 text-sm text-red-700">{error}</div>
        )}

        <form onSubmit={handleLogin} className="space-y-4" noValidate>
          <Input
            label="Email"
            type="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setError(""); }}
            autoComplete="email"
          />
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-[#172B4D]">Password</label>
              <button type="button" onClick={() => setForgotMode(true)} className="text-xs text-[#356AE6] hover:underline">Forgot password?</button>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Your password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(""); }}
                autoComplete="current-password"
                className="w-full px-3.5 py-2.5 pr-10 text-sm rounded-lg border border-[#E4E7EC] hover:border-[#9CA3AF] bg-white text-[#111827] placeholder:text-[#9CA3AF] transition-colors focus:outline-none focus:ring-2 focus:ring-[#356AE6] focus:border-transparent"
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#667085]">
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input id="remember" type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} className="h-4 w-4 rounded border-[#E4E7EC] text-[#356AE6] focus:ring-[#356AE6]" />
            <label htmlFor="remember" className="text-sm text-[#667085]">Remember me</label>
          </div>

          <Button type="submit" variant="primary" size="lg" loading={loading} className="w-full mt-1">
            Log In
          </Button>
        </form>

        <p className="mt-5 text-center text-sm text-[#667085]">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-[#356AE6] font-medium hover:underline">Sign up free</Link>
        </p>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="w-full max-w-md h-96 bg-white rounded-2xl border border-[#E4E7EC] animate-pulse" />}>
      <LoginForm />
    </Suspense>
  );
}
