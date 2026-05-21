import Link from "next/link";
import { Instagram, Palette, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-navy/10 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="text-sm font-semibold text-navy">AlphaX Dezignerz Studio</p>
          <p className="mt-2 text-sm text-muted">
            {siteConfig.tagline}. Social-first design for travel brands across India.
          </p>
        </div>
        <div className="space-y-2 text-sm text-muted">
          <p className="font-semibold text-navy">Visit</p>
          <p>{siteConfig.address.line1}</p>
          <p>
            {siteConfig.address.city} {siteConfig.address.postalCode}
          </p>
        </div>
        <div className="space-y-3 text-sm">
          <p className="font-semibold text-navy">Connect</p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-2 text-muted transition hover:text-navy"
          >
            <Mail className="h-4 w-4 shrink-0 text-navy" />
            {siteConfig.email}
          </a>
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="flex items-center gap-2 text-muted transition hover:text-navy"
          >
            <Phone className="h-4 w-4 shrink-0 text-navy" />
            {siteConfig.phoneDisplay}
          </a>
          <div className="flex flex-wrap gap-4 pt-1">
            <Link
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted transition hover:text-navy"
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </Link>
            <Link
              href={siteConfig.behanceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted transition hover:text-navy"
            >
              <Palette className="h-4 w-4" />
              Behance
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-navy/5 bg-surfaceMuted">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>
            Founder & Creative Director:{" "}
            <span className="text-navy">{siteConfig.owner}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
