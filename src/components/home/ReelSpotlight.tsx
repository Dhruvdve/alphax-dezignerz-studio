"use client";

import { showcaseReel } from "@/content/experience";
import { fallbackReelMp4 } from "@/content/media";
import { FadeIn } from "@/components/FadeIn";
import { SiteVideo } from "@/components/SiteVideo";

export function ReelSpotlight() {
  return (
    <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:items-center">
      <div className="lg:col-span-5">
        <FadeIn variant="left">
          <span className="label-accent">{showcaseReel.eyebrow}</span>
          <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">{showcaseReel.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-navy/90 sm:text-lg">
            {showcaseReel.description}
          </p>
          <p className="mt-4 text-sm text-navy/70">
            Press play to preview — video runs here on the site, no redirect.
          </p>
        </FadeIn>
      </div>

      <FadeIn variant="right" delay={0.08} className="lg:col-span-7">
        <div className="mx-auto max-w-md overflow-hidden rounded-[1.75rem] border border-navy/10 shadow-card lg:max-w-none">
          <SiteVideo
            src={showcaseReel.videoSrc}
            fallbackSrc={fallbackReelMp4}
            title={showcaseReel.title}
            aspectClass="aspect-[9/16] w-full"
          />
        </div>
      </FadeIn>
    </div>
  );
}
