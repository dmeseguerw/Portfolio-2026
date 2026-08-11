import { getDictionary, isLocale, locales } from "@/lib/i18n";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { getAllProjects, getProjectBySlug } from "@/lib/markdown";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getAllProjects(locale).map((project) => ({
      locale,
      slug: project.slug,
    }))
  );
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const dictionary = await getDictionary(locale);
  const project = await getProjectBySlug(slug, locale);
  if (!project) notFound();

  return (
    <Container className="py-24">
      <article className="mx-auto max-w-3xl">
        <Link
          href={`/${locale}/projects`}
          className="text-[13px] font-semibold tracking-[0.04em] uppercase"
        >
          ← {dictionary.projects.back}
        </Link>
        <p className="mt-7 mb-3 text-[13px] font-semibold tracking-[0.05em] text-accent uppercase">
          {project.category}
        </p>
        <h1 className="mb-6 font-serif text-4xl leading-tight font-medium tracking-tight sm:text-5xl">
          {project.title}
        </h1>
        <div className="mb-8 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        {project.links && project.links.length > 0 && (
          <div className="mb-12 flex flex-wrap gap-4 border-b border-border pb-8">
            {project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] font-semibold tracking-[0.04em] uppercase"
              >
                {link.label} →
              </a>
            ))}
          </div>
        )}
        <div className="mb-12 flex aspect-video items-center justify-center rounded-[10px] border border-border bg-[repeating-linear-gradient(45deg,#F1F0EA,#F1F0EA_10px,#EAE8DF_10px,#EAE8DF_20px)] dark:bg-[repeating-linear-gradient(45deg,#22221b,#22221b_10px,#2a2a21_10px,#2a2a21_20px)]">
          <span className="font-mono text-xs tracking-[0.05em] text-muted uppercase">
            system architecture diagram
          </span>
        </div>
        <div
          className="max-w-none text-lg leading-7 text-muted [&_blockquote]:my-7 [&_blockquote]:border-l-2 [&_blockquote]:border-primary [&_blockquote]:pl-6 [&_blockquote>p]:font-serif [&_blockquote>p]:text-xl [&_blockquote>p]:text-foreground [&_blockquote>p]:italic [&_h2]:mt-10 [&_h2]:mb-5 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:font-medium [&_h2]:text-foreground [&_p]:mt-5 [&_strong]:text-foreground"
          dangerouslySetInnerHTML={{ __html: project.contentHtml }}
        />
      </article>
    </Container>
  );
}
