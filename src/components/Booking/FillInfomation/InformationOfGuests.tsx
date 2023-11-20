import { useState } from 'react';
import GuestInformation from './GuestInformation';

type Props = {
  guestFormRef: any;
  addtionalGuestFormRef?: any;
  handleUseOrderData: Function;
};

function InformationOfGuests({ guestFormRef, addtionalGuestFormRef, handleUseOrderData }: Props) {
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
            + Add more
          </button>
        </div>
      )}
    </div>
  );
}

export default InformationOfGuests;
