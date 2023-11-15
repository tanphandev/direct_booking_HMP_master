const Path = {
  NOT_FOUND: '/not-found',
  HOME: (hotel_slug: string) => `/${hotel_slug}`,
  BOOKING: (hotel_slug: string) => `/${hotel_slug}/booking`,
  SEARCH: (hotel_slug: string) => `/${hotel_slug}/search`,
  ABOUT: (hotel_slug: string) => `/${hotel_slug}/about`,
  FAQS: (hotel_slug: string) => `/${hotel_slug}/faqs`,
  ENGLIST_DEMO_TEST: (hotel_slug: string) => `/${hotel_slug}/english-test`,
};

const outsidePath = {
  HMP_MASTER: 'https://hmpmaster.com',
};

export { outsidePath };
export default Path;
