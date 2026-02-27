import Head from "next/head";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What makes GoScale different from other performance advertising agencies in Europe?",
    answer:
      "We're operationally embedded into your team, not running campaigns from a distance. We're senior practitioners, not account managers handing off to juniors. And we're built specifically for European market complexity: GDPR compliance, multi-country campaigns, localized creative strategy, and EU ad regulations are core to how we operate.",
  },
  {
    question: "Which paid media channels do you manage?",
    answer:
      "Meta Ads, Google Ads (Search, Shopping, YouTube, Display), TikTok Ads, LinkedIn Ads, Apple Search Ads, Reddit Ads, Programmatic, and Mobile Ad Networks. We build cross-channel strategies where every platform has a defined role, not just a budget allocation.",
  },
  {
    question: "Do you work with startups that already have an in-house marketing team?",
    answer:
      "Yes, that's our sweet spot. We work as a senior extension of your existing team, not a replacement. Whether you need us to own a specific channel, support overflow capacity, or lead strategy while your team executes, we adapt to how you're structured.",
  },
  {
    question: "How do you handle GDPR compliance in paid advertising?",
    answer:
      "We configure campaigns with server-side tracking, Google Consent Mode v2, and first-party data strategies from the start. We stay current on EU-specific ad regulations and country-level requirements so you're not running campaigns that could trigger a data authority audit or violate Meta's EU-specific policies.",
  },
  {
    question: "What budget size do you typically work with?",
    answer:
      "We work with startups investing $15K/month in ad spend and above. Below that threshold, the leverage we provide doesn't generate sufficient ROI for either side. Our clients typically see the highest impact in the $30K-$500K/month range, where channel strategy, creative testing, and cross-market coordination create the most compounding value.",
  },
  {
    question: "How quickly can you start, and what does onboarding look like?",
    answer:
      "We move fast. After an initial strategy call, we can begin an audit within 48 hours. Active campaign management typically kicks off within one to two weeks, depending on account access and creative asset availability. No six-week onboarding programs. We're operational from week one.",
  },
  {
    question: "What does your pricing look like?",
    answer:
      "Pricing depends on scope: the number of platforms, monthly ad spend, and level of strategic involvement. We offer both retainer-based and project-based engagements. Book a strategy call and we'll put together a proposal tailored to your needs.",
  },
  {
    question: "Can you help us expand into new European markets?",
    answer:
      "Absolutely. We've managed campaigns across 20+ European markets. We handle the localization, platform-specific requirements, and audience strategy needed to enter new countries without wasting budget on trial and error.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <h3
          className="text-lg font-semibold text-[#2E2E2E] pr-8 group-hover:text-[#2DD4BF] transition-colors"
          style={{ fontFamily: "Satoshi, sans-serif" }}
        >
          {question}
        </h3>
        <ChevronDown
          size={20}
          className={`text-[#6D8CA6] flex-shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <p
          className="text-[#6D8CA6] leading-relaxed pb-6"
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          {answer}
        </p>
      )}
    </div>
  );
}

export default function FAQPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <Head>
        <title>FAQ | GoScale Media</title>
        <meta
          name="description"
          content="Frequently asked questions about GoScale Media's paid media services, pricing, GDPR compliance, and how we work with startups scaling in Europe."
        />
        <link rel="canonical" href="https://goscale.media/faq" />
        <meta property="og:title" content="FAQ | GoScale Media" />
        <meta
          property="og:description"
          content="Answers to common questions about our paid media services for European startups."
        />
        <meta property="og:url" content="https://goscale.media/faq" />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
                Frequently Asked Questions
              </h1>
              <p
                className="text-lg md:text-xl text-[#6D8CA6] max-w-2xl mx-auto"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                Everything you need to know about working with GoScale Media.
              </p>
            </div>
          </section>

          <section className="py-20 px-6">
            <div className="max-w-3xl mx-auto">
              {faqs.map((faq) => (
                <FAQItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </section>

          <section className="py-20 px-6 bg-[#2E2E2E]">
            <div className="max-w-3xl mx-auto text-center">
              <h2
                className="text-3xl md:text-4xl font-bold text-white mb-4"
                style={{ fontFamily: "Satoshi, sans-serif" }}
              >
                Still have questions?
              </h2>
              <p
                className="text-gray-300 mb-8 text-lg"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                Book a free strategy call and we&apos;ll answer everything
                in person.
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
