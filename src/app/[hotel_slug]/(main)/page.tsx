'use client';
import { useAppDispatch, useAppSelector } from '@/hooks';
import BookingChoose from '@/components/BookingChoose/BookingChoose';
import { useEffect } from 'react';
import { getBookingPackages } from '@/store/booking/bookingAction';
import { getDateNowTimestamp } from '@/utils/helper';

function HomePage() {
  const { setting } = useAppSelector((state) => state.business);
  const { basic_business_info } = useAppSelector((state) => state.business);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getBookingPackages({ bid: basic_business_info.bid, datecreated: getDateNowTimestamp() }));
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
