import React from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

export default function ViewSingleInventoryAdjustment() {
  return (
    <section className="ml-14 mt-16  md:ml-56 h-screen">
      <div className="flex justify-between mr-5 md:mr-10 lg:mr-20">
        <h1 className="font-semibold text-xl">Adjustment Details</h1>
        <div className="flex">
          <Link to={"/inventoryadjustments/editinventoryadjustment"}>
            <button className="px-2 flex items-center bg-buttonColor text-white rounded-md mx-2">
              <MdOutlineEdit className="mr-1" />
              Edit
            </button>
          </Link>
          <Link to={"/inventoryadjustments"}>
          <button className="px-2 flex items-center bg-buttonColor text-white rounded-md mx-2">
            <MdDeleteOutline className="mr-1" />
            Delete
          </button>
          </Link>
          <Link to={"/inventoryadjustments"}>
            <HiMiniXMark className="mr-1 ml-20 size-7 text-red-500" />
          </Link>
        </div>
      </div>
      <div className="flex">
        <div className="py-1 my-1 w-40">
          <h1 className="my-1 text-lg">Reference Number</h1>
          <h1 className="my-1 text-lg">Date</h1>
          <h1 className="my-1 text-lg">Account</h1>
          <h1 className="my-1 text-lg">Reason</h1>
          <h1 className="my-1 text-lg">Description</h1>
        </div>
        <div className="py-1 my-1  w-40">
          <h1 className="my-1 text-lg">12345678</h1>
          <h1 className="my-1 text-lg">24-03-2024</h1>
          <h1 className="my-1 text-lg">342009</h1>
          <h1 className="my-1 text-lg">Old Stock</h1>
          <h1 className="my-1 text-lg">Item 1 upc</h1>
        </div>
      </div>
      
    </section>
  );
}
{
  /* <h1 className="font-semibold text-xl">Item Name</h1> */
}
