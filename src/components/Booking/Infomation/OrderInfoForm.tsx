import { useState } from 'react';

import InputField from '@/components/common/InputField/InputField';
import CountriesAutocomplete from '@/components/common/AutoComplete/CountriesAutocomplete';

function OrderInfoForm() {
  const [orderFullName, setOrderFullName] = useState<string>('');
  return (
    <div>
      <h2 className="font-bold mb-2">Information</h2>
      <div className="grid grid-cols-2 gap-x-[10px] gap-y-4">
        <InputField
          labelClassName="text-base text-grey-21 mb-2"
          inputClassName="text-base text-grey-21 px-[12px] py-[6px] border-[1px] border-grey-d9 focus:border-blue-80 focus:shadow-[0_0_0_0.2rem_rgba(0,123,255,.25)] rounded-md"
          isRequire={true}
          id="order-fullname"
          label="Full Name"
          placeHolder="John Doe"
          value={orderFullName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setOrderFullName(e.target.value);
          }}
        />
        <InputField
          labelClassName="text-base text-grey-21 mb-2"
          inputClassName="text-base text-grey-21 px-[12px] py-[6px] border-[1px] border-grey-d9 focus:border-blue-80 focus:shadow-[0_0_0_0.2rem_rgba(0,123,255,.25)] rounded-md"
          isRequire={true}
          id="order-email"
          label="Email"
          placeHolder="johndoe@example.com"
          value={orderFullName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setOrderFullName(e.target.value);
          }}
        />
        <InputField
          labelClassName="text-base text-grey-21 mb-2"
          inputClassName="text-base text-grey-21 px-[12px] py-[6px] border-[1px] border-grey-d9 focus:border-blue-80 focus:shadow-[0_0_0_0.2rem_rgba(0,123,255,.25)] rounded-md"
          isRequire={true}
          id="order-phoneNumber"
          label="Phone number"
          value={orderFullName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setOrderFullName(e.target.value);
          }}
        />
        <CountriesAutocomplete isRequire={true} />
      </div>
    </div>
  );
}

export default OrderInfoForm;
