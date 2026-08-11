import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import type { ProjectFrontmatter } from "@/lib/markdown";
import type { Locale } from "@/lib/i18n";

export function ProjectCard({
  project,
  locale,
  viewProjectLabel,
}: {
  project: ProjectFrontmatter;
  locale: Locale;
  viewProjectLabel: string;
}) {
  return (
    <Link
      href={`/${locale}/projects/${project.slug}`}
      className="grid items-center gap-10 rounded-xl border border-border p-10 hover:border-primary sm:grid-cols-2"
    >
      <div className="flex aspect-4/3 items-center justify-center rounded-[10px] border border-border bg-[repeating-linear-gradient(45deg,#F1F0EA,#F1F0EA_10px,#EAE8DF_10px,#EAE8DF_20px)] dark:bg-[repeating-linear-gradient(45deg,#22221b,#22221b_10px,#2a2a21_10px,#2a2a21_20px)]">
        <span className="font-mono text-[11px] tracking-[0.05em] text-muted uppercase">
          project diagram
        </span>
      </div>
      <div>
        <p className="mb-2 text-xs font-semibold tracking-[0.05em] text-accent uppercase">
          {project.category}
        </p>
        <h2 className="mb-3.5 font-serif text-2xl font-medium">
          {project.title}
        </h2>
        <p className="mb-4.5 text-base leading-6 text-muted">
          {project.summary}
        </p>
        <div className="mb-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <span className="text-[13px] font-semibold tracking-[0.04em] uppercase">
          {viewProjectLabel} →
        </span>
      </div>
    </Link>
  );
}
