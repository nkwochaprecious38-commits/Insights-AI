"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Check } from "lucide-react";
import { createClient, isSupabaseConfigured, NOT_CONFIGURED_MESSAGE } from "@/lib/supabase/client";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function SignUpPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    company: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState("");
  const [needsVerification, setNeedsVerification] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "A valid work email is required";
    if (form.password.length < 8) e.password = "Password must be at least 8 characters";
    if (form.password !== form.confirmPassword) e.confirmPassword = "Passwords do not match";
    if (!form.company.trim()) e.company = "Company name is required";
    if (!agreed) e.terms = "You must accept the terms to continue";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    if (!isSupabaseConfigured) { setServerError(NOT_CONFIGURED_MESSAGE); return; }
    setLoading(true);
    setServerError("");

    const supabase = createClient();
    const { data, error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        data: {
          full_name: form.fullName,
          company: form.company,
        },
        emailRedirectTo: `${window.location.origin}/dashboard`,
      },
    });

    setLoading(false);
    if (error) {
      setServerError(error.message);
    } else {
      // With email confirmation enabled Supabase returns no session until the link is clicked.
      const hasSession = Boolean(data.session);
      setNeedsVerification(!hasSession);
      setSuccess(true);
      if (hasSession) setTimeout(() => router.push("/dashboard"), 1500);
    }
  };

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((p) => ({ ...p, [field]: e.target.value }));
    if (errors[field]) setErrors((p) => { const n = { ...p }; delete n[field]; return n; });
  };

  if (success) {
    return (
      <div className="w-full max-w-md bg-white rounded-2xl border border-[#E4E7EC] p-8 text-center shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
        <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-4">
          <Check className="h-7 w-7 text-emerald-600" />
        </div>
        <h2 className="text-xl font-bold text-[#172B4D] mb-2" style={{ fontFamily: "Manrope, sans-serif" }}>
          {needsVerification ? "Check your email" : "Account created"}
        </h2>
        <p className="text-[#667085] text-sm">
          {needsVerification
            ? `We sent a verification link to ${form.email}. Open it to activate your account, then log in.`
            : "Redirecting you to your dashboard..."}
        </p>
        {needsVerification && (
          <a href="/login" className="mt-6 inline-block text-sm font-semibold text-[#356AE6] hover:text-[#2458D0]">Go to log in</a>
        )}
      </div>
    );
  }

  return (
    <div className="w-full max-w-md">
      <div className="bg-white rounded-2xl border border-[#E4E7EC] p-8 shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
        <div className="mb-7">
          <h1 className="text-2xl font-bold text-[#172B4D] mb-1.5" style={{ fontFamily: "Manrope, sans-serif" }}>
            Create your account
          </h1>
          <p className="text-sm text-[#667085]">
            Start turning your data into decisions.
          </p>
        </div>

        {serverError && (
          <div className="mb-5 p-3.5 rounded-lg bg-red-50 border border-red-200 text-sm text-red-700">
            {serverError}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <Input
            label="Full Name"
            type="text"
            placeholder="Jane Smith"
            value={form.fullName}
            onChange={update("fullName")}
            error={errors.fullName}
            autoComplete="name"
          />
          <Input
            label="Work Email"
            type="email"
            placeholder="jane@company.com"
            value={form.email}
            onChange={update("email")}
            error={errors.email}
            autoComplete="email"
          />
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-[#172B4D]">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="At least 8 characters"
                value={form.password}
                onChange={update("password")}
                autoComplete="new-password"
                className={`w-full px-3.5 py-2.5 pr-10 text-sm rounded-lg border bg-white text-[#111827] placeholder:text-[#9CA3AF] transition-colors focus:outline-none focus:ring-2 focus:ring-[#356AE6] focus:border-transparent ${errors.password ? "border-red-400" : "border-[#E4E7EC] hover:border-[#9CA3AF]"}`}
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#667085]">
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            {errors.password && <p className="text-xs text-red-500">{errors.password}</p>}
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-[#172B4D]">Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Repeat your password"
                value={form.confirmPassword}
                onChange={update("confirmPassword")}
                autoComplete="new-password"
                className={`w-full px-3.5 py-2.5 pr-10 text-sm rounded-lg border bg-white text-[#111827] placeholder:text-[#9CA3AF] transition-colors focus:outline-none focus:ring-2 focus:ring-[#356AE6] focus:border-transparent ${errors.confirmPassword ? "border-red-400" : "border-[#E4E7EC] hover:border-[#9CA3AF]"}`}
              />
              <button type="button" onClick={() => setShowConfirm(!showConfirm)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#667085]">
                {showConfirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            {errors.confirmPassword && <p className="text-xs text-red-500">{errors.confirmPassword}</p>}
          </div>
          <Input
            label="Company Name"
            type="text"
            placeholder="Acme Corporation"
            value={form.company}
            onChange={update("company")}
            error={errors.company}
            autoComplete="organization"
          />

          <div className="flex items-start gap-2.5 pt-1">
            <input
              id="terms"
              type="checkbox"
              checked={agreed}
              onChange={(e) => { setAgreed(e.target.checked); if (errors.terms) setErrors((p) => { const n = { ...p }; delete n.terms; return n; }); }}
              className="mt-0.5 h-4 w-4 rounded border-[#E4E7EC] text-[#356AE6] focus:ring-[#356AE6]"
            />
            <label htmlFor="terms" className="text-sm text-[#667085] leading-snug">
              I agree to the{" "}
              <Link href="#" className="text-[#356AE6] hover:underline">Terms of Service</Link>{" "}
              and{" "}
              <Link href="#" className="text-[#356AE6] hover:underline">Privacy Policy</Link>
            </label>
          </div>
          {errors.terms && <p className="text-xs text-red-500 -mt-2">{errors.terms}</p>}

          <Button type="submit" variant="primary" size="lg" loading={loading} className="w-full mt-2">
            Create Account
          </Button>
        </form>

        <p className="mt-5 text-center text-sm text-[#667085]">
          Already have an account?{" "}
          <Link href="/login" className="text-[#356AE6] font-medium hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
