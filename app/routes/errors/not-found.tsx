import { Link } from "react-router";

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center px-6 min-h-[70vh]">
            <h1 className="text-6xl font-extrabold text-blue-400 mb-4">404</h1>
            <h2 
            className="text-2xl font-semibold text-gray-100 mb-2">
                Page Not Found
            </h2>
            <p className="text-gray-300 mb-6">Sorry, the page you're looking for doesn't exist.</p>
            <Link to="/" className="text-white rounded inline-block bg-blue-600 px-6 py-2 hover:text-blue-700 transition">
                Go back home 
            </Link>
        </div>
    );
};

export default NotFoundPage;
