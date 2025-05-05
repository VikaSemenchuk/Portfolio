import Logo from "./Header/Logo";
import Navigation from "./Header/Navigation";
import DocumentsAndEmail from "./Header/DocumentsAndEmail";

import useThemeStore  from "../../store/useThemeStore";

const ThemeToggle = () =>{
    const {toggleTheme, theme} = useThemeStore()

    return (
<button onClick={toggleTheme} className="px-4 py-2 rounded hover:bg-accent">
      Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
    </button>
    )
}

const Header = () => {
    return (
      <header className="flex justify-between items-center p-4 ">
        <div className="flex items-center gap-8">
          <Logo />
          <Navigation />
        </div>
        <DocumentsAndEmail />
        <ThemeToggle />
      </header>
    );
}

export default Header;
