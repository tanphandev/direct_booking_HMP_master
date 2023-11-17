interface RangeDate {
  startDate: any;
  endDate: any;
  isValid?: boolean;
}

interface CalendarRangeProps extends RangeDate {
  key: string;
}
