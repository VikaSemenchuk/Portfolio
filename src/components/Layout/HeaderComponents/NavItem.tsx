import { useTranslation } from "react-i18next"
import { NavLink } from "react-router-dom"

const NavItem = () => {
    const { t } = useTranslation()

    const navItems = [
        { to: '/', label: t("header.nav.home") },
        { to: '/about', label: t("header.nav.about") },
        { to: '/projects', label: t("header.nav.projects") },
        { to: '/path-to-it', label: t("header.nav.path-to-it") }
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