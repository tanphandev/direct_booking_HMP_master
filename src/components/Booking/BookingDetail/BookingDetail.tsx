import ReviewCheckIn from './ReviewCheckIn';
import ReviewPriceSummary from './ReviewPriceSummary';

function BookingDetail() {
  return (
    <div className="w-[300px] ml-8">
      <div>
        <h2 className="font-bold mb-2 leading-[1.5]">Your booking details</h2>
        <ReviewCheckIn />
        <ReviewPriceSummary />
      </div>
    </div>
  );
}

export default BookingDetail;
