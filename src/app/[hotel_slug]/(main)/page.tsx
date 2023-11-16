'use client';
import { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useAppDispatch } from '@/hooks';

import BookingChoose from '@/components/BookingChoose/BookingChoose';
import { getBusiness } from '@/store/business/businessAction';

function HomePage() {
  const { hotel_slug } = useParams();
  const router = useRouter();
  console.log(hotel_slug);
  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log('reRender');
    dispatch(getBusiness({ business_slug: hotel_slug, router }));
  }, []);
  return (
    <div className="bg-background_booking bg-repeat bg-cover sm:h-[540px]">
      <BookingChoose />
    </div>
  );
}

export default HomePage;
