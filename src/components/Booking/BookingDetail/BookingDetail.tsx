import ReviewCheckIn from './ReviewCheckIn';
import ReviewPriceSummary from './ReviewPriceSummary';

function BookingDetail() {
  return (
    <div className="w-full lg:w-[300px] lg:ml-8 order-1 lg:order-2">
      <div>
        <h2 className="font-bold mb-2 leading-[1.5]">Your booking details</h2>
        <ReviewCheckIn />
        <ReviewPriceSummary />
      </div>
    </div>
  );
}

export default BookingDetail;
