import React, { useEffect, useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { Link, useNavigate, useParams } from "react-router-dom";
import { API } from "../../../api/api";
import axios from "axios";

export default function EditCustomers() {
  const { customersId } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchSelecteData();
  }, []);
  const fetchSelecteData = async () => {
    const response = await axios.get(
      `${API}getselectedcustomer/${customersId}`
    );
    // console.log(response.data.selectedCustomer[0]);
    setData(response.data.selectedCustomer[0]);
  };
  return data ? (
    <EditCustomer data={data} customersId={customersId} />
  ) : (
    "Loading..."
  );
}

function EditCustomer({ data, customersId }) {
  const navigate = useNavigate();

  const [firstname, setFirstName] = useState(data.firstname);
  const [lastname, setLastName] = useState(data.lastname);
  const [displayname, setDisplayName] = useState(data.displayname);
  const [companyname, setCompanyName] = useState(data.companyname);
  const [email, setEmail] = useState(data.email);
  const [phonenumber, setPhoneNumber] = useState(data.phonenumber);
  const [pan, setPan] = useState(data.pan);
  const [billingaddress, setBillingAddress] = useState(data.billingaddress);
  const [billingcountry, setBillingCountry] = useState(data.billingcountry);
  const [billingcity, setBillingCity] = useState(data.billingcity);
  const [billingstate, setBillingState] = useState(data.billingcity);
  const [billingpincode, setBillingPincode] = useState(data.billingpincode);
  const [shippingaddress, setShippingAddress] = useState(data.shippingaddress);
  const [shippingcountry, setShippingCountry] = useState(data.shippingcountry);
  const [shippingcity, setShippingCity] = useState(data.shippingcity);
  const [shippingstate, setShippingState] = useState(data.shippingcity);
  const [shippingpincode, setShippingPincode] = useState(data.shippingpincode);

  const handleSave = async () => {
    const editedData = {
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
    const response = await axios.put(
      `${API}editcustomer/${customersId}`,
      editedData
    );
    await navigate(`/customers/${customersId}`);
  };
  return (
    <section className="ml-14 mt-16  md:ml-56 h-full overflow-y-auto">
      <div className="flex justify-between mr-5 md:mr-10 lg:mr-20">
        <h1 className="font-semibold text-xl">{displayname} </h1>
        <Link to={"/customers"}>
          <HiMiniXMark className="mr-1 size-7 text-red-500" />
        </Link>
      </div>
      {/* First set of data */}
      <div className="flex justify-start ">
        <div className="mt-5 w-[220px] md:w-[320px]">
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">First Name</h1>
            <input
              type="text"
              className="border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem] text-xs md:text-base"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstname}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">Last Name</h1>
            <input
              type="text"
              className="border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem] text-xs md:text-base"
              onChange={(e) => setLastName(e.target.value)}
              value={lastname}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">Display Name</h1>
            <input
              type="text"
              className="border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem] text-xs md:text-base"
              onChange={(e) => setDisplayName(e.target.value)}
              value={displayname}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">company Name</h1>
            <input
              type="text"
              className="border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem] text-xs md:text-base"
              onChange={(e) => setCompanyName(e.target.value)}
              value={companyname}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">Email</h1>
            <input
              type="text"
              className="border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem] text-xs md:text-base"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">Phone Number</h1>
            <input
              type="text"
              className="border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem] text-xs md:text-base"
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phonenumber}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">PAN</h1>
            <input
              type="text"
              className="border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem] text-xs md:text-base"
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
              className="border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem] text-xs md:text-base"
              onChange={(e) => setBillingAddress(e.target.value)}
              value={billingaddress}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">City</h1>
            <input
              type="text"
              className="border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem] text-xs md:text-base"
              onChange={(e) => setBillingCity(e.target.value)}
              value={billingcity}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">Country </h1>
            <input
              type="text"
              className="border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem] text-xs md:text-base"
              onChange={(e) => setBillingCountry(e.target.value)}
              value={billingcountry}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">State </h1>
            <input
              type="text"
              className="border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem] text-xs md:text-base"
              onChange={(e) => setBillingState(e.target.value)}
              value={billingstate}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">Pincode </h1>
            <input
              type="text"
              className="border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem] text-xs md:text-base"
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
              className="border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem] text-xs md:text-base"
              onChange={(e) => setShippingAddress(e.target.value)}
              value={shippingaddress}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">City</h1>
            <input
              type="text"
              className="border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem] text-xs md:text-base"
              onChange={(e) => setShippingCity(e.target.value)}
              value={shippingcity}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">Country </h1>
            <input
              type="text"
              className="border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem] text-xs md:text-base"
              onChange={(e) => setShippingCountry(e.target.value)}
              value={shippingcountry}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">State </h1>
            <input
              type="text"
              className="border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem] text-xs md:text-base"
              onChange={(e) => setShippingState(e.target.value)}
              value={shippingstate}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">Pincode </h1>
            <input
              type="text"
              className="border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem] text-xs md:text-base"
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
