import { Switch } from '@headlessui/react';

import { useThemeStore } from '@/store';

const ThemeToggle = () => {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  const enabled = theme === 'dark';

  const handleKeyDownTheme = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') toggleTheme()
  };

  return (
    <Switch
      checked={enabled}
      onChange={toggleTheme}
      onKeyDown={handleKeyDownTheme}
      className="btn-control  group relative"

    >

      <div className="hidden lg:flex items-center justify-between w-full">
        {enabled ? (
          <>
            <span className="text-text font-medium">Dark</span>
            <span aria-hidden="true" className="theme-ball bg-text" />
          </>
        ) : (
          <>
            <span aria-hidden="true" className="theme-ball bg-text" />
            <span className="text-text font-medium">Light</span>
          </>
        )}
      </div>

      <div className={`lg:hidden theme-toggle-mobile ${enabled ? "dark" : ""}`}>
        <span aria-hidden="true" className="theme-ball bg-text" />
      </div>

      <span className="sr-only">
        {enabled ? "Switch to light mode" : "Switch to dark mode"}
      </span>
    </Switch>
  );
};

export default ThemeToggle;