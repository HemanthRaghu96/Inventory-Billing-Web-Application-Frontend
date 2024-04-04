import React, { useEffect, useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API } from "../../../api/api";

export default function ViewSingleItem() {
  const [data, setData] = useState([]);
  const { itemId } = useParams();
  useEffect(() => {
    fetchSelecteData();
  }, []);
  const fetchSelecteData = async () => {
    const response = await axios.get(`${API}getselecteditems/${itemId}`);
    setData(response.data.selectedItems[0]);
  };
  const handleDelete = async () => {
    await axios.delete(`${API}deleteitems/${itemId}`);
  };
  return (
    <section className="ml-14 mt-16  md:ml-56 h-screen">
      <div className="flex justify-between mr-5 md:mr-10 lg:mr-20">
        <h1 className="font-semibold text-xl">Item Details</h1>
        <div className="flex">
          <Link to={`/items/edititem/${itemId}`}>
            <button className="px-2 flex items-center bg-buttonColor text-white rounded-md mx-2">
              <MdOutlineEdit className="mr-1" />
              Edit
            </button>
          </Link>
          <Link to={"/items"}>
            <button
              className="px-2 flex items-center bg-buttonColor text-white rounded-md mx-2"
              onClick={() => handleDelete()}
            >
              <MdDeleteOutline className="mr-1" />
              Delete
            </button>
          </Link>
          <Link to={"/items"}>
            <HiMiniXMark className="mr-1 md:ml-20 size-7 text-red-500" />
          </Link>
        </div>
      </div>
      <div className="flex mt-3">
        <div className="py-1 my-1 w-40">
          <h1 className="my-1 text-xs md:text-lg">Item Name</h1>
          <h1 className="my-1 text-xs md:text-lg">SKU</h1>
          <h1 className="my-1 text-xs md:text-lg">Unit</h1>
          <h1 className="my-1 text-xs md:text-lg">UPC</h1>
          <h1 className="my-1 text-xs md:text-lg">EAN</h1>
          <h1 className="my-1 text-xs md:text-lg">ISBN</h1>
        </div>
        <div className="py-1 my-1  w-72">
          <h1 className="my-1 text-xs md:text-lg">{data.name}</h1>
          <h1 className="my-1 text-xs md:text-lg">
            {data.sku == null ? "null" : data.sku}
          </h1>
          <h1 className="my-1 text-xs md:text-lg">
            {data.unit == null ? "null" : data.unit}
          </h1>
          <h1 className="my-1 text-xs md:text-lg">
            {data.upc == null ? "null" : data.upc}
          </h1>
          <h1 className="my-1 text-xs md:text-lg">
            {data.ean == null ? "null" : data.ean}
          </h1>
          <h1 className="my-1 text-xs md:text-lg">
            {data.isbn == null ? "null" : data.isbn}
          </h1>
        </div>
      </div>
      <div className="mt-5">
        <h1 className="font-semibold text-lg">Sales Information</h1>
        <div className="flex">
          <div className="py-1 my-1 w-40">
            <h1 className="my-1 text-xs md:text-lg">Selling Price</h1>
            <h1 className="my-1 text-xs md:text-lg">Sales Account</h1>
            <h1 className="my-1 text-xs md:text-lg">Description</h1>
          </div>
          <div className="py-1 my-1 ">
            <h1 className="my-1 text-xs md:text-lg">{data.sellingprice}</h1>
            <h1 className="my-1 text-xs md:text-lg">{data.salesaccount}</h1>
            <h1 className="my-1 text-xs md:text-lg">{data.salesdescription}</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
{
  /* <h1 className="font-semibold text-xl">Item Name</h1> */
}
