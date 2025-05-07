import Logo from '../../assets/Logo.svg?react';
import Navigation from "./Header/Navigation";
import DocumentsAndEmail from "./Header/DocumentsAndEmail";
import ThemeToggle from "../ThemeToggle";

const Header = () => {
    return (
        <header className="flex justify-between items-center p-4 ">
            <div className="flex items-center gap-8">
                <Logo className="w-18 h-12" />
                <Navigation />
            </div>
            <DocumentsAndEmail />
            <ThemeToggle />
        </header>
    );
}

export default Header;
