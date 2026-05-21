import type { MetadataRoute } from "next";
import { logoCaseStudyIds } from "@/content/logo-case-studies";
import { siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const paths = [
    "",
    "/services",
    "/portfolio",
    "/about",
    "/contact",
    ...logoCaseStudyIds.map((id) => `/portfolio/logo/${id}`),
  ];

  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
