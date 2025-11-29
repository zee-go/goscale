import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function ExperienceSection() {
  const { ref, isVisible } = useScrollAnimation();

  const clients = [
  { name: "Ipsy", logo: "/ipsy.jpeg" },
  { name: "Jerry", logo: "/jerry.png" },
  { name: "Coalition", logo: "/coalition.jpeg" },
  { name: "Ntegrity", logo: "/ntegrity.png" },
  { name: "IT Genius", logo: "/itGenius-Logo-4K-White-PNG.webp" },
  { name: "Exactius", logo: "/exactius.jpeg" },
  { name: "EarnIn", logo: "/earnin.png" }];


  return (
    <section className="py-20 bg-[#FAFAFA]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`
          }>

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2E2E2E] mb-4">
              Experience Includes Work With
            </h2>
            <p className="text-lg text-[#6D8CA6] max-w-2xl mx-auto" style={{ fontSize: "24px" }}>
              Trusted partnerships with innovative brands across industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center mb-12">
            {clients.map((client, index) =>
            <div
              key={client.name}
              className="flex items-center justify-center p-8 bg-white rounded-lg border border-gray-200 hover:border-[#2DD4BF] transition-all duration-300 hover:shadow-lg h-32"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: isVisible ? "fadeInUp 0.6s ease-out forwards" : "none"
              }}>

                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw" />

                </div>
              </div>
            )}
          </div>

          <div className="text-center">
            <p className="text-sm text-[#6D8CA6] italic" style={{ fontSize: "16px", fontStyle: "normal" }}>
              Portfolio includes client work from direct partnerships and contractor engagements
            </p>
          </div>
        </div>
      </div>
    </section>);

}