import Link from 'next/link';
import { createRef, useState } from 'react';
import { useParams } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/hooks';

import CheckIn from '../CheckIn/CheckIn';
import PersonQuanity from '../PersonQuanity/PersonQuanity';
import Path from '@/routes/Path';
import { getDateFormatTimestamp, getDateNowTimestamp } from '@/utils/helper';
import { checkCouponCode } from '@/store/business/businessAction';

function Rooms() {
  const dispatch = useAppDispatch();
  const checkInRef = createRef<RangeDate>();
  const { hotel_slug } = useParams();
  const [couponCode, setCouponCode] = useState<string>('');
  const { basic_business_info } = useAppSelector((state) => state.business);


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

  const handleSearch = (checkin: string, checkout: string)=>{
    
  }
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
            placeholder="I have a code"
          />
          <button
            onClick={() => {
              couponCode && handleCheckCouponCode(couponCode);
            }}
            className="transition-colors w-[120px] text-white bg-blue-0a hover:bg-blue-09 font-semibold rounded-r-md"
          >
            APPLY
          </button>
        </div>
        <div className="flex justify-end">

          <Link href={Path.SEARCH(hotel_slug as string,checkInRef.current?.startDate as string , checkInRef.current?.endDate as string)}>
            <button className="transition-colors w-[150px] h-[56px] text-base font-bold bg-blue-0a hover:bg-blue-09 rounded-md">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Rooms;
