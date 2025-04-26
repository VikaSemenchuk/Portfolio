import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <>
            <h1>It's Home Page</h1>
            <Link to="/projects" className="inline-block bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">Projects</Link>
        </>
    );

}

export default HomePage;