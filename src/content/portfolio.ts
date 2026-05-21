import { reelVideoSrc } from "@/content/media";

export type PortfolioCategory =
  | "social-media"
  | "logos-branding"
  | "flyers-print"
  | "reels-motion";

export type SocialMediaKind = "post" | "carousel";

export type PortfolioItem = {
  id: string;
  clientName: string;
  projectType: string;
  category: PortfolioCategory;
  /** Social only — posts (10) vs carousels (8) */
  socialKind?: SocialMediaKind;
  gradient: string;
  imageSrc?: string;
  /** Logos only — shown on hover (e.g. mockup / brand board); default stays on `imageSrc` */
  imageSrcHover?: string;
  /** MP4/WebM in `public/portfolio/videos/` — plays on-site */
  videoSrc?: string;
};

/** Client-facing portfolio page copy */
export const portfolioPageCopy = {
  eyebrow: "Portfolio",
  headline: "Work that drives results.",
  subheadline:
    "From viral motion graphics to professional brand identities. Explore our latest projects.",
  metaDescription:
    "Portfolio of social content, reels, brand identity, and marketing design for travel and lifestyle brands — AlphaX Dezignerz Studio.",
} as const;

/** Benefit-driven portfolio blocks + anchor IDs for quick-link scroll */
export const portfolioCategorySections = {
  reels: {
    anchorId: "reels",
    headline: "High-Retention Reels",
    subtext:
      "Vertical video content designed to capture attention and stop the scroll.",
    homePreview: 2,
    cols: 2 as const,
    ctaLine: "Want reels that bring inquiries?",
    whatsappPrefill:
      "Hi AlphaX — I saw your reels portfolio. I want high-retention reels for my travel brand.",
    portfolioHref: "/portfolio#reels",
  },
  social: {
    anchorId: "social",
    headline: "Strategic Social Content",
    subtext:
      "Single posts and campaign graphics that build a professional brand presence.",
    homePreview: 2,
    cols: 2 as const,
    ctaLine: "Need posts that look premium?",
    whatsappPrefill:
      "Hi AlphaX — I saw your social posts. I need strategic social content for my agency.",
    portfolioHref: "/portfolio#social",
  },
  branding: {
    anchorId: "branding",
    headline: "Premium Brand Identity",
    subtext:
      "Logos and brand systems for travel agencies, tour operators, DMCs, and adventure brands.",
    homePreview: 2,
    cols: 2 as const,
    ctaLine: "Ready for a brand that builds trust?",
    whatsappPrefill:
      "Hi AlphaX — I saw your branding work. I need a logo and brand identity package.",
    portfolioHref: "/portfolio#branding",
  },
  carousels: {
    anchorId: "carousels",
    headline: "Educational Carousels",
    subtext:
      "Slide-based storytelling that drives saves, shares, and high engagement.",
    homePreview: 2,
    cols: 2 as const,
    ctaLine: "Want carousels that earn saves?",
    whatsappPrefill:
      "Hi AlphaX — I saw your carousels. I need booking-heavy carousel content.",
    portfolioHref: "/portfolio#carousels",
  },
} as const;

export const categoryQuickLinks = [
  { anchorId: portfolioCategorySections.reels.anchorId, label: "Reels & Motion", icon: "video" },
  { anchorId: portfolioCategorySections.social.anchorId, label: "Social Media", icon: "grid" },
  {
    anchorId: portfolioCategorySections.branding.anchorId,
    label: "Logo & Branding",
    icon: "pen",
  },
  {
    anchorId: portfolioCategorySections.carousels.anchorId,
    label: "Carousels",
    icon: "pages",
  },
] as const;

export const portfolioCategories: {
  id: PortfolioCategory | "all";
  label: string;
  description?: string;
}[] = [
  { id: "all", label: "All" },
  {
    id: "social-media",
    label: "Social Media",
    description: portfolioCategorySections.social.subtext,
  },
  {
    id: "reels-motion",
    label: "Reels & Motion",
    description: portfolioCategorySections.reels.subtext,
  },
  {
    id: "logos-branding",
    label: "Logos & Branding",
    description: portfolioCategorySections.branding.subtext,
  },
  {
    id: "flyers-print",
    label: "Print & Marketing",
    description: "Professional itineraries, brochures, and banners.",
  },
];

/** Export frames — match how you deliver to clients */
export const portfolioFrameSizes = {
  /** Posts, carousels, flyers */
  feed: {
    label: "1080 × 1440",
    width: 1080,
    height: 1440,
    /** 3:4 — posts, carousels, flyers */
    aspectClass: "aspect-[3/4]",
  },
  /** Reels & Shorts */
  reel: {
    label: "1080 × 1920",
    width: 1080,
    height: 1920,
    /** 9:16 */
    aspectClass: "aspect-[9/16]",
  },
} as const;

export function getPortfolioAspectClass(item: PortfolioItem): string {
  if (item.category === "reels-motion") return portfolioFrameSizes.reel.aspectClass;
  if (
    item.category === "flyers-print" ||
    item.category === "social-media"
  ) {
    return portfolioFrameSizes.feed.aspectClass;
  }
  return "aspect-square";
}

