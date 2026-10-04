# Reynier Market Insights

Blog bilingüe (español / inglés) de análisis de mercados de **Reynier Nunez Lopez**, desde Dallas, Texas.
Forex, petróleo, bonos y la Fed: qué pasó, por qué importa y qué vigilo, en unos 5 minutos.

🌐 **Sitio:** https://reyniernunez-collab.github.io/reynier-market-insights/
🇬🇧 **English:** https://reyniernunez-collab.github.io/reynier-market-insights/en/

> Contenido educativo e informativo. No es asesoramiento financiero.

## Stack

- [Astro](https://astro.build/) 7 + Tailwind CSS 4, basado en el tema [AstroPaper](https://github.com/satnaing/astro-paper) (licencia MIT, ver `LICENSE`).
- i18n con el routing nativo de Astro: **español por defecto en la raíz** y **inglés bajo `/en/`**.
- Búsqueda estática con Pagefind, RSS y sitemap por idioma, imágenes OG generadas en el build (satori).
- Fuentes autoalojadas (`@fontsource/inter`, `@fontsource/jetbrains-mono`): el build no descarga nada de Google Fonts.
- Deploy automático a GitHub Pages en cada push a `main` (`.github/workflows/main.yml`).

## Estructura

```text
public/                       # infografías HTML embebidas, favicon, etc.
src/
  content/
    posts/es/<slug>.md        # versión en español
    posts/en/<slug>.md        # versión en inglés (mismo <slug>)
    pages/{es,en}/about.md    # página "Sobre mí / About"
  i18n/lang/{es,en}.ts        # todos los textos de la interfaz
  views/                      # páginas compartidas por ambos idiomas
  pages/                      # rutas ES (raíz) y EN (/en/)
  styles/theme.css            # colores de marca (navy #0a0e17 + naranja #fb923c)
astro-paper.config.ts         # configuración del sitio (redes, newsletter, analítica)
```

## Publicar un post nuevo (en los dos idiomas)

1. Crea `src/content/posts/es/mi-post.md` y `src/content/posts/en/mi-post.md` con **el mismo nombre de archivo**. Así el selector ES/EN y los `hreflang` los enlazan solos.
2. Frontmatter de ejemplo:

   ```yaml
   ---
   title: "Título humano, máx. ~150 caracteres"
   description: "Resumen de 1–2 frases (máx. ~150 caracteres) para Google y redes."
   pubDatetime: 2026-10-05T07:00:00-05:00
   tags:
     - petroleo # en EN: oil
     - fed
   takeaways: # caja "Lo esencial / Key takeaways" (3–5 puntos)
     - "Punto 1"
     - "Punto 2"
   sources: # línea "Fuentes / Sources" (solo fuentes citadas en el texto)
     - "CME FedWatch"
   ---
   ```

3. **Etiquetas:** pon las etiquetas en el **mismo orden** en ES y EN; la etiqueta en la posición N de un idioma se considera la traducción de la posición N del otro.
   Equivalencias usadas: `petroleo↔oil`, `oro↔gold`, `bonos↔bonds`, `bce↔ecb`, `francia↔france`, `acciones↔stocks`, `rendimientos↔yields`, `resumen-de-mercado↔market-wrap`, `geopolitica↔geopolitics`, `mercados↔markets`, `correlaciones↔correlations`. Tickers y siglas (`fed`, `nfp`, `usdjpy`, `brent`, `wti`, `cpi`…) son iguales en los dos idiomas.
4. Si un post solo existe en un idioma, el otro idioma muestra esa versión con un aviso ("Este análisis solo está disponible en inglés") en lugar de dar 404.
5. Infografías: súbelas a `public/` y embébelas con
   `<iframe src="/reynier-market-insights/archivo.html" title="Infografía: …" class="infographic" width="100%" height="1600" loading="lazy"></iframe>`.
   El alto se ajusta automáticamente al contenido.

## Newsletter y analítica (pendiente de decidir proveedor)

Ambos vienen **desactivados** en `astro-paper.config.ts`; no se creó ninguna cuenta.

- **Newsletter:** pon `newsletter.enabled: true` y la URL del formulario de tu proveedor (Buttondown, MailerLite, Substack, ConvertKit…) en `newsletter.formAction`. El formulario aparece en el pie de página en ambos idiomas.
- **Analítica:** pon `analytics.provider` en `"plausible"`, `"umami"` o `"goatcounter"` y completa el dominio / ID. El script solo se carga cuando está configurado.

## Comandos

Requiere Node 24 y pnpm 11.

| Comando            | Qué hace                                                           |
| :----------------- | :----------------------------------------------------------------- |
| `pnpm install`     | Instala dependencias                                               |
| `pnpm run dev`     | Servidor local en `http://localhost:4321/reynier-market-insights/` |
| `pnpm run build`   | `astro check` + build + índice de búsqueda en `./dist/`            |
| `pnpm run preview` | Sirve el build local                                               |
| `pnpm run lint`    | ESLint                                                             |
| `pnpm run format`  | Formatea con Prettier (`format:check` lo valida en CI)             |

## Licencia y créditos

Código basado en [AstroPaper](https://github.com/satnaing/astro-paper) de Sat Naing (MIT). El contenido de los análisis es © Reynier Nunez Lopez.
