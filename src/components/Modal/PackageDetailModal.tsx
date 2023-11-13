import { useRef } from 'react';
import { useModalContext } from '@/contexts/ModalProvider';
import { useOnClickOutside } from '@/hooks/useClickOutSide';

import Schedule from '../BookingChoose/Schedule/Schedule';
import XmarkIcon from '@/assets/icons/XmarkIcon';

function PackageDetailModal() {
  const modalRef = useRef<HTMLDivElement>(null);
  const { closeModalWithAnimation } = useModalContext();
  useOnClickOutside(modalRef, () => {
    closeModalWithAnimation(150);
  });
  return (
    <div className="z-20 flex justify-center items-center fixed top-0 left-0 right-0 bottom-0 bg-black-0.3">
      <div id="modal" ref={modalRef} className="transition-all package-detail-modal relative">
        <div
          onClick={() => {
            closeModalWithAnimation(150);
          }}
          className="z-10 absolute top-4 right-4 flex items-center justify-center w-[40px] h-[40px] transition-colors bg-grey-d9 hover:bg-grey-6c rounded-full cursor-pointer"
        >
          <XmarkIcon width="20px" height="20px" className="text-grey-21" />
        </div>
        <div className="package-detail-scrollbar w-[500px] max-h-[550px] overflow-y-scroll bg-white px-8 rounded-md">
          <h2 className="font-bold text-center p-4">Title</h2>
          <div className="border-[1px] w-[280px] p-4 mb-4 border-grey-d9 rounded-lg">
            <p className="font-bold">Duration: 2 days, 1 night</p>
            <div className="py-2 my-2 border-b-2 border-grey-21">
              <p className="font-bold">Max Adult: 3</p>
              <p className="font-bold">Max Children: 3</p>
            </div>
            <div className="py-2 my-2 border-b-2 border-grey-21">
              <p className="font-bold">Adult Price: 200.00</p>
              <p className="font-bold">Child Price: 150.00</p>
              <p className="font-bold">Signle Price: 100.00</p>
            </div>
          </div>
          <p>Description</p>
          <div className="my-6">
            <p className="text-lg font-bold mb-2">Room</p>
            <p className="font-bold">Room Type #2</p>
          </div>
          <Schedule day="Day 1" />
          <Schedule day="Day 2" />
        </div>
      </div>
    </div>
  );
}

export default PackageDetailModal;
