import Link from "next/link";
import { getDictionary, isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { getAllProjects } from "@/lib/markdown";
import { homeContent, companies } from "@/content/home";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dictionary = await getDictionary(locale);
  const home = homeContent[locale];
  const projects = getAllProjects(locale);
  const featured = projects.find((p) => p.featured) ?? projects[0];

  return (
    <>
      <section className="py-24 sm:py-32">
        <Container>
          <p className="mb-5 text-xs font-semibold tracking-[0.08em] text-primary uppercase">
            {home.kicker}
          </p>
          <h1 className="max-w-3xl font-serif text-5xl leading-[1.08] font-medium tracking-tight sm:text-6xl">
            {home.heading}
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-7 text-muted">
            {home.bio}
          </p>
          <div className="mt-9 flex gap-4">
            <LinkButton href={`/${locale}/projects`}>
              {dictionary.home.viewProjects}
            </LinkButton>
            <LinkButton href={`/${locale}/contact`} variant="secondary">
              {dictionary.home.getInTouch}
            </LinkButton>
          </div>
        </Container>
      </section>

      {featured && (
        <section className="py-20">
          <Container>
            <div className="mb-10 flex items-baseline justify-between">
              <h2 className="font-serif text-3xl font-medium">
                {dictionary.home.featuredProject}
              </h2>
              <Link
                href={`/${locale}/projects`}
                className="text-xs font-semibold tracking-[0.04em] uppercase hover:text-accent"
              >
                {dictionary.home.viewAll}
              </Link>
            </div>
            <Link
              href={`/${locale}/projects/${featured.slug}`}
              className="grid items-center gap-10 sm:grid-cols-2"
            >
              <div className="flex aspect-4/3 items-center justify-center rounded-[10px] border border-border bg-[repeating-linear-gradient(45deg,#F1F0EA,#F1F0EA_10px,#EAE8DF_10px,#EAE8DF_20px)] dark:bg-[repeating-linear-gradient(45deg,#22221b,#22221b_10px,#2a2a21_10px,#2a2a21_20px)]">
                <span className="font-mono text-[11px] tracking-[0.05em] text-muted uppercase">
                  project diagram
                </span>
              </div>
              <div>
                <p className="mb-1.5 text-xs font-semibold tracking-[0.05em] text-accent uppercase">
                  {featured.category}
                </p>
                <h3 className="mb-3 font-serif text-2xl font-medium">
                  {featured.title}
                </h3>
                <p className="text-base leading-6 text-muted">
                  {featured.summary}
                </p>
              </div>
            </Link>
          </Container>
        </section>
      )}

      <section className="border-y border-border py-16">
        <Container>
          <p className="mb-5 text-center text-xs font-semibold tracking-[0.08em] text-muted uppercase">
            {dictionary.home.previouslyAt}
          </p>
          <div className="flex flex-wrap justify-center gap-14">
            {companies.map((company) => (
              <span key={company} className="font-serif text-xl">
                {company}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container className="grid gap-8 sm:grid-cols-2">
          <Link
            href={`/${locale}/blog`}
            className="block rounded-[10px] border border-border p-9 hover:border-primary"
          >
            <p className="mb-2.5 text-xs font-semibold tracking-[0.06em] text-primary uppercase">
              {dictionary.home.fromBlog}
            </p>
            <h3 className="mb-2.5 font-serif text-xl font-medium">
              {home.blogHeading}
            </h3>
            <p className="text-sm text-muted">{home.blogDescription}</p>
          </Link>
          <Link
            href={`/${locale}/hobbies`}
            className="block rounded-[10px] border border-border p-9 hover:border-secondary"
          >
            <p className="mb-2.5 text-xs font-semibold tracking-[0.06em] text-secondary uppercase">
              {dictionary.home.offClock}
            </p>
            <h3 className="mb-2.5 font-serif text-xl font-medium">
              {home.hobbiesHeading}
            </h3>
            <p className="text-sm text-muted">{home.hobbiesDescription}</p>
          </Link>
        </Container>
      </section>
    </>
  );
}
