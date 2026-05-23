import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

/** IndexNow key — hosted at /{indexNowKey}.txt for Bing and partners */
export const indexNowKey = "a1b2c3d4e5f6789012345678abcdef01";

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

const ogImageMeta = {
  url: defaultSeo.ogImage,
  width: 1200,
  height: 630,
  alt: defaultSeo.title,
} as const;

function siteVerification(): Metadata["verification"] | undefined {
  const google = process.env.GOOGLE_SITE_VERIFICATION;
  const bing = process.env.BING_SITE_VERIFICATION ?? "EF340871B3925EDE3C797C6D51617BEC";
  if (!google && !bing) return undefined;

  return {
    ...(google ? { google } : {}),
    ...(bing ? { other: { "msvalidate.01": bing } } : {}),
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: defaultSeo.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: defaultSeo.description,
  keywords: [...defaultSeo.keywords],
  authors: [{ name: siteConfig.owner, url: siteConfig.behanceUrl }],
  creator: siteConfig.owner,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: "/" },
  verification: siteVerification(),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: defaultSeo.title,
    description: defaultSeo.description,
    images: [ogImageMeta],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultSeo.title,
    description: defaultSeo.description,
    images: [defaultSeo.ogImage],
  },
};

export function pageMetadata(
  overrides?: Partial<Metadata> & { title?: string; path?: string },
): Metadata {
  const title = overrides?.title ?? defaultSeo.title;
  const description = overrides?.description ?? defaultSeo.description;
  const canonical =
    overrides?.alternates?.canonical ??
    (overrides?.path ? overrides.path : undefined);
  const canonicalPath = typeof canonical === "string" ? canonical : undefined;

  return {
    title,
    description,
    keywords: (overrides?.keywords ?? defaultSeo.keywords) as string[],
    robots: overrides?.robots ?? { index: true, follow: true },
    alternates: {
      ...overrides?.alternates,
      ...(canonical ? { canonical: canonicalPath ?? canonical } : {}),
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: siteConfig.name,
      title,
      description,
      ...(canonicalPath ? { url: canonicalPath } : {}),
      images: [ogImageMeta],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultSeo.ogImage],
    },
  };
}
