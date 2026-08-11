import { getDictionary, isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/sections/ContactForm";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dictionary = await getDictionary(locale);

  return (
    <Container className="max-w-2xl py-24">
      <h1 className="mb-5 font-serif text-5xl font-medium tracking-tight sm:text-6xl">
        {dictionary.contact.title}
      </h1>
      <p className="mb-12 text-lg leading-7 text-muted">
        {dictionary.contact.subtitle}
      </p>

      <ContactForm dictionary={dictionary} />

      <div className="mt-14 flex flex-col gap-3 border-t border-border pt-8 text-sm">
        <a href="mailto:dmeseguerw1599@gmail.com" className="text-primary hover:text-accent">
          dmeseguerw1599@gmail.com
        </a>
        <a
          href="https://linkedin.com/in/daniel-meseguer-wong/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-accent"
        >
          linkedin.com/in/daniel-meseguer-wong
        </a>
        <a
          href="https://github.com/dmeseguerw"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-accent"
        >
          github.com/dmeseguerw
        </a>
        <span className="text-muted">{dictionary.contact.location}</span>
      </div>
    </Container>
  );
}
