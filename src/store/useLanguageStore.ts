import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import i18n from '../i18n';
import getStoredValue from '../utils/getStoredValue';

type Language = 'en' | 'uk' | 'de';

type LanguageState = {
  language: Language;
  setLanguage: (lang: Language) => void;
};

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: getStoredValue<'en' | 'uk' | 'de'>('language', ['en', 'uk', 'de'], 'en'),
      setLanguage: (lang) => {
        i18n.changeLanguage(lang);
        document.documentElement.lang = lang;
        set({ language: lang });
      },
    }),
    {
      name: 'app-state',
    }
  )
);