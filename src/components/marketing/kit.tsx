import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const container = "mx-auto w-full max-w-6xl px-6 sm:px-8";
export const display = { fontFamily: "Manrope, sans-serif" } as const;

export function Eyebrow({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`mb-4 text-sm font-semibold ${light ? "text-[#8FB0FF]" : "text-[#356AE6]"}`}>{children}</p>;
}

export function PageHero({
  eyebrow,
  title,
  body,
  children,
}: {
  eyebrow: string;
  title: string;
  body: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="bg-gradient-to-b from-[#EDF3FF] via-[#F5F8FF] to-white">
      <div className={`${container} pb-20 pt-36 text-center sm:pb-24 sm:pt-40`}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 style={display} className="mx-auto max-w-3xl text-4xl font-extrabold leading-[1.12] tracking-tight text-[#172B4D] sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#667085]">{body}</p>
        {children && <div className="mt-9">{children}</div>}
      </div>
    </section>
  );
}

export function PrimaryLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#356AE6] px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#2458D0]">
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}

export function SecondaryLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="inline-flex items-center justify-center rounded-xl border border-[#D0D5DD] bg-white px-7 py-3.5 text-base font-semibold text-[#172B4D] transition-colors hover:bg-[#F5F7FB]">
      {children}
    </Link>
  );
}

