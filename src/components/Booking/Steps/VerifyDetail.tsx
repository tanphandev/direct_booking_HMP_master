import { useStepContext } from '@/contexts/StepProvider';
import { useAppDispatch, useAppSelector } from '@/hooks';
import classNames from 'classnames';
import { isEmpty } from 'lodash';

import BookingLayout from '@/layouts/BookingLayout/BookingLayout';
import HotelDetail from '../VerifyDetail/HotelDetail';
import ContactInfo from '../VerifyDetail/ContactInfo';
import Payment from '../VerifyDetail/Payment';
import { OrderChooseValue } from '../FillInfomation/constants';
import { packageCreate } from '@/store/booking/bookingAction';
import { getDateFormatTimestamp, getDateNowTimestamp } from '@/utils/helper';

export default function VerifyDetail({ currentStep, step }: VerifyDetailProps) {
  const dispatch = useAppDispatch();
  const { bid } = useAppSelector((state) => state.business?.basic_business_info);
  const { check_in, check_out, adults, child, packageChose } = useAppSelector((state) => state.booking?.booking_info);
  const { orderData, guestData, forSomeOne, forOther, viaTravelX, bookFor, specialRequire, arrivalTime, handleClick } =
    useStepContext();
  const handlePayAtHotel = () => {
    /* body data base */
    const bodyData: PackageCreate = {
      bid,
      pid: packageChose?.pid,
      check_in: getDateFormatTimestamp(check_in),
      check_out: getDateFormatTimestamp(check_out),
      adults: adults,
      child: child,
      client_info: {
        ...orderData,
        book_for: bookFor,
      },
      guest_stay: guestData,
      datecreated: getDateNowTimestamp(),
    };

    /* add viaTravelX field */
    if (viaTravelX) {
      bodyData.client_info.via_travelx = 1;
    }

    /* check book for to add for_someone or for_other field */
    if (bookFor === OrderChooseValue.VALUE2) {
      bodyData.client_info.for_someone = forSomeOne;
    } else if (bookFor === OrderChooseValue.VALUE3) {
      bodyData.client_info.for_other = forOther;
    }
    /* add special require field */
    specialRequire && (bodyData.special_requirements = specialRequire);

    /* add arrival time */
    !isEmpty(arrivalTime.arrivalAt) && (bodyData.res_arrival_at = arrivalTime.arrivalAt);
    !isEmpty(arrivalTime.departingFrom) && (bodyData.res_departing_from = arrivalTime.departingFrom);
    !isEmpty(arrivalTime.via) && (bodyData.res_departing_via = arrivalTime.via);

    /* call api */
    dispatch(packageCreate({ bodyData }));
    /* next step */
    handleClick('next');
  };
  return (
    <div
      className={classNames({
        hidden: currentStep?.stepNumber !== step,
        'back-step-type': currentStep?.type === 'back',
        'next-step-type': currentStep?.type === 'next',
      })}
    >
      <BookingLayout>
        <div className="flex-1">
          <h2 className="text-grey-21 font-bold mb-2 mt-4 lg:mt-0">HMP Master</h2>
          <HotelDetail />
          {/* Order Info */}
          <div>
            <h3 className="font-bold mb-2 mt-6">Your Contact Information:</h3>
            <ContactInfo
              name={orderData?.full_name}
              email={orderData?.mail}
              phone={orderData?.phone_number}
              country={orderData?.country}
            />
          </div>
          {/* Guest info */}
          <div>
            <h3 className="font-bold mb-2 mt-6">Guest Information:</h3>
            {guestData?.map((item: any, index: number) => (
              <ContactInfo
                key={index}
                name={item?.full_name}
                email={item?.mail}
                phone={item?.phone_number}
                country={item?.country}
              />
            ))}
          </div>
          {/* Special requirements */}
          {!isEmpty(specialRequire) && (
            <div>
              <h3 className="font-bold mb-2 mt-6">Special requirements:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 bg-grey-f5 p-4 rounded-sm mb-4">{specialRequire}</div>
            </div>
          )}
          {/* Arrival Plan */}
          {(!isEmpty(arrivalTime?.arrivalAt) || !isEmpty(arrivalTime?.departingFrom) || !isEmpty(arrivalTime?.via)) && (
            <div>
              <h3 className="font-bold mb-2 mt-6">Arrival Plan:</h3>
              <div className="flex flex-col gap-y-4 bg-grey-f5 p-4 rounded-sm mb-4">
                {!isEmpty(arrivalTime?.arrivalAt) && (
                  <div>
                    <p>Arrival at</p>
                    <p className="text-base font-bold">{arrivalTime?.arrivalAt}</p>
                  </div>
                )}
                {!isEmpty(arrivalTime?.departingFrom) && (
                  <div>
                    <p>Departing from</p>
                    <p className="text-base font-bold">{arrivalTime?.departingFrom}</p>
                  </div>
                )}
                {!isEmpty(arrivalTime?.via) && (
                  <div>
                    <p>Via</p>
                    <p className="text-base font-bold">{arrivalTime?.via}</p>
                  </div>
                )}
              </div>
            </div>
          )}
          <Payment handlePayAtHotel={handlePayAtHotel} />
        </div>
      </BookingLayout>
    </div>
  );
}
