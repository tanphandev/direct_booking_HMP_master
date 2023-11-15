import Link from 'next/link';
import { useParams } from 'next/navigation';

import Path from '@/routes/Path';
import CheckIn from '../CheckIn/CheckIn';
import PackageItemDetail from '../PackageOption/PackageItemDetail';
import PersonQuanity from '../PersonQuanity/PersonQuanity';

function ReviewPackage({ packageChose, setIsChoosePackage }: PackageProps) {
  const { hotel_slug } = useParams();

  return (
    <div className="flex flex-col sm:flex-row gap-y-4 sm:gap-0">
      <PackageItemDetail width="250px" height="320px" isActive={true} packageDetail={packageChose!} />
      <div className="flex-1 sm:ml-4">
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
          <Link href={Path.BOOKING(hotel_slug as string)}>
            <button className="transition-colors w-[150px] h-[56px] text-base font-bold text-white bg-blue-0a hover:bg-blue-09 rounded-md ml-2">
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ReviewPackage;
