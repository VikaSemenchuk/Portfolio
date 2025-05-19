import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom"

const Navigation = () => {
  const {t} = useTranslation()
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `inline-block font-semibold py-2 px-4 rounded-xl  ${
      isActive ? "bg-accent text-background hover:text-text" : "text hover:shadow"
    }`;
    return (
      <nav>
        <ul className="flex justify-center items-center gap-2">
          <li>
            <NavLink
              to="/"
              className={linkClass}
            >
              {t("header.nav.home")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={linkClass}
            >
              {t("header.nav.about")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={linkClass}
            >
              {t("header.nav.projects")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/path-to-it"
              className= {linkClass}
            >
              {t("header.nav.path-to-it")}
            </NavLink>
          </li>
        </ul>
      </nav>
    );
}

export default Navigation