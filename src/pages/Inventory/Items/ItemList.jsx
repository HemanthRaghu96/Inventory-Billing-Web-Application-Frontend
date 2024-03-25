import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { API } from "../../../api/api";
import ItemsCard from "../../../components/ItemsCard";

export default function ItemList() {
  const [data,setData]=useState([])
  useEffect(()=>{
    fetchItemData()
  },[])
  const fetchItemData=async()=>{
    const response=await axios.get(`${API}getallitems`)
    await setData(response.data.allItems)
  }
  console.log(data)
  return (
    <section className="ml-14 mt-16  md:ml-56 h-screen">
      <div className="flex justify-between mr-5 md:mr-10 ld:mr-32">
        <h1 className="font-semibold text-xl">All Items </h1>
        <Link to={"/items/additems"}>
          {" "}
          <button className="flex justify-center items-center text-white bg-buttonColor px-2 rounded-md">
            <FaPlus className="mr-1" />
            New
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto ">
      {data.map((data)=>{
       return (
        <ItemsCard key={data._id} data={data}/>
       )
      
      })}
      </div>
    </section>
  );
}
