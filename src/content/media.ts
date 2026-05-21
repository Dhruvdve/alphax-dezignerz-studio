/**
 * Videos: add MP4 files under `public/portfolio/videos/` (see PORTFOLIO-FILES.md).
 * Until your file exists, the site uses `fallbackReelMp4` (demo clip).
 */

export const fallbackReelMp4 =
  "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";

/** Homepage hero reel — add `public/portfolio/videos/showreel.mp4` */
export const siteVideos = {
  showreel: "/portfolio/videos/showreel.mp4",
} as const;

export function reelVideoSrc(reelId: string): string {
  return `/portfolio/videos/${reelId}.mp4`;
}
