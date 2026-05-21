"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import { ArrowUpRight, Play } from "lucide-react";
import {
  getPortfolioAspectClass,
  getPortfolioDemoFallback,
  type PortfolioItem,
} from "@/content/portfolio";
import {
  getLogoCaseStudyPath,
  hasLogoCaseStudy,
} from "@/content/logo-case-studies";
import { PortfolioVideoModal } from "@/components/PortfolioVideoModal";

type PortfolioTileProps = {
  item: PortfolioItem;
  aspectClass?: string;
  layout?: "grid" | "masonry";
};

function frameKind(item: PortfolioItem): "feed" | "reel" | "square" {
  if (item.category === "reels-motion") return "reel";
  if (item.category === "logos-branding") return "square";
  return "feed";
}

function itemIndex(item: PortfolioItem): number {
  const m = item.id.match(/-(\d+)$/);
  return m ? Math.max(0, parseInt(m[1], 10) - 1) : 0;
}

export function PortfolioTile({
  item,
  aspectClass,
  layout = "grid",
}: PortfolioTileProps) {
  const aspect = aspectClass ?? getPortfolioAspectClass(item);
  const idx = itemIndex(item);
  const frame = frameKind(item);
  const fallbackSrc = useMemo(
    () => getPortfolioDemoFallback(frame, idx),
    [frame, idx],
  );
  const [src, setSrc] = useState(item.imageSrc ?? fallbackSrc);
  const [hoverSrc, setHoverSrc] = useState(
    item.imageSrcHover ?? item.imageSrc ?? fallbackSrc,
  );
  const [hoverReady, setHoverReady] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const hasVideo = Boolean(item.videoSrc);
  const logoSwap = item.category === "logos-branding" && Boolean(item.imageSrcHover);
  const caseStudyHref =
    item.category === "logos-branding" && hasLogoCaseStudy(item.id)
      ? getLogoCaseStudyPath(item.id)
      : null;
  const layoutClass = layout === "masonry" ? "mb-5 break-inside-avoid" : "";
  const reduce = useReducedMotion();

  const aspectRatio =
    frame === "reel" ? "9 / 16" : frame === "square" ? "1 / 1" : "3 / 4";

  const tile = (
    <motion.article
      className={`group w-full overflow-hidden rounded-2xl bg-navy shadow-card ring-1 ring-black/5 ${layoutClass}`}
      whileHover={reduce ? undefined : { y: -4, boxShadow: "0 12px 40px -12px rgba(26, 59, 93, 0.35)" }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
    >
        <div
          className={`relative w-full ${aspect}`}
          style={{ aspectRatio }}
        >
          <div
            className="absolute inset-0 z-0"
            style={{ background: item.gradient }}
            aria-hidden
          />

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={`${item.clientName} — ${item.projectType}`}
            className={`absolute inset-0 z-[1] h-full w-full object-cover transition duration-500 ${
              logoSwap && hoverReady
                ? "opacity-100 group-hover:opacity-0 group-hover:scale-[1.02]"
                : "group-hover:scale-[1.02]"
            }`}
            loading="lazy"
            decoding="async"
            onError={() => {
              if (src !== fallbackSrc) setSrc(fallbackSrc);
            }}
          />

          {logoSwap && item.imageSrcHover ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={hoverSrc}
              alt=""
              aria-hidden
              className={`absolute inset-0 z-[1] h-full w-full object-cover transition duration-500 ${
                hoverReady
                  ? "opacity-0 group-hover:opacity-100 group-hover:scale-[1.02]"
                  : "pointer-events-none opacity-0"
              }`}
              loading="lazy"
              decoding="async"
              onLoad={() => setHoverReady(true)}
              onError={() => {
                if (hoverSrc !== fallbackSrc) setHoverSrc(fallbackSrc);
                else setHoverReady(false);
              }}
            />
          ) : null}

          <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-navy/85 via-transparent to-transparent" />
          <div className="absolute inset-0 z-[2] bg-navy/0 transition duration-300 group-hover:bg-navy/30" />

          <div className="absolute inset-x-0 bottom-0 z-[3] p-3 sm:p-4">
            <p className="text-sm font-semibold text-white drop-shadow-md">{item.clientName}</p>
            <p className="text-xs text-white/90">{item.projectType}</p>
            {caseStudyHref ? (
              <p className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-white/95 opacity-0 transition group-hover:opacity-100">
                View design process
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
              </p>
            ) : null}
          </div>

          {hasVideo ? (
            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              className="absolute right-2 top-2 z-[3] inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/25 bg-black/45 text-white backdrop-blur-md transition hover:scale-105 hover:bg-black/55 sm:right-3 sm:top-3"
              aria-label={`Play ${item.projectType} on this site`}
            >
              <Play className="h-4 w-4 fill-white sm:h-5 sm:w-5" />
            </button>
          ) : null}
        </div>
    </motion.article>
  );

  return (
    <>
      {caseStudyHref ? (
        <Link
          href={caseStudyHref}
          className={`block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 ${layoutClass}`}
          aria-label={`View logo design process for ${item.clientName}`}
        >
          {tile}
        </Link>
      ) : (
        tile
      )}

      {hasVideo && item.videoSrc ? (
        <PortfolioVideoModal
          open={videoOpen}
          onClose={() => setVideoOpen(false)}
          title={item.clientName}
          subtitle={item.projectType}
          videoSrc={item.videoSrc}
          poster={item.imageSrc}
        />
      ) : null}
    </>
  );
}
