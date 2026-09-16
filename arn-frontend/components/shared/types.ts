export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  description: string;
  image: string;
  date: string;
  tag?: string;
  updatedAt?: string;
  category?: string;
  references?: Reference[];
}

export interface Reference {
  title: string;
  url: string;
}
