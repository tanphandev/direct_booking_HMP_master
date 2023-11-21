import { useCallback, useRef, useState } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { useAppSelector } from '@/hooks';
import { useTranslation } from 'react-i18next';

import PackageItemDetail from './PackageItemDetail';
import { LeftArrow, RightArrow } from './Arrow';
import 'react-horizontal-scrolling-menu/dist/styles.css';

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;
function PackageOption({ packageChose, setIsChoosePackage, setPackageChose }: PackageProps) {
  const { t } = useTranslation();
  const booking_packages: PackageDetail[] = useAppSelector((state) => state.booking.booking_packages);
  const [position, setPosition] = useState(0);
  const [selected, setSelected] = useState<number[]>([]);
  const isItemSelected = (id: number) => !!selected.find((el) => el === id);

  const handleClickItem =
    (id: number) =>
    ({ getItemById, scrollToItem }: scrollVisibilityApiType) => {
      const itemSelected = isItemSelected(id);

      setSelected((currentSelected) =>
        itemSelected ? currentSelected.filter((el) => el !== id) : currentSelected.concat(id),
      );
    };

  /* save position package item in list */
  const savePosition = useCallback(
    ({ scrollContainer }: scrollVisibilityApiType) =>
      !!scrollContainer.current && setPosition(scrollContainer.current.scrollLeft),
    [],
  );

  /* handle reset postion item list when click next and back */
  const restorePosition = useCallback(
    ({ scrollContainer }: scrollVisibilityApiType) => {
      if (scrollContainer.current) {
        scrollContainer.current.scrollLeft = position;
      }
    },
    [position],
  );

  /* handle user choose package */
  const handleChoosePackage = (packageItem: PackageDetail) => {
    setPackageChose && setPackageChose(packageItem);
  };

  /* go to review package when use chose it*/
  const GotoReviewPackage = () => {
    setIsChoosePackage && setIsChoosePackage(true);
  };
  const wapperRef = useRef<HTMLDivElement>(null);
  return (
    <div>
      <div ref={wapperRef} className="rounded-md md:mx-[-56px] text-grey-21 mb-2">
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} onInit={restorePosition} onScroll={savePosition}>
          {booking_packages.map((packageItem, index) => (
            <PackageItemDetail
              key={index}
              margin="0 8px"
              className="h-full"
              isActive={packageItem.pid === packageChose?.pid}
              packageDetail={packageItem}
              handleChoosePackage={handleChoosePackage}
              handleClickItem={handleClickItem}
            />
          ))}
        </ScrollMenu>
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => {
            packageChose && GotoReviewPackage();
          }}
          className={`transition-all w-[150px] h-[56px] text-white bg-grey-6c font-bold rounded-md opacity-60 uppercase ${
            packageChose ? '!bg-blue-0a !opacity-100 hover:!bg-blue-09' : 'cursor-not-allowed'
          }`}
        >
          {t('HOMEPAGE.NEXT')}
        </button>
      </div>
    </div>
  );
}

export default PackageOption;
