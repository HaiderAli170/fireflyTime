import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineDoubleRight } from "react-icons/ai";




import { LuLayoutDashboard } from "react-icons/lu";

function Sidebar({children}) {
  
 
  const permission = "admin";

  let sideBarItems = [];

  permission === "admin"
    ? (sideBarItems = [
        { name: "Dashboard", href: "/dashboard" },
        {
        
          name: "Add Employee",
          href: "/addEmployee",
          //   children: [
          //     { name: "Teacher Details", href: "/child1" },
          //     { name: "Add Teacher", href: "/child2" },
          //     { name: "Delete Teacher ", href: "/child 4" },
          //   ],
        },
        {
        
          name: "Current Employee",
          href: "/currentEmployee",
          //   children: [
          //     { name: "Studnet Details", href: "/studentDetails" },
          //     { name: "Studnet Attendance", href: "/studentAttendance" },
          //     { name: "Disable Studnet ", href: "/child3" },
          //   ],
        },
        // {
        
        //   name: "Fees Collection",
        //   href: "",
        //   children: [
        //     { name: "Collect Fees", href: "/child1" },
        //     { name: "Payment", href: "/child2" },
        //   ],
        // },
      ])
    : (sideBarItems = [
        {  name: "Dashboard", href: "/employdashboard" },
        {
        
          name: "Check In",
          href: "/checkin",
          //   children: [
          //     { name: "Teacher Details", href: "/child1" },
          //     { name: "Add Teacher", href: "/child2" },
          //     { name: "Delete Teacher ", href: "/child 4" },
          //   ],
        },
      ]);

  return (
    <div  className="flex">
    
      <div className=" h-screen sm:w-48 bg-darkBlue text-white w-40">
        
        <div className=" flex items-center p-2 text-lg bg-slate-950" >
    <p>
        <LuLayoutDashboard/>
    </p>

    {permission==="admin" ? (
        // This part renders when Persmisson is true
        <small className="font-poppins" >Admin Dashboard</small>
      ) : (
        // This part renders when Permission is false
        <small className="font-poppins" >Employee Dashboard</small>
      )}
      
        </div>

        {sideBarItems.map((item, index) => (
          <div className="p-2 hover:bg-blue font-poppins" key={index}>
            <Link
              to={item.href}
              className="flex  flex-row items-center space-x-2" 
            >
              <div
                className=" flex justify-center rounded-full "
              >
                <AiOutlineDoubleRight/>
              </div>
               <div
                    className="flex flex-row  items-center justify-between flex-grow ">
                    <h4
                      className="text-left   font-poppins md:text-left sm:text-left" >
                   {item.name}
                    </h4>
                  </div>
            </Link>
          </div>
        ))}
        {/* {sideBarItems.map((item, index) => (
            <div key={index}>
              <Link
                to={item.href}
                className={`flex flex-row items-center space-x-2 ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
                onClick={() => {
                  handleToggle("child", index);
                }}>
                <div
                  className={`flex justify-center rounded-full ${
                    selectedItem === index
                      ? darkMode
                        ? "bg-white text-gray-800 "
                        : "bg-gray-800 text-white"
                      : darkMode
                      ? "text-white"
                      : "text-black"
                  } w-8 h-8`}>
                  <div className="m-auto">{item.icon}</div>
                </div>
                {openSidebar && (
                  <div
                    className={`flex flex-row items-center justify-between flex-grow ${
                      darkMode ? "text-white" : "text-gray-600"
                    }`}>
                    <h4
                      className={`text-center font-semibold font-poppins md:text-left ${
                        darkMode ? " text-gray-200" : "text-gray-600"
                      }`}>
                      {item.name}
                    </h4>
                    {item.children && <ChevronDownIcon className="w-4 h-4" />}
                  </div>
                )}
              </Link> */}
      </div>
      <div>
   
      </div>
   
    </div>
  );
}

export default Sidebar;
