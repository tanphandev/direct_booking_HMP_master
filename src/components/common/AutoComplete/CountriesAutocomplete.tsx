import React, { useEffect, useMemo, useState } from 'react';
import { countries as Countries } from 'countries-list';
import { TCountryCode } from 'countries-list';

import Autocomplete from './Autocomplete';

type Props = {
  isRequire: boolean;
  name?: string;
  value: string;
  formik: any;
};

const CountriesAutocomplete = ({ isRequire, name, value, formik }: Props) => {
  /* get country names  */
  const countryNames = useMemo(() => {
    const countryCodes = Object.keys(Countries) as TCountryCode[];
    const countryNames = countryCodes.map((code) => Countries[code].name);
    return countryNames;
  }, []);

  /* a list to show on the dropdown when user types */
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    /* if there is no value, return the countries list. */
    if (!value) {
      setItems(countryNames);
      return;
    }
    /* if the val changes, we filter items so that it can be filtered. and set it as new state */
    const newItems = countryNames.filter((p) => p.toLowerCase().includes(value.toLowerCase())).sort();
    setItems(newItems);
  }, [countryNames, value]);

  return (
    <div className="flex flex-col">
      <label className={'text-base text-grey-21 mb-2'} htmlFor="countries-input">
        Country/region of residence
        {isRequire && <span className="text-red ml-1">*</span>}
      </label>
      <Autocomplete
        id="countries-input"
        name={name}
        formik={formik}
        items={items}
        value={value}
        inputClassName="border-grey-d9 rounded-md px-[12px] py-[6px]"
        menuWrapperClassName="auto-complete-countries bg-white"
        menuItemClassName="transition-colors h-[48px] px-4 hover:bg-black-0.1"
      />
    </div>
  );
};

export default CountriesAutocomplete;
