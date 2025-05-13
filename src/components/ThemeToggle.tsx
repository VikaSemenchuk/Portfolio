import useThemeStore from '../store/useThemeStore';

const ThemeToggle = () => {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-xl bg-footer"
      aria-label="Toggle theme"
      title="Change Theme"
    >
      {theme === 'dark' ? ' 🌞 ' : ' 🌙 '}
    </button>
  );
};

export default ThemeToggle;