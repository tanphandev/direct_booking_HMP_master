// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import viTranslation from '@/api/mock-data/vi.json';
import thTranslation from '@/api/mock-data/th.json';
import enTranslation from '@/api/mock-data/en.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      vi: { translation: viTranslation },
      th: { translation: thTranslation },
    },
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
