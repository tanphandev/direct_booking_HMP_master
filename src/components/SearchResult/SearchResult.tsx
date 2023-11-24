'use client';
import React from 'react';
import { useAppSelector } from '@/hooks';
import RoomCardResult from '../RoomCardResult/RoomCardResult';

const SearchResult = () => {
  const ListRoomAvailable: RoomAvailable[] = useAppSelector((state) => state.room.public_room_available);
  return (
    <div className="mt-3">
      {ListRoomAvailable?.map((roomAvailable, index) => (
        <div key={index}>
          <RoomCardResult room={roomAvailable} index={index} />
        </div>
      ))}
    </div>
  );
};

export default SearchResult;
