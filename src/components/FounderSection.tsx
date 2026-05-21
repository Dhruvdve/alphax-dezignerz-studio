"use client";

import { useState } from "react";
import Link from "next/link";
import { founderSection } from "@/content/experience";
import { siteConfig } from "@/content/site";
import { FadeIn } from "@/components/FadeIn";
import { Section } from "@/components/Section";

export function FounderSection() {
  const [src, setSrc] = useState<string>(founderSection.imageSrc);

  return (
    <Section variant="white">
      <FadeIn>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="mx-auto w-full max-w-sm lg:max-w-none">
            <div className="overflow-hidden rounded-3xl border-2 border-navy/15 shadow-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={founderSection.imageAlt}
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
                onError={() => setSrc("/portfolio/placeholder-logo.svg")}
              />
            </div>
          </div>
          <div>
            <span className="label-accent">Founder</span>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
              {founderSection.headline}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-navy/85 sm:text-lg">
              {founderSection.body}
            </p>
            <ul className="mt-6 space-y-2.5">
              {founderSection.proofPoints.map((point) => (
                <li
                  key={point}
                  className="flex gap-2 text-sm leading-relaxed text-navy/85 sm:text-base"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  {point}
                </li>
              ))}
            </ul>
            <Link
              href={siteConfig.behanceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex text-sm font-semibold text-navy underline-offset-4 hover:underline sm:text-base"
            >
              {founderSection.behanceLabel}
            </Link>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
