import Logo from "./Header/Logo";
import Navigation from "./Header/Navigation";
import DocumentsAndEmail from "./Header/DocumentsAndEmail";

const Header = () => {
    return (
      <header className="flex justify-between items-center p-4 dark:bg-blue-400">
        <div className="flex items-center gap-8">
          <Logo />
          <Navigation />
        </div>
        <DocumentsAndEmail />
      </header>
    );
}

export default Header;
