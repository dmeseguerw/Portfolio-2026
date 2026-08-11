import type { Dictionary } from "@/lib/i18n";
import { Container } from "@/components/ui/Container";

export function Footer({ dictionary }: { dictionary: Dictionary }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Container className="flex flex-wrap items-end justify-between gap-6 py-16">
        <div>
          <p className="mb-4 font-serif text-xl italic">
            {dictionary.footer.tagline}
          </p>
          <div className="flex flex-wrap gap-5 text-sm">
            <a
              href="mailto:dmeseguerw1599@gmail.com"
              className="text-primary hover:text-accent"
            >
              dmeseguerw1599@gmail.com
            </a>
            <a
              href="https://github.com/dmeseguerw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/daniel-meseguer-wong/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <p className="text-sm text-muted">
          © {year} Daniel Meseguer Wong. {dictionary.footer.rights}
        </p>
      </Container>
    </footer>
  );
}
