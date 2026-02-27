import Head from "next/head";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ValuePropositionSection } from "@/components/ValuePropositionSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { PlatformsSection } from "@/components/PlatformsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GoScale Media",
  url: "https://goscale.media",
  logo: "https://goscale.media/gsm_horizontal_logo.png",
  description:
    "Performance advertising agency helping growing brands unlock profitable scale with strategic paid ads across Meta, Google, TikTok, and more.",
  email: "hello@goscale.media",
  areaServed: {
    "@type": "GeoShape",
    name: "Europe",
  },
  serviceType: [
    "Paid Media Management",
    "Ads Audit & Optimization",
    "Growth Strategy Consulting",
    "Cross-Channel Campaign Management",
    "Creative Testing Frameworks",
    "Agency Overflow Support",
  ],
  sameAs: [],
};

export default function HomePage() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </Head>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <HeroSection />
          <ExperienceSection />
          <ValuePropositionSection />
          <ServicesSection />
          <PlatformsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
