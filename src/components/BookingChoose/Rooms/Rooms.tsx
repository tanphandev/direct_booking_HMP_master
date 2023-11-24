import { createRef, useRef, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { useTranslation } from 'react-i18next';

import CheckIn from '../CheckIn/CheckIn';
import PersonQuanity, { PersonQuanityRefProps } from '../PersonQuanity/PersonQuanity';
import { getDateFormatTimestamp, getDateNowTimestamp } from '@/utils/helper';
import { checkCouponCode } from '@/store/business/businessAction';
import { useLoading } from '@/hooks/useLoading';
import { CHECK_COUPON_CODE } from '@/store/common/constants';
import SecondLoading from '@/components/Loading/SecondLoading';
import { getPublicRoomAvailable } from '@/store/room/roomAction';
import Path from '@/routes/Path';

function Rooms() {
  const { hotel_slug } = useParams();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { loading } = useLoading([CHECK_COUPON_CODE]);
  const checkInRef = createRef<RangeDate>();
  const personQuantityRef = useRef<PersonQuanityRefProps>(null);
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

  const handleLoadRoomAvailable = () => {
    const bid = basic_business_info.bid;
    const check_in = checkInRef.current && getDateFormatTimestamp(checkInRef.current?.startDate);
    const check_out = checkInRef.current && getDateFormatTimestamp(checkInRef.current?.endDate);
    const adults = personQuantityRef.current?.adults;
    const child = personQuantityRef.current?.child;
    const datecreated = getDateNowTimestamp();
    dispatch(getPublicRoomAvailable({ bid, check_in, check_out, adults, child, datecreated, hotel_slug, router }));
  };
  return (
    <div>
      <div>
        <CheckIn ref={checkInRef} />
        <PersonQuanity ref={personQuantityRef}/>
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
          <button
            onClick={handleLoadRoomAvailable}
            className="transition-colors w-[150px] h-[56px] text-base font-bold bg-blue-0a hover:bg-blue-09 rounded-md uppercase"
          >
            {t('HOMEPAGE.NEXT')}
          </button>
        </div>
        {/* show loading when check coupon */}
        {loading && <SecondLoading />}
      </div>
    </div>
  );
}

export default Rooms;
