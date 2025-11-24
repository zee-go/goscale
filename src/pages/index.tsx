import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ValuePropositionSection } from "@/components/ValuePropositionSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PlatformsSection } from "@/components/PlatformsSection";
import { ResultsSection } from "@/components/ResultsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <PortfolioSection />
        <ValuePropositionSection />
        <ServicesSection />
        <PlatformsSection />
        <ResultsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
