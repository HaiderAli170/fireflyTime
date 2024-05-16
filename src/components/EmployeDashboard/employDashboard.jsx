import React from 'react'
import { Link } from 'react-router-dom'
import {SiCheckmarx} from "react-icons/si"
import {RiLogoutCircleRFill} from "react-icons/ri"
function EmployDashboard() {
  return (
    <div className="flex flex-col m-7     sm:flex sm:flex-row  sm:mt-10  sm:w-full sm:justify-evenly ">
     
  
      <div className="transition mb-5 rounded-lg ease-in-out delay-150  hover:-translate-y-1 hover:bg-cyan-600  duration-300 ... flex flex-col border border-slate-500 justify-center w-36 h-11   sm:p-3 bg-zinc-300  selection:rounded-lg sm:w-80 sm:h-52">
       <Link
       to={"/checkin"}>
   
        <p className=" sm:ml-32 ml-14 sm:text-3xl "><SiCheckmarx/> </p>
        <h1 className="text-center font-serif sm:text-3xl  "> Check in</h1>
        </Link>
      </div>

   
  
      <div className="transition mb-5 ease-in-out delay-150  hover:-translate-y-1 hover:bg-cyan-600  duration-300 ... flex flex-col border border-slate-500 justify-center w-36  h-11 sm:p-3 bg-zinc-300 rounded-lg sm:w-80 sm:h-52">
      <Link
      to={"/currentEmployee"}>
        <p className=" sm:ml-32 ml-14 sm:text-3xl "> <RiLogoutCircleRFill/></p>
        <h1 className="text-center font-serif sm:text-3xl  "> Check Out</h1>
        </Link>
      </div>
    
 
   
     
    </div>
  )
}

export default EmployDashboard
