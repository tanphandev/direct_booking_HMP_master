import Link from 'next/link';
import { Fragment } from 'react';
import { useParams } from 'next/navigation';
import { useLoading } from '@/hooks/useLoading';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

import Path from '@/routes/Path';
import { PACKAGE_CREATE, ROOM_CREATE } from '@/store/common/constants';
import SecondLoading from '@/components/Loading/SecondLoading';
import { useAppSelector } from '@/hooks';
import { isEmpty } from 'lodash';

export default function ConfirmReservation({ currentStep, step }: ConfirmReservationProps) {
  const { t } = useTranslation();
  const { hotel_slug } = useParams();
  const { loading } = useLoading([PACKAGE_CREATE, ROOM_CREATE]);
  const error = useAppSelector((state) => state.booking.error);
  if (!isEmpty(error))
    return (
      <div
        className={classNames('flex justify-center my-4', {
          hidden: currentStep?.stepNumber !== step,
          'back-step-type': currentStep?.type === 'back',
          'next-step-type': currentStep?.type === 'next',
        })}
      >
        <div className="bg-white shadow-custom_2 w-[600px] rounded-2xl p-8">
          <h2 className="font-bold text-center mb-2">OOPS!</h2>
          <p className="text-center mb-4">{error?.response?.data[0]}</p>
          <div className="text-center mt-12">
            <Link href={Path.HOME(hotel_slug as string)}>
              <button className="text-sm primary-button h-[56px] px-10 rounded-lg">
                {t('BOOKING_FORM.STEP3.BACK_TO_HOMEPAGE')}
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  return (
    <div
      className={classNames('flex justify-center my-4', {
        hidden: currentStep?.stepNumber !== step,
        'back-step-type': currentStep?.type === 'back',
        'next-step-type': currentStep?.type === 'next',
      })}
    >
      {loading ? (
        <Fragment>
          <p className="text-center text-grey-21">Processing...</p>
          <SecondLoading isLoading={loading} />
        </Fragment>
      ) : (
        <div className="bg-white shadow-custom_2 w-[600px] rounded-2xl p-8">
          <h2 className="font-bold text-center mb-2">{t('BOOKING_FORM.STEP3.THANK_YOU')}</h2>
          <p className="text-center mb-4">{t('BOOKING_FORM.STEP3.THANK_YOU_P1')}</p>
          <p className="text-center mb-4">{t('BOOKING_FORM.STEP3.THANK_YOU_P2')}</p>
          <p className="text-center mb-4">{t('BOOKING_FORM.STEP3.THANK_YOU_P3')}</p>
          <div className="text-center mt-12">
            <Link href={Path.HOME(hotel_slug as string)}>
              <button className="text-sm primary-button h-[56px] px-10 rounded-lg">
                {t('BOOKING_FORM.STEP3.BACK_TO_HOMEPAGE')}
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
