import React, { useState, useEffect, useRef } from "react";
import Admin from "/Images/admin.jpeg";
import logo from "/Images/logo.jpg";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(); // Ref for the dropdown

  // Toggle the dropdown open or closed
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  // This effect handles clicking outside to close the dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      // If click is on toggle button, don't do anything
      if (dropdownRef.current && dropdownRef.current.contains(event.target)) {
        return;
      }
      // If the dropdown is open and the click is outside, close it
      if (isDropdownOpen && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    // Bind the event listener for the document
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener when the component unmounts
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]); // Only re-run if `isDropdownOpen` changes

  return (
    <div>
      <nav className="bg-zinc-300 p-1 sm:w-full w-auto sm:mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center ">
          <img
            src={logo}
            alt="Flowbite Logo"
            className="w-10 h-10 bg rounded-full"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            FireFlyTime
          </span>
        </a>
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="text-white hover:text-gray-200 focus:outline-none"
          >
            <img
              className="w-10 h-10 rounded-full"
              src={Admin}
              alt="Rounded avatar"
            />
          </button>
          {isDropdownOpen && (
            <div
              className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg"
              ref={dropdownRef}
            >
              <ul>
                <li className="hover:bg-gray-100">
                  <a
                    href="/profile"
                    className="block px-4 py-2 text-sm text-gray-700"
                  >
                    Profile
                  </a>
                </li>
                <li className="hover:bg-gray-100">
                  <a
                    href="/logout"
                    className="block px-4 py-2 text-sm text-gray-700"
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
