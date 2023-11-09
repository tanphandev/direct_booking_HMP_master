import CalendarIcon from '@/app/assets/icons/Calendar';
import { forwardRef, memo, useImperativeHandle, useState } from 'react';

import Calendar from '../Calendar/Calendar';
import { displayDateFormat } from '@/utils/format';
import { useOnClickOutside } from '@/hooks/useClickOutSide';

type Props = {
  quantityNight?: number;
};

const CheckIn = forwardRef<RangeDate, Props>(function Component({ quantityNight = 1 }, ref) {
  const [isHideCalendar, setIsHideCalendar] = useState<boolean>(true);
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

  useImperativeHandle(ref, () => ({
    startDate: rangeDate[0].startDate,
    endDate: rangeDate[0].endDate,
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
            <p className="text-lg font-bold">{displayDateFormat(rangeDate[0].startDate)}</p>
          </div>
        </div>
        <div className="p-4">
          <p className="text-sm font-medium">CHECK-OUT</p>
          <p className="text-lg font-bold">{displayDateFormat(rangeDate[0].endDate)}</p>
        </div>
      </div>
      <Calendar isHide={isHideCalendar} rangeDate={rangeDate} setRangeDate={setRangeDate} />
    </div>
  );
});

export default memo(CheckIn);
