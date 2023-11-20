import { useAppSelector } from '@/hooks';

import ReviewCheckIn from './ReviewCheckIn';
import ReviewPriceSummary from './ReviewPriceSummary';

function BookingDetail() {
  const { booking_info, your_booking_price } = useAppSelector((state) => state.booking);

  return (
    <div className="w-full lg:w-[300px] lg:ml-8 order-1 lg:order-2">
      <div>
        <h2 className="font-bold mb-2 leading-[1.5]">Your booking details</h2>
        <ReviewCheckIn
          checkIn={booking_info?.check_in}
          checkOut={booking_info?.check_out}
          night={booking_info?.night}
        />
        <ReviewPriceSummary data={your_booking_price} />
      </div>
    </div>
  );
}

export default BookingDetail;
