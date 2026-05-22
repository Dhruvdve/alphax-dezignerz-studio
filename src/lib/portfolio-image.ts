/** PNG variant when the site first requested JPG (mixed uploads). */
export function portfolioImagePngVariant(src: string): string | null {
  const lower = src.toLowerCase();
  if (lower.endsWith(".jpg")) return `${src.slice(0, -4)}.png`;
  if (lower.endsWith(".jpeg")) return `${src.slice(0, -5)}.png`;
  return null;
}

/** JPG variant when the site first requested PNG (mixed uploads). */
export function portfolioImageJpgVariant(src: string): string | null {
  const lower = src.toLowerCase();
  if (lower.endsWith(".png")) return `${src.slice(0, -4)}.jpg`;
  return null;
}

import { portfolioImagePath } from "@/content/portfolio-image-ext";

/** Base path without extension, e.g. `/portfolio/images/sm-post-3` */
export function portfolioImageBase(src: string): string | null {
  const match = src.match(/^(.+)\.(jpe?g|png)$/i);
  return match ? match[1] : null;
}

function idFromPortfolioSrc(src: string): string | null {
  const match = src.match(/\/portfolio\/images\/([^./]+)\./i);
  return match ? match[1] : null;
}

/** Prefer on-disk extension first, then the other format, then placeholder. */
export function buildPortfolioImageChain(
  primary: string,
  fallback: string,
): string[] {
  const id = idFromPortfolioSrc(primary);
  const resolved = id ? portfolioImagePath(id) : primary;
  const base = portfolioImageBase(resolved);
  const fromBase = base
    ? id?.startsWith("reel-")
      ? [`${base}.png`, `${base}.jpg`, `${base}.jpeg`]
      : [`${base}.jpg`, `${base}.jpeg`, `${base}.png`]
    : [];
  const png = portfolioImagePngVariant(resolved);
  const jpg = portfolioImageJpgVariant(resolved);
  return [...new Set([resolved, ...fromBase, png, jpg, fallback].filter(Boolean) as string[])];
}

/** Walk the same chain as thumbnails (jpg → png → placeholder). */
export function onPortfolioImageError(
  current: string,
  fallback: string,
  setSrc: (next: string) => void,
  primary?: string,
): void {
  const chain = buildPortfolioImageChain(primary ?? current, fallback);
  const idx = chain.indexOf(current);
  if (idx >= 0 && idx < chain.length - 1) {
    setSrc(chain[idx + 1]!);
    return;
  }
  const png = portfolioImagePngVariant(current);
  if (png && png !== current) {
    setSrc(png);
    return;
  }
  const jpg = portfolioImageJpgVariant(current);
  if (jpg && jpg !== current) {
    setSrc(jpg);
    return;
  }
  if (current !== fallback) setSrc(fallback);
}
