import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"

const Navigation = () => {
    const {t} = useTranslation()
    return (
      <nav>
        <ul className="flex justify-center items-center gap-2">
          <li>
            <Link
              to="/"
              className="inline-block font-semibold py-2 px-4 rounded "
            >
              {t("header-home")}
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="inline-block font-semibold py-2 px-4 rounded "
            >
              {t("header-projects")}
            </Link>
          </li>
          <li>
            <Link
              to="/path-to-it"
              className="inline-block font-semibold py-2 px-4 rounded "
            >
              {t("header-path-to-it")}
            </Link>
          </li>
        </ul>
      </nav>
    );
}

export default Navigation