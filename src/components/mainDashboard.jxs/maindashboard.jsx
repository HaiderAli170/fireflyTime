import React from "react";
import { BsPersonFillAdd } from "react-icons/bs";
import { HiStatusOnline } from "react-icons/hi";
import {BiSolidReport} from "react-icons/bi"
import { Link } from "react-router-dom";


function Maindashboard() {
  return (
    <div className="flex flex-col m-7     sm:flex sm:flex-row  sm:mt-10  sm:w-full sm:justify-evenly ">
     
  
      <div className="transition mb-5 rounded-lg ease-in-out delay-150  hover:-translate-y-1 hover:bg-sky-600 hover:font-poppins duration-300 ... flex flex-col border border-slate-500 justify-center w-36 h-11   sm:p-3 bg-zinc-300  selection:rounded-lg sm:w-80 sm:h-52">
       <Link
       to={"/addEmployee"}>
   
        <p className=" sm:ml-32 ml-14 sm:text-3xl "> <BsPersonFillAdd/></p>
        <h1 className="text-center font-poppins sm:text-3xl  "> Add Employee</h1>
        </Link>
      </div>

   
  
      <div className="transition mb-5 ease-in-out delay-150  hover:-translate-y-1 hover:bg-sky-600 hover:font-poppins duration-300 ... flex flex-col border border-slate-500 justify-center w-36  h-11 sm:p-3 bg-zinc-300 rounded-lg sm:w-80 sm:h-52">
      <Link
      to={"/currentEmployee"}>
        <p className=" sm:ml-32 ml-14 sm:text-3xl "> <HiStatusOnline/></p>
        <h1 className="text-center font-poppins sm:text-3xl  "> Current Employee</h1>
        </Link>
      </div>
    
 
    
      <div className="transition ease-in-out delay-150  hover:-translate-y-1 hover:bg-sky-600 hover:font-poppins duration-300 ... flex flex-col border border-slate-500 justify-center w-36 h-11   sm:p-3 bg-zinc-300 rounded-lg sm:w-80 sm:h-52">
      <Link to={"#"}>
        <p className=" sm:ml-32 ml-14 sm:text-3xl"> <BiSolidReport/></p>
        <h1 className="text-center font-poppins sm:text-3xl  "> Report</h1>
        </Link>
      </div>
     
    </div>
  );
}

export default Maindashboard;
