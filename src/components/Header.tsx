
import { Logo } from "./Logo";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Logo />
        <Button 
          className="bg-[--coral] hover:bg-[--coral]/90 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
          onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Book a Call
        </Button>
      </div>
    </header>
  );
}
