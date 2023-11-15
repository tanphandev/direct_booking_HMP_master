// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import viTranslation from '@/api/mock-data/vi.json';
import thTranslation from '@/api/mock-data/th.json';
import enTranslation from '@/api/mock-data/en.json';

const resources = {
  vi: { translation: viTranslation },
  th: { translation: thTranslation },
  en: { translation: enTranslation },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'vi', // default language
    fallbackLng: 'vi', // fallback language if a translation is not found
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });


export default i18n;
