import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom"

const Navigation = () => {
  const {t} = useTranslation()
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `inline-block font-semibold py-2 px-4 rounded-xl transition-smooth ${
      isActive ? "bg-footer" : "text hover:shadow"
    }`;
    return (
      <nav>
        <ul className="flex justify-center items-center gap-2">
          <li>
            <NavLink
              to="/"
              className={linkClass}
            >
              {t("header-home")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={linkClass}
            >
              {t("header-projects")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/path-to-it"
              className= {linkClass}
            >
              {t("header-path-to-it")}
            </NavLink>
          </li>
        </ul>
      </nav>
    );
}

export default Navigation