"use client";

import { useEffect, useState, type FormEvent } from "react";
import { X } from "lucide-react";
import { leadMagnet } from "@/content/cta";
import { PrimaryCta } from "@/components/PrimaryCta";
import { parseJsonResponse } from "@/lib/safe-json";

const STORAGE_KEY = "alphax-lead-popup-dismissed";
/** Wait before exit-intent can fire (avoids instant popup on accidental top-edge hover) */
const MIN_MS_ON_PAGE = 8_000;

export function LeadMagnetPopup() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const readyAt = Date.now() + MIN_MS_ON_PAGE;
    let shown = false;

    const showOnce = () => {
      if (shown || sessionStorage.getItem(STORAGE_KEY)) return;
      if (Date.now() < readyAt) return;
      shown = true;
      setOpen(true);
      sessionStorage.setItem(STORAGE_KEY, "1");
    };

    /** Mouse leaves viewport toward browser chrome / close tab */
    const onExitIntent = (e: MouseEvent) => {
      const leavingTop = e.clientY <= 0;
      const noRelatedTarget = !e.relatedTarget;
      if (leavingTop && noRelatedTarget) {
        showOnce();
      }
    };

    document.addEventListener("mouseout", onExitIntent, { passive: true });

    return () => {
      document.removeEventListener("mouseout", onExitIntent);
    };
  }, []);

  function dismiss() {
    setOpen(false);
    if (typeof window !== "undefined") {
      sessionStorage.setItem(STORAGE_KEY, "1");
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website: "" }),
      });
      const data = await parseJsonResponse<{ ok?: boolean; error?: string }>(res);
      if (!res.ok) throw new Error(data.error ?? "Could not submit");
      setStatus("done");
      setMessage("Check your inbox — calendar on the way!");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/60 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-magnet-title"
      onClick={dismiss}
    >
      <div
        className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-card sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={dismiss}
          className="absolute right-4 top-4 rounded-lg p-1 text-navy/60 hover:bg-surfaceMuted hover:text-navy"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
        <h2 id="lead-magnet-title" className="pr-8 text-xl font-bold text-navy sm:text-2xl">
          {leadMagnet.title}
        </h2>
        <p className="mt-2 text-sm text-navy/80 sm:text-base">{leadMagnet.subtitle}</p>

        {status === "done" ? (
          <p className="mt-6 text-sm font-semibold text-navy">{message}</p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-3">
            <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@travelagency.com"
              className="w-full rounded-xl border border-navy/15 px-4 py-3 text-sm text-navy outline-none ring-navy/20 focus:ring-2"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-cta w-full py-3 disabled:opacity-70"
            >
              {status === "loading" ? "Sending…" : leadMagnet.buttonLabel}
            </button>
            {message ? <p className="text-sm text-red-600">{message}</p> : null}
          </form>
        )}

        <p className="mt-4 text-center text-xs text-navy/55">Or get a live sample first</p>
        <div className="mt-2 flex justify-center">
          <PrimaryCta className="btn-cta px-5 py-2.5 text-sm" />
        </div>
      </div>
    </div>
  );
}
