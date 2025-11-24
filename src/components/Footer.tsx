
import { Logo } from "./Logo";

export function Footer() {
  const handleEmailClick = () => {
    window.location.href = "mailto:hello@goscale.media?subject=GoScale Media Inquiry";
  };

  return (
    <footer className="bg-[#2E2E2E] text-white py-12 border-t border-[#3E3E3E]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center">
            <div className="filter brightness-0 invert">
              <Logo />
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-400">
              © 2025 GoScale Media. Unlocking Ad Potential.
            </p>
          </div>

          <div>
            <button
              onClick={handleEmailClick}
              className="text-[#2DD4BF] hover:text-[#FF6B6B] transition-colors duration-300 text-sm font-medium"
            >
              hello@goscale.media
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
