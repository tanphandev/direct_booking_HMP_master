import CheckIn from '../CheckIn/CheckIn';
import PackageItemDetail from '../PackageOption/PackageItemDetail';
import PersonQuanity from '../PersonQuanity/PersonQuanity';

function ReviewPackage({ packageChose, setIsChoosePackage }: PackageProps) {
  return (
    <div className="flex">
      <PackageItemDetail width="250px" height="320px" isActive={true} packageDetail={packageChose!} />
      <div className="flex-1 ml-4">
        <CheckIn />
        <PersonQuanity />
        <div className="flex justify-end">
          <button
            onClick={() => {
              setIsChoosePackage && setIsChoosePackage(false);
            }}
            className="transition-colors w-[150px] h-[56px] text-base font-bold text-grey-21 bg-white hover:bg-grey-d9 rounded-md"
          >
            BACK
          </button>
          <button className="transition-colors w-[150px] h-[56px] text-base font-bold text-white bg-blue-0a hover:bg-blue-09 rounded-md ml-2">
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReviewPackage;
