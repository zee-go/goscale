
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Search, Lightbulb, Network, Zap, Palette } from "lucide-react";

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
  return (
    <section className="py-24 px-6 bg-[--off-white]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-[--charcoal] text-center mb-16">
          How We Help You Scale
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="border-2 border-gray-200 hover:border-[--teal] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-[--teal]/10 flex items-center justify-center mb-4">
                    <Icon size={24} className="text-[--teal]" strokeWidth={2.5} />
                  </div>
                  <CardTitle className="text-xl text-[--charcoal]">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
