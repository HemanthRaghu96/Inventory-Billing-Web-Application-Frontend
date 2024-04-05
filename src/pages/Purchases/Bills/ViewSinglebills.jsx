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

export default function ViewSinglebills() {
  const { open, setOpen } = useSidebar();
  const [data, setData] = useState([]);
  const [total, setTotal] = useState("");
  const [itemData, setItemData] = useState([]);
  const { billsId } = useParams();
  const column = ["NAME", "QUANTITY", "PRICE"];
  useEffect(() => {
    fetchSelecteData();
    fetchItemData();
  }, []);
  const fetchSelecteData = async () => {
    const response = await axios.get(
      `${API}getselectedbill/${billsId}`
    );
    // console.log(response.data.selectedBills[0]);
    setData(response.data.selectedBills[0]);
  };
  const fetchItemData = async () => {
    try {
      const response = await axios.get(`${API}getAllPurchaseorder`);
      const allPurchaseorders = response.data.allPurchaseorders;
      const filteredOrder = allPurchaseorders.find(
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
    await axios.delete(`${API}deletebill/${billsId}`);
  };
  return (
    <section className={open?"ml-16 mt-16  h-full":"ml-14 mt-16 md:ml-56 h-full"}>
      <div className="flex justify-between mr-5 md:mr-10 lg:mr-20">
        <h1 className="font-semiboldtext-sm md:text-lg">Bill Details</h1>
        <div className="flex">
          <Link to={`/bills/billsitem/${billsId}`}>
            <button className="px-2 flex items-center bg-buttonColor text-white rounded-md mx-2">
              <MdOutlineEdit className="mr-1" />
              Edit
            </button>
          </Link>
          <Link to={"/bills"}>
            <button
              className="px-2 flex items-center bg-buttonColor text-white rounded-md mx-2"
              onClick={() => handleDelete()}
            >
              <MdDeleteOutline className="mr-1" />
              Delete
            </button>
          </Link>
          <Link to={"/bills"}>
            <HiMiniXMark className="mr-1 md:ml-20 size-7 text-red-500" />
          </Link>
        </div>
      </div>
      <div className="flex ">
        <div className="py-1 my-1 w-[200px]">
          <h1 className="my-1 text-xs md:text-lg">Bill</h1>
          <h1 className="my-1 text-xs md:text-lg"> Order Number</h1>
          <h1 className="my-1 text-xs md:text-lg">Bill Date</h1>
          <h1 className="my-1 text-xs md:text-lg">Due Date</h1>
          <h1 className="my-1 text-xs md:text-lg">Payment Status</h1>
        </div>
        <div className="py-1 my-1  w-40">
         
          <h1 className="my-1 text-xs md:text-lg">{data.bill}</h1>
          <h1 className="my-1 text-xs md:text-lg">{data.ordernumber}</h1>
          <h1 className="my-1 text-xs md:text-lg">
            {data.billdate == null ? "null" : data.billdate}
          </h1>
          <h1 className="my-1 text-xs md:text-lg">
            {data.duedate == null ? "null" : data.duedate}
          </h1>
          <h1 className="my-1 text-xs md:text-lg">
            {data.payment == null ? "null" : data.payment}
          </h1>
        </div>
      </div>
      <div className="overflow-x-auto w-[260px] md:w-[500px]">
      <h1 className="font-semiboldtext-xs md:text-xl mt-4 mb-2">Items Table</h1>
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
          {itemData.length > 0 ? (
              itemData.map((record, i) => (
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
          <h1 className="ml-10 text-xs md:text-xl">{total}</h1>
        </div>
      </div>
      <Footer />
    </section>
  );
}
