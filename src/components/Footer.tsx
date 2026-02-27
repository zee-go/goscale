import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Platforms", href: "/platforms" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/#contact" },
];

export function Footer() {
  return (
    <footer className="bg-[#2E2E2E] text-white py-12 border-t border-[#3E3E3E]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center gap-8">
          <Link href="/">
            <Image
              src="/gsm_horizontal_logo.png"
              alt="GoScale Media"
              width={320}
              height={80}
              className="h-16 w-auto brightness-0 invert"
            />
          </Link>

          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-400 hover:text-[#2DD4BF] transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-400">
            <p>&copy; 2026 GoScale Media. Unlocking Ad Potential.</p>
            <span className="hidden sm:inline">&middot;</span>
            <a
              href="mailto:hello@goscale.media?subject=GoScale Media Inquiry"
              className="text-[#2DD4BF] hover:text-[#FF6B6B] transition-colors duration-300 font-medium"
            >
              hello@goscale.media
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
