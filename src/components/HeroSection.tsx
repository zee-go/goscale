
import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20 px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-[--off-white] via-white to-[--teal]/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(45,212,191,0.08),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,107,107,0.05),transparent_50%)]"></div>
      
      <div className="relative max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[--charcoal] leading-tight tracking-tight">
          Unlocking Ad Potential for Brands and Teams Ready to Scale
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
          Data-driven ad performance for growing brands, startups, and busy teams
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 animate-slide-up animate-delay-200">
          <Button 
            size="lg"
            className="bg-[--coral] hover:bg-[--coral]/90 text-white font-semibold text-lg px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-xl"
            onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
          >
            Book a Strategy Call
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-[--teal] text-[--teal] hover:bg-[--teal] hover:text-white font-semibold text-lg px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-xl"
            onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
          >
            Request an Audit
          </Button>
        </div>
      </div>
    </section>
  );
}
