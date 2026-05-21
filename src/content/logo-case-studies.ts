/**
 * Logo case studies — edit story text here.
 * Images: `public/portfolio/logos/{id}/` — `.jpg` or `.png` per file (see PORTFOLIO-FILES.md)
 */

export type LogoRejectConcept = {
  id: string;
  title: string;
  /** What this direction tried to communicate */
  intent: string;
  /** Why it did not move forward */
  whyRejected: string;
  imageSrc: string;
};

export type LogoMeaningPoint = {
  title: string;
  body: string;
};

export type LogoCaseStudy = {
  id: string;
  clientName: string;
  industry: string;
  headline: string;
  intro: string;
  challenge: string;
  rejects: LogoRejectConcept[];
  final: {
    title: string;
    imageSrc: string;
    summary: string;
    meaning: LogoMeaningPoint[];
  };
  /** Brand in use — same as grid hover image path */
  appliedImageSrc: string;
  outcome: string;
};

export function logoStudyImage(logoId: string, file: string): string {
  return `/portfolio/logos/${logoId}/${file}.jpg`;
}

function buildStudy(
  id: string,
  clientName: string,
  data: Omit<LogoCaseStudy, "id" | "clientName" | "final" | "rejects" | "appliedImageSrc"> & {
    rejects: Omit<LogoRejectConcept, "imageSrc" | "id">[];
    final: Omit<LogoCaseStudy["final"], "imageSrc">;
  },
): LogoCaseStudy {
  return {
    id,
    clientName,
    ...data,
    rejects: data.rejects.map((r, i) => ({
      ...r,
      id: `${id}-reject-${i + 1}`,
      imageSrc: logoStudyImage(id, `reject-${i + 1}`),
    })),
    final: {
      ...data.final,
      imageSrc: logoStudyImage(id, "final"),
    },
    appliedImageSrc: logoStudyImage(id, "applied"),
  };
}

