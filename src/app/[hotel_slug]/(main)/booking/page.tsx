'use client';
import { useState } from 'react';
import { StepProvider } from '@/contexts/StepProvider';

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
  const [currentStep, setCurrentStep] = useState<CurrentStepType>({
    stepNumber: 1,
    type: null,
  });

  const steps: string[] = ['Fill out your information', 'Verify details', 'Confirm reservation'];

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
