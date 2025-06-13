import React, { useContext, useState } from "react";
import Lottie from "lottie-react";
import { FcGoogle } from "react-icons/fc";
import loginAnimation from "../assets/lottie/login.json";
import { AuthContext } from "../contexts/AuthContext/AuthProvider"; 
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";
const LogInPage = () => {
  const { googleLogin, signInUser } = useContext(AuthContext); 
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      Swal.fire("Error", "Please enter email and password.", "error");
      return;
    }

    setLoading(true);
    try {
      const result = await signInUser(email, password);
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: `Welcome, ${result.user.email}!`,
        timer: 1500,
        showConfirmButton: false,
      });
      navigate("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    setLoading(true);
    googleLogin()
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: `Welcome, ${result.user.displayName || "User"}!`,
          timer: 1500,
          showConfirmButton: false,
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: error.message,
        });
      })
      .finally(() => setLoading(false));
  };


  return (
    <div className="min-h-screen flex items-center justify-center px-4 ">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden">
        {/* Lottie Animation */}
        <div className="w-full md:w-1/2 p-6 flex items-center justify-center bg-gray-200">
          <Lottie animationData={loginAnimation} loop={true} className="w-full h-80" />
        </div>

       
        <div className="w-full md:w-1/2 p-8 space-y-6">
          <h1 className="text-3xl font-bold text-center text-gray-800">Login</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white text-gray-800 focus:ring focus:ring-violet-300"
                disabled={loading}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm text-gray-600">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white text-gray-800 focus:ring focus:ring-violet-300"
                disabled={loading}
              />
              <div className="flex justify-end text-xs text-gray-500 mt-1">
                <a href="#" className="hover:underline">Forgot Password?</a>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-violet-500 hover:bg-violet-600 text-white py-3 rounded-md text-center disabled:opacity-70"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <div className="flex items-center gap-2">
            <div className="flex-1 h-px bg-gray-300"></div>
            <p className="text-sm text-gray-500">Or login with</p>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleGoogleLogin}
              aria-label="Login with Google"
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md shadow text-gray-800 disabled:opacity-70"
              disabled={loading}
            >
              <FcGoogle className="w-5 h-5" />
              <span>Continue with Google</span>
            </button>
          </div>

          <p className="text-sm text-center text-gray-500">
            Don’t have an account?
            <NavLink  to ="/register" className="text-violet-600 hover:underline ml-1">Sign up</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
