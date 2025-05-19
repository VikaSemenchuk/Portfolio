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
      className="relative btn-secondary"
    >
      {enabled ? (
        <>
          <span className=" text-text">Dark</span>

          <span
            aria-hidden="true"
            className="theme-ball"
          />
        </>
      ) : (
        <>
          <span
            aria-hidden="true"
            className="theme-ball"
          />
          <span className="text-text">Light</span>
        </>
      )}
    </Switch>
  );
};

export default ThemeToggle;