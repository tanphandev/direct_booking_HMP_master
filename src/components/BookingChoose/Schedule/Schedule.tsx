import ScheduleItem from './ScheduleItem';

export type scheduleItemProps = {
  type: string;
  content: string;
  pickUpTime?: string;
};

export const activityType: Record<string, string> = {
  transfer: 'Transfer',
  excursion: 'Excursion',
  fb_order: 'F&B',
};

function Schedule({ day, activities }: SchelduleProps) {
  return (
    <div>
      <h3 className="font-bold mb-2 pb-2 border-b-[1px] border-grey-21">{day}</h3>
      {activities.map((activity, index) => (
        <ScheduleItem
          key={index}
          type={activityType[activity?.type]}
          content={activity?.title}
          pickUpTime={activity?.time_start}
        />
      ))}
    </div>
  );
}

export default Schedule;
