"use client";

import { useState } from "react";
import { contactServiceOptions } from "@/content/services";
import { Loader2 } from "lucide-react";

const initial = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  message: "",
  website: "", // honeypot
};

export function ContactForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(
          typeof data.error === "string" ? data.error : "Something went wrong. Try WhatsApp.",
        );
        return;
      }

      setStatus("success");
      setForm(initial);
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again or use WhatsApp.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-navy/5 bg-white p-6 shadow-card sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label className="text-sm font-semibold text-navy" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className="mt-1 w-full rounded-xl border border-navy/10 bg-surface px-3 py-2.5 text-sm outline-none transition focus:border-accent"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          />
        </div>
        <div className="sm:col-span-1">
          <label className="text-sm font-semibold text-navy" htmlFor="company">
            Company
          </label>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            className="mt-1 w-full rounded-xl border border-navy/10 bg-surface px-3 py-2.5 text-sm outline-none transition focus:border-accent"
            value={form.company}
            onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm font-semibold text-navy" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-1 w-full rounded-xl border border-navy/10 bg-surface px-3 py-2.5 text-sm outline-none transition focus:border-accent"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-navy" htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="mt-1 w-full rounded-xl border border-navy/10 bg-surface px-3 py-2.5 text-sm outline-none transition focus:border-accent"
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-semibold text-navy" htmlFor="service">
          Service needed
        </label>
        <select
          id="service"
          name="service"
          required
          className="mt-1 w-full rounded-xl border border-navy/10 bg-surface px-3 py-2.5 text-sm outline-none transition focus:border-accent"
          value={form.service}
          onChange={(e) => setForm((f) => ({ ...f, service: e.target.value }))}
        >
          {contactServiceOptions.map((opt) => (
            <option
              key={opt.value === "" ? "placeholder" : opt.value}
              value={opt.value}
              disabled={opt.value === ""}
            >
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="text-sm font-semibold text-navy" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="mt-1 w-full rounded-xl border border-navy/10 bg-surface px-3 py-2.5 text-sm outline-none transition focus:border-accent"
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
        />
      </div>

      {/* Honeypot */}
      <div className="hidden" aria-hidden>
        <label htmlFor="website">Website</label>
        <input
          tabIndex={-1}
          autoComplete="off"
          id="website"
          name="website"
          value={form.website}
          onChange={(e) => setForm((f) => ({ ...f, website: e.target.value }))}
        />
      </div>

      {status === "error" ? (
        <p className="text-sm font-medium text-red-600" role="alert">
          {errorMessage}
        </p>
      ) : null}
      {status === "success" ? (
        <p className="text-sm font-medium text-emerald-700" role="status">
          Thanks — we received your message and will reply shortly.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending…
          </>
        ) : (
          "Send message"
        )}
      </button>
    </form>
  );
}
