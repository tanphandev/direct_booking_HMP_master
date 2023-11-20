'use client';
import { useState, useEffect } from 'react';
import { useAppSelector } from '@/hooks';
import { useParams, useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { StepProvider } from '@/contexts/StepProvider';
import Path from '@/routes/Path';
import { isEmpty } from 'lodash';
import { toast } from 'react-toastify';

import Stepper from '@/components/Booking/Stepper/Stepper';
import FillInfo from '@/components/Booking/Steps/FillInfo';
import VerifyDetail from '@/components/Booking/Steps/VerifyDetail';
import ConfirmReservation from '@/components/Booking/Steps/ConfirmReservation';
import { scrollOnTop } from '@/utils/helper';

export type CurrentStepType = {
  stepNumber: number;
  type: 'next' | 'back' | null;
};

function BookingPage() {
  const { t } = useTranslation();
  const router = useRouter();
  const { hotel_slug } = useParams();
  const { booking_info, your_booking_price } = useAppSelector((state) => state.booking);
  const [currentStep, setCurrentStep] = useState<CurrentStepType>({
    stepNumber: 1,
    type: null,
  });

  const steps: string[] = [
    t('BOOKING_FORM.STEP1.STEPPER_TITLE'),
    t('BOOKING_FORM.STEP2.STEPPER_TITLE'),
    t('BOOKING_FORM.STEP3.STEPPER_TITLE'),
  ];

  useEffect(() => {
    if (isEmpty(booking_info) || isEmpty(your_booking_price)) {
      router.push(Path.HOME(hotel_slug as string));
      toast.info('Your session has expired. Redirecting to the Home page...');
    }
  }, [router]);
  // const displayStep = (step: number) => {
  //   switch (step) {
  //     case 1:
  //       return <FillInfo />;
  //     case 2:
  //       return <VerifyDetail />;
  //     case 3:
  //       return <ConfirmReservation />;
  //     default:
  //   }
  // };

  const handleClick = (direction: any) => {
    let newStep = { ...currentStep };

    if (direction === 'next') {
      newStep.stepNumber++;
      newStep.type = 'next';
    } else {
      newStep.stepNumber--;
      newStep.type = 'back';
    }
    console.log('newStep', newStep);
    console.log('step.length', steps.length);
    // check if steps are within bounds
    newStep.stepNumber > 0 && newStep.stepNumber <= steps.length && setCurrentStep(newStep);
    /* scroll on top page */
    scrollOnTop();
  };

  return (
    <div className="w-full sm:w-[540px] md:w-[720px] lg:w-[960px] mx-auto p-4">
      {/* Stepper */}
      <Stepper steps={steps} currentStep={currentStep.stepNumber} setCurrentStep={setCurrentStep} />
      {/* Content Step */}
      {/* <StepProvider handleClick={handleClick}>{displayStep(currentStep)}</StepProvider> */}
      <StepProvider handleClick={handleClick}>
        <FillInfo step={1} currentStep={currentStep} />
        <VerifyDetail step={2} currentStep={currentStep} />
        <ConfirmReservation step={3} currentStep={currentStep} />
      </StepProvider>
      {/* navigation button */}
    </div>
  );
}

export default BookingPage;
