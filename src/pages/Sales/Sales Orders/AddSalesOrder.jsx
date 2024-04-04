import React, { useEffect, useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
import { API } from "../../../api/api";
import axios from "axios";
import CustomerDropdown from "../../../components/CustomerDropdown";
import { MdDelete } from "react-icons/md";
import ItemDropdown from "../../../components/ItemDropdown";

export default function AddSalesOrder() {
  const navigate = useNavigate();
  const [customername, setCustomerName] = useState("");
  const [salesorder, setSalesOrder] = useState("");
  const [date, setDate] = useState("");
  const [shipmentdate, setShipmentDate] = useState("");
  const [items, setItems] = useState([]);
  const [totalamount, setTotalAmount] = useState("");
  const [shipmentingcharges, setShipmentingCharges] = useState("");
  const [customernote, setCustomerNote] = useState("");
  // console.log(items);
  const handleSave = async () => {
    const salesorderData = {
      customername,
      salesorder,
      date,
      shipmentdate,
      totalamount,
      items,
      shipmentingcharges,
      customernote,
    };
    try {
      const response = await axios.post(`${API}addsalesorder`, salesorderData);
      console.log(response.data); // handle response as needed
      const updatedItemsPromises = items.map(async (item) => {
        const { itemId, quantity } = item;
        const itemDetails = await fetchItemDetails(itemId);
        const editedData = { unit: itemDetails.unit  };
        await axios.put(`${API}edititems/${itemId}`, editedData);
      });
      await Promise.all(updatedItemsPromises); 
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
  const fetchItemDetails = async (itemId) => {
    try {
      const response = await axios.get(`${API}getselecteditems/${itemId}`);
      console.log(response.data.selectedItems[0]);
      return response.data.selectedItems[0]; // Assuming the API returns item details in the response data
    } catch (error) {
      console.error("Error fetching item details:", error);
      throw error; // Propagate the error to the caller
    }
  };

  // Function to handle changes in item details
  const handleItemChange = async (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index][field] = value;

    // Handle changes related to the selected item (such as fetching details)
    if (field === "itemId" || field === "quantity") {
      try {
        const itemId = updatedItems[index].itemId; // Get the itemId from the item object
        const itemDetails = await fetchItemDetails(itemId);
        if (field === "itemId") {
          updatedItems[index] = {
            ...updatedItems[index],
            name: itemDetails.name,
            quantity: 1, // Update quantity based on fetched details
            price: itemDetails.sellingprice, // Update price based on fetched details
          };
        } else if (field === "quantity") {
          const totalPrice = itemDetails.sellingprice * value;
          updatedItems[index] = {
            ...updatedItems[index],
            price: totalPrice.toFixed(2), // Update price based on quantity and fetched details
          }; 
        }

        setItems(updatedItems);
      } catch (error) {
        console.error("Error fetching item details:", error);
        // Handle error or display a message to the user
      }
    }
  };

  useEffect(() => {
    let calculatedTotal = 0;
    items.forEach((item) => {
      calculatedTotal += parseFloat(item.price); // Convert item.price to float
    });
    // Assuming shipmentingcharges is already a number, no need for Number()
    setTotalAmount((calculatedTotal + Number(shipmentingcharges)).toFixed(2));
  }, [items, shipmentingcharges]);

  return (
    <section className="ml-14 mt-16 md:ml-56 h-full overflow-y-auto">
      <div className="flex justify-between mr-5 md:mr-10 lg:mr-20">
        <h1 className="font-semibold md:text-xl">New Sales Order</h1>
        <Link to="/salesorders">
          <HiMiniXMark className="mr-1 size-7 text-red-500" />
        </Link>
      </div>
      {/* Sales Order Form */}
      <div className="flex justify-start">
        <div className="mt-5 w-[280px]">
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">Customer Name</h1>
            <CustomerDropdown
              customername={customername}
              setCustomerName={setCustomerName}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">Sales Order Number</h1>
            <input
              type="text"
              className="border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
              onChange={(e) => setSalesOrder(e.target.value)}
              value={salesorder}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">Sales Order Date</h1>
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
        <h1 className="font-semibold md:text-lg">Item Table</h1>
        <table className="w-full mt-4">
          <thead className="bg-gray-100">
            <tr>
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
                  <ItemDropdown
                    selectedItemId={item.itemId} // Pass the selected item's ID to the dropdown
                    handleItemChange={(selectedItemId) =>
                      handleItemChange(index, "itemId", selectedItemId)
                    } // Handle item selection change
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
        <h1 className="font-semibold md:text-lg">Sub Total</h1>
        <h1 className="flex text-xs md:text-base">
          Shipping Charges{" "}
          <span>
            <input
              type="text"
              className="border-2 rounded-md px-2 h-5 md:h-8 ml-5 md:ml-10 w-[140px]"
              onChange={(e) => setShipmentingCharges(e.target.value)}
            />
          </span>
        </h1>
        <h1 className="flex mt-2 font-semibold">
          Total{" "}
          <span className="ml-32 font-semibold text-xs md:text-base">
            {totalamount}
          </span>
        </h1>
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
