import type { CollectionEntry } from "astro:content";
import { slugifyAll, slugifyStr } from "./slugify";
import { getPostLocale } from "./getPostPaths";
import { getTranslation } from "./localizedPosts";
import type { Locale } from "@/i18n/locales";

/**
 * Finds the equivalent tag in another language. Translations keep their tags
 * in the same order, so the tag at position N in the Spanish post maps to the
 * tag at position N in the English post (e.g. "oro" ↔ "gold").
 */
export function getTagCounterpart(
  posts: CollectionEntry<"posts">[],
  tag: string,
  from: Locale,
  to: Locale
): string | undefined {
  if (from === to) return tag;
  for (const post of posts) {
    if (getPostLocale(post) !== from) continue;
    const index = slugifyAll(post.data.tags).indexOf(tag);
    if (index < 0) continue;
    const translation = getTranslation(posts, post, to);
    const translated = translation?.data.tags[index];
    if (translated) return slugifyStr(translated);
  }
  return undefined;
}
