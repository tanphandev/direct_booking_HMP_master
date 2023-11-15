'use client'
import ArrowDown from "@/assets/icons/ArrowDown";
import CheckinNew from "@/assets/icons/CheckinNew";
import CheckoutNew from "@/assets/icons/CheckoutNew";
import { createRef, useImperativeHandle, useState } from "react";
import { useOnClickOutside } from "@/hooks/useClickOutSide";
import Calendar from "@/components/BookingChoose/Calendar/Calendar";
import '@/i18n/i18n';
const BookingSearchBox = () => {
    const [isHideCheckinCalendar, setIsHideCheckinCalendar] = useState<boolean>(true);
    const [isHideCheckoutCalendar, setIsHideCheckoutCalendar] = useState<boolean>(true);

    let calendarRef = null;
    if (typeof document !== 'undefined') {
        calendarRef = document.querySelector('.rdrDateRangePickerWrapper') as Element;
    }
    const currentDay = new Date();
    const nextDay = new Date(currentDay);
    const [rangeDate, setRangeDate] = useState<CalendarRangeProps[]>([
        {
            startDate: currentDay,
            endDate: nextDay,
            key: 'selection',
        },
    ]);
    let quantityNight: number = (rangeDate[0].endDate - rangeDate[0].startDate) / 86400000;
    const checkInRef = createRef<RangeDate>();

    useImperativeHandle(checkInRef, () => ({
        startDate: rangeDate[0].startDate,
        endDate: rangeDate[0].endDate,
    }));
    const [isSearchBoxVisible, setIsSearchBoxVisible] = useState(false);
    const toggleSearchBox = () => {
        setIsSearchBoxVisible(!isSearchBoxVisible);
    };
    const toggleCheckinCalendar = () => {
        setIsHideCheckinCalendar(!isHideCheckinCalendar);
    };
    const toggleCheckoutCalendar = () => {
        setIsHideCheckoutCalendar(!isHideCheckoutCalendar);
    };

    useOnClickOutside(calendarRef, () => {
        setIsHideCheckinCalendar(true);
        setIsHideCheckoutCalendar(true);

    });
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
                        <div className={'pt-5 relative'}>
                            <h4 className="text-white pb-2 text-md">Ngày nhận phòng</h4>
                            <div onClick={toggleCheckinCalendar} className={'flex items-center bg-white p-2 rounded-md'}>
                                <CheckinNew />
                                <h3 className={'pl-3'}>{rangeDate[0].startDate.toLocaleDateString()}</h3>
                            </div>
                            <Calendar isHide={isHideCheckinCalendar} rangeDate={rangeDate} setRangeDate={setRangeDate} />
                        </div>
                        <div className={'pt-5 relative'}>
                            <h4 className="text-white pb-2 text-md">Ngày trả phòng</h4>
                            <div onClick={toggleCheckoutCalendar} className={'flex items-center bg-white p-2 rounded-md'}>
                                <CheckoutNew />
                                <h3 className={'pl-3'}>{rangeDate[0].endDate.toLocaleDateString()}</h3>
                            </div>
                            <Calendar isHide={isHideCheckoutCalendar} rangeDate={rangeDate} setRangeDate={setRangeDate} />

                        </div>
                        <h4 className="text-md py-5 text-white">Ở lại {quantityNight} đêm</h4>
                        <button className={`px-6 bg-blue-600 py-2 text-md rounded-md text-white uppercase bg-[#0A7CFF]`}>Tìm kiếm</button>
                    </div>
                )
            }
        </div>
    );
}
export default BookingSearchBox;