import React, { useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
import { API } from "../../../api/api";
import axios from "axios";
import { useSidebar } from "../../../components/SidebarContext";

export default function AddCustomers() {
  const { open, setOpen } = useSidebar();
  const navigate = useNavigate();
  const [error, setError] = useState(false);
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
    try {
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
      const response = await axios.post(`${API}addcustomer`, addData);
      await navigate(`/customers`);
    } catch (error) {
      console.log("Error", error.message);
      setError(true);
    }
  };
  return (
   
     <section className={open?"ml-16 mt-16  h-full overflow-y-auto":"ml-14 mt-16 md:ml-56 h-full overflow-y-auto"}>
      <div className="flex justify-between mr-5 md:mr-10 lg:mr-20">
        <h1 className="font-semibold text-xl">New Customer </h1>
        <Link to={"/customers"}>
          <HiMiniXMark className="mr-1 size-7 text-red-500" />
        </Link>
      </div>
      {/* First set of data */}
      <div className="flex justify-start ">
        <div className="mt-5 w-[220px] md:w-[320px]">
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">First Name*</h1>
            <input
              type="text"
              className="border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstname}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">Last Name*</h1>
            <input
              type="text"
              className="border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
              onChange={(e) => setLastName(e.target.value)}
              value={lastname}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">Display Name*</h1>
            <input
              type="text"
              className="border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
              onChange={(e) => setDisplayName(e.target.value)}
              value={displayname}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">company Name*</h1>
            <input
              type="text"
              className="border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
              onChange={(e) => setCompanyName(e.target.value)}
              value={companyname}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">Email*</h1>
            <input
              type="text"
              className="border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">Phone Number*</h1>
            <input
              type="text"
              className="border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phonenumber}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">PAN*</h1>
            <input
              type="text"
              className="border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
              onChange={(e) => setPan(e.target.value)}
              value={pan}
            />
          </div>
        </div>
      </div>
      {/* Second set of data */}
      <div className="flex flex-col lg:flex-row justify-start ">
        <div className=" mt-5 w-[220px] md:w-[320px]">
          <h1 className="font-bold text-lg">Billing Address</h1>
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">Address</h1>
            <input
              type="text"
              className="border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
              onChange={(e) => setBillingAddress(e.target.value)}
              value={billingaddress}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">City</h1>
            <input
              type="text"
              className="border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
              onChange={(e) => setBillingCity(e.target.value)}
              value={billingcity}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">Country </h1>
            <input
              type="text"
              className="border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
              onChange={(e) => setBillingCountry(e.target.value)}
              value={billingcountry}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">State </h1>
            <input
              type="text"
              className="border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
              onChange={(e) => setBillingState(e.target.value)}
              value={billingstate}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">Pincode </h1>
            <input
              type="text"
              className="border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
              onChange={(e) => setBillingPincode(e.target.value)}
              value={billingpincode}
            />
          </div>
        </div>
        <div className="mt-5 w-[220px] md:w-[320px] lg:ml-20">
          <h1 className="font-bold text-lg">Shipping Address</h1>
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">Address</h1>
            <input
              type="text"
              className="border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
              onChange={(e) => setShippingAddress(e.target.value)}
              value={shippingaddress}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">City</h1>
            <input
              type="text"
              className="border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
              onChange={(e) => setShippingCity(e.target.value)}
              value={shippingcity}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">Country </h1>
            <input
              type="text"
              className="border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
              onChange={(e) => setShippingCountry(e.target.value)}
              value={shippingcountry}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">State </h1>
            <input
              type="text"
              className="border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
              onChange={(e) => setShippingState(e.target.value)}
              value={shippingstate}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">Pincode </h1>
            <input
              type="text"
              className="border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
              onChange={(e) => setShippingPincode(e.target.value)}
              value={shippingpincode}
            />
          </div>
        </div>
      </div>

      {error ? (
        <div className="flex my-4">
          <h1 className="text-xs md:text-base text-red-500">
            Kindly fill all the mandatory (*) fields{" "}
          </h1>
        </div>
      ) : (
        ""
      )}

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
