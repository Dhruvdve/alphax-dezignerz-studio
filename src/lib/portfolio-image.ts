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

/** Primary path → other extension → placeholder (no duplicates). */
export function buildPortfolioImageChain(
  primary: string,
  fallback: string,
): string[] {
  const png = portfolioImagePngVariant(primary);
  const jpg = portfolioImageJpgVariant(primary);
  return [...new Set([primary, png, jpg, fallback].filter(Boolean) as string[])];
}

/** JPG first in data → on miss, try .png once → then placeholder. */
export function onPortfolioImageError(
  current: string,
  fallback: string,
  setSrc: (next: string) => void,
): void {
  const png = portfolioImagePngVariant(current);
  if (png) {
    setSrc(png);
    return;
  }
  if (current !== fallback) setSrc(fallback);
}
