import React, { useState } from "react";
import { MdInventory } from "react-icons/md";
import {  useNavigate, useParams } from "react-router-dom";
import Footer from "../pages/global/Footer";
import { API } from "../api/api";
import axios from "axios";

export default function UserChangePassword() {
    const { userid, token } = useParams();
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handlesendmail = async () => {
    try {
      const response = await axios.post(`${API}${userid}/${token}`, { password });
      console.log(response.data);
      navigate("/");
    } catch (error) {
      console.log("Error", error.message);
    }
  };
  const handleresetpassword = (e) => {
    setPassword(e.target.value);
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
              Type your reset password.
            </p>
            <input
              type="text"
              placeholder="Reset Password"
              onChange={(e) => handleresetpassword(e)}
              className="m-2 px-2 py-1 border bg-slate-100 rounded-md"
            />
            <button
              className="m-2 p-2 border rounded-lg bg-buttonColor text-white font-semibold cursor-pointer"
              onClick={() => handlesendmail()}
            >
              Reset
            </button>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}
