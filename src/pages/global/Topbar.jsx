import React from "react";
import Searchbar from "../../components/Searchbar";
import { IoPersonCircleSharp } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { MdInventory2 } from "react-icons/md";

export default function Topbar() {
  return (
    <section className="fixed top-0 w-full z-10 ">
      <div className="h-12 text-white flex justify-between items-center bg-slate-800 ">
        <div className="flex justify-between items-center  md:w-[500px]">
          {/* Inventory Logo */}
          <h1 className=" flex  items-center h-12 text-xs md:text-xl px-1 md:mx-3">
            <MdInventory2 className="md:mr-2" />
            Inventory
          </h1>
          {/* Searchbar */}
          <Searchbar />
        </div>  
        {/* Icons for Account,Setting,Notification */}
        <div className="flex items-center md:mr-14">
          <IoNotificationsOutline className="md:size-5 cursor-pointer mx-1 md:mx-3" />
          <IoSettingsOutline className="md:size-5 cursor-pointer mx-1  md:mx-3" />
          <IoPersonCircleSharp className="md:size-10 cursor-pointer mx-1  md:mx-3" />
        </div>
      </div>
    </section>
  );
}
