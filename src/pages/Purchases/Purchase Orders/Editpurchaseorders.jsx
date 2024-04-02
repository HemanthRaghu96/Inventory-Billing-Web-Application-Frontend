import React, { useEffect, useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { Link, useNavigate, useParams } from "react-router-dom";
import { API } from "../../../api/api";
import axios from "axios";
import VendorDropdown from "../../../components/VendorDropdown";
import { MdDelete } from "react-icons/md";

export default function Editpurchaseorders() {
  const { purchaseordersId } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchSelecteData();
  }, []);
  
  const fetchSelecteData = async () => {
    const response = await axios.get(
      `${API}getselectedpurchaseorder/${purchaseordersId}`
    );
    console.log(response.data.selectedPurchaseorders[0]);
    setData(response.data.selectedPurchaseorders[0]);
  };
  return data ? (
    <Editpurchaseorder data={data} purchaseordersId={purchaseordersId} />
  ) : (
    "Loading..."
  );
}



export  function Editpurchaseorder({ data, purchaseordersId }) {
  const navigate = useNavigate();
  const [vendorname, setVendorName] = useState(data.vendorname);
  const [purchaseorder, setPurchaseOrder] = useState(data.purchaseorder);
  const [date, setDate] = useState(data.date);
  const [shipmentdate, setShipmentDate] = useState(data.shipmentdate);
  const [items, setItems] = useState(data.items || []);
  const [totalamount, setTotalamount] = useState("");
  const [shipmentingcharges, setShipmentingCharges] = useState(data.shipmentingcharges);
  const [customernote, setVendorNote] = useState(data.customernote);
console.log(items)
  const handleSave = async () => {
    const purchaseorderData = {
      vendorname,
      purchaseorder,
      date,
      shipmentdate,
      totalamount,
      items,
      shipmentingcharges,
      customernote,
    };
    try {
      const response = await axios.put(`${API}editpurchaseorder/${purchaseordersId}`, purchaseorderData);
      console.log(response.data); // handle response as needed
      navigate("/purchaseorders"); // navigate to sales orders page on successful save
    } catch (error) {
      console.error("Error adding sales order:", error);
      // Handle error state or display error message to the user
    }
  };
  const addItem = () => {
    const newItem = { name: "", quantity: 1, price: 0 };
    setItems([...items, newItem]);
  };
  const deleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };
  // Function to handle changes in item details
  const handleItemChange = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index][field] = value;
    setItems(updatedItems);
  };
  useEffect(() => {
    let calculatedTotal = 0;
    items.forEach((item) => {
      calculatedTotal += item.price;
    });
    setTotalamount(calculatedTotal+Number(shipmentingcharges));
  }, [items,shipmentingcharges]);
  return (
    <section className="ml-14 mt-16 md:ml-56 h-full overflow-y-auto">
      <div className="flex justify-between mr-5 md:mr-10 lg:mr-20">
        <h1 className="font-semibold md:text-xl">New Purchase Order</h1>
        <Link to="/sales-orders">
          <HiMiniXMark className="mr-1 size-7 text-red-500" />
        </Link>
      </div>
      {/* Purchase Order Form */}
      <div className="flex justify-start">
        <div className="mt-5 w-[230px] md:w-[350px]">
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">Vendor Name</h1>
            <VendorDropdown
              vendorname={vendorname}
              setVendorName={setVendorName}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">Purchase Order Number</h1>
            <input
              type="text"
              className="border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
              onChange={(e) => setPurchaseOrder(e.target.value)}
              value={purchaseorder}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">Purchase Order Date</h1>
            <input
              type="text"
              className="border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
              onChange={(e) => setDate(e.target.value)}
              value={date}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">Expected Shipment Date</h1>
            <input
              type="text"
              className="border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
              onChange={(e) => setShipmentDate(e.target.value)}
              value={shipmentdate}
            />
          </div>
        </div>
      </div>
      {/* Item Table */}
      <div className="my-4">
        <h1 className="font-semibold md:text-xl">Item Table</h1>
        <table className="w-full mt-4">
          <thead className="bg-gray-100">
            <tr >
              <th className="font-semibold text-xs md:text-lg">Item Name</th>
              <th className="font-semibold text-xs md:text-lg">Quantity</th>
              <th className="font-semibold text-xs md:text-lg">Discount</th>
              <th className="font-semibold text-xs md:text-lg">Price</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    value={item.name}
                    onChange={(e) =>
                      handleItemChange(index, "name", e.target.value)
                    }
                    className="border-2 rounded-md px-2 h-5 md:h-8 w-full text-xs md:text-base"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      handleItemChange(
                        index,
                        "quantity",
                        parseInt(e.target.value)
                      )
                    }
                    className="border-2 rounded-md px-2 h-5 md:h-8 w-full text-xs md:text-base"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={item.discount}
                    onChange={(e) =>
                      handleItemChange(
                        index,
                        "discount",
                        parseInt(e.target.value)
                      )
                    }
                    className="border-2 rounded-md px-2 h-5 md:h-8 w-full text-xs md:text-base"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={item.price}
                    onChange={(e) =>
                      handleItemChange(
                        index,
                        "price",
                        parseFloat(e.target.value)
                      )
                    }
                    className="border-2 rounded-md px-2 h-5 md:h-8 w-full text-xs md:text-base"
                  />
                </td>
                <td>
                  <button
                    onClick={() => deleteItem(index)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          className="mt-3 border rounded-lg bg-buttonColor text-white px-2 py-1 mr-3"
          onClick={addItem}
        >
          Add Item
        </button>
      </div>
<div className="">
<h1 className="font-semibold md:text-xl">Sub Total</h1>
<h1 className="flex text-xs md:text-base">Shipping Charges <span><input type="text" className="border-2 rounded-md px-2 h-5 md:h-8 ml-5 md:ml-10 w-[140px]" onChange={(e)=>setShipmentingCharges(e.target.value)} value={shipmentingcharges}/></span></h1>
<h1  className="flex mt-2 font-semibold">Total <span className="ml-32 font-semibold text-xs md:text-base">{totalamount}</span></h1>


</div>
      {/* Buttons for Save and Cancel */}
      <div className="flex my-4">
        <button
          className="border rounded-lg bg-buttonColor text-white px-2 py-1 mr-3"
          onClick={handleSave}
        >
          Save
        </button>
        <button
          className="border rounded-lg px-2 py-1"
          onClick={() => navigate(`/purchaseorders/${purchaseordersId}`)}
        >
          Cancel
        </button>
      </div>
    </section>
  );
}
