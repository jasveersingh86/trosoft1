import React from "react";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      
      <h1 className="text-7xl font-bold text-blue-600">404</h1>
      <p className="text-2xl font-semibold text-gray-700 mt-4">
        Page Not Found
      </p>
      <p className="text-gray-500 mt-2">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow hover:from-indigo-600 hover:to-blue-500 transition-all"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default Notfound;
