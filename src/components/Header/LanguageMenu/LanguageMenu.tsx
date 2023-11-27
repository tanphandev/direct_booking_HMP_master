'use client';
import { useEffect, useRef, useState } from 'react';
import { useOnClickOutside } from '@/hooks/useClickOutSide';
import { useAppSelector } from '@/hooks';
import i18n from '@/i18n/i18n';

import ArrowDown from '@/assets/icons/ArrowDown';
import { languageProps } from '@/types/Language';

function LanguageMenu() {
  const { db_languages: defaultLanguage, db_enable_languages: languages } = useAppSelector(
    (state) => state.business?.setting,
  );
  const languageMenuRef = useRef<HTMLUListElement>(null);
  const [languageValue, setLanguageValue] = useState<languageProps>({
    title: defaultLanguage?.title,
    id: defaultLanguage?.id,
  });

  /* get default language */
  useEffect(() => {
    const isBrowser = typeof window !== 'undefined';
    let savedLanguageId = isBrowser && localStorage.getItem('language');
    if (!savedLanguageId) {
      savedLanguageId = defaultLanguage?.id || 'en';
      localStorage.setItem('language', defaultLanguage?.id);
    }

    const selectedLanguage = languages?.find((item: languageProps) => item?.id === savedLanguageId);
    if (selectedLanguage) {
      setLanguageValue(selectedLanguage);
      i18n.changeLanguage(savedLanguageId as string);
    }
  }, []);

  /* Listen even click outside language menu */
  useOnClickOutside(languageMenuRef, () => {
    languageMenuRef.current?.classList.add('hidden');
  });

  /* Change language */
  const handleChangeLanguage = (item: languageProps) => {
    setLanguageValue(item);
    toggleMenu();
    localStorage.setItem('language', item?.id);
    i18n.changeLanguage(item?.id);
  };
  /* Toggle menu */
  const toggleMenu = () => {
    languageMenuRef.current?.classList.toggle('hidden');
  };

  return (
    <div className="relative">
      <div onClick={toggleMenu} className="flex justify-center items-center cursor-pointer">
        <p className="text-base text-grey-21 font-bold mr-1 uppercase">{languageValue.id}</p>
        <ArrowDown width="24px" height="24px" />
      </div>
      <ul
        ref={languageMenuRef}
        className="hidden absolute top-8 right-0 lg:left-0 w-[112px] bg-white rounded-md shadow-custom_1 py-2 z-10"
      >
        {languages?.map((item: languageProps, index: number) => (
          <li
            className="transition-colors h-[48px] text-sm px-4 leading-[48px] hover:bg-black-0.1"
            key={index}
            onClick={() => {
              handleChangeLanguage(item);
            }}
          >
            {item?.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LanguageMenu;
