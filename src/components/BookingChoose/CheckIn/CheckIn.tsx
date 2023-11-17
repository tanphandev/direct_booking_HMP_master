import { forwardRef, memo, useEffect, useImperativeHandle, useState } from 'react';
import { useOnClickOutside } from '@/hooks/useClickOutSide';

import Calendar from '../Calendar/Calendar';
import CalendarIcon from '@/assets/icons/Calendar';
import { displayDateFormat } from '@/utils/format';

type Props = {
  quantityNight?: number;
  isValidate?: boolean;
};

const CheckIn = forwardRef<RangeDate, Props>(function Component({ quantityNight = 1, isValidate = false }, ref) {
  const [isHideCalendar, setIsHideCalendar] = useState<boolean>(true);
  const [isValid, setIsValid] = useState<boolean>(true);
  let calendarRef = null;
  if (typeof document !== 'undefined') {
    calendarRef = document.querySelector('.rdrDateRangePickerWrapper') as Element;
  }
  const currentDay = new Date();
  const nextDay = new Date(currentDay);
  nextDay.setDate(currentDay.getDate() + quantityNight);
  const [rangeDate, setRangeDate] = useState<CalendarRangeProps[]>([
    {
      startDate: currentDay,
      endDate: nextDay,
      key: 'selection',
    },
  ]);

  useEffect(() => {
    const millisecondsInADay = 1000 * 60 * 60 * 24;
    let range = (rangeDate[0].endDate - rangeDate[0].startDate) / millisecondsInADay;
    /* validate range date */
    range > quantityNight ? setIsValid(false) : setIsValid(true);
  }, [quantityNight, rangeDate]);

  useImperativeHandle(ref, () => ({
    startDate: rangeDate[0].startDate,
    endDate: rangeDate[0].endDate,
    isValid: isValid,
  }));

  const toggleCalendar = () => {
    setIsHideCalendar(!isHideCalendar);
  };

  useOnClickOutside(calendarRef, () => {
    setIsHideCalendar(true);
  });

  return (
    <div className="relative">
      <div onClick={toggleCalendar} className="h-[80px] grid grid-cols-2 bg-white text-grey-21 rounded-md mb-2">
        <div className="flex items-center border-r-[1px] border-black-0.2 p-4">
          <CalendarIcon width="24px" height="24px" color="#212529" className="mr-4" />
          <div>
            <p className="text-sm font-medium">CHECK-IN</p>
            <p className="text-base md:text-lg font-bold">{displayDateFormat(rangeDate[0].startDate)}</p>
          </div>
        </div>
        <div className="p-4">
          <p className="text-sm font-medium">CHECK-OUT</p>
          <p className="text-base md:text-lg font-bold">{displayDateFormat(rangeDate[0].endDate)}</p>
        </div>
      </div>
      {isValidate && !isValid && (
        <div className="absolute bottom-0 left-0 right-0 text-xs text-red pl-4 leading-[1.8]">
          Check-in check-out is invalid
        </div>
      )}
      <Calendar
        isHide={isHideCalendar}
        rangeDate={rangeDate}
        setRangeDate={setRangeDate}
        className="absolute top-0 left-0 translate-y-[82px]"
      />
    </div>
  );
});

export default memo(CheckIn);
