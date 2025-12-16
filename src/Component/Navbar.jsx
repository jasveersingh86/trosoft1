import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const dropdownRef = useRef(null);

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServiceOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div>
            <img
              // src="src/assets/trosoft.png"
               src={`${import.meta.env.BASE_URL}logos/trosoftlogo.png`}
              alt="Trosoft Logo"
              className="h-16 w-20 object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 items-center">

            <NavLink
              to="/"
              className="text-gray-700 hover:text-blue-600 text-lg font-medium"
            >
              Home
            </NavLink>

            <NavLink
              to="/who-we-are"
              className="text-gray-700 hover:text-blue-600 text-lg font-medium"
            >
              Who We Are
            </NavLink>

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsServiceOpen(!isServiceOpen)}
                className="flex items-center text-gray-700 hover:text-blue-600 text-lg font-medium"
              >
                Services
                <svg
                  className={`w-4 h-4 ml-1 mt-1 transform transition ${
                    isServiceOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isServiceOpen && (
                <div className="absolute left-0 bg-white shadow-xl rounded-lg mt-2 w-52 py-2 border">
                  <NavLink
                    to="/web-development"
                    className="block px-4 py-2 hover:bg-blue-100 text-gray-700 rounded-md"
                  >
                    Web Development
                  </NavLink>

                  <NavLink
                    to="/app-development"
                    className="block px-4 py-2 hover:bg-blue-100 text-gray-700 rounded-md"
                  >
                    App Development
                  </NavLink>

                  <NavLink
                    to="/digital-marketing"
                    className="block px-4 py-2 hover:bg-blue-100 text-gray-700 rounded-md"
                  >
                    Digital Marketing
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink
              to="/contact"
              className="text-gray-700 hover:text-blue-600 text-lg font-medium"
            >
              Contact Us
            </NavLink>
          </div>

          {/* Desktop Button */}
          <div className="hidden md:flex">
            <NavLink to="/enroll">
              <button className="px-4 py-2 bg-gradient-to-r from-red-600 to-purple-600 text-white rounded-lg text-lg font-medium transition hover:scale-105">
                GET A FREE QUOTE NOW
              </button>
            </NavLink>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-50 border-t px-4 pt-4 pb-6 space-y-3">

          <NavLink to="/" className="block py-3 text-gray-700 text-lg">
            Home
          </NavLink>

          <NavLink to="/who-we-are" className="block py-3 text-gray-700 text-lg">
            Who We Are
          </NavLink>

          {/* MOBILE Services Dropdown */}
          <div>
            <button
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="flex justify-between items-center w-full py-3 text-gray-700 text-lg"
            >
              Services
              <span>{isMobileServicesOpen ? "-" : "+"}</span>
            </button>

            {isMobileServicesOpen && (
              <div className="ml-4 mt-2 space-y-2">
                <NavLink to="/web-development" className="block py-2 text-gray-600 hover:text-blue-600">
                  Web Development
                </NavLink>
                <NavLink to="/app-development" className="block py-2 text-gray-600 hover:text-blue-600">
                  App Development
                </NavLink>
                <NavLink to="/digital-marketing" className="block py-2 text-gray-600 hover:text-blue-600">
                  Digital Marketing
                </NavLink>
              </div>
            )}
          </div>

          <NavLink to="/contact" className="block py-3 text-gray-700 text-lg">
            Contact Us
          </NavLink>

          <NavLink to="/enroll">
            <button className="px-4 py-2 ml-12 bg-gradient-to-r from-red-600 to-purple-600 text-white rounded-lg text-lg font-medium transition hover:scale-105">
              GET A FREE QUOTE NOW
            </button>
          </NavLink>

        </div>
      )}
    </nav>
  );
};

export default Navbar;
