
import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[--off-white] via-white to-[--teal]/5 pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-black text-[--charcoal] leading-tight">
          Unlocking Ad Potential for Brands and Teams Ready to Scale
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
          Data-driven ad performance for growing brands, startups, and busy teams
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 animate-slide-up animate-delay-200">
          <Button 
            size="lg"
            className="bg-[--coral] hover:bg-[--coral]/90 text-white font-semibold text-lg px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book a Strategy Call
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-[--teal] text-[--teal] hover:bg-[--teal] hover:text-white font-semibold text-lg px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Request an Audit
          </Button>
        </div>
      </div>
    </section>
  );
}
