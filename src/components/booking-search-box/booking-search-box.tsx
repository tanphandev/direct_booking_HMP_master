'use client'
import { useState } from "react";
import ArrowDown from "@/components/icons/ArrowDown";
import RightToCracket from "@/components/icons/RightToBracket";
import RightFromCracket from "@/components/icons/RightFromBracket";
import styles from "@/components/sidebar-search/sidebar-search.module.scss"

const BookingSearchBox = () => {
    const [isSearchBoxVisible, setIsSearchBoxVisible] = useState(false);
    const toggleSearchBox = () => {
        setIsSearchBoxVisible(!isSearchBoxVisible);
    };
    const checkinDate = new Date()
    const checkoutDate = new Date()
    return (
        <div className={'flex flex-col w-full p-6'}>
            <div className={'flex items-center justify-between'}>
                <span className={'text-2xl text-white'}>Tìm kiếm</span>
                <button className="" onClick={toggleSearchBox}>
                    <ArrowDown width="30px" height="30px" color="white" />
                </button>
            </div>
            {
                isSearchBoxVisible && (
                    <div className={' flex flex-col border-1'}>
                        <div className={'pt-5'}>
                            <h4 className="text-white pb-2 text-md">Ngày nhận phòng</h4>
                            <div className={'flex items-center bg-white p-2 rounded-md'}>
                                <RightToCracket width="24px" height="24px" />
                                <h3 className={'pl-3'}>{checkinDate.toLocaleDateString()}</h3>
                            </div>
                        </div>  
                        <div className={'pt-5'}>
                            <h4 className="text-white pb-2 text-md">Ngày trả phòng</h4>
                            <div className={'flex items-center bg-white p-2 rounded-md'}>
                                <RightFromCracket width="24px" height="24px" />
                                <h3 className={'pl-3'}>{checkoutDate.toLocaleDateString()}</h3>
                            </div>
                        </div>
                        <h4 className="text-md py-5 text-white">Ở lại {} đêm</h4>
                        <button className={`px-6 bg-blue-600 py-2 text-md rounded-md text-white uppercase ${styles['btn-search']}`}>Tìm kiếm</button>
                    </div>
                )
            }
        </div>
    );
}
export default BookingSearchBox;