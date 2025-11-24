
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
        src="/g (2).png"
        alt="GoScale Media Logo"
        width={280}
        height={70}
        priority
        className="h-16 w-auto md:h-20"
      />
    </button>
  );
}
