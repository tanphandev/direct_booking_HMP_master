import SidebarSearch from "@/components/sidebar-search/sidebar-search";
const SearchResultPage = () => {
    return (
        <div className="flex px-28 py-10 ">
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