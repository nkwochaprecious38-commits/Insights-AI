import { container, display, Eyebrow, PageHero, PrimaryLink, SecondaryLink, CtaBand } from "@/components/marketing/kit";
import { Eye, Calculator, ShieldCheck, Layers } from "lucide-react";

export const metadata = { title: "About | Insights AI" };

const PRINCIPLES = [
  { icon: Calculator, title: "Numbers come from calculations", body: "Figures in answers, dashboards, and reports are computed from your data. Language models explain results. They do not supply them." },
  { icon: Eye, title: "Observed and predicted stay separate", body: "Forecasts are always labeled as model output, shown with an uncertainty range, and never presented as guaranteed outcomes." },
  { icon: Layers, title: "Every conclusion can be traced", body: "Findings link back to the dataset, the calculation, and the assumptions behind them, so a reader can check the work." },
  { icon: ShieldCheck, title: "Business data stays confidential", body: "Data is isolated by organization, access follows roles, and activity is recorded in an audit trail." },
];

const AUDIENCES = ["Small and medium businesses", "Startups and growing companies", "Enterprise organizations", "Business analysts", "Data analysts", "Business intelligence teams", "Operations managers", "Financial analysts", "Marketing teams", "Sales departments", "E commerce businesses", "Consulting firms", "Healthcare organizations", "Financial services companies", "Manufacturing businesses"];

export default function AboutPage() {
  return (
    <div className="bg-white text-[#172B4D]">
      <PageHero
        eyebrow="About"
        title="Built for the businesses that run on data."
        body="Insights AI helps organizations understand what is happening, why it is happening, what may happen next, and what to consider doing about it."
      />

      <section className="bg-white py-20 sm:py-24">
        <div className={`${container} grid gap-12 lg:grid-cols-2 lg:gap-20`}>
          <div>
            <Eyebrow>Our mission</Eyebrow>
            <h2 style={display} className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">Turn your business data into decisions you can act on.</h2>
          </div>
          <div className="space-y-5 text-[17px] leading-8 text-[#667085]">
            <p>Most organizations collect more data than they can use. It sits in spreadsheets and separate systems, and the people who need answers often wait days for a report or rely on instinct.</p>
            <p>Insights AI brings that data into one workspace. You can ask questions in plain language, review automated analysis, build forecasts where the data supports them, and share dashboards and reports with your team.</p>
            <p>The goal is practical: faster analysis, clearer explanations, and decisions that rest on evidence people can inspect.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F7FB] py-20 sm:py-24">
        <div className={container}>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>How we build</Eyebrow>
            <h2 style={display} className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">Principles behind the product</h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {PRINCIPLES.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-2xl border border-[#E4E7EC] bg-white p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EDF3FF] text-[#356AE6]"><Icon className="h-5 w-5" /></div>
                <h3 style={display} className="mt-6 text-lg font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-[#667085]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className={container}>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Who it is for</Eyebrow>
            <h2 style={display} className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">Teams that need answers from their data</h2>
          </div>
          <div className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-3">
            {AUDIENCES.map((a) => <span key={a} className="rounded-full border border-[#E4E7EC] bg-white px-4 py-2 text-sm font-medium text-[#475467]">{a}</span>)}
          </div>
        </div>
      </section>

      <section className="bg-[#F5F7FB] py-20 sm:py-24">
        <div className={`${container} max-w-3xl`}>
          <Eyebrow>Security and compliance</Eyebrow>
          <h2 style={display} className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">Honest about where we stand</h2>
          <div className="mt-6 space-y-5 text-[17px] leading-8 text-[#667085]">
            <p>Insights AI is designed with organization level data isolation, role based access, and audit records, and is being built with future compliance requirements in mind.</p>
            <p>We do not currently claim SOC 2, GDPR, HIPAA, or any other certification. We will only state a certification once it has been completed and verified.</p>
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <PrimaryLink href="/signup">Get Started</PrimaryLink>
            <SecondaryLink href="/platform">Explore the Platform</SecondaryLink>
          </div>
        </div>
      </section>

      <div className="pt-24 sm:pt-28">
        <CtaBand title="Make every business decision more informed." body="Bring your data into focus and uncover the insights that move your business forward." cta="Start Analyzing Your Data" />
      </div>
    </div>
  );
}
