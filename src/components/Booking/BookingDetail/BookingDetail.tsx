import { useAppSelector } from '@/hooks';
import { useTranslation } from 'react-i18next';
import { isEmpty } from 'lodash';

import ReviewCheckIn from './ReviewCheckIn';
import ReviewPriceSummary from './ReviewPriceSummary';
import RoomSelected from './RoomSelected';
import { useRoomContext } from '@/contexts/RoomProvider';

function BookingDetail() {
  const { t } = useTranslation();
  const { roomChoseValue } = useRoomContext();
  const { booking_info, booking_room_info } = useAppSelector((state) => state.booking);
  return (
    <div className="w-full lg:w-[300px] lg:ml-8 order-1 lg:order-2">
      <div>
        <h2 className="font-bold mb-2 leading-[1.5]">{t('BOOKING_FORM.SIDEBAR.SIDEBAR_TITLE')}</h2>
        <ReviewCheckIn
          checkIn={booking_info?.check_in || new Date(booking_room_info?.checkin * 1000)}
          checkOut={booking_info?.check_out || new Date(booking_room_info?.checkout * 1000)}
          night={booking_info?.night || booking_room_info?.night}
        />
        {!isEmpty(roomChoseValue) && <RoomSelected />}
        <ReviewPriceSummary />
      </div>
    </div>
  );
}

export default BookingDetail;
