import { useStepContext } from '@/contexts/StepProvider';
import BookingLayout from '@/layouts/BookingLayout/BookingLayout';
import HotelDetail from '../VerifyDetail/HotelDetail';
import ContactInfo from '../VerifyDetail/ContactInfo';
import Payment from '../VerifyDetail/Payment';

export default function VerifyDetail() {
  const { orderData, guestData } = useStepContext();
  return (
    <BookingLayout>
      <div className="flex-1">
        <h2 className="text-grey-21 font-bold mb-2 mt-4 lg:mt-0">HMP Master</h2>
        <HotelDetail />
        {/* Order Info */}
        <div>
          <h3 className="font-bold mb-2 mt-6">Your Contact Information:</h3>
          <ContactInfo
            name={orderData?.fullName}
            email={orderData?.email}
            phone={orderData?.phone}
            country={orderData?.country}
          />
        </div>
        {/* Guest info */}
        <div>
          <h3 className="font-bold mb-2 mt-6">Guest Information:</h3>
          {guestData?.map((item: any, index: number) => (
            <ContactInfo
              key={index}
              name={item?.fullName}
              email={item?.email}
              phone={item?.phone}
              country={item?.country}
            />
          ))}
        </div>
        <Payment />
      </div>
    </BookingLayout>
  );
}
