import { siteConfig } from "@/content/site";

export function whatsappHref(message: string): string {
  return `${siteConfig.whatsappUrl}?text=${encodeURIComponent(message)}`;
}
