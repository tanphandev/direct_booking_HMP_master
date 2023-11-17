import BookingDetail from '@/components/Booking/BookingDetail/BookingDetail';

function BookingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col lg:flex-row w-full">
      <div className="flex-1 order-2 lg:order-1">{children}</div>
      <BookingDetail />
    </div>
  );
}

export default BookingLayout;
