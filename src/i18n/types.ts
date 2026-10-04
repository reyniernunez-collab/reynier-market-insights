export interface UIStrings {
  /** BCP-47 tag used for <html lang>, og:locale, dates, etc. */
  meta: {
    htmlLang: string;
    ogLocale: string;
    /** Human name of this language, in this language (e.g. "Español"). */
    languageName: string;
    /** Short code shown in the language switcher (e.g. "ES"). */
    shortName: string;
  };
  site: {
    description: string;
  };
  langSwitch: {
    /** aria-label / title for the link that switches TO this language. */
    switchTo: string;
  };
  nav: {
    home: string;
    posts: string;
    tags: string;
    about: string;
    archives: string;
    search: string;
  };
  post: {
    publishedAt: string;
    updatedAt: string;
    sharePostIntro: string;
    sharePostOn: string;
    sharePostViaEmail: string;
    tagLabel: string;
    backToTop: string;
    goBack: string;
    editPage: string;
    previousPost: string;
    nextPost: string;
    readingTime: string;
    keyTakeaways: string;
    sources: string;
    infographic: string;
    openInfographic: string;
    infographicSpanishOnly: string;
    fallbackNotice: string;
    availableIn: string;
  };
  pagination: {
    prev: string;
    next: string;
    page: string;
  };
  home: {
    heroTitle: string;
    heroText: string;
    heroFollowBefore: string;
    heroFollowAfter: string;
    socialLinks: string;
    featured: string;
    recentPosts: string;
    allPosts: string;
  };
  footer: {
    copyright: string;
    allRightsReserved: string;
    disclaimer: string;
  };
  newsletter: {
    title: string;
    text: string;
    placeholder: string;
    button: string;
  };
  pages: {
    tagTitle: string;
    tagDesc: string;

    tagsTitle: string;
    tagsDesc: string;

    postsTitle: string;
    postsDesc: string;

    archivesTitle: string;
    archivesDesc: string;

    searchTitle: string;
    searchDesc: string;
  };
  a11y: {
    skipToContent: string;
    openMenu: string;
    closeMenu: string;
    toggleTheme: string;
    searchPlaceholder: string;
    noResults: string;
    goToPreviousPage: string;
    goToNextPage: string;
  };
  notFound: {
    title: string;
    message: string;
    goHome: string;
  };
}
