import type { CollectionEntry } from "astro:content";
import { getSortedPosts } from "./getSortedPosts";
import { getPostLocale, getPostSlugFromId } from "./getPostPaths";
import { LOCALES, type Locale } from "@/i18n/locales";

type Post = CollectionEntry<"posts">;

/**
 * Posts to show for a UI locale: one entry per slug, in that language when a
 * translation exists, otherwise the version in the other language (graceful
 * fallback instead of a 404). Sorted newest first; drafts/scheduled excluded.
 */
export function getLocalizedPosts(posts: Post[], locale: Locale): Post[] {
  const visible = getSortedPosts(posts);
  const bySlug = new Map<string, Post>();
  for (const post of visible) {
    const slug = getPostSlugFromId(post.id);
    const current = bySlug.get(slug);
    if (!current) {
      bySlug.set(slug, post);
    } else if (
      getPostLocale(current) !== locale &&
      getPostLocale(post) === locale
    ) {
      bySlug.set(slug, post);
    }
  }
  return getSortedPosts([...bySlug.values()]);
}

/** Returns the translation of `post` in `locale`, if one exists. */
export function getTranslation(
  posts: Post[],
  post: Post,
  locale: Locale
): Post | undefined {
  const slug = getPostSlugFromId(post.id);
  return getSortedPosts(posts).find(
    p => getPostSlugFromId(p.id) === slug && getPostLocale(p) === locale
  );
}

/** Locales in which a real (non-fallback) version of the post exists. */
export function getAvailableLocales(posts: Post[], post: Post): Locale[] {
  return LOCALES.filter(l => getTranslation(posts, post, l));
}

/** True when `post` is shown in a UI locale different from its language. */
export function isFallbackPost(post: Post, locale: Locale): boolean {
  return getPostLocale(post) !== locale;
}
