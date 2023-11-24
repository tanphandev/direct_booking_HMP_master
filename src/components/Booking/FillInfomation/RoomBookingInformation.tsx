import { createRef, useEffect, useRef } from 'react';
import { useStepContext } from '@/contexts/StepProvider';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '@/hooks';
import { isEmpty } from 'lodash';

import AdditionalInformation, { BookForRef } from './AdditionalInformation';
import ArrivalTime from './ArrivalTime';
import InformationForm from './InfomationForm';
import { SpecialRequireRefType } from './SpecialRequire';
import StayManagementCheckbox from './StayManagementCheckbox';
import { scrollOnTop, trimObjectValues } from '@/utils/helper';
import { toast } from 'react-toastify';
import GuestOfRoom from './GuestOfRoom';

function RoomBookingInformation() {
  const { t } = useTranslation();
  const { booking_room_info } = useAppSelector((state) => state.booking);
  const orderFormRef = createRef<any>();
  const guestRoomsRef = useRef<any[]>([]);
  const specialRequiresRef = useRef<SpecialRequireRefType[]>([]);
  const forSomeOneRef = createRef<any>();
  const bookForRef = createRef<BookForRef>();
  const viaTravelXRef = createRef<HTMLInputElement>();
  const arrivalTImeRef = createRef<BaseRefProps<ArrivalTimeType>>();
  const {
    handleClick,
    orderData,
    setOrderData,
    setGuestData,
    setForSomeOne,
    setForOther,
    setBookFor,
    setViaTravelX,
    setSpecialRequire,
    setArrivalTime,
    setRoomTypes,
  } = useStepContext();

  /* set data form*/
  useEffect(() => {
    orderData && orderFormRef.current.formik.setValues(orderData);
  }, []);

  /* validate form */
  const handleSubmit = () => {
    orderFormRef.current.formik.submitForm();
    forSomeOneRef?.current?.formik?.submitForm();
    guestRoomsRef?.current?.map((guestOfRoom) => {
      guestOfRoom?.formik?.submitForm();
    });
    checkNextStep();
  };

  /* check form is valid or not */
  const checkNextStep = () => {
    const checkGuestOfRoomisValidOrNot = () => {
      for (let guestRoom of guestRoomsRef?.current) {
        if (!guestRoom?.formik?.dirty || !guestRoom?.formik?.isValid) return false;
      }
      return true;
    };
    /* check form valid or not */
    const isOrderFormValid = orderFormRef.current?.formik?.dirty && orderFormRef.current?.formik?.isValid;
    const isOrderAdditionalInfoFormValid =
      (forSomeOneRef.current?.formik?.dirty && forSomeOneRef.current?.formik?.isValid) ?? true;
    const isGuestRoomsValid = checkGuestOfRoomisValidOrNot();

    if (isOrderFormValid && isOrderAdditionalInfoFormValid && isGuestRoomsValid) {
      /* store Order info */
      setOrderData(trimObjectValues(orderFormRef.current?.formik?.values));
      /* store roomtype */
      const roomTypeTemp = [...booking_room_info?.room_types];
      roomTypeTemp?.forEach((room, index) => {
        roomTypeTemp[index] = {
          ...room,
          guest_stay: [guestRoomsRef?.current[index]?.formik?.values],
        };
        if (!isEmpty(specialRequiresRef?.current[index]?.value)) {
          roomTypeTemp[index].special_requirements = [specialRequiresRef?.current[index]?.value?.trim()];
        }
      });
      setRoomTypes(roomTypeTemp);

      /* set guest data */
      //reset guest Data
      setGuestData([]);
      guestRoomsRef?.current?.forEach((guestRoom) => {
        setGuestData((preValue: any) => [...preValue, trimObjectValues(guestRoom?.formik?.values)]);
      });
      /* store for someone info*/
      setForSomeOne(trimObjectValues(forSomeOneRef.current?.formik?.values));
      /* store for orther */
      setForOther(bookForRef.current?.forOtherRef?.current?.value?.trim());
      /* store via travelX */
      setViaTravelX(viaTravelXRef.current?.checked);
      /* store book for */
      setBookFor(bookForRef.current?.value);
      /* store arrival time */
      setArrivalTime(arrivalTImeRef.current?.value);
      /* handle next event*/
      handleClick('next');
    } else {
      scrollOnTop();
      toast.error('Please enter Information to continue!');
    }
  };

  /* handle use order data */
  const handleUseOrderData = (guestFormIndex: number) => {
    console.log('guestFormIndex', guestFormIndex);
    const isOrderFormValid = orderFormRef.current?.formik?.dirty && orderFormRef.current?.formik?.isValid;
    /* validate order form if it is invalid */
    if (!isOrderFormValid) {
      orderFormRef.current.formik.submitForm();
      return;
    }
    /* set data from order data */
    guestRoomsRef.current[guestFormIndex]?.formik?.setValues(orderFormRef.current.formik.values);
  };
  return (
    <div className="flex-1">
      <h2 className="font-bold mb-2 mt-6 lg:mt-0">{t('BOOKING_FORM.STEP1.INFORMATION_TITLE')}</h2>
      <InformationForm ref={orderFormRef} type="order" />
      <AdditionalInformation ref={bookForRef} forSomeOneRef={forSomeOneRef} />
      <StayManagementCheckbox ref={viaTravelXRef} />
      {booking_room_info?.room_types?.map((roomItem: any, index: number) => (
        <GuestOfRoom
          key={index}
          title={roomItem?.title}
          guestId={`guest-room-${index}`}
          guestFormRef={(el: any) => {
            if (el) {
              guestRoomsRef.current[index] = el;
            }
          }}
          guestFormIndex={index}
          handleUseOrderData={handleUseOrderData}
          roomTypeId={roomItem?.room_type_id as number}
          specialRequireRef={(el: any) => {
            if (el) {
              specialRequiresRef.current[index] = el;
            }
          }}
        />
      ))}
      <ArrivalTime ref={arrivalTImeRef} />
      <div className="text-end mt-8">
        <button
          onClick={() => {
            handleSubmit();
          }}
          className="primary-button h-9 rounded-md"
        >
          {t('BOOKING_FORM.STEP1.NEXT_STEP')}
        </button>
      </div>
    </div>
  );
}

export default RoomBookingInformation;
