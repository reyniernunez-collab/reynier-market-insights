import { getRelativeLocaleUrl } from "astro:i18n";
import { stripBase, stripLocale } from "@/utils/withBase";

/** Supported content/UI languages. Spanish is the default (served at the root). */
export const LOCALES = ["es", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "es";

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && LOCALES.includes(value as Locale);
}

/** Normalizes Astro.currentLocale (or any string) into a supported locale. */
export function toLocale(value: string | undefined | null): Locale {
  return isLocale(value) ? value : DEFAULT_LOCALE;
}

export function otherLocales(locale: Locale): Locale[] {
  return LOCALES.filter(l => l !== locale);
}

export type Alternate = { locale: Locale; href: string };

/** Adds a trailing slash to page URLs (not to files such as rss.xml). */
export function withTrailingSlash(href: string): string {
  if (href.endsWith("/")) return href;
  const last = href.split("/").pop() ?? "";
  return last.includes(".") ? href : `${href}/`;
}

/** Localized URL for a logical path such as "posts/foo" or "" (home). */
export function localizedUrl(locale: Locale, path: string): string {
  return withTrailingSlash(
    getRelativeLocaleUrl(locale, path.replace(/^\/+/, ""))
  );
}

/**
 * Default language alternates for the current page: the same logical path in
 * every locale. Pages whose path differs between languages (e.g. tag pages)
 * or that may not exist in every language (posts) pass their own list.
 */
export function getDefaultAlternates(url: URL, locale: Locale): Alternate[] {
  const rel = stripBase(url.pathname).replace(/\/+$/, "") || "/";
  const path = stripLocale(rel, locale);
  return LOCALES.map(l => ({ locale: l, href: localizedUrl(l, path) }));
}
