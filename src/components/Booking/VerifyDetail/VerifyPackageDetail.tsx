import { useStepContext } from '@/contexts/StepProvider';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { useTranslation } from 'react-i18next';
import { isEmpty } from 'lodash';

import HotelDetail from '../VerifyDetail/HotelDetail';
import ContactInfo from '../VerifyDetail/ContactInfo';
import Payment from '../VerifyDetail/Payment';
import { OrderChooseValue } from '../FillInfomation/constants';
import { packageCreate } from '@/store/booking/bookingAction';
import { getDateFormatTimestamp, getDateNowTimestamp } from '@/utils/helper';

function VerifyPackageDetail() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { bid } = useAppSelector((state) => state.business?.basic_business_info);
  const booking_info = useAppSelector((state) => state.booking?.booking_info);
  const { orderData, guestData, forSomeOne, forOther, viaTravelX, bookFor, specialRequire, arrivalTime, handleClick } =
    useStepContext();
  const handlePayAtHotel = () => {
    /* body data base */
    const bodyData: PackageCreate = {
      bid,
      pid: booking_info?.packageChose?.pid,
      check_in: getDateFormatTimestamp(booking_info?.check_in),
      check_out: getDateFormatTimestamp(booking_info?.check_out),
      adults: booking_info?.adults,
      child: booking_info?.child,
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
    <div className="flex-1">
      <h2 className="text-grey-21 font-bold mb-2 mt-4 lg:mt-0">HMP Master</h2>
      <HotelDetail />
      {/* Order Info */}
      <div>
        <h3 className="font-bold mb-2 mt-6">{t('BOOKING_FORM.STEP2.YOUR_CONTACT_INFORMATION')}:</h3>
        <ContactInfo
          name={orderData?.full_name}
          email={orderData?.mail}
          phone={orderData?.phone_number}
          country={orderData?.country}
        />
      </div>
      {/* Guest info */}
      <div>
        <h3 className="font-bold mb-2 mt-6">{t('BOOKING_FORM.STEP2.GUEST_INFO')}:</h3>
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
          <h3 className="font-bold mb-2 mt-6">{t('BOOKING_FORM.ROOMTYPE.SPECIAL_REQUIREMENTS')}:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 bg-grey-f5 p-4 rounded-sm mb-4">{specialRequire}</div>
        </div>
      )}
      {/* Arrival Plan */}
      {(!isEmpty(arrivalTime?.arrivalAt) || !isEmpty(arrivalTime?.departingFrom) || !isEmpty(arrivalTime?.via)) && (
        <div>
          <h3 className="font-bold mb-2 mt-6">{t('BOOKING_FORM.STEP2.ARRIVAL_PLAN')}:</h3>
          <div className="flex flex-col gap-y-4 bg-grey-f5 p-4 rounded-sm mb-4">
            {!isEmpty(arrivalTime?.arrivalAt) && (
              <div>
                <p>{t('BOOKING_FORM.STEP2.ARRIVAL_AT')}</p>
                <p className="text-base font-bold">{arrivalTime?.arrivalAt}</p>
              </div>
            )}
            {!isEmpty(arrivalTime?.departingFrom) && (
              <div>
                <p>{t('BOOKING_FORM.STEP2.DEPARTING_FROM')}</p>
                <p className="text-base font-bold">{arrivalTime?.departingFrom}</p>
              </div>
            )}
            {!isEmpty(arrivalTime?.via) && (
              <div>
                <p>{t('BOOKING_FORM.STEP2.VIA')}</p>
                <p className="text-base font-bold">{arrivalTime?.via}</p>
              </div>
            )}
          </div>
        </div>
      )}
      <Payment handlePayAtHotel={handlePayAtHotel} />
    </div>
  );
}

export default VerifyPackageDetail;
