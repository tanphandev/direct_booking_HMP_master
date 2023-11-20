import { activityType, scheduleItemProps } from './Schedule';

function ScheduleItem({ type, content, pickUpTime }: scheduleItemProps) {
  return (
    <div className="mb-4">
      <h3 className="text-base font-bold mb-2">{type}</h3>
      <p>{content}</p>
      {type === activityType.transfer && <p>Pick up time {pickUpTime}</p>}
    </div>
  );
}

export default ScheduleItem;
