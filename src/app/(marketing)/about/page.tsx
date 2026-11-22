import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-[#0D1117] overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="absolute top-[-80px] right-[-80px] w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle, rgba(53,106,230,0.15) 0%, transparent 70%)" }} />
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <p className="text-xs font-bold text-[#356AE6] uppercase tracking-widest mb-6">About</p>
          <h1
            className="text-5xl sm:text-6xl font-black text-white mb-6"
            style={{ fontFamily: "Manrope, sans-serif", letterSpacing: "-0.03em", lineHeight: 1.03 }}
          >
            Built for the businesses
            <br />
            that run on data.
          </h1>
          <p className="text-[17px] text-white/55 leading-relaxed max-w-2xl mx-auto">
            Insights AI exists to close the gap between the data businesses collect and the decisions they make. We believe that intelligence should be accessible to every team, not just those with data science expertise.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-bold text-[#356AE6] uppercase tracking-widest mb-6">Our mission</p>
              <blockquote
                className="text-4xl sm:text-[46px] font-black text-[#0D1117] leading-[1.1]"
                style={{ fontFamily: "Manrope, sans-serif", letterSpacing: "-0.03em" }}
              >
                &ldquo;Turn your business data into decisions you can act on.&rdquo;
              </blockquote>
            </div>
            <div className="pt-2 space-y-6">
              <p className="text-[16px] text-[#6B7280] leading-relaxed">
                Every business generates enormous amounts of data every day. Revenue records, customer interactions, campaign metrics, operational logs: data that holds the answers to the questions that matter most.
              </p>
              <p className="text-[16px] text-[#6B7280] leading-relaxed">
                But most of that data never gets analyzed. It sits in spreadsheets and disconnected systems, inaccessible to the people who need it most. Business leaders make decisions based on intuition and partial information because the alternative: hiring data scientists, building infrastructure, learning complex tools, takes too long and costs too much.
              </p>
              <p className="text-[16px] text-[#6B7280] leading-relaxed">
                Insights AI changes this. We built a platform that makes professional-grade data analysis and predictive intelligence accessible to any business team. No technical skills required. No waiting weeks for a report. Just the intelligence you need to move forward with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="mb-12">
            <p className="text-xs font-bold text-[#356AE6] uppercase tracking-widest mb-4">Our values</p>
            <h2
              className="text-4xl font-black text-[#0D1117]"
              style={{ fontFamily: "Manrope, sans-serif", letterSpacing: "-0.03em" }}
            >
              What guides every decision we make.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                color: "#356AE6",
                title: "Clarity",
                text: "We build tools that make complex information easy to understand. If an insight requires a data scientist to interpret it, it has not done its job.",
              },
              {
                color: "#6256C7",
                title: "Precision",
                text: "Every analysis, forecast, and recommendation we surface is grounded in evidence. We prioritize accuracy over speed and correctness over convenience.",
              },
              {
                color: "#16A6A1",
                title: "Accessibility",
                text: "Advanced business intelligence should not require an enterprise IT team or a six-figure data hire. We build for everyone who works with business data.",
              },
              {
                color: "#269B70",
                title: "Integrity",
                text: "We are transparent about how our AI works, what its limitations are, and how your data is used. Trust is not a feature: it is the foundation.",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl border border-[#E9EAEC] p-6 hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)] transition-all duration-200"
              >
                <div
                  className="w-10 h-10 rounded-xl mb-5"
                  style={{ background: v.color }}
                />
                <h3
                  className="text-[16px] font-bold text-[#0D1117] mb-3"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  {v.title}
                </h3>
                <p className="text-[13.5px] text-[#6B7280] leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we built it */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="mb-14">
            <p className="text-xs font-bold text-[#356AE6] uppercase tracking-widest mb-4">Our journey</p>
            <h2
              className="text-4xl font-black text-[#0D1117]"
              style={{ fontFamily: "Manrope, sans-serif", letterSpacing: "-0.03em" }}
            >
              From idea to platform.
            </h2>
          </div>
          <div className="relative">
            {/* Line */}
            <div className="hidden md:block absolute left-[30px] top-8 bottom-8 w-px bg-[#E9EAEC]" />
            <div className="space-y-10">
              {[
                {
                  n: "01",
                  color: "#356AE6",
                  title: "The problem was real",
                  text: "We spent years working with businesses of all sizes and saw the same pattern everywhere: organizations drowning in data but starving for insight. Spreadsheets that took days to build, reports that were outdated by the time they were shared, and decisions made in the dark because analysis was too slow and too expensive.",
                },
                {
                  n: "02",
                  color: "#6256C7",
                  title: "We built the solution",
                  text: "We designed Insights AI from the ground up around one principle: every business team should be able to get a clear, accurate answer from their data in minutes, not days. That meant building an AI analyst that understands business context, a forecasting engine that learns from each company's own history, and a reporting layer that writes like a human.",
                },
                {
                  n: "03",
                  color: "#16A6A1",
                  title: "Built for the long run",
                  text: "Insights AI is designed to grow with the businesses that use it. From a founder analyzing first revenue data to an enterprise team governing AI-driven decisions at scale, the platform adapts to where you are and where you are going. We are building the intelligence infrastructure that businesses will rely on for years to come.",
                },
              ].map((step) => (
                <div key={step.n} className="flex gap-8 md:gap-12 items-start">
                  <div
                    className="w-[60px] h-[60px] rounded-2xl flex items-center justify-center text-sm font-black flex-shrink-0 relative z-10"
                    style={{ background: step.color + "15", color: step.color, fontFamily: "Manrope, sans-serif" }}
                  >
                    {step.n}
                  </div>
                  <div className="flex-1 pt-3.5">
                    <h3
                      className="text-[20px] font-bold text-[#0D1117] mb-3"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-[15.5px] text-[#6B7280] leading-relaxed max-w-2xl">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-[#172B4D] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] opacity-10" style={{ background: "radial-gradient(circle, #356AE6 0%, transparent 70%)" }} />
        <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <h2
            className="text-5xl font-black text-white mb-6"
            style={{ fontFamily: "Manrope, sans-serif", letterSpacing: "-0.03em" }}
          >
            Join the businesses already
            <br />
            making smarter decisions.
          </h2>
          <p className="text-[17px] text-white/55 mb-10 leading-relaxed">
            Connect your data and see what Insights AI finds in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#172B4D] text-[15px] font-bold rounded-xl hover:bg-[#F5F7FB] transition-colors"
            >
              Get started free
            </Link>
            <Link
              href="/platform"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/15 text-white text-[15px] font-semibold rounded-xl hover:bg-white/5 transition-colors"
            >
              Explore the platform
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
