import { getDictionary, isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { hobbies } from "@/content/hobbies";

export default async function HobbiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dictionary = await getDictionary(locale);

  return (
    <Container className="py-24">
      <p className="mb-5 text-xs font-semibold tracking-[0.08em] text-secondary uppercase">
        {dictionary.hobbies.kicker}
      </p>
      <h1 className="mb-5 max-w-2xl font-serif text-5xl font-medium tracking-tight sm:text-6xl">
        {dictionary.hobbies.title}
      </h1>
      <p className="text-lg leading-7 text-muted">
        {dictionary.hobbies.subtitle}
      </p>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {hobbies.map((hobby) => (
          <div key={hobby.title.en}>
            <div className="relative mb-4 aspect-square overflow-hidden rounded-[10px] border border-border">
              <Image
                src={hobby.image}
                alt={hobby.title[locale]}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              />
            </div>
            <h3 className="mb-2 font-serif text-xl font-medium">
              {hobby.title[locale]}
            </h3>
            <p className="text-[15px] leading-6 text-muted">
              {hobby.description[locale]}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
}
