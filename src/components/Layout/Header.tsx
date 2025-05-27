import Logo from "./header/Logo";
import Navigation from "./header/Navigation";
import ThemeToggle from "../ThemeToggle";
import LanguageSwitcher from "../LanguageSwitcher";
import MobileMenu from "./header/BurgerMenu";

const Header = () => {
  return (
    <header>
      <div className="container flex justify-between items-center ">

        <div className="flex items-center gap-8">
          <Logo />
          <div className="hidden md:block">
            <Navigation />
          </div>
        </div>

        <div className="hidden md:flex gap-4">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
        
        <MobileMenu />

      </div>
    </header>
  );
}

export default Header;
