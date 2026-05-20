export type ServiceOffering = {
  name: string;
  price: string;
  description?: string;
};

export const serviceOfferings: ServiceOffering[] = [
  {
    name: "Social Media Posts",
    price: "₹300–400 per post",
    description: "Platform-ready creatives with travel-first layouts.",
  },
  {
    name: "Banners & Flyers",
    price: "₹350+",
    description: "Print and digital-ready artwork for campaigns and collabs.",
  },
  {
    name: "Logo Design",
    price: "₹6,000–8,000",
    description: "Strategic mark exploration with usage guidelines.",
  },
  {
    name: "Logo + Flyer Combo",
    price: "₹6,000",
    description: "Launch-ready identity plus a hero flyer for your offer.",
  },
  {
    name: "Monthly Retainer",
    price: "₹16,000/month",
    description:
      "30 posts across platforms, content calendar + strategy, reel voiceover scripts included.",
  },
  {
    name: "JSX / Adobe Automation",
    price: "Custom pricing",
    description: "Custom Illustrator JSX and workflow automation for scale.",
  },
];

export const contactServiceOptions = [
  { value: "", label: "Select a service" },
  { value: "social-media", label: "Social Media Posts" },
  { value: "banners-flyers", label: "Banners & Flyers" },
  { value: "logo", label: "Logo Design" },
  { value: "logo-flyer", label: "Logo + Flyer Combo" },
  { value: "retainer", label: "Monthly Retainer" },
  { value: "automation", label: "JSX / Adobe Automation" },
  { value: "other", label: "Other / Not sure" },
] as const;
