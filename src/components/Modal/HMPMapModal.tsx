import { useRef } from 'react';
import { useOnClickOutside } from '@/hooks/useClickOutSide';
import { useModalContext } from '@/contexts/ModalProvider';

import Map from '../Map/Map';
import { HMP_MASTER_POSITION } from '@/constants/map';

function HMPMap() {
  const modalRef = useRef<HTMLDivElement>(null);
  const { closeModalWithAnimation } = useModalContext();
  useOnClickOutside(modalRef, () => {
    closeModalWithAnimation(150);
  });

  return (
    <div className="z-20 flex justify-center items-center fixed top-0 left-0 right-0 bottom-0 bg-black-0.3">
      <div id="modal" ref={modalRef} className="transition-all animate-fadeIn map-modal relative">
        {/* <div
          onClick={() => {
            closeModalWithAnimation(150);
          }}
          className="group z-10 absolute top-3 left-3 flex items-center justify-center w-[40px] h-[40px] bg-black-0.2 hover:bg-black-0.54 rounded-full transition-colors cursor-pointer"
        >
          <XmarkIcon width="20px" height="20px" className="transition-colors text-grey-21 group-hover:text-grey-99" />
        </div> */}
        <Map
          position={HMP_MASTER_POSITION.position}
          marker={HMP_MASTER_POSITION.position}
          markerLabel={HMP_MASTER_POSITION.label}
          mapClassName="w-[100vw] h-[100vh] md:w-[80vw] md:h-[80vh]"
        />
      </div>
    </div>
  );
}

export default HMPMap;
