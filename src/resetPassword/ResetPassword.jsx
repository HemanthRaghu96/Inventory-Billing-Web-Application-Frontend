import React, { useState } from "react";
import { MdInventory } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../pages/global/Footer";
import axios from "axios";
import { API } from "../api/api";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const navigate=useNavigate()
  const handleEmailadress = (e) => {
    setEmail(e.target.value);
  };
  const handlesendmail = async () => {
    try {
      const sendmailData = {
        email,
      };
      console.log(sendmailData);
      await axios.post(`${API}sendpasswordlink`, sendmailData);
        navigate("/sucessemailsend");
    } catch (err) {
      console.log("Error", err.message);
    }
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

            <h1 className="text-2xl font-semibold px-2">Forgot Password</h1>
            <p className="text-base font-light px-2">
              A reset password Link will be sent to your registered email.
            </p>
            <input
              type="text"
              placeholder="Email address"
              onChange={(e) => handleEmailadress(e)}
              className="m-2 px-2 py-1 border bg-slate-100 rounded-md"
            />

            <button
              className="m-2 p-2 border rounded-lg bg-buttonColor text-white font-semibold cursor-pointer"
              onClick={() => handlesendmail()}
            >
              Send mail
            </button>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}
