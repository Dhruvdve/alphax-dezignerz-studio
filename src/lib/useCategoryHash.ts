"use client";

import { useCallback, useEffect, useState } from "react";
import { categoryQuickLinks } from "@/content/portfolio";

const VALID = new Set(categoryQuickLinks.map((l) => l.anchorId));

export function useCategoryHash() {
  const [hash, setHash] = useState("");

  useEffect(() => {
    const sync = () => {
      const h = window.location.hash.replace("#", "");
      setHash(VALID.has(h) ? h : "");
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
    setHash(anchorId);
  }, []);

  return { activeHash: hash, scrollToCategory, isValidCategory: (id: string) => VALID.has(id) };
}
