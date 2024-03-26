import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { API } from "../../../api/api";
import ItemsCard from "../../../components/ItemsCard";

export default function ItemList() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchItemData();
  }, []);

  const fetchItemData = async () => {
    try {
      const response = await axios.get(`${API}getallitems`);
      setData(response.data.allItems);
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
    <section className="ml-14 mt-16 md:ml-56 h-screen">
      <div className="flex justify-between mr-5 md:mr-10 ld:mr-32">
        <h1 className="font-semibold text-xl">All Items</h1>
        <Link to={"/items/additems"}>
          <button className="flex justify-center items-center text-white bg-buttonColor px-2 rounded-md">
            <FaPlus className="mr-1" />
            New
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
        {data.slice((page - 1) * 10, page * 10).map((item) => (
          <ItemsCard key={item._id} data={item} />
        ))}
      </div>
      {data.length > 0 && (
        <div className="p-10 my-15 flex justify-center">
          <button
            onClick={() => selectPageHandler(page - 1)}
            className={page > 1 ? "py-2 px-3 border" : "opacity-0 py-2 px-3 border"}
          >
            ◀
          </button>
          {[...Array(Math.ceil(data.length / 10))].map((_, i) => (
            <button
              key={i + 1}
              className={page === i + 1 ? "bg-gray-400 border py-2 px-3 " : "py-2 px-3 border" }
              onClick={() => selectPageHandler(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => selectPageHandler(page + 1)}
            className={page < Math.ceil(data.length / 10) ? "py-2 px-3 border" : "opacity-0  py-2 px-3 border"}
          >
            ▶
          </button>
        </div>
      )}
    </section>
  );
}
