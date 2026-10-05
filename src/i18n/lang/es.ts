import type { UIStrings } from "../types";

export default {
  meta: {
    htmlLang: "es",
    ogLocale: "es_ES",
    languageName: "Español",
    shortName: "ES",
  },
  site: {
    description:
      "Los mercados en 5 minutos: qué pasó, por qué importa y qué vigilo. Sin hype, solo lo que importa.",
  },
  langSwitch: {
    switchTo: "Leer esta página en español",
  },
  nav: {
    home: "Inicio",
    posts: "Artículos",
    tags: "Etiquetas",
    about: "Sobre mí",
    archives: "Archivo",
    search: "Buscar",
  },
  post: {
    publishedAt: "Publicado el",
    updatedAt: "Actualizado",
    sharePostIntro: "Comparte este artículo:",
    sharePostOn: "Compartir en {{platform}}",
    sharePostViaEmail: "Compartir por correo",
    tagLabel: "Etiquetas",
    backToTop: "Volver arriba",
    goBack: "Volver",
    editPage: "Editar página",
    previousPost: "Artículo anterior",
    nextPost: "Artículo siguiente",
    readingTime: "{{minutes}} min de lectura",
    readMore: "Leer",
    keyTakeaways: "Lo esencial",
    sources: "Fuentes",
    infographic: "Infografía",
    openInfographic: "Abrir la infografía a pantalla completa",
    infographicSpanishOnly: "La infografía está disponible solo en español.",
    fallbackNotice:
      "Este artículo todavía no está disponible en español. Estás leyendo la versión original en inglés.",
    availableIn: "También disponible en",
  },
  pagination: {
    prev: "Anterior",
    next: "Siguiente",
    page: "Página",
  },
  home: {
    heroTitle: "Los mercados en 5 minutos",
    heroText:
      "Sin hype, solo lo que importa: qué pasó, por qué importa y qué estoy vigilando en macro, divisas, tasas, petróleo y oro.",
    heroFollowBefore: "Análisis diario desde Dallas, Texas. Sígueme en",
    heroFollowAfter: "para actualizaciones en tiempo real.",
    socialLinks: "Redes",
    featured: "Destacados",
    recentPosts: "Últimos análisis",
    allPosts: "Todos los artículos",
  },
  footer: {
    copyright: "Copyright",
    allRightsReserved: "Todos los derechos reservados.",
    disclaimer:
      "Contenido educativo e informativo. Nada de lo publicado aquí es asesoría financiera ni una recomendación de compra o venta de ningún activo. Operar conlleva riesgo de pérdida; haz tu propia investigación.",
  },
  newsletter: {
    title: "Recibe el análisis por correo",
    text: "Un correo con lo que importa en los mercados. Sin spam.",
    placeholder: "tu@correo.com",
    button: "Suscribirme",
  },
  pages: {
    tagTitle: "Etiqueta",
    tagDesc: "Todos los artículos con la etiqueta",

    tagsTitle: "Etiquetas",
    tagsDesc: "Todos los temas que cubro.",

    postsTitle: "Artículos",
    postsDesc:
      "Todos mis análisis de mercado, del más reciente al más antiguo.",

    archivesTitle: "Archivo",
    archivesDesc: "Todos los artículos, agrupados por mes.",

    searchTitle: "Buscar",
    searchDesc: "Busca cualquier artículo…",
  },
  a11y: {
    skipToContent: "Saltar al contenido",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    toggleTheme: "Cambiar tema claro/oscuro",
    searchPlaceholder: "Buscar artículos...",
    noResults: "No se encontraron resultados",
    goToPreviousPage: "Ir a la página anterior",
    goToNextPage: "Ir a la página siguiente",
  },
  notFound: {
    title: "404 No encontrado",
    message: "Página no encontrada",
    goHome: "Volver al inicio",
  },
} satisfies UIStrings;
