/**
 * Actual extensions on disk under `public/portfolio/images/`.
 * Keeps thumbnails loading on first paint (no broken-icon flash from wrong .jpg/.png).
 * Re-run after adding files: dir public/portfolio/images/*.{jpg,png}
 */
export const portfolioImageExt = {
  "flyer-1": "jpg",
  "flyer-2": "jpg",
  "flyer-3": "jpg",
  "flyer-4": "jpg",
  "flyer-5": "png",
  "flyer-6": "png",
  "flyer-7": "png",
  "flyer-8": "png",
  "flyer-9": "png",
  "flyer-10": "png",
  "reel-1": "png",
  "reel-2": "png",
  "reel-3": "png",
  "reel-4": "png",
  "reel-5": "png",
  "reel-6": "png",
  "reel-7": "png",
  "reel-8": "png",
  "reel-9": "png",
  "reel-10": "png",
  "reel-11": "png",
  "reel-12": "png",
  "sm-carousel-1": "jpg",
  "sm-carousel-2": "png",
  "sm-carousel-3": "png",
  "sm-carousel-4": "png",
  "sm-carousel-5": "png",
  "sm-carousel-6": "png",
  "sm-carousel-7": "png",
  "sm-carousel-8": "jpg",
  "sm-post-1": "png",
  "sm-post-2": "png",
  "sm-post-3": "jpg",
  "sm-post-4": "jpg",
  "sm-post-5": "jpg",
  "sm-post-6": "png",
  "sm-post-7": "png",
  "sm-post-8": "png",
  "sm-post-9": "jpg",
  "sm-post-10": "jpg",
} as const satisfies Record<string, "jpg" | "png">;

export type PortfolioImageExt = keyof typeof portfolioImageExt;

export function portfolioImagePath(id: string): string {
  const ext = portfolioImageExt[id as PortfolioImageExt];
  if (ext) return `/portfolio/images/${id}.${ext}`;
  if (id.startsWith("reel-")) return `/portfolio/images/${id}.png`;
  return `/portfolio/images/${id}.jpg`;
}
