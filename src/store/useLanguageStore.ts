import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import i18n from '@/i18n';
import getStoredValue from '@/utils/getStoredValue';

import { Language } from '@/types'
import { LanguageState } from '@/types/interfaces'


export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: getStoredValue<Language>('language', ['en', 'uk', 'de'], 'en'),
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