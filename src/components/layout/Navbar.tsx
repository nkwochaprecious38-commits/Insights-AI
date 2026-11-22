"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Platform", href: "/platform" },
  { label: "Solutions", href: "/solutions" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isDark = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
        isDark && !scrolled
          ? "bg-transparent border-b border-transparent"
          : "bg-white/95 backdrop-blur-md border-b border-[#E4E7EC]"
      )}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-[62px]">

          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
            <Logo />
            <span
              className={cn(
                "font-extrabold text-[17px] tracking-tight transition-colors",
                isDark && !scrolled ? "text-white" : "text-[#0D1117]"
              )}
              style={{ fontFamily: "Manrope, sans-serif", letterSpacing: "-0.03em" }}
            >
              Insights AI
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-0.5">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-3.5 py-2 text-[13.5px] font-medium rounded-lg transition-colors",
                  pathname === item.href
                    ? isDark && !scrolled
                      ? "text-white bg-white/10"
                      : "text-[#172B4D] bg-[#F5F7FB]"
                    : isDark && !scrolled
                    ? "text-white/70 hover:text-white hover:bg-white/10"
                    : "text-[#4B5563] hover:text-[#0D1117] hover:bg-[#F5F7FB]"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2.5">
            <Link
              href="/login"
              className={cn(
                "px-4 py-2 text-[13.5px] font-semibold rounded-lg transition-colors",
                isDark && !scrolled
                  ? "text-white/80 hover:text-white hover:bg-white/10"
                  : "text-[#374151] hover:text-[#0D1117] hover:bg-[#F5F7FB]"
              )}
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 text-[13.5px] font-semibold rounded-lg bg-[#172B4D] text-white hover:bg-[#1E3A5F] transition-colors"
            >
              Get started
            </Link>
          </div>

          <button
            className={cn(
              "md:hidden p-2 rounded-lg transition-colors",
              isDark && !scrolled ? "text-white hover:bg-white/10" : "text-[#374151] hover:bg-[#F5F7FB]"
            )}
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-[#E4E7EC] px-5 pb-5 pt-3 space-y-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-3 py-2.5 text-sm font-medium text-[#374151] hover:text-[#0D1117] hover:bg-[#F5F7FB] rounded-lg"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-3 mt-2 border-t border-[#E4E7EC] flex flex-col gap-2">
            <Link href="/login" onClick={() => setOpen(false)} className="block w-full px-4 py-2.5 text-sm font-semibold text-center border border-[#E4E7EC] rounded-lg text-[#374151] hover:bg-[#F5F7FB]">
              Log in
            </Link>
            <Link href="/signup" onClick={() => setOpen(false)} className="block w-full px-4 py-2.5 text-sm font-semibold text-center bg-[#172B4D] text-white rounded-lg hover:bg-[#1E3A5F]">
              Get started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function Logo() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <rect width="30" height="30" rx="7" fill="#172B4D" />
      <path d="M7 21L12 13L16 17.5L20 10" stroke="#356AE6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="20" cy="10" r="2" fill="#16A6A1" />
      <circle cx="7" cy="21" r="1.5" fill="#6256C7" />
    </svg>
  );
}
