import { useRef } from 'react';
import { useModalContext } from '@/contexts/ModalProvider';
import { useOnClickOutside } from '@/hooks/useClickOutSide';
import XmarkIcon from '@/assets/icons/XmarkIcon';
function DescriptionPackageOfferModal() {
  const modalRef = useRef<HTMLDivElement>(null);
  const { closeModalWithAnimation } = useModalContext();
  useOnClickOutside(modalRef, () => {
    closeModalWithAnimation(150);
  });
  const { payload } = useModalContext();
  const package_des = payload;
  return (
    <div className="z-20 flex justify-center items-center fixed top-0 left-0 right-0 bottom-0 bg-black-0.3">
      <div id="modal" ref={modalRef} className="transition-all animate-fadeIn relative">
        <div className="flex flex-col ">
          <div
            onClick={() => {
              closeModalWithAnimation(150);
            }}
            className="z-10 absolute top-3 right-3 flex items-center justify-center w-[40px] h-[40px] transition-colors cursor-pointer "
          >
            <XmarkIcon width="20px" height="20px" className="transition-colors text-grey-6c hover:text-grey-21" />
          </div>
          <div className="max-w-[500px] md:max-h-[550px]  h-[100vh] sm:w-[80vw] bg-white rounded-[4px] text-left justify-center p-10 items-stretch">
            <p className="text-grey-21 mb-4" dangerouslySetInnerHTML={{ __html: package_des }} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default DescriptionPackageOfferModal;
