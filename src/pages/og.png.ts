import type { APIRoute } from "astro";
import { renderDefaultOgImage } from "@/utils/ogImage";

export const GET: APIRoute = () => renderDefaultOgImage();
