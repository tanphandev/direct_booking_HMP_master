'use client'
import React from 'react'
import { ListRoomAvailable } from '@/api/mock-data/room-available'
import Image from 'next/image'
import RoomCardResult from '../RoomCardResult/RoomCardResult'
const SearchResult = () => {
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