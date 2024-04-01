import React, { useEffect, useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API } from "../../../api/api";

export default function ViewSingleInvoices() {
  const [data, setData] = useState([]);
  const { invoicesId } = useParams();
  const column = ["NAME", "QUANTITY", "PRICE"];
  useEffect(() => {
    fetchSelecteData();
  }, []);
  const fetchSelecteData = async () => {
    const response = await axios.get(
      `${API}getselectedinvoice/${invoicesId}`
    );
    console.log(response.data.selectedInvoices[0]);
    setData(response.data.selectedInvoices[0]);
  };
  const handleDelete = async () => {
    await axios.delete(`${API}deleteinvoice/${invoicesId}`);
  };
  return (
    <section className="ml-14 mt-16  md:ml-56 h-screen">
      <div className="flex justify-between mr-5 md:mr-10 lg:mr-20">
        <h1 className="font-semibold text-xl">Invoice Details</h1>
        <div className="flex">
          <Link to={`/invoices/invoicesitem/${invoicesId}`}>
            <button className="px-2 flex items-center bg-buttonColor text-white rounded-md mx-2">
              <MdOutlineEdit className="mr-1" />
              Edit
            </button>
          </Link>
          <Link to={"/invoices"}>
            <button
              className="px-2 flex items-center bg-buttonColor text-white rounded-md mx-2"
              onClick={() => handleDelete()}
            >
              <MdDeleteOutline className="mr-1" />
              Delete
            </button>
          </Link>
          <Link to={"/invoices"}>
            <HiMiniXMark className="mr-1 ml-20 size-7 text-red-500" />
          </Link>
        </div>
      </div>
      <div className="flex ">
        <div className="py-1 my-1 w-[200px]">
          <h1 className="my-1 text-lg">Customer Name</h1>
          <h1 className="my-1 text-lg">Invoice</h1>
          <h1 className="my-1 text-lg">Sales Order Number</h1>
          <h1 className="my-1 text-lg">Invoice Date</h1>
          <h1 className="my-1 text-lg">Due Date</h1>
          <h1 className="my-1 text-lg">Payment Status</h1>
        </div>
        <div className="py-1 my-1  w-40">
          <h1 className="my-1 text-lg">
            {data.customername == null ? "null" : data.customername}
          </h1>
          <h1 className="my-1 text-lg">{data.invoice}</h1>
          <h1 className="my-1 text-lg">{data.ordernumber}</h1>
          <h1 className="my-1 text-lg">
            {data.invoicedate == null ? "null" : data.invoicedate}
          </h1>
          <h1 className="my-1 text-lg">
            {data.duedate == null ? "null" : data.duedate}
          </h1>
          <h1 className="my-1 text-lg">
            {data.payment == null ? "null" : data.payment}
          </h1>
        </div>
      </div>
      <div className="overflow-x-auto w-[600px]">
      <h1 className="font-semibold text-xl mt-4 mb-2">Items Table</h1>
        <table className="table-auto min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {column.map((data, i) => (
                <th
                  key={i}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
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
                  <td className="px-6 py-4 whitespace-nowrap flex items-center">
                    
                    {record.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{record.quantity}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{record.price}</td>
                  
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
          <h1 className="font-semibold text-xl mt-4 mb-2">Total Amount</h1>
          <h1 className="ml-10">{data.totalamount}</h1>
        </div>
      </div>
    </section>
  );
}
