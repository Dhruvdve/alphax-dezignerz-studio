"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { AnimatedArrow } from "@/components/AnimatedArrow";

type PortfolioImageLightboxProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  imageSrc: string;
  caseStudyHref?: string | null;
};

export function PortfolioImageLightbox({
  open,
  onClose,
  title,
  subtitle,
  imageSrc,
  caseStudyHref,
}: PortfolioImageLightboxProps) {
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
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy/90 p-4 backdrop-blur-md sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="portfolio-image-title"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-[101] inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-navy shadow-card sm:right-8 sm:top-8"
        aria-label="Close image"
      >
        <X className="h-4 w-4" />
        Close
      </button>

      <div
        className="flex max-h-[85vh] w-full max-w-4xl flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex max-h-[calc(85vh-5rem)] w-full items-center justify-center overflow-hidden rounded-2xl bg-black/20 shadow-card ring-1 ring-white/15">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            alt={title}
            className="max-h-[calc(85vh-5rem)] w-auto max-w-full object-contain"
          />
        </div>

        <div className="mt-4 w-full text-center text-white">
          <p id="portfolio-image-title" className="text-base font-semibold sm:text-lg">
            {title}
          </p>
          {subtitle ? <p className="mt-1 text-sm text-white/75">{subtitle}</p> : null}
          {caseStudyHref ? (
            <Link
              href={caseStudyHref}
              className="mt-4 inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20"
              onClick={onClose}
            >
              <span className="inline-flex items-center gap-2">
                View design process
                <AnimatedArrow />
              </span>
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}
