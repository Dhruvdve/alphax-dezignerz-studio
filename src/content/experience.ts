import { siteVideos } from "@/content/media";

export const heroPills = [
  "Reels-first itineraries",
  "Weekly content rhythm",
  "Scripts that sound like you",
  "Ahmedabad · India-wide",
] as const;

export const resultsMetrics = [
  {
    stat: "0 → 500 followers",
    body: "Grew a Ladakh bike trip brand's Instagram from scratch in 60 days",
  },
  {
    stat: "30 posts/month",
    body: "Consistent monthly content delivered for Predestinations DMC",
  },
  {
    stat: "15+ destinations",
    body: "Created reel content for honeymoon brands across Bali, Kashmir, and Maldives",
  },
] as const;

export const founderSection = {
  headline: "Meet the founder.",
  imageSrc: "/images/dhruvdev.jpg",
  imageAlt: "Dhruvdev Patel, Founder of AlphaX Dezignerz Studio",
  body: "Hi, I'm Dhruvdev Patel — founder of AlphaX Dezignerz. I started this studio after seeing how badly Indian travel agencies were being served by generic design freelancers. Today we work with 15+ travel brands across India, from Ladakh bike trip companies to international DMCs. Every system we build is travel-first, automation-powered, and built to scale with your bookings.",
  behanceLabel: "Connect on Behance →",
  proofPoints: [
    "2+ years building travel-only social systems for Indian agencies",
    "Trained 50+ travel agencies in social media content systems",
    "Built custom Adobe automation workflows used by 5+ retainer brands",
    "15+ active travel clients — DMCs, tour operators, and adventure brands",
  ],
} as const;

export const onboardingProcess = {
  eyebrow: "How we work",
  headline: "From discovery call to weekly content rhythm",
  subheadline:
    "A clear timeline so you know exactly what happens after you reach out — no guesswork.",
  steps: [
    {
      phase: "Day 1",
      title: "Discovery call on WhatsApp",
      body: "15 minutes to understand your routes, audience, offers, and current feed. We align on goals and pick the right plan.",
    },
    {
      phase: "Day 2–3",
      title: "Brand audit + content strategy",
      body: "We review your existing posts, competitors, and booking flow — then map a 30-day content calendar tailored to your niche.",
    },
    {
      phase: "Week 1",
      title: "First batch delivered for approval",
      body: "Sample posts, a reel direction, or brand direction deck — you approve before we scale production.",
    },
    {
      phase: "Ongoing",
      title: "Weekly rhythm + monthly reviews",
      body: "Content delivered in weekly batches, posting deadlines met, and a monthly check-in to double down on what converts.",
    },
  ],
} as const;

export const whyAlphaXComparison = {
  eyebrow: "Why AlphaX",
  headline: "Why travel brands choose AlphaX over alternatives",
  subheadline:
    "Generic freelancers and big agencies weren’t built for seat-selling, seasonal demand, or DMC workflows.",
  columns: [
    "AlphaX Studio",
    "Generic Freelancer",
    "In-house Designer",
    "Traditional Agency",
  ] as const,
  rows: [
    {
      label: "Travel expertise",
      values: ["Built only for travel", "Varies by freelancer", "You train them", "Often generalist"],
    },
    {
      label: "Turnaround",
      values: ["24h posts · weekly batches", "Unpredictable", "Depends on workload", "Slower approvals"],
    },
    {
      label: "Pricing",
      values: ["Clear retainers from ₹22k/mo", "Per-piece surprises", "Salary + tools", "High retainers"],
    },
    {
      label: "Consistency",
      values: ["Calendar + deadlines", "Ad-hoc", "One person bottleneck", "Account manager layers"],
    },
    {
      label: "Tools & systems",
      values: ["Adobe automation + templates", "Basic exports", "Varies", "Standard agency stack"],
    },
  ],
} as const;

