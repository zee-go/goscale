
export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 20L15 10L15 30L5 20Z" fill="#2DD4BF" opacity="0.9"/>
        <path d="M12 20L22 10L22 30L12 20Z" fill="#6D8CA6" opacity="0.85"/>
        <path d="M19 20L29 10L29 30L19 20Z" fill="#FF6B6B" opacity="0.9"/>
        <path d="M29 10L35 20L29 30L29 10Z" fill="#FF6B6B" opacity="0.7"/>
      </svg>
      <span className="text-2xl font-bold text-[--charcoal]">GoScale Media</span>
    </div>
  );
}
