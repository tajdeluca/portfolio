import type { ParsedContent } from "@nuxt/content";
import { format } from "date-fns";

export function getCreatedDateAsDateTime(article: ParsedContent) {
  return format(new Date(article.createdAt), 'yyyy-MM-dd');
}

export function getCreatedDate(article: ParsedContent) {
  return format(new Date(article.createdAt), 'do MMMM yyyy');
}

export function getReadingTime(article: ParsedContent) {
  return `${article.readingTime?.minutes} minutes`;
}

export async function getArticleCategories() {
  return queryContent('/blog/categories').find()
}
