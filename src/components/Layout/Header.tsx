// import Logo from '../../assets/Logo.svg?react';
import Logo from "./header_temp/Logo";
import Navigation from "./header_temp/Navigation";
import DocumentsAndEmail from "./header_temp/DocumentsAndEmail";
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
