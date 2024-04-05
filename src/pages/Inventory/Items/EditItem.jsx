import React, { useEffect, useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { Link, useNavigate, useParams } from "react-router-dom";
import { API } from "../../../api/api";
import axios from "axios";
import { useSidebar } from "../../../components/SidebarContext";

export default function EditItem() {
 
  const { itemId } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchSelecteData();
  }, []);
  const fetchSelecteData = async () => {
    const response = await axios.get(`${API}getselecteditems/${itemId}`);
    setData(response.data.selectedItems[0]);
  };
  return data ? <EditItems data={data} itemId={itemId} /> : "Loading...";
}

function EditItems({ data, itemId }) {
  const navigate = useNavigate();
  const { open, setOpen } = useSidebar();
  const [name, setName] = useState(data.name || "");
  const [sku, setSku] = useState(data.sku || "");
  const [unit, setUnit] = useState(data.unit || "");
  const [dimensions, setDimensions] = useState(data.dimensions || "");
  const [manufacturer, setManufacturer] = useState(data.manufacturer || "");
  const [upc, setUpc] = useState(data.upc || "");
  const [ean, setEan] = useState(data.ean || "");
  const [weight, setWeight] = useState(data.weight || "");
  const [brand, setBrand] = useState(data.brand || "");
  const [mpn, setMpn] = useState(data.mpn || "");
  const [isbn, setIsbn] = useState(data.isbn || "");
  const [sellingprice, setSellingPrice] = useState(data.sellingprice || "");
  const [salesaccount, setSalesAccount] = useState(data.salesaccount || "");
  const [salesdescription, setSalesDescription] = useState(
    data.salesdescription || ""
  );
  const [costprice, setCostPrice] = useState(data.costprice || "");
  const [purchaseaccount, setPurchaseAccount] = useState(
    data.purchaseaccount || ""
  );
  const [purchasedescription, setPurchaseDescription] = useState(
    data.purchasedescription || ""
  );

  const handleSave = async () => {
    const editedData = {
      name,
      sku,
      unit,
      dimensions,
      manufacturer,
      upc,
      ean,
      weight,
      brand,
      mpn,
      isbn,
      sellingprice,
      salesaccount,
      salesdescription,
      costprice,
      purchaseaccount,
      purchasedescription,
    };
    const response = await axios.put(`${API}edititems/${itemId}`, editedData);
    await navigate(`/items/${itemId}`);
  };
  return (
   
    <section className={open?"ml-16 mt-16  h-full overflow-y-auto":"ml-14 mt-16 md:ml-56 h-full overflow-y-auto"}>
      <div className="flex justify-between mr-5 md:mr-10 lg:mr-20">
        <h1 className="font-semibold text-xl">{name} </h1>
        <Link to={"/items"}>
          <HiMiniXMark className="mr-1 size-7 text-red-500" />
        </Link>
      </div>
      {/* First set of data */}
      <div className="flex flex-col lg:flex-row justify-start ">
        <div className="mt-5 w-[220px] md:w-[320px]">
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">Name*</h1>
            <input
              type="text"
              className="text-xs md:text-base border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">SKU*</h1>
            <input
              type="text"
              className="text-xs md:text-base border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
              onChange={(e) => setSku(e.target.value)}
              value={sku}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">Unit*</h1>
            <input
              type="text"
              className="text-xs md:text-base border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
              onChange={(e) => setUnit(e.target.value)}
              value={unit}
            />
          </div>
        </div>
        {/* <div className="size-36 bg-slate-100 m-2 mx-20">
          <h1 className="flex justify-center items-center size-36">
            Browser Image
          </h1>
        </div> */}
      </div>
      {/* Second set of data */}
      <div className="flex flex-col lg:flex-row justify-start ">
        <div className=" lg:mt-5 w-[220px] md:w-[320px]">
          <div className="flex justify-between lg:my-4">
            <h1 className="text-xs md:text-base">Dimensions</h1>
            <input
              type="text"
              className="text-xs md:text-base border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
              onChange={(e) => setDimensions(e.target.value)}
              value={dimensions}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">Manufacturer</h1>
            <input
              type="text"
              className="text-xs md:text-base border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
              onChange={(e) => setManufacturer(e.target.value)}
              value={manufacturer}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">UPC </h1>
            <input
              type="text"
              className="text-xs md:text-base border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
              onChange={(e) => setUpc(e.target.value)}
              value={upc}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">EAN </h1>
            <input
              type="text"
              className="text-xs md:text-base border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
              onChange={(e) => setEan(e.target.value)}
              value={ean}
            />
          </div>
        </div>
        <div className="lg:mt-5 w-[220px] md:w-[320px] lg:ml-20">
          <div className="flex justify-between lg:my-4">
            <h1 className="text-xs md:text-base">Weight</h1>
            <input
              type="text"
              className="text-xs md:text-base border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
              onChange={(e) => setWeight(e.target.value)}
              value={weight}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">Brand</h1>
            <input
              type="text"
              className="text-xs md:text-base border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
              onChange={(e) => setBrand(e.target.value)}
              value={brand}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">MPN </h1>
            <input
              type="text"
              className="text-xs md:text-base border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
              onChange={(e) => setMpn(e.target.value)}
              value={mpn}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">ISBN </h1>
            <input
              type="text"
              className="text-xs md:text-base border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
              onChange={(e) => setIsbn(e.target.value)}
              value={isbn}
            />
          </div>
        </div>
      </div>
      {/*Sales & Purchase Information */}
      <h1 className="font-semibold text-xl mt-2">
        Sales & Purchase Information{" "}
      </h1>
      <div className="flex flex-col lg:flex-row justify-start ">
        <div className=" mt-1 w-[220px] md:w-[320px]">
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">Selling Price*</h1>
            <input
              type="text"
              className="text-xs md:text-base border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
              onChange={(e) => setSellingPrice(e.target.value)}
              value={name}
              sellingprice
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">Account*</h1>
            <input
              type="text"
              className="text-xs md:text-base border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
              onChange={(e) => setSalesAccount(e.target.value)}
              value={salesaccount}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">Description </h1>
            <input
              type="text"
              className="text-xs md:text-base border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
              onChange={(e) => setSalesDescription(e.target.value)}
              value={salesdescription}
            />
          </div>
        </div>
        <div className=" w-[220px] md:w-[320px] lg:ml-20">
          <div className="flex justify-between lg:my-4">
            <h1 className="text-xs md:text-base">Cost Price*</h1>
            <input
              type="text"
              className="text-xs md:text-base border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
              onChange={(e) => setCostPrice(e.target.value)}
              value={costprice}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">Account*</h1>
            <input
              type="text"
              className="text-xs md:text-base border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
              onChange={(e) => setPurchaseAccount(e.target.value)}
              value={purchaseaccount}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">Description </h1>
            <input
              type="text"
              className="text-xs md:text-base border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
              onChange={(e) => setPurchaseDescription(e.target.value)}
              value={purchasedescription}
            />
          </div>
          {/* <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">Preferred Vendor </h1>
            <input type="text"className="text-xs md:text-base border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]" />
          </div> */}
        </div>
      </div>
      {/* Track Inventory for this item
      <h1 className="font-semibold text-xl">Track Inventory for this item</h1>
     <div className="flex flex-col lg:flex-row justify-start ">
        <div className=" mt-1 w-[220px] md:w-[320px]">
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">Inventory Account*</h1>
            <input type="text"className="text-xs md:text-base border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]" />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">Opening Stock</h1>
            <input type="text"className="text-xs md:text-base border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]" />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">Reorder Point </h1>
            <input type="text"className="text-xs md:text-base border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]" />
          </div>
        </div>
        <div className="mt-5 w-[220px] md:w-[320px] ml-20">
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">Opening Stock Rate per Unit</h1>
            <input type="text" className="border-2 rounded-md px-2 h-10 " />
          </div>
        </div>
      </div> */}
      <div className="flex my-4">
        <button
          className="border rounded-lg bg-buttonColor text-white px-2 py-1 mr-3"
          onClick={() => handleSave()}
        >
          Save
        </button>
        <button
          className="border rounded-lg px-2 py-1"
          onClick={() => navigate("/items/itemname")}
        >
          Cancel
        </button>
      </div>
    </section>
  );
}
