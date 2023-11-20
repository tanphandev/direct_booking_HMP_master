'use client'
import React from 'react'
// import { ListRoomAvailable } from '@/api/mock-data/room-available'
import RoomCardResult from '../RoomCardResult/RoomCardResult'
import { useAppSelector } from '@/hooks'
const SearchResult = () => {
  const ListRoomAvailable: RoomAvailable[] = useAppSelector((state) => state.room.public_room_available);
  console.log("room available: ",ListRoomAvailable)
  return (
    <div className='mt-3'>
        {ListRoomAvailable?.map((roomAvailable, index) => (
            <div key={index}>
            <RoomCardResult room={roomAvailable} />
        </div>
        ))}
        
    </div>
  )
}

export default SearchResult 