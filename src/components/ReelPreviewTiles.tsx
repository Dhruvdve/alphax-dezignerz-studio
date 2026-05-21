"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { fallbackReelMp4 } from "@/content/media";

const reels = [
  { src: "/reels/reel-1.mp4", label: "Travel reel 1" },
  { src: "/reels/reel-2.mp4", label: "Travel reel 2" },
  { src: "/reels/reel-3.mp4", label: "Travel reel 3" },
] as const;

export function ReelPreviewTiles() {
  return (
    <div className="grid max-w-3xl grid-cols-3 gap-3 sm:gap-4">
      {reels.map((reel) => (
        <ReelTile key={reel.src} src={reel.src} label={reel.label} />
      ))}
    </div>
  );
}

function ReelTile({ src, label }: { src: string; label: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeSrc, setActiveSrc] = useState(src);
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className="group relative aspect-[9/16] overflow-hidden rounded-2xl bg-navy ring-1 ring-navy/10"
      onMouseEnter={() => {
        const v = videoRef.current;
        if (!v) return;
        v.play().catch(() => undefined);
        setPlaying(true);
      }}
      onMouseLeave={() => {
        const v = videoRef.current;
        if (!v) return;
        v.pause();
        v.currentTime = 0;
        setPlaying(false);
      }}
    >
      <video
        ref={videoRef}
        src={activeSrc}
        muted
        loop
        playsInline
        preload="metadata"
        className="h-full w-full object-cover"
        onError={() => {
          if (activeSrc !== fallbackReelMp4) setActiveSrc(fallbackReelMp4);
        }}
      />
      <div
        className={`pointer-events-none absolute inset-0 flex items-center justify-center bg-navy/25 transition ${
          playing ? "opacity-0" : "opacity-100"
        }`}
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm">
          <Play className="h-5 w-5 fill-white" />
        </span>
      </div>
      <p className="sr-only">{label}</p>
    </div>
  );
}
