import React from "react";
import Lottie from "lottie-react";
import { FcGoogle } from "react-icons/fc";
import loginAnimation from "../assets/lottie/login.json"; // Update path if needed

const LogInPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden">
        {/* Lottie Animation */}
        <div className="w-full md:w-1/2 p-6 flex items-center justify-center bg-gray-200">
          <Lottie animationData={loginAnimation} loop={true} className="w-full h-80" />
        </div>

        {/* Login Form */}
        <div className="w-full md:w-1/2 p-8 space-y-6">
          <h1 className="text-3xl font-bold text-center text-gray-800">Login</h1>
          <form className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm text-gray-600">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white text-gray-800 focus:ring focus:ring-violet-300"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm text-gray-600">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white text-gray-800 focus:ring focus:ring-violet-300"
              />
              <div className="flex justify-end text-xs text-gray-500 mt-1">
                <a href="#" className="hover:underline">Forgot Password?</a>
              </div>
            </div>
            <button className="w-full bg-violet-500 hover:bg-violet-600 text-white py-3 rounded-md text-center">
              Sign In
            </button>
          </form>

          <div className="flex items-center gap-2">
            <div className="flex-1 h-px bg-gray-300"></div>
            <p className="text-sm text-gray-500">Or login with</p>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          <div className="flex justify-center">
            {/* Google Login Button */}
            <button
              aria-label="Login with Google"
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md shadow text-gray-800"
            >
              <FcGoogle className="w-5 h-5" />
              <span>Continue with Google</span>
            </button>
          </div>

          <p className="text-sm text-center text-gray-500">
            Don’t have an account?
            <a href="#" className="text-violet-600 hover:underline ml-1">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
