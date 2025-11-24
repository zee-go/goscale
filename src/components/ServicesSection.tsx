import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Search, Lightbulb, Network, Zap, Palette, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Search,
    title: "Ads Audit & Optimization",
    description: "Comprehensive analysis of your current campaigns with actionable recommendations to improve performance and reduce wasted spend."
  },
  {
    icon: Lightbulb,
    title: "Growth Strategy Consulting",
    description: "Strategic roadmaps tailored to your business goals, identifying untapped opportunities and scalable growth channels."
  },
  {
    icon: Network,
    title: "Cross-Channel Campaign Management",
    description: "Integrated campaigns across Google, Meta, LinkedIn, and more—orchestrated for maximum impact and efficiency."
  },
  {
    icon: Zap,
    title: "Agency Overflow Support",
    description: "White-label ad management for agencies needing expert execution without expanding their team or overhead."
  },
  {
    icon: Palette,
    title: "Creative Testing Frameworks",
    description: "Systematic testing methodologies to identify winning ad creatives and messaging that resonate with your audience."
  }
];

export function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation();

  const handleBookCall = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="h-px bg-[--off-white] w-full"></div>
      <section id="services" ref={ref} className="py-32 px-6 bg-[--off-white]">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-black text-[--charcoal] text-center mb-20 transition-all duration-700 ease-in-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            How We Help You Scale
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index}
                  className={`border-2 border-gray-200 hover:border-[--teal] transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 bg-white cursor-pointer group rounded-2xl ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="space-y-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[--teal]/10 to-[--teal]/20 flex items-center justify-center group-hover:from-[--teal]/20 group-hover:to-[--teal]/30 transition-all duration-300 ease-in-out">
                      <Icon size={28} className="text-[--teal] group-hover:scale-110 transition-transform duration-300 ease-in-out" strokeWidth={2.5} />
                    </div>
                    <CardTitle className="text-xl font-bold text-[--charcoal]">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-[--steel-blue] leading-relaxed text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className={`text-center mt-16 transition-all duration-700 ease-in-out delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <button 
              onClick={handleBookCall}
              className="cta-button text-lg px-8 flex items-center gap-2 mx-auto"
            >
              Get Started Today
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
