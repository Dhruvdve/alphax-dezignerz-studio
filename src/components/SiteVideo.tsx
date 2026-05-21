"use client";

import { useState } from "react";

type SiteVideoProps = {
  src: string;
  poster?: string;
  title: string;
  /** Used if `src` file is missing */
  fallbackSrc?: string;
  aspectClass?: string;
  className?: string;
};

export function SiteVideo({
  src,
  poster,
  title,
  fallbackSrc,
  aspectClass = "aspect-[9/16]",
  className = "",
}: SiteVideoProps) {
  const [activeSrc, setActiveSrc] = useState(src);

  return (
    <div className={`relative overflow-hidden bg-navy ${aspectClass} ${className}`}>
      <video
        key={activeSrc}
        src={activeSrc}
        poster={poster}
        controls
        playsInline
        preload="metadata"
        className="h-full w-full object-cover"
        title={title}
        onError={() => {
          if (fallbackSrc && activeSrc !== fallbackSrc) setActiveSrc(fallbackSrc);
        }}
      >
        Your browser does not support embedded video.
      </video>
    </div>
  );
}
