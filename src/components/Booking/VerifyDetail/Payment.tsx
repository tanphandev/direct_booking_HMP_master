import { useStepContext } from '@/contexts/StepProvider';
import { useTranslation } from 'react-i18next';
import AbaPayIcon from '@/assets/icons/AbayIcon';
import CreditCardIcon from '@/assets/icons/CreditCardIcon';
import HotelIcon from '@/assets/icons/HotelIcon';
import KhqrIcon from '@/assets/icons/KhqrIcon';

function Payment({ handlePayAtHotel }: PaymentProps) {
  const { t } = useTranslation();
  const { handleClick } = useStepContext();
  return (
    <div>
      <p className="font-bold pb-4 mt-[38px]">{t('BOOKING_FORM.STEP2.PAYMENT_METHOD')}</p>
      <div className="w-full border-t-[1px] border-b-[1px] border-grey-d9 py-5">
        <div
          onClick={() => {
            handlePayAtHotel();
          }}
          className="transition-colors w-[300px] flex items-center hover:bg-grey-f5 py-[7px] pr-[7px] rounded-md cursor-pointer"
        >
          <HotelIcon width="56px" height="38px" className="mx-2" />
          <span>{t('BOOKING_FORM.STEP2.PAY_AT_HOTEL')}</span>
        </div>
      </div>
      <div className="border-b-[1px] border-grey-d9 py-5 mb-10">
        <div
          onClick={() => handleClick('next')}
          className="transition-colors w-[300px] flex items-center hover:bg-grey-f5 py-[7px] pr-[7px] rounded-md cursor-pointer"
        >
          <CreditCardIcon width="56px" height="38px" className="mx-2" />
          <div className="flex-1 flex flex-col">
            <span className="text-base text-grey-45 font-semibold">Credit/Debit Card</span>
            <span className="text-sm text-black-0.4">Visa, Mastercard, UnionPay, JCB</span>
          </div>
        </div>
        <div
          onClick={() => handleClick('next')}
          className="transition-colors w-[300px] flex items-center hover:bg-grey-f5 py-[7px] pr-[7px] rounded-md cursor-pointer"
        >
          <AbaPayIcon width="56px" height="38px" className="mx-2" />
          <div className="flex-1 flex flex-col">
            <span className="text-base text-grey-45 font-semibold">ABA PAY</span>
            <span className="text-sm text-black-0.4">{t('BOOKING_FORM.STEP2.ABA_PAY_DES')}</span>
          </div>
        </div>
        <div
          onClick={() => handleClick('next')}
          className="transition-colors w-[300px] flex items-center hover:bg-grey-f5 py-[7px] pr-[7px] rounded-md cursor-pointer"
        >
          <KhqrIcon width="56px" height="38px" className="mx-2" />
          <div className="flex-1 flex flex-col">
            <span className="text-base text-grey-45 font-semibold">KHQR</span>
            <span className="text-sm text-black-0.4">{t('BOOKING_FORM.STEP2.KHQR_DES')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
