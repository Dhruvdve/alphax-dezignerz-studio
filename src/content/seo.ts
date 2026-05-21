import type { Metadata } from "next";

export const defaultSeo = {
  title: "AlphaX Dezignerz Studio — Graphic Design for Travel Agencies in India",
  description:
    "Premium social media design, branding, and reels for Indian travel agencies. Trusted by 15+ travel brands across India.",
  keywords: [
    "travel agency designer india",
    "social media for travel agency",
    "dmc branding",
    "travel reel design ahmedabad",
  ],
  ogImage: "/og-image.jpg",
} as const;

export function pageMetadata(
  overrides?: Partial<Metadata> & { title?: string },
): Metadata {
  const title = overrides?.title ?? defaultSeo.title;
  return {
    ...overrides,
    title,
    description: overrides?.description ?? defaultSeo.description,
    keywords: overrides?.keywords ?? defaultSeo.keywords,
    openGraph: {
      type: "website",
      locale: "en_IN",
      title,
      description: overrides?.description ?? defaultSeo.description,
      images: [{ url: defaultSeo.ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: overrides?.description ?? defaultSeo.description,
      images: [defaultSeo.ogImage],
    },
  };
}
