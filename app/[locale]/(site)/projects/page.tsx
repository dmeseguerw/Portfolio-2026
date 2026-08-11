import { getDictionary, isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { getAllProjects } from "@/lib/markdown";
import { sideProjects } from "@/content/side-projects";

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dictionary = await getDictionary(locale);
  const projects = getAllProjects(locale);

  return (
    <Container className="py-24">
      <h1 className="mb-5 font-serif text-5xl font-medium tracking-tight sm:text-6xl">
        {dictionary.projects.title}
      </h1>
      <p className="max-w-2xl text-lg leading-7 text-muted">
        {dictionary.projects.subtitle}
      </p>

      <div className="mt-16 flex flex-col gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            locale={locale}
            viewProjectLabel={dictionary.projects.viewProject}
          />
        ))}
      </div>

      <div className="mt-16">
        <p className="mb-6 text-xs font-semibold tracking-[0.05em] text-muted uppercase">
          {dictionary.projects.alsoBuilding}
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sideProjects.map((sp) => {
            const content = (
              <>
                <h3 className="mb-2 font-serif text-lg font-medium">
                  {sp.title}
                </h3>
                <p className="text-sm leading-6 text-muted">
                  {sp.description[locale]}
                </p>
              </>
            );

            return sp.slug ? (
              <Link
                key={sp.title}
                href={`/${locale}/projects/${sp.slug}`}
                className="rounded-[10px] border border-border p-7 transition-colors hover:border-primary"
              >
                {content}
              </Link>
            ) : (
              <div key={sp.title} className="rounded-[10px] border border-border p-7">
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
