import MainLayout from '@/layouts/MainLayout/MainLayout';

function Layout({ children }: { children: React.ReactNode }) {
  return <MainLayout>{children}</MainLayout>;
}

export default Layout;
