import Link from "next/link";

export function CTABanner() {
  return (
    <div className="not-prose my-10 p-6 bg-[#2E2E2E] rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
      <div>
        <p className="text-white font-semibold text-lg mb-1">
          Need help scaling your paid media?
        </p>
        <p className="text-gray-400 text-sm">
          Get a free audit of your current campaigns from our team.
        </p>
      </div>
      <Link
        href="/#contact"
        className="inline-block bg-[#FF6B6B] hover:bg-[#FF5252] text-white font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
      >
        Request an Audit
      </Link>
    </div>
  );
}
