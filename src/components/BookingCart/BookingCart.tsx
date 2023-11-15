'use client'
import React from 'react'

const BookingCart = () => {
    return (
        <div className=' bg-[#f5f5f5] sticky bottom-0 z-50  inset-x-0 '>
            <div className='px-4 lg:mx-8 md:mx-16'>
                <div className='flex overflow-hidden'>
                    <div className='py-4 w-full flex'>
                        <div className='px-4 py-2 lg:px-8 lg:py-4 grid grid-cols-3 w-full'>
                            <div className='col-span-1 '>
                                <span className='text-[#9c9c9c] font-bold'>Phòng</span>
                            </div>
                            <div className='col-span-2 justify-center'>
                                <span className='text-[#9c9c9c] font-bold'>Ưu đãi đặc biệt</span>
                            </div>

                        </div>

                        <div className='p-4 flex flex-col w-2/12 items-center'>
                            <div className='flex flex-col items-end'>
                                <span className='text-[#9c9c9c] mb-2 font-bold'>Thành tiền</span>
                                <span className='font-bold text-2xl mb-2'>0.00 đ</span>
                            </div>
                            <button disabled className=' uppercase bg-grey-d9 px-4 py-2 border border-grey-d9 rounded-md '>
                                <span className='text-sm text-grey-6c'>Đặt ngay</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingCart