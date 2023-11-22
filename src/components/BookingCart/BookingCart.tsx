'use client';
import { useRoomContext } from '@/contexts/RoomProvider';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { useTranslation } from 'next-i18next';
import { formatCurrency, getDateNowTimestamp } from '@/utils/helper';
import { isEmpty, pick } from 'lodash';
import React, { Fragment } from 'react';
import { roomCalculatePrice } from '@/store/booking/bookingAction';
import { useParams, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

const packageFieldPicker = [
  'dbp_activities',
  'dbp_descriptions',
  'dbp_title',
  'dbp_total_cost',
  'dbp_total_price',
  'edate',
  'full_pay',
  'price_including_taxes',
  'quantity',
  'sdate',
  'tax_entity',
  'title',
  'total_price_without_tax',
];

const BookingCart = () => {
  const { t, i18n } = useTranslation();
  const searchParams = useSearchParams();
  const router = useRouter();
  const { hotel_slug } = useParams();
  const { roomChoseValue } = useRoomContext();
  const { business_currency, bid } = useAppSelector((state) => state.business.basic_business_info);
  const dispatch = useAppDispatch();
  const sumPrice = Object.values(roomChoseValue)?.reduce((accumulator: number, currentValue: any) => {
    const packageTotalPrice = currentValue?.packages?.reduce(
      (accumulator: number, currentValue: any) =>
        accumulator + currentValue?.package?.dbp_total_price * currentValue?.quantity,
      0,
    );
    return accumulator + currentValue?.room?.price_room_total * currentValue?.quantity + packageTotalPrice;
  }, 0);

  const handleCalculatePrice = () => {
    const checkin = parseInt(searchParams.get('checkin') ?? '0');
    const checkout = parseInt(searchParams.get('checkout') ?? '0');
    const reservations_adults = parseInt(searchParams.get('adults') ?? '2');
    const reservations_children = parseInt(searchParams.get('children') ?? '0');
    const reservations_infants = 0; // default is 0
    const reservations_business_id = {
      entity_id: bid,
    };
    const roomChose = [...Object.values(roomChoseValue)] as { packages: any; quantity: number; room: any }[];
    const room_types = roomChose?.flatMap(({ packages, room, quantity }) => {
      const activities = packages?.map((packageItem: any, index: number) => {
        const packageField = pick(packageItem.package, packageFieldPicker);
        return {
          ...packageField,
          entity_id: packageItem?.package?.id,
          quantity: packageItem?.quantity,
        };
      });
      return Array.from({ length: quantity }, (_, index) => {
        return { activities: index === 0 ? activities : [], adult: 1, room_type_id: room?.rid };
      });
    });
    const bodyData = {
      checkin,
      checkout,
      reservations_check_in: checkin,
      reservations_check_out: checkout,
      datecreated: getDateNowTimestamp(),
      reservations_adults,
      reservations_children,
      reservations_infants,
      reservations_business_id,
      room_types,
    };
    dispatch(roomCalculatePrice({ bodyData, router, hotel_slug }));
  };
  return (
    <div className=" bg-[#f5f5f5] sticky bottom-0 z-50  inset-x-0 ">
      <div className="px-4 lg:mx-8 md:mx-16">
        <div className="flex overflow-hidden">
          <div className="py-4 w-full flex">
            <div className="px-4 py-2 lg:px-8 lg:py-4 grid grid-cols-3 w-full">
              <div className="col-span-1 ">
                <span className="text-[#9c9c9c] font-bold">{t('HOMEPAGE.ROOM')}</span>
              </div>
              <div className="col-span-2 justify-center">
                <span className="text-[#9c9c9c] font-bold">{t('SEARCH.ROOM_TYPE.SPECIAL_OFFERS')}</span>
              </div>
              {Object.values(roomChoseValue)?.map((item: any, index: number) => (
                <Fragment key={index}>
                  <ul className="list-disc col-span-1 pl-3">
                    <li className="text-blue-0a font-bold">
                      {item?.room?.title}
                      {item?.quantity > 1 && ` x ${item?.quantity}`}
                    </li>
                  </ul>
                  <div className="col-span-2 justify-center">
                    {item?.packages?.map((packageItem: any, index: number) => (
                      <span key={index} className="bg-blue-0a text-white rounded-xl px-2 py-1 mr-1">
                        {packageItem?.quantity > 1 && `${packageItem?.quantity} x `}{' '}
                        {
                          packageItem?.package?.dbp_title.find((valueItem: any) => valueItem?.lang === i18n.language)
                            ?.value
                        }
                      </span>
                    ))}
                  </div>
                </Fragment>
              ))}
            </div>

            <div className="p-4 flex flex-col w-2/12 items-center">
              <div className="flex flex-col items-end">
                <span className="text-[#9c9c9c] mb-2 font-bold">{t('SEARCH.ROOM_TYPE.PRICE_SUMMARY')}</span>
                <span className="w-full font-bold text-2xl mb-2 text-center">
                  {formatCurrency(business_currency).format(sumPrice)}
                </span>
              </div>
              <button
                disabled={isEmpty(roomChoseValue)}
                onClick={() => handleCalculatePrice()}
                className={`uppercase ${
                  isEmpty(roomChoseValue) ? 'bg-grey-d9 text-grey-6c cursor-not-allowed' : 'bg-blue-0a text-white'
                } px-4 py-2 border font-bold border-grey-d9 rounded-md`}
              >
                <span className="text-sm ">{t('SEARCH.ROOM_TYPE.BOOKNOW_PAYLATER')}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCart;
