import classNames from 'classnames';
import BookingLayout from '@/layouts/BookingLayout/BookingLayout';
import OrderInfomation from '../FillInfomation/OrderInfomartion';

export default function FillInfo({ currentStep, step }: FillInfoProp) {
  return (
    <div
      className={classNames({
        hidden: currentStep !== step,
      })}
    >
      <BookingLayout>
        <OrderInfomation />
      </BookingLayout>
    </div>
  );
}
