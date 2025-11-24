
import { Logo } from "./Logo";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "services", "platforms", "results", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false);
  };

  const handleBookCall = () => {
    scrollToSection("contact");
  };

  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "services", label: "Services" },
    { id: "platforms", label: "Platforms" },
    { id: "results", label: "Results" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Logo />

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-medium transition-all duration-300 relative pb-1 ${
                  activeSection === link.id
                    ? "text-[#2DD4BF]"
                    : "text-[#2E2E2E] hover:text-[#2DD4BF]"
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2DD4BF]" />
                )}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button
              onClick={handleBookCall}
              className="hidden md:inline-flex bg-[#FF6B6B] hover:bg-[#FF5252] text-white font-semibold"
            >
              Book a Call
            </Button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-[#2E2E2E] hover:text-[#2DD4BF] transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-left text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? "text-[#2DD4BF]"
                      : "text-[#2E2E2E] hover:text-[#2DD4BF]"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={handleBookCall}
                className="bg-[#FF6B6B] hover:bg-[#FF5252] text-white font-semibold w-full"
              >
                Book a Call
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
