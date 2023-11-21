import { memo, useRef } from 'react';
import classNames from 'classnames';
import { useModalContext } from '@/contexts/ModalProvider';
import { useOnClickOutside } from '@/hooks/useClickOutSide';
import i18n from '@/i18n/i18n';
import { useTranslation } from 'next-i18next';
function AskQuestionModal() {
  const { t } = useTranslation();
  const lang = i18n.language
  const modalRef = useRef<HTMLDivElement>(null);
  const { closeModalWithAnimation } = useModalContext();
  useOnClickOutside(modalRef, () => {
    closeModalWithAnimation(150);
  });
  return (
    <div className="z-20 flex justify-center items-center fixed top-0 left-0 right-0 bottom-0 bg-black-0.3">
      <div id="modal" ref={modalRef} className="transition-all animate-fadeIn ask-question-modal relative">
        <div className="w-[100vw] h-[100vh] sm:w-[80vw] sm:h-auto bg-white rounded-[4px]">
          <h2 className="text-grey-21 font-semibold px-8 py-4">{t('SEARCH.SEARCH_RESULT_PAGE.ASK_A_QUESTION_TITLE')}</h2>
          <div className="lg:h-[424px] lg:overflow-y-auto px-8">
            <InputField isRequire={true} label={t('BOOKING_FORM.USER_INPUT_FORM.NAME_TITLE')} placeHolder={t('BOOKING_FORM.USER_INPUT_FORM.NAME_PLACEHOLDER')} inputClassName="mb-4" />
            <InputField isRequire={true} label={t('BOOKING_FORM.USER_INPUT_FORM.EMAIL_TITLE')} placeHolder={t('BOOKING_FORM.USER_INPUT_FORM.EMAIL_PLACEHOLDER')} inputClassName="mb-4" />
            <TextAreaField
              isRequire={true}
              label={t('BOOKING_FORM.USER_INPUT_FORM.MESSAGE_TITLE')}
              placeHolder={t('BOOKING_FORM.USER_INPUT_FORM.MESSAGE_PLACEHOLDER')}
              textareaClassName="mb-8 h-[158px]"
            />
            <div className="text-center">
              <button className="primary-button font-normal rounded-[4px] h-9 mr-4">{t('BOOKING_FORM.USER_INPUT_FORM.SEND')}</button>
              <button
                onClick={() => closeModalWithAnimation(150)}
                className="primary-button bg-white text-grey-21 hover:bg-grey-d9 font-normal rounded-[4px] h-9 mb-8"
              >
                {t('BOOKING_FORM.USER_INPUT_FORM.CANCEL')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const InputField = memo(function Component({
  isRequire = false,
  label,
  placeHolder,
  labelClassName,
  inputClassName,
}: {
  isRequire?: boolean;
  label: string;
  placeHolder?: string;
  labelClassName?: string;
  inputClassName?: string;
}) {
  return (
    <div>
      <p className={classNames('mb-2', labelClassName)}>
        {label}
        {isRequire && <span className="text-red ml-[2px]">*</span>}
      </p>
      <input placeholder={placeHolder} className={classNames('primary-input', inputClassName)} />
    </div>
  );
});

const TextAreaField = memo(function Component({
  isRequire = false,
  label,
  placeHolder,
  labelClassName,
  textareaClassName,
}: {
  isRequire?: boolean;
  label: string;
  placeHolder?: string;
  labelClassName?: string;
  textareaClassName?: string;
}) {
  return (
    <div>
      <p className={classNames('mb-2', labelClassName)}>
        {label}
        {isRequire && <span className="text-red ml-[2px]">*</span>}
      </p>
      <textarea placeholder={placeHolder} className={classNames('primary-input', textareaClassName)} />
    </div>
  );
});

export default AskQuestionModal;