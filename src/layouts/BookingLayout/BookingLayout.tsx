import BookingDetail from '@/components/Booking/BookingDetail/BookingDetail';

function BookingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full">
      {children}
      <BookingDetail />
    </div>
  );
}

export default BookingLayout;
