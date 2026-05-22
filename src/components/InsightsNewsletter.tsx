"use client";

import { useState } from "react";
import { insightsNewsletter } from "@/content/cta";
import { FadeIn } from "@/components/FadeIn";
import { Section } from "@/components/Section";
import { parseJsonResponse } from "@/lib/safe-json";

export function InsightsNewsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website: "" }),
      });
      const data = await parseJsonResponse<{ ok?: boolean; error?: string }>(res);
      if (!res.ok) throw new Error(data.error ?? "Could not subscribe");
      setStatus("done");
      setMessage("You're in — watch your inbox for the first insight.");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <Section variant="surface" id="insights">
      <FadeIn>
        <div className="mx-auto max-w-2xl rounded-3xl border border-navy/10 bg-white p-8 text-center shadow-soft sm:p-10">
          <span className="label-accent">Insights</span>
          <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl">
            {insightsNewsletter.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-navy/80 sm:text-base">
            {insightsNewsletter.subtitle}
          </p>

          {status === "done" ? (
            <p className="mt-6 text-sm font-semibold text-navy">{message}</p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@travelagency.com"
                className="min-w-0 flex-1 rounded-xl border border-navy/15 px-4 py-3 text-sm text-navy outline-none focus:ring-2 focus:ring-navy/20"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-cta shrink-0 px-6 py-3 disabled:opacity-70"
              >
                {status === "loading" ? "Joining…" : insightsNewsletter.buttonLabel}
              </button>
            </form>
          )}
          {message && status === "error" ? (
            <p className="mt-3 text-sm text-red-600">{message}</p>
          ) : null}
        </div>
      </FadeIn>
    </Section>
  );
}
