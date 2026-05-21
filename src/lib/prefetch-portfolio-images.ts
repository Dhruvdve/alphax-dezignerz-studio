import type { PortfolioItem } from "@/content/portfolio";
import { getPortfolioDemoFallback } from "@/content/portfolio";
import { buildPortfolioImageChain } from "@/lib/portfolio-image";
import { frameKindFromItem } from "@/lib/usePortfolioImageSrc";

export function getPortfolioImageChainForItem(
  item: PortfolioItem,
  thumbIndex: number,
): string[] {
  const frame = frameKindFromItem(item);
  const fallback = getPortfolioDemoFallback(frame, thumbIndex);
  return buildPortfolioImageChain(item.imageSrc ?? "", fallback);
}

/** Warm browser cache so all category thumbs appear on first paint */
export function prefetchPortfolioItems(items: PortfolioItem[]): void {
  if (typeof window === "undefined") return;

  const seen = new Set<string>();
  for (let i = 0; i < items.length; i++) {
    for (const url of getPortfolioImageChainForItem(items[i], i)) {
      if (seen.has(url)) continue;
      seen.add(url);
      const img = new Image();
      img.src = url;
    }
  }
}
