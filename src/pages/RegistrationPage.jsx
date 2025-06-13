import React, { useState, useContext, useEffect } from "react";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import registrationAnimation from "../assets/lottie/registration.json";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../contexts/AuthContext/AuthProvider";
import { useNavigate, NavLink } from "react-router-dom";
import { updateProfile } from "firebase/auth";

const RegistrationPage = () => {
  useEffect(() => {
    document.title = "Registration Page || GoAthlete";
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photoURL: "",
    password: "",
  });

  const { createUser, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validatePassword = (password) => {
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasLength = password.length >= 6;
    return hasUpper && hasLower && hasLength;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, photoURL, password } = formData;

    if (!name || !email || !photoURL || !password) {
      Swal.fire("Error", "Please fill out all fields.", "error");
      return;
    }

    if (!validatePassword(password)) {
      Swal.fire(
        "Weak Password",
        "Password must be at least 6 characters and include both uppercase and lowercase letters.",
        "error"
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        return updateProfile(result.user, {
          displayName: name,
          photoURL: photoURL,
        }).then(() => result.user);
      })
      .then((user) => {
        Swal.fire(
          "Success",
          `Registration completed! Welcome, ${user.displayName}`,
          "success"
        );
        setFormData({
          name: "",
          email: "",
          photoURL: "",
          password: "",
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire("Registration Failed", error.message, "error");
      });
  };

  const handleGoogleLogin = () => {
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
      });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10">
      <div className="w-full max-w-md mb-6">
        <Lottie
          animationData={registrationAnimation}
          loop={true}
          className="w-full h-64"
        />
      </div>

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center text-black">Register</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm text-black">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-violet-400"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-black">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-violet-400"
            />
          </div>

          <div>
            <label htmlFor="photoURL" className="block text-sm text-black">
              Profile Picture URL
            </label>
            <input
              type="text"
              name="photoURL"
              id="photoURL"
              placeholder="Photo URL"
              value={formData.photoURL}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-violet-400"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm text-black">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-violet-400"
            />
            <p className="text-xs text-black mt-1">
              Must be at least 6 characters, with uppercase and lowercase
              letters.
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-violet-500 hover:bg-violet-600 text-white font-semibold py-2 rounded-lg"
          >
            Register
          </button>
        </form>

        <div className="flex items-center gap-2">
          <div className="flex-1 h-px bg-gray-300"></div>
          <p className="text-sm text-gray-500">Or register with</p>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleGoogleLogin}
            aria-label="Register with Google"
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg shadow text-gray-800"
          >
            <FcGoogle className="w-5 h-5" />
            <span>Continue with Google</span>
          </button>
        </div>

        <p className="text-sm text-center text-black">
          Already have an account?
          <NavLink to="/login" className="text-violet-600 hover:underline ml-1">
            Login
          </NavLink>
          <br />
          <br />
          <NavLink to="/" className="text-violet-600 hover:underline ml-1">
            Return Home
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default RegistrationPage;
