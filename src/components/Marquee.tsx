"use client";

import { useState } from "react";
import { marqueeClients } from "@/content/site";
import { trustBarMetric } from "@/content/conversion";
import { FadeIn } from "@/components/FadeIn";

function ClientLogo({
  name,
  initials,
  logoSrc,
  logoFallback,
}: {
  name: string;
  initials: string;
  logoSrc: string;
  logoFallback: string;
}) {
  const [src, setSrc] = useState(logoSrc);
  const [failed, setFailed] = useState(false);

  return (
    <div className="flex items-center gap-3 whitespace-nowrap rounded-2xl border border-white/15 bg-white/5 px-4 py-2.5 backdrop-blur-sm transition duration-300 hover:border-white/30 hover:bg-white/10">
      <span
        className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-1.5"
        aria-hidden={!failed}
      >
        {failed ? (
          <span className="text-xs font-bold text-navy">{initials}</span>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt=""
            className="h-full w-full object-contain"
            onError={() => {
              if (src !== logoFallback) {
                setSrc(logoFallback);
              } else {
                setFailed(true);
              }
            }}
          />
        )}
      </span>
      <span className="text-sm font-semibold text-white/95 sm:text-base">{name}</span>
    </div>
  );
}

export function Marquee() {
  return (
    <section className="border-y border-white/10 bg-navy text-white">
      <FadeIn variant="down" className="mx-auto max-w-6xl px-4 py-8 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-medium leading-relaxed text-white/90 sm:text-base">
          {trustBarMetric}
        </p>
      </FadeIn>
      <div className="relative overflow-hidden border-t border-white/10 py-5">
        <div className="flex w-[200%] animate-marquee">
          <div className="flex w-1/2 items-center justify-around gap-4 px-4 sm:gap-8">
            {marqueeClients.map((c) => (
              <ClientLogo key={c.name} {...c} />
            ))}
          </div>
          <div className="flex w-1/2 items-center justify-around gap-4 px-4 sm:gap-8" aria-hidden>
            {marqueeClients.map((c) => (
              <ClientLogo key={`dup-${c.name}`} {...c} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
