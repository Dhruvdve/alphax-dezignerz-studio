"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/content/site";

type BrandLogoProps = {
  onClick?: () => void;
  className?: string;
};

/** Wordmark + logo mark — use in header */
export function BrandLogo({ onClick, className = "" }: BrandLogoProps) {
  const [useFallbackMark, setUseFallbackMark] = useState(false);

  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label="AlphaX Dezignerz Studio — Home"
      className={`group flex min-w-0 max-w-[min(100%,14rem)] items-center gap-2.5 sm:max-w-none sm:gap-3 ${className}`}
    >
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center sm:h-11 sm:w-11 ${
          useFallbackMark
            ? "overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-white/20"
            : ""
        }`}
        aria-hidden
      >
        {useFallbackMark ? (
          <span className="text-sm font-extrabold tracking-tighter sm:text-base">
            <span className="text-navy">A</span>
            <span className="text-accent">X</span>
          </span>
        ) : (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={siteConfig.brandLogoSrc}
            alt=""
            width={44}
            height={44}
            className="h-full w-full object-contain"
            onError={() => setUseFallbackMark(true)}
          />
        )}
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
