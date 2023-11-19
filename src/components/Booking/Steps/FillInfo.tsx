import classNames from 'classnames';
import BookingLayout from '@/layouts/BookingLayout/BookingLayout';
import OrderInfomation from '../FillInfomation/OrderInfomartion';

export default function FillInfo({ currentStep, step }: FillInfoProp) {
  return (
    <div
      className={classNames({
        hidden: currentStep.stepNumber !== step,
        'back-step-type': currentStep?.type === 'back',
        'next-step-type': currentStep?.type === 'next',
      })}
    >
      <BookingLayout>
        <OrderInfomation />
      </BookingLayout>
    </div>
  );
}
