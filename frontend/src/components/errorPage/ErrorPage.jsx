import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); //! Navigate to the previous page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      {/* <div className="text-center">
        <h1 className="text-9xl font-bold text-red-600">404</h1>
        <h2 className="text-4xl font-semibold text-gray-800 mt-4">
          Oops! Page Not Found
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          The page you are looking for doesn’t exist or has been moved.
        </p>
      </div> */}

      <div className="flex justify-center items-center">
        <img src="https://static.vecteezy.com/system/resources/previews/001/857/111/non_2x/error-404-page-not-found-landing-page-concept-for-mobile-and-pc-free-vector.jpg" alt="error image" 
        className="h-80 w-3/4"
        />
      </div>

      <div className="mt-8 flex gap-4">
        <button
          onClick={handleGoBack}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
        >
          Go Back
        </button>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all"
        >
          Go to Home
        </button>
      </div>

      
    </div>
  );
};

export default ErrorPage;
