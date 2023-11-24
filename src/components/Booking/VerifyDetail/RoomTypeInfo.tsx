import { isEmpty } from 'lodash';
import { useTranslation } from 'react-i18next';
import PriceInclude from '../FillInfomation/PriceInclude';
import ContactInfo from './ContactInfo';

type Props = {
  room: any;
};
function RoomTypeInfo({ room }: Props) {
  const { t } = useTranslation();
  console.log('room?.special_requirements', room?.special_requirements);
  return (
    <div className="mt-8">
      <h3 className="font-bold border-b-2 border-grey-21 mb-4 py-2 ">{room?.title}</h3>
      <ContactInfo
        name={room?.guest_stay[0]?.full_name}
        email={room?.guest_stay[0]?.mail}
        phone={room?.guest_stay[0]?.phone_number}
        country={room?.guest_stay[0]?.country}
      />
      <PriceInclude />
      {/* Special requirements */}
      {!isEmpty(room?.special_requirements) && (
        <div>
          <p className="font-bold mb-2 mt-6">{t('BOOKING_FORM.ROOMTYPE.SPECIAL_REQUIREMENTS')}:</p>
          {room?.special_requirements?.map((req: string, index: number) => (
            <div key={index} className="grid grid-cols-1 sm:grid-cols-2 bg-grey-f5 p-4 rounded-sm mb-4">
              {req}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RoomTypeInfo;
