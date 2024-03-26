import axios from "axios";
import React, { useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
import { API } from "../../../api/api";
export default function AddItem() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [sku, setSku] = useState("");
  const [unit, setUnit] = useState("");
  const [dimensions, setDimensions] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [upc, setUpc] = useState("");
  const [ean, setEan] = useState("");
  const [weight, setWeight] = useState('');
  const [brand, setBrand] = useState("");
  const [mpn, setMpn] = useState("");
  const [isbn, setIsbn] = useState("");
  const [sellingprice, setSellingPrice] = useState("");
  const [salesaccount, setSalesAccount] = useState("");
  const [salesdescription, setSalesDescription] = useState(
   ""
  );
  const [costprice, setCostPrice] = useState("");
  const [purchaseaccount, setPurchaseAccount] = useState("");
  const [purchasedescription, setPurchaseDescription] = useState(
    ""
  );
  const handleSave = async () => {
    const newData = {
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
    const response = await axios.post(`${API}additems`, newData);
    await navigate(`/items`);
  };
  return (
    <section className="ml-14 mt-16  md:ml-56 h-full overflow-y-auto">
      <div className="flex justify-between mr-5 md:mr-10 lg:mr-20">
        <h1 className="font-semibold text-xl">New Item </h1>
        <Link to={"/items"}>
          <HiMiniXMark className="mr-1 size-7" />
        </Link>
      </div>
      {/* First set of data */}
      <div className="flex justify-start ">
        <div className="mt-5 w-[320px]">
          <div className="flex justify-between my-4">
            <h1 className="">Name*</h1>
            <input type="text" className="border-2 rounded-md px-2 h-8"  onChange={(e) => setName(e.target.value)} />
            
          </div>
          <div className="flex justify-between my-4">
            <h1 className="">SKU*</h1>
            <input type="text" className="border-2 rounded-md px-2  h-8"  onChange={(e) => setSku(e.target.value)}/>
          </div>
          <div className="flex justify-between my-4">
            <h1 className="">Unit*</h1>
            <input type="text" className="border-2 rounded-md px-2  h-8"   onChange={(e) => setUnit(e.target.value)}/>
          </div>
        </div>
        <div className="size-36 bg-slate-100 m-2 mx-20">
          <h1 className="flex justify-center items-center size-36">
            Browser Image
          </h1>
        </div>
      </div>
      {/* Second set of data */}
      <div className="flex justify-start ">
        <div className=" mt-5 w-[320px]">
          <div className="flex justify-between my-4">
            <h1 className="">Dimensions</h1>
            <input type="text" className="border-2 rounded-md px-2  h-8"  onChange={(e) => setDimensions(e.target.value)}/>
          </div>
          <div className="flex justify-between my-4">
            <h1 className="">Manufacturer</h1>
            <input type="text" className="border-2 rounded-md px-2  h-8"  onChange={(e) => setManufacturer(e.target.value)}/>
          </div>
          <div className="flex justify-between my-4">
            <h1 className="">UPC </h1>
            <input type="text" className="border-2 rounded-md px-2  h-8"  onChange={(e) => setUpc(e.target.value)}/>
          </div>
          <div className="flex justify-between my-4">
            <h1 className="">EAN </h1>
            <input type="text" className="border-2 rounded-md px-2  h-8" onChange={(e) => setEan(e.target.value)}/>
          </div>
        </div>
        <div className="mt-5 w-[320px] ml-20">
          <div className="flex justify-between my-4">
            <h1 className="">Weight</h1>
            <input type="text" className="border-2 rounded-md px-2  h-8"  onChange={(e) => setWeight(e.target.value)}/>
          </div>
          <div className="flex justify-between my-4">
            <h1 className="">Brand</h1>
            <input type="text" className="border-2 rounded-md px-2  h-8"   onChange={(e) => setBrand(e.target.value)}/>
          </div>
          <div className="flex justify-between my-4">
            <h1 className="">MPN </h1>
            <input type="text" className="border-2 rounded-md px-2  h-8"   onChange={(e) => setMpn(e.target.value)}/>
          </div>
          <div className="flex justify-between my-4">
            <h1 className="">ISBN </h1>
            <input type="text" className="border-2 rounded-md px-2  h-8"  onChange={(e) => setIsbn(e.target.value)}/>
          </div>
        </div>
      </div>
      {/*Sales & Purchase Information */}
      <h1 className="font-semibold text-xl mt-2">
        Sales & Purchase Information{" "}
      </h1>
      <div className="flex justify-start ">
        <div className=" mt-1 w-[320px]">
          <div className="flex justify-between my-4">
            <h1 className="">Selling Price*</h1>
            <input type="text" className="border-2 rounded-md px-2  h-8"   onChange={(e) => setSellingPrice(e.target.value)}/>
          </div>
          <div className="flex justify-between my-4">
            <h1 className="">Account*</h1>
            <input type="text" className="border-2 rounded-md px-2  h-8"  onChange={(e) => setSalesAccount(e.target.value)}/>
          </div>
          <div className="flex justify-between my-4">
            <h1 className="">Description </h1>
            <input type="text" className="border-2 rounded-md px-2  h-8"  onChange={(e) => setSalesDescription(e.target.value)}/>
          </div>
        </div>
        <div className=" w-[320px] ml-20">
          <div className="flex justify-between my-4">
            <h1 className="">Cost Price*</h1>
            <input type="text" className="border-2 rounded-md px-2  h-8"   onChange={(e) => setCostPrice(e.target.value)}/>
          </div>
          <div className="flex justify-between my-4">
            <h1 className="">Account*</h1>
            <input type="text" className="border-2 rounded-md px-2  h-8"  onChange={(e) => setPurchaseAccount(e.target.value)}/>
          </div>
          <div className="flex justify-between my-4">
            <h1 className="">Description </h1>
            <input type="text" className="border-2 rounded-md px-2  h-8"  onChange={(e) => setPurchaseDescription(e.target.value)}/>
          </div>
          {/* <div className="flex justify-between my-4">
            <h1 className="">Preferred Vendor </h1>
            <input type="text" className="border-2 rounded-md px-2  h-8" />
          </div> */}
        </div>
      </div>
      {/* Track Inventory for this item
      <h1 className="font-semibold text-xl">Track Inventory for this item</h1>
      <div className="flex justify-start ">
        <div className=" mt-1 w-[320px]">
          <div className="flex justify-between my-4">
            <h1 className="">Inventory Account*</h1>
            <input type="text" className="border-2 rounded-md px-2  h-8" />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="">Opening Stock</h1>
            <input type="text" className="border-2 rounded-md px-2  h-8" />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="">Reorder Point </h1>
            <input type="text" className="border-2 rounded-md px-2  h-8" />
          </div>
        </div>
        <div className="mt-5 w-[320px] ml-20">
          <div className="flex justify-between my-4">
            <h1 className="">Opening Stock Rate per Unit</h1>
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
          onClick={() => navigate("/items")}
        >
          Cancel
        </button>
      </div>
    </section>
  );
}
