import type { CollectionEntry } from "astro:content";
import { isLocale, localizedUrl, type Locale } from "@/i18n/locales";
import config from "@/config";

/**
 * Posts live in `src/content/posts/<locale>/<slug>.md`, so a post id looks
 * like `es/asia-jueves-1001`. The slug (without the locale folder) is shared by
 * every translation of the same post.
 */
export function getPostSlugFromId(id: string): string {
  const segments = id.split("/").filter(Boolean);
  if (segments.length > 1 && isLocale(segments[0])) segments.shift();
  return segments.join("/");
}

/** Language of a post, derived from its folder. */
export function getPostLocale(
  post: Pick<CollectionEntry<"posts">, "id">
): Locale {
  const first = post.id.split("/")[0];
  return isLocale(first) ? first : (config.site.lang as Locale);
}

/** Route param for `getStaticPaths` (no base, no locale), e.g. `/my-post`. */
export function getPostSlug(id: string, _filePath?: string): string {
  return `/${getPostSlugFromId(id)}`;
}

/**
 * Navigable URL for a post in the given UI locale, including the Astro base.
 * e.g. `/reynier-market-insights/posts/my-post/` or `.../en/posts/my-post/`
 */
export function getPostUrl(
  id: string,
  _filePath: string | undefined,
  locale: string | undefined = config.site.lang
): string {
  const loc = (isLocale(locale) ? locale : config.site.lang) as Locale;
  return localizedUrl(loc, `posts/${getPostSlugFromId(id)}`);
}
