import React, { useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
import { API } from "../../../api/api";
import axios from "axios";



export default function AddCustomers() {
  const navigate = useNavigate();
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [displayname, setDisplayName] = useState("");
  const [companyname, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [pan, setPan] = useState("");
  const [billingaddress, setBillingAddress] = useState("");
  const [billingcountry, setBillingCountry] = useState("");
  const [billingcity, setBillingCity] = useState("");
  const [billingstate, setBillingState] = useState("");
  const [billingpincode, setBillingPincode] = useState("");
  const [shippingaddress, setShippingAddress] = useState("");
  const [shippingcountry, setShippingCountry] = useState("");
  const [shippingcity, setShippingCity] = useState("");
  const [shippingstate, setShippingState] = useState("");
  const [shippingpincode, setShippingPincode] = useState("");

  const handleSave = async () => {
    const addData = {
      firstname,
      lastname,
      displayname,
      companyname,
      email,
      phonenumber,
      pan,
      billingaddress,
      billingcountry,
      billingcity,
      billingstate,
      billingpincode,
      shippingaddress,
      shippingcountry,
      shippingcity,
      shippingstate,
      shippingpincode,
    };
    const response = await axios.post(
      `${API}addcustomer`,
      addData
    );
    await navigate(`/customers`);
  };
  return (
    <section className="ml-14 mt-16  md:ml-56 h-full overflow-y-auto">
      <div className="flex justify-between mr-5 md:mr-10 lg:mr-20">
        <h1 className="font-semibold text-xl">New Customer </h1>
        <Link to={"/customers"}>
          <HiMiniXMark className="mr-1 size-7 text-red-500" />
        </Link>
      </div>
      {/* First set of data */}
      <div className="flex justify-start ">
        <div className="mt-5 w-[320px]">
          <div className="flex justify-between my-4">
            <h1 className="">First Name</h1>
            <input
              type="text"
              className="border-2 rounded-md px-2 h-8"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstname}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="">Last Name</h1>
            <input
              type="text"
              className="border-2 rounded-md px-2  h-8"
              onChange={(e) => setLastName(e.target.value)}
              value={lastname}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="">Display Name</h1>
            <input
              type="text"
              className="border-2 rounded-md px-2  h-8"
              onChange={(e) => setDisplayName(e.target.value)}
              value={displayname}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="">company Name</h1>
            <input
              type="text"
              className="border-2 rounded-md px-2  h-8"
              onChange={(e) => setCompanyName(e.target.value)}
              value={companyname}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="">Email</h1>
            <input
              type="text"
              className="border-2 rounded-md px-2  h-8"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="">Phone Number</h1>
            <input
              type="text"
              className="border-2 rounded-md px-2  h-8"
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phonenumber}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="">PAN</h1>
            <input
              type="text"
              className="border-2 rounded-md px-2  h-8"
              onChange={(e) => setPan(e.target.value)}
              value={pan}
            />
          </div>
        </div>
        
      </div>
      {/* Second set of data */}
      <div className="flex justify-start ">
      
        <div className=" mt-5 w-[320px]">
        <h1 className="font-bold text-lg">Billing Address</h1>
          <div className="flex justify-between my-4">
         
            <h1 className="">Address</h1>
            <input
              type="text"
              className="border-2 rounded-md px-2  h-8"
              onChange={(e) => setBillingAddress(e.target.value)}
              value={billingaddress}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="">City</h1>
            <input
              type="text"
              className="border-2 rounded-md px-2  h-8"
              onChange={(e) => setBillingCity(e.target.value)}
              value={billingcity}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="">Country </h1>
            <input
              type="text"
              className="border-2 rounded-md px-2  h-8"
              onChange={(e) => setBillingCountry(e.target.value)}
              value={billingcountry}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="">State </h1>
            <input
              type="text"
              className="border-2 rounded-md px-2  h-8"
              onChange={(e) => setBillingState(e.target.value)}
              value={billingstate}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="">Pincode </h1>
            <input
              type="text"
              className="border-2 rounded-md px-2  h-8"
              onChange={(e) => setBillingPincode(e.target.value)}
              value={billingpincode}
            />
          </div>
        </div>
        <div className="mt-5 w-[320px] ml-20">
        <h1 className="font-bold text-lg">Shipping Address</h1>
          <div className="flex justify-between my-4">
            <h1 className="">Address</h1>
            <input
              type="text"
              className="border-2 rounded-md px-2  h-8"
              onChange={(e) => setShippingAddress(e.target.value)}
              value={shippingaddress}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="">City</h1>
            <input
              type="text"
              className="border-2 rounded-md px-2  h-8"
              onChange={(e) => setShippingCity(e.target.value)}
              value={shippingcity}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="">Country </h1>
            <input
              type="text"
              className="border-2 rounded-md px-2  h-8"
              onChange={(e) => setShippingCountry(e.target.value)}
              value={shippingcountry}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="">State </h1>
            <input
              type="text"
              className="border-2 rounded-md px-2  h-8"
              onChange={(e) => setShippingState(e.target.value)}
              value={shippingstate}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="">Pincode </h1>
            <input
              type="text"
              className="border-2 rounded-md px-2  h-8"
              onChange={(e) => setShippingPincode(e.target.value)}
              value={shippingpincode}
            />
          </div>
        </div>
      </div>
      

      <div className="flex my-4">
        <button
          className="border rounded-lg bg-buttonColor text-white px-2 py-1 mr-3"
          onClick={() => handleSave()}
        >
          Save
        </button>
        <button
          className="border rounded-lg px-2 py-1"
          onClick={() => navigate("/customers")}
        >
          Cancel
        </button>
      </div>
    </section>
  );
}
