
export function Logo() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button 
      onClick={scrollToTop}
      className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-300 cursor-pointer"
    >
      <svg width="120" height="60" viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 75L60 45L60 105L30 75Z" fill="#2DD4BF"/>
        <path d="M50 75L80 45L80 105L50 75Z" fill="#6D8CA6"/>
        <path d="M70 75L100 45L100 105L70 75Z" fill="#FF6B6B"/>
      </svg>
      <div className="flex items-baseline gap-1">
        <span className="text-3xl font-black text-[--charcoal]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
          goscale
        </span>
        <span className="text-3xl font-black text-[--steel-blue] tracking-wider" style={{ fontFamily: 'Satoshi, sans-serif' }}>
          MEDIA
        </span>
      </div>
    </button>
  );
}
