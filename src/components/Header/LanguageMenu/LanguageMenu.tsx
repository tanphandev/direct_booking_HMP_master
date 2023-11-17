'use client';
import { useEffect, useRef, useState } from 'react';
import { useOnClickOutside } from '@/hooks/useClickOutSide';

import {  language, languageProps } from '@/types/Language';

import ArrowDown from '@/assets/icons/ArrowDown';
import i18n from "@/i18n/i18n";
import { db_languages } from '@/api/mock-data/db_languages'


function LanguageMenu() {
  const languageMenuRef = useRef<HTMLUListElement>(null);
  
  const [languageValue, setLanguageValue] = useState<languageProps>({
    label: db_languages.title,
    code: db_languages.id,
  });
  // localStorage.getItem('language')??localStorage.setItem('language', db_languages.id);
  useEffect(() => {
    const isBrowser = typeof window !== 'undefined';
    const savedLanguage = isBrowser ? localStorage.getItem('language') || db_languages.id : db_languages.id;
    if (savedLanguage) {
      const selectedLanguage = language.find(item => item.code === savedLanguage);
      if (selectedLanguage) {
        setLanguageValue(selectedLanguage);
      }
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
      localStorage.setItem('language', item.code);
     i18n.changeLanguage(item.code)
    
  };
  /* Toggle menu */
  const toggleMenu = () => {
    languageMenuRef.current?.classList.toggle('hidden');
  };
  return (
    <div className="relative">
      <div onClick={toggleMenu} className="flex justify-center items-center cursor-pointer">
        <p className="text-base text-grey-21 font-bold mr-1 uppercase">{languageValue.code}</p>
        <ArrowDown width="24px" height="24px" />
      </div>
      <ul
        ref={languageMenuRef}
        className="hidden absolute top-8 right-0 lg:left-0 w-[112px] bg-white rounded-md shadow-custom_1 py-2"
      >
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
