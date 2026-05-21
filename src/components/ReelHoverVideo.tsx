"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { fallbackReelMp4 } from "@/content/media";

export function useReelHoverPlay(initialSrc: string) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeSrc, setActiveSrc] = useState(initialSrc);
  const [armed, setArmed] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);

  const onMouseEnter = useCallback(() => setArmed(true), []);

  const onMouseLeave = useCallback(() => {
    const v = videoRef.current;
    if (v) {
      v.pause();
      v.removeAttribute("src");
      v.load();
    }
    setArmed(false);
    setPlaying(false);
    setReady(false);
  }, []);

  useEffect(() => {
    if (!armed) return;
    const v = videoRef.current;
    if (!v) return;
    void v.play().then(() => setPlaying(true)).catch(() => undefined);
  }, [armed, activeSrc, ready]);

  const onLoadedData = useCallback(() => setReady(true), []);

  const onError = useCallback(() => {
    if (activeSrc !== fallbackReelMp4) {
      setActiveSrc(fallbackReelMp4);
      setReady(false);
    }
  }, [activeSrc]);

  return {
    videoRef,
    activeSrc,
    armed,
    playing,
    ready,
    onMouseEnter,
    onMouseLeave,
    onLoadedData,
    onError,
  };
}

type ReelHoverVideoProps = {
  videoRef: React.RefObject<HTMLVideoElement | null>;
  src: string;
  poster?: string;
  armed: boolean;
  playing: boolean;
  ready: boolean;
  onLoadedData: () => void;
  onError: () => void;
};

/** Video file loads only after hover — keeps page fast */
export function ReelHoverVideo({
  videoRef,
  src,
  poster,
  armed,
  playing,
  ready,
  onLoadedData,
  onError,
}: ReelHoverVideoProps) {
  if (!armed) return null;

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="auto"
      className={`absolute inset-0 z-[2] h-full w-full object-cover transition-opacity duration-300 ${
        playing && ready ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      onLoadedData={onLoadedData}
      onError={onError}
    />
  );
}
