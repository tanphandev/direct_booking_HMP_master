import Path from '@/routes/Path';

type NavFooterProps = {
  title: string;
  path: any;
};

export const navFooter: NavFooterProps[] = [
  {
    title: 'About',
    path: (hotel_slug: string) => Path.ABOUT(hotel_slug)
  },
  {
    title: 'Frequently Asked Questions',
    path: (hotel_slug: string) => Path.FAQS(hotel_slug)
  },
  {
    title: 'English Demo Test',
    path: (hotel_slug: string) => Path.ENGLIST_DEMO_TEST(hotel_slug)
  }
];
