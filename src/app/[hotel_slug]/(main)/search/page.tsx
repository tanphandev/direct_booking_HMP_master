import BookingCart from '@/components/BookingCart/BookingCart';
import RoomFeatures from '@/components/RoomFeatures/RoomFeatures';
import SearchResult from '@/components/SearchResult/SearchResult';
import ListFacilities from '@/components/ListFacilities/ListFacilities';
import SidebarSearch from '@/components/SidebarSearch/SidebarSearch';
import dynamic from 'next/dynamic';
// const SidebarSearchNoSSR = dynamic(() => import('@/components/sidebar-search/sidebar-search'), { ssr: false });
// const RoomFeaturesNoSSR = dynamic(() => import('@/components/RoomFeatures/RoomFeatures'), { ssr: false });
// const SearchResultNoSSR = dynamic(() => import('@/components/SearchResult/SearchResult'), { ssr: false });
// const ListFacilitiesNoSSR = dynamic(() => import('@/components/list-facilities/list-facilities'), { ssr: false });
// const BookingCartNoSSR = dynamic(() => import('@/components/BookingCart/BookingCart'), { ssr: false });

const SearchResultPage = () => {
  return (
    <>
      <div className="xl:max-w-6xl lg:max-w-4xl md:max-w-[720px] sm:max-w-lg w-full flex-col mx-auto  px-4 ">
        <div className=" lg:flex py-10  ">
          <div className="flex-none lg:w-3/12">
            <SidebarSearch />
            {/* <SidebarSearchNoSSR /> */}
          </div>
          <div className="flex-1 lg:pl-8">
            <ListFacilities />
            <RoomFeatures />
            <SearchResult />
            {/* <ListFacilitiesNoSSR />
            <RoomFeaturesNoSSR />
            <SearchResultNoSSR /> */}
          </div>
        </div>
      </div>
      <div className="sticky bottom-0">
        <BookingCart />
        {/* <BookingCartNoSSR /> */}
      </div>
    </>
  );
};
export default SearchResultPage;
