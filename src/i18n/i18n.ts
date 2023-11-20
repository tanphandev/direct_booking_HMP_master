// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import viTranslation from '@/../public/assets/languages/vi.json';
import thTranslation from '@/../public/assets/languages/th.json';
import enTranslation from '@/../public/assets/languages/en.json';

const isBrowser = typeof window !== 'undefined';
const defaultLanguage = isBrowser ? localStorage.getItem('language') ?? 'en' : 'en';
const resources = {
  vi: { translation: viTranslation },
  th: { translation: thTranslation },
  en: { translation: enTranslation },
};

i18n.use(initReactI18next).init({
  resources,
  lng: defaultLanguage,
  interpolation: {
    escapeValue: false,
  },
});
export default i18n;
