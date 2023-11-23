import { useTranslation } from 'react-i18next';
import { useRoomContext } from '@/contexts/RoomProvider';
import RoomDetail from './RoomDetail';

function RoomSelected() {
  const { t } = useTranslation();
  const { roomChoseValue } = useRoomContext();
  console.log('roomChoseValue', roomChoseValue);
  return (
    <div className="border-[1px] border-grey-d9 mb-6">
      <div className="font-bold bg-grey-f5 px-4 py-2">{t('BOOKING_FORM.SIDEBAR.YOU_SELECTED')}</div>
      <div className="p-4">
        {Object.values(roomChoseValue).map((room: any, index: number) => (
          <RoomDetail
            roomName={room?.room?.title}
            quantityRoom={room?.quantity}
            packages={room?.packages}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default RoomSelected;
