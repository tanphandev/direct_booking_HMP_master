'use client';
import { useState } from 'react';
import { StepProvider } from '@/contexts/StepProvider';

import Stepper from '@/components/Booking/Stepper/Stepper';
import StepperControl from '@/components/Booking/Stepper/StepperControl';
import FillInfo from '@/components/Booking/Steps/FillInfo';
import VerifyDetail from '@/components/Booking/Steps/VerifyDetail';
import ConfirmReservation from '@/components/Booking/Steps/ConfirmReservation';

function BookingPage() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps: string[] = ['Fill out your information', 'Verify details', 'Confirm reservation'];

  const displayStep = (step: number) => {
    switch (step) {
      case 1:
        return <FillInfo />;
      case 2:
        return <VerifyDetail />;
      case 3:
        return <ConfirmReservation />;
      default:
    }
  };

  const handleClick = (direction: any) => {
    let newStep = currentStep;

    direction === 'next' ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div className="w-[960px] mx-auto p-4">
      {/* Stepper */}
      <Stepper steps={steps} currentStep={currentStep} />
      {/* Content Step */}
      <StepProvider>{displayStep(currentStep)}</StepProvider>
      {/* navigation button */}
      {currentStep !== steps.length && (
        <StepperControl handleClick={handleClick} currentStep={currentStep} steps={steps} />
      )}
    </div>
  );
}

export default BookingPage;
