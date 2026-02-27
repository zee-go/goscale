import Link from "next/link";
import { Logo } from "./Logo";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Platforms", href: "/platforms" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Logo />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-all duration-300 text-[#2E2E2E] hover:text-[#2DD4BF]"
                style={{ fontSize: "16px", lineHeight: "1" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/#contact" className="hidden md:inline-flex">
              <Button className="bg-[#FF6B6B] hover:bg-[#FF5252] text-white font-semibold">
                Book a Call
              </Button>
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-[#2E2E2E] hover:text-[#2DD4BF] transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-left text-sm font-medium transition-colors text-[#2E2E2E] hover:text-[#2DD4BF]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/#contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="bg-[#FF6B6B] hover:bg-[#FF5252] text-white font-semibold w-full">
                  Book a Call
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
