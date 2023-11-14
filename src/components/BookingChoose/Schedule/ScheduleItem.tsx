import { scheduleItemProps } from './Schedule';

function ScheduleItem({ title, content }: scheduleItemProps) {
  return (
    <div className="mb-4">
      <h3 className="text-base font-bold mb-2">{title}</h3>
      <p>{content}</p>
    </div>
  );
}

export default ScheduleItem;
