'use client';
import { useAppSelector } from '@/hooks';
import BookingChoose from '@/components/BookingChoose/BookingChoose';
function HomePage() {
  const { setting } = useAppSelector((state) => state.business);
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
