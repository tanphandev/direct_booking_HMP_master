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
  const { handleClick } = useStepContext();

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
    if (
      orderFormRef.current.formik.dirty &&
      (orderAdditionalInfoFormRef.current?.formik?.dirty ?? true) &&
      guestFormRef.current.formik.dirty &&
      (additionalGuestFormRef.current?.formik?.dirty ?? true)
    ) {
      handleClick('next');
    }
  };

  return (
    <div className="flex-1">
      <h2 className="font-bold mb-2 mt-6 lg:mt-0">Information</h2>
      <InformationForm ref={orderFormRef} type="order" />
      <AdditionalInformation guestFormRef={orderAdditionalInfoFormRef} />
      <StayManagementCheckbox />
      <InformationOfGuests guestFormRef={guestFormRef} addtionalGuestFormRef={additionalGuestFormRef} />
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
