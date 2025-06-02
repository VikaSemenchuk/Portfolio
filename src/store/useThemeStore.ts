import { create} from 'zustand';
import { persist } from 'zustand/middleware';

import { Theme } from '@/types'
import { ThemeState } from '@/types/interfaces';

import {getStoredValue} from '@/utils';

export const useThemeStore = create<ThemeState> ()(
    persist (
        (set, get) => ({
            theme:  getStoredValue<Theme>('theme',['light', 'dark'], 'light'),           
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
            name: 'app-state'
        }
    )
)
