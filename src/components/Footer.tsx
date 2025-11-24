import { ArrowRight } from "lucide-react";

export function Footer() {
  const handleBookCall = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="h-px bg-[--off-white] w-full"></div>
      <footer className="py-16 px-6 bg-[--charcoal]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <button 
              onClick={handleBookCall}
              className="cta-button text-lg px-8 flex items-center gap-2 mx-auto"
            >
              Start Scaling Today
              <ArrowRight size={20} />
            </button>
          </div>
          <p className="text-[--steel-blue] text-center">
            © {new Date().getFullYear()} GoScale Media. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
