/**
 * Estimated reading time in minutes for a Markdown body.
 * Strips HTML (e.g. infographic iframes), Markdown syntax and table pipes.
 * Uses 200 words/minute: these posts are dense with figures.
 */
export function getReadingTime(body: string | undefined, wpm = 200): number {
  if (!body) return 1;
  const text = body
    .replace(/<[^>]+>/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[#>*_`|~-]+/g, " ");
  const words = text.split(/\s+/).filter(w => /[\p{L}\p{N}]/u.test(w)).length;
  return Math.max(1, Math.round(words / wpm));
}
