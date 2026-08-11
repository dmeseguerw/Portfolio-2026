"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

const emptySubscribe = () => () => {};

export function ThemeToggle({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  return (
    <button
      type="button"
      aria-label={label}
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-full border border-border text-sm hover:border-accent",
        className
      )}
      onClick={() =>
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
      }
    >
      {mounted ? (resolvedTheme === "dark" ? "☀️" : "🌙") : null}
    </button>
  );
}
