import { create} from 'zustand';
import { persist } from 'zustand/middleware';

import { ThemeState } from '../types/theme';

const useThemeStore = create<ThemeState> ()(
    persist (
        (set, get) => ({
            theme: window.matchMedia('prefers-color-scheme: dark').matches ? 'dark' : 'light',
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