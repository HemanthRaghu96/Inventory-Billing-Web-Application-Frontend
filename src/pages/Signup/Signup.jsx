import React from "react";
import { MdInventory } from "react-icons/md";
import Footer from "../global/Footer";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <main className="login ">
      <div className="flex  flex-col justify-center items-center  h-screen">
        <div className="flex justify-center items-center bg-white rounded-md mb-10 ">
          <div className="flex flex-col  m-10 ">
            <div className="flex justify-center items-center">
              <MdInventory className="size-12 my-3" />

              <h1 className="text-xl font-semibold">Inventory</h1>
            </div>

            <h1 className="text-2xl font-semibold px-2">Sign Up</h1>
            <p className="text-base font-light px-2">to access Inventory</p>
            <input
              type="text"
              placeholder="Username"
              className="m-2 px-2 py-1 border bg-slate-100 rounded-md"
            />
             <input
              type="text"
              placeholder="Email address"
              className="m-2 px-2 py-1 border bg-slate-100 rounded-md"
            />
             <input
              type="text"
              placeholder="Password"
              className="m-2 px-2 py-1 border bg-slate-100 rounded-md"
            />
            <input
              type="text"
              placeholder="Confirm Password"
              className="m-2 px-2 py-1 border bg-slate-100 rounded-md"
            />
            <button className="m-2 p-2 border rounded-lg bg-buttonColor text-white font-semibold cursor-pointer">
              Signup
            </button>
            <p className="text-base font-light px-2 my-1">
            Already have a Zoho account? {" "}
              <span className="text-buttonColor font-semibold cursor-pointer">
                <Link to={"/"}>  Sign In</Link>
              </span>
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}
