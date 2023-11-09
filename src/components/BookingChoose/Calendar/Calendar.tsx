import React, { forwardRef } from 'react';

// main css file calender
import 'react-date-range/dist/styles.css';
// theme default calendar
import 'react-date-range/dist/theme/default.css';
// custom theme
import '@/styles/calendar.scss';

import { DateRangePicker } from 'react-date-range';

type Props = {
  isHide: boolean;
  rangeDate: any[];
  setRangeDate: React.Dispatch<React.SetStateAction<any[]>>;
};

const Calendar = forwardRef<any, Props>(function Component({ isHide, rangeDate, setRangeDate }, ref) {
  const handleOnChange = (ranges: any) => {
    const { selection } = ranges;
    setRangeDate([selection]);
  };
  return (
    <DateRangePicker
      ref={ref}
      className={`${isHide ? '!hidden' : ''} absolute top-0 left-0 translate-y-[82px]`}
      onChange={handleOnChange}
      moveRangeOnFirstSelection={false}
      months={2}
      ranges={rangeDate}
      direction="horizontal"
    />
  );
});
export default Calendar;
