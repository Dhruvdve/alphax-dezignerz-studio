"use client";

import Link from "next/link";
import { AnimatedArrow, MotionHoverGroup } from "@/components/AnimatedArrow";
import { PrimaryCta } from "@/components/PrimaryCta";

type CategoryConversionCtaProps = {
  ctaLine: string;
  portfolioHref: string;
  portfolioLabel: string;
};

export function CategoryConversionCta({
  ctaLine,
  portfolioHref,
  portfolioLabel,
}: CategoryConversionCtaProps) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-navy/10 bg-gradient-to-r from-surfaceMuted to-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
      <p className="text-sm font-semibold text-navy sm:text-base">{ctaLine}</p>
      <div className="flex flex-col gap-2 sm:flex-row sm:shrink-0 sm:items-center">
        <PrimaryCta className="btn-cta px-5 py-2.5 text-sm" />
        <Link
          href={portfolioHref}
          className="inline-flex items-center justify-center rounded-full border border-navy/15 bg-white px-5 py-2.5 text-sm font-semibold text-navy transition hover:border-navy/30 hover:shadow-soft"
        >
          <MotionHoverGroup className="gap-2">
            {portfolioLabel}
            <AnimatedArrow />
          </MotionHoverGroup>
        </Link>
      </div>
    </div>
  );
}
