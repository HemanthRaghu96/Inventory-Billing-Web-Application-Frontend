import React, { useState } from "react";
import { MdInventory } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../pages/global/Footer";

export default function SucessEmailsent() {
    const navigate=useNavigate()
  const handlesendmail = async () => {
    navigate("/");
  };

  return (
    <main className="login ">
      <div className="flex  flex-col justify-center items-center  h-screen">
        <div className="flex justify-center items-center bg-white rounded-md mb-10 ">
          <div className="flex flex-col  m-10 ">
            <div className="flex justify-center items-center">
              <MdInventory className="size-12 my-3" />

              <h1 className="text-xl font-semibold">Inventory</h1>
            </div>

            <p className="text-base font-light px-2">
              A reset password Link has been sent to your registered email.
            </p>

            <button
              className="m-2 p-2 border rounded-lg bg-buttonColor text-white font-semibold cursor-pointer"
              onClick={() => handlesendmail()}
            >Back to Login</button>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}
