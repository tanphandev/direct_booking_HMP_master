import Link from 'next/link';
import { createRef, useState } from 'react';
import { useParams } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { useTranslation } from 'react-i18next';

import CheckIn from '../CheckIn/CheckIn';
import PersonQuanity from '../PersonQuanity/PersonQuanity';
import Path from '@/routes/Path';
import { getDateFormatTimestamp, getDateNowTimestamp } from '@/utils/helper';
import { checkCouponCode } from '@/store/business/businessAction';
import { useLoading } from '@/hooks/useLoading';
import { CHECK_COUPON_CODE } from '@/store/common/constants';
import SecondLoading from '@/components/Loading/SecondLoading';

function Rooms() {
  const { hotel_slug } = useParams();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { loading } = useLoading([CHECK_COUPON_CODE]);
  const checkInRef = createRef<RangeDate>();
  const { basic_business_info } = useAppSelector((state) => state.business);
  const [couponCode, setCouponCode] = useState<string>('');

  /* check coupon code */

  const handleCheckCouponCode = (code: string) => {
    const checkIn = checkInRef.current?.startDate;
    const bodyData = {
      bid: basic_business_info?.bid,
      check_in: getDateFormatTimestamp(checkIn),
      code,
      datecreated: getDateNowTimestamp(),
    };
    dispatch(checkCouponCode({ bodyData }));
  };

  return (
    <div>
      <div>
        <CheckIn ref={checkInRef} />
        <PersonQuanity />
        <div className="h-[80px] flex bg-white rounded-md mb-2">
          <input
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            className="flex-1 h-full text-grey-21 text-lg rounded-l-md outline-none px-4"
            placeholder={t('HOMEPAGE.I_HAVE_CODE')}
          />
          <button
            onClick={() => {
              couponCode && handleCheckCouponCode(couponCode);
            }}
            className="transition-colors w-[120px] text-white bg-blue-0a hover:bg-blue-09 font-semibold rounded-r-md uppercase"
          >
            {t('BOOKING_FORM.SIDEBAR.PROMO_CODE_APPLY')}
          </button>
        </div>
        <div className="flex justify-end">
          <Link
            href={Path.SEARCH(
              hotel_slug as string,
              checkInRef.current?.startDate as string,
              checkInRef.current?.endDate as string,
            )}
          >
            <button className="transition-colors w-[150px] h-[56px] text-base font-bold bg-blue-0a hover:bg-blue-09 rounded-md uppercase">
              {t('HOMEPAGE.NEXT')}
            </button>
          </Link>
        </div>
        {/* show loading when check coupon */}
        {loading && <SecondLoading />}
      </div>
    </div>
  );
}

export default Rooms;
