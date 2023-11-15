import React, { forwardRef } from 'react';
import { DateRangePicker } from 'react-date-range';

// main css file calender
import 'react-date-range/dist/styles.css';
// theme default calendar
import 'react-date-range/dist/theme/default.css';
// custom theme
import '@/styles/calendar.scss';

type Props = {
  isHide: boolean;
  rangeDate: any[];
  setRangeDate: React.Dispatch<React.SetStateAction<any[]>>;
  className?: string;
};

const Calendar = forwardRef<any, Props>(function Component({ isHide, rangeDate, setRangeDate, className }, ref) {
  const handleOnChange = (ranges: any) => {
    const { selection } = ranges;
    setRangeDate([selection]);
  };
  return (
    <DateRangePicker
      ref={ref}
      className={`${isHide ? '!hidden' : ''} z-10 ${className}`}
      onChange={handleOnChange}
      moveRangeOnFirstSelection={false}
      months={2}
      ranges={rangeDate}
      direction="horizontal"
    />
  );
});
export default Calendar;