export const logoCaseStudies: LogoCaseStudy[] = [
  buildStudy("logo-1", "Tripsdoc", {
    industry: "Travel agency · India",
    headline: "From cluttered marks to a passport-ready identity",
    intro:
      "Tripsdoc needed a mark that reads instantly on WhatsApp avatars, PDF itineraries, and Instagram — without looking like every other globe-and-plane logo in the market.",
    challenge:
      "The brand had to feel premium enough for high-ticket packages, yet friendly for first-time flyers. We explored three directions before landing on a single, ownable symbol.",
    rejects: [
      {
        title: "Concept A — Literal globe",
        intent: "Communicate “world travel” with a classic earth icon and serif wordmark.",
        whyRejected:
          "Felt generic next to competitors; the globe fought the wordmark at small sizes and did not say “curated trips” — only “travel.”",
      },
      {
        title: "Concept B — Script + stamp",
        intent: "Premium, handwritten energy for boutique itineraries.",
        whyRejected:
          "Script logos are hard to read on mobile and on dark photo backgrounds; the stamp detail disappeared below 48px.",
      },
      {
        title: "Concept C — Plane silhouette",
        intent: "Direct link to flights and movement.",
        whyRejected:
          "Client felt it skewed “budget airline” rather than “trusted trip designer.”",
      },
    ],
    final: {
      title: "Chosen mark — Path & horizon",
      summary:
        "A simplified path line meets a soft horizon — suggesting journey, guidance, and a clear destination without clipart symbols.",
      meaning: [
        {
          title: "Symbol",
          body: "The curved path implies a planned route (DMC expertise), not random wandering. The horizon line adds stability and calm — important for nervous first-time travelers.",
        },
        {
          title: "Typography",
          body: "Geometric sans for “Tripsdoc” keeps legibility on reels and WhatsApp; slightly rounded terminals feel approachable, not corporate.",
        },
        {
          title: "Color",
          body: "Deep navy anchors trust; accent pink is reserved for CTAs on the site and social buttons — so the logo stays clean in one color on print.",
        },
      ],
    },
    outcome:
      "The approved system ships as primary lockup, stacked lockup, and monochrome versions for partners and print — all tested at favicon and story-sticker sizes.",
  }),
  buildStudy("logo-2", "Holiday Enroute", {
    industry: "Tour operator · India",
    headline: "Energy without looking like a festival poster",
    intro:
      "Holiday Enroute sells high-energy group departures and seasonal campaigns. The identity had to feel exciting but still credible when printed on invoices and hotel vouchers.",
    challenge:
      "Balance vibrancy with restraint so the logo works on both neon social creatives and formal PDF proposals.",
    rejects: [
      {
        title: "Concept A — Sunburst badge",
        intent: "Instant “holiday mood” with radial rays.",
        whyRejected: "Too loud for B2B partner decks; rays broke when embroidered or embossed.",
      },
      {
        title: "Concept B — All-caps block",
        intent: "Bold, poster-like presence for youth trips.",
        whyRejected: "Felt shouty in WhatsApp chats; poor readability in long names on mobile.",
      },
    ],
    final: {
      title: "Chosen mark — Forward arrow loop",
      summary:
        "A loop suggests return customers and repeat seasons; the forward cut implies momentum without literal sun or plane icons.",
      meaning: [
        {
          title: "Symbol",
          body: "Circular flow reads as “full trip handled” — transport, stay, and experiences in one envelope.",
        },
        {
          title: "Typography",
          body: "Title case wordmark with slightly wide tracking — premium coach-tour feel, not discount flyer.",
        },
        {
          title: "Color",
          body: "Warm accent only in campaign graphics; logo stays navy-first for trust on contracts.",
        },
      ],
    },
    outcome:
      "Campaign teams use the loop icon as a sticker on UGC reels while the full lockup leads website and proposals.",
  }),
  buildStudy("logo-3", "Flying Passport Tours", {
    industry: "Outbound tours · India",
    headline: "Passport trust without copying government seals",
    intro:
      "The name invites passport metaphors — but the mark had to avoid looking official or governmental.",
    challenge:
      "Create instant recognition for visa/passport services while staying clearly a private travel brand.",
    rejects: [
      {
        title: "Concept A — Stamp seal",
        intent: "Authority and “approved” psychology.",
        whyRejected: "Users confused it with government visa portals in usability checks.",
      },
      {
        title: "Concept B — Open book + wings",
        intent: "Education + flight.",
        whyRejected: "Busy at small sizes; wings dated the brand within months.",
      },
      {
        title: "Concept C — Monogram only",
        intent: "Luxury shorthand for FPT.",
        whyRejected: "No memorability for new audiences — initials alone did not travel on social.",
      },
    ],
    final: {
      title: "Chosen mark — Soft passport corner",
      summary:
        "Rounded corner + subtle page curve evokes a passport without seals, eagles, or flags.",
      meaning: [
        {
          title: "Symbol",
          body: "Corner fold is ownable and scales to app icons; negative space suggests forward motion.",
        },
        {
          title: "Typography",
          body: "Stacked two-line lockup mirrors passport label fields — familiar without copying official type.",
        },
        {
          title: "Color",
          body: "Navy + white for documents; gold reserved for premium package tier badges only.",
        },
      ],
    },
    outcome:
      "Visa checklist PDFs and Instagram highlights now share the same corner icon for instant brand recall.",
  }),
  buildStudy("logo-4", "Predestinations DMC", {
    industry: "DMC · B2B partners",
    headline: "B2B gravitas for destination management",
    intro:
      "Predestinations sells to agencies, not end tourists. The mark must signal reliability, routing expertise, and white-label friendliness.",
    challenge:
      "Avoid consumer-playful tropes; earn trust with operators who place large room nights and MICE blocks.",
    rejects: [
      {
        title: "Concept A — Pin map cluster",
        intent: "Coverage across many cities.",
        whyRejected: "Looked like a consumer map app; cluttered in co-branding lockups.",
      },
      {
        title: "Concept B — Palm + mountain combo",
        intent: "Leisure + adventure range.",
        whyRejected: "Region-locked imagery — failed for urban and MICE-only products.",
      },
    ],
    final: {
      title: "Chosen mark — Grid node",
      summary:
        "Abstract grid node suggests network, routing, and partner connections — no literal landmarks.",
      meaning: [
        {
          title: "Symbol",
          body: "Central node with three spokes reads as hub-and-spoke operations — how a DMC actually works.",
        },
        {
          title: "Typography",
          body: "Neutral grotesk for long name; optional short “PD” icon for favicons and Slack avatars.",
        },
        {
          title: "Color",
          body: "Single-color first for white-label decks; partners can pair with their own palette.",
        },
      ],
    },
    outcome:
      "Partner welcome kits use the grid icon on lanyards and deck covers; consumer-facing ads use full wordmark.",
  }),
  buildStudy("logo-5", "Book and Explore", {
    industry: "OTA-style bookings · India",
    headline: "Book + explore in one readable gesture",
    intro:
      "A digital-first brand where the logo must work beside payment UI, search bars, and app headers.",
    challenge:
      "Combine “booking” (action) and “explore” (discovery) without two competing icons.",
    rejects: [
      {
        title: "Concept A — Magnifying glass + ticket",
        intent: "Search and book.",
        whyRejected: "Two metaphors fought each other; unclear at 32px.",
      },
      {
        title: "Concept B — Compass rose",
        intent: "Exploration.",
        whyRejected: "Overused in travel; failed trademark distinctiveness checks internally.",
      },
    ],
    final: {
      title: "Chosen mark — Page flip / door",
      summary:
        "One shape reads as a page turning or a door opening — book the trip, then step into the experience.",
      meaning: [
        {
          title: "Symbol",
          body: "Dual read (page/door) keeps one icon for app and web favicon — simpler dev handoff.",
        },
        {
          title: "Typography",
          body: "Lowercase “book and explore” feels product-led; sentence case tested better with millennials.",
        },
        {
          title: "Color",
          body: "Pink CTA buttons on site; logo navy keeps checkout screens calm and trustworthy.",
        },
      ],
    },
    outcome:
      "App icon uses the flip mark only; marketing site uses full lockup with generous clear space.",
  }),
  buildStudy("logo-6", "Tripsdoc Partner Network", {
    industry: "Affiliate / partner program",
    headline: "Sub-brand that still belongs to the family",
    intro:
      "A secondary mark for agents and affiliates — related to Tripsdoc but not identical.",
    challenge:
      "Show affiliation without diluting the parent brand or confusing end customers.",
    rejects: [
      {
        title: "Concept A — Duplicate parent logo",
        intent: "Maximum parent recognition.",
        whyRejected: "Partners could not differentiate their own social pages.",
      },
      {
        title: "Concept B — Completely new symbol",
        intent: "Partner independence.",
        whyRejected: "Felt disconnected; churned partners did not associate with Tripsdoc trust.",
      },
    ],
    final: {
      title: "Chosen mark — Linked rings",
      summary:
        "Two interlocked rings: parent ecosystem + partner node — shared trust, separate presence.",
      meaning: [
        {
          title: "Symbol",
          body: "Rings imply partnership and revenue share without legal-partnership clichés (handshakes).",
        },
        {
          title: "Typography",
          body: "Smaller “Partner Network” line under parent word style — clear hierarchy in one lockup.",
        },
        {
          title: "Color",
          body: "Navy shared with parent; partners may add local accent in co-marketing only.",
        },
      ],
    },
    outcome:
      "Affiliate onboarding PDF uses linked rings on cover; parent Tripsdoc mark remains on consumer ads.",
  }),
];

const studyById = new Map(logoCaseStudies.map((s) => [s.id, s]));

export const logoCaseStudyIds = logoCaseStudies.map((s) => s.id);

export function getLogoCaseStudy(id: string): LogoCaseStudy | undefined {
  return studyById.get(id);
}

export function hasLogoCaseStudy(id: string): boolean {
  return studyById.has(id);
}

export function getLogoCaseStudyPath(id: string): string {
  return `/portfolio/logo/${id}`;
}
