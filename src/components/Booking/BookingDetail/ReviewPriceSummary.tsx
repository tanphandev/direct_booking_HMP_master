import { useAppSelector } from '@/hooks';
import { formatCurrency } from '@/utils/helper';
import { useTranslation } from 'react-i18next';

function ReviewPriceSummary() {
  const { t } = useTranslation();
  const { business_currency } = useAppSelector((state) => state.business.basic_business_info);
  const { your_booking_price, booking_room_price } = useAppSelector((state) => state.booking);
  return (
    <div className="border-[1px] border-grey-d9">
      <div className="font-bold bg-grey-f5 px-4 py-2">{t('BOOKING_FORM.SIDEBAR.YOUR_PRICE_SUMMARY')}</div>
      {your_booking_price && (
        <div className="text-sm leading-[1.5] pt-4 pb-6 px-4">
          <div className="flex justify-between mb-2">
            <div className="">
              <span>{your_booking_price?.adults}</span> x <span>{t('BOOKING_FORM.SIDEBAR.ADULT_PACKAGE')}</span>
            </div>
            <div>{formatCurrency(business_currency).format(your_booking_price?.adult_price)}</div>
          </div>
          <div className="flex justify-between mb-2">
            <div className="">
              <span>{your_booking_price?.child}</span> x <span>{t('BOOKING_FORM.SIDEBAR.CHILD_PACKAGE')}</span>
            </div>
            <div>{formatCurrency(business_currency).format(your_booking_price?.child_price)}</div>
          </div>
          <div className="font-bold flex justify-between mb-6">
            <p>{t('BOOKING_FORM.SIDEBAR.YOUR_PRICE_TOTAL')}</p>
            <p>{formatCurrency(business_currency).format(your_booking_price?.reservations_amount_price)}</p>
          </div>
          <div>
            <div className="flex justify-between">
              <p>{t('BOOKING_FORM.SIDEBAR.AMOUNT_EX_TAX')}</p>
              <p>{formatCurrency(business_currency).format(your_booking_price?.reservations_amount_sub)}</p>
            </div>
            {your_booking_price?.taxes_breakdown?.map((tax_item: any, index: number) => (
              <div key={index} className="flex justify-between">
                <p>{tax_item?.title}</p>
                <p>{formatCurrency(business_currency).format(tax_item?.amount)}</p>
              </div>
            ))}
            <div className="font-bold flex justify-between">
              <p>{t('BOOKING_FORM.SIDEBAR.AMOUNT_INC_TAX')}</p>
              <p>{formatCurrency(business_currency).format(your_booking_price?.reservations_amount_price)}</p>
            </div>
          </div>
        </div>
      )}
      {booking_room_price && (
        <div className="text-sm leading-[1.5] pt-4 pb-6 px-4">
          <div className="flex justify-between mb-2">
            <div className="">
              <span>{booking_room_price?.adults}</span> x <span>{t('BOOKING_FORM.SIDEBAR.ADULT_PACKAGE')}</span>
            </div>
            <div>{formatCurrency(business_currency).format(booking_room_price?.adult_price)}</div>
          </div>
          <div className="flex justify-between mb-2">
            <div className="">
              <span>{booking_room_price?.child}</span> x <span>{t('BOOKING_FORM.SIDEBAR.CHILD_PACKAGE')}</span>
            </div>
            <div>{formatCurrency(business_currency).format(booking_room_price?.child_price)}</div>
          </div>
          <div className="font-bold flex justify-between mb-6">
            <p>{t('BOOKING_FORM.SIDEBAR.YOUR_PRICE_TOTAL')}</p>
            <p>{formatCurrency(business_currency).format(booking_room_price?.reservations_amount_price)}</p>
          </div>
          <div>
            <div className="flex justify-between">
              <p>{t('BOOKING_FORM.SIDEBAR.AMOUNT_EX_TAX')}</p>
              <p>{formatCurrency(business_currency).format(booking_room_price?.reservations_amount_sub)}</p>
            </div>
            {booking_room_price?.taxes_breakdown?.map((tax_item: any, index: number) => (
              <div key={index} className="flex justify-between">
                <p>{tax_item?.title}</p>
                <p>{formatCurrency(business_currency).format(tax_item?.amount)}</p>
              </div>
            ))}
            <div className="font-bold flex justify-between">
              <p>{t('BOOKING_FORM.SIDEBAR.AMOUNT_INC_TAX')}</p>
              <p>{formatCurrency(business_currency).format(booking_room_price?.reservations_amount_price)}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReviewPriceSummary;
