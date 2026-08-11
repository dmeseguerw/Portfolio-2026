import Parser from "rss-parser";

const FEED_URL = "https://medium.com/feed/@dmeseguerw1599";

export interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  excerpt: string;
  thumbnail?: string;
}

function extractThumbnail(html?: string): string | undefined {
  if (!html) return undefined;
  const match = html.match(/<img[^>]+src="([^">]+)"/);
  return match?.[1];
}

function excerptFrom(snippet: string | undefined, maxLength = 200): string {
  if (!snippet) return "";
  const trimmed = snippet.trim();
  return trimmed.length > maxLength
    ? `${trimmed.slice(0, maxLength).trimEnd()}…`
    : trimmed;
}

export async function getMediumPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetch(FEED_URL, { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error(`Medium feed responded ${res.status}`);
    const xml = await res.text();

    const parser: Parser = new Parser({
      customFields: { item: [["content:encoded", "contentEncoded"]] },
    });
    const feed = await parser.parseString(xml);

    return (feed.items ?? []).map((item) => {
      const contentEncoded = (
        item as unknown as { contentEncoded?: string }
      ).contentEncoded;

      return {
        title: item.title ?? "Untitled",
        link: item.link ?? "",
        pubDate: item.pubDate ?? "",
        excerpt: excerptFrom(item.contentSnippet),
        thumbnail: extractThumbnail(contentEncoded ?? item.content),
      };
    });
  } catch (error) {
    console.error("Failed to fetch Medium feed:", error);
    return [];
  }
}
