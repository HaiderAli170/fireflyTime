import React, { useState } from "react";
import Navbar from "../Navbar/navbar";
import Sidebar from "../Sidebar/sidebar";
import { useSelector } from "react-redux";

function Dashboard({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Function to toggle Sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="grid grid-cols-5 h-screen">

      <div className={`${isSidebarOpen ? "" : "hidden"}`}>
        <Sidebar />
      </div>
      <div className={`col-span-4 ${isSidebarOpen ? "" : "col-span-5"}  `}>
        <Navbar toggleSidebar={toggleSidebar} />
        <div className={`ml-5 mt-[5rem] ${isSidebarOpen ? "" : "ml-0  items-center text-center"}`}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
