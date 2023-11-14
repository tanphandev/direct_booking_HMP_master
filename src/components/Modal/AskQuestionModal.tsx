import { memo, useRef } from 'react';
import classNames from 'classnames';
import { useModalContext } from '@/contexts/ModalProvider';
import { useOnClickOutside } from '@/hooks/useClickOutSide';

function AskQuestionModal() {
  const modalRef = useRef<HTMLDivElement>(null);
  const { closeModalWithAnimation } = useModalContext();
  useOnClickOutside(modalRef, () => {
    closeModalWithAnimation(150);
  });
  return (
    <div className="z-20 flex justify-center items-center fixed top-0 left-0 right-0 bottom-0 bg-black-0.3">
      <div id="modal" ref={modalRef} className="transition-all animate-fadeIn ask-question-modal relative">
        <div className="w-[80vw] bg-white rounded-[4px]">
          <h2 className="text-grey-21 font-semibold px-8 py-4">Ask a Question</h2>
          <div className="px-8 h-[424px] overflow-y-auto">
            <InputField isRequire={true} label="Full name" placeHolder="John Doe" inputClassName="mb-4" />
            <InputField isRequire={true} label="Email" placeHolder="johndoe@example.com" inputClassName="mb-4" />
            <TextAreaField
              isRequire={true}
              label="Your question"
              placeHolder="Please enter your question"
              textareaClassName="mb-8 h-[158px]"
            />
            <div className="text-center">
              <button className="primary-button font-normal rounded-[4px] h-9 mr-4">Send</button>
              <button
                onClick={() => closeModalWithAnimation(150)}
                className="primary-button bg-white text-grey-21 hover:bg-grey-d9 font-normal rounded-[4px] h-9 mb-8"
              >
                Cancel
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
