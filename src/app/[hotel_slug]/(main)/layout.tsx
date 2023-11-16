import { ToastContainer } from 'react-toastify';
import MainLayout from '@/layouts/MainLayout/MainLayout';
import 'react-toastify/dist/ReactToastify.css';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <MainLayout>
      <ToastContainer
        position="top-right"
        autoClose={800}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {children}
    </MainLayout>
  );
}

export default Layout;
