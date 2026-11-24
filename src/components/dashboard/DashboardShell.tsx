"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createClient, isSupabaseConfigured } from "@/lib/supabase/client";
import {
  LayoutDashboard,
  MessageSquare,
  Database,
  Table,
  BarChart2,
  Brain,
  FlaskConical,
  Activity,
  FileText,
  PieChart,
  Plug,
  Users,
  Shield,
  Settings,
  ChevronLeft,
  ChevronRight,
  Search,
  Bell,
  LogOut,
  Menu,
  X,
} from "lucide-react";

type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

type NavGroup = {
  label?: string;
  items: NavItem[];
};

const navGroups: NavGroup[] = [
  {
    items: [
      { label: "Overview", href: "/dashboard", icon: <LayoutDashboard size={16} /> },
      { label: "AI Analyst", href: "/dashboard/analyst", icon: <MessageSquare size={16} /> },
    ],
  },
  {
    label: "Data",
    items: [
      { label: "Data Sources", href: "/dashboard/sources", icon: <Database size={16} /> },
      { label: "Datasets", href: "/dashboard/datasets", icon: <Table size={16} /> },
      { label: "Analysis", href: "/dashboard/analysis", icon: <BarChart2 size={16} /> },
    ],
  },
  {
    label: "Intelligence",
    items: [
      { label: "Models", href: "/dashboard/models", icon: <Brain size={16} /> },
      { label: "Experiments", href: "/dashboard/experiments", icon: <FlaskConical size={16} /> },
      { label: "Monitoring", href: "/dashboard/monitoring", icon: <Activity size={16} /> },
    ],
  },
  {
    label: "Reports",
    items: [
      { label: "Reports", href: "/dashboard/reports", icon: <FileText size={16} /> },
      { label: "Dashboards", href: "/dashboard/dashboards", icon: <PieChart size={16} /> },
    ],
  },
  {
    label: "Settings",
    items: [
      { label: "Integrations", href: "/dashboard/integrations", icon: <Plug size={16} /> },
      { label: "Team", href: "/dashboard/team", icon: <Users size={16} /> },
      { label: "Governance", href: "/dashboard/governance", icon: <Shield size={16} /> },
      { label: "Settings", href: "/dashboard/settings", icon: <Settings size={16} /> },
    ],
  },
];

function Logo() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect width="28" height="28" rx="7" fill="#172B4D" />
      <path d="M6 20L10.5 12.5L14 16.5L18.5 9" stroke="#356AE6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="18.5" cy="9" r="1.8" fill="#16A6A1" />
      <circle cx="6" cy="20" r="1.4" fill="#6256C7" />
    </svg>
  );
}

export default function DashboardShell({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (!isSupabaseConfigured) return;
    createClient().auth.getUser().then(({ data }) => {
      if (data.user) {
        setUser({
          name: data.user.user_metadata?.full_name || data.user.email?.split("@")[0] || "User",
          email: data.user.email || "",
        });
      }
    });
  }, []);

  const handleLogout = async () => {
    if (isSupabaseConfigured) await createClient().auth.signOut();
    router.push("/login");
  };

  const initials = user?.name
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "U";

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className={`flex items-center ${collapsed ? "justify-center px-3 py-4" : "gap-2.5 px-4 py-4"} border-b border-white/[0.07]`}>
        <Logo />
        {!collapsed && (
          <span
            className="font-extrabold text-[15px] text-white"
            style={{ fontFamily: "Manrope, sans-serif", letterSpacing: "-0.02em" }}
          >
            Insights AI
          </span>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-3 px-2">
        {navGroups.map((group, gi) => (
          <div key={gi} className={gi > 0 ? "mt-1" : ""}>
            {group.label && !collapsed && (
              <p className="text-[10px] font-bold text-white/25 uppercase tracking-widest px-2.5 py-2 mt-2">
                {group.label}
              </p>
            )}
            {group.label && collapsed && <div className="my-2 mx-2 h-px bg-white/[0.07]" />}
            {group.items.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`sidebar-nav-item flex items-center gap-2.5 px-2.5 py-2 rounded-lg mb-0.5 ${
                    collapsed ? "justify-center" : ""
                  } ${
                    active
                      ? "bg-[#172B4D] text-white"
                      : "text-white/45 hover:text-white/80 hover:bg-white/[0.05]"
                  }`}
                  title={collapsed ? item.label : undefined}
                  onClick={() => setMobileOpen(false)}
                >
                  <span className={`flex-shrink-0 ${active ? "text-[#356AE6]" : ""}`}>{item.icon}</span>
                  {!collapsed && (
                    <span className="text-[13px] font-medium truncate">{item.label}</span>
                  )}
                </Link>
              );
            })}
          </div>
        ))}
      </nav>

      {/* User + Logout */}
      <div className="border-t border-white/[0.07] p-3">
        {!collapsed ? (
          <div className="flex items-center gap-2.5 px-1">
            <div className="w-7 h-7 rounded-full bg-[#356AE6] flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0">
              {initials}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[12.5px] font-semibold text-white truncate">{user?.name || "Loading..."}</p>
              <p className="text-[11px] text-white/35 truncate">{user?.email || ""}</p>
            </div>
            <button
              onClick={handleLogout}
              className="p-1.5 rounded-lg text-white/30 hover:text-white/70 hover:bg-white/[0.07] transition-colors flex-shrink-0"
              title="Log out" aria-label="Log out"
            >
              <LogOut size={14} />
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#356AE6] flex items-center justify-center text-white text-[11px] font-bold">
              {initials}
            </div>
            <button
              onClick={handleLogout}
              className="p-1.5 rounded-lg text-white/30 hover:text-white/70 hover:bg-white/[0.07] transition-colors"
              title="Log out" aria-label="Log out"
            >
              <LogOut size={13} />
            </button>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-[#F5F7FB] overflow-hidden">
      {/* Desktop sidebar */}
      <aside
        className={`hidden md:flex flex-col bg-[#0D1117] flex-shrink-0 relative transition-all duration-200 ${
          collapsed ? "w-14" : "w-56"
        }`}
      >
        <SidebarContent />
        {/* Collapse toggle */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="absolute -right-3 top-[72px] w-6 h-6 bg-[#0D1117] border border-white/10 rounded-full flex items-center justify-center text-white/40 hover:text-white/80 transition-colors z-10"
        >
          {collapsed ? <ChevronRight size={12} /> : <ChevronLeft size={12} />}
        </button>
      </aside>

      {/* Mobile sidebar overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
          <aside className="relative w-56 h-full bg-[#0D1117] flex flex-col">
            <SidebarContent />
          </aside>
        </div>
      )}

      {/* Main area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top bar */}
        <header className="bg-white border-b border-[#E9EAEC] h-14 flex items-center px-4 sm:px-6 gap-3 flex-shrink-0">
          <button
            className="md:hidden p-1.5 rounded-lg text-[#6B7280] hover:bg-[#F3F4F6]"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={18} />
          </button>
          <div className="flex-1 max-w-sm">
            <div className="relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-[#F5F7FB] border border-[#E9EAEC] rounded-xl pl-8 pr-3 py-1.5 text-[13px] text-[#374151] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#356AE6]/20 focus:border-[#356AE6]"
              />
            </div>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <button className="relative p-2 rounded-xl text-[#6B7280] hover:bg-[#F3F4F6] transition-colors">
              <Bell size={16} />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#356AE6]" />
            </button>
            <div className="w-7 h-7 rounded-full bg-[#172B4D] flex items-center justify-center text-white text-[11px] font-bold">
              {initials}
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
