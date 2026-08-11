import { Card } from "@/components/ui/Card";
import type { BlogPost } from "@/lib/medium";

export function BlogCard({
  post,
  readOnMedium,
}: {
  post: BlogPost;
  readOnMedium: string;
}) {
  return (
    <a href={post.link} target="_blank" rel="noopener noreferrer">
      <Card className="h-full transition-colors hover:border-primary">
        <h3 className="font-serif text-lg font-medium">{post.title}</h3>
        {post.pubDate && (
          <p className="mt-1 text-xs text-muted">
            {new Date(post.pubDate).toLocaleDateString()}
          </p>
        )}
        <p className="mt-2.5 text-sm leading-6 text-muted">{post.excerpt}</p>
        <span className="mt-4 inline-block text-[13px] font-semibold tracking-[0.04em] uppercase">
          {readOnMedium} →
        </span>
      </Card>
    </a>
  );
}
