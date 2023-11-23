import { Fragment, memo, useRef, useState } from 'react';
import classNames from 'classnames';
import { useModalContext } from '@/contexts/ModalProvider';
import { useOnClickOutside } from '@/hooks/useClickOutSide';
import { useTranslation } from 'react-i18next';
import { getDateNowTimestamp } from '@/utils/helper';
import { sendQuestion } from '@/store/question/questionAction';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { MODAL_NAME } from '@/types/modal';
function AskQuestionModal() {
  const { openModal } = useModalContext();
  const dispatch = useAppDispatch();
  const { basic_business_info } = useAppSelector((state) => state.business);
  const { t } = useTranslation();
  const [full_name, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');
  const modalRef = useRef<HTMLDivElement>(null);
  const handleSetState = (value: string, key: string) => {
    key === "name" ?
      setFullName(value)
      : key === "email" ?
        setEmail(value)
        : setQuestion(value)
  }
  const { closeModalWithAnimation } = useModalContext();
  useOnClickOutside(modalRef, () => {
    closeModalWithAnimation(150);
  });
  const handleSendQuestion = () => {
    const bid = basic_business_info.bid;
    const client_info = {
      uid: null,
      full_name: full_name,
      mail: email
    }
    const datecreated = getDateNowTimestamp();
    dispatch(sendQuestion({ bid, datecreated, client_info, question }));
    openModal(MODAL_NAME.ASK_A_QUESTION_THANK_YOU);
  }
  return (
    <div className="z-20 flex justify-center items-center fixed top-0 left-0 right-0 bottom-0 bg-black-0.3">
      <div id="modal" ref={modalRef} className="transition-all animate-fadeIn ask-question-modal relative ">
        <div className=" max-w-3xl w-full h-full md:max-h-[80vh] sm:h-auto bg-white rounded-[4px]">
          <h2 className="text-grey-21 font-semibold px-8 py-4">{t('SEARCH.SEARCH_RESULT_PAGE.ASK_A_QUESTION_TITLE')}</h2>
          <div className="lg:h-[424px] lg:overflow-y-auto px-8">
            <InputField
              isRequire={true}
              label={t('BOOKING_FORM.USER_INPUT_FORM.NAME_TITLE')}
              placeHolder={t('BOOKING_FORM.USER_INPUT_FORM.NAME_PLACEHOLDER')}
              inputClassName="mb-4"
              value={full_name}
              onChange={(e) => {
                handleSetState(e.target.value, "name")
              }}
            />
            <InputField
              isRequire={true}
              label={t('BOOKING_FORM.USER_INPUT_FORM.EMAIL_TITLE')}
              placeHolder={t('BOOKING_FORM.USER_INPUT_FORM.EMAIL_PLACEHOLDER')}
              inputClassName="mb-4"
              value={email}
              onChange={(e) => handleSetState(e.target.value, "email")}
            />
            <TextAreaField
              isRequire={true}
              label={t('BOOKING_FORM.USER_INPUT_FORM.MESSAGE_TITLE')}
              placeHolder={t('BOOKING_FORM.USER_INPUT_FORM.MESSAGE_PLACEHOLDER')}
              textareaClassName="mb-8 h-[158px]"
              value={question}
              onChange={(e) => handleSetState(e.target.value, "message")}

            />
            <div className="text-center">
              <button
                className="primary-button font-normal rounded-[4px] h-9 mr-4"
                onClick={() => {
                  handleSendQuestion()
                }}
              >
                {t('BOOKING_FORM.USER_INPUT_FORM.SEND')}
              </button>
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
  value,
  onChange
}: {
  isRequire?: boolean;
  label: string;
  placeHolder?: string;
  labelClassName?: string;
  inputClassName?: string;
  value?: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void

}) {
  return (
    <div>
      <p className={classNames('mb-2', labelClassName)}>
        {label}
        {isRequire && <span className="text-red ml-[2px]">*</span>}
      </p>
      <input
        placeholder={placeHolder}
        className={classNames('primary-input', inputClassName)}
        value={value}
        onChange={(e) => {
          onChange(e)
        }}
      />
    </div>
  );
});

const TextAreaField = memo(function Component({
  isRequire = false,
  label,
  placeHolder,
  labelClassName,
  textareaClassName,
  value,
  onChange

}: {
  isRequire?: boolean;
  label: string;
  placeHolder?: string;
  labelClassName?: string;
  textareaClassName?: string;
  value?: string,
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <div>
      <p className={classNames('mb-2', labelClassName)}>
        {label}
        {isRequire && <span className="text-red ml-[2px]">*</span>}
      </p>
      <textarea
        placeholder={placeHolder}
        className={classNames('primary-input', textareaClassName)}
        value={value}
        onChange={(e) => {
          onChange(e)
        }}
      />
    </div>
  );
});

export default AskQuestionModal;