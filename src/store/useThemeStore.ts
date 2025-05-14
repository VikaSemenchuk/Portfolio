import { create} from 'zustand';
import { persist } from 'zustand/middleware';

import { Theme } from '../types/theme'
import { ThemeState } from '../types/interfaces/themeState';

import getStoredValue from '../utils/getStoredValue';

const useThemeStore = create<ThemeState> ()(
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

export default useThemeStore;