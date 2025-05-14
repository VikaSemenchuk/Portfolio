import { Switch } from '@headlessui/react'

import useThemeStore from '../store/useThemeStore';

const ThemeToggle = () => {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  const enabled = theme === 'dark';

  return (
    <Switch
      checked={enabled}
      onChange={toggleTheme}
      className={`group relative flex h-7 w-14 cursor-pointer rounded-full p-1 transition-colors
        bg-text
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500
      `}
    >
      <span
        aria-hidden="true"
        className={`pointer-events-none inline-block size-5 rounded-full bg-footer shadow-lg ring-0 transition-smooth
          ${enabled ? 'translate-x-7' : 'translate-x-0'}
        `}
      />
    </Switch>
  );
};

export default ThemeToggle;