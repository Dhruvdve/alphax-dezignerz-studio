export const siteConfig = {
  name: "AlphaX Dezignerz Studio",
  tagline: "Turn Your Travel Reels into Booking Machines",
  description:
    "Premium social media design, branding, and reels for Indian travel agencies. Trusted by 15+ travel brands across India.",
  url: "https://www.alphaxdezignerzstudio.com",
  owner: "Dhruvdev Patel",
  ownerTitle: "Founder & Creative Director",
  location: "Ahmedabad, Gujarat, India",
  email: "sales@alphaxdezignerzstudio.com",
  phoneDisplay: "+91 7383552512",
  phoneTel: "+917383552512",
  whatsappUrl: "https://wa.me/917383552512",
  instagramUrl: "https://instagram.com/alphax_travel_dezignerz",
  linkedinUrl: "https://www.linkedin.com/company/105700482",
  behanceUrl: "https://www.behance.net/dhruvdevpatel1",
  address: {
    line1: "Nirman House, 107, Ashram Rd, Navrangpura",
    city: "Ahmedabad",
    postalCode: "380009",
    country: "India",
  },
  mapEmbedQuery:
    "Nirman+House,+107,+Ashram+Rd,+Navrangpura,+Ahmedabad,+380009",
  /** Header monogram — save your file as `public/images/alphax-logo.svg` */
  brandLogoSrc: "/images/alphax-logo.svg",
  /** Browser tab — optional: `public/favicon.ico` */
} as const;

export const marqueeClients = [
  {
    name: "Yatri Holidays",
    initials: "YH",
    logoSrc: "/clients/yatri-holidays.png",
    logoFallback: "/portfolio/images/sm-post-1.jpg",
  },
  {
    name: "Tripsdoc",
    initials: "TR",
    logoSrc: "/clients/tripsdoc.png",
    logoFallback: "/portfolio/images/logo-1.jpg",
  },
  {
    name: "Predestinations DMC",
    initials: "PD",
    logoSrc: "/clients/predestinations.png",
    logoFallback: "/portfolio/images/logo-3.jpg",
  },
  {
    name: "Holiday Enroute",
    initials: "HE",
    logoSrc: "/clients/holiday-enroute.png",
    logoFallback: "/portfolio/images/logo-2.jpg",
  },
  {
    name: "Flying Passport Tours",
    initials: "FP",
    logoSrc: "/clients/flying-passport.png",
    logoFallback: "/portfolio/images/sm-post-2.jpg",
  },
  {
    name: "Book and Explore",
    initials: "BE",
    logoSrc: "/clients/book-and-explore.png",
    logoFallback: "/portfolio/images/logo-4.jpg",
  },
] as const;

export const stats = [
  { label: "Clients Served", value: "10+" },
  { label: "Posts Delivered", value: "500+" },
  { label: "Google Rating", value: "4.9★" },
  { label: "Years Experience", value: "2+" },
] as const;

/** Animated counters on the homepage (keep labels aligned with `stats`). */
export const statsForHome = [
  { label: "Clients Served", kind: "count" as const, end: 10, suffix: "+" },
  { label: "Posts Delivered", kind: "count" as const, end: 500, suffix: "+" },
  { label: "Google Rating", kind: "text" as const, value: "4.9★" },
  { label: "Years Experience", kind: "count" as const, end: 2, suffix: "+" },
] as const;

export const homeServiceOverview = [
  {
    title: "Social Media Design",
    description:
      "Scroll-stopping posts tailored for travel brands — itineraries, offers, and reels covers.",
    href: "/services",
  },
  {
    title: "Logo & Branding",
    description:
      "Distinctive marks and visual systems that feel premium on every touchpoint.",
    href: "/services",
  },
  {
    title: "Content Strategy",
    description:
      "Calendars, hooks, and campaign rhythm so your feed always has momentum.",
    href: "/services",
  },
  {
    title: "Reel Production",
    description:
      "Motion-first assets and scripts built for discovery and bookings.",
    href: "/services",
  },
] as const;
