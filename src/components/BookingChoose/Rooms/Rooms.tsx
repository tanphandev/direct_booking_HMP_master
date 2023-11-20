import Link from 'next/link';
import { createRef, useRef, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/hooks';

import CheckIn from '../CheckIn/CheckIn';
import PersonQuanity, { PersonQuanityRefProps } from '../PersonQuanity/PersonQuanity';
import Path from '@/routes/Path';
import { getDateFormatTimestamp, getDateNowTimestamp } from '@/utils/helper';
import { checkCouponCode } from '@/store/business/businessAction';
import { useLoading } from '@/hooks/useLoading';
import { CHECK_COUPON_CODE } from '@/store/common/constants';
import SecondLoading from '@/components/Loading/SecondLoading';
import { getPublicRoomAvailable } from '@/store/room/roomAction';
import { toast } from 'react-toastify';

function Rooms() {
  const { hotel_slug } = useParams();
  const router = useRouter();
  const dispatch = useAppDispatch();
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

  const handleLoadRoomAvailable = ()=>{
    const isValid = checkInRef.current && checkInRef.current.isValid;
    const bid = basic_business_info.bid;
    const check_in = checkInRef.current && checkInRef.current.startDate;
    const check_out = checkInRef.current && checkInRef.current.endDate;
    const adults = personQuantityRef.current?.adults&&2;
    const child = personQuantityRef.current?.child&&0;
    const datecreated = getDateNowTimestamp()
    isValid
    ? dispatch(getPublicRoomAvailable({ bid, check_in, check_out,adults,child,datecreated,hotel_slug,router}))
    : toast.error('Check-In Check-Out is invalid');


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
          {/* <Link href={Path.SEARCH(hotel_slug as string)}>
            <button className="transition-colors w-[150px] h-[56px] text-base font-bold bg-blue-0a hover:bg-blue-09 rounded-md">
              NEXT
            </button>
          </Link> */}
          <button onClick={handleLoadRoomAvailable} className="transition-colors w-[150px] h-[56px] text-base font-bold bg-blue-0a hover:bg-blue-09 rounded-md">
              NEXT
            </button>
        </div>
        {/* show loading when check coupon */}
        {loading && <SecondLoading  />}
      </div>
    </div>
  );
}

export default Rooms;
