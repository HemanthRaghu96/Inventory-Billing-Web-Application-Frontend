import React from "react";
import { Link } from "react-router-dom";

export default function ItemsCard({ data }) {
  return (
    <section>
    <Link to={`/items/${data._id}`}>
      <div className="flex flex-col justify-center items-center border size-[250px] my-4 shadow-md cursor-pointer">
        {/* <img src={data.poster} alt={data.name} className="size-20 rounded-md object-contain" /> */}
        <h1 className="font-semibold mt-3 px-1">{data.name}</h1>
        <p className="mx-1 px-1"><span className="font-medium">SKU : </span> {data.sku}</p>
        <p className="mt-1 px-1"><span className="font-medium">Selling price : </span>Rs.{data.sellingprice}</p>
        <p className="mx-1 px-1"><span className="font-medium">Quantity : </span>{data.unit}</p>
      </div>
      </Link>
    </section>
  );
}
