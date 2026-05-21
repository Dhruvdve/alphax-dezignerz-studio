"use client";

import { useCallback, useEffect, useState } from "react";
import { categoryQuickLinks } from "@/content/portfolio";

type CategoryAnchorId = (typeof categoryQuickLinks)[number]["anchorId"];
type CategoryHash = CategoryAnchorId | "";

const VALID = new Set<string>(categoryQuickLinks.map((l) => l.anchorId));

function parseCategoryHash(raw: string): CategoryHash {
  return VALID.has(raw) ? (raw as CategoryAnchorId) : "";
}

export function useCategoryHash() {
  const [hash, setHash] = useState<CategoryHash>("");

  useEffect(() => {
    const sync = () => {
      const h = window.location.hash.replace("#", "");
      setHash(parseCategoryHash(h));
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const scrollToCategory = useCallback((anchorId: string) => {
    const el = document.getElementById(anchorId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    window.history.pushState(null, "", `/#${anchorId}`);
    setHash(parseCategoryHash(anchorId));
  }, []);

  return { activeHash: hash, scrollToCategory, isValidCategory: (id: string) => VALID.has(id) };
}
