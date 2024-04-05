import React, { useEffect, useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API } from "../../../api/api";
import { useSidebar } from "../../../components/SidebarContext";

export default function ViewSingleCustomers() {
  const { open, setOpen } = useSidebar();
  const navigate=useNavigate()
  const [data, setData] = useState([]);
  const { customersId } = useParams();  
  useEffect(() => {
    fetchSelecteData();
  }, []);
  const fetchSelecteData = async () => {
    const response = await axios.get(`${API}getselectedcustomer/${customersId}`);
    // console.log(response.data.selectedCustomer[0])
    setData(response.data.selectedCustomer[0]);
  };
  const handleDelete = async () => {
    await axios.delete(`${API}deletecustomer/${customersId}`);
    await navigate('/customers')
  };
  return (
    <section className={open?"ml-16 mt-16  h-full":"ml-14 mt-16 md:ml-56 h-full"}>
      <div className="flex justify-between mr-5 md:mr-10 lg:mr-20">
        <h1 className="font-semibold lg:text-xl">Customer Details</h1>
        <div className="flex">
          <Link to={`/customers/customersitem/${customersId}`}>
            <button className="px-2 flex items-center bg-buttonColor text-white rounded-md mx-2">
              <MdOutlineEdit className="mr-1" />
              Edit
            </button>
          </Link>
          <Link to={"/customers"}>
            <button
              className="px-2 flex items-center bg-buttonColor text-white rounded-md mx-2"
              onClick={() => handleDelete()}
            >
              <MdDeleteOutline className="mr-1" />
              Delete
            </button>
          </Link>
          <Link to={"/customers"}>
            <HiMiniXMark className="mr-1 lg:ml-20 size-7 text-red-500" />
          </Link>
        </div>
      </div>
      <div className="flex">
        <div className="py-1 my-1 w-28">
          <h1 className="my-1 text-xs md:text-lg">Name</h1>
          <h1 className="my-1 text-xs md:text-lg">Company Name</h1>
          <h1 className="my-1 text-xs md:text-lg">Email</h1>
          <h1 className="my-1 text-xs md:text-lg">Phone Number</h1>
          <h1 className="my-1 text-xs md:text-lg">Pan</h1>
        </div>
        <div className="py-1 my-1  w-28">
          <h1 className="my-1 text-xs md:text-lg">{data.displayname}</h1>
          <h1 className="my-1 text-xs md:text-lg">
            {data.companyname == null ? "null" : data.companyname}
          </h1>
          <h1 className="my-1 text-xs md:text-lg">
            {data.email == null ? "null" : data.email}
          </h1>
          <h1 className="my-1 text-xs md:text-lg">
            {data.phonenumber == null ? "null" : data.phonenumber}
          </h1>
          <h1 className="my-1 text-xs md:text-lg">
            {data.pan == null ? "null" : data.pan}
          </h1>
        </div>
      </div>
     <div className="flex flex-col lg:flex-row">
     <div className="mt-5">
        <h1 className="font-semibold text-lg">Billing Address</h1>
        <div className="flex">
          <div className="py-1 my-1 w-28">
            <h1 className="my-1 text-xs md:text-lg">Address</h1>
            <h1 className="my-1 text-xs md:text-lg"> City</h1>
            <h1 className="my-1 text-xs md:text-lg"> Country</h1>
            <h1 className="my-1 text-xs md:text-lg"> Pincode</h1>
          </div>
          <div className="py-1 my-1 ">
            <h1 className="my-1 text-xs md:text-lg">{data.billingaddress}</h1>
            <h1 className="my-1 text-xs md:text-lg">{data.billingcity}</h1>
            <h1 className="my-1 text-xs md:text-lg">{data.billingcountry}</h1>
            <h1 className="my-1 text-xs md:text-lg">{data.billingpincode}</h1>
          </div>
        </div>
      </div>
      <div className="mt-5 lg:mx-20">
        <h1 className="font-semibold text-lg">Shipping Address</h1>
        <div className="flex">
          <div className="py-1 my-1 w-28">
            <h1 className="my-1 text-xs md:text-lg">Address</h1>
            <h1 className="my-1 text-xs md:text-lg"> City</h1>
            <h1 className="my-1 text-xs md:text-lg"> Country</h1>
            <h1 className="my-1 text-xs md:text-lg"> Pincode</h1>
          </div>
          <div className="py-1 my-1 ">
            <h1 className="my-1 text-xs md:text-lg">{data.shippingaddress}</h1>
            <h1 className="my-1 text-xs md:text-lg">{data.shippingcity}</h1>
            <h1 className="my-1 text-xs md:text-lg">{data.shippingcountry}</h1>
            <h1 className="my-1 text-xs md:text-lg">{data.shippingpincode}</h1>
          </div>
        </div>
      </div>
     </div>
    </section>
  );
}
{
  /* <h1 className="font-semibold text-xl">Item Name</h1> */
}
