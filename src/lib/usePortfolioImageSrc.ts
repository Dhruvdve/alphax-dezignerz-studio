"use client";

import { useCallback, useMemo, useState } from "react";
import {
  getPortfolioDemoFallback,
  type PortfolioItem,
} from "@/content/portfolio";
import { buildPortfolioImageChain } from "@/lib/portfolio-image";

type FrameKind = "feed" | "reel" | "square";

function buildSrcChain(
  imageSrc: string,
  frame: FrameKind,
  thumbIndex: number,
): string[] {
  const fallback = getPortfolioDemoFallback(frame, thumbIndex);
  const chain = buildPortfolioImageChain(imageSrc, fallback);
  if (frame === "square" && /\/logo-\d+\.(jpe?g|png)$/i.test(imageSrc)) {
    return [...new Set([fallback, ...chain])];
  }
  return chain;
}

export function usePortfolioImageSrc(
  imageSrc: string,
  frame: FrameKind,
  thumbIndex: number,
) {
  const chain = useMemo(
    () => buildSrcChain(imageSrc, frame, thumbIndex),
    [imageSrc, frame, thumbIndex],
  );
  const [chainIndex, setChainIndex] = useState(0);

  const src = chain[Math.min(chainIndex, chain.length - 1)] ?? chain[chain.length - 1];

  const onError = useCallback(() => {
    setChainIndex((i) => (i < chain.length - 1 ? i + 1 : i));
  }, [chain.length]);

  return { src, onError };
}

export function frameKindFromItem(item: PortfolioItem): FrameKind {
  if (item.category === "reels-motion") return "reel";
  if (item.category === "logos-branding") return "square";
  return "feed";
}
