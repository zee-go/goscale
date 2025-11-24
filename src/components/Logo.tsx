
import Image from "next/image";

export function Logo() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button 
      onClick={scrollToTop}
      className="flex items-center hover:opacity-80 transition-opacity duration-300 cursor-pointer"
    >
      <Image 
        src="/Screenshot_2025-11-24_at_7.15.38_PM.png"
        alt="GoScale Media Logo"
        width={300}
        height={100}
        className="h-12 w-auto"
        priority
      />
    </button>
  );
}
