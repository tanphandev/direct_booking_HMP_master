import {  useRef } from 'react';
import { useModalContext } from '@/contexts/ModalProvider';
import { useOnClickOutside } from '@/hooks/useClickOutSide';
import { useTranslation } from 'react-i18next';

function AskQuestionThankYouModal() {
  const { t } = useTranslation();
  const modalRef = useRef<HTMLDivElement>(null);
  const { closeModalWithAnimation } = useModalContext();
  useOnClickOutside(modalRef, () => {
    closeModalWithAnimation(150);
  });
  return (
    <div className="z-20 flex justify-center items-center fixed top-0 left-0 right-0 bottom-0 bg-black-0.3">
      <div id="modal" ref={modalRef} className="transition-all animate-fadeIn ask-question-modal relative">
      <div className="flex flex-col w-[100vw] h-[100vh] sm:w-[80vw] sm:h-auto bg-white rounded-[4px] text-center justify-center p-16">
          <h2 className="text-grey-21 font-bold mb-4">{t('SEARCH.SEARCH_RESULT_PAGE.ASK_A_QUESTION_THANKYOU_TITLE')}</h2>
          <p className="text-grey-21 mb-4 text-left ">{t('SEARCH.SEARCH_RESULT_PAGE.ASK_A_QUESTION_THANKYOU')}</p>
          <div className="text-center">
            <button
              onClick={() => closeModalWithAnimation(150)}
              className="primary-button font-normal rounded-[4px] h-9 mr-4"
            >
              {t('SEARCH.SEARCH_RESULT_PAGE.CLOSE')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AskQuestionThankYouModal;