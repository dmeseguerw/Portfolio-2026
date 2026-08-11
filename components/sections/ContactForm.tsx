"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import type { Dictionary } from "@/lib/i18n";

export function ContactForm({ dictionary }: { dictionary: Dictionary }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
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
          placeholder={dictionary.contact.namePlaceholder}
          required
          className="w-full rounded-md border border-border bg-surface px-4 py-3.5 text-[15px] text-foreground focus:border-primary focus:outline-none"
        />
      </div>
      <div>
        <label className="mb-2 block text-xs font-semibold tracking-[0.05em] text-muted uppercase">
          {dictionary.contact.email}
        </label>
        <input
          type="email"
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
          placeholder={dictionary.contact.messagePlaceholder}
          required
          rows={5}
          className="w-full resize-y rounded-md border border-border bg-surface px-4 py-3.5 text-[15px] text-foreground focus:border-primary focus:outline-none"
        />
      </div>
      <Button type="submit" variant="accent" className="mt-2 self-start">
        {dictionary.contact.send}
      </Button>
    </form>
  );
}
