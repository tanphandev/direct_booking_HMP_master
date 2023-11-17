// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import viTranslation from '@/api/mock-data/vi.json';
import thTranslation from '@/api/mock-data/th.json';
import enTranslation from '@/api/mock-data/en.json';
import { db_languages } from '@/api/mock-data/db_languages'

const defaultLocale =db_languages.id
const isBrowser = typeof window !== 'undefined';
const savedLanguage = isBrowser ? localStorage.getItem('language') || defaultLocale: defaultLocale;

const resources = {
  vi: { translation: viTranslation },
  th: { translation: thTranslation },
  en: { translation: enTranslation },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage,
    interpolation: {
      escapeValue: false,
    },
  });
export default i18n;
