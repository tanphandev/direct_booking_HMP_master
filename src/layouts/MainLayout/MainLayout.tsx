import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
      {/* <TotalPay></TotalPay> */}
      <Footer />
    </div>
  );
}

export default MainLayout;
