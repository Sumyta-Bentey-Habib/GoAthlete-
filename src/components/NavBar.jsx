import { BowArrow } from "lucide-react";
import React, { useEffect, useState } from "react";

const NavBar = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.setAttribute("data-theme", storedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
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
              <a>Home</a>
            </li>
            <li>
              <a>Categories</a>
              <ul className="p-2">
                <li>
                  <a>Training</a>
                </li>
                <li>
                  <a>Nutrition</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>

        <a className="btn btn-ghost text-xl"> <BowArrow />GoAthlete</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <details>
              <summary>Categories</summary>
              <ul className="p-2">
                <li>
                  <a>Training</a>
                </li>
                <li>
                  <a>Nutrition</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="User Avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
         <button onClick={toggleTheme} className="btn btn-ghost">
          {theme === "light" ? (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 3.25a.75.75 0 01.75.75v1a.75.75 0 01-1.5 0v-1A.75.75 0 0110 3.25zm4.47 2.03a.75.75 0 011.06 1.06l-.71.7a.75.75 0 01-1.06-1.06l.71-.7zM16.75 10a.75.75 0 01-.75.75h-1a.75.75 0 010-1.5h1a.75.75 0 01.75.75zm-2.53 4.72a.75.75 0 10-1.06 1.06l.7.71a.75.75 0 101.06-1.06l-.7-.71zM10 15.75a.75.75 0 01.75.75v1a.75.75 0 01-1.5 0v-1a.75.75 0 01.75-.75zm-4.72-1.53a.75.75 0 10-1.06 1.06l.71.7a.75.75 0 001.06-1.06l-.7-.7zM4.25 10a.75.75 0 01.75.75h-1a.75.75 0 010-1.5h1a.75.75 0 01-.75.75zm2.53-4.72a.75.75 0 10-1.06-1.06l-.71.7a.75.75 0 001.06 1.06l.71-.7zM10 6a4 4 0 100 8 4 4 0 000-8z" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 116.707 2.707a8.003 8.003 0 0010.586 10.586z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default NavBar;
