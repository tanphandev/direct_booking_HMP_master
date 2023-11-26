import { useContext } from 'react';
import { useModalContext } from '@/contexts/ModalProvider';
import { useAppSelector } from '@/hooks';

import { VisibilityContext } from 'react-horizontal-scrolling-menu';
import { MODAL_NAME } from '@/types/modal';
import { HANDLE_STATUS } from '@/types/handle';
import { useTranslation } from 'next-i18next';
import { formatCurrency } from '@/utils/helper';
import classNames from 'classnames';

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
  const { t } = useTranslation();
  const { business_currency } = useAppSelector((state) => state.business.basic_business_info);
  const { openModal, setStatus, setPayload } = useModalContext();
  const visibility = useContext(VisibilityContext);

  const showPackageDetail = () => {
    setStatus(HANDLE_STATUS.IN_PROGRESS);
    setPayload(packageDetail);
    openModal(MODAL_NAME.PACKAGE_DETAIL);
  };

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
        <h3 className="font-bold text-center line-clamp-2">{packageDetail.title}</h3>
        <p className="font-bold">
          {t('HOMEPAGE.DURATION')}: {packageDetail.packages_night_stay + 1}{' '}
          {packageDetail.packages_night_stay + 1 <= 1 ? t('BOOKING_FORM.SIDEBAR.DAY') : t('BOOKING_FORM.SIDEBAR.DAYS')},{' '}
          {packageDetail.packages_night_stay}{' '}
          {packageDetail.packages_night_stay <= 1 ? t('BOOKING_FORM.SIDEBAR.NIGHT') : t('BOOKING_FORM.SIDEBAR.NIGHTS')}
        </p>
        <p className="font-bold">
          {t('HOMEPAGE.MAX_ADULT')}: {packageDetail.db_max_adult}
        </p>
        <p className="font-bold">
          {t('HOMEPAGE.MAX_CHILDREN')}: {packageDetail.db_max_children}
        </p>
        <p className="font-bold">
          {t('HOMEPAGE.ADULT')} {t('HOMEPAGE.PRICE')}:{' '}
          {formatCurrency(business_currency).format(packageDetail.packages_adult_rate)}
        </p>
        <p className="font-bold">
          {t('HOMEPAGE.CHILD')} {t('HOMEPAGE.PRICE')}:{' '}
          {formatCurrency(business_currency).format(packageDetail.packages_child_rate)}
        </p>
        <p className="font-bold">
          {t('HOMEPAGE.SINGLE_PRICE')}: {formatCurrency(business_currency).format(packageDetail.packages_single_rate)}
        </p>
        <p className="line-clamp-2">{packageDetail.packages_note}</p>
      </div>
      <div className="w-full text-end">
        <button
          onClick={(e) => {
            e.stopPropagation();
            showPackageDetail();
          }}
          className={classNames('text-blue-09 hover:!text-grey-21 underline', {
            '!text-white': isActive,
          })}
        >
          {t('HOMEPAGE.MORE_DETAILS')}
        </button>
      </div>
    </div>
  );
}

export default PackageItemDetail;
