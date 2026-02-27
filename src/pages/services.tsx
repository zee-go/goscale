import Head from "next/head";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Search, Lightbulb, Network, Zap, Palette, ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Ads Audit & Optimization",
    description:
      "We tear apart your current campaigns and rebuild them for performance. Our audits cover account structure, bidding strategy, audience targeting, creative quality, and attribution gaps, then deliver a prioritized action plan ranked by revenue impact.",
    details:
      "Most brands waste 20-40% of their ad spend on poor structure alone. We identify those leaks and plug them. Every audit includes a competitor benchmarking analysis so you know exactly where you stand in your market.",
    deliverables: [
      "Full-funnel campaign audit across all active platforms",
      "Wasted spend analysis with specific savings projections",
      "Competitor ad intelligence and benchmarking report",
      "Prioritized 90-day optimization roadmap",
      "Attribution and tracking health check",
    ],
  },
  {
    icon: Lightbulb,
    title: "Growth Strategy Consulting",
    description:
      "Before you spend another euro on ads, we build the strategic foundation. We map your customer journey, define your channel mix, set realistic ROAS targets by stage, and create the measurement framework to prove what's working.",
    details:
      "This isn't a deck that sits in a drawer. We deliver a living playbook your team can execute on, complete with budget allocation models, testing calendars, and scaling triggers so you know exactly when to pour fuel on what's working.",
    deliverables: [
      "Channel-mix strategy with budget allocation model",
      "Customer journey mapping with touchpoint analysis",
      "KPI framework with platform-specific benchmarks",
      "Quarterly testing and scaling roadmap",
      "Monthly strategy review sessions",
    ],
  },
  {
    icon: Network,
    title: "Cross-Channel Campaign Management",
    description:
      "We run your paid media across Meta, Google, LinkedIn, TikTok, and more as a unified system, not isolated channels. Campaigns are orchestrated to move prospects through your funnel, with budget shifting dynamically to what converts.",
    details:
      "Our approach treats your ad spend as a single investment portfolio. We allocate across channels based on real-time performance data, not gut feelings. Weekly reporting shows exactly how each channel contributes to pipeline and revenue.",
    deliverables: [
      "Multi-platform campaign setup and management",
      "Unified reporting dashboard across all channels",
      "Dynamic budget reallocation based on performance",
      "Weekly performance reports with optimization notes",
      "Creative briefing and ad copy development",
    ],
  },
  {
    icon: Zap,
    title: "Agency Overflow Support",
    description:
      "For agencies that need expert execution without hiring. We white-label campaign management, audits, and strategy work so you can take on more clients and deliver better results without expanding your team or overhead.",
    details:
      "We integrate seamlessly into your workflow and client communication style. Your clients never know we exist. You get enterprise-grade paid media execution at a fraction of the cost of a senior hire.",
    deliverables: [
      "White-label campaign management under your brand",
      "Dedicated account manager for agency coordination",
      "Custom reporting in your agency's templates",
      "Scalable capacity that ramps up or down as needed",
      "Knowledge transfer and team training sessions",
    ],
  },
  {
    icon: Palette,
    title: "Creative Testing Frameworks",
    description:
      "Ad creative is the biggest lever in paid media. We build systematic testing frameworks that take the guesswork out of what works by isolating variables, measuring lift, and scaling winners across your campaigns.",
    details:
      "We test hooks, formats, messaging angles, and visual styles in structured experiments. Each test has a clear hypothesis, control, and success metric. You get a creative playbook that compounds performance over time.",
    deliverables: [
      "Creative testing matrix with hypothesis-driven experiments",
      "Ad format and hook analysis across platforms",
      "Winner/loser reporting with statistical significance",
      "Creative performance database for institutional knowledge",
      "Monthly creative strategy and trend briefings",
    ],
  },
];

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "GoScale Media: Paid Media Services",
    description:
      "On-demand paid media strategy, audits, and campaign management for brands ready to scale across Europe.",
    provider: {
      "@type": "Organization",
      name: "GoScale Media",
      url: "https://goscale.media",
    },
    url: "https://goscale.media/services",
  };

  return (
    <>
      <Head>
        <title>Services | GoScale Media</title>
        <meta
          name="description"
          content="Paid media audits, growth strategy, cross-channel campaign management, agency overflow support, and creative testing tailored for brands scaling in Europe."
        />
        <link rel="canonical" href="https://goscale.media/services" />
        <meta property="og:title" content="Services | GoScale Media" />
        <meta
          property="og:description"
          content="Paid media audits, growth strategy, cross-channel campaign management, agency overflow support, and creative testing."
        />
        <meta property="og:url" content="https://goscale.media/services" />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <section className="py-20 px-6 bg-gradient-to-br from-[#FAFAFA] via-white to-[#F0FFFE]">
            <div className="max-w-4xl mx-auto text-center">
              <h1
                className="text-4xl md:text-6xl font-extrabold text-[#2E2E2E] mb-6"
                style={{ fontFamily: "Satoshi, sans-serif" }}
              >
                How We Help You Scale
              </h1>
              <p
                className="text-lg md:text-xl text-[#6D8CA6] max-w-2xl mx-auto"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                Paid media strategy, audits, and hands-on execution without
                the cost of a full-time hire.
              </p>
            </div>
          </section>

          <section className="py-20 px-6">
            <div className="max-w-5xl mx-auto space-y-24">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={service.title}
                    className={`flex flex-col lg:flex-row gap-12 items-start ${
                      !isEven ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="lg:w-1/2">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2DD4BF]/10 to-[#2DD4BF]/20 flex items-center justify-center flex-shrink-0">
                          <Icon
                            size={24}
                            className="text-[#2DD4BF]"
                            strokeWidth={2.5}
                          />
                        </div>
                        <h2
                          className="text-2xl md:text-3xl font-bold text-[#2E2E2E]"
                          style={{ fontFamily: "Satoshi, sans-serif" }}
                        >
                          {service.title}
                        </h2>
                      </div>
                      <p
                        className="text-[#6D8CA6] leading-relaxed mb-4"
                        style={{ fontFamily: "Outfit, sans-serif" }}
                      >
                        {service.description}
                      </p>
                      <p
                        className="text-[#6D8CA6] leading-relaxed"
                        style={{ fontFamily: "Outfit, sans-serif" }}
                      >
                        {service.details}
                      </p>
                    </div>
                    <div className="lg:w-1/2">
                      <div className="bg-[#FAFAFA] rounded-2xl p-6 border border-gray-100">
                        <h3
                          className="text-sm font-semibold text-[#2E2E2E] uppercase tracking-wider mb-4"
                          style={{ fontFamily: "Satoshi, sans-serif" }}
                        >
                          What&apos;s Included
                        </h3>
                        <ul className="space-y-3">
                          {service.deliverables.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                              <CheckCircle2
                                size={18}
                                className="text-[#2DD4BF] flex-shrink-0 mt-0.5"
                              />
                              <span
                                className="text-sm text-[#2E2E2E]"
                                style={{ fontFamily: "Outfit, sans-serif" }}
                              >
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="py-20 px-6 bg-[#2E2E2E]">
            <div className="max-w-3xl mx-auto text-center">
              <h2
                className="text-3xl md:text-4xl font-bold text-white mb-4"
                style={{ fontFamily: "Satoshi, sans-serif" }}
              >
                Ready to scale your paid media?
              </h2>
              <p
                className="text-gray-300 mb-8 text-lg"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                Book a free strategy call and we&apos;ll show you exactly where
                the growth opportunities are.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-[#FF6B6B] hover:bg-[#FF5252] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
              >
                Book a Strategy Call
                <ArrowRight size={20} />
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
