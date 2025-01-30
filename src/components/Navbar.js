import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-dark fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 mb-40">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            CareerEase
          </span>
        </a>

        {/* Sign In & Profile Section */}
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center">
          {/* Sign In Button */}
          <button
            type="button"
            className="text-white bg-primaryRed hover:bg-primaryRed focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-primaryRed dark:hover:bg-primaryRed dark:focus:ring-primaryRed"
          >
            Sign In
          </button>

          {/* Profile Picture with Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-2"
            >
              <img
                src="https://i.pravatar.cc/40" // Example profile picture
                alt="Profile"
                className="w-10 h-10 ml-5 rounded-full border-2 border-gray-300"
              />
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute  mt-2 w-40 bg-dark rounded-md shadow-lg border border-gray-200 ">
                <ul className="py-2">
                  <li>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={() => alert("Logging out...")}
                      className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>

          
        </div>

        {/* Navigation Links */}
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-dark md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0   dark:border-gray-700">
            <li>
              <Link
                to="/dashboard"
                className="block py-2 px-3 text-white bg-primaryRed rounded-sm md:bg-transparent md:text-primaryRed md:p-0 md:dark:text-primaryRed"
                aria-current="page"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/careergpt"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primaryRed md:p-0 md:dark:hover:text-primaryRed dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                CareerGPT
              </Link>
            </li>
            <li>
              <Link
                to="/learnskills"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primaryRed md:p-0 md:dark:hover:text-primaryRed dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Learn Skills
              </Link>
            </li>
            <li>
              <Link
                to="/opportunities"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primaryRed md:p-0 md:dark:hover:text-primaryRed dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Explore Opportunities
              </Link>
            </li>
            <li>
              <Link
                to="/discussions"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primaryRed md:p-0 md:dark:hover:text-primaryRed dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Discussions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
