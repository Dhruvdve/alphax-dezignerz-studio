"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { fallbackReelMp4 } from "@/content/media";
import { SiteVideo } from "@/components/SiteVideo";

type PortfolioVideoModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  videoSrc: string;
  poster?: string;
};

export function PortfolioVideoModal({
  open,
  onClose,
  title,
  subtitle,
  videoSrc,
  poster,
}: PortfolioVideoModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/80 p-4 backdrop-blur-sm sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="portfolio-video-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute -right-1 -top-12 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-navy shadow-card sm:-right-2"
          aria-label="Close video"
        >
          <X className="h-4 w-4" />
          Close
        </button>
        <div className="overflow-hidden rounded-2xl shadow-card ring-1 ring-white/20">
          <SiteVideo
            src={videoSrc}
            fallbackSrc={fallbackReelMp4}
            poster={poster}
            title={title}
            aspectClass="aspect-[9/16] w-full max-h-[80vh]"
          />
        </div>
        <div className="mt-4 text-center text-white">
          <p id="portfolio-video-title" className="text-base font-semibold">
            {title}
          </p>
          {subtitle ? <p className="mt-1 text-sm text-white/75">{subtitle}</p> : null}
        </div>
      </div>
    </div>
  );
}
