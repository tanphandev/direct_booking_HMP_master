import { useContext } from 'react';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';

import { PackageDetail } from '@/types/booking';

type PackageItemDetail = {
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  packageDetail: PackageDetail;
  isActive: boolean;
  handleChoosePackage?: (packageItem: PackageDetail) => void;
  handleClickItem?: Function;
};
function PackageItemDetail({
  width,
  height,
  padding,
  margin,
  packageDetail,
  isActive,
  handleClickItem,
  handleChoosePackage
}: PackageItemDetail) {
  const visibility = useContext(VisibilityContext);
  return (
    <div
      style={{
        width: width,
        height: height,
        padding: padding,
        margin: margin
      }}
      onClick={() => {
        handleChoosePackage && handleChoosePackage(packageDetail);
        handleClickItem && handleClickItem(visibility);
      }}
      className={`transition-colors text-grey-21 bg-white cursor-pointer rounded-md ${
        isActive ? 'text-white !bg-blue-0a' : ''
      } p-4`}
    >
      <h3 className="font-bold text-center">{packageDetail.name}</h3>
      <p className="font-bold">Duration: {packageDetail.detail.duration}</p>
      <p className="font-bold">Max Adult: {packageDetail.detail.max_adult}</p>
      <p className="font-bold">Max Children: {packageDetail.detail.max_children}</p>
      <p className="font-bold">Adult Price: {packageDetail.detail.adult_price}</p>
      <p className="font-bold">Child Price: {packageDetail.detail.child_price}</p>
      <p className="font-bold">Signle Price: {packageDetail.detail.signle_price}</p>
      <p>{packageDetail.detail.description}</p>
    </div>
  );
}

export default PackageItemDetail;
