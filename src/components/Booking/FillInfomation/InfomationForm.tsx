import { useState } from 'react';

import PhoneInput from 'react-phone-input-2';
import InputField from '@/components/common/InputField/InputField';
import CountriesAutocomplete from '@/components/common/AutoComplete/CountriesAutocomplete';
import 'react-phone-input-2/lib/style.css';

function InformationForm() {
  const [orderFullName, setOrderFullName] = useState<string>('');
  const [orderEmail, setOrderEmail] = useState<string>('');
  const [orderPhone, setOrderPhone] = useState<string>('');
  const [orderCountry, setOrderCountry] = useState<string>('');
  return (
    <div className="mb-4">
      <div className="grid grid-cols-2 gap-x-[10px] gap-y-4">
        <InputField
          labelClassName="text-base text-grey-21 mb-2"
          inputClassName="primary-input"
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
          inputClassName="primary-input"
          isRequire={true}
          id="order-email"
          label="Email"
          placeHolder="johndoe@example.com"
          value={orderEmail}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setOrderEmail(e.target.value);
          }}
        />
        <div className="flex flex-col">
          <label className="mb-2">
            Phone Number
            <span className="text-red ml-1">*</span>
          </label>
          <PhoneInput
            inputClass="order-phone-input !w-full !text-base text-grey-21 px-[12px] py-[6px] border-[1px] border-grey-d9 focus:!border-blue-80 focus:shadow-[0_0_0_0.2rem_rgba(0,123,255,.25)] rounded-md"
            buttonClass="phone-code"
            dropdownClass="!w-[292px] !mt-[1px] !shadow-custom_1"
            country={'vn'}
            value={orderPhone}
            onChange={(phone) => {
              setOrderPhone(phone);
            }}
          />
        </div>
        <CountriesAutocomplete isRequire={true} value={orderCountry} setValue={setOrderCountry} />
      </div>
    </div>
  );
}

export default InformationForm;
