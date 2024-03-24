import React from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

export default function ViewSingleItem() {
  return (
    <section className="ml-14 mt-16  md:ml-56 h-screen">
      <div className="flex justify-between mr-5 md:mr-10 lg:mr-20">
        <h1 className="font-semibold text-xl">Item Details</h1>
        <div className="flex">
          <Link to={"/items/edititem"}>
            <button className="px-2 flex items-center bg-buttonColor text-white rounded-md mx-2">
              <MdOutlineEdit className="mr-1" />
              Edit
            </button>
          </Link>
          <Link to={"/items"}>
          <button className="px-2 flex items-center bg-buttonColor text-white rounded-md mx-2">
            <MdDeleteOutline className="mr-1" />
            Delete
          </button>
          </Link>
          <Link to={"/items"}>
            <HiMiniXMark className="mr-1 ml-20 size-7 text-red-500" />
          </Link>
        </div>
      </div>
      <div className="flex">
        <div className="py-1 my-1 w-40">
          <h1 className="my-1 text-lg">Item Name</h1>
          <h1 className="my-1 text-lg">SKU</h1>
          <h1 className="my-1 text-lg">SAC</h1>
          <h1 className="my-1 text-lg">Unit</h1>
          <h1 className="my-1 text-lg">UPC</h1>
          <h1 className="my-1 text-lg">EAN</h1>
          <h1 className="my-1 text-lg">ISBN</h1>
        </div>
        <div className="py-1 my-1  w-40">
          <h1 className="my-1 text-lg">Sofa</h1>
          <h1 className="my-1 text-lg">Item 1 sku</h1>
          <h1 className="my-1 text-lg">342009</h1>
          <h1 className="my-1 text-lg">Kg</h1>
          <h1 className="my-1 text-lg">Item 1 upc</h1>
          <h1 className="my-1 text-lg">Item 1 ean</h1>
          <h1 className="my-1 text-lg">Item 1 isbn</h1>
        </div>
        <div>
          <img src="" alt="item name" className="size-40 border" />
        </div>
      </div>
      <div className="mt-5">
        <h1 className="font-semibold text-lg">Sales Information</h1>
        <div className="flex">
          <div className="py-1 my-1 w-40">
            <h1 className="my-1 text-lg">Selling Price</h1>
            <h1 className="my-1 text-lg">Sales Account</h1>
            <h1 className="my-1 text-lg">Description</h1>
          </div>
          <div className="py-1 my-1 ">
            <h1 className="my-1 text-lg">Rs.9905.00</h1>
            <h1 className="my-1 text-lg">General Income</h1>
            <h1 className="my-1 text-lg">
              A comfortable, modern sofa with plush cushions.
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
{
  /* <h1 className="font-semibold text-xl">Item Name</h1> */
}
