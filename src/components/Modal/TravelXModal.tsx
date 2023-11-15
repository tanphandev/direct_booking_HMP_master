import Image from 'next/image';
import { useRef } from 'react';
import { useOnClickOutside } from '@/hooks/useClickOutSide';
import { useModalContext } from '@/contexts/ModalProvider';

import TravelXLogo from '@/../public/assets/image/travelx_logo.png';
import XmarkIcon from '@/assets/icons/XmarkIcon';
import { outsidePath } from '@/routes/Path';

function TravelXModal() {
  const modalRef = useRef<HTMLDivElement>(null);
  const { closeModalWithAnimation } = useModalContext();
  useOnClickOutside(modalRef, () => {
    closeModalWithAnimation(150);
  });
  return (
    <div className="z-20 flex justify-center items-center fixed top-0 left-0 right-0 bottom-0 bg-black-0.3">
      <div id="modal" ref={modalRef} className="transition-all animate-fadeIn travel-x-modal relative">
        <div
          onClick={() => {
            closeModalWithAnimation(150);
          }}
          className="z-10 absolute top-3 right-3 flex items-center justify-center w-[40px] h-[40px] transition-colors cursor-pointer "
        >
          <XmarkIcon width="20px" height="20px" className="transition-colors text-grey-6c hover:text-grey-21" />
        </div>
        <div className="flex flex-col justify-between w-[100vw] h-[100vh] sm:w-[500px] sm:h-[550px] bg-white rounded-sm">
          <div className="px-8 pt-8">
            <div className="flex justify-center">
              <Image src={TravelXLogo} alt="travel-x-logo" width={300} height={78} className="mb-4" />
            </div>
            <p className="mb-4">TravelX is a hotel reservation management app.</p>
            <p className="mb-4">With partner hotels, you can:</p>
            <ul className="pl-10 list-disc">
              <li> Access hotel information, and receive hotel announcements &amp; special offers </li>
              <li> View reservation details and request specific check-in/out times </li>
              <li> Order hotel services, track ongoing orders and view your bill </li>
              <li> Message the hotel and your guest cohort </li>
              <li> Access hotel information, and receive hotel announcements &amp; special offers </li>
            </ul>
          </div>
          {/* external link */}
          <div className="text-end p-4">
            <button className="transition-colors h-9 px-4 bg-blue-0a hover:bg-blue-09 rounded-md font-bold">
              <a className="text-sm text-white " target="_blank" href={outsidePath.HMP_MASTER}>
                Click for Details
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelXModal;
