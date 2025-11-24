
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function ExperienceSection() {
  const { ref, isVisible } = useScrollAnimation();

  const clients = [
    { name: "Ipsy", url: "ipsy.com" },
    { name: "Jerry", url: "jerry.ai" },
    { name: "Coalition", url: "coalition.com" },
    { name: "Earnin", url: "earnin.com" },
    { name: "Ntegrity", url: "ntegrity.com.au" },
    { name: "Exacti", url: "exacti.us" },
    { name: "IT Genius", url: "itgenius.com" }
  ];

  return (
    <section className="py-20 bg-[#FAFAFA]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2E2E2E] mb-4">
              Trusted by Growing Brands
            </h2>
            <p className="text-lg text-[#6D8CA6] max-w-2xl mx-auto">
              We've helped scale ad performance for companies across industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
            {clients.map((client, index) => (
              <div
                key={client.name}
                className="flex items-center justify-center p-6 bg-white rounded-lg border border-gray-200 hover:border-[#2DD4BF] transition-all duration-300 hover:shadow-lg"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: isVisible ? "fadeInUp 0.6s ease-out forwards" : "none"
                }}
              >
                <div className="text-center">
                  <div className="w-32 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-2xl font-bold text-[#6D8CA6]">
                      {client.name.slice(0, 2).toUpperCase()}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-[#2E2E2E]">{client.name}</p>
                  <p className="text-xs text-[#6D8CA6]">{client.url}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[#6D8CA6] text-sm">
              Upload actual client logos to replace placeholders
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
