import { createRef } from 'react';
import { useStepContext } from '@/contexts/StepProvider';

import AdditionalInformation from './AdditionalInformation';
import ArrivalTime from './ArrivalTime';
import InformationForm from './InfomationForm';
import InformationOfGuests from './InformationOfGuests';
import SpecialRequire from './SpecialRequire';
import StayManagementCheckbox from './StayManagementCheckbox';

function OrderInfomation() {
  const orderFormRef = createRef<any>();
  const orderAdditionalInfoFormRef = createRef<any>();
  const guestFormRef = createRef<any>();
  const additionalGuestFormRef = createRef<any>();
  const { handleClick, setOrderData, setGuestData } = useStepContext();

  /* validate form */
  const handleSubmit = () => {
    orderFormRef.current.formik.submitForm();
    orderAdditionalInfoFormRef?.current?.formik?.submitForm();
    guestFormRef.current.formik.submitForm();
    additionalGuestFormRef?.current?.formik?.submitForm();
    checkNextStep();
  };

  /* check form is valid or not */
  const checkNextStep = () => {
    const isOrderFormValid = orderFormRef.current?.formik?.dirty && orderFormRef.current?.formik?.isValid;
    const isOrderAdditionalInfoFormValid =
      (orderAdditionalInfoFormRef.current?.formik?.dirty && orderAdditionalInfoFormRef.current?.formik?.isValid) ??
      true;
    const isGuestFormValid = guestFormRef.current?.formik?.dirty && guestFormRef.current?.formik?.isValid;
    const isAdditionalGuestFormValid =
      (additionalGuestFormRef.current?.formik?.dirty && additionalGuestFormRef.current?.formik?.isValid) ?? true;
    if (isOrderFormValid && isOrderAdditionalInfoFormValid && isGuestFormValid && isAdditionalGuestFormValid) {
      /* store data */
      setOrderData(orderFormRef.current?.formik?.values);
      setGuestData((preValue: any) => [...preValue, guestFormRef.current?.formik?.values]);
      additionalGuestFormRef.current &&
        setGuestData((preValue: any) => [...preValue, additionalGuestFormRef.current?.formik?.values]);

      /* next */
      handleClick('next');
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
    /* set data */
    formRef?.current?.formik.setFieldValue('fullName', orderFormRef.current.formik.values.fullName);
    formRef?.current?.formik.setFieldValue('email', orderFormRef.current.formik.values.email);
    formRef?.current?.formik.setFieldValue('phone', orderFormRef.current.formik.values.phone);
    formRef?.current?.formik.setFieldValue('country', orderFormRef.current.formik.values.country);
  };
  return (
    <div className="flex-1">
      <h2 className="font-bold mb-2 mt-6 lg:mt-0">Information</h2>
      <InformationForm ref={orderFormRef} type="order" />
      <AdditionalInformation guestFormRef={orderAdditionalInfoFormRef} />
      <StayManagementCheckbox />
      <InformationOfGuests
        guestFormRef={guestFormRef}
        addtionalGuestFormRef={additionalGuestFormRef}
        handleUseOrderData={handleUseOrderData}
      />
      <SpecialRequire />
      <ArrivalTime />
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
