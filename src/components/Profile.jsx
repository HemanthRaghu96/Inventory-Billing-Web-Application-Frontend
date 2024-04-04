import React from "react";
import { FaXmark } from "react-icons/fa6";
import { IoLogOutOutline, IoPersonCircleSharp } from "react-icons/io5";
import axios from "axios";
import { API } from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Profile({ handleProfile }) {
    const navigate=useNavigate()
  const handleLogout = async () => {
    try {
      const response = await axios.get(`${API}logout`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      localStorage.setItem("login", "false");
      localStorage.setItem("token", "");
      if (response) {
        navigate("/");
      }
    } catch (err) {
      console.log("Error", err.message);
    }
  };

  return (
    <section>
      <div className=" absolute top-12 right-5 text-black w-[220px] lg:w-[350px] bg-sidebarColor rounded-b-lg">
        <div className="flex justify-evenly items-center">
          {/* <img
            src=""
            className="size-16 rounded-full m-2"
          /> */}
          <IoPersonCircleSharp className="md:size-10 cursor-pointer mx-1  md:mx-3 relative" />
          <div className="flex flex-col justify-center items-start m-1">
            <p className="px-1">{localStorage.getItem("email")}</p>
          </div>
          <FaXmark
            className="ml-10 cursor-pointer text-red-500"
            onClick={() => handleProfile()}
          />
        </div>
        <div
          className="flex text-red-500 justify-end items-center mx-10 mb-3 cursor-pointer"
          onClick={() => handleLogout()}
        >
          <IoLogOutOutline className="size-6" />
          <p className="mx-1">Log Out</p>
        </div>
      </div>
    </section>
  );
}
