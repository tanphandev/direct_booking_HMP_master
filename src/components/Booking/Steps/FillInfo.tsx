import Image from 'next/image';
import { useAppSelector } from '@/hooks';
import classNames from 'classnames';
import BookingLayout from '@/layouts/BookingLayout/BookingLayout';
import OrderInfomation from '../FillInfomation/OrderInfomartion';

export default function FillInfo({ currentStep, step }: FillInfoProp) {
  const { setting } = useAppSelector((state) => state.business);
  return (
    <div
      className={classNames({
        hidden: currentStep.stepNumber !== step,
        'back-step-type': currentStep?.type === 'back',
        'next-step-type': currentStep?.type === 'next',
      })}
    >
      {setting?.db_form_banner?.uri_full && (
        <Image
          src={setting?.db_form_banner?.uri_full}
          alt="banner"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-[100px] sm:h-[130px] md:h-[176px] lg:h-[237px] xl:h-[282px] mb-4 object-cover"
        />
      )}
      <BookingLayout>
        <OrderInfomation />
      </BookingLayout>
    </div>
  );
}
