
import Link from "next/link";
import { Facebook, Search, Infinity, Music, Linkedin, Apple, Network, Smartphone, ArrowRight } from "lucide-react";

export function PlatformsSection() {
  const platforms = [
    { name: "Meta Ads", icon: Facebook, color: "text-[#2DD4BF]" },
    { name: "Google Search", icon: Search, color: "text-[#FF6B6B]" },
    { name: "Performance Max", icon: Infinity, color: "text-[#6D8CA6]" },
    { name: "TikTok Ads", icon: Music, color: "text-[#2DD4BF]" },
    { name: "LinkedIn Ads", icon: Linkedin, color: "text-[#FF6B6B]" },
    { name: "Apple Search Ads", icon: Apple, color: "text-[#6D8CA6]" },
    { name: "Reddit Ads", icon: "r/", color: "text-[#2DD4BF]" },
    { name: "Programmatic Ads", icon: Network, color: "text-[#FF6B6B]" },
    { name: "Mobile Ad Networks", icon: Smartphone, color: "text-[#6D8CA6]" }
  ];

  return (
    <section id="platforms" className="py-20 bg-[#FAFAFA] border-t border-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2E2E2E] mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>
            Platform Expertise
          </h2>
          <p className="text-lg text-[#6D8CA6] max-w-2xl mx-auto" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Specialized experience across paid channels that matter
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-16 max-w-5xl mx-auto">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            const isReddit = platform.name === "Reddit Ads";
            
            return (
              <div
                key={platform.name}
                className="flex flex-col items-center justify-center text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${platform.color} mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                  {isReddit ? (
                    <div className="text-5xl font-bold">r/</div>
                  ) : (
                    <Icon size={48} strokeWidth={1.5} />
                  )}
                </div>
                <p className="text-sm text-[#2E2E2E]" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {platform.name}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/platforms"
            className="inline-flex items-center gap-2 text-[#2DD4BF] hover:text-[#FF6B6B] font-semibold transition-colors"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            See all platforms
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