/** Grid layout + client-facing section titles (technical sizes stay in code only) */
export const portfolioLayout = {
  socialPosts: {
    count: 10,
    cols: 5,
    label: portfolioCategorySections.social.headline,
    description: portfolioCategorySections.social.subtext,
  },
  socialCarousels: {
    count: 8,
    cols: 4,
    label: portfolioCategorySections.carousels.headline,
    description: portfolioCategorySections.carousels.subtext,
  },
  logos: {
    count: 6,
    cols: 2,
    label: portfolioCategorySections.branding.headline,
    description: portfolioCategorySections.branding.subtext,
  },
  flyers: {
    count: 10,
    cols: 5,
    label: "Print & Marketing",
    description: "Professional itineraries, brochures, and banners.",
  },
  reels: {
    count: 12,
    cols: 3,
    label: portfolioCategorySections.reels.headline,
    description: portfolioCategorySections.reels.subtext,
  },
} as const;

const clients = [
  "Tripsdoc",
  "Holiday Enroute",
  "Flying Passport Tours",
  "Predestinations DMC",
  "Book and Explore",
  "Yatri Holidays",
] as const;

const gradients = [
  "linear-gradient(135deg, #2a4d6e 0%, #1A3B5D 100%)",
  "linear-gradient(135deg, #1A3B5D 0%, #3d5a7a 100%)",
  "linear-gradient(135deg, #142f4a 0%, #3d5a7a 100%)",
  "linear-gradient(135deg, #142f4a 0%, #2a4d6e 100%)",
  "linear-gradient(135deg, #1A3B5D 0%, #6b7c8f 100%)",
  "linear-gradient(135deg, #1A3B5D 0%, #142f4a 100%)",
] as const;

type FrameKind = "feed" | "reel" | "square";

/** Offline demo art (always works). Used if your JPG is not uploaded yet. */
export function getPortfolioDemoFallback(frame: FrameKind, index: number): string {
  if (frame === "reel") return "/portfolio/placeholder-reel.svg";
  if (frame === "square") return "/portfolio/placeholder-logo.svg";
  const n = (index % 5) + 1;
  return n === 1 ? "/portfolio/placeholder-feed.svg" : `/portfolio/placeholder-feed-${n}.svg`;
}

/** Your file: public/portfolio/images/{id}.jpg — see PORTFOLIO-FILES.md */
function localImageSrc(id: string): string {
  return `/portfolio/images/${id}.jpg`;
}

/** Logo hover: `public/portfolio/images/logo-1-hover.jpg` etc. */
function localLogoHoverSrc(id: string): string {
  return `/portfolio/images/${id}-hover.jpg`;
}

function frameForCategory(
  category: PortfolioCategory,
): FrameKind {
  if (category === "reels-motion") return "reel";
  if (category === "logos-branding") return "square";
  return "feed";
}

function buildItems(
  count: number,
  category: PortfolioCategory,
  projectType: string,
  idPrefix: string,
  opts?: { socialKind?: SocialMediaKind; withVideo?: boolean },
): PortfolioItem[] {
  return Array.from({ length: count }, (_, i) => {
    const n = i + 1;
    const id = `${idPrefix}-${n}`;
    return {
      id,
      clientName: clients[i % clients.length],
      projectType,
      category,
      socialKind: opts?.socialKind,
      gradient: gradients[i % gradients.length],
      imageSrc: localImageSrc(id),
      imageSrcHover:
        category === "logos-branding" ? localLogoHoverSrc(id) : undefined,
      videoSrc: opts?.withVideo ? reelVideoSrc(id) : undefined,
    };
  });
}

export const portfolioItems: PortfolioItem[] = [
  ...buildItems(10, "social-media", "Social post", "sm-post", { socialKind: "post" }),
  ...buildItems(8, "social-media", "Carousel", "sm-carousel", { socialKind: "carousel" }),
  ...buildItems(6, "logos-branding", "Logo & brand board", "logo"),
  ...buildItems(10, "flyers-print", "Flyer / print", "flyer"),
  ...buildItems(12, "reels-motion", "Reel", "reel", { withVideo: true }),
];

export function getItemsByCategory(category: PortfolioCategory) {
  return portfolioItems.filter((p) => p.category === category);
}

export function getSocialPosts() {
  return portfolioItems.filter(
    (p) => p.category === "social-media" && p.socialKind === "post",
  );
}

export function getSocialCarousels() {
  return portfolioItems.filter(
    (p) => p.category === "social-media" && p.socialKind === "carousel",
  );
}

export function getHomePreviewItems(count = 6) {
  return portfolioItems.slice(0, count);
}

/** Homepage proof section — grouped by conversion story */
export function getCategoryTotalCount(
  key: keyof typeof portfolioCategorySections,
): number {
  if (key === "reels") return portfolioItems.filter((p) => p.category === "reels-motion").length;
  if (key === "social") return getSocialPosts().length;
  if (key === "carousels") return getSocialCarousels().length;
  return getItemsByCategory("logos-branding").length;
}

/** 3–4 thumbnails for homepage category cards */
export function getCategoryPreviewItems(
  key: keyof typeof portfolioCategorySections,
  limit = 4,
): PortfolioItem[] {
  if (key === "reels") return getItemsByCategory("reels-motion").slice(0, limit);
  if (key === "social") return getSocialPosts().slice(0, limit);
  if (key === "carousels") return getSocialCarousels().slice(0, limit);
  return getItemsByCategory("logos-branding").slice(0, limit);
}

export function getHomeProofGroups() {
  return [
    {
      id: "reels" as const,
      items: portfolioItems.filter((p) => p.category === "reels-motion").slice(0, 3),
    },
    {
      id: "carousels" as const,
      items: portfolioItems.filter(
        (p) => p.category === "social-media" && p.socialKind === "carousel",
      ).slice(0, 3),
    },
    {
      id: "branding" as const,
      items: portfolioItems.filter((p) => p.category === "logos-branding").slice(0, 2),
    },
  ];
}
