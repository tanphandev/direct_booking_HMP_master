import { priceIncludes } from '@/constants/booking';
import { useTranslation } from 'react-i18next';

function PriceInclude() {
  const { t } = useTranslation();
  return (
    <div>
      <p className="text-base text-grey-21 font-bold mb-2 block">{t('BOOKING_FORM.ROOMTYPE.PRICE_INCLUDES')}</p>
      <div className="flex flex-wrap">
        {priceIncludes.map((something, index) => (
          <span
            key={index}
            className="transition-colors text-sm bg-black-0.1 px-[10px] py-[5px] m-1 rounded-2xl cursor-pointer hover:bg-black-0.3"
          >
            {something}
          </span>
        ))}
      </div>
    </div>
  );
}

export default PriceInclude;
