'use client';
import { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useAppDispatch } from '@/hooks';

import { ToastContainer } from 'react-toastify';
import MainLayout from '@/layouts/MainLayout/MainLayout';
import 'react-toastify/dist/ReactToastify.css';
import { getBusiness } from '@/store/business/businessAction';
import { useLoading } from '@/hooks/useLoading';
import { BUSINESS } from '@/store/common/constants';
import PrimaryLoading from '@/components/Loading/PrimaryLoading';
import '@/i18n/i18n';

function Layout({ children }: { children: React.ReactNode }) {
  const { hotel_slug } = useParams();
  const { loading } = useLoading([BUSINESS]);
  const router = useRouter();
  /* get bussiness info by slug */
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getBusiness({ business_slug: hotel_slug, router }));
  }, []);

  if (loading) return <PrimaryLoading />;
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
