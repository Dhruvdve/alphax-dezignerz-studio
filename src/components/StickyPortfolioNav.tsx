"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { categoryQuickLinks } from "@/content/portfolio";
import { useCategoryHash } from "@/lib/useCategoryHash";

/** Sticky category chips on mobile while browsing portfolio */
export function StickyPortfolioNav() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  const { activeHash, scrollToCategory } = useCategoryHash();
  const basePath = pathname === "/portfolio" ? "/portfolio" : "/";
  const observeId = pathname === "/portfolio" ? "portfolio-root" : "work";

  useEffect(() => {
    const root = document.getElementById(observeId);
    if (!root) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: "-72px 0px -50% 0px", threshold: 0 },
    );
    observer.observe(root);
    return () => observer.disconnect();
  }, [observeId, pathname]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-navy/10 bg-white/95 px-2 py-2 shadow-[0_-8px_32px_-8px_rgba(26,59,93,0.2)] backdrop-blur-lg sm:hidden">
      <div className="flex gap-1.5 overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {categoryQuickLinks.map((link) => {
          const active = activeHash === link.anchorId;
          return (
            <Link
              key={link.anchorId}
              href={`${basePath}#${link.anchorId}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToCategory(link.anchorId);
              }}
              className={`shrink-0 rounded-full border px-3 py-2 text-xs font-semibold transition ${
                active
                  ? "border-navy bg-navy text-white"
                  : "border-navy/10 bg-surfaceMuted text-navy"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
