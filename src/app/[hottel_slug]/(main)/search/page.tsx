import BookingCart from "@/components/BookingCart/BookingCart";
import RoomFeatures from "@/components/RoomFeatures/RoomFeatures";
import SearchResult from "@/components/SearchResult/SearchResult";
import ListFacilities from "@/components/list-facilities/list-facilities";
import SidebarSearch from "@/components/sidebar-search/sidebar-search";
const SearchResultPage = () => {

    return (
        <div className="xl:max-w-6xl lg:max-w-4xl md:max-w-[720px] sm:max-w-lg w-full flex-col mx-auto  px-4 ">
            <div className=" lg:flex py-10  ">
                <div className="flex-none lg:w-3/12">
                    <SidebarSearch />
                </div>
                <div className="flex-1 lg:pl-8"> 
                    <ListFacilities />
                    <RoomFeatures />
                    <SearchResult />
                </div>
            </div>
            <div>
                <BookingCart />
            </div>
        </div>
    );
}
export default SearchResultPage;