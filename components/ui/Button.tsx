import { cn } from "@/lib/utils";
import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-7 py-3.5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
const variants = {
  primary: "bg-primary text-background hover:opacity-90",
  accent: "bg-accent text-background hover:opacity-90",
  secondary:
    "border border-border text-foreground hover:border-accent hover:text-accent",
};

type Variant = keyof typeof variants;

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button
      className={cn(base, variants[variant], className)}
      {...props}
    />
  );
}

export function LinkButton({
  className,
  variant = "primary",
  href,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  href: string;
}) {
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], className)}
      {...props}
    />
  );
}
