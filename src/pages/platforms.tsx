import Head from "next/head";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Facebook,
  Search,
  Infinity,
  Music,
  Linkedin,
  Apple,
  Network,
  Smartphone,
  ArrowRight,
} from "lucide-react";

const platforms = [
  {
    name: "Meta Ads",
    icon: Facebook,
    color: "text-[#2DD4BF]",
    bgColor: "from-[#2DD4BF]/5 to-[#2DD4BF]/10",
    description:
      "Full-funnel campaigns on Facebook and Instagram — from awareness to conversion. We navigate GDPR-compliant audience building, Conversions API setup, and Advantage+ automation to drive scalable results across European markets.",
    capabilities: [
      "Advantage+ Shopping & App campaigns",
      "CAPI and server-side tracking setup",
      "Lookalike and interest-based audience strategy",
      "Dynamic creative optimization",
      "Cross-border campaign localization",
    ],
  },
  {
    name: "Google Search Ads",
    icon: Search,
    color: "text-[#FF6B6B]",
    bgColor: "from-[#FF6B6B]/5 to-[#FF6B6B]/10",
    description:
      "Capture high-intent demand with tightly structured search campaigns. We build keyword strategies that balance volume with efficiency, using smart bidding and negative keyword sculpting to maximize every click.",
    capabilities: [
      "Keyword research and competitive gap analysis",
      "Smart Bidding strategy and portfolio management",
      "Ad copy testing with RSA optimization",
      "Quality Score improvement programs",
      "Search term analysis and negative keyword management",
    ],
  },
  {
    name: "Performance Max",
    icon: Infinity,
    color: "text-[#6D8CA6]",
    bgColor: "from-[#6D8CA6]/5 to-[#6D8CA6]/10",
    description:
      "Leverage Google's AI-powered campaigns across Search, Display, YouTube, Gmail, and Maps from a single campaign. We structure asset groups, audience signals, and feed optimization to keep the algorithm working for you — not against you.",
    capabilities: [
      "Asset group strategy and creative optimization",
      "Audience signal configuration",
      "Product feed optimization for Shopping",
      "Conversion value rules and bidding",
      "Channel performance insights and reporting",
    ],
  },
  {
    name: "TikTok Ads",
    icon: Music,
    color: "text-[#2DD4BF]",
    bgColor: "from-[#2DD4BF]/5 to-[#2DD4BF]/10",
    description:
      "Reach younger, engaged audiences with native-feeling ad creative. We build TikTok-first campaigns that blend into the feed — using Spark Ads, creator partnerships, and trend-driven creative to drive awareness and conversions.",
    capabilities: [
      "Spark Ads and whitelisted creator content",
      "TikTok-native creative development",
      "Smart Performance Campaigns (SPC)",
      "TikTok Shop and catalog integration",
      "Trend analysis and cultural moment targeting",
    ],
  },
  {
    name: "LinkedIn Ads",
    icon: Linkedin,
    color: "text-[#FF6B6B]",
    bgColor: "from-[#FF6B6B]/5 to-[#FF6B6B]/10",
    description:
      "B2B demand generation with precision targeting. LinkedIn's professional data makes it the most powerful platform for reaching decision-makers by title, company size, industry, and seniority — we turn that data into pipeline.",
    capabilities: [
      "ABM and company-list targeting campaigns",
      "Lead Gen Forms with CRM integration",
      "Thought Leader Ads and document campaigns",
      "Retargeting across the buyer journey",
      "LinkedIn-to-pipeline attribution reporting",
    ],
  },
  {
    name: "Apple Search Ads",
    icon: Apple,
    color: "text-[#6D8CA6]",
    bgColor: "from-[#6D8CA6]/5 to-[#6D8CA6]/10",
    description:
      "Capture app install intent at the point of search. Apple Search Ads deliver the highest-quality installs in the iOS ecosystem. We manage keyword portfolios, Creative Sets, and bid strategies to grow your app efficiently.",
    capabilities: [
      "Keyword discovery and competitor conquest campaigns",
      "Creative Set testing by audience segment",
      "Search Match optimization and negative keywords",
      "Custom Product Pages for ad relevance",
      "Post-install event optimization and ROAS tracking",
    ],
  },
  {
    name: "Reddit Ads",
    icon: "r/",
    color: "text-[#2DD4BF]",
    bgColor: "from-[#2DD4BF]/5 to-[#2DD4BF]/10",
    description:
      "Tap into community-driven conversations where purchase decisions happen. Reddit's interest-based subreddit targeting reaches niche audiences at CPMs significantly lower than Meta or LinkedIn — ideal for startups testing new markets.",
    capabilities: [
      "Subreddit and interest-based targeting",
      "Conversation Ads that blend with organic content",
      "Community sentiment analysis for creative direction",
      "Conversion tracking and funnel optimization",
      "Brand safety and community moderation monitoring",
    ],
  },
  {
    name: "Programmatic Ads",
    icon: Network,
    color: "text-[#FF6B6B]",
    bgColor: "from-[#FF6B6B]/5 to-[#FF6B6B]/10",
    description:
      "Automated media buying across premium display, video, and native inventory. We set up DSP campaigns with precise audience segments, contextual targeting, and brand safety controls — reaching users across thousands of sites and apps.",
    capabilities: [
      "DSP setup and management (DV360, The Trade Desk)",
      "First-party data activation and audience building",
      "Contextual and behavioral targeting",
      "Viewability and brand safety optimization",
      "Cross-channel frequency management",
    ],
  },
  {
    name: "Mobile Ad Networks",
    icon: Smartphone,
    color: "text-[#6D8CA6]",
    bgColor: "from-[#6D8CA6]/5 to-[#6D8CA6]/10",
    description:
      "User acquisition and retargeting across in-app ad networks like Unity Ads, ironSource, AppLovin, and Liftoff. We optimize for post-install events and LTV to ensure you're acquiring users who stick — not just install.",
    capabilities: [
      "MMP integration (Adjust, AppsFlyer, Branch)",
      "Post-install event and LTV optimization",
      "Creative format testing (playables, rewarded, interstitials)",
      "SKAN and privacy-safe measurement",
      "Cross-network budget allocation and reporting",
    ],
  },
];

