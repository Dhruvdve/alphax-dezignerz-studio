import Link from "next/link";
import { getHomePreviewItems, type PortfolioItem } from "@/content/portfolio";
import { FadeIn } from "@/components/FadeIn";

function PreviewTile({ item, index }: { item: PortfolioItem; index: number }) {
  return (
    <FadeIn delay={index * 0.06}>
      <article
        className="group relative overflow-hidden rounded-2xl shadow-card transition hover:-translate-y-1"
        style={{ background: item.gradient }}
      >
        <div className="aspect-square w-full sm:aspect-[4/5]" />
        <div className="absolute inset-0 bg-navy/0 transition duration-300 group-hover:bg-navy/70" />
        <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 transition duration-300 group-hover:opacity-100">
          <p className="text-sm font-semibold text-white drop-shadow">
            {item.clientName}
          </p>
          <p className="text-xs text-white/90">{item.projectType}</p>
        </div>
      </article>
    </FadeIn>
  );
}

export function PortfolioPreviewGrid() {
  const items = getHomePreviewItems(6);
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <PreviewTile key={item.id} item={item} index={i} />
      ))}
      <div className="col-span-full flex justify-center pt-4">
        <Link
          href="/portfolio"
          className="rounded-full border border-navy/10 bg-white px-6 py-3 text-sm font-semibold text-navy shadow-soft transition hover:border-accent/30 hover:text-accent"
        >
          View full portfolio
        </Link>
      </div>
    </div>
  );
}
