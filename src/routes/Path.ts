const Path = {
  NOT_FOUND: '/not-found',
  HOME: (hotel_slug: string) => `/${hotel_slug}`,
  BOOKING: (hotel_slug: string) => `/${hotel_slug}/booking`,
  // SEARCH: (hotel_slug: string) => `/${hotel_slug}/search`,
  SEARCH: (hotel_slug: string, checkin: string, checkout: any) =>
  `/${hotel_slug}/search?checkin=${checkin}&checkout=${checkout}`,
  ABOUT: (hotel_slug: string) => `/${hotel_slug}/about`,
  FAQS: (hotel_slug: string) => `/${hotel_slug}/faqs`,
  ENGLIST_DEMO_TEST: (hotel_slug: string) => `/${hotel_slug}/english_test`,
  GET_PAGE_BY_NAME: (hotel_slug: string, page_name: string) => `/${hotel_slug}/${page_name}`,
 
};

const outsidePath = {
  HMP_MASTER: 'https://hmpmaster.com',
};

export { outsidePath };
export default Path;
