export function PortfolioSection() {
  const brands = [
    { name: "Ipsy" },
    { name: "Jerry" },
    { name: "Coalition" },
    { name: "Compass" },
    { name: "Ritual" },
    { name: "Hims" }
  ];

  return (
    <section id="portfolio" className="py-20 bg-[#FAFAFA] border-t border-white">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-center text-xl font-medium text-[#6D8CA6] mb-12">
          Experience Includes Work With
        </h3>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 lg:gap-20 mb-10">
          {brands.map((brand) => (
            <div 
              key={brand.name}
              className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
            >
              <div className="text-3xl md:text-4xl font-bold text-[#2E2E2E] tracking-tight">
                {brand.name}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-[#6D8CA6] max-w-3xl mx-auto leading-relaxed">
          Portfolio includes client work from direct partnerships and contractor engagements
        </p>
      </div>
    </section>
  );
}
