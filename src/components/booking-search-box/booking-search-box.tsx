'use client'
import { useState } from "react";
import ArrowDown from "@/components/icons/ArrowDown";
import CheckinNew from "@/components/icons/CheckinNew";
import CheckoutNew from "@/components/icons/CheckoutNew";

const BookingSearchBox = () => {
    const [isSearchBoxVisible, setIsSearchBoxVisible] = useState(false);
    const toggleSearchBox = () => {
        setIsSearchBoxVisible(!isSearchBoxVisible);
    };
    const checkinDate = new Date()
    const checkoutDate = new Date()
    return (
        <div className={'flex flex-col w-full px-2 py-2 md:px-4 lg:px-6 lg:py-3'}>
            <div className={'flex items-center justify-between'}>
                <span className={' text-xl lg:text-2xl text-white font-light '}>Tìm kiếm</span>
                <button className="" onClick={toggleSearchBox}>
                    <ArrowDown width="30px" height="30px" />
                </button>
            </div>
            {
                isSearchBoxVisible && (
                    <div className={' flex flex-col border-1 pb-2'}>
                        <div className={'pt-5'}>
                            <h4 className="text-white pb-2 text-md">Ngày nhận phòng</h4>
                            <div className={'flex items-center bg-white p-2 rounded-md'}>
                                <CheckinNew />
                                <h3 className={'pl-3'}>{checkinDate.toLocaleDateString()}</h3>
                            </div>
                        </div>  
                        <div className={'pt-5'}>
                            <h4 className="text-white pb-2 text-md">Ngày trả phòng</h4>
                            <div className={'flex items-center bg-white p-2 rounded-md'}>
                                <CheckoutNew/>
                                <h3 className={'pl-3'}>{checkoutDate.toLocaleDateString()}</h3>
                            </div>
                        </div>
                        <h4 className="text-md py-5 text-white">Ở lại {} đêm</h4>
                        <button className={`px-6 bg-blue-600 py-2 text-md rounded-md text-white uppercase bg-[#0A7CFF]`}>Tìm kiếm</button>
                    </div>
                )
            }
        </div>
    );
}
export default BookingSearchBox;