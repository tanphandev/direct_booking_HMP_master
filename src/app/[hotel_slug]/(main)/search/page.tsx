import { RoomProvider } from '@/contexts/RoomProvider';
import RoomFeatures from '@/components/RoomFeatures/RoomFeatures';
import SearchResult from '@/components/SearchResult/SearchResult';
import BookingCart from '@/components/BookingCart/BookingCart';
import ListFacilities from '@/components/ListFacilities/ListFacilities';
import SidebarSearch from '@/components/SidebarSearch/SidebarSearch';

const SearchResultPage = () => {
  return (
    <RoomProvider>
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
      </div>
      <div className="sticky bottom-0">
        <BookingCart />
      </div>
    </RoomProvider>
  );
};

export default SearchResultPage;
