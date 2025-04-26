import { Link } from "react-router-dom";

const ProjectPage = () => {
    return (
        <>
            <h1>It's Project Page</h1>
            <Link to="/" className="inline-block bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">Home</Link>
        </>
    )

}

export default ProjectPage;