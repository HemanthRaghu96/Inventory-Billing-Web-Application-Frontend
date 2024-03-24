import React from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { MdOutlineFileUpload } from "react-icons/md";

export default function AddInventoryAdjustment() {
  return (
    <section className="ml-14 mt-16  md:ml-56 h-screen">
      <div className="flex justify-between mr-5 md:mr-10 lg:mr-20">
        <h1 className="font-semibold text-xl">New Adjustment</h1>
        <Link to={"/inventoryadjustments"}>
          <HiMiniXMark className="mr-1 size-7" />
        </Link>
      </div>
      {/* First set of data */}
      <div className="flex justify-start ">
        <div className=" mt-5 w-[350px]">
          <div className="flex justify-between my-4">
            <h1 className="">Reference Number</h1>
            <input type="text" className="border-2 rounded-md px-2  h-8" />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="">Date*</h1>
            <input type="text" className="border-2 rounded-md px-2  h-8" />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="">Account* </h1>
            <input type="text" className="border-2 rounded-md px-2  h-8" />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="">Reason* </h1>
            <input type="text" className="border-2 rounded-md px-2  h-8" />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="">Description </h1>
            <input type="text" className="border-2 rounded-md px-2  h-8" />
          </div>
        </div>
      </div>
      {/* Second set of data */}
      {/* Third set of data */}
      <div className="mt-4">
        <p className="text-sm">Attach File(s) to inventory adjustment</p>
        <button className="border rounded-md py-2 px-3 flex items-center"><MdOutlineFileUpload className="mx-1"/>Upload File</button>
        <p className="text-sm">You can upload a maximum of 5 files, 5MB each</p>
      </div>
    </section>
  );
}
