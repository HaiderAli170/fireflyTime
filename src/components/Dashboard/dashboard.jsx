import React from "react";
import Navbar from "../Navbar/navbar";
import Sidebar from "../Sidebar/sidebar";
import { useSelector } from 'react-redux';

function Dashboard({ children }) {

  return (
    <div >
      <div>
        <Navbar />
      </div>

      <div className="flex">
        <Sidebar />

{React.Children.map(children, (child) => React.cloneElement(child, {}))}

       
      </div>
    </div>
  );
}

export default Dashboard;
