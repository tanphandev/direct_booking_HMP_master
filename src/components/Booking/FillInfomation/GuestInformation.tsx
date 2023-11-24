import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { ChangeEvent } from 'react';
import InformationForm from './InfomationForm';

function GuestInformation({
  inputId,
  title,
  isReuseOrderData = false,
  guestFormRef,
  guestFormIndex,
  handleUseOrderData = () => {},
}: GuestInformationProps) {
  const { t } = useTranslation();
  const handleChecked = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      handleUseOrderData(typeof guestFormIndex === 'number' ? guestFormIndex : guestFormRef);
    }
  };
  return (
    <div>
      <div>
        <div
          className={classNames('flex justify-between', {
            'border-b-2 border-grey-21 py-2 mb-4': isReuseOrderData,
          })}
        >
          <h3 className="font-bold ">{title ? title : t('BOOKING_FORM.STEP1.GUEST_INFORMATION_TITLE')}</h3>
          <div
            className={classNames('flex items-center gap-x-2 cursor-pointer', {
              hidden: !isReuseOrderData,
            })}
          >
            <input id={inputId} className="w-4 h-4 cursor-pointer" type="checkbox" onChange={handleChecked} />
            <label className="cursor-pointer" htmlFor={inputId}>
              {t('BOOKING_FORM.USER_INPUT_FORM.USE_THE_SAME_INFORMATION_ABOVE')}
            </label>
          </div>
        </div>
        <InformationForm ref={guestFormRef} type="guest" />
      </div>
    </div>
  );
}

export default GuestInformation;
