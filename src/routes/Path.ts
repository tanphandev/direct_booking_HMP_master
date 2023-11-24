const Path = {
  NOT_FOUND: '/not-found',
  HOME: (hotel_slug: string) => `/${hotel_slug}`,
  BOOKING: (hotel_slug: string) => `/${hotel_slug}/booking`,
  ABOUT: (hotel_slug: string) => `/${hotel_slug}/about`,
  FAQS: (hotel_slug: string) => `/${hotel_slug}/faqs`,
  ENGLIST_DEMO_TEST: (hotel_slug: string) => `/${hotel_slug}/english_test`,
  GET_PAGE_BY_NAME: (hotel_slug: string, page_name: string) => `/${hotel_slug}/${page_name}`,
  SEARCH_RESULT: (hotel_slug: string, check_in: string, check_out: string, adults: number, children: number) =>
  `/${hotel_slug}/search?checkin=${check_in}&checkout=${check_out}&adults=${adults}&children=${children}`,

};

const outsidePath = {
  HMP_MASTER: 'https://hmpmaster.com',
};

export { outsidePath };
export default Path;
