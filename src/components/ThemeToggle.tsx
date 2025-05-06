import useThemeStore from '../store/useThemeStore';

const ThemeToggle = () => {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full border border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-800 text-xl transition-colors duration-300"
      aria-label="Toggle theme"
      title="Change Theme"
    >
      {theme === 'dark' ? '🌞 ' : '🌙 '}
    </button>
  );
};

export default ThemeToggle;