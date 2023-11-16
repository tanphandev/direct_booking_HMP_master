'use client';
import { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/hooks';

import BookingChoose from '@/components/BookingChoose/BookingChoose';
import { getBusiness } from '@/store/business/businessAction';

function HomePage() {
  const { hotel_slug } = useParams();
  const router = useRouter();
  const { setting } = useAppSelector((state) => state.business);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getBusiness({ business_slug: hotel_slug, router }));
  }, []);
  return (
    <div
      className="bg-repeat bg-cover sm:h-[540px]"
      style={{
        backgroundImage: `url(${setting?.db_home_background?.uri_full})`,
      }}
    >
      <BookingChoose />
    </div>
  );
}

export default HomePage;
