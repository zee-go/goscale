
export function HeroSection() {
  const handleBookCall = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

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
          <button 
            onClick={handleBookCall}
            className="cta-button text-lg px-8"
          >
            Book a Strategy Call
          </button>
          <button 
            onClick={handleBookCall}
            className="px-8 py-4 border-2 border-[--teal] text-[--teal] hover:bg-[--teal] hover:text-white font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-lg"
            style={{ fontFamily: 'Satoshi, sans-serif' }}
          >
            Request an Audit
          </button>
        </div>
      </div>
    </section>
  );
}
