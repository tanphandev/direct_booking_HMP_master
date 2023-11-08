const Path = {
  NOT_FOUND: '/not-found',
  HOME: (hottel_slug: string) => `/${hottel_slug}`,
  ABOUT: (hottel_slug: string) => `/${hottel_slug}/about`,
  FAQS: (hottel_slug: string) => `/${hottel_slug}/faqs`,
  ENGLIST_DEMO_TEST: (hottel_slug: string) => `/${hottel_slug}/english-test`
};

export default Path;
