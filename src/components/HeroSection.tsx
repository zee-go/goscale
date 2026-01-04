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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#FAFAFA] via-white to-[#F0FFFE]" style={{ backgroundImage: "linear-gradient(135deg, rgb(250, 250, 250) 0%, rgb(255, 255, 255) 40%, rgb(240, 255, 254) 100%)" }}>
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(45deg, rgba(0, 0, 0, 0) 35px 33.33333333333333%, rgb(45, 212, 191) 37px 100%)" }} />








      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        <h1
          className="text-5xl md:text-7xl font-bold text-[#2E2E2E] mb-6 leading-tight"
          style={{ fontFamily: "Satoshi, sans-serif", fontSize: "56px", lineHeight: "1", fontStyle: "normal", textDecoration: "none", backgroundColor: "#00000000", fontWeight: "800", margin: "0px", padding: "12px 0px" }}>Your on-demand growth partner for brands ready to scale


        </h1>
        
        <p className="text-xl md:text-2xl text-[#6D8CA6] mb-12 max-w-3xl mx-auto" style={{ fontFamily: "Outfit, sans-serif", fontSize: "32px", lineHeight: "1" }}>Paid media strategy, audits, and hands-on execution—without the cost of a full-time hire.

        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleBookCall}
            className="bg-[#FF6B6B] hover:bg-[#FF5252] text-white font-semibold px-8 py-4 rounded-lg flex items-center gap-2 transform hover:scale-105 hover:shadow-xl transition-all duration-300 group" style={{ fontSize: "18px" }}>

            Book a Strategy Call
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          
          <button
            onClick={handleRequestAudit}
            className="border-2 border-[#2DD4BF] text-[#2DD4BF] hover:bg-[#2DD4BF] hover:text-white font-semibold px-8 py-4 rounded-lg flex items-center gap-2 transform hover:scale-105 transition-all duration-300 group" style={{ fontSize: "18px" }}>

            Request an Audit
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>
      </div>
    </section>);

}