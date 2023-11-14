import { Fragment, useRef, useState } from 'react';

import GuestInformation from './GuestInformation';
import { OrderChooseValue } from './constants';
import { auto_grow } from '@/utils/helper';

type Props = {
  guestFormRef?: any;
};

function AdditionalInformation({ guestFormRef }: Props) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [orderChooseValue, setOrderChooseValue] = useState<OrderChooseValue>(OrderChooseValue.VALUE1);

  const AdditionInfo = (value: OrderChooseValue) => {
    switch (value) {
      case OrderChooseValue.VALUE1:
        return;
      case OrderChooseValue.VALUE2:
        return <GuestInformation guestFormRef={guestFormRef} />;
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

  return (
    <Fragment>
      <div className="flex flex-col gap-y-2 mb-2">
        <div className="flex item gap-x-2">
          <input
            defaultChecked
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setOrderChooseValue(e.target.value as OrderChooseValue);
            }}
            type="radio"
            id="choose-1"
            name="addtional-order-choose"
            value={OrderChooseValue.VALUE1}
          />
          <label htmlFor="choose-1">
            <p>
              I will be staying at <span className="font-bold">HMP Master</span> on the dates selected
            </p>
          </label>
        </div>
        <div className="flex gap-x-2">
          <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setOrderChooseValue(e.target.value as OrderChooseValue);
            }}
            type="radio"
            id="choose-2"
            name="addtional-order-choose"
            value={OrderChooseValue.VALUE2}
          />
          <label htmlFor="choose-2">
            <p>I am booking this stay for someone else</p>
          </label>
        </div>
        <div className="flex gap-x-2">
          <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setOrderChooseValue(e.target.value as OrderChooseValue);
            }}
            type="radio"
            id="choose-3"
            name="addtional-order-choose"
            value={OrderChooseValue.VALUE3}
          />
          <label htmlFor="choose-3">
            <p>Other</p>
          </label>
        </div>
      </div>
      {/* Addtional Info*/}
      <div>{AdditionInfo(orderChooseValue)}</div>
    </Fragment>
  );
}

export default AdditionalInformation;
