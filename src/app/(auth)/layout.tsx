import Link from "next/link";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F5F7FB] flex flex-col">
      <header className="py-5 px-6 border-b border-[#E4E7EC] bg-white">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-2.5 w-fit">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="8" fill="#172B4D"/>
              <path d="M8 22L14 14L18 18L22 10" stroke="#356AE6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="22" cy="10" r="2.5" fill="#16A6A1"/>
              <circle cx="8" cy="22" r="2" fill="#356AE6" opacity="0.5"/>
              <path d="M11 16H13" stroke="#6256C7" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="font-bold text-lg text-[#172B4D] tracking-tight" style={{ fontFamily: "Manrope, sans-serif" }}>
              Insights AI
            </span>
          </Link>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        {children}
      </main>
      <footer className="py-4 text-center text-sm text-[#667085]">
        © 2026 Insights AI
      </footer>
    </div>
  );
}
