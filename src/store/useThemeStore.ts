import { create} from 'zustand';
import { persist } from 'zustand/middleware';

import { ThemeState } from '../types/theme';

import getStoredValue from '../utils/getStoredValue';


function detectSystemTheme(): 'light' | 'dark' {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light'; // fallback
  }

const useThemeStore = create<ThemeState> ()(
    persist (
        (set, get) => ({
            theme:  getStoredValue<'light' | 'dark'>('theme',['light', 'dark'], detectSystemTheme()),           
            setTheme: (theme) => {
                set({theme});
                document.documentElement.classList.toggle('dark', theme === 'dark');
            },
            toggleTheme: () => {
                const next = get().theme === 'dark' ? 'light' : 'dark';
                set({theme: next});
                document.documentElement.classList.toggle('dark', next === 'dark');
            },
        }),
        {
            name: 'theme-storage'
        }
    )
)

export default useThemeStore;