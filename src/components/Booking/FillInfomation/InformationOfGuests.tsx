import { useState } from 'react';
import GuestInformation from './GuestInformation';

type Props = {
  guestFormRef: any;
  addtionalGuestFormRef?: any;
};

function InformationOfGuests({ guestFormRef, addtionalGuestFormRef }: Props) {
  const [moreGuest, setMoreGuest] = useState<boolean>(false);
  return (
    <div>
      <GuestInformation inputId="guest-info-1" guestFormRef={guestFormRef} isReuseOrderData={true} />
      {moreGuest ? (
        <GuestInformation inputId="guset-info-2" guestFormRef={addtionalGuestFormRef} isReuseOrderData={true} />
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
