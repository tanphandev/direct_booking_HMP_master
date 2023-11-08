'use client';
import { useRef, useState } from 'react';

import { LanguageCode, language, languageProps } from '@/types/Language';
import ArrowDown from '@/components/icons/ArrowDown';
import { useOnClickOutside } from '@/hooks/useClickOutSide';

function LanguageMenu() {
  const languageMenuRef = useRef<HTMLUListElement>(null);
  const [languageValue, setLanguageValue] = useState<languageProps>({
    label: 'Viet Nam',
    code: LanguageCode.VI
  });
  /* Listen even click outside language menu */
  useOnClickOutside(languageMenuRef, () => {
    languageMenuRef.current?.classList.add('hidden');
  });

  /* Change language */
  const handleChangeLanguage = (item: languageProps) => {
    setLanguageValue(item);
    toggleMenu();
  };

  /* Toggle menu */
  const toggleMenu = () => {
    languageMenuRef.current?.classList.toggle('hidden');
  };
  return (
    <div className="relative">
      <div onClick={toggleMenu} className="flex justify-center items-center cursor-pointer">
        <p className="text-base text-grey-21 font-bold mr-1">{languageValue.code}</p>
        <ArrowDown width="24px" height="24px" />
      </div>
      <ul ref={languageMenuRef} className="hidden absolute top-8 w-[112px] bg-white rounded-md shadow-custom_1 py-2">
        {language.map((item, index) => (
          <li
            className="transition-colors h-[48px] text-sm px-4 leading-[48px] hover:bg-black-0.1"
            key={index}
            onClick={() => {
              handleChangeLanguage(item);
            }}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LanguageMenu;
