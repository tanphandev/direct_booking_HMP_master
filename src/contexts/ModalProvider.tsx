import { createContext, useCallback, useContext, useMemo, useState } from 'react';

import TravelXModal from '@/components/Modal/TravelXModal';
import PackageDetailModal from '@/components/Modal/PackageDetailModal';
import { HANDLE_STATUS } from '@/types/handle';
import { MODAL_NAME } from '@/types/modal';
import { sleep } from '@/utils/helper';
import AskQuestionModal from '@/components/Modal/AskQuestionModal';
import HMPMap from '@/components/Modal/HMPMapModal';
import AskQuestionThankYouModal from '@/components/Modal/AskQuestionThankYouModal';
import AmenitiesSelectModal from '@/components/Modal/AmenitiesSelectModal';

type ModalContextType = {
  modal: MODAL_NAME;
  setModal: React.Dispatch<React.SetStateAction<MODAL_NAME>>;
  openModal: (modalName: MODAL_NAME) => void;
  closeModalWithAnimation: (duration: number) => void;
  payload: any;
  setPayload: React.Dispatch<React.SetStateAction<any>>;
  status: HANDLE_STATUS;
  setStatus: React.Dispatch<React.SetStateAction<HANDLE_STATUS>>;
};

const ModalContext = createContext(null as any);

/* Modal List */
const Modal: any = {
  [MODAL_NAME.PACKAGE_DETAIL]: <PackageDetailModal />,
  [MODAL_NAME.TRAVELX]: <TravelXModal />,
  [MODAL_NAME.ASK_QUESTION]: <AskQuestionModal />,
  [MODAL_NAME.HMP_MAP]: <HMPMap />,
  [MODAL_NAME.ASK_A_QUESTION_THANK_YOU]: <AskQuestionThankYouModal />,
  [MODAL_NAME.AMENITIES_SELECT_MODAL]: <AmenitiesSelectModal />,

  
};

// ============================= Use modal context ============================ //

export const useModalContext = () => {
  const modalContext = useContext(ModalContext) as ModalContextType;
  if (!modalContext) {
    throw new Error(
      'useModalContext() can only be used inside of <ModalProvider />, ' + 'please declare it at a higher level.',
    );
  }
  return useMemo(() => ({ ...modalContext }), [modalContext]);
};

// ============================== MODAL PROVIDER ============================== //

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [payload, setPayload] = useState<any>(null);
  const [modal, setModal] = useState<MODAL_NAME>(MODAL_NAME.NONE);
  const [status, setStatus] = useState<HANDLE_STATUS>(HANDLE_STATUS.NOT_START);

  // open modal
  const openModal = useCallback((modalName: MODAL_NAME) => {
    setModal(modalName);
  }, []);

  // close modal with animation
  const closeModalWithAnimation = useCallback((duration: number = 300) => {
    document.getElementById('modal')?.classList.add('hide-modal');
    sleep(duration).then(() => {
      openModal(MODAL_NAME.NONE);
    });
  }, []);

  const modalProvider: ModalContextType = useMemo(
    () => ({
      modal,
      setModal,
      openModal,
      closeModalWithAnimation,
      payload,
      setPayload,
      status,
      setStatus,
    }),
    [modal, setModal, openModal, closeModalWithAnimation, payload, setPayload, status, setStatus],
  );

  return (
    <ModalContext.Provider value={modalProvider}>
      {modal === MODAL_NAME.NONE ? null : Modal[modal]}
      {children}
    </ModalContext.Provider>
  );
};
