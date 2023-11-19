import React, { useState, useEffect, useRef } from 'react';

const Stepper = ({
  steps,
  currentStep,
  setCurrentStep,
}: {
  steps: string[];
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [newStep, setNewStep] = useState<any[]>([]);
  const stepsRef = useRef<any>();

  const updateStep = (stepNumber: number, steps: any[]) => {
    const newSteps = [...steps];
    let count = 0;
    while (count < newSteps.length) {
      //current step
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true,
        };
        count++;
      }
      //step completed
      else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count++;
      }
      //step pending
      else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }

    return newSteps;
  };

  useEffect(() => {
    const stepsState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        },
      ),
    );

    stepsRef.current = stepsState;
    const current = updateStep(currentStep - 1, stepsRef.current);
    setNewStep(current);
  }, [steps, currentStep]);

  const stepsDisplay = newStep.map((step, index) => {
    return (
      <div key={index} className={index !== 0 ? 'w-full flex items-center' : 'flex items-center'}>
        <div
          className={`flex-auto border-t-[1px] transition duration-500 ease-in-out  ${
            step.completed ? 'border-blue-0a' : 'border-grey-d9'
          }  `}
        ></div>
        <div
          onClick={() => {
            !newStep[newStep.length - 1].completed && step.completed && setCurrentStep(index + 1);
          }}
          className="flex flex-col sm:flex-row items-center cursor-pointer"
        >
          <div
            className={`rounded-full transition duration-500 ease-in-out w-6 h-6 text-white flex items-center justify-center ${
              step.selected ? 'bg-blue-0a font-bold' : 'bg-black-0.54'
            }`}
          >
            {index + 1}
          </div>
          <div
            className={`top-0 text-center w-24 text-sm font-medium ${
              step.highlighted ? 'text-grey-21 !font-bold' : 'text-black-0.54'
            }`}
          >
            {step.description}
          </div>
        </div>
      </div>
    );
  });

  return <div className="h-[72px] flex justify-between items-center overflow-hidden">{stepsDisplay}</div>;
};
export default Stepper;
