import { useContext } from 'react';
import { useModalContext } from '@/contexts/ModalProvider';

import { VisibilityContext } from 'react-horizontal-scrolling-menu';
import { MODAL_NAME } from '@/types/modal';
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
  width,
  height,
  className,
  padding,
  margin,
  packageDetail,
  isActive,
  handleClickItem,
  handleChoosePackage,
}: PackageItemDetail) {
  const { openModal, closeModalWithAnimation } = useModalContext();
  const visibility = useContext(VisibilityContext);

  const showPackageDetail = () => {
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
        <h3 className="font-bold text-center">{packageDetail.name}</h3>
        <p className="font-bold">{t('HOMEPAGE.DURATION')}: {packageDetail.detail.duration}</p>
        <p className="font-bold">{t('HOMEPAGE.MAX_ADULT')}: {packageDetail.detail.max_adult}</p>
        <p className="font-bold">{t('HOMEPAGE.MAX_CHILDREN')}: {packageDetail.detail.max_children}</p>
        <p className="font-bold">{t('HOMEPAGE.CHILDREN')}  {t('HOMEPAGE.PRICE')}: {packageDetail.detail.adult_price}</p>
        <p className="font-bold">{t('HOMEPAGE.ADULT')} {t('HOMEPAGE.PRICE')}: {packageDetail.detail.child_price}</p>
        <p className="font-bold">{t('HOMEPAGE.SINGLE_PRICE')}: {packageDetail.detail.signle_price}</p>
        <p>{packageDetail.detail.description}</p>
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
