import Link from "next/link";
import { scarcityBanner } from "@/content/cta";

export function ScarcityBanner() {
  return (
    <div
      className="relative z-[60] border-b border-white/10 px-4 py-2.5 text-center text-sm font-semibold text-white"
      style={{ backgroundColor: "#2E4BDB" }}
    >
      <Link
        href={scarcityBanner.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block transition hover:underline"
      >
        {scarcityBanner.text}
      </Link>
    </div>
  );
}
