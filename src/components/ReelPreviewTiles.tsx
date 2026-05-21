"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { getItemsByCategory } from "@/content/portfolio";
import type { PortfolioItem } from "@/content/portfolio";
import { reelVideoSrc } from "@/content/media";
import { PortfolioVideoModal } from "@/components/PortfolioVideoModal";
import { ReelHoverVideo, useReelHoverPlay } from "@/components/ReelHoverVideo";
import { usePortfolioImageSrc } from "@/lib/usePortfolioImageSrc";

const previewReels = getItemsByCategory("reels-motion").slice(0, 6);

export function ReelPreviewTiles() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
      {previewReels.map((item, i) => (
        <ReelTile key={item.id} item={item} index={i} />
      ))}
    </div>
  );
}

function ReelTile({ item }: { item: PortfolioItem; index: number }) {
  const videoSrc = item.videoSrc ?? reelVideoSrc(item.id);
  const reelHover = useReelHoverPlay(videoSrc);
  const poster = usePortfolioImageSrc(item.imageSrc ?? "", "reel", index);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="group relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-navy ring-1 ring-navy/10 transition hover:ring-navy/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
        aria-label={`Play ${item.clientName} ${item.projectType}`}
        onClick={() => setModalOpen(true)}
        onMouseEnter={reelHover.onMouseEnter}
        onMouseLeave={reelHover.onMouseLeave}
      >
        <ReelHoverVideo
          videoRef={reelHover.videoRef}
          src={reelHover.activeSrc}
          poster={poster.src}
          armed={reelHover.armed}
          playing={reelHover.playing}
          ready={reelHover.ready}
          onLoadedData={reelHover.onLoadedData}
          onError={reelHover.onError}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={poster.src}
          alt=""
          loading="lazy"
          decoding="async"
          className={`absolute inset-0 h-full w-full object-cover ${
            reelHover.playing && reelHover.ready ? "opacity-0" : "opacity-100"
          }`}
          onError={poster.onError}
        />

        <div
          className={`pointer-events-none absolute inset-0 flex items-center justify-center bg-navy/20 transition ${
            reelHover.playing ? "opacity-0" : "opacity-100"
          }`}
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition group-hover:scale-105">
            <Play className="h-5 w-5 fill-white" />
          </span>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent p-3">
          <p className="text-xs font-semibold text-white">{item.clientName}</p>
          <p className="text-[10px] text-white/85">{item.projectType}</p>
        </div>
      </button>

      <PortfolioVideoModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={item.clientName}
        subtitle={item.projectType}
        videoSrc={reelHover.activeSrc}
        poster={poster.src}
      />
    </>
  );
}
