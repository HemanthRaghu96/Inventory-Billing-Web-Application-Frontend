import React, { useEffect, useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
import { API } from "../../../api/api";
import axios from "axios";
import VendorDropdown from "../../../components/VendorDropdown";

export default function Addbills() {
  const navigate = useNavigate();
  const [vendorname, setVendorName] = useState("");
  const [ordernumber, setOrderNumber] = useState("");
  const [bill, setBill] = useState("");
  const [billdate, setBilldate] = useState("");
  const [duedate, setDuedate] = useState("");
  const [items, setItems] = useState([]);
  const [totalamount, setTotalAmount] = useState("");
  const [payment, setPayment] = useState("");
  const [shipmentingcharges, setShipmentingCharges] = useState("");
  const [customernote, setCustomerNote] = useState("");
  const data=["UNPAID","PARTIALLY PAID","PAID"]
console.log(items)
  const handleSave = async () => {
    const billData = {
      vendorname,
      ordernumber,
      bill,
      billdate,
      duedate,
      payment,
      totalamount,
      items,
      shipmentingcharges,
      customernote,
    };
    try {
      const response = await axios.post(`${API}addbill`, billData);
      console.log(response.data); // handle response as needed
      navigate("/bills"); // navigate to sales orders page on successful save
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
    setTotalAmount(calculatedTotal+Number(shipmentingcharges));
  }, [items,shipmentingcharges]);
  return (
    <section className="ml-14 mt-16 md:ml-56 h-full overflow-y-auto">
      <div className="flex justify-between mr-5 md:mr-10 lg:mr-20">
        <h1 className="font-semibold text-xl">New Bill</h1>
        <Link to="/bills">
          <HiMiniXMark className="mr-1 size-7 text-red-500" />
        </Link>
      </div>
      {/* Sales Order Form */}
      <div className="flex justify-start">
        <div className="mt-5 w-[420px]">
          <div className="flex justify-between my-4">
            <h1>Vendor Name</h1>
            <VendorDropdown
              vendorname={vendorname}
              setVendorName={setVendorName}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1>Bill Number</h1>
            <input
              type="text"
              className="border-2 rounded-md px-2 h-8"
              onChange={(e) => setBill(e.target.value)}
              value={bill}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1> Order Number</h1>
            <input
              type="text"
              className="border-2 rounded-md px-2 h-8"
              onChange={(e) => setOrderNumber(e.target.value)}
              value={ordernumber}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1> Bill Date</h1>
            <input
              type="text"
              className="border-2 rounded-md px-2 h-8"
              onChange={(e) => setBilldate(e.target.value)}
              value={billdate}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1>Due Date</h1>
            <input
              type="text"
              className="border-2 rounded-md px-2 h-8"
              onChange={(e) => setDuedate(e.target.value)}
              value={duedate}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1>Payment Status</h1>
            <select
        value={payment}
        onChange={(e)=>setPayment(e.target.value)}
        className="border-2 rounded-md px-2 h-8 w-[200px]"
      >
        <option value="">Select a payment </option>
        {data.map((name,index) => (
          <option key={index}>
            {name}
          </option>
        ))}
      </select>
          </div>
        </div>
      </div>
      {/* Item Table */}
      <div className="my-4">
        <h1 className="font-semibold text-lg">Item Table</h1>
        <table className="w-full mt-4">
          <thead className="bg-gray-100">
            <tr >
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Discount</th>
              <th>Price</th>
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
                    className="border-2 rounded-md px-2 h-8 w-full"
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
                    className="border-2 rounded-md px-2 h-8 w-full"
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
                    className="border-2 rounded-md px-2 h-8 w-full"
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
                    className="border-2 rounded-md px-2 h-8 w-full"
                  />
                </td>
                <td>
                  <button
                    onClick={() => deleteItem(index)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                  >
                    Delete
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
<h1 className="font-semibold text-lg">Sub Total</h1>
<h1 className="flex">Shipping Charges <span><input type="text" className="border-2 rounded-md px-2 h-8 ml-10" onChange={(e)=>setShipmentingCharges(e.target.value)}/></span></h1>
<h1  className="flex mt-2 font-semibold">Total <span className="ml-32 font-semibold">{totalamount}</span></h1>


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
          onClick={() => navigate("/bills")}
        >
          Cancel
        </button>
      </div>
    </section>
  );
}
