import Link from 'next/link';
import { Fragment } from 'react';
import { useParams } from 'next/navigation';
import { useLoading } from '@/hooks/useLoading';
import classNames from 'classnames';

import Path from '@/routes/Path';
import { PACKAGE_CREATE } from '@/store/common/constants';
import SecondLoading from '@/components/Loading/SecondLoading';

export default function ConfirmReservation({ currentStep, step }: ConfirmReservationProps) {
  const { hotel_slug } = useParams();
  const { loading } = useLoading([PACKAGE_CREATE]);
  return (
    <div
      className={classNames('flex justify-center my-4', {
        hidden: currentStep !== step,
      })}
    >
      {loading ? (
        <Fragment>
          <p className="text-center text-grey-21">Processing...</p>
          <SecondLoading isLoading={loading} />
        </Fragment>
      ) : (
        <div className="bg-white shadow-custom_2 w-[600px] rounded-2xl p-8">
          <h2 className="font-bold text-center mb-2">THANK YOU!</h2>
          <p className="text-center mb-4">Thank you for choosing us and booking your stay directly on our website.</p>
          <p className="text-center mb-4">
            You are getting the lowest price we offer, with added benefits. Your reservation has been successfully
            booked, and an email confirmation will be sent shortly.
          </p>
          <p className="text-center mb-4">We look forward to having you.</p>
          <div className="text-center mt-12">
            <Link href={Path.HOME(hotel_slug as string)}>
              <button className="text-sm primary-button h-[56px] px-10 rounded-lg">GO BACK TO HOMEPAGE</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
