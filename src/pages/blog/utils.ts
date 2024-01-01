import type { ParsedContent } from "@nuxt/content/dist/runtime/types";
import { format } from "date-fns";

export function getCreatedDateAsDateTime(article: ParsedContent) {
  return format(new Date(article.createdAt), 'yyyy-MM-dd');
}

export function getCreatedDate(article: ParsedContent) {
  return format(new Date(article.createdAt), 'do MMMM yyyy');
}

export function getReadingTime(article: ParsedContent) {
  const readingTimeInMinutes = Math.ceil(article.readingTime / 60 / 60 / 60);
  return `${readingTimeInMinutes} minutes`;
}
