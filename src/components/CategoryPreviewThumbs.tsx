"use client";

import type { PortfolioItem } from "@/content/portfolio";
import { getPortfolioAspectClass } from "@/content/portfolio";
import { reelVideoSrc } from "@/content/media";
import {
  frameKindFromItem,
  usePortfolioImageSrc,
} from "@/lib/usePortfolioImageSrc";
import { ReelHoverVideo, useReelHoverPlay } from "@/components/ReelHoverVideo";

function Thumb({ item, index }: { item: PortfolioItem; index: number }) {
  const frame = frameKindFromItem(item);
  const imageSrc = item.imageSrc ?? "";
  const { src, onError } = usePortfolioImageSrc(imageSrc, frame, index);
  const aspect = getPortfolioAspectClass(item);
  const isReel = item.category === "reels-motion";
  const videoSrc = item.videoSrc ?? reelVideoSrc(item.id);
  const reelHover = useReelHoverPlay(videoSrc);

  return (
    <div
      className={`relative overflow-hidden rounded-lg ring-1 ring-navy/10 ${aspect}`}
      style={{ background: item.gradient }}
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
        src={src}
        alt=""
        loading="eager"
        fetchPriority="low"
        decoding="async"
        className={`h-full w-full object-cover transition duration-300 ${
          isReel && reelHover.playing && reelHover.ready ? "opacity-0" : "opacity-100"
        }`}
        onError={onError}
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
