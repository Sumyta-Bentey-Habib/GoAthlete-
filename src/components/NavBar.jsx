import { BowArrow } from "lucide-react";
import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { NavLink } from "react-router-dom"; 

const NavBar = () => {
  const [theme, setTheme] = useState("light");
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    // Load theme from localStorage or default to 'light'
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.setAttribute("data-theme", storedTheme);

    // Firebase auth listener for login/logout state changes
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) setUser(firebaseUser);
      else setUser(null);
    });
    return () => unsubscribe();
  }, [auth]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // user will be set to null automatically by listener
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="sticky top-0 z-50 shadow-sm navbar bg-base-100 rounded-3xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/all-events">Events Page</NavLink>
            </li>
            <li>
              <NavLink to="/create-events">Create Events</NavLink>
            </li>
          </ul>
        </div>

        <a className="btn btn-ghost text-xl flex items-center gap-2">
          <BowArrow />
          GoAthlete
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/all-events">Events Page</NavLink>
          </li>
          <li>
            <NavLink to="/create-events">Create Events</NavLink>
          </li>
          <li>
            <NavLink to="/about-us">About Us</NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-2">
        {/* User logged in avatar dropdown */}
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar cursor-pointer"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="User Avatar"
                  src={
                    user.photoURL ||
                    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  }
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/all-events" className="justify-between">
                  Book Event
                </NavLink>
              </li>
              <li>
                <NavLink to="/my-bookings">My Bookings</NavLink>
              </li>
              <li>
                <NavLink to="/my-events">My Created Events</NavLink>
              </li>
              <li>
                <a onClick={handleLogout} className="cursor-pointer">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <NavLink to="/login">
              <button className="btn btn-sm ">Login</button>
            </NavLink>

            <NavLink to="/register">
              <button className="btn bg-violet-400 btn-sm">Register</button>
            </NavLink>
          </>
        )}

        {/* Theme toggle button */}
        <button
          onClick={toggleTheme}
          className="btn btn-ghost"
          style={{ color: "inherit" }} 
          aria-label="Toggle Theme"
        >
          {theme === "light" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 3.25a.75.75 0 01.75.75v1a.75.75 0 01-1.5 0v-1A.75.75 0 0110 3.25zm4.47 2.03a.75.75 0 011.06 1.06l-.71.7a.75.75 0 01-1.06-1.06l.71-.7zM16.75 10a.75.75 0 01-.75.75h-1a.75.75 0 010-1.5h1a.75.75 0 01.75.75zm-2.53 4.72a.75.75 0 10-1.06 1.06l.7.71a.75.75 0 101.06-1.06l-.7-.71zM10 15.75a.75.75 0 01.75.75v1a.75.75 0 01-1.5 0v-1a.75.75 0 01.75-.75zm-4.72-1.53a.75.75 0 10-1.06 1.06l.71.7a.75.75 0 001.06-1.06l-.7-.7zM4.25 10a.75.75 0 01.75.75h-1a.75.75 0 010-1.5h1a.75.75 0 01-.75.75zm2.53-4.72a.75.75 0 10-1.06-1.06l-.71.7a.75.75 0 001.06 1.06l.71-.7zM10 6a4 4 0 100 8 4 4 0 000-8z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M17.293 13.293A8 8 0 116.707 2.707a8.003 8.003 0 0010.586 10.586z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default NavBar;
