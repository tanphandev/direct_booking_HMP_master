import { useState } from 'react';
import GuestInformation from './GuestInformation';

function InformationOfGuests() {
  const [moreGuest, setMoreGuest] = useState<boolean>(false);
  return (
    <div>
      <GuestInformation isReuseOrderData={true} />
      {moreGuest ? (
        <GuestInformation isReuseOrderData={true} />
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
