// import Logo from '../../assets/Logo.svg?react';
import Logo from "./header/Logo";
import Navigation from "./header/Navigation";
import DocumentsAndEmail from "./header/DocumentsAndEmail";
import ThemeToggle from "../ThemeToggle";
import LanguageSwitcher from "../LanguageSwitcher";

const Header = () => {
    return (
      <header className="flex justify-between items-center p-4 ">
        <div className="flex items-center gap-8">
          <Logo />

          <Navigation />
        </div>
        <DocumentsAndEmail />
        <div className="flex gap-4">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </header>
    );
}

export default Header;
