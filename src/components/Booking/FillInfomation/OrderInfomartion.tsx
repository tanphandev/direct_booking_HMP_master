import { createRef, useEffect } from 'react';
import { useStepContext } from '@/contexts/StepProvider';

import AdditionalInformation, { BookForRef } from './AdditionalInformation';
import ArrivalTime from './ArrivalTime';
import InformationForm from './InfomationForm';
import InformationOfGuests from './InformationOfGuests';
import SpecialRequire, { SpecialRequireRefType } from './SpecialRequire';
import StayManagementCheckbox from './StayManagementCheckbox';
import { scrollOnTop, trimObjectValues } from '@/utils/helper';
import { toast } from 'react-toastify';

function OrderInfomation() {
  const orderFormRef = createRef<any>();
  const forSomeOneRef = createRef<any>();
  const bookForRef = createRef<BookForRef>();
  const viaTravelXRef = createRef<HTMLInputElement>();
  const guestFormRef = createRef<any>();
  const additionalGuestFormRef = createRef<any>();
  const specialRequireRef = createRef<SpecialRequireRefType>();
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
  } = useStepContext();

  /* set data form*/
  useEffect(() => {
    orderData && orderFormRef.current.formik.setValues(orderData);
  }, []);

  /* validate form */
  const handleSubmit = () => {
    orderFormRef.current.formik.submitForm();
    forSomeOneRef?.current?.formik?.submitForm();
    guestFormRef.current.formik.submitForm();
    additionalGuestFormRef?.current?.formik?.submitForm();
    checkNextStep();
  };

  /* check form is valid or not */
  const checkNextStep = () => {
    /* check form valid or not */
    const isOrderFormValid = orderFormRef.current?.formik?.dirty && orderFormRef.current?.formik?.isValid;
    const isOrderAdditionalInfoFormValid =
      (forSomeOneRef.current?.formik?.dirty && forSomeOneRef.current?.formik?.isValid) ?? true;
    const isGuestFormValid = guestFormRef.current?.formik?.dirty && guestFormRef.current?.formik?.isValid;
    const isAdditionalGuestFormValid =
      (additionalGuestFormRef.current?.formik?.dirty && additionalGuestFormRef.current?.formik?.isValid) ?? true;

    if (isOrderFormValid && isOrderAdditionalInfoFormValid && isGuestFormValid && isAdditionalGuestFormValid) {
      /* store Order info */
      setOrderData(trimObjectValues(orderFormRef.current?.formik?.values));
      /* store guest info */
      setGuestData([]);
      setGuestData((preValue: any) => [...preValue, trimObjectValues(guestFormRef.current?.formik?.values)]);
      additionalGuestFormRef.current &&
        setGuestData((preValue: any) => [
          ...preValue,
          trimObjectValues(additionalGuestFormRef.current?.formik?.values),
        ]);
      /* store for someone info*/
      setForSomeOne(trimObjectValues(forSomeOneRef.current?.formik?.values));
      /* store for orther */
      setForOther(bookForRef.current?.forOtherRef?.current?.value?.trim());
      /* store via travelX */
      setViaTravelX(viaTravelXRef.current?.checked);
      /* store book for */
      setBookFor(bookForRef.current?.value);
      /* store special require */
      setSpecialRequire(specialRequireRef.current?.value?.trim());
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
  const handleUseOrderData = (formRef: any) => {
    const isOrderFormValid = orderFormRef.current?.formik?.dirty && orderFormRef.current?.formik?.isValid;
    /* validate order form if it is invalid */
    if (!isOrderFormValid) {
      orderFormRef.current.formik.submitForm();
      return;
    }
    /* set data from order data */
    formRef?.current?.formik.setValues(orderFormRef.current.formik.values);
  };
  return (
    <div className="flex-1">
      <h2 className="font-bold mb-2 mt-6 lg:mt-0">Information</h2>
      <InformationForm ref={orderFormRef} type="order" />
      <AdditionalInformation ref={bookForRef} forSomeOneRef={forSomeOneRef} />
      <StayManagementCheckbox ref={viaTravelXRef} />
      <InformationOfGuests
        guestFormRef={guestFormRef}
        addtionalGuestFormRef={additionalGuestFormRef}
        handleUseOrderData={handleUseOrderData}
      />
      <SpecialRequire ref={specialRequireRef} />
      <ArrivalTime ref={arrivalTImeRef} />
      <div className="text-end mt-8">
        <button
          onClick={() => {
            handleSubmit();
          }}
          className="primary-button h-9 rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default OrderInfomation;
