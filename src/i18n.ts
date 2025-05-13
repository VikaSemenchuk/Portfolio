import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import uk from './locales/uk.json';
import de from './locales/de.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      uk: { translation: uk },
      de: { translation: de },
    },
    fallbackLng: 'en',
    lng: localStorage.getItem("app-state")
      ? JSON.parse(localStorage.getItem("app-state")!).state.language
      : navigator.language.split("-")[0],
    
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;