export const siteConfig = {
  name: "AlphaX Dezignerz Studio",
  tagline: "Design That Drives Bookings",
  description:
    "Premium social media design and branding for Indian travel agencies. Based in Ahmedabad, Gujarat.",
  url: "https://alphaxdezignerzstudio.com",
  owner: "Dhruvdev Patel",
  ownerTitle: "Founder & Creative Director",
  location: "Ahmedabad, Gujarat, India",
  email: "sales@alphaxdezignerzstudio.com",
  phoneDisplay: "+91 7383552512",
  phoneTel: "+917383552512",
  whatsappUrl: "https://wa.me/917383552512",
  instagramUrl: "https://instagram.com/alphax_travel_dezignerz",
  behanceUrl: "https://www.behance.net/dhruvdevpatel1",
  address: {
    line1: "Nirman House, 107, Ashram Rd, Navrangpura",
    city: "Ahmedabad",
    postalCode: "380009",
    country: "India",
  },
  mapEmbedQuery:
    "Nirman+House,+107,+Ashram+Rd,+Navrangpura,+Ahmedabad,+380009",
} as const;

export const marqueeClients = [
  "Tripsdoc",
  "Predestinations DMC",
  "Holiday Enroute",
  "Flying Passport Tours",
  "Book and Explore",
] as const;

export const stats = [
  { label: "Clients Served", value: "10+" },
  { label: "Posts Delivered", value: "500+" },
  { label: "Google Rating", value: "4.9★" },
  { label: "Years Experience", value: "2+" },
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
