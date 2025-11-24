
export function PortfolioSection() {
  const brands = [
    { name: "Ipsy", logo: "ipsy" },
    { name: "Jerry", logo: "jerry" },
    { name: "Coalition", logo: "coalition" },
    { name: "Compass", logo: "compass" },
    { name: "Ritual", logo: "ritual" },
    { name: "Hims", logo: "hims" }
  ];

  return (
    <section className="py-16 bg-[#FAFAFA] border-t border-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-center text-xl font-medium text-[#6D8CA6] mb-12">
          Experience Includes Work With
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center mb-8">
          {brands.map((brand) => (
            <div 
              key={brand.name}
              className="w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <div className="text-4xl font-bold text-[#2E2E2E]">
                {brand.name}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-[#6D8CA6] max-w-2xl mx-auto">
          Portfolio includes client work from direct partnerships and contractor engagements
        </p>
      </div>
    </section>
  );
}
