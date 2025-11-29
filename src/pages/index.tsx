import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ValuePropositionSection } from "@/components/ValuePropositionSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { PlatformsSection } from "@/components/PlatformsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
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
  );
}
