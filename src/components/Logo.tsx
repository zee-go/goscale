import Image from "next/image";

export function Logo() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className="flex items-center gap-2 hover:opacity-80 transition-opacity"
      aria-label="GoScale Media - Return to top"
    >
      <Image
        src="/Screenshot_2025-11-24_at_7.15.38_PM.png"
        alt="GoScale Media Logo"
        width={175}
        height={44}
        priority
        className="h-11 w-auto"
      />
    </button>
  );
}
