import React, { useEffect, useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
import { API } from "../../../api/api";
import axios from "axios";
import CustomerDropdown from "../../../components/CustomerDropdown";

export default function AddSalesOrder() {
  const navigate = useNavigate();
  const [customername, setCustomerName] = useState("");
  const [salesorder, setSalesOrder] = useState("");
  const [date, setDate] = useState("");
  const [shipmentdate, setShipmentDate] = useState("");
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState("");
  const [shippingcharges, setShippingCharges] = useState("");
  const [customernote, setCustomerNote] = useState("");
console.log(items)
  const handleSave = async () => {
    const salesorderData = {
      customername,
      salesorder,
      date,
      shipmentdate,
      items,
      shippingcharges,
      customernote,
    };
    try {
      const response = await axios.post(`${API}addsalesorder`, salesorderData);
      console.log(response.data); // handle response as needed
      navigate("/salesorders"); // navigate to sales orders page on successful save
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
    setTotal(calculatedTotal);
  }, [items]);
  return (
    <section className="ml-14 mt-16 md:ml-56 h-full overflow-y-auto">
      <div className="flex justify-between mr-5 md:mr-10 lg:mr-20">
        <h1 className="font-semibold text-xl">New Sales Order</h1>
        <Link to="/salesorders">
          <HiMiniXMark className="mr-1 size-7 text-red-500" />
        </Link>
      </div>
      {/* Sales Order Form */}
      <div className="flex justify-start">
        <div className="mt-5 w-[420px]">
          <div className="flex justify-between my-4">
            <h1>Customer Name</h1>
            <CustomerDropdown
              customername={customername}
              setCustomerName={setCustomerName}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1>Sales Order Number</h1>
            <input
              type="text"
              className="border-2 rounded-md px-2 h-8"
              onChange={(e) => setSalesOrder(e.target.value)}
              value={salesorder}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1>Sales Order Date</h1>
            <input
              type="text"
              className="border-2 rounded-md px-2 h-8"
              onChange={(e) => setDate(e.target.value)}
              value={date}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1>Expected Shipment Date</h1>
            <input
              type="text"
              className="border-2 rounded-md px-2 h-8"
              onChange={(e) => setShipmentDate(e.target.value)}
              value={shipmentdate}
            />
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
<h1 className="flex">Shipping Charges <span><input type="text" className="border-2 rounded-md px-2 h-8 ml-10" onChange={(e)=>setShippingCharges(e.target.value)}/></span></h1>
<h1  className="flex mt-2 font-semibold">Total <span className="ml-32 font-semibold">{total-shippingcharges}</span></h1>


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
          onClick={() => navigate("/salesorders")}
        >
          Cancel
        </button>
      </div>
    </section>
  );
}
