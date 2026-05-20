export type PortfolioCategory =
  | "social-media"
  | "logos-branding"
  | "flyers-print"
  | "reels-motion";

export type PortfolioItem = {
  id: string;
  clientName: string;
  projectType: string;
  category: PortfolioCategory;
  /** CSS gradient for placeholder tile */
  gradient: string;
};

export const portfolioCategories: {
  id: PortfolioCategory | "all";
  label: string;
}[] = [
  { id: "all", label: "All" },
  { id: "social-media", label: "Social Media Posts" },
  { id: "logos-branding", label: "Logos & Branding" },
  { id: "flyers-print", label: "Flyers & Print" },
  { id: "reels-motion", label: "Reels & Motion" },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    clientName: "Tripsdoc",
    projectType: "Social carousel",
    category: "social-media",
    gradient: "linear-gradient(135deg, #2E4BDB 0%, #1A1F3C 100%)",
  },
  {
    id: "2",
    clientName: "Holiday Enroute",
    projectType: "Offer post",
    category: "social-media",
    gradient: "linear-gradient(135deg, #1A1F3C 0%, #4a5fd4 100%)",
  },
  {
    id: "3",
    clientName: "Flying Passport Tours",
    projectType: "Itinerary tile",
    category: "social-media",
    gradient: "linear-gradient(135deg, #2E4BDB 0%, #6b7cff 100%)",
  },
  {
    id: "4",
    clientName: "Predestinations DMC",
    projectType: "Brand mark",
    category: "logos-branding",
    gradient: "linear-gradient(135deg, #0f1328 0%, #2E4BDB 100%)",
  },
  {
    id: "5",
    clientName: "Book and Explore",
    projectType: "Logo refresh",
    category: "logos-branding",
    gradient: "linear-gradient(135deg, #1A1F3C 0%, #3d52e6 100%)",
  },
  {
    id: "6",
    clientName: "Tripsdoc",
    projectType: "Event flyer",
    category: "flyers-print",
    gradient: "linear-gradient(135deg, #2a3270 0%, #2E4BDB 100%)",
  },
  {
    id: "7",
    clientName: "Holiday Enroute",
    projectType: "Festival banner",
    category: "flyers-print",
    gradient: "linear-gradient(135deg, #1A1F3C 0%, #5c6cf0 100%)",
  },
  {
    id: "8",
    clientName: "Flying Passport Tours",
    projectType: "Reel cover",
    category: "reels-motion",
    gradient: "linear-gradient(135deg, #2E4BDB 0%, #1e2450 100%)",
  },
  {
    id: "9",
    clientName: "Predestinations DMC",
    projectType: "Motion storyboard",
    category: "reels-motion",
    gradient: "linear-gradient(135deg, #12162e 0%, #2E4BDB 100%)",
  },
  {
    id: "10",
    clientName: "Book and Explore",
    projectType: "Honeymoon series",
    category: "social-media",
    gradient: "linear-gradient(135deg, #3a4bcb 0%, #1A1F3C 100%)",
  },
  {
    id: "11",
    clientName: "Tripsdoc",
    projectType: "Ladakh bike trip pack",
    category: "social-media",
    gradient: "linear-gradient(135deg, #1A1F3C 0%, #2E4BDB 55%, #8ea0ff 100%)",
  },
  {
    id: "12",
    clientName: "Holiday Enroute",
    projectType: "Print brochure cover",
    category: "flyers-print",
    gradient: "linear-gradient(135deg, #24307a 0%, #1A1F3C 100%)",
  },
];

export function getHomePreviewItems(count = 6) {
  return portfolioItems.slice(0, count);
}
