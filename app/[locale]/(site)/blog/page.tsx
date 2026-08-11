import { getDictionary, isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { BlogCard } from "@/components/sections/BlogCard";
import { getMediumPosts } from "@/lib/medium";

export const revalidate = 3600;

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dictionary = await getDictionary(locale);
  const posts = await getMediumPosts();

  return (
    <Container className="py-24">
      <h1 className="mb-5 font-serif text-5xl font-medium tracking-tight sm:text-6xl">
        {dictionary.blog.title}
      </h1>
      <p className="max-w-2xl text-lg leading-7 text-muted">
        {dictionary.blog.subtitle}
      </p>

      {posts.length === 0 ? (
        <div className="mt-16 rounded-[10px] border border-border px-10 py-14 text-center">
          <p className="mb-2.5 font-serif text-xl">
            {dictionary.blog.noPosts}
          </p>
          <p className="text-[15px] leading-6 text-muted">
            {dictionary.blog.noPostsDescription}
          </p>
        </div>
      ) : (
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {posts.map((post) => (
            <BlogCard
              key={post.link}
              post={post}
              readOnMedium={dictionary.blog.readOnMedium}
            />
          ))}
        </div>
      )}
    </Container>
  );
}
