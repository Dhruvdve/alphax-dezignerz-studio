/** Single primary CTA sitewide */
export const primaryCta = {
  label: "Get a Free Sample on WhatsApp →",
  href: "https://wa.me/917383552512?text=Hi%20AlphaX,%20I%27d%20like%20a%20free%20sample%20design",
} as const;

/** Homepage hero only */
export const secondaryCta = {
  label: "View Portfolio →",
  href: "/portfolio",
} as const;

/** Works without Calendly — opens WhatsApp to book a discovery call */
export const discoveryWhatsAppHref =
  "https://wa.me/917383552512?text=Hi%20AlphaX,%20I%27d%20like%20to%20book%20a%2015-minute%20discovery%20call";

const calendlyFromEnv = process.env.NEXT_PUBLIC_CALENDLY_URL?.trim() ?? "";
/** Live event from your Calendly account (Dhruvdev Patel) */
export const defaultCalendlyDiscoveryUrl =
  "https://calendly.com/alphaxdezignerzstudio-sales/30min";

const brokenCalendlyDefaults = [
  "calendly.com/your-handle",
  "calendly.com/alphax-dezignerz/15min-discovery",
];

function resolveDiscoveryHref(): string {
  if (!calendlyFromEnv) return defaultCalendlyDiscoveryUrl;
  const lower = calendlyFromEnv.toLowerCase();
  if (brokenCalendlyDefaults.some((bad) => lower.includes(bad))) {
    return defaultCalendlyDiscoveryUrl;
  }
  return calendlyFromEnv;
}

/**
 * Override with `NEXT_PUBLIC_CALENDLY_URL` in Vercel if you change the event link.
 */
export const discoveryBookingCta = {
  label: "Book a 30-min Discovery Call →",
  href: resolveDiscoveryHref(),
} as const;

export const scarcityBanner = {
  text: "Only 2 retainer slots open for June 2026 — book a discovery call today →",
  href: discoveryBookingCta.href,
} as const;

export const leadMagnet = {
  title: "Free 30-Day Travel Content Calendar Template",
  subtitle:
    "Get the exact content calendar we use for retainer clients — yours free.",
  buttonLabel: "Send me the calendar",
} as const;

export const insightsNewsletter = {
  title: "Travel Marketing Insights",
  subtitle:
    "One practical tip per month for travel agencies — content ideas, reel hooks, and what’s working in India.",
  buttonLabel: "Subscribe",
} as const;
