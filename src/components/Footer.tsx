
export function Footer() {
  const handleBookCall = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-16 px-6 bg-[--charcoal]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <button 
            onClick={handleBookCall}
            className="cta-button text-lg px-8"
          >
            Start Scaling Today
          </button>
        </div>
        <p className="text-gray-400 text-center">
          © {new Date().getFullYear()} GoScale Media. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
