import ScheduleItem from './ScheduleItem';

export type scheduleItemProps = {
  title: string;
  content: string;
};

// mockdata
const schedules: scheduleItemProps[] = [
  {
    title: 'Transder',
    content: 'Suratthani Town/Aiport/Train Station/Bus Station Pick up time 09:00',
  },
  {
    title: 'Excursion',
    content: 'Elephant Experience (2-5 Pax) - Bathing & Feeding',
  },
  {
    title: 'F&B',
    content: 'Have lunch',
  },
];

function Schedule({ day }: SchelduleProps) {
  return (
    <div>
      <h3 className="font-bold mb-2 pb-2 border-b-[1px] border-grey-21">{day}</h3>
      {schedules.map((item, index) => (
        <ScheduleItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
}

export default Schedule;
