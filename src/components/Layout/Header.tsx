// import Logo from '../../assets/logo.svg?react';
import Logo from "./header/Logo";
import Navigation from "./header/Navigation";
import DocumentsAndEmail from "./header/DocumentsAndEmail";
import ThemeToggle from "../ThemeToggle";
import LanguageSwitcher from "../LanguageSwitcher";

const Header = () => {
  return (
    <header>
      <div className="container flex justify-between items-center ">
        <div className="flex items-center gap-8">
          <Logo />
          <Navigation />
        </div>

        <div className="flex gap-4">
        <DocumentsAndEmail />
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

export default Header;
