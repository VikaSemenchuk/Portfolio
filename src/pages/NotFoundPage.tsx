import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl font-bold mb-4">404 – Page Not Found</h1>
      <p className="mb-6 text-lg text-gray-600">
      Sorry, the page you are looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;