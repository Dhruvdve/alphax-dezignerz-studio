"use client";

import { useState } from "react";
import { onPortfolioImageError } from "@/lib/portfolio-image";

type CaseStudyImageProps = {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
  aspectClass?: string;
};

export function CaseStudyImage({
  src,
  alt,
  fallbackSrc = "/portfolio/placeholder-logo.svg",
  className = "",
  aspectClass = "aspect-square",
}: CaseStudyImageProps) {
  const [active, setActive] = useState(src);

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-surfaceMuted ring-1 ring-navy/10 ${aspectClass} ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={active}
        alt={alt}
        className="h-full w-full object-cover"
        loading="lazy"
        decoding="async"
        onError={() => onPortfolioImageError(active, fallbackSrc, setActive)}
      />
    </div>
  );
}
