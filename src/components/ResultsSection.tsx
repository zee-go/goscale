import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const metrics = [
  {
    number: "200%",
    label: "Average ROAS Improvement"
  },
  {
    number: "50+",
    label: "Brands Scaled"
  },
  {
    number: "$10M+",
    label: "Ad Spend Managed"
  },
  {
    number: "98%",
    label: "Client Retention Rate"
  }
];

export function ResultsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <>
      <div className="h-px bg-[--off-white] w-full"></div>
      <section id="results" ref={ref} className="py-24 px-6 bg-[--charcoal]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {metrics.map((metric, index) => (
              <div 
                key={index}
                className={`text-center space-y-2 transition-all duration-700 ease-in-out ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="text-5xl md:text-6xl font-black text-[--teal] hover:scale-110 transition-transform duration-300 ease-in-out cursor-default">
                  {metric.number}
                </div>
                <div className="text-lg text-[--steel-blue] font-light">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
