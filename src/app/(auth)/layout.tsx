import Link from "next/link";
import Logo from "@/components/brand/Logo";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F5F7FB] flex flex-col">
      <header className="py-5 px-6 border-b border-[#E4E7EC] bg-white">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="block w-fit" aria-label="Insights AI home">
            <Logo size={42} />
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
