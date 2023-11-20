import { useModalContext } from '@/contexts/ModalProvider';
import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';

import { MODAL_NAME } from '@/types/modal';
import WarningIcon from '@/assets/icons/WarningIcon';

const StayManagementCheckbox = forwardRef<HTMLInputElement, {}>(function Component({}, ref) {
  const { t } = useTranslation();
  const { openModal } = useModalContext();
  return (
    <div className="flex justify-between bg-green-1d rounded-md text-white p-4">
      <div className="flex gap-x-2 items-center">
        <input ref={ref} id="manage-stay-on-phone" type="checkbox" className="w-4 h-4 cursor-pointer" />
        <label htmlFor="manage-stay-on-phone" className="cursor-pointer">
          {t('BOOKING_FORM.STEP1.SIGNIN_BANNER_INTRO')}
        </label>
      </div>
      <button
        onClick={() => {
          openModal(MODAL_NAME.TRAVELX);
        }}
      >
        <WarningIcon width="24px" height="24px" />
      </button>
    </div>
  );
});

export default StayManagementCheckbox;
