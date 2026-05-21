import { primaryCta, secondaryCta } from "@/content/cta";

/** Site-wide marketing copy — final client-facing text */

export const heroSubline =
  "Premium social media design and branding for Indian travel agencies — built to convert attention into inquiries.";

export const trustBarMetric =
  "Helping 15+ travel brands grow organic reach — creative built to drive inquiries.";

export const heroCtas = {
  primary: {
    label: primaryCta.label,
    href: primaryCta.href,
  },
  secondary: secondaryCta,
} as const;

export const studioSnapshot = {
  rating: "4.9 Google-rated · Trusted by travel teams across India",
  heading: "Your Creative Engine",
  rows: [
    {
      label: "Workflow",
      title: "Content on autopilot",
      detail: "weekly delivery + effortless approvals",
    },
    {
      label: "Channels",
      title: "Instagram Reels-first",
      detail: "optimized for IG, YT Shorts & WhatsApp",
    },
    {
      label: "Deliverables",
      title: "High-impact assets",
      detail: "posts, viral scripts & motion flyers",
    },
  ],
  quoteBefore: "We don't do generic templates — we build a visual language that feels like ",
  quoteEmphasis: "YOUR",
  quoteAfter: " brand — then ship it consistently.",
  attribution: {
    name: "Dhruvdev Patel",
    role: "Founder & Creative Director",
  },
} as const;

export const categoryNavCopy = {
  title: "Browse our work",
  subtitle: "Tap a category — jump straight to real projects.",
  seeAllWork: "Open full portfolio",
  seeAllHref: "/portfolio",
} as const;

export const homePortfolioCopy = {
  eyebrow: "Portfolio",
  headline: "Work that drives results.",
  subheadline:
    "Recent work for travel agencies, tour operators, and DMCs — tap a category for more.",
  cta: "Open full portfolio",
  ctaHref: "/portfolio",
} as const;

export const conversionTrustPoints = [
  {
    title: "Built for travel brands",
    body: "Reels, carousels, and branding tuned for agencies and DMCs — not generic templates.",
  },
  {
    title: "Fast on WhatsApp",
    body: "Share your route, dates, and offer — we reply with next steps and timelines fast.",
  },
  {
    title: "Clear monthly plans",
    body: "Know exactly how many posts, reels, and ads you get — pause anytime.",
  },
] as const;

export const homePricingCopy = {
  retainers: {
    eyebrow: "Monthly retainers",
    headline: "Predictable content. Unstoppable growth.",
    subheadline: "Travel-focused plans with clear deliverables every month.",
  },
  branding: {
    eyebrow: "Brand identity",
    headline: "Brand identity built exclusively for travel.",
    subheadline:
      "Strategic visual identity for travel agencies, tour operators, DMCs, and adventure brands.",
  },
  trustNote: "No long-term contracts. Pause or cancel anytime.",
} as const;

export const finalCta = {
  headline: "Ready to elevate your travel brand?",
  subheadline: "Get a free sample design — see the quality before you commit.",
} as const;

/** Legacy aliases */
export const ctaLeadMagnetLabel = primaryCta.label;
export const ctaLeadMagnetLabelShort = "Free sample";
