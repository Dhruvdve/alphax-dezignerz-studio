"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  getCategoryTotalCount,
  getCategoryPreviewItems,
  getItemsByCategory,
  getSocialCarousels,
  getSocialPosts,
  portfolioCategorySections,
  categoryQuickLinks,
  type PortfolioItem,
} from "@/content/portfolio";
import { CategoryPreviewThumbs } from "@/components/CategoryPreviewThumbs";
import { homePortfolioCopy } from "@/content/conversion";
import { PortfolioTile } from "@/components/PortfolioTile";
import { PortfolioMasonryPreview } from "@/components/PortfolioMasonryPreview";
import { ReelPreviewTiles } from "@/components/ReelPreviewTiles";
import { CategoryConversionCta } from "@/components/home/CategoryConversionCta";
import { FadeIn } from "@/components/FadeIn";
import { StaggerGroup, StaggerItem } from "@/components/Stagger";
import { useCategoryHash } from "@/lib/useCategoryHash";

const sectionKeys = ["reels", "social", "carousels", "branding"] as const;

type SectionKey = (typeof sectionKeys)[number];

function itemsForKey(key: SectionKey): PortfolioItem[] {
  const { reels, social, branding, carousels } = portfolioCategorySections;
  if (key === "reels") {
    return getItemsByCategory("reels-motion").slice(0, reels.homePreview);
  }
  if (key === "social") {
    return getSocialPosts().slice(0, social.homePreview);
  }
  if (key === "carousels") {
    return getSocialCarousels().slice(0, carousels.homePreview);
  }
  return getItemsByCategory("logos-branding").slice(0, branding.homePreview);
}

function keyFromAnchor(anchor: string): SectionKey | null {
  const entry = sectionKeys.find(
    (k) => portfolioCategorySections[k].anchorId === anchor,
  );
  return entry ?? null;
}

function CategoryTeaserGrid({
  onSelect,
}: {
  onSelect: (anchorId: string) => void;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {categoryQuickLinks.map((link) => {
        const key = keyFromAnchor(link.anchorId);
        if (!key) return null;
        const section = portfolioCategorySections[key];
        const total = getCategoryTotalCount(key);
        const thumbs = getCategoryPreviewItems(key, 4);

        return (
          <button
            key={link.anchorId}
            type="button"
            onClick={() => onSelect(link.anchorId)}
            className="group flex flex-col rounded-2xl border border-navy/10 bg-white p-5 text-left shadow-soft transition hover:border-navy/25 hover:shadow-card sm:p-6"
          >
            <h3 className="text-lg font-bold text-navy">{link.label}</h3>
            <CategoryPreviewThumbs items={thumbs} />
            <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/75">
              {section.subtext}
            </p>
            <p className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy group-hover:gap-2">
              View {total} projects
              <ArrowRight className="h-4 w-4" />
            </p>
          </button>
        );
      })}
    </div>
  );
}

function ActiveCategoryPreview({ activeKey }: { activeKey: SectionKey }) {
  const section = portfolioCategorySections[activeKey];
  const items = itemsForKey(activeKey);
  const total = getCategoryTotalCount(activeKey);
  const logoHint = activeKey === "branding";
  const isReels = activeKey === "reels";

  return (
    <section
      id={section.anchorId}
      className="scroll-mt-28 space-y-6 rounded-3xl bg-white p-5 shadow-card ring-2 ring-navy/15 sm:p-8"
    >
      <div className="max-w-2xl">
        <span className="mb-2 inline-flex rounded-full bg-navy px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
          Preview
        </span>
        <h3 className="text-xl font-bold text-navy sm:text-2xl">{section.headline}</h3>
        <p className="mt-2 text-sm leading-relaxed text-navy/80 sm:text-base">{section.subtext}</p>
        {logoHint ? (
          <p className="mt-2 text-xs font-medium text-navy/60">
            Tap a logo to open the full design process.
          </p>
        ) : null}
        <p className="mt-3 text-sm text-navy/55">
          Showing {isReels ? "3 reels" : `${items.length} of ${total}`} — view the rest in portfolio.
        </p>
      </div>

      {isReels ? (
        <ReelPreviewTiles />
      ) : (
        <StaggerGroup className="grid max-w-2xl grid-cols-2 gap-4" stagger={0.05}>
          {items.map((item) => (
            <StaggerItem key={item.id}>
              <PortfolioTile item={item} layout="grid" />
            </StaggerItem>
          ))}
        </StaggerGroup>
      )}

      <CategoryConversionCta
        ctaLine={section.ctaLine}
        portfolioHref={section.portfolioHref}
        portfolioLabel={`View all ${total} projects`}
      />
    </section>
  );
}

export function HomePortfolioCategories() {
  const { activeHash, scrollToCategory } = useCategoryHash();
  const activeKey = activeHash ? keyFromAnchor(activeHash) : null;

  useEffect(() => {
    if (!activeKey) return;
    const id = portfolioCategorySections[activeKey].anchorId;
    const t = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
    return () => window.clearTimeout(t);
  }, [activeKey]);

  return (
    <div className="space-y-8">
      {!activeKey ? (
        <FadeIn className="space-y-8">
          <PortfolioMasonryPreview />
          <div>
            <p className="text-center text-sm font-semibold text-navy/80">
              Or explore by category
            </p>
            <div className="mt-6">
              <CategoryTeaserGrid onSelect={scrollToCategory} />
            </div>
          </div>
          <p className="text-center">
            <Link
              href={homePortfolioCopy.ctaHref}
              className="text-sm font-semibold text-navy underline-offset-4 hover:underline"
            >
              {homePortfolioCopy.cta} →
            </Link>
          </p>
        </FadeIn>
      ) : (
        <ActiveCategoryPreview activeKey={activeKey} />
      )}
    </div>
  );
}