export default function PlatformsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "GoScale Media — Platform Expertise",
    description:
      "Specialized paid media management across Meta, Google, TikTok, LinkedIn, Apple Search Ads, Reddit, Programmatic, and Mobile Ad Networks.",
    provider: {
      "@type": "Organization",
      name: "GoScale Media",
      url: "https://goscale.media",
    },
    url: "https://goscale.media/platforms",
  };

  return (
    <>
      <Head>
        <title>Platforms | GoScale Media</title>
        <meta
          name="description"
          content="Specialized paid media expertise across Meta, Google, TikTok, LinkedIn, Apple Search Ads, Reddit, Programmatic, and Mobile Ad Networks."
        />
        <link rel="canonical" href="https://goscale.media/platforms" />
        <meta property="og:title" content="Platforms | GoScale Media" />
        <meta
          property="og:description"
          content="Specialized paid media expertise across 9 major advertising platforms."
        />
        <meta property="og:url" content="https://goscale.media/platforms" />
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
                Platform Expertise
              </h1>
              <p
                className="text-lg md:text-xl text-[#6D8CA6] max-w-2xl mx-auto"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                Deep, hands-on experience across every paid channel that matters
                — so your budget goes further on every platform.
              </p>
            </div>
          </section>

          <section className="py-20 px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {platforms.map((platform) => {
                const Icon = platform.icon;
                const isReddit = platform.name === "Reddit Ads";
                return (
                  <div
                    key={platform.name}
                    className={`rounded-2xl border border-gray-100 bg-gradient-to-br ${platform.bgColor} p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`${platform.color}`}>
                        {isReddit ? (
                          <span className="text-3xl font-bold">r/</span>
                        ) : (
                          <Icon size={32} strokeWidth={1.5} />
                        )}
                      </div>
                      <h2
                        className="text-xl font-bold text-[#2E2E2E]"
                        style={{ fontFamily: "Satoshi, sans-serif" }}
                      >
                        {platform.name}
                      </h2>
                    </div>
                    <p
                      className="text-sm text-[#6D8CA6] leading-relaxed mb-5"
                      style={{ fontFamily: "Outfit, sans-serif" }}
                    >
                      {platform.description}
                    </p>
                    <ul className="space-y-2">
                      {platform.capabilities.map((cap) => (
                        <li
                          key={cap}
                          className="flex items-start gap-2 text-xs text-[#2E2E2E]"
                          style={{ fontFamily: "Outfit, sans-serif" }}
                        >
                          <span className={`${platform.color} mt-0.5`}>•</span>
                          {cap}
                        </li>
                      ))}
                    </ul>
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
                Not sure which platforms are right for you?
              </h2>
              <p
                className="text-gray-300 mb-8 text-lg"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                We&apos;ll build a channel strategy based on your goals, budget,
                and audience — no guesswork.
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
