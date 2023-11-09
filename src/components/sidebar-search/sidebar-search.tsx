import BookingSearchBox from "@/components/booking-search-box/booking-search-box";
import styles from "@/components/sidebar-search/sidebar-search.module.scss"
import Sliders from "@/components/icons/Sliders";
import Image from 'next/image';
import GG_MAP from "@/../public/assets/image/gmap.jpg"
const SidebarSearch = () => {
    return (
        <>
            <div className={` rounded-t-md ${styles['booking-box-search']}`}>
                <BookingSearchBox />
            </div>
            <button className={`rounded-md flex my-14 py-2 px-6 w-full items-center justify-between  ${styles['amenties-box-search']}`}>
                <span className="flex-none">
                    <Sliders width="30px" height="30px" />
                </span>
                <span className="text-white flex-auto uppercase  align-middle px-3  " >Tiện nghi</span>
            </button>
            <div>
                <div className="relative">
                    <Image src={GG_MAP} alt="GG_MAP" className="w-full" />
                    <button className={`absolute h-fit px-5 py-2 rounded-sm  ${styles['btn-search-map']}`}>
                        <span className="text-white"> Xem bản đồ</span>
                    </button>
                </div>
                <div className="uppercase p-5 font-semibold">
                    Những nơi gần đây
                </div>
            </div>
        </>

    );
}
export default SidebarSearch;