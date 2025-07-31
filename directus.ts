import { createDirectus, rest } from '@directus/sdk';

type Global = {
  slug: string;
  title: string;
  description: string;
};

type Author = {
  slug: string;
  name: string;
};

type Page = {
  slug: string;
  title: string;
  content: string;
};

type Post = {
  slug: string;
  image: string;
  title: string;
  content: string;
  author: Author;
  published_date: string;
};

type ArticleTranslations = {
  id: number;
  articles_id: number;
  languages_code: 'en-US' | 'de-DE';
  title: string;
  content: string;
};

type Article = {
  id: string;
  translations?: ArticleTranslations[];
  'translations.*'?: ArticleTranslations[];
};

type Schema = {
  global: Global;
  posts: Post[];
  pages: Page[];
  articles: Article[];
  articles_translations: ArticleTranslations[];
};

const directus = createDirectus<Schema>('http://localhost:8055').with(rest());

export { directus };
export type { Global, Post, Page, Article, ArticleTranslations };
