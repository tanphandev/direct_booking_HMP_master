import { useContext } from 'react';
import { useModalContext } from '@/contexts/ModalProvider';

import { VisibilityContext } from 'react-horizontal-scrolling-menu';
import { MODAL_NAME } from '@/types/modal';
import { HANDLE_STATUS } from '@/types/handle';
import { useTranslation } from 'next-i18next';

type PackageItemDetail = {
  width?: string;
  height?: string;
  className?: string;
  padding?: string;
  margin?: string;
  packageDetail: PackageDetail;
  isActive: boolean;
  handleChoosePackage?: (packageItem: PackageDetail) => void;
  handleClickItem?: Function;
};
function PackageItemDetail({
  className,
  padding,
  margin,
  packageDetail,
  isActive,
  handleClickItem,
  handleChoosePackage,
}: PackageItemDetail) {
  const { openModal, setStatus, setPayload } = useModalContext();
  const visibility = useContext(VisibilityContext);

  const showPackageDetail = () => {
    setStatus(HANDLE_STATUS.IN_PROGRESS);
    setPayload(packageDetail);
    openModal(MODAL_NAME.PACKAGE_DETAIL);
  };
  const { t } = useTranslation();

  return (
    <div
      style={{
        padding: padding,
        margin: margin,
      }}
      onClick={() => {
        handleChoosePackage && handleChoosePackage(packageDetail);
        handleClickItem && handleClickItem(visibility);
      }}
      className={`${className} flex flex-col justify-between transition-colors text-grey-21 bg-white cursor-pointer rounded-md ${
        isActive ? 'text-white !bg-blue-0a' : ''
      } p-4`}
    >
      <div>
        <h3 className="font-bold text-center">{packageDetail.title}</h3>
        <p className="font-bold">
          Duration: {packageDetail.packages_night_stay + 1} days, {packageDetail.packages_night_stay} nights
        </p>
        <p className="font-bold">Max Adult: {packageDetail.db_max_adult}</p>
        <p className="font-bold">Max Children: {packageDetail.db_max_children}</p>
        <p className="font-bold">Adult Price: {packageDetail.packages_adult_rate}đ</p>
        <p className="font-bold">Child Price: {packageDetail.packages_child_rate}đ</p>
        <p className="font-bold">Single Price: {packageDetail.packages_single_rate}đ</p>
        <p className="line-clamp-2">{packageDetail.packages_note}</p>
      </div>
      <div className="w-full text-end">
        <button onClick={showPackageDetail} className=" hover:text-grey-21 underline">
        {t('HOMEPAGE.MORE_DETAILS')}
        </button>
      </div>
    </div>
  );
}

export default PackageItemDetail;
