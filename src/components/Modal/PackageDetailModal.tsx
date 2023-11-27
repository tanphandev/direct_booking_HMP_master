import { useRef } from 'react';
import { useModalContext } from '@/contexts/ModalProvider';
import { useOnClickOutside } from '@/hooks/useClickOutSide';
import { useAppSelector } from '@/hooks';
import { useTranslation } from 'react-i18next';

import Schedule from '../BookingChoose/Schedule/Schedule';
import XmarkIcon from '@/assets/icons/XmarkIcon';
import { HANDLE_STATUS } from '@/types/handle';
import { formatCurrency } from '@/utils/helper';
import { isEmpty } from 'lodash';

function PackageDetailModal() {
  const { t } = useTranslation();
  const modalRef = useRef<HTMLDivElement>(null);
  const { business_currency } = useAppSelector((state) => state.business.basic_business_info);
  const { payload: packageDetail, setStatus, closeModalWithAnimation } = useModalContext();
  console.log('packageDetail', packageDetail);
  useOnClickOutside(modalRef, () => {
    closeModalWithAnimation(150);
    setStatus(HANDLE_STATUS.NOT_START);
  });
  return (
    <div className="z-20 flex justify-center items-center fixed top-0 left-0 right-0 bottom-0 bg-black-0.3">
      <div id="modal" ref={modalRef} className=" package-detail-modal transition-all animate-fadeIn relative">
        <div
          onClick={() => {
            closeModalWithAnimation(150);
            setStatus(HANDLE_STATUS.NOT_START);
          }}
          className="z-10 absolute top-4 right-4 flex items-center justify-center w-[40px] h-[40px] transition-colors bg-grey-d9 hover:bg-grey-6c rounded-full cursor-pointer"
        >
          <XmarkIcon width="20px" height="20px" className="text-grey-21" />
        </div>
        <div className="package-detail-scrollbar w-[100vw] h-[100vh] md:w-[500px] md:max-h-[550px] overflow-y-scroll bg-white px-8 rounded-md">
          <h2 className="font-bold text-center p-4">{packageDetail?.title}</h2>
          <div className="border-[1px] w-[280px] p-4 mb-4 border-grey-d9 rounded-lg">
            <p className="font-bold">
              {t('HOMEPAGE.DURATION')}: {packageDetail?.packages_night_stay + 1}{' '}
              {packageDetail?.packages_night_stay + 1 <= 1
                ? t('BOOKING_FORM.SIDEBAR.DAY')
                : t('BOOKING_FORM.SIDEBAR.DAYS')}
              , {packageDetail?.packages_night_stay}{' '}
              {packageDetail?.packages_night_stay <= 1
                ? t('BOOKING_FORM.SIDEBAR.NIGHT')
                : t('BOOKING_FORM.SIDEBAR.NIGHTS')}
            </p>
            <div className="py-2 my-2 border-b-2 border-grey-21">
              <p className="font-bold">
                {' '}
                {t('HOMEPAGE.MAX_ADULT')}: {packageDetail?.db_max_adult}
              </p>
              <p className="font-bold">
                {t('HOMEPAGE.MAX_CHILDREN')}: {packageDetail?.db_max_children}
              </p>
            </div>
            <div className="py-2 my-2 border-b-2 border-grey-21">
              <p className="font-bold">
                {t('HOMEPAGE.ADULT')} {t('HOMEPAGE.PRICE')}:{' '}
                {formatCurrency(business_currency).format(packageDetail?.packages_adult_rate)}đ
              </p>
              <p className="font-bold">
                {t('HOMEPAGE.CHILD')} {t('HOMEPAGE.PRICE')}: :{' '}
                {formatCurrency(business_currency).format(packageDetail?.packages_child_rate)}đ
              </p>
              <p className="font-bold">
                {t('HOMEPAGE.SINGLE_PRICE')}:{' '}
                {formatCurrency(business_currency).format(packageDetail?.packages_single_rate)}đ
              </p>
            </div>
          </div>
          <p>{packageDetail?.packages_note}</p>
          {!isEmpty(packageDetail?.packages_room_type) && (
            <div className="my-6">
              <p className="text-lg font-bold mb-2">{t('HOMEPAGE.ROOM')}</p>
              {packageDetail?.packages_room_type?.map((item: any, index: number) => (
                <p key={index} className="font-bold">
                  {item?.title}
                </p>
              ))}
            </div>
          )}
          {packageDetail?.packages_days.map((package_day: any, index: number) => (
            <Schedule activities={package_day?.activities} key={index} day={`${t('HOMEPAGE.DAY')} ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PackageDetailModal;
