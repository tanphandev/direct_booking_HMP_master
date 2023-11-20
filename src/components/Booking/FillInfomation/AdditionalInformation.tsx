import { Fragment, forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { useAppSelector } from '@/hooks';
import { useTranslation } from 'react-i18next';

import GuestInformation from './GuestInformation';
import { OrderChooseValue } from './constants';
import { auto_grow } from '@/utils/helper';

type Props = {
  forSomeOneRef?: any;
};

export type BookForRef = {
  value: OrderChooseValue;
  forOtherRef: any;
};

const AdditionalInformation = forwardRef<BookForRef, Props>(function Component({ forSomeOneRef }, ref) {
  const { t } = useTranslation();
  const { title: bussinessName } = useAppSelector((state) => state.business.basic_business_info);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [orderChooseValue, setOrderChooseValue] = useState<OrderChooseValue>(OrderChooseValue.VALUE1);

  const AdditionInfo = (value: OrderChooseValue) => {
    switch (value) {
      case OrderChooseValue.VALUE1:
        return;
      case OrderChooseValue.VALUE2:
        return <GuestInformation inputId="main-guest" guestFormRef={forSomeOneRef} />;
      case OrderChooseValue.VALUE3:
        return (
          <div className="transition-all border-[1px] border-grey-21 focus-within:border-2 rounded-md pt-4 pb-3 mb-7">
            <textarea
              ref={textareaRef}
              onInput={() => {
                auto_grow(textareaRef.current);
              }}
              placeholder="Other infomation..."
              className="textarea-srollbar w-full h-auto max-h-[90px] px-2 outline-none resize-none"
            />
          </div>
        );
    }
  };
  useImperativeHandle(ref, () => ({
    value: orderChooseValue,
    forOtherRef: textareaRef,
  }));
  return (
    <Fragment>
      <div className="flex flex-col gap-y-2 mb-2">
        <div className="flex item gap-x-2">
          <input
            defaultChecked
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setOrderChooseValue(parseInt(e.target.value) as OrderChooseValue);
            }}
            type="radio"
            id="choose-1"
            name="addtional-order-choose"
            value={OrderChooseValue.VALUE1}
            className="cursor-pointer"
          />
          <label htmlFor="choose-1" className="cursor-pointer">
            <p
              dangerouslySetInnerHTML={{ __html: t('BOOKING_FORM.STEP1.BOOK_FOR_MYSELF', { value: bussinessName }) }}
            />
          </label>
        </div>
        <div className="flex gap-x-2">
          <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setOrderChooseValue(parseInt(e.target.value) as OrderChooseValue);
            }}
            type="radio"
            id="choose-2"
            name="addtional-order-choose"
            value={OrderChooseValue.VALUE2}
            className="cursor-pointer"
          />
          <label htmlFor="choose-2">
            <p>{t('BOOKING_FORM.STEP1.BOOK_FOR_OTHER')}</p>
          </label>
        </div>
        <div className="flex gap-x-2">
          <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setOrderChooseValue(parseInt(e.target.value) as OrderChooseValue);
            }}
            type="radio"
            id="choose-3"
            name="addtional-order-choose"
            value={OrderChooseValue.VALUE3}
            className="cursor-pointer"
          />
          <label htmlFor="choose-3">
            <p>{t('BOOKING_FORM.STEP1.BOOK_OTHER')}</p>
          </label>
        </div>
      </div>
      {/* Addtional Info*/}
      <div>{AdditionInfo(orderChooseValue)}</div>
    </Fragment>
  );
});

export default AdditionalInformation;
