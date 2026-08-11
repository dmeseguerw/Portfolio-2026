"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import type { Dictionary } from "@/lib/i18n";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm({ dictionary }: { dictionary: Dictionary }) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
      company: String(formData.get("company") ?? ""), // honeypot
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[10px] border border-primary bg-surface p-8">
        <p className="mb-2 font-serif text-xl">{dictionary.contact.thanks}</p>
        <p className="text-[15px] text-muted">
          {dictionary.contact.thanksDescription}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <label className="mb-2 block text-xs font-semibold tracking-[0.05em] text-muted uppercase">
          {dictionary.contact.name}
        </label>
        <input
          type="text"
          name="name"
          placeholder={dictionary.contact.namePlaceholder}
          required
          maxLength={100}
          className="w-full rounded-md border border-border bg-surface px-4 py-3.5 text-[15px] text-foreground focus:border-primary focus:outline-none"
        />
      </div>
      <div>
        <label className="mb-2 block text-xs font-semibold tracking-[0.05em] text-muted uppercase">
          {dictionary.contact.email}
        </label>
        <input
          type="email"
          name="email"
          placeholder={dictionary.contact.emailPlaceholder}
          required
          className="w-full rounded-md border border-border bg-surface px-4 py-3.5 text-[15px] text-foreground focus:border-primary focus:outline-none"
        />
      </div>
      <div>
        <label className="mb-2 block text-xs font-semibold tracking-[0.05em] text-muted uppercase">
          {dictionary.contact.message}
        </label>
        <textarea
          name="message"
          placeholder={dictionary.contact.messagePlaceholder}
          required
          rows={5}
          maxLength={5000}
          className="w-full resize-y rounded-md border border-border bg-surface px-4 py-3.5 text-[15px] text-foreground focus:border-primary focus:outline-none"
        />
      </div>

      {/* Honeypot field — hidden from sighted users, bots that fill every
          field will trip it. Kept out of the tab order and off-screen
          rather than display:none, which some bots detect and skip. */}
      <div
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
      >
        <label htmlFor="company">Company</label>
        <input
          type="text"
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-accent">{dictionary.contact.error}</p>
      )}

      <Button
        type="submit"
        variant="accent"
        className="mt-2 self-start"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? dictionary.contact.sending : dictionary.contact.send}
      </Button>
    </form>
  );
}
