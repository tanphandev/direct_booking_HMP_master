import { useParams, useRouter } from 'next/navigation';

import CheckIn from '../CheckIn/CheckIn';
import PackageItemDetail from '../PackageOption/PackageItemDetail';
import PersonQuanity, { PersonQuanityRefProps } from '../PersonQuanity/PersonQuanity';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { useRef } from 'react';
import { packageCalculatePrice } from '@/store/booking/bookingAction';
import { toast } from 'react-toastify';
import SecondLoading from '@/components/Loading/SecondLoading';
import { useLoading } from '@/hooks/useLoading';
import { PACKAGE_CAL_PRICE } from '@/store/common/constants';
import { getBookingInfo } from '@/store/booking/bookingSlice';

function ReviewPackage({ packageChose, setIsChoosePackage }: PackageProps) {
  const { hotel_slug } = useParams();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const checkInRef = useRef<RangeDate>(null);
  const personQuantityRef = useRef<PersonQuanityRefProps>(null);
  const { loading } = useLoading([PACKAGE_CAL_PRICE]);
  const { basic_business_info } = useAppSelector((state) => state.business);
  const handleCalculatePrice = () => {
    const isValid = checkInRef.current && checkInRef.current.isValid;
    const bid = basic_business_info.bid;
    const pid = packageChose?.pid;
    const check_in = checkInRef.current && checkInRef.current.startDate;
    const check_out = checkInRef.current && checkInRef.current.endDate;
    const adults = personQuantityRef.current?.adults;
    const child = personQuantityRef.current?.child;

    /* store booking_info */
    dispatch(
      getBookingInfo({
        check_in,
        check_out,
        night: packageChose?.packages_night_stay,
      }),
    );

    /* call api PackageCalPrice */
    isValid
      ? dispatch(packageCalculatePrice({ bid, pid, check_in, check_out, adults, child, hotel_slug, router }))
      : toast.error('Check-In Check-Out is invalid');
  };
  console.log('loading', loading);
  return (
    <div className="flex flex-col sm:flex-row gap-y-4 sm:gap-0">
      <PackageItemDetail
        isActive={true}
        packageDetail={packageChose!}
        className="w-full h-[320px] sm:w-[250px] sm:h-[320px]"
      />
      <div className="flex-1 sm:ml-4">
        <CheckIn ref={checkInRef} quantityNight={packageChose?.packages_night_stay} isValidate={true} />
        <PersonQuanity ref={personQuantityRef} />
        <div className="flex justify-end">
          <button
            onClick={() => {
              setIsChoosePackage && setIsChoosePackage(false);
            }}
            className="transition-colors w-[150px] h-[56px] text-base font-bold text-grey-21 bg-white hover:bg-grey-d9 rounded-md"
          >
            BACK
          </button>
          <SecondLoading isLoading={loading}>
            <button
              onClick={handleCalculatePrice}
              className="transition-colors w-[150px] h-[56px] text-base font-bold text-white bg-blue-0a hover:bg-blue-09 rounded-md ml-2"
            >
              NEXT
            </button>
          </SecondLoading>
        </div>
      </div>
    </div>
  );
}

export default ReviewPackage;
