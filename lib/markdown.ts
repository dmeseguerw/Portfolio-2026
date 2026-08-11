import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import type { Locale } from "@/lib/i18n";

const projectsDir = path.join(process.cwd(), "content/projects");

export interface ProjectFrontmatter {
  title: string;
  slug: string;
  summary: string;
  category: string;
  tags: string[];
  date: string;
  featured?: boolean;
  coverImage?: string;
  links?: { label: string; url: string }[];
}

export interface Project extends ProjectFrontmatter {
  contentHtml: string;
}

function readProjectFiles(locale: Locale) {
  if (!fs.existsSync(projectsDir)) return [];
  return fs
    .readdirSync(projectsDir)
    .filter((file) => file.endsWith(`.${locale}.md`));
}

export function getAllProjects(locale: Locale): ProjectFrontmatter[] {
  const files = readProjectFiles(locale);

  const projects = files.map((file) => {
    const raw = fs.readFileSync(path.join(projectsDir, file), "utf8");
    const { data } = matter(raw);
    return data as ProjectFrontmatter;
  });

  return projects.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

const SAFE_SLUG = /^[a-z0-9-]+$/;

export async function getProjectBySlug(
  slug: string,
  locale: Locale
): Promise<Project | null> {
  if (!SAFE_SLUG.test(slug)) return null;

  const filePath = path.join(projectsDir, `${slug}.${locale}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const processed = await remark().use(remarkHtml).process(content);

  return {
    ...(data as ProjectFrontmatter),
    contentHtml: processed.toString(),
  };
}
