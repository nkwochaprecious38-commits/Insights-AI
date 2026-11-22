"use client";
import { useState } from "react";

type Role = "Admin" | "Analyst" | "Viewer";

const MEMBERS = [
  { id: "1", name: "Sarah Mitchell", email: "sarah@company.com", role: "Admin" as Role, joined: "Oct 2026", status: "active" },
  { id: "2", name: "James Okafor", email: "james@company.com", role: "Analyst" as Role, joined: "Oct 2026", status: "active" },
  { id: "3", name: "Priya Sharma", email: "priya@company.com", role: "Viewer" as Role, joined: "Nov 2026", status: "active" },
  { id: "4", name: "Lucas Fernandez", email: "lucas@company.com", role: "Analyst" as Role, joined: "Nov 2026", status: "pending" },
];

const ROLE_COLORS: Record<Role, { text: string; bg: string }> = {
  Admin: { text: "#172B4D", bg: "#EDF3FF" },
  Analyst: { text: "#6256C7", bg: "#F3F0FF" },
  Viewer: { text: "#6B7280", bg: "#F9FAFB" },
};

const ROLE_PERMISSIONS: Record<Role, string[]> = {
  Admin: ["Full platform access", "Manage team members", "Billing and subscription", "Data governance", "All analyst permissions"],
  Analyst: ["Upload and manage datasets", "Run AI analysis", "Create reports and dashboards", "Manage models", "View team activity"],
  Viewer: ["View dashboards and reports", "Export data", "Read-only access to datasets"],
};

export default function TeamPage() {
  const [members, setMembers] = useState(MEMBERS);
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteRole, setInviteRole] = useState<Role>("Analyst");
  const [inviteSent, setInviteSent] = useState(false);

  async function handleInvite() {
    if (!inviteEmail.trim()) return;
    setInviteSent(true);
    setTimeout(() => {
      setMembers((m) => [...m, {
        id: Math.random().toString(36).slice(2),
        name: inviteEmail.split("@")[0],
        email: inviteEmail,
        role: inviteRole,
        joined: "Nov 2026",
        status: "pending",
      }]);
      setInviteEmail("");
      setInviteSent(false);
    }, 800);
  }

  return (
    <div className="p-6 max-w-4xl">
      <div className="mb-6">
        <h1 className="text-[18px] font-bold text-[#0D1117] mb-1" style={{ fontFamily: "Manrope, sans-serif" }}>Team</h1>
        <p className="text-[13px] text-[#9CA3AF]">{members.length} members · Invite people to collaborate</p>
      </div>

      {/* Invite form */}
      <div className="bg-white border border-[#E9EAEC] rounded-2xl p-5 mb-7">
        <h3 className="text-[14px] font-bold text-[#0D1117] mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>Invite a team member</h3>
        <div className="flex gap-3">
          <input
            type="email"
            placeholder="colleague@company.com"
            value={inviteEmail}
            onChange={(e) => setInviteEmail(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleInvite()}
            className="flex-1 px-3.5 py-2.5 border border-[#E4E7EC] rounded-xl text-[14px] focus:outline-none focus:border-[#356AE6]"
          />
          <select
            value={inviteRole}
            onChange={(e) => setInviteRole(e.target.value as Role)}
            className="px-3.5 py-2.5 border border-[#E4E7EC] rounded-xl text-[14px] bg-white focus:outline-none focus:border-[#356AE6]"
          >
            <option>Admin</option>
            <option>Analyst</option>
            <option>Viewer</option>
          </select>
          <button
            onClick={handleInvite}
            disabled={!inviteEmail.trim() || inviteSent}
            className="px-5 py-2.5 bg-[#172B4D] text-white text-[13.5px] font-semibold rounded-xl hover:bg-[#1E3A5F] disabled:opacity-50 transition-colors"
          >
            {inviteSent ? "Sending..." : "Send invite"}
          </button>
        </div>
      </div>

      {/* Members */}
      <div className="bg-white border border-[#E9EAEC] rounded-2xl overflow-hidden mb-8">
        <div className="px-5 py-4 border-b border-[#E9EAEC]">
          <span className="text-[13px] font-semibold text-[#374151]">Members</span>
        </div>
        <div className="divide-y divide-[#F3F4F6]">
          {members.map((member) => (
            <div key={member.id} className="flex items-center gap-4 px-5 py-4">
              <div className="w-9 h-9 rounded-full bg-[#EDF3FF] flex items-center justify-center text-[13px] font-bold text-[#356AE6] flex-shrink-0">
                {member.name.split(" ").map((n) => n[0]).join("").toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-[13.5px] font-semibold text-[#0D1117]">{member.name}</p>
                  {member.status === "pending" && (
                    <span className="text-[10.5px] font-semibold text-[#E6A23C] bg-amber-50 px-2 py-0.5 rounded-full">Pending</span>
                  )}
                </div>
                <p className="text-[12px] text-[#9CA3AF]">{member.email}</p>
              </div>
              <span className="text-[11px] text-[#9CA3AF]">Joined {member.joined}</span>
              <span className="inline-flex px-2.5 py-1 rounded-full text-[11.5px] font-semibold"
                style={{ color: ROLE_COLORS[member.role].text, background: ROLE_COLORS[member.role].bg }}>
                {member.role}
              </span>
              <button className="text-[12px] text-[#9CA3AF] hover:text-[#374151] p-1.5 rounded-lg hover:bg-[#F5F7FB] transition-colors">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="2" r="1" fill="currentColor"/><circle cx="7" cy="7" r="1" fill="currentColor"/><circle cx="7" cy="12" r="1" fill="currentColor"/></svg>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Permissions */}
      <div>
        <h3 className="text-[15px] font-bold text-[#0D1117] mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>Role permissions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {(["Admin", "Analyst", "Viewer"] as Role[]).map((role) => (
            <div key={role} className="bg-white border border-[#E9EAEC] rounded-2xl p-5">
              <div className="inline-flex px-2.5 py-1 rounded-full text-[12px] font-bold mb-4"
                style={{ color: ROLE_COLORS[role].text, background: ROLE_COLORS[role].bg }}>
                {role}
              </div>
              <ul className="space-y-2">
                {ROLE_PERMISSIONS[role].map((perm) => (
                  <li key={perm} className="flex items-start gap-2 text-[13px] text-[#6B7280]">
                    <svg className="flex-shrink-0 mt-0.5" width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 6.5l3 3 6-6" stroke={ROLE_COLORS[role].text} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    {perm}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
