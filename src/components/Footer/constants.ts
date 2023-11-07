import Path from '@/routes/Path';

type NavFooterProps = {
  title: string;
  path: string;
};

export const navFooter: NavFooterProps[] = [
  {
    title: 'About',
    path: Path.ABOUT
  },
  {
    title: 'Frequently Asked Questions',
    path: Path.FAQS
  },
  {
    title: 'English Demo Test',
    path: Path.ENGLIST_DEMO_TEST
  }
];
