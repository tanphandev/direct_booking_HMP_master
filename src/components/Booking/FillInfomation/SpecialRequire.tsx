import { ChangeEvent, forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { auto_grow } from '@/utils/helper';

export type SpecialRequireRefType = {
  value: string | undefined;
};

const SpecialRequire = forwardRef<SpecialRequireRefType, {}>(function Component({}, ref) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [textareaInput, setTextareaInput] = useState<string>('');
  const [addRequest, setAddRequest] = useState<boolean>(false);
  useImperativeHandle(ref, () => ({
    value: textareaInput,
  }));
  return (
    <div className="mt-4">
      <p className="text-base text-grey-21 font-bold mb-2">Special requirements</p>
      {addRequest ? (
        <div className="transition-all border-[1px] border-grey-21 focus-within:border-2 rounded-md pt-4 pb-3 mb-7 mt-4">
          <textarea
            ref={textareaRef}
            value={textareaInput}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setTextareaInput(e.target.value)}
            onInput={() => {
              auto_grow(textareaRef.current);
            }}
            placeholder="Your request"
            className="textarea-srollbar w-full h-auto max-h-[90px] px-2 outline-none resize-none"
          />
        </div>
      ) : (
        <button onClick={() => setAddRequest(true)} className="text-sm primary-button h-9">
          + Add request
        </button>
      )}
    </div>
  );
});

export default SpecialRequire;
