import React, { useEffect, useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API } from "../../../api/api";
import { useSidebar } from "../../../components/SidebarContext";
import Footer from "../../global/Footer";

export default function ViewSinglepurchaseorders() {
  const { open, setOpen } = useSidebar();
  const [data, setData] = useState([]);
  const { purchaseordersId } = useParams();
  const column = ["NAME", "QUANTITY", "PRICE"];
  useEffect(() => {
    fetchSelecteData();
  }, []);
  const fetchSelecteData = async () => {
    const response = await axios.get(
      `${API}getselectedpurchaseorder/${purchaseordersId}`
    );
    // console.log(response.data.selectedPurchaseorders[0]);
    setData(response.data.selectedPurchaseorders[0]);
  };
  const handleDelete = async () => {
    await axios.delete(`${API}deletepurchaseorder/${purchaseordersId}`);
  };
  return (
    <section className={open?"ml-16 mt-16  h-full":"ml-14 mt-16 md:ml-56 h-full"}>
      <div className="flex justify-between mr-5 md:mr-10 lg:mr-20">
        <h1 className="font-semibold text-sm md:text-lg">Purchase Order Details</h1>
        <div className="flex">
          <Link to={`/purchaseorders/purchaseordersitem/${purchaseordersId}`}>
            <button className="px-2 flex items-center bg-buttonColor text-white rounded-md mx-2">
              <MdOutlineEdit className="mr-1" />
              Edit
            </button>
          </Link>
          <Link to={"/purchaseorders"}>
            <button
              className="px-2 flex items-center bg-buttonColor text-white rounded-md mx-2"
              onClick={() => handleDelete()}
            >
              <MdDeleteOutline className="mr-1" />
              Delete
            </button>
          </Link>
          <Link to={"/purchaseorders"}>
            <HiMiniXMark className="mr-1 md:ml-20 size-7 text-red-500" />
          </Link>
        </div>
      </div>
      <div className="flex ">
        <div className="py-1 my-1 w-[200px]">
          <h1 className="my-1 text-xs md:text-lg">Vendor Name</h1>
          <h1 className="my-1 text-xs md:text-lg">Purchase Order Number</h1>
          <h1 className="my-1 text-xs md:text-lg">Purchase Order Date</h1>
          <h1 className="my-1 text-xs md:text-lg">Shipment Date</h1>
        </div>
        <div className="py-1 my-1  w-40">
          <h1 className="my-1 text-xs md:text-lg">
            {data.vendorname == null ? "null" : data.vendorname}
          </h1>
          <h1 className="my-1 text-xs md:text-lg">{data.purchaseorder}</h1>
          <h1 className="my-1 text-xs md:text-lg">
            {data.date == null ? "null" : data.date}
          </h1>
          <h1 className="my-1 text-xs md:text-lg">
            {data.shipmentdate == null ? "null" : data.shipmentdate}
          </h1>
        </div>
      </div>
      <div className="overflow-x-auto  w-[260px] md:w-[500px]">
      <h1 className="font-semibold text-xs md:text-xl mt-4 mb-2">Items Table</h1>
        <table className="table-auto min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {column.map((data, i) => (
                <th
                  key={i}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase "
                >
                  {data}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.items ? (
              data.items.map((record, i) => (
                <tr key={i}>
                  <td className="text-xs md:text-base whitespace-nowrap flex items-center">
                    
                    {record.name}
                  </td>
                 <td className="text-xs md:text-base whitespace-nowrap">{record.quantity}</td>
                 <td className="text-xs md:text-base whitespace-nowrap">{record.price}</td>
                  
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No items available</td>
              </tr>
            )}
              
          </tbody>
        </table>
        <div className="flex items-center">
          <h1 className="font-semibold text-xs md:text-xl mt-4 mb-2">Total Amount</h1>
          <h1 className="ml-10 text-xs md:text-xl">{data.totalamount}</h1>
        </div>
      </div>
      <Footer />
    </section>
  );
}
