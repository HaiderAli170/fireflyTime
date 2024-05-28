import React, { useState,useEffect } from "react";
import { Link,useLocation } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";
import { HiStatusOnline, HiDocumentReport } from "react-icons/hi";
import { FaPersonBreastfeeding, FaRProject } from "react-icons/fa6";
import { LuLayoutDashboard } from "react-icons/lu";
import logo from "/Images/logo.jpg";

function Sidebar() {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(null);
  const permission = "admin";

  let sideBarItems = [];

  permission === "admin"
    ? (sideBarItems = [
        { icon: <MdDashboard size={20} />, name: "Dashboard", href: "/dashboard" },
        { icon: <IoMdPersonAdd size={20} />, name: "Add Employee", href: "/addEmployee" },
        { icon: <HiStatusOnline size={20} />, name: "Current Employee", href: "/currentEmployee" },
        { icon: <FaPersonBreastfeeding size={20} />, name: "Fees Collection", href: "" },
        { icon: <HiDocumentReport size={20} />, name: "Report", href: "" },
        { icon: <FaRProject size={20} />, name: "Project", href: "" },
      ])
    : (sideBarItems = [
        { name: "Dashboard", href: "/employdashboard" },
        { name: "Check In", href: "/checkin" },
      ]);
      useEffect(() => {
        const activeIndex = sideBarItems.findIndex(item => item.href === location.pathname);
        setActiveItem(activeIndex === -1 ? 0 : activeIndex); // Default to "Dashboard" if no match found
      }, [location.pathname, sideBarItems]);

  return (
    <div className="h-screen fixed w-1/5 bg-blue text-white border-r border-gray-200">
      <a href="#" className="flex items-center p-2 mt-2 bg-darkBlue">
        <img
          src={logo}
          alt="Flowbite Logo"
          className="w-10 h-10 rounded-full"
        />
        <span className="self-center text-2xl font-serif font-semibold whitespace-nowrap dark:text-white px-1 sm:hidden md:hidden">
          FireFly Time
        </span>
      </a>
      <div className="flex items-center p-2 text-lg font-bold rounded-lg">
        <p>
          <LuLayoutDashboard />
        </p>
        {permission === "admin" ? (
          <small className="font-poppins md:hidden sm:hidden">Admin Dashboard</small>
        ) : (
          <small className="font-poppins">Employee Dashboard</small>
        )}
      </div>
      {sideBarItems.map((item, index) => (
        <div
          className={`p-2 ml-4 rounded-l-xl font-poppins mt-1 ${
            activeItem === index ? "bg-white text-blue" : "hover:bg-white hover:text-blue"
          }`}
          key={index}
          onClick={() => setActiveItem(index)}
        >
          <Link to={item.href} className="flex flex-row items-center space-x-2">
            <div className="flex justify-center rounded-full ">
              {item.icon}
            </div>
            <div className="flex flex-row items-center justify-between flex-grow">
              <h4 className="text-left font-poppins sm:hidden md:hidden">
                {item.name}
              </h4>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
