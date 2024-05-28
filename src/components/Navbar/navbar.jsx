import React, { useState, useEffect, useRef } from "react";
import Admin from "/Images/admin.jpeg";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaGripLines } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { FaMessage } from "react-icons/fa6";
import logo from "/Images/logo.jpg";

const Navbar = ({ toggleSidebar }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && dropdownRef.current.contains(event.target)) {
        return;
      }
      if (isDropdownOpen && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
    toggleSidebar();
  };

  return (
    <div className={`fixed w-full mb-10 z-50`}>
      <nav className="flex p-2 w-full justify-between items-center border-b border-gray-300 shadow-lg bg-gray-100">
        <div className="flex items-center">
          <button
            onClick={handleSidebarToggle}
            className="text-2xl font-serif font-semibold text-gray-500 dark:text-white focus:outline-none"
          >
            <FaGripLines />
          </button>
          {!isSidebarOpen && (
            <div className="flex items-center ml-3">
              <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
              <span className="text-2xl font-serif font-semibold text-gray-700 dark:text-white ml-2">
                FireFly Time
              </span>
            </div>
          )}
        </div>
        <div className={`flex items-center space-x-4   ${isSidebarOpen ? 'mr-[17rem]' : 'mr-0 sm:mr-0 md:mr-0'}`}>
          {/* <div className="hidden md:flex relative">
            <input
              type="text"
              className="block w-full pr-10 p-2 pl-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-300 focus:border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div> */}
          <div className="flex items-center space-x-4">
            <IoNotifications size={20} className="text-gray-500" />
            <FaMessage size={20} className="text-gray-500" />
          </div>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center text-black focus:outline-none"
            >
              <img
                className="w-10 h-10 rounded-full"
                src={Admin}
                alt="Admin"
              />
              <p className="p-2">Admin</p>
              <MdOutlineArrowDropDown className="text-black text-2xl" />
            </button>
            {isDropdownOpen && (
              <div
                className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50"
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
                      href="/settings"
                      className="block px-4 py-2 text-sm text-gray-700"
                    >
                      Settings
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
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
