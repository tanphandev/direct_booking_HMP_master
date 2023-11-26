'use client';
import ArrowDown from '@/assets/icons/ArrowDown';
import CheckinNew from '@/assets/icons/CheckinNew';
import CheckoutNew from '@/assets/icons/CheckoutNew';
import { createRef, useImperativeHandle, useRef, useState } from 'react';
import { useOnClickOutside } from '@/hooks/useClickOutSide';
import Calendar from '@/components/BookingChoose/Calendar/Calendar';
import '@/i18n/i18n';
import { useTranslation } from 'react-i18next';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { getDateFormatTimestamp, getDateNowTimestamp } from '@/utils/helper';
import { getPublicRoomAvailable } from '@/store/room/roomAction';
import SecondLoading from '../Loading/SecondLoading';
import { useLoading } from '@/hooks/useLoading';
import { PUBLIC_ROOM_AVAILABLE } from '@/store/common/constants';

const BookingSearchBox = () => {
  const displayCheckInRef = useRef<HTMLDivElement>(null);
  const displayCheckOutRef = useRef<HTMLDivElement>(null);
  const { loading } = useLoading([PUBLIC_ROOM_AVAILABLE]);
  const hotel_slug = useParams().hotel_slug;
  const searchParams = useSearchParams();
  const check_in = searchParams.get('checkin');
  const check_out = searchParams.get('checkout');
  const adults = searchParams.get('adults');
  const child = searchParams.get('children');
  const datecreated = getDateNowTimestamp();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { basic_business_info } = useAppSelector((state) => state.business);
  const { t } = useTranslation();
  const [isHideCheckinCalendar, setIsHideCheckinCalendar] = useState<boolean>(true);
  let calendarRef = null;
  if (typeof document !== 'undefined') {
    calendarRef = document.querySelector('.rdrDateRangePickerWrapper') as Element;
  }
  const [rangeDate, setRangeDate] = useState<CalendarRangeProps[]>([
    {
      startDate: new Date(parseInt(check_in || '') * 1000),
      endDate: new Date(parseInt(check_out || '') * 1000),
      key: 'selection',
    },
  ]);

  let quantityNight: number = (rangeDate[0].endDate - rangeDate[0].startDate) / 86400000;
  const checkInRef = createRef<RangeDate>();
  useImperativeHandle(checkInRef, () => ({
    startDate: rangeDate[0].startDate,
    endDate: rangeDate[0].endDate,
  }));
  const [isSearchBoxVisible, setIsSearchBoxVisible] = useState(false);
  const toggleSearchBox = () => {
    setIsSearchBoxVisible(!isSearchBoxVisible);
  };
  const toggleCheckinCalendar = () => {
    setIsHideCheckinCalendar(!isHideCheckinCalendar);
  };

  useOnClickOutside(calendarRef, (event) => {
    if (displayCheckInRef.current && !displayCheckInRef.current.contains(event.target as Node)) {
      setIsHideCheckinCalendar(true);
    }
  });
  const handleLoadRoomAvailable = () => {
    const bid = basic_business_info.bid;
    const check_in = checkInRef.current && getDateFormatTimestamp(checkInRef.current?.startDate);
    const check_out = checkInRef.current && getDateFormatTimestamp(checkInRef.current?.endDate);
    dispatch(getPublicRoomAvailable({ bid, check_in, check_out, adults, child, datecreated, hotel_slug, router }));
  };
  return (
    <div className={'flex flex-col w-full px-2 py-2 md:px-4 lg:px-6 lg:py-3'}>
      <div className={'flex items-center justify-between'}>
        <span className={' text-xl lg:text-2xl text-white font-light '}>{t('SEARCH.BOX_SEARCH.SEARCH')}</span>

        <button className="" onClick={toggleSearchBox}>
          <ArrowDown width="30px" height="30px" />
        </button>
      </div>
      {isSearchBoxVisible && (
        <div className={' flex flex-col border-1 pb-2'}>
          <div className={'pt-5 relative'}>
            <h4 className="text-white pb-2 text-md">{t('SEARCH.BOX_SEARCH.CHECKIN_DATE')}</h4>

            <div
              ref={displayCheckInRef}
              onClick={toggleCheckinCalendar}
              className={'flex items-center bg-white p-2 rounded-md'}
            >
              <CheckinNew />
              <h3 className={'pl-3'}>{rangeDate[0].startDate.toLocaleDateString()}</h3>
            </div>
            <Calendar
              className="absolute top-0 left-0 translate-y-[99px]"
              isHide={isHideCheckinCalendar}
              rangeDate={rangeDate}
              setRangeDate={setRangeDate}
            />
          </div>
          <div className={'pt-5 relative'}>
            <h4 className="text-white pb-2 text-md">{t('SEARCH.BOX_SEARCH.CHECKOUT_DATE')}</h4>

            <div
              ref={displayCheckOutRef}
              onClick={toggleCheckinCalendar}
              className={'flex items-center bg-white p-2 rounded-md'}
            >
              <CheckoutNew />
              <h3 className={'pl-3'}>{rangeDate[0].endDate.toLocaleDateString()}</h3>
            </div>
          </div>
          <h4 className="text-md py-5 text-white">{t('SEARCH.BOX_SEARCH.NIGHTS_STAY', { value: quantityNight })}</h4>
          <SecondLoading isLoading={loading}>
            <button
              onClick={handleLoadRoomAvailable}
              className={`w-full h-full px-6 bg-blue-600 py-2 text-md rounded-md text-white uppercase bg-[#0A7CFF]`}
            >
              {t('SEARCH.BOX_SEARCH.SEARCH_BUTTON')}
            </button>
          </SecondLoading>
        </div>
      )}
    </div>
  );
};
export default BookingSearchBox;
