import React from "react";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function ItemList() {
  return (
    <section className="ml-14 mt-16  md:ml-56 h-screen">
      <div className="flex justify-between mr-5 md:mr-10 ld:mr-32">
        <h1 className="font-semibold text-xl">All Items </h1>
        <Link to={"/items/additems"}>
          {" "}
          <button className="flex justify-center items-center text-white bg-buttonColor px-2 rounded-md">
            <FaPlus className="mr-1" />
            New
          </button>
        </Link>
      </div>
    </section>
  );
}