export function CtaBand({ title, body, cta, href = "/signup" }: { title: string; body: string; cta: string; href?: string }) {
  return (
    <section className="bg-white pb-24 sm:pb-28">
      <div className={container}>
        <div className="rounded-3xl bg-[#172B4D] px-6 py-16 text-center sm:px-16 sm:py-20">
          <h2 style={display} className="mx-auto max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">{title}</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-white/70">{body}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <PrimaryLink href={href}>{cta}</PrimaryLink>
            <Link href="/pricing" className="inline-flex items-center justify-center rounded-xl border border-white/20 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10">
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Product previews (illustrative, sample data) ---------------- */

export function Window({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-[#E4E7EC] bg-white shadow-[0_18px_40px_-18px_rgba(23,43,77,0.22)]">
      <div className="flex items-center gap-2 border-b border-[#E4E7EC] bg-[#F9FAFB] px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-[#E4E7EC]" />
        <span className="h-2 w-2 rounded-full bg-[#E4E7EC]" />
        <span className="h-2 w-2 rounded-full bg-[#E4E7EC]" />
        <span className="ml-2 truncate text-xs font-medium text-[#667085]">{title}</span>
      </div>
      <div className="p-5">{children}</div>
      <div className="border-t border-[#F2F4F7] px-5 py-2 text-[11px] text-[#98A2B3]">Illustration with sample data</div>
    </div>
  );
}

const COLORS = { blue: "#356AE6", indigo: "#6256C7", teal: "#16A6A1", amber: "#E6A23C" };
type Accent = keyof typeof COLORS;

export function LinePreview({ title, accent = "blue", forecast = false }: { title: string; accent?: Accent; forecast?: boolean }) {
  const obs = [30, 34, 33, 40, 44, 42, 50, 55, 53, 60];
  const fc = [60, 64, 68, 71];
  const W = 400, H = 150;
  const n = obs.length + (forecast ? fc.length : 0) - 1;
  const x = (i: number) => 6 + (i / n) * (W - 12);
  const y = (v: number) => H - 10 - ((v - 20) / 60) * (H - 24);
  const line = (arr: number[], off: number) => arr.map((v, i) => `${i ? "L" : "M"}${x(i + off).toFixed(1)},${y(v).toFixed(1)}`).join(" ");
  const c = COLORS[accent];
  const bandUp = fc.map((v, i) => `${i ? "L" : "M"}${x(obs.length - 1 + i).toFixed(1)},${y(v + i * 2.5).toFixed(1)}`).join(" ");
  const bandDown = fc.map((v, i) => ({ v, i })).reverse().map(({ v, i }) => `L${x(obs.length - 1 + i).toFixed(1)},${y(v - i * 2.5).toFixed(1)}`).join(" ");
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <p style={display} className="text-sm font-bold text-[#172B4D]">{title}</p>
        {forecast && (
          <span className="flex items-center gap-3 text-[11px] text-[#667085]">
            <span className="flex items-center gap-1"><span className="h-0.5 w-3" style={{ background: c }} />Observed</span>
            <span className="flex items-center gap-1"><span className="w-3 border-t-2 border-dashed border-[#6256C7]" />Forecast</span>
          </span>
        )}
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label={title}>
        {[0, 1, 2].map((g) => <line key={g} x1="6" x2={W - 6} y1={14 + g * 55} y2={14 + g * 55} stroke="#EEF0F4" />)}
        {forecast && <path d={`${bandUp} ${bandDown} Z`} fill="#6256C7" fillOpacity="0.13" />}
        <path d={line(obs, 0)} fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        {forecast && <path d={line(fc, obs.length - 1)} fill="none" stroke="#6256C7" strokeWidth="2.5" strokeDasharray="6 5" strokeLinecap="round" />}
      </svg>
    </div>
  );
}

export function BarsPreview({ title, rows, accent = "blue" }: { title: string; rows: [string, number][]; accent?: Accent }) {
  return (
    <div>
      <p style={display} className="mb-4 text-sm font-bold text-[#172B4D]">{title}</p>
      <div className="space-y-3">
        {rows.map(([l, v], i) => (
          <div key={l} className="flex items-center gap-3 text-xs">
            <span className="w-24 flex-shrink-0 text-[#475467]">{l}</span>
            <div className="h-2.5 flex-1 rounded-full bg-[#F2F4F7]">
              <div className="h-2.5 rounded-full" style={{ width: `${v}%`, background: i === 0 ? COLORS[accent] : `${COLORS[accent]}55` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function KpiPreview({ items }: { items: [string, string, string?][] }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {items.map(([l, v, d]) => (
        <div key={l} className="rounded-xl border border-[#E4E7EC] p-3.5">
          <p className="text-[11px] font-medium text-[#667085]">{l}</p>
          <p style={display} className="mt-1 text-xl font-extrabold text-[#172B4D]">{v}</p>
          {d && <p className="mt-0.5 text-[11px] font-semibold text-[#269B70]">{d}</p>}
        </div>
      ))}
    </div>
  );
}

export function TablePreview({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[280px] text-left text-xs">
        <thead>
          <tr className="border-b border-[#E4E7EC] text-[#667085]">{head.map((h) => <th key={h} className="pb-2 pr-3 font-semibold">{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b border-[#F2F4F7] last:border-0">
              {r.map((c, j) => <td key={j} className={`py-2.5 pr-3 ${j === 0 ? "font-medium text-[#172B4D]" : "text-[#475467]"}`}>{c}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ChatPreview({ q, a, note }: { q: string; a: string; note?: string }) {
  return (
    <div className="space-y-3">
      <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-md bg-[#356AE6] px-3.5 py-2.5 text-xs leading-5 text-white">{q}</div>
      <div className="max-w-[92%] text-xs leading-5 text-[#344054]">{a}</div>
      {note && <div className="rounded-lg bg-[#F5F7FB] px-3 py-2 text-[11px] leading-4 text-[#667085]">{note}</div>}
    </div>
  );
}

export function HeatPreview({ title }: { title: string }) {
  const cells = Array.from({ length: 35 }, (_, i) => ((i * 37 + (i % 7) * 11) % 100) / 100);
  return (
    <div>
      <p style={display} className="mb-3 text-sm font-bold text-[#172B4D]">{title}</p>
      <div className="grid grid-cols-7 gap-1.5">
        {cells.map((v, i) => <div key={i} className="aspect-square rounded" style={{ background: `rgba(53,106,230,${0.1 + v * 0.8})` }} />)}
      </div>
    </div>
  );
}

export function FunnelPreview({ title, stages }: { title: string; stages: [string, number][] }) {
  return (
    <div>
      <p style={display} className="mb-4 text-sm font-bold text-[#172B4D]">{title}</p>
      <div className="space-y-2">
        {stages.map(([l, w], i) => (
          <div key={l} className="mx-auto flex h-9 items-center justify-center rounded-lg text-xs font-medium text-white" style={{ width: `${w}%`, background: ["#356AE6", "#5B7FE0", "#6256C7", "#16A6A1"][i % 4] }}>{l}</div>
        ))}
      </div>
    </div>
  );
}

export function StatusPreview({ title, rows }: { title: string; rows: [string, string, "ok" | "warn" | "info"][] }) {
  const tone = { ok: "bg-[#E8F6F0] text-[#1F7F5A]", warn: "bg-[#FDF3E1] text-[#9A6412]", info: "bg-[#EDF3FF] text-[#2B56BD]" };
  return (
    <div>
      <p style={display} className="mb-3 text-sm font-bold text-[#172B4D]">{title}</p>
      <ul className="divide-y divide-[#F2F4F7]">
        {rows.map(([l, s, t]) => (
          <li key={l} className="flex items-center justify-between gap-3 py-2.5 text-xs">
            <span className="font-medium text-[#172B4D]">{l}</span>
            <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${tone[t]}`}>{s}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
