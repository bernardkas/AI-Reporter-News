export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string | null;
  description: string | null;
  image: string | null;
  date: string;
  tag: string[];
  category: string | null;
  references_links: Array<{ source_name: string; url: string }>;
  publishedAt: string;
}
