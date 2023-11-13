import Link from 'next/link';
import { useParams } from 'next/navigation';
import Path from '@/routes/Path';

export default function ConfirmReservation() {
  const { hotel_slug } = useParams();
  return (
    <div className="flex justify-center my-4">
      <div className="bg-white shadow-custom_2 w-[600px] rounded-2xl p-8">
        <h2 className="font-bold text-center mb-2">THANK YOU!</h2>
        <p className="text-center mb-4">Thank you for choosing us and booking your stay directly on our website.</p>
        <p className="text-center mb-4">
          You are getting the lowest price we offer, with added benefits. Your reservation has been successfully booked,
          and an email confirmation will be sent shortly.
        </p>
        <p className="text-center mb-4">We look forward to having you.</p>
        <div className="text-center mt-12">
          <Link href={Path.HOME(hotel_slug as string)}>
            <button className="text-sm primary-button h-[56px] px-10 rounded-lg">GO BACK TO HOMEPAGE</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
