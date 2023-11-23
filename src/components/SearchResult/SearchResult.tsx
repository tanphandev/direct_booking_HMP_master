'use client'
import React from 'react'
import RoomCardResult from '../RoomCardResult/RoomCardResult'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { useParams, useRouter } from 'next/navigation'
import { getPublicRoomAvailable } from '@/store/room/roomAction'
import { getDateNowTimestamp } from '@/utils/helper'
const SearchResult = () => {
  const {hotel_slug}=useParams();
  // const { hotel_slug,check_in,check_out,adults, child} = useParams();
  // const datecreated = getDateNowTimestamp();
  // const { basic_business_info } = useAppSelector((state) => state.business);
  // const bid = basic_business_info.bid;
  // const router = useRouter();
  // const dispatch = useAppDispatch();
  // dispatch(getPublicRoomAvailable({ bid, check_in, check_out, adults, child, datecreated, hotel_slug, router }));

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