'use client';
import { useRoomContext } from '@/contexts/RoomProvider';
import { useAppSelector } from '@/hooks';
import { useTranslation } from 'next-i18next';
import { formatCurrency } from '@/utils/helper';
import { isEmpty } from 'lodash';
import React, { Fragment } from 'react';

const BookingCart = () => {
  const { i18n } = useTranslation();
  const { roomChoseValue } = useRoomContext();
  const { business_currency } = useAppSelector((state) => state.business.basic_business_info);
  console.log('roomChoseValue', roomChoseValue);
  const sumPrice = Object.values(roomChoseValue)?.reduce((accumulator: number, currentValue: any) => {
    const packageTotalPrice = currentValue?.packages?.reduce(
      (accumulator: number, currentValue: any) =>
        accumulator + currentValue?.package?.dbp_total_price * currentValue?.quantity,
      0,
    );
    return accumulator + currentValue?.room?.price_room_total * currentValue?.quantity + packageTotalPrice;
  }, 0);
  const { t } = useTranslation();
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
                <span className="font-bold text-2xl mb-2">{formatCurrency(business_currency).format(sumPrice)}</span>
              </div>
              <button
                disabled
                className={`uppercase ${
                  isEmpty(roomChoseValue) ? 'bg-grey-d9 text-grey-6c ' : 'bg-blue-0a text-white'
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
