// English version (/en/)
import type { APIRoute } from "astro";
import type { CollectionEntry } from "astro:content";
import { getOgImagePaths } from "@/utils/staticPaths";
import { renderPostOgImage } from "@/utils/ogImage";

export async function getStaticPaths() {
  return getOgImagePaths("en");
}

export const GET: APIRoute = async ({ props }) =>
  renderPostOgImage(props as CollectionEntry<"posts">);
