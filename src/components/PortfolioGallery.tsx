"use client";

import { useMemo, useState } from "react";
import { portfolioCategories, portfolioItems } from "@/content/portfolio";
import { FadeIn } from "@/components/FadeIn";

type FilterId = (typeof portfolioCategories)[number]["id"];

function PortfolioTile({ item }: { item: (typeof portfolioItems)[number] }) {
  return (
    <article
      className="group relative mb-5 break-inside-avoid overflow-hidden rounded-2xl shadow-card"
      style={{ background: item.gradient }}
    >
      <div className="aspect-[4/5] w-full min-h-[200px]" />
      <div className="absolute inset-0 bg-navy/0 transition duration-300 group-hover:bg-navy/75" />
      <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 transition duration-300 group-hover:opacity-100">
        <p className="text-sm font-semibold text-white">{item.clientName}</p>
        <p className="text-xs text-white/80">{item.projectType}</p>
      </div>
    </article>
  );
}

export function PortfolioGallery() {
  const [filter, setFilter] = useState<FilterId>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return portfolioItems;
    return portfolioItems.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <div>
      <div className="flex flex-wrap gap-2 border-b border-navy/10 pb-6">
        {portfolioCategories.map((cat) => {
          const active = filter === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setFilter(cat.id)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                active
                  ? "border-accent bg-accent text-white shadow-soft"
                  : "border-navy/10 bg-white text-navy shadow-soft hover:border-accent/30"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      <FadeIn>
        <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {filtered.map((item) => (
            <PortfolioTile key={item.id} item={item} />
          ))}
        </div>
      </FadeIn>

      {filtered.length === 0 ? (
        <p className="mt-8 text-center text-muted">No projects in this category yet.</p>
      ) : null}
    </div>
  );
}