export const retainerComparison = {
  columns: ["The Explorer", "The Voyager", "The Globetrotter"] as const,
  popularIndex: 1,
  rows: [
    { label: "Monthly Posts", values: ["12", "10", "12"] },
    { label: "Carousels", values: ["4", "5", "8"] },
    { label: "Reels", values: ["6", "8", "12"] },
    { label: "UGC Ad Creatives", values: ["1", "3", "6"] },
    { label: "Content Calendar", values: ["✓", "✓", "✓"] },
    { label: "Strategy & Scripting", values: ["—", "✓", "✓"] },
    { label: "Priority Support", values: ["—", "—", "✓"] },
    { label: "Discovery Call", values: ["30 min", "45 min", "60 min"] },
  ],
} as const;

export const homeWorkShowcase = [
  { src: "/portfolio/work-1.jpg", title: "Ladakh Reel Series", category: "Reels & Motion" },
  { src: "/portfolio/work-2.jpg", title: "Kashmir Carousel", category: "Carousels" },
  { src: "/portfolio/work-3.jpg", title: "DMC Social Post", category: "Social Media" },
  { src: "/portfolio/work-4.jpg", title: "Tour Operator Brand", category: "Logo & Branding" },
  { src: "/portfolio/work-5.jpg", title: "Honeymoon Itinerary", category: "Print & Marketing" },
  { src: "/portfolio/work-6.jpg", title: "Adventure Trip Reel", category: "Reels & Motion" },
] as const;

export const bentoFeatures = [
  {
    title: "Launch-ready systems",
    description:
      "Brand kits, post templates, and naming conventions so your travel team ships fast without losing polish.",
    icon: "layers" as const,
  },
  {
    title: "Conversion-aware art direction",
    description:
      "Hooks, offers, and proof blocks tuned for Indian travel purchase behavior.",
    icon: "target" as const,
  },
  {
    title: "Motion that fits the feed",
    description:
      "Covers, transitions, and safe zones built for Reels & Shorts discovery.",
    icon: "clapperboard" as const,
  },
  {
    title: "Scripts & voice direction",
    description:
      "Hooks, VO notes, and on-screen copy so your reels sound confident — not generic travel filler.",
    icon: "mic" as const,
  },
] as const;

export const processSteps = [
  {
    title: "Discovery & positioning",
    body: "Platforms, audiences, offers, and what “premium” should feel like for your travel niche.",
  },
  {
    title: "Direction + sample sprint",
    body: "A tight batch of posts or a hero flyer so you can feel the direction before committing.",
  },
  {
    title: "Production & iteration",
    body: "Calendar execution, revisions, and packaging assets for every channel size.",
  },
  {
    title: "Optimize & scale",
    body: "What worked gets templated; what didn’t gets redesigned — with reporting-friendly clarity.",
  },
] as const;

export const faqs = [
  {
    q: "Do you only work with travel agencies?",
    a: "Yes — the studio focuses exclusively on travel so the craft stays sharp. We understand itineraries, seat selling, seasonal demand, and the psychology of how travelers book. We don't take on non-travel work.",
  },
  {
    q: "What do you need to start?",
    a: "Just three things — your logo, brand colors (if you have them), and your target audience. We handle the rest. First project starts with a 15-minute discovery call on WhatsApp.",
  },
  {
    q: "How fast is turnaround?",
    a: "Single posts: 24 hours. Logos: 5-7 days. Monthly retainer content: delivered weekly in batches. We never miss a posting deadline once you're in the system.",
  },
  {
    q: "Can you match our tone of voice?",
    a: "Absolutely. We study your existing posts, captions, and brand voice in week one. By week two, our content reads like it was written by your in-house team — just better.",
  },
] as const;

export const showcaseReel = {
  eyebrow: "Motion direction",
  title: "A reel framework built for travel discovery",
  description:
    "Cover templates, beat structure, and CTA placement designed to turn views into inquiries — not just likes.",
  videoSrc: siteVideos.showreel,
} as const;
