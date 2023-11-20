import { useState } from 'react';
import GuestInformation from './GuestInformation';
import { useTranslation } from 'react-i18next';

type Props = {
  guestFormRef: any;
  addtionalGuestFormRef?: any;
  handleUseOrderData: Function;
};

function InformationOfGuests({ guestFormRef, addtionalGuestFormRef, handleUseOrderData }: Props) {
  const { t } = useTranslation();
  const [moreGuest, setMoreGuest] = useState<boolean>(false);
  return (
    <div>
      <GuestInformation
        handleUseOrderData={handleUseOrderData}
        inputId="guest-info-1"
        guestFormRef={guestFormRef}
        isReuseOrderData={true}
      />
      {moreGuest ? (
        <GuestInformation
          handleUseOrderData={handleUseOrderData}
          inputId="guset-info-2"
          guestFormRef={addtionalGuestFormRef}
          isReuseOrderData={true}
        />
      ) : (
        <div className="text-end">
          <button
            onClick={() => {
              setMoreGuest(true);
            }}
            className="primary-button h-9 text-sm"
          >
            + {t('BOOKING_FORM.STEP1.ADD_MORE')}
          </button>
        </div>
      )}
    </div>
  );
}

export default InformationOfGuests;
