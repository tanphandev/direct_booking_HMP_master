import colors from '@/themes/color';
import { displayDateFormat } from '@/utils/format';
type ReviewCheckInProps = {
  checkIn: Date;
  checkOut: Date;
  night: number;
};

function ReviewCheckIn({ checkIn, checkOut, night }: ReviewCheckInProps) {
  return (
    <div className="border-[1px] border-grey-d9 p-4 mb-6 rounded-sm">
      <Date mb="16px" bgColor={colors['blue-0a']} title="Check-in:" date={checkIn} time="09:00 am" />
      <Date mb="16px" bgColor={colors['red-ee']} title="Check-out:" date={checkOut} time="12:00 am" />
      <div>
        <h3 className="text-base font-bold mb-2">Total length of stay:</h3>
        <p className="text-[17px] font-bold px-4 py-2 mr-[1px] bg-grey-f5 border-[1px] border-grey-d9">
          {night}-nights
        </p>
      </div>
    </div>
  );
}

function Date({ title, date, time, bgColor, mb }: DateProps) {
  return (
    <div
      style={{
        marginBottom: mb,
      }}
    >
      <p className="font-bold mb-2">{title}</p>
      <div className="text-white grid grid-cols-5">
        <span
          style={{
            backgroundColor: bgColor,
          }}
          className={`col-span-3 text-[17px] font-bold px-4 py-2 mr-[1px]`}
        >
          {displayDateFormat(date)}
        </span>
        <span
          style={{
            backgroundColor: bgColor,
          }}
          className={`col-span-2 text-[17px] font-bold px-4 py-2`}
        >
          {time}
        </span>
      </div>
    </div>
  );
}

export default ReviewCheckIn;
