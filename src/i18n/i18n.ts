// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import viTranslation from '@/api/mock-data/vi.json';
import thTranslation from '@/api/mock-data/th.json';
import enTranslation from '@/api/mock-data/en.json';

const isBrowser = typeof window !== 'undefined';
const savedLanguage = isBrowser ? localStorage.getItem('language') || 'vi' : 'vi';


const resources = {
  vi: { translation: viTranslation },
  th: { translation: thTranslation },
  en: { translation: enTranslation },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage || 'vi',
    fallbackLng: 'vi',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
