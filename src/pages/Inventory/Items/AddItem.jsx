import React from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";
export default function AddItem() {
  const units = [
    {
      value: "box",
      label: "box",
    },
    {
      value: "cm",
      label: "cm",
    },
    {
      value: "dz",
      label: "dz",
    },
    {
      value: "ft",
      label: "ft",
    },
    {
      value: "g",
      label: "g",
    },
    {
      value: "kg",
      label: "kg",
    },
    {
      value: "km",
      label: "km",
    },
    {
      value: "mg",
      label: "mg",
    },
    {
      value: "ml",
      label: "ml",
    },
    {
      value: "m",
      label: "m",
    },
  ];
  return (
    <section className="ml-14 mt-16  md:ml-56 h-full overflow-y-auto">
      <div className="flex justify-between mr-5 md:mr-10 lg:mr-20">
        <h1 className="font-semibold text-xl">New Item </h1>
        <Link to={"/items"}>
          <HiMiniXMark className="mr-1 size-7" />
        </Link>
      </div>
      {/* First set of data */}
      <div className="flex justify-start ">
        <div className="mt-5 w-[320px]">
          <div className="flex justify-between my-4">
            <h1 className="">Name*</h1>
            <input type="text" className="border-2 rounded-md px-2 h-8" />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="">SKU*</h1>
            <input type="text" className="border-2 rounded-md px-2  h-8" />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="">Unit*</h1>
            <input type="text" className="border-2 rounded-md px-2  h-8" />
          </div>
        </div>
        <div className="size-36 bg-slate-100 m-2 mx-20">
          <h1 className="flex justify-center items-center size-36">
            Browser Image
          </h1>
        </div>
      </div>
      {/* Second set of data */}
      <div className="flex justify-start ">
        <div className=" mt-5 w-[320px]">
          <div className="flex justify-between my-4">
            <h1 className="">Dimensions</h1>
            <input type="text" className="border-2 rounded-md px-2  h-8" />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="">Manufacturer</h1>
            <input type="text" className="border-2 rounded-md px-2  h-8" />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="">UPC </h1>
            <input type="text" className="border-2 rounded-md px-2  h-8" />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="">EAN </h1>
            <input type="text" className="border-2 rounded-md px-2  h-8" />
          </div>
        </div>
        <div className="mt-5 w-[320px] ml-20">
          <div className="flex justify-between my-4">
            <h1 className="">Weight</h1>
            <input type="text" className="border-2 rounded-md px-2  h-8" />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="">Brand</h1>
            <input type="text" className="border-2 rounded-md px-2  h-8" />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="">MPN </h1>
            <input type="text" className="border-2 rounded-md px-2  h-8" />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="">ISBN </h1>
            <input type="text" className="border-2 rounded-md px-2  h-8" />
          </div>
        </div>
      </div>
      {/*Sales & Purchase Information */}
      <h1 className="font-semibold text-xl mt-2">
        Sales & Purchase Information{" "}
      </h1>
      <div className="flex justify-start ">
        <div className=" mt-1 w-[320px]">
          <div className="flex justify-between my-4">
            <h1 className="">Selling Price*</h1>
            <input type="text" className="border-2 rounded-md px-2  h-8" />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="">Account*</h1>
            <input type="text" className="border-2 rounded-md px-2  h-8" />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="">Description </h1>
            <input type="text" className="border-2 rounded-md px-2  h-8" />
          </div>
        </div>
        <div className=" w-[320px] ml-20">
          <div className="flex justify-between my-4">
            <h1 className="">Cost Price*</h1>
            <input type="text" className="border-2 rounded-md px-2  h-8" />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="">Account*</h1>
            <input type="text" className="border-2 rounded-md px-2  h-8" />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="">Description </h1>
            <input type="text" className="border-2 rounded-md px-2  h-8" />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="">Preferred Vendor </h1>
            <input type="text" className="border-2 rounded-md px-2  h-8" />
          </div>
        </div>
      </div>
      {/*Track Inventory for this item */}
      <h1 className="font-semibold text-xl">Track Inventory for this item</h1>
      <div className="flex justify-start ">
        <div className=" mt-1 w-[320px]">
          <div className="flex justify-between my-4">
            <h1 className="">Inventory Account*</h1>
            <input type="text" className="border-2 rounded-md px-2  h-8" />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="">Opening Stock</h1>
            <input type="text" className="border-2 rounded-md px-2  h-8" />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="">Reorder Point </h1>
            <input type="text" className="border-2 rounded-md px-2  h-8" />
          </div>
        </div>
        <div className="mt-5 w-[320px] ml-20">
          <div className="flex justify-between my-4">
            <h1 className="">Opening Stock Rate per Unit</h1>
            <input type="text" className="border-2 rounded-md px-2 h-10 " />
          </div>
        </div>
      </div>
    </section>
  );
}
