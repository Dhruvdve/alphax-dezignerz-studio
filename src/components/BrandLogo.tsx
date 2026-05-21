import Link from "next/link";

type BrandLogoProps = {
  onClick?: () => void;
  className?: string;
};

/** Wordmark + monogram — use in header and footer */
export function BrandLogo({ onClick, className = "" }: BrandLogoProps) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label="AlphaX Dezignerz Studio — Home"
      className={`group flex min-w-0 max-w-[min(100%,14rem)] items-center gap-2.5 sm:max-w-none sm:gap-3 ${className}`}
    >
      <span
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-sm font-extrabold tracking-tighter shadow-sm ring-1 ring-white/20 transition group-hover:shadow-md sm:h-11 sm:w-11 sm:rounded-2xl sm:text-base"
        aria-hidden
      >
        <span className="text-navy">A</span>
        <span className="text-accent">X</span>
      </span>
      <span className="min-w-0 leading-none text-white">
        <span className="block truncate text-base font-bold tracking-tight sm:text-lg">
          AlphaX Dezignerz
        </span>
        <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.22em] text-white/55 sm:text-[11px]">
          Studio
        </span>
      </span>
    </Link>
  );
}
