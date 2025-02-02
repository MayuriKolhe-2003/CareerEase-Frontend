import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get current route
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("userId"));
  const dropdownRef = useRef(null); // Reference for dropdown

  useEffect(() => {
    // Listen for authentication changes (e.g., login/logout)
    const handleStorageChange = () => {
      setIsAuthenticated(!!localStorage.getItem("userId"));
    };

    // Add event listener for changes in localStorage
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    setIsAuthenticated(false); // Update state
    navigate("/");
  };

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

        {/* Profile Section */}
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center">
          {isAuthenticated ? (
            // Profile Picture with Dropdown
            <div className="relative" ref={dropdownRef}>
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
                <div className="absolute right-0 mt-2 w-40 bg-dark rounded-md shadow-lg border border-gray-200">
                  <ul className="py-2">
                    <li>
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-white"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Profile
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-white"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            // Sign In Button (When Logged Out)
            <Link
              to="/signin"
              className="text-white bg-primaryRed hover:bg-primaryRed focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-primaryRed dark:hover:bg-primaryRed dark:focus:ring-primaryRed"
              onClick={() => setIsAuthenticated(!!localStorage.getItem("userId"))} // Update after login
            >
              Sign In
            </Link>
          )}
        </div>

        {/* Navigation Links */}
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-dark md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700 ">
            {[
              { path: "/dashboard", name: "Dashboard" },
              { path: "/careergpt", name: "CareerGPT" },
              { path: "/learnskills", name: "Learn Skills" },
              { path: "/opportunities", name: "Explore Opportunities" },
              { path: "/discussions", name: "Discussions" },
            ].map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`block py-2 px-3 rounded-sm md:p-0 ${
                    location.pathname === link.path
                      ? "text-primaryRed font-semibold"
                      : "text-white hover:text-primaryRed"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
