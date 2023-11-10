import SidebarSearch from "@/components/sidebar-search/sidebar-search";
const SearchResultPage = () => {
    return (
        <div className=" lg:flex lg:mx-40 sm:mx-20 px-4 sm:px-4 py-10 ">
            <div className="flex-none lg:w-3/12">
                <SidebarSearch />
            </div>
            <div className="flex-initial pl-8">
                content
            </div>
        </div>

    );
}
export default SearchResultPage;