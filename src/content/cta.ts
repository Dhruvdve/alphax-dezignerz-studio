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

/**
 * Set `NEXT_PUBLIC_CALENDLY_URL` in Vercel to your Calendly or Google Calendar booking link.
 * Example: https://calendly.com/your-handle/15min
 */
export const discoveryBookingCta = {
  label: "Book a 15-min Discovery Call →",
  href:
    process.env.NEXT_PUBLIC_CALENDLY_URL?.trim() ||
    "https://calendly.com/alphax-dezignerz/15min-discovery",
} as const;

export const scarcityBanner = {
  text: "Only 2 retainer slots open for June 2026 — book a discovery call today →",
  href: primaryCta.href,
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
