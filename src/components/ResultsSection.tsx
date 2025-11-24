
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
  return (
    <section className="py-24 px-6 bg-[--charcoal]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="text-center space-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="text-5xl md:text-6xl font-black text-[--teal]">
                {metric.number}
              </div>
              <div className="text-lg text-gray-300 font-light">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
