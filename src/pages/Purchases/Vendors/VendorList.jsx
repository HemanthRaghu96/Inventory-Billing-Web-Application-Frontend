import React, { useEffect, useState } from "react";
import { API } from "../../../api/api";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { useSidebar } from "../../../components/SidebarContext";

export default function VendorList() {
  const { open, setOpen } = useSidebar();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const column = ["NAME", "COMPANYNAME", "EMAIL", "PHONENUMBER", "ADDRESS"];
  useEffect(() => {
    fetchItemData();
  }, [data]);

  const fetchItemData = async () => {
    try {
      const response = await axios.get(`${API}getallvendor`);
      // console.log(response.data.allVendor)
      setData(response.data.allVendor);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const selectPageHandler = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= Math.ceil(data.length / 10)) {
      setPage(selectedPage);
    }
  };

  return (
    <section className={open?"ml-16 mt-16  h-full":"ml-14 mt-16 md:ml-56 h-full"}>
      <div className="flex justify-between mr-5 md:mr-10 ld:mr-32">
        <h1 className="font-semibold text-xl mx-4">All Vendors</h1>
        <Link to={"/vendors/addvendors"}>
          <button className="flex justify-center items-center text-white bg-buttonColor px-2 rounded-md">
            <FaPlus className="mr-1" />
            New
          </button>
        </Link>
      </div>
      <div className="overflow-x-auto mt-6">
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
            {data.slice((page - 1) * 10, page * 10).map((record, i) => (
             
              <tr key={i}>
              <Link to={`/vendors/${record._id}`}>
                <td className="px-6 py-4 whitespace-nowrap flex items-center text-blue-400">
                  {record.displayname}
                </td>
                </Link>
                <td className="px-6 py-4 whitespace-nowrap">
                  {record.companyname}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{record.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {record.phonenumber}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {record.billingaddress},{record.billingcity},
                  {record.billingcountry},{record.billingpincode}
                </td>
               
              </tr>
            
            ))}
          </tbody>
        </table>
      </div>
      {data.length > 0 && (
        <div className="p-10 my-15 flex justify-center">
          <button
            onClick={() => selectPageHandler(page - 1)}
            className={
              page > 1 ? "py-2 px-3 border" : "opacity-0 py-2 px-3 border"
            }
          >
            Prev
          </button>
          {[...Array(Math.ceil(data.length / 10))].map((_, i) => (
            <button
              key={i + 1}
              className={
                page === i + 1
                  ? "bg-gray-400 border py-2 px-3 "
                  : "py-2 px-3 border"
              }
              onClick={() => selectPageHandler(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => selectPageHandler(page + 1)}
            className={
              page < Math.ceil(data.length / 10)
                ? "py-2 px-3 border"
                : "opacity-0  py-2 px-3 border"
            }
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
}
