"use client";

import { useState } from "react";
import Link from "next/link";
import { homeWorkShowcase } from "@/content/experience";
import { homePortfolioCopy } from "@/content/conversion";

const fallbacks = [
  "/portfolio/placeholder-feed.svg",
  "/portfolio/placeholder-feed-2.svg",
  "/portfolio/placeholder-feed-3.svg",
  "/portfolio/placeholder-reel.svg",
  "/portfolio/placeholder-logo.svg",
  "/portfolio/placeholder-feed-4.svg",
];

export function PortfolioMasonryPreview() {
  return (
    <div className="columns-2 gap-4 sm:columns-3">
      {homeWorkShowcase.map((item, i) => (
        <MasonryTile
          key={item.src}
          src={item.src}
          fallback={fallbacks[i % fallbacks.length]}
          title={item.title}
          category={item.category}
          tall={i % 3 === 0}
        />
      ))}
    </div>
  );
}

function MasonryTile({
  src,
  fallback,
  title,
  category,
  tall,
}: {
  src: string;
  fallback: string;
  title: string;
  category: string;
  tall?: boolean;
}) {
  const [img, setImg] = useState(src);

  return (
    <Link
      href={homePortfolioCopy.ctaHref}
      className={`group relative mb-4 block w-full overflow-hidden rounded-2xl bg-navy shadow-soft ring-1 ring-navy/10 ${
        tall ? "aspect-[3/5]" : "aspect-[3/4]"
      }`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={img}
        alt={title}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        onError={() => {
          if (img !== fallback) setImg(fallback);
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-80 transition group-hover:opacity-100" />
      <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
        <p className="text-xs font-bold uppercase tracking-wide text-white/70">{category}</p>
        <p className="mt-1 text-sm font-semibold text-white sm:text-base">{title}</p>
      </div>
    </Link>
  );
}
