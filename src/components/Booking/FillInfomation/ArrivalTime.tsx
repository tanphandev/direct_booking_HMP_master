import { forwardRef, memo, useImperativeHandle, useState } from 'react';
import { timeList } from './constants';
import { useTranslation } from 'react-i18next';

const ArrivalTime = forwardRef<BaseRefProps<ArrivalTimeType>, {}>(function Component({}, ref) {
  const { t } = useTranslation();
  const [arrivalAt, setArrivalAt] = useState<string>('');
  const [departingFrom, setDepartingFrom] = useState<string>('');
  const [via, setVia] = useState<string>('');

  useImperativeHandle(ref, () => ({
    value: {
      arrivalAt,
      departingFrom: departingFrom.toString().trim(),
      via: via.toString().trim(),
    },
  }));

  return (
    <div className="mt-8">
      <h2 className="font-bold mb-2">{t('BOOKING_FORM.STEP1.ARRIVE_PLAN_TITLE')}</h2>
      <p className="text-base text-grey-21">{t('BOOKING_FORM.STEP1.ARRIVE_PLAN_DESC')}</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-[10px] mt-4">
        <div className="mb-4">
          <p className="text-base text-grey-21 font-bold mb-2">{t('BOOKING_FORM.STEP1.ARRIVE_PLAN_ARRIVAL_AT')}</p>
          <TimeSelect arrivalAt={arrivalAt} setArrivalAt={setArrivalAt} />
        </div>
        <div className="mb-4">
          <p className="text-base text-grey-21 font-bold mb-2">{t('BOOKING_FORM.STEP1.ARRIVE_PLAN_DEPARTING_FROM')}</p>
          <input
            value={departingFrom}
            onChange={(e) => setDepartingFrom(e.target.value)}
            placeholder={t('BOOKING_FORM.STEP1.ARRIVE_PLAN_DEPARTING_FROM_PLACEHOLDER')}
            className="primary-input"
          />
        </div>
        <div className="mb-4">
          <p className="text-base text-grey-21 font-bold mb-2">{t('BOOKING_FORM.STEP1.ARRIVE_PLAN_VIA')}</p>
          <input
            value={via}
            onChange={(e) => setVia(e.target.value)}
            placeholder={t('BOOKING_FORM.STEP1.ARRIVE_PLAN_VIA_PLACEHOLDER')}
            className="primary-input"
          />
        </div>
      </div>
    </div>
  );
});

const TimeSelect = memo(function Component({
  arrivalAt,
  setArrivalAt,
}: {
  arrivalAt: string;
  setArrivalAt: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <select
      value={arrivalAt}
      onChange={(e) => {
        setArrivalAt(e.target.value);
      }}
      className="primary-input select-time-scrollbar h-[38px]"
    >
      {timeList.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
});

export default ArrivalTime;
