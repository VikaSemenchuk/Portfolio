import { useTranslation } from "react-i18next"
import { NavLink } from "react-router-dom"

const NavItem = () => {
    const { t: tNavigation } = useTranslation('navigation')

    const navItems = [
        { to: '/', label: tNavigation("header.home") },
        { to: '/about', label: tNavigation("header.about") },
        { to: '/projects', label: tNavigation("header.projects") },
        { to: '/path-to-it', label: tNavigation("header.career") }
    ]

    const linkClass = ({ isActive }: { isActive: boolean }) =>
        `nav-link ${isActive ? 'nav-link--active' : ''}`;

    return (
        <>
            {navItems.map((item) => (
                <li key={item.to}>
                    <NavLink to={item.to} className={linkClass}>
                        {item.label}
                    </NavLink>
                </li>
            ))}
        </>
    )

}

export default NavItem