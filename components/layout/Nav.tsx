import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/i18n";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LocaleSwitcher } from "@/components/ui/LocaleSwitcher";

export function Nav({
  locale,
  dictionary,
}: {
  locale: Locale;
  dictionary: Dictionary;
}) {
  const links = [
    { href: `/${locale}`, label: dictionary.nav.home },
    { href: `/${locale}/about`, label: dictionary.nav.about },
    { href: `/${locale}/projects`, label: dictionary.nav.projects },
    { href: `/${locale}/hobbies`, label: dictionary.nav.hobbies },
    { href: `/${locale}/blog`, label: dictionary.nav.blog },
    { href: `/${locale}/contact`, label: dictionary.nav.contact },
  ];

  return (
    <header>
      <Container className="flex h-20 items-center justify-between">
        <Link
          href={`/${locale}`}
          className="font-serif text-xl font-semibold text-foreground"
        >
          Daniel Meseguer
        </Link>
        <nav className="hidden items-center gap-8 sm:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-medium tracking-[0.06em] text-muted uppercase hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LocaleSwitcher locale={locale} label={dictionary.locale.switch} />
          <ThemeToggle label={dictionary.theme.toggle} />
        </div>
      </Container>
    </header>
  );
}
