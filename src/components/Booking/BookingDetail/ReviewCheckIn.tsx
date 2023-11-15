import colors from '@/themes/color';

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
          {date}
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

function ReviewCheckIn() {
  return (
    <div className="border-[1px] border-grey-d9 p-4 mb-6 rounded-sm">
      <Date mb="16px" bgColor={colors['blue-0a']} title="Check-in:" date="Nov 10, 2023" time="09:00 am" />
      <Date mb="16px" bgColor={colors['red-ee']} title="Check-out:" date="Nov 11, 2023" time="12:00 am" />
      <div>
        <h3 className="text-base font-bold mb-2">Total length of stay:</h3>
        <p className="text-[17px] font-bold px-4 py-2 mr-[1px] bg-grey-f5 border-[1px] border-grey-d9">1-night</p>
      </div>
    </div>
  );
}

export default ReviewCheckIn;
