"use client";

import { useState } from "react";
import type { PortfolioItem } from "@/content/portfolio";
import { getPortfolioAspectClass, getPortfolioDemoFallback } from "@/content/portfolio";

function frameKind(item: PortfolioItem): "feed" | "reel" | "square" {
  if (item.category === "reels-motion") return "reel";
  if (item.category === "logos-branding") return "square";
  return "feed";
}

function Thumb({ item, index }: { item: PortfolioItem; index: number }) {
  const [src, setSrc] = useState(item.imageSrc ?? getPortfolioDemoFallback(frameKind(item), index));
  const aspect = getPortfolioAspectClass(item);

  return (
    <div
      className={`relative overflow-hidden rounded-lg bg-navy/5 ring-1 ring-navy/10 ${aspect}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        loading="lazy"
        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        onError={() => setSrc(getPortfolioDemoFallback(frameKind(item), index))}
      />
    </div>
  );
}

export function CategoryPreviewThumbs({ items }: { items: PortfolioItem[] }) {
  return (
    <div className="mt-4 grid grid-cols-4 gap-2">
      {items.map((item, i) => (
        <Thumb key={item.id} item={item} index={i} />
      ))}
    </div>
  );
}
