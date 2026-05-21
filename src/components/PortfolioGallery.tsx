"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useMemo, useState, type ReactNode } from "react";
import type { PortfolioCategory, PortfolioItem } from "@/content/portfolio";
import { easeOut } from "@/lib/motion";
import {
  getItemsByCategory,
  getSocialCarousels,
  getSocialPosts,
  portfolioCategories,
  portfolioItems,
  portfolioCategorySections,
  portfolioLayout,
} from "@/content/portfolio";
import { PortfolioTile } from "@/components/PortfolioTile";

type FilterId = (typeof portfolioCategories)[number]["id"];

const colClasses: Record<2 | 3 | 4 | 5, string> = {
  2: "grid-cols-2",
  3: "grid-cols-2 sm:grid-cols-3",
  4: "grid-cols-2 sm:grid-cols-4",
  5: "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5",
};

function PortfolioGrid({
  items,
  cols,
}: {
  items: PortfolioItem[];
  cols: 2 | 3 | 4 | 5;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={`grid gap-3 sm:gap-4 ${colClasses[cols]}`}
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.04, delayChildren: 0.05 } },
      }}
    >
      {items.map((item, i) => (
        <motion.div
          key={item.id}
          variants={
            reduce
              ? undefined
              : {
                  hidden: { opacity: 0, y: 20, scale: 0.96 },
                  show: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.45, ease: easeOut, delay: i * 0.02 },
                  },
                }
          }
        >
          <PortfolioTile item={item} layout="grid" />
        </motion.div>
      ))}
    </motion.div>
  );
}

function SectionBlock({
  id,
  title,
  description,
  children,
}: {
  id?: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 space-y-4">
      <div className="max-w-2xl">
        <h2 className="text-xl font-bold text-navy sm:text-2xl">{title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-navy/75 sm:text-base">
          {description}
        </p>
      </div>
      {children}
    </section>
  );
}

function SocialMediaView() {
  const posts = getSocialPosts();
  const carousels = getSocialCarousels();
  const { social, carousels: carouselCopy } = portfolioCategorySections;
  return (
    <div className="space-y-12">
      <SectionBlock
        id={social.anchorId}
        title={social.headline}
        description={social.subtext}
      >
        <PortfolioGrid items={posts} cols={5} />
      </SectionBlock>
      <SectionBlock
        id={carouselCopy.anchorId}
        title={carouselCopy.headline}
        description={carouselCopy.subtext}
      >
        <PortfolioGrid items={carousels} cols={4} />
      </SectionBlock>
    </div>
  );
}

function CategoryView({ category }: { category: PortfolioCategory }) {
  if (category === "social-media") return <SocialMediaView />;

  const items = getItemsByCategory(category);

  if (category === "logos-branding") {
    return (
      <SectionBlock
        id={portfolioCategorySections.branding.anchorId}
        title={portfolioCategorySections.branding.headline}
        description={`${portfolioCategorySections.branding.subtext} Tap a logo to see the full design process.`}
      >
        <PortfolioGrid items={items} cols={2} />
      </SectionBlock>
    );
  }

  if (category === "flyers-print") {
    return (
      <SectionBlock
        title={portfolioLayout.flyers.label}
        description={portfolioLayout.flyers.description}
      >
        <PortfolioGrid items={items} cols={5} />
      </SectionBlock>
    );
  }

  return (
    <SectionBlock
      id={portfolioCategorySections.reels.anchorId}
      title={portfolioCategorySections.reels.headline}
      description={portfolioCategorySections.reels.subtext}
    >
      <PortfolioGrid items={items} cols={3} />
    </SectionBlock>
  );
}

function AllCategoriesView() {
  const { reels, social, branding, carousels } = portfolioCategorySections;
  return (
    <div className="space-y-16">
      <SectionBlock
        id={reels.anchorId}
        title={reels.headline}
        description={reels.subtext}
      >
        <PortfolioGrid items={getItemsByCategory("reels-motion")} cols={3} />
      </SectionBlock>
      <SectionBlock
        id={social.anchorId}
        title={social.headline}
        description={social.subtext}
      >
        <PortfolioGrid items={getSocialPosts()} cols={5} />
      </SectionBlock>
      <SectionBlock
        id={carousels.anchorId}
        title={carousels.headline}
        description={carousels.subtext}
      >
        <PortfolioGrid items={getSocialCarousels()} cols={4} />
      </SectionBlock>
      <SectionBlock
        id={branding.anchorId}
        title={branding.headline}
        description={`${branding.subtext} Tap a logo to see the full design process.`}
      >
        <PortfolioGrid items={getItemsByCategory("logos-branding")} cols={2} />
      </SectionBlock>
      <SectionBlock
        title={portfolioLayout.flyers.label}
        description={portfolioLayout.flyers.description}
      >
        <PortfolioGrid items={getItemsByCategory("flyers-print")} cols={5} />
      </SectionBlock>
    </div>
  );
}

export function PortfolioGallery() {
  const [filter, setFilter] = useState<FilterId>("all");
  const reduce = useReducedMotion();

  const content = useMemo(() => {
    if (filter === "all") return <AllCategoriesView />;
    return <CategoryView category={filter} />;
  }, [filter]);

  return (
    <div>
      <div className="flex flex-wrap gap-2 border-b border-navy/10 pb-6">
        {portfolioCategories.map((cat) => {
          const active = filter === cat.id;
          return (
            <motion.button
              key={cat.id}
              type="button"
              onClick={() => setFilter(cat.id)}
              whileHover={reduce ? undefined : { y: -2 }}
              whileTap={reduce ? undefined : { scale: 0.96 }}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                active
                  ? "border-navy bg-white text-navy shadow-soft ring-2 ring-navy/15"
                  : "border-navy/10 bg-white text-navy shadow-soft hover:border-navy/30"
              }`}
            >
              {cat.label}
            </motion.button>
          );
        })}
      </div>

      {(() => {
        const active = portfolioCategories.find((c) => c.id === filter);
        return active?.description ? (
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-navy/80 sm:text-base">
            {active.description}
          </p>
        ) : null;
      })()}

      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          className="mt-10"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: easeOut }}
        >
          {content}
        </motion.div>
      </AnimatePresence>

      {filter !== "all" && portfolioItems.filter((p) => p.category === filter).length === 0 ? (
        <p className="mt-8 text-center text-navy/75">No projects in this category yet.</p>
      ) : null}
    </div>
  );
}
