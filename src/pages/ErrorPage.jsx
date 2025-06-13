import React, { useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import errorAnimation from "../assets/lottie/error.json";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  useEffect(() => {
    document.title = "Error";
  }, []);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <Player
        autoplay
        loop
        src={errorAnimation}
        style={{ height: "300px", width: "300px" }}
      />

      <h1 className="text-4xl font-bold text-gray-800 mt-6">
        Oops! Page not found
      </h1>
      <p className="text-gray-600 mt-2 text-center max-w-md">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>

      <Link
        to="/"
        className="mt-6 inline-block bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-lg font-semibold px-6 py-3 rounded-full shadow-lg transition-transform hover:scale-105"
      >
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
