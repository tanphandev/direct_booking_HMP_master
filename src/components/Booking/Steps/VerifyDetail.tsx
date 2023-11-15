import BookingLayout from '@/layouts/BookingLayout/BookingLayout';
import HotelDetail from '../VerifyDetail/HotelDetail';
import ContactInfo from '../VerifyDetail/ContactInfo';
import Payment from '../VerifyDetail/Payment';

export default function VerifyDetail() {
  return (
    <BookingLayout>
      <div className="flex-1">
        <h2 className="text-grey-21 font-bold mb-2 mt-4 lg:mt-0">HMP Master</h2>
        <HotelDetail />
        <ContactInfo />
        <Payment />
      </div>
    </BookingLayout>
  );
}
