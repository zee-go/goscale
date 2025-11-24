import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const handleBookCall = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const offset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleRequestAudit = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const offset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#FAFAFA] via-white to-[#F0FFFE]">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 35px,
            #2DD4BF 35px,
            #2DD4BF 37px
          )`
        }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        <h1 
          className="text-5xl md:text-7xl font-bold text-[#2E2E2E] mb-6 leading-tight"
          style={{ fontFamily: 'Satoshi, sans-serif' }}
        >
          Unlocking Ad Potential for Brands and Teams Ready to Scale
        </h1>
        
        <p className="text-xl md:text-2xl text-[#6D8CA6] mb-12 max-w-3xl mx-auto" style={{ fontFamily: 'Outfit, sans-serif' }}>
          Data-driven ad performance for growing brands, startups, and busy teams
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleBookCall}
            className="bg-[#FF6B6B] hover:bg-[#FF5252] text-white font-semibold px-8 py-4 rounded-lg flex items-center gap-2 transform hover:scale-105 hover:shadow-xl transition-all duration-300 group"
          >
            Book a Strategy Call
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          
          <button
            onClick={handleRequestAudit}
            className="border-2 border-[#2DD4BF] text-[#2DD4BF] hover:bg-[#2DD4BF] hover:text-white font-semibold px-8 py-4 rounded-lg flex items-center gap-2 transform hover:scale-105 transition-all duration-300 group"
          >
            Request an Audit
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
