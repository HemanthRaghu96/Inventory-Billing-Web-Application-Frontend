import React from "react";
import { IoSearchOutline } from "react-icons/io5";

export default function Searchbar() {
  return (
    <section>
      <div className="flex relative mx-3">
        <IoSearchOutline className="flex justify-center items-center absolute left-3 top-2 cursor-pointer"/>
        <input
          type="text"
          placeholder="Search..."
          className="bg-slate-700 text-white pl-10 py-1 rounded-lg border-[1px] border-slate-400 w-40 md:w-64"
        />
      </div>
    </section>
  );
}
