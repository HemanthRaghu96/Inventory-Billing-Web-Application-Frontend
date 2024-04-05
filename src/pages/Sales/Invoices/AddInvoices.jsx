import React, { useEffect, useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
import { API } from "../../../api/api";
import axios from "axios";
import CustomerDropdown from "../../../components/CustomerDropdown";
import { MdDelete } from "react-icons/md";
import SalesOrderDropdown from "../../../components/SalesOrderDropdown";
import { useSidebar } from "../../../components/SidebarContext";

export default function AddInvoices() {
  const navigate = useNavigate();
  const { open, setOpen } = useSidebar();
  const [error, setError] = useState(false);
  const [customername, setCustomerName] = useState("");
  const [ordernumber, setOrderNumber] = useState("");
  const [invoice, setInvoice] = useState("");
  const [invoicedate, setInvoicedate] = useState("");
  const [duedate, setDuedate] = useState("");
  const [items, setItems] = useState([]);
  const [totalamount, setTotalAmount] = useState("");
  const [payment, setPayment] = useState("");
  const [shipmentingcharges, setShipmentingCharges] = useState("");
  const [customernote, setCustomerNote] = useState("");
  const data = ["UNPAID", "PARTIALLY PAID", "PAID"];
  const handleSave = async () => {
    const invoiceData = {
      customername,
      ordernumber,
      invoice,
      invoicedate,
      duedate,
      payment,
      totalamount,
      items,
      shipmentingcharges,
      customernote,
    };
    try {
      const response = await axios.post(`${API}addinvoice`, invoiceData);
      setError(false);
      // console.log(response.data); // handle response as needed
      navigate("/invoices"); // navigate to sales orders page on successful save
    } catch (error) {
      console.error("Error adding sales order:", error);
      setError(true);
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
    setTotalAmount(calculatedTotal + Number(shipmentingcharges));
  }, [items, shipmentingcharges]);
  return (
    <section className={open?"ml-16 mt-16  h-full overflow-y-auto":"ml-14 mt-16 md:ml-56 h-full overflow-y-auto"}>

      <div className="flex justify-between mr-5 md:mr-10 lg:mr-20">
        <h1 className="font-semibold text-xl">New Invoice</h1>
        <Link to="/invoices">
          <HiMiniXMark className="mr-1 size-7 text-red-500" />
        </Link>
      </div>
      {/* Sales Order Form */}
      <div className="flex justify-start">
        <div className="mt-5 w-[250px] md:w-[400px]">
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">Invoice Number*</h1>
            <input
              type="text"
              className="border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
              onChange={(e) => setInvoice(e.target.value)}
              value={invoice}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">Sales Order Number*</h1>
            <SalesOrderDropdown
              ordernumber={ordernumber}
              setOrderNumber={setOrderNumber}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base"> Invoice Date*</h1>
            <input
              type="text"
              className="border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
              onChange={(e) => setInvoicedate(e.target.value)}
              value={invoicedate}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">Due Date</h1>
            <input
              type="text"
              className="border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
              onChange={(e) => setDuedate(e.target.value)}
              value={duedate}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">Payment Status*</h1>
            <select
              value={payment}
              onChange={(e) => setPayment(e.target.value)}
              className="border-2 rounded-md px-2 h-5 md:h-8 w-[140px] md:w-[200px] text-xs md:text-base"
            >
              <option value="">Select a payment </option>
              {data.map((name, index) => (
                <option key={index}>{name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      {error?<div className="flex my-4"><h1 className="text-xs md:text-base text-red-500">Kindly fill all the mandatory (*) fields </h1></div>:""}
     
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
          onClick={() => navigate("/invoices")}
        >
          Cancel
        </button>
      </div>
    </section>
  );
}
