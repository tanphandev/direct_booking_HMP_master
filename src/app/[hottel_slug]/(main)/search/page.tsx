import BookingCart from "@/components/BookingCart/BookingCart";
import RoomFeatures from "@/components/RoomFeatures/RoomFeatures";
import SearchResult from "@/components/SearchResult/SearchResult";
import ListFacilities from "@/components/list-facilities/list-facilities";
import SidebarSearch from "@/components/sidebar-search/sidebar-search";
const SearchResultPage = () => {

    return (
        <div className="">
            <div className=" lg:flex lg:mx-40 sm:mx-20 px-4 sm:px-4 py-10  ">
                <div className="flex-none lg:w-3/12">
                    <SidebarSearch />
                </div>
                <div className="flex-1 pl-8">
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