import React, { useEffect, useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API } from "../../../api/api";
import { useSidebar } from "../../../components/SidebarContext";

export default function ViewSingleInvoices() {
  const { open, setOpen } = useSidebar();
  const [data, setData] = useState([]);
  const [total, setTotal] = useState("");
  const [itemData, setItemData] = useState([]);
  const { invoicesId } = useParams();
  const column = ["NAME", "QUANTITY", "PRICE"];
  // console.log(itemData)
  useEffect(() => {
    fetchSelecteData();
    fetchItemData();
  }, [itemData]);
  const fetchSelecteData = async () => {
    const response = await axios.get(`${API}getselectedinvoice/${invoicesId}`);
    setData(response.data.selectedInvoices[0]);
  };
  const fetchItemData = async () => {
    try {
      const response = await axios.get(`${API}getallsalesorder`);
      const allSalesorders = response.data.allSalesorders;
      const filteredOrder = allSalesorders.find(
        (record) => record.salesorder === data.ordernumber
      );
      if (filteredOrder) {
        setItemData(filteredOrder.items);
        setTotal(filteredOrder.totalamount)
      } else {
        setItemData([]); // No items found for the order
      }
    } catch (error) {
      console.error("Error fetching item data:", error);
    }
  };

  const handleDelete = async () => {
    await axios.delete(`${API}deleteinvoice/${invoicesId}`);
  };
  return (
    <section className={open?"ml-16 mt-16  h-full":"ml-14 mt-16 md:ml-56 h-full"}>
      <div className="flex justify-between mr-5 md:mr-10 lg:mr-20">
        <h1 className="font-semibold md:text-xl">Invoice Details</h1>
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
            <HiMiniXMark className="mr-1 md:ml-20 size-7 text-red-500" />
          </Link>
        </div>
      </div>
      <div className="flex ">
        <div className="py-1 my-1 w-[200px]">
          <h1 className="my-1 text-xs md:text-lg">Invoice</h1>
          <h1 className="my-1 text-xs md:text-lg">Sales Order Number</h1>
          <h1 className="my-1 text-xs md:text-lg">Invoice Date</h1>
          <h1 className="my-1 text-xs md:text-lg">Due Date</h1>
          <h1 className="my-1 text-xs md:text-lg">Payment Status</h1>
        </div>
        <div className="py-1 my-1  w-40">
          <h1 className="my-1 text-xs md:text-lg">
            {data.customername == null ? "null" : data.customername}
          </h1>
          <h1 className="my-1 text-xs md:text-lg">{data.invoice}</h1>
          <h1 className="my-1 text-xs md:text-lg">{data.ordernumber}</h1>
          <h1 className="my-1 text-xs md:text-lg">
            {data.invoicedate == null ? "null" : data.invoicedate}
          </h1>
          <h1 className="my-1 text-xs md:text-lg">
            {data.duedate == null ? "null" : data.duedate}
          </h1>
          <h1 className="my-1 text-xs md:text-lg">
            {data.payment == null ? "null" : data.payment}
          </h1>
        </div>
      </div>
      {/* Item Table */}
      <div className="overflow-x-auto w-[260px] md:w-[500px]">
        <h1 className="font-semibold text-xs md:text-xl mt-4 mb-2">
          Items Table
        </h1>
        <table className="table-auto min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {column.map((data, i) => (
                <th
                  key={i}
                  className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase "
                >
                  {data}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {itemData.length > 0 ? (
              itemData.map((record, i) => (
                <tr key={i}>
                  <td className="text-xs md:text-base whitespace-nowrap flex items-center">
                    {record.name}
                  </td>
                  <td className="text-xs md:text-base whitespace-nowrap">
                    {record.quantity}
                  </td>
                  <td className="text-xs md:text-base whitespace-nowrap">
                    {record.price}
                  </td>
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
          <h1 className="font-semibold text-xs md:text-xl mt-4 mb-2">
            Total Amount
          </h1>
          <h1 className="ml-10 text-xs md:text-xl">{total}</h1>
        </div>
      </div>
    </section>
  );
}
