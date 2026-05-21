export type ServiceOffering = {
  name: string;
  price: string;
  priceNote?: string;
  description?: string;
};

export type RetainerFeature = {
  title: string;
  detail?: string;
};

export type RetainerTier = {
  id: "explorer" | "voyager" | "globetrotter";
  name: string;
  price: string;
  recommended?: boolean;
  badge?: string;
  features: RetainerFeature[];
  bestFor: string;
  whatsappPrefill: string;
};

export type BrandIdentityTier = {
  id: "essential" | "professional" | "master";
  name: string;
  price: string;
  tagline: string;
  recommended?: boolean;
  badge?: string;
  features: string[];
  whatsappPrefill: string;
};

export const retainerTiers: RetainerTier[] = [
  {
    id: "explorer",
    name: "The Explorer",
    price: "₹22,000 / month",
    features: [
      { title: "Monthly Content Calendar" },
      { title: "1 UGC Ad Creative" },
      { title: "8 Single Posts + 4 Carousels" },
      { title: "6 High-Retention Reels" },
    ],
    bestFor: "Best for solo agents.",
    whatsappPrefill:
      "Hi AlphaX — I'm interested in The Explorer retainer plan (₹22,000/mo).",
  },
  {
    id: "voyager",
    name: "The Voyager",
    price: "₹35,000 / month",
    recommended: true,
    badge: "Most Popular",
    features: [
      { title: "Monthly Content Calendar" },
      { title: "3 UGC Ad Creatives" },
      { title: "5 Single Posts + 5 Carousels" },
      { title: "8 High-Retention Reels" },
      { title: "Strategy & Scripting Included" },
    ],
    bestFor: "Best for scaling agencies.",
    whatsappPrefill:
      "Hi AlphaX — I'm interested in The Voyager retainer plan (₹35,000/mo).",
  },
  {
    id: "globetrotter",
    name: "The Globetrotter",
    price: "₹49,000 / month",
    features: [
      { title: "Full Monthly Strategy" },
      { title: "6 UGC Ad Creatives" },
      { title: "4 Single Posts + 8 Carousels" },
      { title: "12 High-Retention Reels" },
      { title: "Priority Support" },
    ],
    bestFor: "Best for market leaders.",
    whatsappPrefill:
      "Hi AlphaX — I'm interested in The Globetrotter retainer plan (₹49,000/mo).",
  },
];

export const brandIdentityTiers: BrandIdentityTier[] = [
  {
    id: "essential",
    name: "The Essential Identity",
    price: "₹10,000",
    tagline: "Perfect for new travel agencies launching their brand.",
    features: [
      "2–3 Professional Logo Concepts",
      "Logo Board (Usage Overview)",
      "3D Premium Mockups",
      "High-Res Source Files (AI, PNG, SVG)",
    ],
    whatsappPrefill:
      "Hi AlphaX — I'm interested in The Essential Identity package (₹10,000).",
  },
  {
    id: "professional",
    name: "The Professional Suite",
    price: "₹20,000",
    tagline: "Best for growing tour operators ready to scale.",
    recommended: true,
    badge: "Recommended",
    features: [
      "Everything in Essential +",
      "Mini Brand Guidelines (Clear Space, Typography, Do's & Don'ts)",
      "Color Palette Strategy (HEX/RGB)",
      "Social Media Profile & Banner Kit",
    ],
    whatsappPrefill:
      "Hi AlphaX — I'm interested in The Professional Suite package (₹20,000).",
  },
  {
    id: "master",
    name: "The Master Brand",
    price: "₹35,000",
    tagline: "Built for DMCs and large agencies leading their market.",
    features: [
      "Everything in Professional +",
      "Full Brand Guidelines (Comprehensive Manual)",
      "Stationery Suite (Letterhead, Business Card, Envelope)",
      "Custom Graphic Element & Pattern Library",
    ],
    whatsappPrefill:
      "Hi AlphaX — I'm interested in The Master Brand package (₹35,000).",
  },
];

export const pricingTrustNote =
  "No long-term contracts. Pause or cancel anytime.";

export const retainerValueNotes: { title: string; body: string }[] = [
  {
    title: "Scripting on every reel",
    body: "Hooks, structure, and on-screen prompts — so your team ships faster.",
  },
  {
    title: "Carousels built to convert",
    body: "Itinerary and destination guides designed for Saves — then inquiries.",
  },
  {
    title: "UGC ads included",
    body: "We package your footage into ad-ready creatives. Fresh shoots scoped separately.",
  },
];

export const discoveryCallCta = {
  line: "Need a custom scope? Message us on WhatsApp.",
  whatsappPrefill:
    "Hi AlphaX — I'd like to discuss a custom project scope.",
} as const;

/** À la carte — smaller add-ons (also on /services#ala-carte) */
export const projectOfferings: ServiceOffering[] = [
  {
    name: "Social Media Post",
    price: "₹300",
    priceNote: "per post",
    description: "Scroll-stopping posts for travel offers and itineraries.",
  },
  {
    name: "Campaign Banner",
    price: "₹350",
    priceNote: "per banner",
    description: "Hero banners for Instagram, WhatsApp status, and paid ads.",
  },
  {
    name: "Reel Script (hooks + structure)",
    price: "₹500",
    priceNote: "per script",
    description: "Beat-by-beat reel script with hooks, on-screen text, and CTA — ready for your editor.",
  },
  {
    name: "Reel (design + edit)",
    price: "₹1,600",
    priceNote: "per reel",
    description: "Full reel production — motion, pacing, and travel-native scripting.",
  },
  {
    name: "Carousel (multi-slide)",
    price: "₹800",
    priceNote: "per carousel",
    description: "Itinerary and destination carousels built for saves and shares.",
  },
  {
    name: "Flyer / print layout",
    price: "₹800",
    priceNote: "per flyer",
    description: "Promo flyers and offer layouts for print and digital.",
  },
  {
    name: "Logo Animation",
    price: "₹6,000",
    priceNote: "per animation",
    description: "Motion logo for reels, intros, and brand films.",
  },
  {
    name: "Website",
    price: "From ₹20,000",
    priceNote: "scoped to your pages",
    description: "Travel-brand websites — scoped to content and launch needs.",
  },
];

export const contactServiceOptions = [
  { value: "", label: "Select a service" },
  { value: "retainer-explorer", label: "Monthly retainer — The Explorer" },
  { value: "retainer-voyager", label: "Monthly retainer — The Voyager (recommended)" },
  { value: "retainer-globetrotter", label: "Monthly retainer — The Globetrotter" },
  { value: "brand-essential", label: "Brand identity — Essential (₹10,000)" },
  { value: "brand-professional", label: "Brand identity — Professional Suite (₹20,000)" },
  { value: "brand-master", label: "Brand identity — Master Brand (₹35,000)" },
  { value: "social-media", label: "Social Media Post" },
  { value: "reel", label: "Reel" },
  { value: "banner", label: "Banner" },
  { value: "flyer", label: "Flyer" },
  { value: "logo-animation", label: "Logo Animation" },
  { value: "website", label: "Website" },
  { value: "other", label: "Other / Not sure" },
] as const;
