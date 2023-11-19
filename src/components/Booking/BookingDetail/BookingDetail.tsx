import { useAppSelector } from '@/hooks';
import { useParams, useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { isEmpty } from 'lodash';

import ReviewCheckIn from './ReviewCheckIn';
import ReviewPriceSummary from './ReviewPriceSummary';
import Path from '@/routes/Path';

function BookingDetail() {
  const router = useRouter();
  const { hotel_slug } = useParams();
  const { booking_info, your_booking_price } = useAppSelector((state) => state.booking);
  if (isEmpty(booking_info) || isEmpty(your_booking_price)) {
    router.push(Path.HOME(hotel_slug as string));
    toast.info('Your session has expired. Redirecting to the Home page...');
  }
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
