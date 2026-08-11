"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LocaleSwitcher({
  locale,
  label,
  className,
}: {
  locale: Locale;
  label: string;
  className?: string;
}) {
  const pathname = usePathname();
  const segments = pathname.split("/");

  return (
    <div className={cn("flex items-center gap-1 text-sm", className)} aria-label={label}>
      {locales.map((loc) => {
        segments[1] = loc;
        const href = segments.join("/") || "/";
        return (
          <Link
            key={loc}
            href={href}
            className={cn(
              "rounded-full px-2 py-1 uppercase hover:bg-black/[.04] dark:hover:bg-white/[.06]",
              loc === locale && "font-semibold underline underline-offset-4"
            )}
          >
            {loc}
          </Link>
        );
      })}
    </div>
  );
}
