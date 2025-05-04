import { Link } from "react-router-dom"

const Navigation = () => {
    return (
      <nav>
        <ul className="flex justify-center items-center gap-2">
          <li>
            <Link
              to="/"
              className="inline-block text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="inline-block text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/path-to-it"
              className="inline-block text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
            >
              Path to IT
            </Link>
          </li>
        </ul>
      </nav>
    );
}

export default Navigation