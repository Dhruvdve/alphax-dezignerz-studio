"use client";

import { useEffect, useMemo } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { springSnappy } from "@/lib/motion";
import { reelVideoSrc } from "@/content/media";
import {
  getHomeMasonryImageSrc,
  getPortfolioItemById,
  homeMasonryShowcase,
} from "@/content/portfolio";
import { homePortfolioCopy } from "@/content/conversion";
import {
  frameKindFromItem,
  usePortfolioImageSrc,
} from "@/lib/usePortfolioImageSrc";
import { ReelHoverVideo, useReelHoverPlay } from "@/components/ReelHoverVideo";
import { prefetchPortfolioItems } from "@/lib/prefetch-portfolio-images";

function frameFromShowcaseId(id: string): "feed" | "reel" | "square" {
  if (id.startsWith("reel")) return "reel";
  if (id.startsWith("logo")) return "square";
  return "feed";
}

export function PortfolioMasonryPreview() {
  const masonryItems = useMemo(
    () =>
      homeMasonryShowcase
        .map((s) => getPortfolioItemById(s.id))
        .filter((item): item is NonNullable<typeof item> => Boolean(item)),
    [],
  );

  useEffect(() => {
    prefetchPortfolioItems(masonryItems);
  }, [masonryItems]);

  return (
    <div className="columns-2 gap-4 sm:columns-3">
      {homeMasonryShowcase.map((item, i) => (
        <MasonryTile key={item.id} showcase={item} index={i} />
      ))}
    </div>
  );
}

function MasonryTile({
  showcase,
  index,
}: {
  showcase: (typeof homeMasonryShowcase)[number];
  index: number;
}) {
  const portfolioItem = getPortfolioItemById(showcase.id);
  const imageSrc = getHomeMasonryImageSrc(showcase.id);
  const frame = portfolioItem
    ? frameKindFromItem(portfolioItem)
    : frameFromShowcaseId(showcase.id);
  const { src, onError } = usePortfolioImageSrc(imageSrc, frame, index);
  const isReel = showcase.id.startsWith("reel");
  const videoSrc = portfolioItem?.videoSrc ?? reelVideoSrc(showcase.id);
  const reelHover = useReelHoverPlay(videoSrc);
  const reduce = useReducedMotion();
  const gradient =
    portfolioItem?.gradient ??
    "linear-gradient(135deg, #2a4d6e 0%, #1A3B5D 100%)";
  const eagerImage = index < 3;

  const tile = (
    <Link
      href={homePortfolioCopy.ctaHref}
      className={`group relative block w-full overflow-hidden rounded-2xl shadow-soft ring-1 ring-navy/10 transition-shadow duration-300 hover:shadow-card ${
        showcase.aspect === "tall" ? "aspect-[3/5]" : "aspect-[3/4]"
      }`}
      style={{ background: gradient }}
      onMouseEnter={isReel ? reelHover.onMouseEnter : undefined}
      onMouseLeave={isReel ? reelHover.onMouseLeave : undefined}
    >
      {isReel ? (
        <ReelHoverVideo
          videoRef={reelHover.videoRef}
          src={reelHover.activeSrc}
          poster={src}
          armed={reelHover.armed}
          playing={reelHover.playing}
          ready={reelHover.ready}
          onLoadedData={reelHover.onLoadedData}
          onError={reelHover.onError}
        />
      ) : null}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        key={src}
        src={src}
        alt={showcase.title}
        loading={eagerImage ? "eager" : "lazy"}
        decoding="async"
        className={`h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.06] ${
          isReel && reelHover.playing && reelHover.ready ? "opacity-0" : "opacity-100"
        }`}
        onError={onError}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-80 transition group-hover:opacity-100" />
      <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
        <p className="text-xs font-bold uppercase tracking-wide text-white/70">
          {showcase.category}
        </p>
        <p className="mt-1 text-sm font-semibold text-white sm:text-base">
          {showcase.title}
        </p>
      </div>
    </Link>
  );

  if (reduce) {
    return <div className="mb-4">{tile}</div>;
  }

  return (
    <motion.div
      className="mb-4"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={springSnappy}
    >
      {tile}
    </motion.div>
  );
}
