
export function Footer() {
  return (
    <footer className="py-12 px-6 bg-[--charcoal] text-center">
      <div className="max-w-7xl mx-auto">
        <p className="text-gray-400">
          © {new Date().getFullYear()} GoScale Media. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
