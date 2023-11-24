import { useAppSelector } from '@/hooks';
import { isEmpty } from 'lodash';
import classNames from 'classnames';
import VerifyPackageDetail from '../VerifyDetail/VerifyPackageDetail';
import VerifyRoomDetail from '../VerifyDetail/VerifyRoomDetail';
import BookingLayout from '@/layouts/BookingLayout/BookingLayout';

export default function VerifyDetail({ currentStep, step }: VerifyDetailProps) {
  const { booking_info, booking_room_info } = useAppSelector((state) => state.booking);
  return (
    <div
      className={classNames({
        hidden: currentStep?.stepNumber !== step,
        'back-step-type': currentStep?.type === 'back',
        'next-step-type': currentStep?.type === 'next',
      })}
    >
      <BookingLayout>
        {!isEmpty(booking_info) && <VerifyPackageDetail />}
        {!isEmpty(booking_room_info) && <VerifyRoomDetail />}
      </BookingLayout>
    </div>
  );
}
