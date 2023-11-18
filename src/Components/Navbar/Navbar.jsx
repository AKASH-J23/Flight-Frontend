import React from "react";
import { BiMenu } from "react-icons/bi";

function Navbar() {
    return (
      <div className="flex justify-center w-screen h-[70px] z-10 bg-cyan-50 drop-shadow-lg">
          <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16">
            <h1 className="text-3xl font-bold text-gray-800">Flight Management App</h1>
            <div className="h-8 w-8 text-black ">
            <BiMenu className="w-full h-full items-center justify-between"/>
            </div>
          </div>
      </div> 
    )
  }
  
  export default Navbar;