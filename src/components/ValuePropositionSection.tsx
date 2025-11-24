
import { Target, TrendingUp, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    color: "#2DD4BF",
    title: "Strategic Excellence",
    description: "We don't just run ads—we build comprehensive growth strategies. Every campaign is backed by deep market research and competitive analysis."
  },
  {
    icon: TrendingUp,
    color: "#FF6B6B",
    title: "Performance Obsession",
    description: "Results matter. We're laser-focused on ROI, continuously optimizing every dollar spent to maximize your returns and accelerate growth."
  },
  {
    icon: Users,
    color: "#6D8CA6",
    title: "Partnership First",
    description: "You're not just a client—you're a partner. We embed ourselves in your business, understanding your goals and challenges as our own."
  }
];

export function ValuePropositionSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div 
                key={index}
                className="text-center space-y-4 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex justify-center">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: `${value.color}20` }}
                  >
                    <Icon size={32} style={{ color: value.color }} strokeWidth={2.5} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[--charcoal]">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
